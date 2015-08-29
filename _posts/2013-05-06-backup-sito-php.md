---
title: Crea una copia di backup del tuo sito con un semplice script PHP
author: unnikked
layout: post
permalink: /backup-sito-php/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:47:"/wp-content/uploads/2013/05/backup-1024x393.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:47:"/wp-content/uploads/2013/05/backup-1024x393.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:73:"Effettua facilmente il backup del tuo sito web con un semplice script php";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 286
dsq_thread_id:
  - 1267387243
itsec_enable_ssl:
  - 
categories:
  - PHP
  - Programmazione
tags:
  - backup
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


E&#8217; sempre buona norma effettuare backup periodici del proprio sito per evitare di perdere ore di duro lavoro. In questo articolo vedremo come effettuare tale operazione utilizzando un semplice script PHP.

Lo script evita di usare la funzione nativa **exec()** di PHP, ragion per cui tale script può essere utilizzato sui servizi di Hosting condiviso, o comunque su quei servizi dove tale funzionalità di PHP è disabilitata per ovvi motivi di sicurezza.

Il comando *exec()* di PHP consente di eseguire comandi come se fossimo da linea di comando sulla macchina host.

Vediamo in dettaglio lo script php:

<pre class="lang:php decode:true">&lt;?php

	$ftp_server = 'ipserver'; // Server FTP esterno
	$ftp_username = 'username'; // Username Server FTP esterno
	$ftp_password = 'password'; // Password FTP server esterno

	// Percorso completo dell'archivio compresso
	$filename = '' . date("Ymd") . '.tar.gz'; 

	try {
		// creo il file per il backup
		$phar = new PharData($filename);
		// inserisco la directory corrente dello script e tutte
		// le sue sotto directory nel file di backup
		$phar-&gt;buildFromDirectory(dirname(__FILE__));
	} catch (BadMethodCallException $e) {
		echo $e;
		return;
	} catch (PharException $e) {
		echo $e;
		return;
	}

	// mi connetto al FTP
	$cn = ftp_connect($ftp_server);

	// eseguo il login al FTP
	$login_result = ftp_login($cn, $ftp_username, $ftp_password);

	// se la connessione ed il login sono riusciti
	if ($cn && $login_result) {
	  // effettuo l'upload dell'archivio compresso
	  $upload = ftp_put($cn,'backup_'.date("Ymd").'.tar.gz', $filename, FTP_BINARY);
	}

	// chiudo la connessione
	ftp_close($cn);

	//elimino il file
	unlink($filename);

        //dico che è andato tutto bene
	echo "Backup di " . $filename . " effettuato con successo";

?&gt;</pre>

Lo script è ben commentato, ma vediamo insieme le operazioni principali :

  * <span style="line-height: 13px;">crea un archivio tar.gz, come nome utilizza la data di quando è eseguito lo script</span>
  * prova ad inserire la directory corrente e le sue relative sottodirectory nell&#8217;archivio, se qualcosa non va bene viene catturata l&#8217;eccezione, stampato il messaggio con la terminazione dello script.
  * stabilisce una connessione con il server FTP configurato ad inizio script
  * effettua il login al server
  * se la connessione e il login va a buon termine carica il file sul server remoto
  * chiude la connessione

Prima di essere utilizzato lo script va configurato:

  * `$ftp_server` indica l&#8217;indirizzo ip / dominio del server FTP
  * `$ftp_username` qui va inserito l&#8217;username dell&#8217;account FTP
  * `$ftp_password` qui va inserito la password dell&#8217;account FTP

E&#8217; possibile personalizzare lo script secondo le proprie esigenze, esempio: alla variabile `$filename` nella funzione `Date` è possibile specificare anche l&#8217;ora in cui è stato creato il file (se si ha in mente di programmare backup periodici ogni due ore per esempio).

Per trarre maggiori benefici di questo script raccomando l&#8217;uso di <a title="CronTab" href="https://it.wikipedia.org/wiki/Crontab" target="_blank">crontab </a>per automatizzare il processo.

Al momento lo script è molto basilare, in futuro credo che lo amplierò rendendolo più funzionale e user friendly. Mi farà piacere ricevere vostri commenti e consigli su come continuare a sviluppare lo script.

<div class="su-note" style="border-color:#d8d8d5;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;">
  <div class="su-note-inner su-clearfix" style="background-color:#f0f0ed;border-color:#fcfcfb;color:#333333;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;">
    Se lo script non funziona correttamente la causa più probabile è che lo script impiega molto tempo ad eseguirsi. Molti servizi di Hosting limitano il tempo massimo per cui uno script può rimanere in esecuzione. Per un server VPS (o dedicato) non ci sono problemi in quanto si può aumentare tale limite andando a modificare i parametri di PHP.
  </div>
</div>

**Aggiornamento 8 Maggio 2013**  
Ho inserito la funzione `unlink()` che elimina il file dopo averlo caricato tramite FTP.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>