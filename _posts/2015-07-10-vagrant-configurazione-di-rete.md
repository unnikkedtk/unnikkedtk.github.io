---
title: 'Vagrant &#8211; configurazione di rete'
author: unnikked
layout: post
permalink: /vagrant-configurazione-di-rete/
dsq_thread_id:
  - 3927025006
categories:
  - SysAdmin
tags:
  - vagrant
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Abbiamo visto come Vagrant sia uno strumento valido per la <a href="gestire-macchine-virtuali-vagrant" target="_blank">gestione</a> di macchine virtuali, abbiamo visto come, attraverso un semplice script bash, sia possibile effettuare il <a href="https://unnikked.tk/vagrant-shell-provisioning/" target="_blank">provisioning</a> di una box. 

In questo articolo vedremo come gestire il lato networking tramite il `Vagrantfile`.

Vagrant offre diverse opzioni per la connessione di una macchina virtuale alla rete. Tutte le reti sono configurate nel file `Vagrantfile`, già discusso nei precedenti articoli, utilizzando la chiamata a metodo `config.vm.network`. 

Per esempio la definizione di un inoltro di porta è definito come:

<pre class="lang:ruby decode:true " >Vagrant.configure("2") do |config|
  # other config here

  config.vm.network "forwarded_port", guest: 80, host: 8080
end</pre>

Ogni tipologia di rete ha un identificatore come `:forwarded_port` visto nell&#8217;esempio, a seguire una serie di argomenti che possono differire in base alla tipologia di rete. Nel caso inoltro porte sono richiesti due argomenti: la porta del sistema ospite seguito dalla porta della macchina locale. 

E&#8217; possibile definire anche più reti effettuando più chiamate `config.vm.network` dentro il file `Vagrantfile`.

Il significato può variare in base al `provider` specificato, ma in genere l&#8217;ordine specifica l&#8217;ordine in cui le reti vengono abilitate.

Le reti vengono automaticamente configurate e abilitate dopo essere state definite nel `Vagrantfile` durante le fasi `vagrant up` o `vagrant reload`.

## Inoltro porte

L&#8217;inoltro delle porte facilitano l&#8217;accesso di una porta sulla macchina locale e inoltrare tutto il traffico verso una porta definita sul sistema ospite, sia **TCP** che **UDP**.

Per esempio: se la macchina ospite sta eseguendo un server web che resta in ascolto sulla porta `80` è possibile associare tale porta ad una porta arbitraria sulla macchina locale. Aprendo il browser su `localhost:8080` verrà mostrato il sito web configurato sulla macchina virtuale. 

### Definire l&#8217;inoltro di una porta

La configurazione per un inoltro porta richiede due parametri, la porta per il sistema ospite e la porta per la macchina locale. 

<pre class="lang:ruby decode:true " >Vagrant.configure("2") do |config|
  config.vm.network "forwarded_port", guest: 80, host: 8080
end</pre>

Ciò permetterà di accedere la porta `80` sul sistema ospite tramite la porta `8080` della macchina locale.

Altri parametri supportati sono:

  * `guest` (intero) &#8211; La porta sul sistema ospite da esporre sulla macchina locale.
  * `guest_ip` (stringa) &#8211; L&#8217;indirizzo IP del sistema ospite da legare alla porta. Se non specificato la porta sarà legata ad ogni interfaccia di rete. Di default è vuoto.
  * `host` (intero) &#8211; La porta sul sistema locale da usare per accedere alla porta sul sistema ospite. Deve essere un numero più grande di `1024` a meno che Vagrant non sia eseguito con i privilegi da amministratore. 
  * `host_ip` (stringa) &#8211; L&#8217;indirizzo IP del sistema locale da legare alla porta inoltrata. Se non specificato verrà legato ad ogni IP. Di default è vuoto.
  * `protocol` (stringa) &#8211; **UDP** o **TCP**. Specifica il protocollo associato alla porta inoltrata. Di default è **TCP**.

Di default ogni porta definita inoltrerà solo traffico **TCP**. Attraverso la direttiva `protocol:'udp'` è possibile abilitare il traffico **UDP**. Se una data porta necessita di ascoltare sulla stessa porta entrambi i protocollo, è necessario definire la porta due volte specificando il protocollo.

