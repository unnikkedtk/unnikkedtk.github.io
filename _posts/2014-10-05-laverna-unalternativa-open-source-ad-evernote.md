---
title: 'Laverna &#8211; un&#8217;alternativa open source ad Evernote'
author: unnikked
layout: post
permalink: /laverna-unalternativa-open-source-ad-evernote/
dsq_thread_id:
  - 3085303440
categories:
  - Webmaster
tags:
  - apache
  - nodejs
  - Open Source
  - Produttività
  - Self Hosted
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


<a href="https://laverna.cc" title="Laverna - store your notes anonymously and encrypted" target="_blank">Laverna</a> è una applicazione web in scritta in <a href="http://it.wikipedia.org/wiki/JavaScript" title="JavaScript - Wikipedia" target="_blank">Javascript</a> che consente di creare note personali, integra un editor <a href="http://daringfireball.net/projects/markdown" title="Daring Fireball: Markdown" target="_blank">Markdown</a> e supporta la crittografia delle note. E&#8217; <a href="https://github.com/Laverna/laverna" title="Laverna/laverna · GitHub" target="_blank">open source</a> e mira a fornire un&#8217;alternativa ad <a href="https://www.evernote.com/" title="Evernote: The workspace for your life's work" target="_blank">Evernote</a>. 

Questa applicazione salva tutte le note nello spazio di salvataggio locale del browser come <a href="en.wikipedia.org/wiki/Indexed_Database_API" title="Indexed Database API - Wikipedia, the free encyclopedia" target="_blank">indexedDB</a> o <a href="http://diveintohtml5.info/storage.html" title="Local Storage - Dive Into HTML5" target="_blank">localStorage</a>, che è ottimo per la sicurezza, dato che solo l&#8217;utente del browser può accedervi. 

## Caratteristiche

  * Editor Markdown basato su Pagedown
  * Gestisci le tue note, anche se sei offline
  * Sicuro, crittografia lato client con gli algoritmi SJCL e AES
  * Sincronizza con i servizi cloud: al momento sono supportati solo Dropbox e RemoteStorage
  * Tre modalità di scrittura: senza distrazioni, anteprima e normale
  * Pulsanti di controllo <a href="http://it.wikipedia.org/wiki/WYSIWYG" title="WYSIWYG - Wikipedia" target="_blank">WYSIWYG</a>
  * Supporto a <a href="http://www.mathjax.org" title="MathJax" target="_blank">MathJax</a>
  * Non è richiesta nessuna registrazione
  * Basato su web
  * Shortcut da tastiera

Caratteristica peculiare dell&#8217;app è che è scritta solo tramite Javascript, per tale motivo non è necessario avere installato chissà quale modulo o applicativo per farla funzionare, vedremo due modalità di installazione, quella tramite sorgenti (ovvero creeremo la versione minificata dell&#8217;applicazione a partire dai sorgenti) e il deploying su un servizio di hosting condiviso come <a href="crea-il-tuo-sito-web-su-hostinger-it/" title="Crea il tuo sito web su Hostinger.it" target="_blank">Hostinger</a>. 

<!--nextpage-->

## Installazione dai sorgenti

Come requisito laverna richiede nodejs, è possibile vedere in questo articolo <a href="installare-node-js-su-ubuntu/" title="Come installare Node.js su Debian, Ubuntu e derivate" target="_blank">come installare nodejs</a> sul proprio server. 

Cloniamo la <a href="https://github.com/Laverna/laverna" title="Laverna - Github" target="_blank">repository</a> con git: 

<pre class="lang:default decode:true " >git clone https://github.com/Laverna/laverna.git</pre>

Entriamo nella cartella del progetto:

<pre class="lang:default decode:true " >cd laverna</pre>

E switchiamo sulla versione stabile dell&#8217;applicazione : 

<pre class="lang:default decode:true " >git checkout 0.6.2</pre>

Installiamo le seguenti dipendenze tramite npm: 

<pre class="lang:default decode:true " >npm install bower
npm install grunt
npm install grunt-cli</pre>

Installiamo ora le dipendenze di laverna: 

<pre class="lang:default decode:true " >npm install && bower install</pre>

E minifichiamo l&#8217;app:

<pre class="lang:default decode:true " >grunt build</pre>

Dopo aver aspettato la minificazione dei sorgenti possiamo passare al deploying dello stesso. 

E&#8217; possibile cambiare le chiavi delle API per il salvataggio in `app/scripts/constants.js`

Installiamo quindi il webserver apache (non è necessario avere un ambiente LAMP): 

<pre class="lang:default decode:true " >apt-get install apache2</pre>

Bisogna anche abilitare alcuni moduli apache per il corretto funzionamento di laverna:

<pre class="lang:default decode:true " >a2enmod rewrite headers expires</pre>

Riavviamo apache:

<pre class="lang:default decode:true " >service apache2 restart</pre>

Una volta installato portiamoci in `/var/www/` (`/var/www/html` per **Ubuntu 14.04 LTS**): 

<pre class="lang:default decode:true " >cd /var/www</pre>

e copiamo il contenuto della cartella app appena &#8220;compilata&#8221; nella cartella `www`:

<pre class="lang:default decode:true " >cp -r ~/laverna/app/* ~/laverna/app/.htaccess .</pre>

Ora possiamo aprire il browser e visualizzare laverna 

<p align="center">
  <img src="/wp-content/uploads/2014/06/laverna_home.png" alt="laverna_home" />
</p>

<!--nextpage-->

## Installazione su Hostinger</h3> 

Vedremo in questo paragrafo il deploying di laverna su un servizio di hosting condiviso come <a href="crea-il-tuo-sito-web-su-hostinger-it/" title="Crea il tuo sito web su Hostinger.it" target="_blank">Hostinger</a>. 

<p align="center">
  <img src="/wp-content/uploads/2014/06/download.png" alt="download laverna" />
</p>

Dopo aver creato l&#8217;account andiamo nella sezione Console SSH e digitiamo nella console che apparirà:

<pre class="lang:default decode:true " >cd public_html</pre>

successivamente scarichiamo l&#8217;archivio zip tramite il comando: 

<pre class="lang:default decode:true " >wget https://github.com/Laverna/static-laverna/archive/gh-pages.zip</pre>

Estraiamo ora dal Gestore File l&#8217;archivio zip appena scaricato: 

<p align="center">
  <img src="/wp-content/uploads/2014/06/laverna_estrai.png" alt="laverna_estrai" />
</p>

Dopo aver spostato il contenuto della cartella nella cartella principale dell&#8217;account possiamo visitare con il browser laverna al dominio specificato. 

<p align="center">
  <img src="/wp-content/uploads/2014/06/laverna_hostinger.png" alt="laverna_hostinger" />
</p>

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>