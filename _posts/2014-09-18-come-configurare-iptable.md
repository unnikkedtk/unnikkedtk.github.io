---
title: Come configurare iptable
author: unnikked
layout: post
permalink: /come-configurare-iptable/
dsq_thread_id:
  - 3030539879
categories:
  - Linux
  - SysAdmin
  - Ubuntu
tags:
  - VPS
---

Il firewall di linux offre alcune protezioni base per il server. Sfortunatamente, iptable è il firewall standard ed è un po&#8217; difficile da usare.

Essenzialmente, iptable è una lista di regole che sono controllate ogni qualvolta un pacchetto di dati entra o lascia il server sulla rete. Se il traffico è permesso, passa altrimenti viene bloccato.

Ecco una lista base di regole che costruiremo. E&#8217; una specie di output che deriva dal comando:

    sudo iptables -L -v

che mostra le regole con qualche verbosità.

Il seguente risultato è per il traffico in entrata:

    target     prot opt in     out     source      destination
    ACCEPT     all  --  lo     any     anywhere    anywhere
    ACCEPT     all  --  any    any     anywhere    anywhere      ctstate RELATED,ESTABLISHED
    ACCEPT     tcp  --  any    any     anywhere    anywhere      tcp dpt:ssh
    ACCEPT     tcp  --  any    any     anywhere    anywhere      tcp dpt:http
    ACCEPT     tcp  --  any    any     anywhere    anywhere      tcp dpt:https
    DROP       all  --  any    any     anywhere    anywhere

Queste regole sono seguite in ordine, così la prima corrispondenza per gestire il traffico determinerà cosa succederà ai dati che stanno per essere controllati.

