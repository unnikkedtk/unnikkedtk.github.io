---
title: Migliorare la sicurezza di accesso ad un VPS
author: unnikked
layout: post
permalink: /migliorare-sicurezza-accesso-vps/
dsq_thread_id:
  - 2937439719
categories:
  - Linux
  - SysAdmin
tags:
  - SSH
  - VPS
---

Quando mettiamo per la prima volta le mani su un nuovo server è necessario garantire sempre alcune precauzioni di sicurezza, specialmente se il server è esposto sulla rete pubblica.

Vedremo come prendere le giuste precauzioni iniziali. 

Diversi fornitori di hosting/server forniscono accesso basato su password per l&#8217;utente `root` (o occasionalmente un utente `sudo` il cui non necessita di password per eseguire comandi come `root`). L&#8217;utente `root` può eseguire qualsiasi comando, per questo motivo vogliamo che gli sia negata la possibilità di accedere alla macchina da remoto. 

Quindi abbiamo bisogno di creare un altro utente con cui accedervi. Questo utente dovrà avere anche la possibilità di eseguire comandi utilizzando gli stessi privilegi di `root`. 

Eseguiremo i seguenti passi per bloccare l&#8217;accesso remoto verso i nostri server: 

  1. Creare un nuovo utente
  2. Permettergli di utilizzare &#8220;sudo&#8221;
  3. Bloccare l&#8217;utente root per l&#8217;accesso remoto

Ciò non permetterà all&#8217;utente *&#8220;root&#8221;* di collegarsi da remoto e permettere al nuovo utente di collegarsi. Egli avrà bisogno di una password per eseguire qualsiasi comando privilegiato.

Successivamente eseguiremo un ulteriore passo. Non permetteremo agli utenti di collegarsi tramite una password, utilizzeremo invece le chiavi `SSH` : 

  1. Creare una chiave SSH sulla macchina locale
  2. Disabilitare l&#8217;autenticazione basata su password al nostro server


## Creare un nuovo utente</h3> 

Per prima cosa abbiamo bisogno di accedere al server con le credenziali che il provider ci ha fornito. Per la maggior parte è:

<pre class="lang:sh decode:true " >ssh root@server-ip</pre>

Una volta effettuato l&#8217;accesso creiamo un nuovo utente:

<pre class="lang:default decode:true " >adduser username</pre>

Ci verranno chieste alcune informazioni, la più importante è la password.

Ora dobbiamo far si che questo nuovo utente (`username`) diventi un utente `sudo`. Cioè permetteremo all&#8217;utente appena creato di usare il comando *&#8220;sudo&#8221;* per eseguire i comandi in qualità di superutente (`root`). In Ubuntu si può semplicemente aggiungere l&#8217;utente nel gruppo *&#8220;sudo&#8221;*. 

<pre class="lang:sh decode:true " >usermod -G sudo username</pre>

  * `-G sudo` &#8211; assegna il gruppo *&#8220;sudo&#8221;* come gruppo secondario
  * `username` &#8211; l&#8217;utente a cui assegnare il gruppo

Apriamo il file `sudoers.tmp` con

<pre class="lang:sh decode:true " >vim /etc/sudoers</pre>

e aggiungiamo sotto la linea

<pre class="lang:sh decode:true " >#User privilege specification 
root ALL=(ALL:ALL)ALL
</pre>

questa direttiva

<pre class="lang:sh decode:true " >username ALL=(ALL:ALL)ALL</pre>

Salviamo il file ed usciamo dall&#8217;editor di testo.

Ora che abbiamo configurato il nuovo utente vogliamo far si che l&#8217;utente *&#8220;root&#8221;* non possa più collegarsi da remoto.

Per far ciò abbiamo bisogno di modificare il file `/etc/ssh/sshd_config`.

<pre class="lang:sh decode:true " >vim /etc/ssh/sshd_config</pre>

Una volta aperto troviamo la direttiva `PermitRootLogin` e impostiamolo su `no`

<pre class="lang:sh decode:true " >PermitRootLogin no</pre>

E&#8217; consigliato anche cambiare la porta di default *(22)* `SSH`. Questo perché esistono nella rete una miriade di bot automatici che la scannerizzano alla ricerca di una porta `22` aperta per attaccare. 

E&#8217; permesso l&#8217;uso di porte che vanno da `1025` a `65536`. Per effettuare questa modifica bisogna cambiare la direttiva `Port`

