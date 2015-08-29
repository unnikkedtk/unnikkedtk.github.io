---
title: Come gestire macchine virtuali tramite Vagrant
author: unnikked
layout: post
permalink: /gestire-macchine-virtuali-vagrant/
dsq_thread_id:
  - 3513862273
categories:
  - SysAdmin
  - Ubuntu
tags:
  - vagrant
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Ho parlato spesso del concetto di <a href="quali-sono-i-vantaggi-di-virtualbox" title="Quali sono i vantaggi di VirtualBox ?" target="_blank">macchina virtuale</a> nel mio blog, arrivando a fornire delle istruzioni piuttosto dettagliate su come <a href="lambiente-ideale-per-sviluppare-in-php-mysql" title="L’ambiente ideale per sviluppare in PHP e MySQL" target="_blank">creare un ambiente virtuale adatto per lo sviluppo</a>.

Spesse queste azioni sono macchinose, ripetitive e sopratutto prendono molto tempo. Per tale motivo il mio interesse si è spostato verso <a href="https://www.vagrantup.com/" title="Vagrant" target="_blank">Vagrant</a>. 

Vagrant è stato progettato per facilitare la creazione e la configurazione di ambienti di sviluppo virtuali. 

Può essere visto come una interfaccia generale intorno ai più noti software di virtualizzazione come <a href="https://www.virtualbox.org/" title="Oracle VM VirtualBox" target="_blank">VirtualBox</a>, <a href="http://www.linux-kvm.org/page/Main_Page" title="Linux KVM" target="_blank">KVM</a>, <a href="http://www.vmware.com/it" title="VMWare" target="_blank">VMWare</a> e di gestione di configurazione come <a href="http://www.ansible.com/home" title="Ansible automation" target="_blank">Ansible</a>, <a href="https://www.chef.io/solutions/configuration-management/" title="Chef configuration manager" target="_blank">Chef</a>, <a href="http://saltstack.com/" title="Salt" target="_blank">Salt</a> o <a href="http://puppetlabs.com/" title="Puppet" target="_blank">Puppet</a>.

In questo articolo mostrerò come installare su una comune distribuzione linux Ubuntu questo software e il primo approccio all&#8217;utilizzo. 

## Installazione VirtualBox

Come già detto nell&#8217;introduzione Vagrant è in grado di interagire con i noti software di virtualizzazione, in questo caso ho preferito utilizzare <a href="come-creare-vps-virtualbox" title="Come creare un VPS con VirtualBox" target="_blank">VirtualBox</a> poiché al momento ho più familiarità con questo software e Vagrant si integra perfettamente senza ulteriori configurazioni. 

Per installare VirtualBox basta digitare dalla linea di comando: 

<pre class="lang:sh decode:true " >sudo apt-get install virtualbox virtualbox-guest-additions-iso</pre>

## Installazione di Vagrant

Per installare Vagrant consiglio di scaricare manualmente l&#8217;ultima versione dalla pagina principale del sito web del progetto e di installarlo manualmente. 

<pre class="lang:sh decode:true " >wget https://dl.bintray.com/mitchellh/vagrant/vagrant_1.7.2_x86_64.deb
sudo dpkg --install vagrant_1.7.2_x86_64.deb</pre>

## Vagrant Box

Alla base di Vagrant vi è il concetto di `Box`, una sorta di scatola che contiene il sistema operativo principale utilizzato dal software per creare nuove istanze. E&#8217; possibile usufruire di una lista di box già preparati tramite il sito <a href="http://vagrantbox.es/" title="A list of base boxes for Vagrant" target="_blank">vagrantbox.es</a>. 

Per aggiungere una nuova box è necessario utilizzare il comando:

<pre class="lang:sh decode:true " >vagrant box add nome url</pre>

## Configurazione di un nuovo ambiente virtuale

Per configurare un nuovo ambiente virtuale basterà digitare tramite la riga dei comandi:

<pre class="lang:default decode:true " >vagrant init ubuntu/trusty64</pre>

Che aggiungerà una box (se non aggiunta tramite il comando precedente) e configurerà un nuovo ambiente virtuale.

Per immagini preconfigurate è possibile consultare anche <a href="https://vagrantcloud.com/boxes/search" title="Discover Vagrant Boxes" target="_blank">questa</a> lista. 

Dopo aver eseguito questo comando verrà creato un file di configurazione chiamato `VagrantFile` che avrà come contenuto (commenti esclusi):

