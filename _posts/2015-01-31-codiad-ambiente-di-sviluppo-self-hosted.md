---
title: 'Codiad &#8211; un ambiente di sviluppo self hosted e web based'
author: unnikked
layout: post
permalink: /codiad-ambiente-di-sviluppo-self-hosted/
dsq_thread_id:
  - 3472453930
categories:
  - Programmazione
tags:
  - Open Source
  - Self Hosted
  - VPS
---

Codiad è un ambiente di sviluppo integrato (IDE) minimale e che presenta molte caratteristiche.

## Caratteristiche

E&#8217; stato progettato con lo scopo di renderlo semplice per permettere uno sviluppo veloce e interattivo senza il sovraccarico eccessivo degli editor per desktop.

  * Supporto per più di 40 linguaggi
  * Libreria Plugin
  * Controllo errori e notifica
  * Supporto multiutente
  * Divisione dell&#8217;area di lavoro
  * Ridondanza tramite LocalStorage
  * Strumenti di ricerca avanzati
  * Auto-completamento intelligente
  * Editing collaborativo real time
  * Più di 20 schemi di colori per la sintassi
  * Completamente <a href="https://github.com/Codiad/Codiad" target="_blank">Oper-Source</a>
  * Sorgente facilmente personalizzabile
  * Quick-Download backups
  * Backup veloci da scaricare
  * Spazio massimizzato per l&#8217;editor
  * Supporto per il linguaggio i18n

## Interfaccia

Codiad consiste in tre pannelli; un pannello a sinistra che ospita il gestore dei file e dei file correntemente utilizzati. 

Un pannello centrale in cui risiede l&#8217;editor di testo e un pannello laterale a destra in cui sono presenti controlli di sistema e vari. 

I pannelli laterali scompaiono a vista per fornire il massimo spazio per l&#8217;editor.

<p align="center">
  <img src="/wp-content/uploads/2015/01/screenshot_12_27.png" alt="screenshot_12_27" />
</p>

## Requisiti

Codiad richiede una installazione server di base con Apache2, PHP5+ e permessi di accesso per diverse cartelle. Non è richiesto alcun database.

L&#8217;applicazione funziona su tutti i moderni browse come Chrome, Firefox, e IE9+.

## Installazione

L&#8217;installazione di Codiad è molto semplice, una volta installato <a href="/apache-php-mysql/" title="Come configurare un ambiente LAMP" target="_blank">Apache e PHP</a> bisogna creare un <a href="/guida-ai-virtual-host-di-apache/" title="Guida ai Virtual Host di Apache" target="_blank">VirtualHost per apache</a> (o installarlo direttamente in `/var/www`). 

E&#8217; consigliato di usare un VirtualHost strutturato così: 

<pre class="lang:default decode:true " >&lt;VirtualHost *:80&gt;
        DocumentRoot /var/www
        &lt;Directory /&gt;
                Options -Indexes FollowSymLinks MultiViews
        &lt;/Directory&gt;

        # If you want to disable php execution in your workspace, remove the comments
        #&lt;DirectoryMatch "^.+/workspace"&gt;
        #        AllowOverride None
        #        Options -Execcgi -Indexes -FollowSymLinks -MultiViews
        #        RemoveHandler .php .phtml .php3 .php4 .php5 .cgi .htaccess
        #        Addhandler text/plain .php .phtml .php3 .php4 .php5 .cgi .htaccess
        #        php_admin_flag engine off
        #        Deny from all
        #&lt;/DirectoryMatch&gt;
&lt;/VirtualHost&gt;</pre>

Una volta entrati nella cartella designata per Codiad <a href="https://github.com/Codiad/Codiad/releases" title="Codiad rilasci" target="_blank">scarichiamo</a> l&#8217;applicativo. 

<pre class="lang:default decode:true " >wget https://github.com/Codiad/Codiad/archive/v.2.5.1.tar.gz</pre>

Estraiamo l&#8217;archivio tramite `tar`:

<pre class="lang:default decode:true " >tar -xvf v.2.5.1.tar.gz</pre>

Spostiamo i file contenuti nella cartella estratta nella cartella corrente di Codiad: 

<pre class="lang:default decode:true " >mv Codiad-v.2.5.1/* .</pre>

Eliminamo la cartella e l&#8217;archivio estratto.

<pre class="lang:default decode:true " >rm -rf Codiad-v.2.5.1/ v.2.5.1.tar.gz</pre>

Ripristiniamo i permessi all&#8217;utente www-data:

<pre class="lang:default decode:true " >chown -R www-data:www-data .
</pre>

Visitando l&#8217;indirizzo di Codiad è possibile accedere alla piattaforma per la registrazione dell&#8217;account utente principale. 

<p align="center">
  <img src="/wp-content/uploads/2015/01/codiad-configurazione-iniziale.png" alt="codiad-configurazione-iniziale" />
</p>

## Plugin

Sono presenti svariati <a href="http://market.codiad.com/" title="Codiad - Plugin" target="_blank">plugin</a> con cui è possibile estendere le capacità di questa applicazione, dall&#8217;integrazione con git a strumenti per la collaborazione in team. 

Buon coding! 