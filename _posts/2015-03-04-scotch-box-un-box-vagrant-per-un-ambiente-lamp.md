---
title: 'Scotch Box &#8211; un Box Vagrant per un ambiente LAMP'
author: unnikked
layout: post
permalink: /scotch-box-un-box-vagrant-per-un-ambiente-lamp/
dsq_thread_id:
  - 3566785150
categories:
  - Programmazione
  - SysAdmin
  - Webmaster
tags:
  - lamp
  - vagrant
---

Recentemente ho <a title="Come gestire macchine virtuali tramite Vagrant" href="gestire-macchine-virtuali-vagrant" target="_blank">introdotto</a> l&#8217;utilizzo di Vagrant per il deploy di macchine virtuali, ho descritto la possibilità di usare box già configurati in modo tale da risparmiare tempo e semplificare le operazioni.

In questo breve articolo voglio mostrarvi un Box per Vagrant che offre un ambiente LAMP già configurato.

Ho già trattato in passato <a title="Come configurare un ambiente LAMP" href="apache-php-mysql" target="_blank">come configurare un ambiente LAMP</a> manualmente, <a title="Scotch Box" href="https://box.scotch.io/" target="_blank">Scotch Box</a> è un Box preconfigurato per Vagrant con una serie di caratteristiche proprie di un ambiente LAMP che rende facile la creazione di un ambiente virtuale per lo sviluppo di un sito web in pochissimo tempo.

La maggior parte dei siti web e applicazioni non richiedono configurazioni server complesse. Questo Box mira a fornire gli strumenti di base per uno sviluppo di base per non spendere tempo nel configurare Vagrant e dunque passare subito alla stesura del codice.

Non sono richiesti strumenti di provisioning o installazioni iniziali poiché tutto è già compreso nel Box.

## Caratteristiche

  * Strumenti di aiuto
  * PHP 5.5
  * Non è richiesta la connessione Internet
  * Errori PHP abilitati
  * Pronto per ospitare Laravel e WordPress (e altri)
  * Agnostico rispetto al sistema operativo host
  * Niente più XAMPP / WAMP
  * Robusto rispetto ad un aggiornamento di Vagrant
  * Bootstrap e jQuery sono salvati nella cartella home del server nel caso di mancanza di connessione Internet
  * Chef e Puppet pronti all&#8217;uso nel caso si abbia la necessità di più funzionalità quando si avvia la macchina virtuale
  * Accesso e controllo al database facilitato
  * Licenza MIT

## Componenti server

  * Apache
  * Vim
  * MySQL
  * PHP 5.5
  * Ruby
  * Git
  * Screen
  * Composer
  * Laravel Installer
  * cURL
  * GD e Imagick
  * Mcrypt
  * Memcache and Memcached

## Componenti client

  * NPM
  * Grunt
  * Bower
  * Yeoman
  * Gulp

## Utilizzo

Per prima cosa bisogna scaricare ed installare <a title="Quali sono i vantaggi di VirtualBox ?" href="quali-sono-i-vantaggi-di-virtualbox" target="_blank">VirtualBox</a> e Vagrant.

Successivamente bisogna clonare la <a title="Scotch Box GitHub Repository" href="http://github.com/scotch-io/scotch-box" target="_blank">repository</a> del progetto:

<pre class="lang:sh decode:true ">git clone https://github.com/scotch-io/scotch-box.git</pre>

E lanciare il comando:

<pre class="lang:default decode:true ">vagrant up</pre>

Al primo avvio è necessario aspettare che Vagrant scarichi l&#8217;immagine del Box, dopo l&#8217;avvio è possibile verificare che tutto sia andato per il meglio digitando sul proprio browser `http://192.168.33.10/`

![Box Scotch][1]

## Accesso al database

I dettagli per l&#8217;accesso al database sono i seguenti:

<table class="table table-responsive table-bordered table-striped table-hover">
  <tr>
    <th>
      Chiave
    </th>
    
    <th>
      Valore
    </th>
  </tr>
  
  <tr>
    <td>
      Nome Database
    </td>
    
    <td>
      scotchbox
    </td>
  </tr>
  
  <tr>
    <td>
      Utente Database
    </td>
    
    <td>
      root
    </td>
  </tr>
  
  <tr>
    <td>
      Password Database
    </td>
    
    <td>
      root
    </td>
  </tr>
  
  <tr>
    <td>
      Host Database
    </td>
    
    <td>
      localhost
    </td>
  </tr>
</table>

## Aggiornamento della box

Tramite il comando `vagrant box outdated` è possibile se la Box è all&#8217;ultima versione disponibile.

E&#8217; possibile aggiornarla tramite il comando `vagrant box update`

## Conclusioni

Ovviamente tale Box potrà essere personalizzata con gli strumenti necessari, è un buon punto di inizio per sviluppare siti web o applicativi in PHP/MySQL.

Consiglio l&#8217;utilizzo di uno <a title="Apache Virtual Host Manager" href="https://github.com/unnikked/Apache-VirtualHost-Manager" target="_blank">script</a> da me ideato per la gestione dei <a title="Guida ai Virtual Host di Apache" href="guida-ai-virtual-host-di-apache" target="_blank">Virtual Host di Apache</a> e la lettura di <a title="Guida al file hosts in Linux" href="guida-file-hosts-in-linux" target="_blank">questo articolo</a> per la gestione dei file host per creare falsi domini locali e raggiungere dunque facilmente i siti web in sviluppo.

Segnalo che il `VagrantFile` monta automaticamente la directory di progetto Vagrant in /var/www per tanto è utile per mantenere i propri file sulla macchina host e dunque semplificando il trasferimento dei file senza usare strumenti come <a title="Come configurare ProFTPD" href="come-configurare-proftpd" target="_blank">FTP</a> o <a title="SSHFS: client per montare un file system remoto tramite SSH" href="sshfs-montare-file-system-remoto" target="_blank">SSHFS</a>.

 [1]: https://scotch.io/wp-content/uploads/2014/10/nice-shot.jpg