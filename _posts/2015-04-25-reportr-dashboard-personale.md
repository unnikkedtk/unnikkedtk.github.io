---
title: 'Reportr &#8211; la tua dashboard personale'
author: unnikked
layout: post
permalink: /reportr-dashboard-personale/
dsq_thread_id:
  - 3711683444
categories:
  - SysAdmin
tags:
  - Reportr
  - Self Hosted
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Reportr è una applicazione completa che funziona come una dashboard personale per tracciare gli eventi (utilizza API molto semplici).

Sviluppata da <a href="https://github.com/SamyPesse" title="SamyPesse Github Profile" target="_blank">SamyPesse</a>, dispone di una interfaccia intuitiva, aiuta a tracciare e a mostrare le attività online o della vita reale.

Il progetto è completamente <a href="https://github.com/Reportr/dashboard" title="Reportr - Your personal Dashboard" target="_blank">open source</a> e può essere ospitato sul proprio server o su Heroku.

## Caratteristiche

  * **Traccia ogni cosa**: E&#8217; possibile usare reportr per tracciare ogni evento: online o offline.
  * **Grafici**:E&#8217; possibile visualizzare i dati i diversi modi: grafici a linea, torta, mappa, lista ecc.
  * **Open Source**: Il progetto è completamente gratuito e open source.
  * **Geo Data**: Reportr permette di visualizzare eventi geografici usando la visualizzazione a mappa.
  * **REST API**: E&#8217; facile da utilizzare tramite le API per l&#8217;inserimento di nuovi eventi tramite semplici richieste HTTP.
  * **Predizioni**: Usando il machine learning, Reportr ha la possibilità di predire l&#8217;evoluzione dei dati.

![reportr preview][1]

### Esempi di applicazioni

Di seguito vengono riportati alcuni esempi di utilizzo dell&#8217;applicazione. 

**Navigazione web**: Tramite <a href="https://github.com/Reportr/tracker-googlechrome" title="Reportr - Google Chrome tracker" target="_blank">questa estensione</a> è possibile misurare ed analizzare la navigazione web di Google Chrome. 

**Casa**: E&#8217; possibile <a href="https://github.com/Reportr/tracker-home-ambient" title="Reportr - Tracker Home" target="_blank">misurare</a> l&#8217;ambiente di casa (temperatura, umidità, suoni e livelli di luminosità) usando <a href="https://tessel.io" title="TESSEL 2 - BUILD YOUR PRODUCT FASTER." target="_blank">tessel.io</a>.

**Monitorizza**: Tramite questa <a href="https://github.com/Reportr/tracker-machine" title="Reportr - tracker machine" target="_blank">estensione</a> invece è possibile monitorizzare un computer (memoria, load cpu) e inviare i dati a Reportr per la visualizzazione.

## Installazione

Per installare reportr bisogna avere installato <a href="installare-node-js-su-ubuntu" title="Come installare Node.js su Debian, Ubuntu e derivate" target="_blank">Node.js e npm</a> e MongoDB.

<pre class="lang:sh decode:true " >sudo apt-get install mongodb</pre>

Cloniamo la repository: 

<pre class="lang:sh decode:true " >git clone https://github.com/Reportr/dashboard.git</pre>

Una volta entrati nella cartella lanciamo:

<pre class="lang:sh decode:true " >npm install .</pre>

Prima di avviare reportr bisogna installare foreman, è necessario installare ruby e rubygems: 

<pre class="lang:sh decode:true " >sudo apt-get install ruby1.9.3 ruby-dev</pre>

Installare quindi foreman:

<pre class="lang:sh decode:true " >sudo gem install foreman</pre>

Per avviare l&#8217;applicazione vi consiglio di creare un file `start.sh` inserendo all&#8217;interno il seguente contenuto:

<pre class="lang:sh decode:true " >#!/bin/bash

PORT=5001
export PORT

MONGODB_URL="mongodb://localhost/reportr"
export MONGODB_URL

AUTH_USERNAME="user"
export AUTH_USERNAME

AUTH_PASSWORD="pass"
export AUTH_PASSWORD

foreman start</pre>

L&#8217;applicazione sarà disponibile presso l&#8217;indirizzo `http://indirizzo_ip:5001`.

## Caso d&#8217;uso: monitoraggio carico server

Per mostrare la versatilità di reportr creiamo un report che ci colleziona i dati riguardanti il carico di un server. 

Creiamo un nuovo report: 

<img src="/wp-content/uploads/2015/04/reportr-new-report.png" alt="reportr-new-report" width="611" height="252" />

Prima ti poter creare una visualizzazione dobbiamo inviare un evento al server, consideriamo il seguente script bash: 

<pre class="lang:sh decode:true " >#!/bin/bash

LOAD="$(uptime | awk '{print $8}' | sed 's/,/./g')"
LOAD="${LOAD:0:-1}"
echo $LOAD

PAYLOAD='{ "type":"server.load", "properties": { "load":'"$LOAD"'} }'

curl \
	-X POST \
	--user user:pass \
	-H "Content-Type: application/json" \
	--data "$PAYLOAD" \
	http://192.168.33.10:5001/api/events</pre>

Eseguendolo si otterrà: 

<pre class="lang:sh decode:true " >0.19
{"posted":true}</pre>

Una volta inserito un evento è possibile creare una visualizzazione

![reportr-visualization][2]

Eseguendo lo script per un numero considerevole di tempo si avrà il grafico dell&#8217;evento: 

![reportr-use-case][3]

Per visualizzare il grafico ho dovuto personalizzare la visualizzazione

<p align="center">
  <img src="/wp-content/uploads/2015/04/reportr-customize.png" alt="reportr-customize" />
</p>

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: /wp-content/uploads/2015/03/reportr-preview.png
 [2]: /wp-content/uploads/2015/04/reportr-visualization.png
 [3]: /wp-content/uploads/2015/04/reportr-use-case.png