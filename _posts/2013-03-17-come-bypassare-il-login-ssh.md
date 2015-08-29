---
title: Come bypassare il login SSH
author: unnikked
layout: post
permalink: /come-bypassare-il-login-ssh/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:42:"/wp-content/uploads/2012/12/sftp_testa.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:42:"/wp-content/uploads/2012/12/sftp_testa.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 227
dsq_thread_id:
  - 1144257079
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
tags:
  - openssh
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Se siete stufi di inserire sempre la stessa password per accedere al vostro server remoto oppure effettuate spesso operazioni di trasferimento file tramite il comando **scp** o volete lanciare un comando sulla macchina remota senza però voler effettuare un accesso diretto, allora possiamo bypassare il processo di autenticazione facendo comunicare le due macchine tramite una chiave d&#8217;autenticazione comune.

La prima cosa che bisogna fare è generare una chiave (se l&#8217;avete già fatto saltate questo passaggio) tramite il comando:

<pre class="lang:sh decode:true">ssh-keygen -t rsa</pre>

verrà chiesto di scegliere una *passphrase* per la chiave (opzionale).

Successivamente usiamo questo comando per inserire la chiave nel server remoto:

<pre class="lang:sh decode:true">cat ~/.ssh/id_rsa.pub | ssh nomeutente@indirizzoip 'cat &gt;&gt; .ssh/authorized_keys'</pre>

dove **nomeutente** sta per il nome dell&#8217;utente su cui volete aggiungere la chiave e **indirizzoip** è l&#8217;indirizzo della macchina (o nome dominio); se non conoscete ancora la funzione di **ssh** leggete questo <a href="http://unnikked.tk/come-connettersi-al-proprio-vps/" target="_blank">articolo</a>. Inserite la password. Dopo di che dovreste essere in grado di accedere al server senza password, o anche usare **scp** o **rsync** senza inserire la password:

<pre class="lang:sh decode:true">ssh nomeutente@indirizzoip</pre>

dove **nomeutente** sta per il nome dell&#8217;utente su cui volete aggiungere la chiave e **indirizzoip** è l&#8217;indirizzo della macchina (o nome dominio).

<img class="aligncenter" alt="" src="http://unnikked.tk/wp-content/uploads/2013/03/ssh_rsa.png" />

## Metodo alternativo

Si può anche usare il comando **ssh-copy-id**. Per esempio, dopo aver generato la chiave, usate questo comando:

<pre class="lang:sh decode:true">ssh-copy-id -i ~/.ssh/id_rsa.pub nomeutente@indirizzoip</pre>

dove **nomeutente** sta per il nome dell&#8217;utente su cui volete aggiungere la chiave e **indirizzoip** è l&#8217;indirizzo della macchina (o nome dominio).

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>