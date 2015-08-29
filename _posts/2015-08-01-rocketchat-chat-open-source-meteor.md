---
title: 'RocketChat &#8211; una chat open source sviluppata con Meteor'
author: unnikked
layout: post
permalink: /rocketchat-chat-open-source-meteor/
dsq_thread_id:
  - 3826689304
categories:
  - Senza categoria
  - SysAdmin
  - Ubuntu
tags:
  - Open Source
  - Self Hosted
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


RocketChat mira a fornire una soluzione open source per creare una chat per team di collaborazione, si ispira a <a href="http://slack.com" target="_blank">Slack</a> che è una delle soluzioni più famose del momento.

E&#8217; sviluppata utilizzando la tecnologia Node.JS e MongoDB sfruttando la libreria <a href="https://www.meteor.com/" target="_blank">Meteor</a>, una libreria basata su Node.JS per lo sviluppo di applicazioni web.

## Caratteristiche

Seppure il progetto è ancora alle prime fasi esso già mette a disposizione le seguenti caratteristiche.

  * BYOS (bring your own server) &#8211; ovvero la possibilità di installazione su un server privato
  * Stanze Multiple
  * Messaggi diretti
  * Gruppi privati
  * Stanze pubbliche
  * Notifiche Desktop
  * Menzioni
  * Avatar
  * Markdown
  * Emojis
  * Trascrizioni / Cronologia
  * Internazionalizzazione I18n

La roadmap per la versione 1.0 prevederà:

  * Allega immagini
  * Caricamento file
  * Ricerca test
  * API REST
  * Integrazione con Hubot
  * Messaggistica Off-the-Record (OTR)
  * Autenticazione LDAP / Kerberos
  * XMPP Multi-user chat (MUC)
  * Segnalazione WebRTC
  * Applicazione mobile nativa
  * Applicazione desktop nativa

Per chi fosse interessato anche ad altre alterative segnalo anche <a href="http://lets-chat-chat-self-hosted-per-collaborare-in-team" target="_blank">Let&#8217;s chat</a>. 

## Installazione di RocketChat

Per prima cosa bisogna aver installato `git`:

<pre class="lang:sh decode:true ">sudo apt-get install git</pre>

RocketChat si basa su Node.JS per cui <a href="installare-node-js-su-ubuntu" target="_blank">installiamolo</a> tramite la repository:

<pre class="lang:sh decode:true ">sudo add-apt-repository -y ppa:chris-lea/node.js</pre>

Aggiorniamo le definizioni di repository e installiamo Node.js:

<pre class="lang:sh decode:true ">sudo apt-get update && sudo apt-get install -y nodejs</pre>

Come gestore database RocketChat fa utilizzo di MongoDB:

<pre class="lang:sh decode:true ">sudo apt-get install mongodb</pre>

E per finire come ultima dipendenza installiamo Meteor:

<pre class="lang:sh decode:true ">curl https://install.meteor.com/ | sh</pre>

Una volta installato Meteor scarichiamo la <a href="https://github.com/RocketChat/Rocket.Chat" target="_blank">repository</a> di progetto:

<pre class="lang:sh decode:true ">git clone https://github.com/RocketChat/Rocket.Chat.git</pre>

Ed entriamo nella cartella Rocket.Chat:

<pre class="lang:sh decode:true ">cd Rocket.Chat</pre>

Per iniziare il build e l&#8217;inizializzazione dell&#8217;applicazione digitiamo:

<pre class="lang:sh decode:true ">sudo meteor</pre>

<p align="center">
  <img src="/wp-content/uploads/2015/06/rocket.chat-run.png" alt="RocketChat-run" />
</p>

Il processo creerà l&#8217;utente di default `admin@admin` con password `admin`.

L&#8217;applicazione sarà disponibile presso `http://localhost:3000` o `http://:3000`

<p align="center">
  <img src="/wp-content/uploads/2015/06/rocket.chat_.png" alt="RocketChat" />
</p>

## Conclusioni

Sebbene il progetto sia ancora alle prime fasi ritengo che gli sviluppatori propongono una soluzione valida ed open source per le chat progettate appositamente per team di sviluppo o team di collaborazione. 

Con il progresso tecnologico e l&#8217;avvento di Internet non è raro trovare aziende i cui componenti sono sparsi per il globo. Avere gli strumenti adatti è una strategia vincente per la gestione e produttività del team. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>