<pre class="lang:ruby decode:true " >Vagrant.configure("2") do |config|
  config.vm.network "forwarded_port", guest: 2003, host: 12003, protocol: 'tcp'
  config.vm.network "forwarded_port", guest: 2003, host: 12003, protocol: 'udp'
end</pre>

### Correggere le collisioni

Durante l&#8217;esecuzione di più macchine Vagrant è comune creare involontariamente definizioni di inoltro porte che collidono (due istanze che inoltrano alla porta 8080, per esempio). Vagrant include un meccanismo per catturare e correggere le collisioni automaticamente. 

La correzione automatica delle collisioni deve essere manualmente abilitata per ogni porta inoltrata. 

<pre class="lang:ruby decode:true " >Vagrant.configure("2") do |config|
  config.vm.network "forwarded_port", guest: 80, host: 8080,
    auto_correct: true
end</pre>

Il parametro `:auto_correct` impostato a `true` indica a Vagrant di correggere automaticamente qualsiasi collisione.

Durante `vagrant up` o `vagrant reload`, Vagrant mostrerà le informazioni su eventuali collisioni catturate e correzioni eseguite. 

## Reti private

Le reti private permettono l&#8217;accesso alla macchina ospita usando indirizzi che non sono accessibili da Internet. 

Più macchine dentro la stessa rete privata possono comunicare tra loro. 

### DHCP

Il modo più veloce per usare una rete privata è di assegnare l&#8217;IP tramite <a href="http://it.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol" target="_blank">DHCP</a>.

<pre class="lang:ruby decode:true " >Vagrant.configure("2") do |config|
  config.vm.network "private_network", type: "dhcp"
end</pre>

Verrà assegnato automaticamente un indirizzo IP dallo spazio indirizzi riservato. L&#8217;indirizzo IP può essere determinato usando `vagrant ssh` per accedere alla macchina virtuale e usare il comando `ifconfig` (per sistemi GNU/Linux). 

### IP statico

E&#8217; possibile specificare anche un indirizzo IP statico per la macchina.

<pre class="lang:ruby decode:true " >Vagrant.configure("2") do |config|
  config.vm.network "private_network", ip: "192.168.50.4"
end</pre>

E&#8217; compito dell&#8217;utente scegliere l&#8217;indirizzo IP. 

### Disabilitare la configurazione automatica

Se si ha la necessità di configurare l&#8217;interfaccia di rete manualmente è possibile disabilitare tale caratteristica specificando `auto_config`:

<pre class="lang:ruby decode:true " >Vagrant.configure("2") do |config|
  config.vm.network "private_network", ip: "192.168.50.4",
    auto_config: false
end</pre>

## Reti pubbliche

Il significato di una rete pubblica varia in base al `provider` scelto. L&#8217;idea è che mentre le reti private non devono mai permettere l&#8217;accesso pubblico alla macchina, le reti pubbliche lo permettono.

### DHCP

Il modo più facile per usare una rete pubblica è di permettere l&#8217;assegnazione dell&#8217;IP tramite DHCP. 

<pre class="lang:ruby decode:true " >Vagrant.configure("2") do |config|
  config.vm.network "public_network"
end</pre>

### IP statico

In base alla configurazione effettuata è possibile assegnare l&#8217;indirizzo IP manualmente alla interfaccia `bridged`. Viene usata la clausola `:ip` alla definizione di rete.

<pre class="lang:ruby decode:true " >config.vm.network "public_network", ip: "192.168.0.17"</pre>

### Interfaccia di rete di default

Se è presente più di una interfaccia di rete, Vagrant richiede la scelta di una interfaccia di rete di default.

Viene specificato usando la clausola `:bridge` alla definizione di rete. 

<pre class="lang:ruby decode:true " >config.vm.network "public_network", bridge: 'en1: Wi-Fi (AirPort)'</pre>

La stringa identifica l&#8217;interfaccia desiderata e deve corrispondere esattamente con il nome di una interfaccia disponibile. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>