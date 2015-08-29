---
title: 'Prosody &#8211; un server XMPP scritto in Lua'
author: unnikked
layout: post
permalink: /prosody-server-xmpp/
dsq_thread_id:
  - 3870210982
categories:
  - Senza categoria
  - Ubuntu
tags:
  - XMPP
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Prosody è un <a href="https://prosody.im/" target="_blank">server</a> <a href="https://it.wikipedia.org/wiki/Extensible_Messaging_and_Presence_Protocol" target="_blank">XMPP</a>/<a href="http://www.jabber.org/" target="_blank">Jabber</a> scritto in Lua con lo scopo di essere semplice e leggero. Prosody usa meno risorse rispetto ad altri progetti simili ed è progettato per essere semplice da configurare ed usare. <a href="https://www.ejabberd.im/" target="_blank">Ejabberd</a> o <a href="http://www.igniterealtime.org/projects/openfire/" target="_blank">OpenFire</a> potrebbero essere progetti più mirati per applicazioni più grandi, ma per la maggior parte degli utilizzi su piccola scala Prosody è la soluzione più efficiente in termini di risorse.

## Installazione

L&#8217;installazione di Prosody su Ubuntu e Debian è facilitata dalla messa a disposizione di una repository dedicata per Ubuntu lucid, precise, trusty, utopic, vivid e Debian sid, squeeze, wheezy, jessie.

E&#8217; addirittura compatibile con il sistema operativo Raspbian, basterà usare il nome in codice wheezy.

Per aggiungere la repository basta digitare il seguente comando nella console dei comandi.

<pre class="lang:default decode:true ">echo deb http://packages.prosody.im/debian $(lsb_release -sc) main | sudo tee -a /etc/apt/sources.list</pre>

Dove il comando `lsb_release -sc` ritornerà il nome in codice della distribuzione utilizzata.

> Assicurati di cambiare tale stringa con wheezy nel caso in cui lo vuoi installare su una RaspberryPi.

Una volta aggiunta la definizione bisogna scaricare la relativa chiave pubblica con il comando

<pre class="lang:sh decode:true ">wget https://prosody.im/files/prosody-debian-packages.key -O- | sudo apt-key add -</pre>

Aggiorniamo le definizioni e procediamo con l&#8217;installazione di Prosody.

<pre class="lang:sh decode:true ">sudo apt-get update && sudo apt-get install -y prosody</pre>

## Un minimo di configurazione

Il file di configurazione di Prosody si trova in `/etc/prosody/prosody.cfg.lua` ed utilizza la sintassi Lua; nulla di particolare, le direttive saranno intuitive da scrivere.

Per specificare a quali host il server fa riferimento bisogna utilizzare la direttiva `VirtualHost`, io per esempio ho aggiunto

<pre class="lang:lua decode:true ">VirtualHost "prosody.local"</pre>

ovviamente dopo aver configurato una <a href="/gestire-macchine-virtuali-vagrant/" target="_blank">box vagrant</a> e aggiunto un record statico nel file `<a href="/guida-file-hosts-in-linux/" target="_blank">/etc/hosts</a>`.

Impostando invece la direttiva `allow_registration` a `true` si abilita la creazione di nuovi account.

<pre class="lang:lua decode:true ">allow_registration = true;</pre>

Infine è possibile specificare gli account amministratori tramite la tabella `admins`, per esempio

<pre class="lang:lua decode:true ">admins = { "user1@example.com", "user2@example.net" }</pre>

L&#8217;aggiunta di nuovi utenti avviene tramite il comando `prosodyctl`:

<pre class="lang:sh decode:true ">sudo prosodyctl adduser unnikked@prosody.local</pre>

Una volta applicata questa configurazione elementare è necessario riavviare il server.

<pre class="lang:sh decode:true ">sudo service prosody restart</pre>

## Connessione tramite Pidgin

Per testare la corretta installazione di Prosody faremo uso di <a href="https://pidgin.im/" target="_blank">Pidgin</a>, un client di messaggistica istantanea che supporta il protocollo XMPP.

<pre class="lang:sh decode:true ">sudo apt-get install pidgin</pre>

Per aggiungere un nuovo account basta andare nella sezione apposita dalla barra degli strumenti e configurare il client come nella seguente immagine.

<p align="center">
  <img src="/wp-content/uploads/2015/06/prosody-account.png" alt="prosody-account" />
</p>

Per questa installazione basica è necessario disabilitare la connessione SSL dalla sezione `Avanzate`

<p align="center">
  <img src="/wp-content/uploads/2015/06/prosody-account-avanzate.png" alt="prosody-account-avanzate" />
</p>

Una volta aggiunti un paio di account di prova è possibile testare il corretto funzionamento del server.

<p align="center">
  <img src="/wp-content/uploads/2015/06/Schermata-del-2015-06-22-215556.png" alt="pidgin-chat" />
</p>

## Conclusioni

Abbiamo appena completato una installazione elementare di Prosody, non adatta ad essere utilizzata sulla rete Internet pubblica, questo articolo serve come trampolino per la configurazione finale di un client XMPP che funziona tramite browser web, ovvero <a href="http://getkaiwa.com" target="_blank">Kaiwa</a>.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>