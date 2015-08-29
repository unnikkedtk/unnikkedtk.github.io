---
title: 'TimesApp &#8211; un&#8217;applicazione web opensource per freelancer'
author: unnikked
layout: post
permalink: /timesapp-applicazione-web-per-frelancer/
dsq_thread_id:
  - 3075099742
categories:
  - Senza categoria
tags:
  - Open Source
  - Self Hosted
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


TimesApp è un&#8217;applicazione opensource adatta per quella categoria di persone che sono alla ricerca di una webapp che le permette di tracciare il tempo, mirata per freelancer e piccole imprese. 

Ho già parlato in passato di <a href="solo-un-project-manager-adatto-per-freelancer" title="Solo: un Project Manager adatto per i Freelancer" target="_blank">un&#8217;applicazione simile</a>, voglio proporvi in questo articolo quest&#8217;altra alternativa per la gestione di progetti e clientela. 

La dashboard permette di avere tutto sotto controllo in un colpo d&#8217;occhio. 

<p align="center">
  <img src="/wp-content/uploads/2014/09/dashboard.png" alt="TimesApp - dashboard" />
</p>

E&#8217; possibile tracciare il tempo trascorso sui progetti. Ci sono diversi modi per inserire il tempo: tramite il timer integrato, a mano oppure con il client per i dispositivi Android.

<p align="center">
  <img src="/wp-content/uploads/2014/09/timer.png" alt="TimesApp - timer" />
</p>

TimesApp permette di creare tre diversi tipi di preset per rendere il processo di generazione delle fatture più facili: *Tasse*, *Servizi* e *Prodotti*.

<p align="center">
  <img src="/wp-content/uploads/2014/09/presets.png" alt="TimesApp - presets" />
</p>

E&#8217; possibile generare fatture da progetti esistenti o da zero, inviarle tramite email ai clienti o esportarle in PDF, aggiungere pagamenti e altro in soli pochi click.

<p align="center">
  <img src="/wp-content/uploads/2014/09/create_invoice.png" alt="TimesApp - create_invoice" />
</p>

## Installazione

Per installare l&#8217;applicazione dobbiamo per prima cosa configurare un <a href="apache-php-mysql" title="Come configurare un ambiente LAMP" target="_blank">ambiente LAMP</a> assicurandoci di aver abilitato <a href="come-abilitare-modulo-mod_rewrite" title="Come abilitare il modulo mod_rewrite di apache" target="_blank">mod_rewrite</a>. 

Scarichiamo l&#8217;ultima versione del software 

<pre class="lang:default decode:true " >sudo wget https://github.com/darkbox/TimesApp/tarball/master</pre>

E rinominiamo il file `master`

<pre class="lang:default decode:true " >sudo mv master master.tar.gz</pre>

Scompattiamo l&#8217;archivio

<pre class="lang:default decode:true " >sudo tar -xvf master.tar.gz</pre>

E spostiamo tutto il contenuto nella cartella corrente

<pre class="lang:default decode:true " >sudo mv darkbox-TimesApp-06229cd/* .
sudo mv darkbox-TimesApp-06229cd/.htaccess .</pre>

Ripristiniamo i permmessi per i file appena estratti

<pre class="lang:default decode:true " >sudo chown -R www-data:www-data .</pre>

Creiamo un database MySQL per l&#8217;applicazione

<pre class="lang:default decode:true " >mysql -u root -p -e 'CREATE DATABASE timesapp;'</pre>

Ora modifichiamo il file `app/Config/database.php` secondo le credenziali del nostro server

<pre class="lang:default decode:true " >public $default = array(
        'datasource' =&gt; 'Database/Mysql',
        'persistent' =&gt; false,
        'host' =&gt; 'localhost',
        'login' =&gt; 'timesapp',
        'password' =&gt; 'timesapp',
        'database' =&gt; 'timesapp',
        'prefix' =&gt; '',
        'encoding' =&gt; 'utf8',
    );</pre>

E importiamo il file `.SQL` di default

<pre class="lang:default decode:true " >sudo mysql -u root -p timesapp &lt; timesapp_empty_v0.1.9.sql </pre>

E&#8217; richiesta per l&#8217;applicazione che sia <a href="http://stackoverflow.com/a/10320202" title="Mysql Event scheduler on Linux" target="_blank">abilitata</a> la direttiva event_scheduler di MySQL, modifichiamo il file /etc/mysql/my.conf e aggiungiamo nella sezione [mysqld] 

<pre class="lang:default decode:true " >event_scheduler=ON</pre>

Possiamo ora visitare l&#8217;applicazione ed effettuare l&#8217;accesso con le credenziali di default `admin@timesapp.com` con password `Admin1234`.

E&#8217; caldamente consigliato dunque di cambiare le credenziali di accesso una volta installata l&#8217;applicazione. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>