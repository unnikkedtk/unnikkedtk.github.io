---
title: Aggiornare gedit su Linux Mint 14 Maya
author: unnikked
layout: post
permalink: /aggiornare-gedit-linux-min/
gadgetry_post_viewed:
  - 128
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:46:"/wp-content/uploads/2012/12/gedit-darkmate.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:0:"";s:24:"gadgetry_thumbnail_image";s:46:"/wp-content/uploads/2012/12/gedit-darkmate.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
dsq_thread_id:
  - 993266875
itsec_enable_ssl:
  - 
categories:
  - Novità
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


**Linux Mint 14** ha di default la versione **2** di gedit, ma con un semplice trucchetto possiamo aggiornarla alla versione **3.6.1** (anche se l&#8217;ultima versione è la **3.6.2**).

<p style="text-align: center;">
  <a href="http://unnikked.tk/wp-content/uploads/2012/12/gedit_testata_salto.png"><img class="aligncenter size-full wp-image-117" title="gedit_testata_salto" src="http://unnikked.tk/wp-content/uploads/2012/12/gedit_testata_salto.png" alt="gedit" width="300" height="154" /></a>
</p>

Apriamo semplicemente una finestra di terminale e digitiamo :

<pre class="lang:default highlight:0 decode:true">sudo apt-get purge gedit
sudo apt-get purge gedit-common
sudo apt-get install gedit-common/quantal
sudo apt-get install gedit/quantal</pre>

Ecco qui avremo **gedit** aggiornato alla versione** 3.6.1**

Questa procedura è inoltre utilizzabile anche per chi utilizza **Ubuntu 12.10 Quantal Quetzal**, nel caso in cui si trovi installata una versione non recente di gedit.

Ecco la lista dei plugin contenuta nel pacchetto di gedit:

  * **Change case **&#8211; cambia le lettere da maiuscolo a minuscolo o viceversa.
  * **Document statistics **&#8211; Conta il numero di linee, parole, caratteri con spazio, caratteri senza spazio e i byte nel file corrente.
  * **External tools **&#8211; Esegue programmi esterni e ne mostra i risultati.
  * **File browser pane **&#8211; Visualizza e apre i file direttamente dal pannello laterale.
  * **Indent lines **&#8211; Indenta la seguente linea oppure la rimuove.
  * **Insert date/time **&#8211; Inserisce la data corrente nel documento.
  * **Snippets **&#8211; Da la possibilità di creare macro personalizzate per aumentare la produttività.
  * **Sort **&#8211; Riordina il testo selezionato.
  * **Spell checker **&#8211; Controlla l&#8217;ortografia al testo selezionato. Puoi configurare gedit per controllare l&#8217;ortografia automaticamente o manualmente nella lingua specificata.
  * **Tag list **&#8211; Mostra nel pannello laterale una lista dei più comuni tag inseriti nel file.
  * **User name** &#8211; Inserisce il nome dell&#8217;utente corrente nel file.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>