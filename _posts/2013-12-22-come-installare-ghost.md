---
title: Come installare Ghost
author: unnikked
layout: post
permalink: /come-installare-ghost/
dsq_thread_id:
  - 2067074734
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
  - Webmaster
tags:
  - nodejs
  - VPS
---

<a href="http://ghost.com" title="Ghost - Just a Blogging Platform" target="_blank">Ghost</a> è una nuova piattaforma blogging basata su <a href="installare-node-js-su-ubuntu" title="Come installare Node.js su Debian, Ubuntu e derivate" target="_blank">Node.js</a> che mira a fornire una piattaforma blogging innovativa, essa è nata grazie a <a href="http://www.kickstarter.com/projects/johnonolan/ghost-just-a-blogging-platform" title="Ghost: Just a Blogging Platform" target="_blank">Kickstarter</a>, nota piattaforma dove vengono proposte idee innovative al fine di raccogliere fondi per la loro realizzazione. 

In questo articolo vedremo come installare questa nuova piattaforma su un <a href="come-ottenere-e-configurare-un-server-vps" title="Come ottenere e configurare un server VPS" target="_blank">server VPS</a> che utilizza come sistema operativo **Ubuntu 12.10**, ma vale anche per altre distribuzioni. 

Per prima cosa bisogna avere installato <a href="installare-node-js-su-ubuntu" title="Come installare Node.js su Debian, Ubuntu e derivate" target="_blank">Node.js come descritto in questo precedente articolo</a>, assicuriamoci che la versione di <a href="http://nodejs.org/" title="Node.js" target="_blank">Node.js</a> installata sia almeno la **0.10**. 

Una volta installato Node.js possiamo procedere all&#8217;installazione di Ghost. Per prima cosa bisogna registrarsi sul <a href="http://www.ghost.org" title="Ghost - Just a Blogging Platform" target="_blank">sito ufficiale</a> per poter scaricare una copia del codice sorgente della piattaforma.

Creiamo la cartella su cui andremo ad ospitare Ghost:

<pre class="lang:default decode:true " >mkdir -p ~/ghost
cd ~/ghost</pre>

E scarichiamo in essa i sorgenti della piattaforma:

<pre class="lang:default decode:true " >wget https://ghost.org/zip/ghost-latest.zip</pre>

<p align="center">
  <p>
    Successivamente scompattiamo l&#8217;archivio con:
  </p>
  
  <pre class="lang:default decode:true " >unzip ghost-latest.zip</pre>
  
  <p>
    Installiamolo con:
  </p>
  
  <pre class="lang:default decode:true " >npm install --production</pre>
  
  <p>
    Prima di avviare il server dobbiamo effettuare una modifica al file di configurazione, creiamo una copia del file <code>config.example.js</code> su cui basarci:
  </p>
  
  <pre class="lang:default decode:true " >cp config.example.js config.js</pre>
  
  <p>
    Apriamo <code>config.js</code> con un editor di testo e inseriamo l&#8217;indirizzo IP del server su cui Ghost è ospitato e specifichiamo il nome dominio (campo url:)su cui il blog viene ospitato:
  </p>
  
  <p align="center">
    <img src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-22-170352.png" alt="Ghost config.js" />
  </p>
  
  <p>
    Al termine dell&#8217;installazione possiamo avviare la piattaforma:
  </p>
  
  <pre class="lang:default decode:true " >npm start --production</pre>
  
  <p>
    Il blog può essere raggiunto tramite <code>http://tuodominio:2368</code>.
  </p>
  
  <p>
    Per creare l&#8217;account di amministrazione basterà andare su <code>http://tuodominio:2368/ghost</code>.
  </p>
  
  <p>
    Per poter lasciare in background in esecuzione del server di Ghost basterà avviarlo utilizzando il comando <strong>nohup</strong> e specificando che il processo deve essere eseguito in background tramite <strong>&</strong>:
  </p>
  
  <pre class="lang:default decode:true " >nohup npm start --production &#038;</pre>
  
  <p>
    .
  </p>