---
title: Installa Java su Ubuntu e derivate tramite PPA
author: unnikked
layout: post
permalink: /installa-java-ppa/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:64:"http://unnikked.tk/wp-content/uploads/2013/05/JavaLogo_black.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:64:"http://unnikked.tk/wp-content/uploads/2013/05/JavaLogo_black.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 134
dsq_thread_id:
  - 1346195296
itsec_enable_ssl:
  - 
categories:
  - Java
  - Novità
  - SysAdmin
tags:
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Nei repository ufficiali di Canonical c&#8217;è la versione open di Java, la cosiddetta *OpenJDK*. La versione Java rilasciata dalla Oracle è stata tolta dai repository per problemi di licenza. Ma se si ha la necessità di utilizzare la versione rilasciata dalla Oracle possiamo farlo grazie al repository di <a href="http://www.webupd8.org/" target="_blank">Webupd8</a>.

Per i possessori di un **VPS** segnalo <a title="“add-apt-repository” aggiungi facilmente le repository" href="http://unnikked.tk/aggiungi-facilmente-le-repository/" target="_blank">questo articolo</a>, in cui è descritto come aggiungere il comando `add-apt-repository` per aggiungere *repository* nel proprio sistema tramite **PPA**.

Per installare **Oracle Java** digitiamo nel terminale

<pre class="lang:sh decode:true">sudo add-apt-repository ppa:webupd8team/java</pre>

e aggiorniamo la lista delle repository presenti nel sistema

<pre class="lang:sh decode:true">sudo apt-get update</pre>

e infine installiamo Java

<pre class="lang:default decode:true">sudo apt-get install oracle-java7-installer</pre>

Per verificare di aver installato la versione giusta di Oracle digitiamo da terminale.

<pre class="lang:sh decode:true">java -version</pre>

<img class="aligncenter" alt="" src="/wp-content/uploads/2013/05/javaversion.png" />

Se l’aggiornamento non fosse applicato automaticamente, potrete rendere predefinito Java 7 come JDK di sistema utilizzando il comando

<pre class="lang:sh decode:true">sudo update-alternatives --config java</pre>

<img class="aligncenter" alt="" src="/wp-content/uploads/2013/05/javaversionupdate.png" />

Segnalo che nella su detta repository è presente anche la futura versione **Java 8**.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>