---
title: 'Ethersheet &#8211; collaborazione realtime su foglio di calcolo'
author: unnikked
layout: post
permalink: /ethersheet-collaborazione-foglio-calcolo/
bwps_enable_ssl:
  - 
dsq_thread_id:
  - 3730094728
categories:
  - Webmaster
tags:
  - nodejs
  - Open Source
  - Self Hosted
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Ethersheet è uno strumento <a href="https://github.com/ethersheet-collective/EtherSheet" title="Ethersheet su GitHub" target="_blank">open source</a> per <a href="https://ethersheet.org" title="Ethersheet" target="_blank">collaborare</a> su fogli di calcolo in modo facile, veloce e sicuro. 

In passato ho mostrato un progetto simile, chiamato <a href="come-installare-etherpad" title="Come installare Etherpad, un web editor real time su Linux per collaborare insieme" target="_blank">Etherpad</a>, che permette la collaborazione su documenti di testo. 

## Caratteristiche

  * Collaborazione su fogli di calcolo in real time
  * Ogni foglio di calcolo può contenere più sottofogli
  * Importazione ed esportazione di dati tramite il formato CSV

Una piccola nota negativa: al momento supporta poche funzioni. 

## Installazione di Ethersheet

Per prima cosa bisogna <a href="installare-node-js-su-ubuntu" title="Come installare Node.js su Debian, Ubuntu e derivate" target="_blank">installare Node.js</a> per poter provare l&#8217;applicazione. 

Successivamente bisogna installare `git`, ci servirà per scaricare l&#8217;ultima versione di Ethersheet:

<pre class="lang:default decode:true " >sudo apt-get install git</pre>

Scarichiamo ora l&#8217;ultima versione di Ethersheet tramite la repository di GitHub:

<pre class="lang:default decode:true " >git clone https://github.com/ethersheet-collective/EtherSheet.git</pre>

Entriamo nella cartella della repository:

<pre class="lang:default decode:true " >cd EtherSheet</pre>

Eseguiamo ora l&#8217;installazione:

<pre class="lang:default decode:true " >npm install</pre>

Creiamo un file di configurazione di default:

<pre class="lang:sh decode:true " >cp examples/config-example.js config.js</pre>

Prima di avviare l&#8217;applicazione è necessario creare un database MySQL, se non si ha installato MySQL:

<pre class="lang:sh decode:true " >sudo apt-get install mysql-server</pre>

Importiamo lo schema del database che si trova in `examples/`

<pre class="lang:sh decode:true " >mysql -u root -p
mysql&gt; source examples/db.sql</pre>

Una volta configurato il file `config.js` secondo i parametri del database

![ethersheet-configjs][1]

E&#8217; possibile avviare Ethersheet tramite:

<pre class="lang:sh decode:true " >npm start</pre>

che sara disponibile presso `http://indirizzo_ip:8080`

## Calcolo di PI

Mostro un piccolo esempio di come sia facile ed intuitivo utilizzare questa applicazione. 

La creazione di un foglio di calcolo è semplice, basta inserire il nome. 

![ethersheet-create][2]

Si presenterà la familiare griglia di un qualsiasi programma di foglio di calcolo. 

Si genererà anche nella barra degli indirizzi l&#8217;indirizzo da fornire agli altri per iniziare la collaborazione online, per esempio `http://indirizzo_ip:8080/s/pi`

Per calcolare la costante matematica Pi Greco basta inserire in qualsiasi cella la seguente formula `=product(4, atan(1))`

![ethersheet-pi][3]

Lascio a voi la scoperta delle funzionalità di Ethersheet. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: /wp-content/uploads/2015/04/ethersheet-configjs.png
 [2]: /wp-content/uploads/2015/04/ethersheet-create.png
 [3]: /wp-content/uploads/2015/04/ethersheet-pi.png