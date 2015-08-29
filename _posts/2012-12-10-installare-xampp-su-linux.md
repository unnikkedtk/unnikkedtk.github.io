---
title: Installare XAMPP su Linux
author: unnikked
layout: post
permalink: /installare-xampp-su-linux/
dsq_thread_id:
  - 986414473
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:45:"/wp-content/uploads/2012/12/xampp_testata.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:45:"/wp-content/uploads/2012/12/xampp_testata.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 185
itsec_enable_ssl:
  - 
categories:
  - Linux
  - Webmaster
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


&nbsp;

Per chi muove i primi passi nella creazione di siti web dinamici, sentirà il bisogno di avere un ambiente di sviluppo funzionale e pronto all&#8217;uso. Invece di affidarsi alle soluzioni hosting gratuite è possibile installare un ambiente **XAMPP** (nella fattispecie si dice **LAMP **acronimo di *Linux*, *Apache*, *MySQL* e *PHP*) che offre al novizio programmatore, ma anche ai più esperti, tutto ciò che serve entrare in produttività.

[<img class="aligncenter size-medium wp-image-107" title="xampp_salto" src="http://unnikked.tk/wp-content/uploads/2012/12/xampp_salto-300x263.jpg" alt="" width="300" height="263" />][1]

In questo articolo spiegherò come installare ed utilizzare XAMPP in ambiente Linux. Per prima cosa scarichiamo il pacchetto **tar.gz **dal <a href="http://www.apachefriends.org/en/xampp-linux.html" target="_blank">sito</a>. Per i più usate **wget** in una finestra di terminale:

<pre class="lang:sh decode:true">wget http://www.apachefriends.org/download.php?xampp-linux-1.8.1.tar.gz</pre>

Al termine del download scompattiamo il file nella cartella */opt* digitando da terminale:

<pre class="lang:default decode:true">sudo tar -xvf xampp-linux-1.8.1.tar.gz -C /opt</pre>

una volta estratto per avviare l&#8217;ambiente basta scrivere nel terminale:

<pre class="lang:default decode:true">sudo /opt/lampp/lampp start</pre>

se tutto è andato a buon fine vi appariranno queste scritte :

<pre class="lang:default highlight:0 decode:true">Starting XAMPP for Linux 1.6.7...
XAMPP: Starting Apache with SSL (and PHP5)...
XAMPP: Starting MySQL...
XAMPP: Starting ProFTPD...
XAMPP for Linux started.</pre>

Bene avete avviato il vostro ambiente di sviluppo web.

Per chiudere l&#8217;ambiente basta digitare:

<pre class="lang:sh decode:true">sudo /opt/lampp/lampp stop</pre>

Questo ambiente di sviluppo non è adatto per essere in produzione dal momento che :

  1. l&#8217;amministratore del database **MySQL** non ha una password
  2. il servizio del database è accessibile da remoto con ProFtp, utilizzare la password «lampp» per l&#8217;utente «nobody»
  3. **PhpMyAdmin** è accessibile da remoto;
  4. tutti gli esempi sono accessibili da remoto;
  5. **MySQL** e **Apache** sono avviati con gli stessi permessi utente «nobody».

Per riparare queste impostazioni basta digitare dalla linea di comando

<pre class="lang:sh decode:true">sudo /opt/lampp/lampp security</pre>

Verrà avviato un semplice script di configurazione per impostare le password ai vari servizi.

Per vedere quale versione di PHP si sta usando o per cambiare la versione di PHP in uso basti digitare rispettivamente

<pre class="lang:sh decode:true">sudo /opt/lampp/lampp phpstatus</pre>

per vedere la versione in uso di PHP e

<pre class="lang:sh decode:true">sudo /opt/lampp/lampp php4 //oppure php5</pre>

per passare a PHP4 o PHP5.

Altri comandi utili da poter essere utilizzati sono riassunti qui di seguito :

  * **start**: avvia il servizio;
  * **stop** : arresta il servizio;
  * **restart**: arresta e riavvia il servizio;
  * **startapache**: avvia solo **apache**;
  * **tartssl**: avvia **apache** con il supporto SSL. Questo comando attiva il supporto SSL permanentemente, quindi al prossimo avvio di XAMPP, sarà attivo;
  * **startmysql**: avvia solo il database;
  * **startftp**: avvia il server **ProFTP**. Attraverso tale servizio sarà possibile caricare file nel server web (nome utente «nobody», password «lampp»). Tale comando attiva il supporto FTP in modo permanente, quindi al prossimo avvio di XAMPP, sarà attivo;
  * **stopftp**: arresta il server **ProFTP**. Questo comando disattiva il supporto FTP permanentemente, quindi al prossimo avvio di XAMPP, tale servizio non sarà attivo;
  * **stopapache**: arresta **Apache**;
  * **stopssl**: disattiva il supporto SSL per **Apache**. Al prossimo avvio, il supporto per SSL non sarà attivo;
  * **stopmysql**: arresta il servizio MySQL;
  * **security**: avvia un semplice programma per il controllo e la configurazione dei parametri di sicurezza.

E&#8217; anche possibile utilizzare una piccola interfaccia grafica da cui poter gestire i vari servizi. Per poterla utilizzare basta creare un link sul proprio desktop con i seguenti parametri :

<pre class="lang:applescript highlight:0 decode:true">Tipo: Applicazione
Nome: Pannello di Controllo XAMPP
Comando: gksudo "python /opt/lampp/share/xampp-control-panel/xampp-control-panel.py"</pre>

Ecco invece una lista delle cartelle principali dell&#8217;ambiente:

  * <tt>/opt/lampp/bin/</tt>: cartella di installazione di **XAMPP**;
  * <tt>/opt/lampp/bin/mysql</tt>: cartella per il monitoraggio **MySQL**;
  * <tt>/opt/lampp/htdocs/:Apache</tt>: cartella radice del server web;
  * <tt>/opt/lampp/etc/httpd.conf</tt>: file di configurazione di **apache**;
  * <tt>/opt/lampp/etc/my.cnf</tt> : file di configurazione di **MySQL**.
  * <tt>/opt/lampp/etc/php.ini</tt> : file di configurazione di **PHP**.
  * <tt>/opt/lampp/etc/proftpd.conf</tt> : file di configurazione **ProFTP**.
  * <tt>/opt/lampp/phpmyadmin/config.inc.php</tt> : file di configurazione di **phpMyAdmin**.

<div>
  Infine per poter disinstallare l&#8217;ambiente basta digitare:
</div>

<div>
</div>

<div>
  <pre class="lang:sh decode:true ">sudo rm -rf /opt/lampp</pre>
  
  <p>
    &nbsp;
  </p>
</div>

&nbsp;

&nbsp;

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: http://unnikked.tk/wp-content/uploads/2012/12/xampp_salto.jpg