<pre class="lang:sh decode:true " >Port 1234</pre>

Se vogliamo aggiungere ancora più sicurezza, possiamo definire esplicitamente una lista di utenti abilitati all&#8217;accesso tramite la direttiva `AllowUsers`

<pre class="lang:sh decode:true " >AllowUsers unusername unaltrousername</pre>

Una volta modificato il file `/etc/ssh/sshd_config` abbiamo bisogno di riavviare il demone `SSH`.

<pre class="lang:sh decode:true " >service ssh restart</pre>

Prima di chiudere la sessione corrente come `root`, è consigliato aprire un nuovo terminale e provare ad autenticarsi con il nuovo utente

<pre class="lang:sh decode:true " ># Se non hai cambiato porta
ssh username@server-ip

# Se hai cambiato la porta di default
ssh -p 1234 username@yserver-ip</pre>

## Accesso tramite chiavi SSH

Possiamo ancora rendere più sicuro l&#8217;accesso ad un `VPS` disabilitando l&#8217;inserimento della password per gli utenti. Ciò significa che gli utenti possono solo effettuare l&#8217;accesso tramite una chiave `SSH` valida. 

Sul computer locale eseguiamo il seguente comando per generare una nuova coppia di chiavi `SSH` (una privata e una pubblica):

<pre class="lang:sh decode:true " >cd ~/.ssh
ssh-keygen -t rsa -b 4096 -C tua@email.com -f id_identitaserver</pre>

  * `-t rsa` &#8211; crea le chiavi RSA
  * `-b 4096` &#8211; usa 4096 bit.
  * `-C tua@email.com` &#8211; le chiavi possono avere commenti. Spesso l&#8217;identità di un utente va qui come la sua casella email
  * `-f id_identitaserver` &#8211; il nome dei file creati (id\_identitaserver e id\_identitaserver.pub in questo caso)
    
Verrà chiesta una password. Si può lasciare questo campo vuoto (per accesso senza password) o inserire una password. E&#8217; consigliato usarne una dal momento che renderà la vita difficile agli attaccanti, avranno bisogno sia della chiave privata e sia la password `SSH` per poter accedere. 
    
Bisogna notare che la password `SSH` creata non è la password dell&#8217;utente per utilizzare comandi sudo sul server.
    
Ora abbiamo creato una chiave privata (`id_identitaserver`) e una chiave pubblica (`id_identitaserver.pub`). 
    
Abbiamo bisogno di inserire la chiave pubblica sul server, in questo modo il server conosce che è una chiave autorizzata per essere utilizzata per l&#8217;accesso. 
    
Copiamo il contenuto della chiave pubblica nel file `authorized_keys` presente nel server:
  
<pre class="lang:sh decode:true " >cat ~/.ssh/id_rsa.pub | ssh username@ipserver "mkdir -p ~/.ssh && cat &gt;&gt; ~/.ssh/authorized_keys"</pre>
    
Una volta importata la chiave, dovremmo essere in grado di accedere utilizzandla. 
    
Non è necessario fare niente, durante la fase di accesso il client SSH dovrebbe tentare di accedere tramite le chiavi per prima e, trovandone una, accedere tramite essa.
    
Sarà necessario inserire la password creata durante la generazione delle chiavi `SSH`, se abbiamo scelto di utilizzare una password. 
    
E&#8217; consigliabile cambiare i <a href="permessi-file-chmod" title="Come impostare i permessi ai file con “chmod”" target="_blank">permessi</a> della cartella `.ssh` e del file `authorized_keys`.
    
<pre class="lang:sh decode:true " >chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys</pre>
    
L&#8217;ultimo passo da effettuare è di dire al server di accettare solo accessi remoti tramite chiavi `SSH` (disabilitando la possibilità di accesso tramite password). 
    
Modificheremo il file `/etc/ssh/sshd_config`
    
<pre class="lang:sh decode:true " >vim /etc/ssh/sshd_config</pre>
    
Una volta dentro, troviamo o creiamo la direttiva `PasswordAuthentication` e impostiamola su `"no"`
    
<pre class="lang:sh decode:true " >PasswordAuthentication no</pre>
    
Salviamo il file e riavviamo il demone `SSH`: 
    
<pre class="lang:sh decode:true " >sudo service ssh restart</pre>

E&#8217; consigliabile testare che le modifiche funzionino correttamente prima di uscire dalla sessione `SSH` corrente. 