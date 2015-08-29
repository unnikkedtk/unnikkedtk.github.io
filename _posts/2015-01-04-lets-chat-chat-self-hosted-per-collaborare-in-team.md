---
title: 'Let&#8217;s Chat &#8211; una chat self-hosted per collaborare in team'
author: unnikked
layout: post
permalink: /lets-chat-chat-self-hosted-per-collaborare-in-team/
dsq_thread_id:
  - 3388738016
categories:
  - Webmaster
tags:
  - Open Source
  - Self Hosted
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


<a href="https://github.com/sdelements/lets-chat" title="Let's Chat - Github repository" target="_blank">Let&#8217;s Chat</a> è una chat self-hosted pensata per piccoli gruppi. Supporta messaggi persistenti, room multiple, avvisi per nuovi messaggi, menzioni (@unnikked), integrazione di immagine, incolla codice, caricamento file, SSL/TLS. E&#8217; licenziata sotto la <a href="http://it.wikipedia.org/wiki/Licenza_MIT" title="Licenza MIT - Wikipedia" target="_blank">Licenza MIT</a>. 

Per utilizzare <a href="https://github.com/sdelements/lets-chat" title="Let's Chat: Self-hosted chat app for small teams" target="_blank">Let&#8217;s chat</a> abbiamo bisogno di Mongo DB, installiamolo da console tramite:

<pre class="lang:sh decode:true " >sudo apt-get install mongodb</pre>

E <a href="/installare-node-js-su-ubuntu/" title="Come installare Node.js su Debian, Ubuntu e derivate" target="_blank">Node.js</a> e npm:

<pre class="lang:sh decode:true " >sudo apt-get install nodejs npm</pre>

Cloniamo la repository di Let&#8217;s chat tramite `git`: 

<pre class="lang:sh decode:true " >git clone https://github.com/sdelements/lets-chat.git</pre>

Entriamo nella cartella di progetto: 

<pre class="lang:default decode:true " >cd lets-chat</pre>

e avviamo l&#8217;installazione tramite npm:

<pre class="lang:default decode:true " >sudo npm install</pre>

Creiamo un file di configurazione per l&#8217;applicazione:

<pre class="lang:sh decode:true " >cp settings.js.sample settings.js</pre>

Avviamo l&#8217;applicazione con:

<pre class="lang:sh decode:true " >node app.js</pre>

L&#8217;applicazione sarà disponibile presso l&#8217;indirizzo del vostro server sulla porta `5000`. 

Piccolo neo del progetto: la documentazione è assente.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>