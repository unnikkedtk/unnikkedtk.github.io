---
title: Come installare Etherpad, un web editor real time su Linux per collaborare insieme
author: unnikked
layout: post
permalink: /come-installare-etherpad/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:42:"/wp-content/uploads/2013/11/screenshot.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:42:"/wp-content/uploads/2013/11/screenshot.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
itsec_enable_ssl:
  - 
gadgetry_post_viewed:
  - 59
dsq_thread_id:
  - 2010264590
categories:
  - Linux
  - SysAdmin
  - Ubuntu
tags:
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Dopo aver visto <a href="installare-node-js-su-ubuntu" title="Come installare Node.js su Debian, Ubuntu e derivate" target="_blank">come installare Node.js</a> in questo articolo mostrerò una prima applicazione basata su esso. 

*<a href="http://etherpad.org/" title="Etherpad is an Open Source online editor providing collaborative editing in really real-time powered by Node.js" target="_blank">Etherpad</a>* è un progetto open source che mira a fornire un editor di testo accessibile via browser web il quale permette di collaborare in tempo reale sulla scrittura di un documento, ciò significa che un gruppo di utenti può modificare simultaneamente un documento in tempo reale e mentre si compie questa azione gli altri collaboratori possono vedere le modifiche in tempo reale. Etherpad offre anche una *chat box* separata nella stessa finestra del browser permettendo l&#8217;interazione tra i collaboratori durante l&#8217;editing del documento. 

### Installazione

Prima di poter installare Etherpad bisogna avere sulla propria macchina <a href="installare-node-js-su-ubuntu" title="Come installare Node.js su Debian, Ubuntu e derivate" target="_blank">Node.js</a>. Dopo averlo installato possiamo procedere alla installazione dell&#8217;editor:

<pre class="lang:sh decode:true " >sudo apt-get install gzip curl python libssl-dev pkg-config build-essential git
git clone http://github.com/ether/etherpad-lite.git
</pre>

Ci spostiamo nella cartella `bin` e lanciamo l&#8217;editor:

<pre class="lang:sh decode:true " >cd etherpad-lite/bin
./run.sh</pre>

La prima esecuzione del programma richiederà qualche minuto per la configurazione, una volta avviato possiamo raggiungere Etherpad all&#8217;indirizzo `http://127.0.0.1:9001` o `http://indirizzo_ip_macchina:9001`

Comparirà la pagina di principale di Etherpad come mostrata nella immagine

<img src="/wp-content/uploads/2013/11/Screenshot-from-2013-11-14-125544.png" alt="Etherpad_HomePage" class="aligncenter size-medium wp-image-1417" />

<p align="center">
  [SALTO] 
  
  <p>
    Per creare una nuova nota basta inserire un nome nel box che compare e cliccare su <code>OK</code>, si verrà reindirizzati sulla relativa pagina di editing e inoltre si otterrà un link del tipo <code>http://indirizzo_ip_macchina:9001/p/nomeinserito</code> che può essere mandato a chiunque si voglia invitare per la collaborazione.
  </p>
  
  <p>
    <img src="/wp-content/uploads/2013/11/Screenshot-from-2013-11-14-130507.png" alt="Etherpad_Editor" class="aligncenter size-full wp-image-1423" />
  </p>
  
  <p>
    Ogni utente invitato è associato un colore diverso in modo da avere chiarezza su chi sta modificando il documento in un istante di tempo.
  </p>
  
  <p>
    <img src="/wp-content/uploads/2013/11/Screenshot-from-2013-11-14-131704.png" alt="Etherpad_Collaborazione" class="aligncenter size-full wp-image-1426" />
  </p>
  
  <p>
    Mentre si sta modificando un documento, qualsiasi partecipante può salvare la revisione corrente del documento cliccando sul pulsante di salvataggio (la stella)
  </p>
  
  <p>
    <img src="/wp-content/uploads/2013/11/Screenshot-from-2013-11-14-132015.png" alt="Etherpad_Salvataggio" class="aligncenter size-full wp-image-1428" />
  </p>
  
  <p>
    Si può importare qualsiasi documento esterno, o esportare la revisione corrente su file.
  </p>
  
  <p>
    <img src="/wp-content/uploads/2013/11/Screenshot-from-2013-11-14-132259.png" alt="Etherpad_Import_Export" class="aligncenter size-full wp-image-1430" />
  </p>
  
  <p>
    Si può integrare l&#8217;interfaccia di editing in qualsiasi altra pagina <code>HTML</code> come <code>iframe</code>.
  </p>
  
  <p>
    <img src="/wp-content/uploads/2013/11/Screenshot-from-2013-11-14-132524.png" alt="Etherpad_Integrazione" class="aligncenter size-full wp-image-1432" />
  </p>
  
  <br />
  
  <div align="center">
    <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
  </div>