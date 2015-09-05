---
title: Come creare un VPS con VirtualBox
author: unnikked
layout: post
permalink: /come-creare-vps-virtualbox/
dsq_thread_id:
  - 2824330024
categories:
  - SysAdmin
  - Ubuntu
tags:
  - VirtualBox
  - VPS
---

In un vecchio articolo ho parlato quali siano i vantaggi dell&#8217;utilizzo di uno strumento come <a href="quali-sono-i-vantaggi-di-virtualbox" title="Quali sono i vantaggi di VirtualBox ?" target="_blank">VirtualBox</a>.

Ho anche realizzato diverse guide su come utilizzare un <a href="tag/vps/" title="Articoli relativi a VPS" target="_blank">VPS</a> e come <a href="come-ottenere-e-configurare-un-server-vps" title="Come ottenere e configurare un server VPS" target="_blank">ottenerne uno</a>.

In questa guida vedremo come &#8220;creare&#8221; un server VPS sul proprio computer per poter applicare e sperimentare le svariate guide che si trovano in giro per la rete o su questo blog, senza la necessità di acquistare un VPS. 

Tutto ciò che avremo bisogno è: 

  * Una <a href="http://www.virtualbox.org/manual/ch02.html" title="Chapter 2. Installation details" target="_blank">installazione</a> funzionante di VirtualBox
  * <a href="http://www.ubuntu-it.org/download" title="Scarica Ubuntu 14.04 LTS" target="_blank">Ubuntu 14.04 Server LTS</a> o qualsiasi altra distro Linux

L&#8217;installazione di VirtualBox è triviale, su Ubuntu e derivate basterà digitare nella console dei comandi:

<pre class="lang:sh decode:true " >sudo apt-get install virtualbox</pre>

La schermata principale sarà simile a questa: 

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-121029.png" alt="VirtualBox - Home" />
</p>

<!--nextpage-->

## Creazione di una macchina virtuale

<a href="http://www.virtualbox.org/manual/ch03.html" title="Chapter 3. Configuring virtual machines" target="_blank">Creeremo</a> un macchina virtuale su cui installeremo l&#8217;ultima versione di <a href="http://www.ubuntu-it.org/download" title="Ubuntu - Download" target="_blank">Ubuntu Server 14.04 LTS</a>

Per prima cosa clicchiamo su *&#8220;Nuova&#8221;* e assegniamo un nome alla macchina virtuale: 

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-152237.png" alt="VirtualBox - Nuova" />
</p>

Ora dobbiamo assegnare la dimensione massima di <a href="http://www.virtualbox.org/manual/ch03.html#settings-motherboard" title="3.4.1. &quot;Motherboard&quot; tab" target="_blank">RAM</a> dedicabile alla macchina virtuale, una buona norma è di non assegnare più della metà della RAM fisica presente sulla macchina (questo parametro è modificabile in futuro). 

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-152609.png" alt="VirtualBox - RAM" />
</p>

Creiamo ora il <a href="http://www.virtualbox.org/manual/ch05.html" title="Chapter 5. Virtual storage" target="_blank">disco fisso virtuale</a> della macchina virtuale: 

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-152749.png" alt="VirtualBox - Disco Rigido Virtuale" />
</p>

Come tipologia lasciamo la spunta su VDI (VirtualBox Disk Image): 

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-152944.png" alt="VirtualBox - VDI" />
</p>

Scegliamo ora l&#8217;allocazione dinamica del disco, in questo modo il file di immagine del disco fisso della macchina virtuale avrà dimensioni sull&#8217;hard disk reale pari all&#8217;effettivo uso del disco fisso virtuale. 

Per esempio, per un disco fisso virtuale di dimensione di 8,00 GB di cui solo 2,00 GB occupati sul disco fisso reale il file di immagine peserà solo 2,00 GB.

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-153411.png" alt="VirtualBox - Allocazione dinamica" />
</p>

Scegliamo ora la dimensione virtuale del disco rigido, 8,00 GB sono più che sufficienti per un VPS, questo parametro non può essere modificato successivamente: 

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-153606.png" alt="VirtualBox - Dimensione disco fiscco" />
</p>

Dopo aver cliccato su *&#8220;Crea&#8221;* la macchina virtuale verrà creata. 

<!--nextpage-->

## Installazione di Ubuntu 14.04 LTS

Ora possiamo installare Ubuntu Server edition. Per prima cosa bisogna procurarsi una <a href="http://www.ubuntu-it.org/download" title="Ubuntu - download" target="_blank">immagine</a> del sistema operativo dal sito ufficiale. 

