---
title: 'L&#8217;ambiente ideale per sviluppare in PHP e MySQL'
author: unnikked
layout: post
permalink: /lambiente-ideale-per-sviluppare-in-php-mysql/
dsq_thread_id:
  - 3228962635
categories:
  - Senza categoria
---

Se c&#8217;è una cosa che non riesco proprio a far convivere sulla mia distribuzione GNU/Linux è un ambiente di sviluppo semplice per **PHP** e **MySQL**.

O per mia pigrizia o per forza maggiore, apache non sembra voler servire contenuti che non risiedono nella cartella `/var/www` (ovviamente con user e group impostato su `www-data`).

Quando si tratta di modificare &#8220;centinaia&#8221; di file per ottenere un semplice risultato la mia voglia sparisce sempre, per questo motivo trovo sempre vie alternative (a volte anche più macchinose rispetto a leggersi una volta per tutte la documentazione di un software, ahimè sono duro di testa).

Per questo motivo voglio proporvi come ho posto fine a questa &#8220;sofferenza&#8221; e a impostare finalmente un&#8217;ambiente di sviluppo facile da esportare, tutto ciò che abbiamo bisogno è:

  * <a href="come-creare-vps-virtualbox" title="Come creare un VPS con VirtualBox" target="_blank">Virtualbox con installato Ubuntu 14.04 LTS</a> per emulare un <a href="?s=vps" title="Altri articoli per VPS" target="_blank">VPS</a>
  * <a href="apache-php-mysql" title="Come configurare un ambiente LAMP" target="_blank">Un&#8217;ambiente di sviluppo LAMP</a>
  * <a href="sshfs-montare-file-system-remoto" title="SSHFS: client per montare un file system remoto tramite SSH" target="_blank">SSHFS</a> per montare le cartelle in remoto o qualsiasi altro metodo di modifica file remoti, che sia <a href="come-configurare-proftpd" title="Come configurare ProFTPD" target="_blank">FTP</a>, <a href="impostare-un-server-sftp-su-ubuntu" title="Impostare un server SFTP su Ubuntu" target="_blank">SFTP</a>, NTFS o chi ne ha più ne metta
  * Il nostro editor di testo preferito

Poiché per la maggior parte delle volte testo <a href="tag/self-hosted/" title="Altro su Self Hosted" target="_blank">applicativi open source</a> trovati sulla rete ho creato un piccolo <a href="https://github.com/unnikked/Apache-VirtualHost-Manager" title="https://github.com/unnikked/Apache-VirtualHost-Manager" target="_blank">script bash</a> che mi aiuta nella gestione dei <a href="guida-ai-virtual-host-di-apache" title="Guida ai Virtual Host di Apache" target="_blank">Virtual Host di apache</a>. 

Un unica nota da prendere in considerazione, per rendere l&#8217;utente non root del sistema capace di scrivere e leggere i file nella cartella `/var/www` è necessario impostare a tale utente il gruppo primario `www-data` sulla macchina *guest*.

<div class="su-box su-box-style-default" style="border-color:#292929;">
  <div class="su-box-title" style="background-color:#333333;color:#FFFFFF;">
    Terminologia
  </div>
  
  <div class="su-box-content su-clearfix">
    Per macchina guest si intende l&#8217;istanza della macchina virtuale creata con VirtualBox
  </div>
</div>

<pre class="lang:sh decode:true " >sudo usermod -g www-data unnikked</pre>

E per finire modifico di conseguenza il file <a href="guida-file-hosts-in-linux" title="Guida al file hosts in Linux" target="_blank">/etc/hosts</a> sulla macchina *host* per farlo puntare all&#8217;indirizzo ip della macchina virtuale locale per poter raggiungere facilmente il sito web in esame. 

<div class="su-box su-box-style-default" style="border-color:#292929;">
  <div class="su-box-title" style="background-color:#333333;color:#FFFFFF;">
    Terminologia
  </div>
  
  <div class="su-box-content su-clearfix">
    Per macchina host si intende il computer fisico su cui risiede la macchina virtuale
  </div>
</div>

E voi come avete configurato il vostro ambiente di sviluppo ? 
