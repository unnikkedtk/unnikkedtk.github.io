---
title: Crea una copia di backup del tuo sito con un semplice script PHP
author: unnikked
layout: post
permalink: /backup-sito-php/
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

E&#8217; sempre buona norma effettuare backup periodici del proprio sito per evitare di perdere ore di duro lavoro. In questo articolo vedremo come effettuare tale operazione utilizzando un semplice script PHP.

Lo script evita di usare la funzione nativa **exec()** di PHP, ragion per cui tale script può essere utilizzato sui servizi di Hosting condiviso, o comunque su quei servizi dove tale funzionalità di PHP è disabilitata per ovvi motivi di sicurezza.

Il comando *exec()* di PHP consente di eseguire comandi come se fossimo da linea di comando sulla macchina host.

Vediamo in dettaglio lo script php:

```php
<?php

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

```

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

Per trarre maggiori benefici di questo script raccomando l&#8217;uso di <a title="CronTab" href="https://it.wikipedia.org/wiki/Crontab" target="_blank">crontab</a> per automatizzare il processo.

Al momento lo script è molto basilare, in futuro credo che lo amplierò rendendolo più funzionale e user friendly. Mi farà piacere ricevere vostri commenti e consigli su come continuare a sviluppare lo script.

> Se lo script non funziona correttamente la causa più probabile è che lo script impiega molto tempo ad eseguirsi. Molti servizi di Hosting limitano il tempo massimo per cui uno script può rimanere in esecuzione. Per un server VPS (o dedicato) non ci sono problemi in quanto si può aumentare tale limite andando a modificare i parametri di PHP.

**Aggiornamento 8 Maggio 2013**  
Ho inserito la funzione `unlink()` che elimina il file dopo averlo caricato tramite FTP.