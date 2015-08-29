---
title: 'CacoCloud &#8211; client email, feed, password e preferiti'
author: unnikked
layout: post
permalink: /cacocloud-email-feed-password-preferiti/
dsq_thread_id:
  - 3254281683
categories:
  - Novità
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


<a href="http://cacodaimon.github.io/CacoCloud/" title="A SIMPLE, FAST AND SECURE SELF HOSTED FEED AND MAIL READER, PASSWORD AND BOOKMARK MANAGER." target="_blank">CacoCloud</a> è un gestore feed, password, preferiti e client mail sviluppato in PHP e AngularJS. 

E&#8217; un progetto opensource sviluppato da <a href="https://github.com/Cacodaimon" title="Cacodaimon (Guido Krömer)" target="_blank">Guido Krömer</a> e ospitato su <a href="https://github.com/Cacodaimon/CacoCloud" title="A simple, fast and secure PHP/AngularJS based feed and mail reader, password and bookmark manager." target="_blank">GitHub</a>

Il backend è sviluppato con la filosofia RESTful in PHP e salva tutti i dati in un database <a href="http://www.sqlite.org/" title="SQLite - Home" target="_blank">SQLite</a>, il backend è sviluppato tramite <a href="http://angularjs.org/" title="Angular.js - Home" target="_blank">AngularJS</a>

## Installazione

Dopo aver installato <a href="apache-php-mysql" title="Come configurare un ambiente LAMP" target="_blank">un ambiente LAMP</a> assicuriamoci di soddisfare queste dipendenze:

<pre class="lang:sh decode:true " >apt-get install php5-sqlite php5-mcrypt php5-imap libpcre3 php5-curl</pre>

Abilitiamo il modulo `php5-imap` (di default su ubuntu sembra non abilitarsi da solo):

<pre class="lang:sh decode:true ">php5enmod imap</pre>

E assicuriamoci di aver abilitato i vari moduli apache richiesti:<pre class"lang:sh decode:true">a2enmod ssl; a2enmod php5; a2enmod headers; a2enmod deflate; a2enmod rewrite</pre> 

E riavviamo apache:

<pre class="lang:sh decode:true ">service apache2 restart</pre>

Assicuriamoci anche che la direttiva `DocumentRoot` e `Directory` del <a href="guida-ai-virtual-host-di-apache" title="Guida ai Virtual Host di Apache" target="_blank">VirtualHost</a> puntino alla cartella `public`

<pre class="lang:sh decode:true">DocumentRoot /var/www/cacocloud.local/public
&lt;Directory /var/www/cacocloud.local/public>
    #direttive
&lt;/Directory></pre>

<div class="su-box su-box-style-default" style="border-color:#292929;">
  <div class="su-box-title" style="background-color:#333333;color:#FFFFFF;">
    Info
  </div>
  
  <div class="su-box-content su-clearfix">
    Consiglio vivamente in ambiente produttivo di rendere accessibile l&#8217;applicativo attraverso <a href="come-configurare-un-certificato-ssl-su-apache" title="Come configurare un certificato SSL su Apache" target="_blank">https</a>
  </div>
</div>

Per prima cosa entriamo nella cartella `/var/www`:

<pre class="lang:sh decode:true " >cd /var/www</pre>

Scarichiamo l&#8217;ultima copia dalla repository tramite `wget`:

<pre class="lang:sh decode:true " >wget http://cacodaimon.github.io/CacoCloud/download/CacoCloud.tar.gz</pre>

Estraiamo l&#8217;archivio tramite `tar`:

<pre class="lang:default decode:true " >tar -xvf CacoCloud.tar.gz</pre>

Poiché le istruzioni sono state eseguite da `root`, ripristiniamo il proprietario e il gruppo a `www-data` (apache):

<pre class="lang:scheme decode:true " >chown -R www-data:www-data *</pre>

Apriamo il browser per iniziare l&#8217;installazione dell&#8217;applicazione

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-21-120117.png" alt="CacoCloud - Requisiti" />
</p>

Se tutte le dipendenze risultano soddisfatte clicchiamo su &#8220;*Proceed*&#8221; per la creazione del database.

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-21-115901.png" alt="CacoCloud - Database" /></a>
</p>

Creiamo ora un nuovo accesso utente per l&#8217;amministrazione dell&#8217;app:

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-21-120248.png" alt="CacoCloud - Utente" />
</p>

E completiamo l&#8217;installazione eliminando la cartella `public/install`

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-21-120359.png" alt="CacoCloud - Installazione Completata" />
</p>

<pre class="lang:sh decode:true">rm -rf public/install</pre>

Possiamo ora accedere alla installazione.

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-21-120617.png" alt="CacoCloud - login" />
</p>

## Client Email

Dalla sezione email è possibile aggiungere un nuovo account di posta: 

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-21-121032.png" alt="CacoCloud - Client email" />
</p>

Ovviamente i parametri dipendono dal fornitore del servizio di posta, per cui vi consiglio di consultare la guida utenti o la conoscenza di base. 

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-21-121546.png" alt="CacoCloud - Client email visualizzazione" />
</p>

Il client email non è tra i più avanzati ma ha le funzionalità essenziali.

## Lettore Feed RSS

Tramite il lettore feed RSS possiamo sempre tenerci aggiornati sulle ultime novità dei nostri siti preferiti, per aggiungere un nuovo feed basta cliccare su &#8220;Add Feed&#8221;. 

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-21-123238.png" alt="CacoCloud - Feed" />
</p>

Per poi consultare le singole voci:

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-21-123703.png" alt="CacoCloud - Feed RSS" />
</p>

## Bookmark

La sezione bookmark ci aiuterà a mantenere ordinati e accessibile ovunque le nostre pagine preferite, come unmark. 

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-21-123824.png" alt="CacoCloud - Bookmark" />
</p>

## Gestore Password

Tramite la comoda interfaccia è possibile gestire le proprie password. 

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-21-124901.png" alt="CacoCloud - Password" />
</p>

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>