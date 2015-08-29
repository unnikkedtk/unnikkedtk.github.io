---
title: Come installare Ghost
author: unnikked
layout: post
permalink: /come-installare-ghost/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:55:"/wp-content/uploads/2013/12/ghost-blogging-platform.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:55:"/wp-content/uploads/2013/12/ghost-blogging-platform.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
dsq_thread_id:
  - 2067074734
itsec_enable_ssl:
  - 
gadgetry_post_viewed:
  - 36
categories:
  - Linux
  - SysAdmin
  - Webmaster
tags:
  - nodejs
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


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
  [SALTO] 
  
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
  
  <br />
  
  <div align="center">
    <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
  </div>