---
title: jDownloader su Ubuntu 12.10 Quantal Quezal
author: unnikked
layout: post
permalink: /jdownloader-ubuntu-12-10/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:51:"/wp-content/uploads/2012/12/jdownloader_testata.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:51:"/wp-content/uploads/2012/12/jdownloader_testata.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 86
dsq_thread_id:
  - 1381471102
itsec_enable_ssl:
  - 
categories:
  - Ubuntu
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


In questo articolo vedremo brevemente come installare **jDownloader** su Ubuntu 12.10 da repository. La repository funziona su tutte le versione di Ubuntu, Debian e derivate. Importante, per poter utilizzare JDownloader dovete avere installato la **Java Virtual Machine**, di norma è installato di default in tutte le distribuzioni Linux famose.

Per gli utenti **Windows** e **Mac **possono scaricare jDownloader dal [sito ufficiale ][1]dove è anche presente la versione per **Linux**. Inoltre è anche disponibile il codice sorgente del programma.

Per chi non lo sapesse jDownloader è (cito da wikipedia) :

> **JDownloader** è un gestore di downloadopen source scritto in linguaggio Java.
> 
> Esso dispone di numerose funzioni utili in particolare per chi utilizza siti di file hosting, come l&#8217;auto-estrazione di archivi compressi, l&#8217;unione di file divisi in più parti, il riconoscimento immediato di URL riconducibili a download, la possibilità di definire un limite massimo per la velocità di download e il riconoscimento di codici captcha.
> 
> Supporta inoltre l&#8217;uso di account premium per tutti i siti di file hosting (come, tra i più famosi, Rapidshare), ma può anche scaricare video daYoutube e molti altri siti. JDownloader offre anche la possibilità di cambiare l&#8217;indirizzo IP creando uno script di riconnessione.

Dopo aver spiegato brevemente le caratteristiche del programma arriviamo al dunque sull&#8217;installazione del software. Apriamo una finestra del terminale e da **root** o con il comando **sudo **digitiamo:

<pre class="lang:sh decode:true">sudo add-apt-repository ppa:jd-team/jdownloader
sudo apt-get update
sudo apt-get install jdownloader</pre>

E&#8217; anche possibile integrare jDownloader con **Unity**, per farlo basta scaricare il seguente pacchetto da repository :

<pre class="lang:sh decode:true">sudo add-apt-repository ppa:narfss/proyectobs
sudo apt-get update
sudo apt-get install unity-jdownloader</pre>

Ora apriamo jDownloader andiamo su *Estensioni -> Gestiore plugin *e spuntiamo la casella relativa alla voce *Controllo remoto JD*.

Et voilà ora avremo jDownloader integrato con Unity.

&nbsp;

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: http://jdownloader.org/download/index