Esaminiamo la lista delle regole che abbiamo per il traffico in entrata, in ordine di apparizione:

  1. Accetta tutto il traffico su &#8220;lo&#8221;, l&#8217;interfaccia loopback. Questo corrisponde a dire &#8220;Permetti tutto il traffico interno&#8221;.
  2. Accetta tutto il traffico dalle connessioni stabilite correntemente e relative (così non si viene automaticamente bloccati dal server quando si modificano le regole del firewall)
  3. Accetta il traffico TCP sulla porta 22 (iptable la etichetta &#8220;ssh&#8221; di default), se hai cambiato <a title="Come cambiare la porta di connessione di SSH" href="cambiare-porta-connessione-ssh" target="_blank">la porta di default SSH</a>, questa regola dovrebbe avere il numero della nuova porta invece.
  4. Accetta il traffico TCP sulla porta 80 (per iptable è &#8220;http&#8221; di default)
  5. Accetta il traffico TCP sulla porta 443 (per iptable è &#8220;https&#8221; di default)
  6. Rifiuta qualsiasi cosa altrimenti.

Se un pacchetto ha passato tutte le regole senza soddisfarne alcuna, incontrerà l&#8217;ultima regola e verrà scartato. Queste regole significano che viene permesso il traffico delle connessioni correnti, SSH, HTTP e HTTPS, ogni altra cosa viene scartata.

> La prima regola che corrisponde al tipo di traffico (protocollo, interfaccia, sorgente/destinazione, e altri tipi) deciderà come gestire il traffico. Le regole successive alla corrispondenza non verranno applicate
> 
> Se più di una regola corrisponde al tipo di traffico allora la seconda regola non verrà mai raggiunta.

Quindi, abbiamo effettivamente isolato il nostro server dalle connessioni esterne tranne per quelle che arrivano da SSH, HTTP o HTTPS.

<!--nextpage-->

## Aggiungere le regole

Ora abbiamo bisogno di sapere come aggiungere queste regole. Si possono controllare le regole in uso eseguendo il comando:

<pre class="lang:default decode:true ">sudo iptables -L -v</pre>

Verrà mostrato qualcosa del genere:

    Chain INPUT (policy ACCEPT 35600 packets, 3504K bytes)
     pkts bytes target     prot opt in     out     source    destination
    
    Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
     pkts bytes target     prot opt in     out     source    destination
    
    Chain OUTPUT (policy ACCEPT 35477 packets, 3468K bytes)
     pkts bytes target     prot opt in     out     source    destination

Quello che vediamo sono tre catene di default del tabella dei filtri:

  1. Politica di INPUT &#8211; Il traffico in entrata al server
  2. Politica di FORWARD &#8211; Il traffico inoltrato (instradato) verso altre locazioni.
  3. Politica di OUTPUT &#8211; Il traffico in uscita dal server

Aggiungiamo alla nostra catena di regole aggiungendo alla catena di INPUT. Per prima cosa aggiungiamo una regola per permettere tutto il traffico su <a title="Interfaccia di loopback - Wikipedia" href="http://it.wikipedia.org/wiki/Interfaccia_di_loopback" target="_blank">loopback</a>

    sudo iptables -A INPUT -i lo -j ACCEPT

  * **-A INPUT** &#8211; Aggiunge alla catena INPUT
  * **-i lo** &#8211; Applica la regola all&#8217;interfaccia loopback
  * **-j ACCEPT** &#8211; fa saltare il pacchetto alla regola ACCEPT. Praticamente, accetta i pacchetti dati. &#8220;ACCEPT&#8221; è un target interno, ma è possibile saltare a target definiti dall&#8217;utente.

Ora aggiungiamo la regola per accettare le connessioni già stabilite:

<pre class="lang:default decode:true ">sudo iptable -A INPUT -m conntrack --ctstate RELATED, ESTABLISHED -j ACCEPT</pre>

  * **-A INPUT** &#8211; Aggiunge alla catena di INPUT
  * **-m conntrack** &#8211; Controlla il traffico utilizzando il modulo &#8220;connection tracking&#8221;
  * **&#8211;ctstate RELATED, ESTABLISHED** &#8211; Controlla il traffico con lo stato &#8220;stabilito&#8221; e &#8220;relativo&#8221;
  * **-j ACCEPT** &#8211; Usa il target ACCEPT; accetta il traffico

Aggiungiamo ora qualche altra regola. Inizieremo con l&#8217;aprire la porta SSH per l&#8217;accesso remoto:

    sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

  * **-A INOUT** &#8211; Aggiunge alla catena INPUT
  * **-p tcp** &#8211; Viene applicato al protocollo TCP
  * **&#8211;dport 22** &#8211; Viene applicato alla porta di destinazione
  * **-j ACCEPT** &#8211; Usa il target ACCEPT; accetta il traffico

Se controlliamo le regole dopo questa modifica con un&#8217;altra chiamata a `sudo iptables -L -v`, vedremo che &#8220;22&#8221; è etichettata come SSH. Se non viene usata la porta 22 per SSH, allora si vedrà il numero della porta nel listato.

Possiamo aggiungere una regola simile per il traffico HTTP:

    sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT

E per la regola finale, aggiungeremo una regola &#8220;acchiappa tutto&#8221; per ingnorare (DROP) qualsiasi pacchetto che è arrivato alla fine della catena di regole:

    sudo iptables -A INPUT -j DROP

  * **-A INPUT** &#8211; Aggiunge alla catena INPUT
  * **-j DROP** &#8211; Usa il target DROP; vieta il traffico

## Inserire le regole

Abbiamo visto come aggiungere le regole (alla fine della catena). Ora vediamo come inserire le regole, in questo modo possiamo aggiungere le regole in una catena esistente di regole.

Non abbiamo ancora aggiunto la regola per permettere il traffico HTTPS (porta 443):

    sudo iptables -I INPUT 5 -p tcp --dport 443 -j ACCEPT

  * **-I INPUT 5** &#8211; Inserisci nella catena INPUT alla quinta posizione, giusto dopo la regola &#8220;http&#8221;, la quale è nella quarta posizione. (Le posizioni iniziano da 1)
  * **-p tcp** &#8211; Applica la regola al protocollo tcp
  * **-dport 443** &#8211; Applica alla porta di destinazione 443 (Il traffico che proviene dalla porta 443).
  * **-j ACCEPT** &#8211; Usa il target ACCEPT; accetta il traffico

## Eliminare le regole

Assumiamo di voler cambiare la porta SSH. L&#8217;abbiamo impostata nel file `/etc/ssh/sshd_config`.  
Abbiamo bisogno di cambiare le regole del firewall per permettere il traffico SSH dalla porta 22 alla porta che abbiamo specificato (per esempio 1234).

Per primo, eliminiamo la regola SSH (in due modi):

    # Elimina la regola in posizione 3
    sudo iptables -D INPUT 3
    
    # Elimina la regola per estensione
    sudo iptables -D INPUT -p tcp --dport 22 -j ACCEPT

Possiamo notare che -D eliminerà la regola dal firewall.

Successivamente possiamo inserire la nuova regola SSH alla porta 1234:

    sudo iptables -I INPUT 3 -p tcp --dport 1234 -j ACCEPT

Ora controlliamo le modifiche apportate:

    $ sudo iptables -L -v
    
    Chain INPUT (policy ACCEPT 0 packets, 0 bytes)
    pkts bytes target  prot opt in     out     source      destination
    3226  315K ACCEPT  all  --  lo     any     anywhere    anywhere
    712 37380 ACCEPT   all  --  any    any     anywhere    anywhere      ctstate RELATED,ESTABLISHED
    0     0 ACCEPT     tcp  --  any    any     anywhere    anywhere      tcp dpt:ssh
    0     0 ACCEPT     tcp  --  any    any     anywhere    anywhere      tcp dpt:http
    0     0 ACCEPT     tcp  --  any    any     anywhere    anywhere      tcp dpt:https
    8  2176 DROP       all  --  any    any     anywhere    anywhere

<!--nextpage-->

## Salvare le regole

Di default, iptable non salva le regole del firewall dopo il riavvio del sistema. Dobbiamo quindi salvare le regole e riapplicarle al reboot.

Il comando mostrerà le regole che abbiamo creato

    sudo iptables-save

E possiamo ripristinare le regole di un salvataggio precedente utilizzando il comando`iptables-restore`:

    # Output verso il file "iptables-backup.rules"
    sudo iptables-save > iptables-backup.rules
    
    # Ripristino delle regole
    sudo iptables-restore < iptables-backup.rules
    

Possiamo salvare le nostre regole e riapplicarle al riavvio, ma automatizziamo il processo.

Su Ubuntu, possiamo usare il pacchetto `iptables-persistent`

    # Installa il servizio
    sudo apt-get install -y iptables-persistent
    
    # Avvia il servizio
    sudo service iptables-persistent start

Una volta installato, possiamo salvare le regole in un file che `iptables-persistent` legge quando si avvia (o quando iptables-persistent viene avviato/riavviato).

    $ sudo iptables-save | sudo tee /etc/iptables/rules.v4

Quando abbiamo applicato le regole, riavviamo `iptables-persistent`

    $ sudo service iptables-persistent restart

E queste sono le regole basi per mettere in sicurezza il vostro server!