<pre class="lang:ruby decode:true " >Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
end
</pre>

Il file di configurazione è scritto in <a href="https://www.ruby-lang.org/it/" title="Il linguaggio di programmazione Ruby" target="_blank">Ruby</a>, ma non è necessario conoscere questo linguaggio di programmazione per poter configurare ogni istanza. 

Per avviare la macchina virtuale è necessario utilizzare il comando:

<pre class="lang:sh decode:true " >vagrant up</pre>

Vagrant si occupa della creazione delle chiavi per l&#8217;accessso ssh alla macchina virtuale, non è necessario conoscere alcuna password, per accedere alla istanza basterà digitare:

<pre class="lang:sh decode:true " >vagrant ssh</pre>

Per spegnere la macchina virtuale è necessario digitare: 

<pre class="lang:sh decode:true " >vagrant halt</pre>

.

## Alcune configurazioni

Di seguito riporto alcune configurazioni che preferisco utilizzare insieme a Vagrant. 

### Network

Di solito preferisco esporre la macchina virtuale nella mia rete privata LAN piuttosto che utilizzare una configurazione NAT per rendermi più semplice il testing di applicazioni su vari dispositivi senza troppe configurazioni. 

Preferisco anche assegnare un indirizzo IP specifico in modo tale da poterlo legare manualmente ad un dominio fittizio tramite il file `<a href="guida-file-hosts-in-linux" title="Guida al file hosts in Linux" target="_blank">/etc/hosts</a>`.

Per ottenere questo risultato basta inserire nel file di configurazione questa istruzione:

<pre class="lang:ruby decode:true " >config.vm.network "public_network", ip: "192.168.0.201"</pre>

Dove ovviamente l&#8217;indirizzo IP dipende in base alla vostra specifica configurazione, se si ha a disposizione un router domestico che fornisce il servizio DHCP questa istruzione funzionerà correttamente. 

La prima volta che si esegue `vagrant up` verrà chiesto quale interfaccia di rete usare (riferita alla macchina host):

<pre class="lang:sh decode:true " >==&gt; default: Available bridged network interfaces:
1) wlan0
2) eth0
==&gt; default: When choosing an interface, it is usually the one that is
==&gt; default: being used to connect to the internet.
    default: Which interface should the network bridge to? 1</pre>

Nel mio caso ho scelto 1 poiché il mio portatile è collegato tramite Wi-Fi al router domestico.

Per essere sicuri che la configurazione produca l&#8217;effetto desiderato, dopo aver effettuato l&#8217;accesso tramite `vagrant ssh`, usando `ipconfig` è possibile visualizzare l&#8217;indirizzo di rete assegnato all&#8217;interfaccia:

<pre class="lang:sh decode:true " >eth1      Link encap:Ethernet  HWaddr 08:00:27:06:91:5c  
          inet addr:192.168.0.201  Bcast:192.168.0.255  Mask:255.255.255.0</pre>

Per rendere la scelta della interfaccia di rete della macchina host è possibile definire l&#8217;interfaccia di rete di default tramite il `VagrantFile`:

<pre class="lang:default decode:true " >config.vm.network "public_network", bridge: 'en1: Wi-Fi (AirPort)'</pre>

La stringa che identifica l&#8217;interfaccia di rete desiderata deve corrispondere esattamente il nome dell&#8217;interfaccia disponibile. Se non viene trovata, Vagrant chiederà di utilizzare una interfaccia di rete da una lista. 

### Condivisione file

Preferisco assegnare una cartella condivisa per rendere più semplice il trasferimento dei file verso la macchina virtuale (Di solito uso <a href="sshfs-montare-file-system-remoto" title="SSHFS: client per montare un file system remoto tramite SSH" target="_blank">sshfs</a> o scp).

La seguente istruzione comporta l&#8217;effetto descritto:

<pre class="lang:ruby decode:true " >config.vm.synced_folder ".", "/vagrant"</pre>

In questo modo la cartella in cui è presente il file di configurazione `VagrantFile` sarà auto-montato nel file system dell&#8217;istanza presso `/vagrant`.

Per maggiori informazioni vi consiglio di consultare la documentazione ufficiale. 

## Conclusioni

La tecnologia fa passi da gigante di giorno in giorno, le macchine virtuali unita alla potenza di calcolo odierna ci permette di creare infrastrutture complesse in modo sicuro ed efficiente. Conoscere gli strumenti adatti è fondamentale per poter lavorare e imparare in modo produttivo. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>