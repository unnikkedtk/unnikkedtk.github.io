---
title: 'SSHFS: client per montare un file system remoto tramite SSH'
author: unnikked
layout: post
permalink: /sshfs-montare-file-system-remoto/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:46:"/wp-content/uploads/2014/02/sshfs-man-page.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:46:"/wp-content/uploads/2014/02/sshfs-man-page.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 2271249881
gadgetry_post_viewed:
  - 51
categories:
  - Internet
  - Linux
  - SysAdmin
tags:
  - SSH
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


**SSHFS** (*SSH Filesystem*) è un client per montare e interagire con un filesystem situato su una macchina remota. 

Il client *SSHFS* interagisce con la macchina remota tramite il protocollo **SFTP** (<a href="http://it.wikipedia.org/wiki/SSH_File_Transfer_Protocol" title="SSH File Transfer Protocol - Da Wikipedia, l'enciclopedia libera." target="_blank">SSH File Transfer Protocol</a>) che fornisce funzionalità di accesso, trasferimento e gestione file utilizzando un flusso dati affidabile come estensione del protocollo <a href="come-connettersi-al-proprio-vps" title="Come connettersi al proprio VPS tramite SSH" target="_blank">SSH</a> (Secure Shell). 

L&#8217;implementazione, sul computer locale dove SSHFS viene montato, fa uso del modulo del kernel **FUSE** (<a href="http://it.wikipedia.org/wiki/FUSE" title="FUSE - Da Wikipedia, l'enciclopedia libera." target="_blank">Filesystem in Userspace</a>)

Questo particolare strumento è utile per quegli utenti che hanno necessità di modificare spesso file su una macchina remota senza avere una copia locale persistente dei file. 

Si integra bene anche con i più comuni file manager presenti per le distribuzioni, rendendo il filesystem remoto accessibile come qualsiasi periferica collegata al proprio pc. 

Gli utilizzi di questo client sono innumerevoli. 

<p align="center">
  <img src="/wp-content/uploads/2014/02/sshfs.png" alt="sshfs" />
</p>

<p align="center">
  [SALTO] 
  
  <h2>
    Installazione di SSHFS
  </h2>
  
  <p>
    Per installare <em>SSHFS</em> su una distribuzione Ubuntu Linux e derivata basta scaricare il pacchetto dai repository ufficiali:
  </p>
  
  <pre class="lang:sh decode:true " >apt-get install sshfs</pre>
  
  <p>
    Prima di montare il file system sul nostro computer creiamo una cartella in cui montare il filesystem remoto:
  </p>
  
  <pre class="lang:sh decode:true " >mkdir &lt;directory_locale> </pre>
  
  <p>
    e procediamo a montare il filesystem tramite:
  </p>
  
  <pre class="lang:default decode:true " >sshfs [&lt;utente>@]&lt;server>:&lt;/directory/da/montare> &lt;directory_locale>
</pre>
  
  <p>
    in cui <code>&lt;utente></code> è il nome utente, <code>&lt;server></code> è l&#8217;indirizzo del server, </directory/da/montare> è l&#8217;indirizzo della directory da montare (remota) e <code>&lt;directory_locale></code> è l&#8217;indirizzo della directory su cui montare (locale).
  </p>
  
  <p>
    Se <code>&lt;server></code> è un indirizzo <a href="http://it.wikipedia.org/wiki/IPv6" title="IPv6 - Da Wikipedia, l'enciclopedia libera." target="_blank">IPv6</a> è necessario racchiudere tale indirizzo tra parentesi quadre.
  </p>
  
  <p>
    Per smontare invece:
  </p>
  
  <pre class="lang:sh decode:true " >fusermount -u &lt;directory_locale&gt;</pre>
  
  <p>
    Per ulteriori informazioni per i vari parametri accettati consultate la pagina del manuale una volta installato tramite:
  </p>
  
  <pre class="lang:sh decode:true " >man sshfs</pre>
  
  <br />
  
  <div align="center">
    <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
  </div>