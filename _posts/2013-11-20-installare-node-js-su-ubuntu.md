---
title: Come installare Node.js su Debian, Ubuntu e derivate
author: unnikked
layout: post
permalink: /installare-node-js-su-ubuntu/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:4:"true";s:22:"gadgetry_disable_video";s:4:"true";s:26:"gadgetry_disable_post_meta";s:4:"true";s:23:"gadgetry_disable_author";s:4:"true";s:31:"gadgetry_disable_published_date";s:4:"true";s:24:"gadgetry_disable_coments";s:4:"true";s:28:"gadgetry_disable_author_info";s:4:"true";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:47:"/wp-content/uploads/2013/11/nodejs-1024x768.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:10:"alignright";s:24:"gadgetry_thumbnail_image";s:47:"/wp-content/uploads/2013/11/nodejs-1024x768.png";s:27:"gadgetry_thumbnail_position";s:10:"alignright";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
itsec_enable_ssl:
  - 
gadgetry_post_viewed:
  - 132
dsq_thread_id:
  - 1981861802
categories:
  - Linux
  - SysAdmin
  - Ubuntu
  - Webmaster
tags:
  - nodejs
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


`<a href="http://nodejs.org/" title="Node.js" target="_blank">Node.js</a>` è una piattaforma software basato sul <a href="https://code.google.com/p/v8/" title="V8 JavaScript Engine - Google Code" target="_blank">JavaScript engine V8 di Google</a>. E’ comunemente usato per costruire applicazioni server side ad alte prestazioni utilizzando Javascript. Tale engine sta riscuotendo sempre più successo nella comunità open-source.

`Node.js` è disponibile come pacchetti su alcune distro, mentre in alcuni casi bisogna installarlo dai sorgenti. Dal momento che è in costante sviluppo è raccomandato installare l’ultima versione dai sorgenti invece di installare un pacchetto non aggiornato. L’ultima versione di `Node.js` si ottiene tramite `<a href="https://npmjs.org/" title="Node.js Package Manager" target="_blank">npm</a>` (il gestore dei pacchetti di `Node.js`) che permette di installare facilmente moduli esterni a `Node.js`.

### Installazione su Debian {#nodejs-su-debian.wmd-title}

Su Debian, è possibile installare Node.js dai sorgenti:

<pre>sudo apt-get install python g++ make
wget http://nodejs.org/dist/node-latest.tar.gz
tar xvfvz node-latest.tar.gz
cd node-v0.10.21 (sostituisci la versione con quella scaricata)
./configure
make
sudo make install</pre>

### Installazione su Ubuntu o Linux Mint {#nodejs-su-ubuntu-o-linux-mint.wmd-title}

Node.js è presente in Ubuntu (13.04 e superiori). Pertanto il comando da eseguire è il seguente:

<pre>sudo apt-get install nodejs</pre>

E’ possibile installare una versione più recente di Node.js tramite il suo [PPA][1]:

<pre>sudo apt-get install python-software-properties python g++ make
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs</pre>

### Come avviare un server

Per avviare un semplice server HTTP basta copiare questo esempio di codice javascript in un file: 

<pre class="lang:js decode:true " >var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello Worldn');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');</pre>

e avviarlo tramite il comando `node`:

<pre class="lang:sh decode:true " >node example.js</pre>

Visitando il link` http://127.0.0.1:8124 `(ovvero `localhost` sulla porta `8124`) o tramite indirizzo ip pubblico associato al server si potrà ottenere una pagina `HTML` statica con scritto *Hello World*.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: https://launchpad.net/~chris-lea/+archive/node.js