Selezioniamo la macchina virtuale su cui installare il sistema operativo e clicchiamo su *Impostazioni*, tramite la sezione *Archiviazione* clicchiamo selezioniamo la voce *Vuoto* e a lato clicchiamo sull&#8217;iconcina a forma di CD-ROM selezionando la voce *Scegli un file di disco CD/DVD virtuale* e navighiamo nel file system per selezionare l&#8217;immagine ISO di Ubuntu Server:

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-154714.png" alt="VirtualBox - Ubuntu ISO" />
</p>

Ora possiamo cliccare su *avvia* per avviare la macchina virtuale e installare Ubuntu, eccone il video tutorial: 

<div class="su-youtube su-responsive-media-yes">
</div>

<!--nextpage-->

## Preparazione della macchina virtuale di base

E&#8217; consigliabile installare Ubuntu senza ulteriori pacchetti, in questo modo potremo clonarla e personalizzarla in base ai test necessari, se qualcosa va storto oppure il test è finito possiamo sempre eliminarla e clonarne una nuova. 

Vi consiglio di installare qualche software di base per evitare di dover perdere tempo ad ogni clonazione, personalmente sono solito installare `openssh-server` e `vim`: 

<pre class="lang:sh decode:true " >sudo apt-get install openssh-server vim</pre>

### Clonazione della macchina virtuale

Clonare una macchina virtuale è semplice, basta cliccare con il tasto destro sulla macchina virtuale da clonare e successivamente su *Clona*: 

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-162927.png" alt="VirtualBox - Clone" />
</p>

Selezioniamo infine su *Clone completo*: 

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-163045.png" alt="VirtuaBox - Clone completo" />
</p>

Dopo qualche minuto avremo il clone della macchina virtuale: 

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-163142.png" alt="VirtuaBox - Clone" />
</p>

<!--nextpage-->

## Configurazione di rete

Di default VirtualBox configura la rete in modalità <a href="http://it.wikipedia.org/wiki/Network_address_translation" title="NAT -Wikipedia" target="_blank">NAT</a>, in questa sezione vi mostrerò come ottenere la mia stessa configurazione per ottenere un IP fisso dal server <a href="http://it.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol" title="DHCP - Wikipedia" target="_blank">DHCP</a> del mio router per poter configurare il file <a href="guida-file-hosts-in-linux" title="Guida al file hosts in Linux" target="_blank">hosts</a> in modo tale da associare un nome mnemonico ad ogni macchina virtuale. 

Questa configurazione non potrebbe funzionare anche per voi, dipende da come è configurata la vostra LAN, se ottenete l&#8217;ip della rete privata tramite server DHCP allora potrebbe funzionare anche per voi. 

Per prima cosa bisogna impostare la scheda di rete in modalità *bridge*, selezionando la scheda di rete reale su cui fare il ponte (nel mio caso wl0, ovvero la scheda di rete Wi-Fi) : 

<p align="center">
  <img src="/wp-content/uploads/2014/05/Screenshot-22052014-163904.png" alt="VirtualBox - Scheda di rete bridge" />
</p>

Effettuiamo l&#8217;accesso e modifichiamo il file `/etc/network/interfaces` da così: 

<p align="center">
  <img src="/wp-content/uploads/2014/07/Screenshot-07072014-152307.png" alt="Network configuration" />
</p>

a così: 

<p align="center">
  <img src="/wp-content/uploads/2014/07/Screenshot-07072014-152324.png" alt="Network configuration" />
</p>

Bisogna far attenzione che i parametri:

<pre class="lang:sh decode:true " >address 192.168.0.200
netmask 255.255.255.0
gateway 192.168.0.1</pre>

variano in base alla configurazione della propria rete. Per capire `mask` e `gateway` basterà digitare in un terminale della macchina host `ifconfig`

<p align="center">
  <img src="/wp-content/uploads/2014/07/Screenshot-07072014-152906.png" alt="ifconfig" />
</p>

e `route -n`

<p align="center">
  <img src="/wp-content/uploads/2014/07/Screenshot-07072014-152723.png" alt="route -n" />
</p>

Successivamente bisogna specificare quali server DNS bisogna utilizzare per la risoluzione dei nomi, per cui modifichiamo il file `/etc/resolvconf/resolv.conf.d/head` e aggiungiamo i server DNS : 

<pre class="lang:sh decode:true " >nameserver 8.8.8.8
nameserver 8.8.4.4
</pre>

infine eseguiamo il comando: 

<pre class="lang:sh decode:true " >sudo resolvconf -u</pre>

E riavviamo l&#8217;istanza di Virtualbox.

<p align="center">
  <img src="/wp-content/uploads/2014/07/Screenshot-07072014-153440.png" />
</p>

Ora possiamo configurare il file <a href="guida-file-hosts-in-linux" title="Guida al file hosts in Linux" target="_blank">hosts</a> per permettere di raggiungere facilmente nella rete interna il VPS senza memorizzare l&#8217;indirizzo di rete.
