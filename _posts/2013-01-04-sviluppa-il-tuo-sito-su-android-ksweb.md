---
title: Sviluppa il tuo sito su Android con KSWEB!
author: unnikked
layout: post
permalink: /sviluppa-il-tuo-sito-su-android-ksweb/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:75:"/wp-content/uploads/2013/01/Sviluppa-il-tuo-sito-web-su-Android_Testata.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:75:"/wp-content/uploads/2013/01/Sviluppa-il-tuo-sito-web-su-Android_Testata.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:57:"Sviluppa siti in PHP e MySQL sul tuo dispositivo Android!";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 248
dsq_thread_id:
  - 1008228068
itsec_enable_ssl:
  - 
categories:
  - Android
tags:
  - webmaster
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


In questo articolo vedremo due soluzioni, che ho trovato sul Play Store, che ci permettono di avere un ambiente per sviluppare siti web direttamente sul **tablet** o **smarthpone** Android. In questo articolo parlerò di **KSWEB** scaricabile da <a href="https://play.google.com/store/apps/details?id=ru.kslabs.ksweb&hl=it" target="_blank">qui</a> e, in un prossimo articolo, parlerò di **PAW Server**.

## KSWEB

KSWEB molto semplicemente una volta scaricato installerà automaticamente un server *lighttpd*, *PHP* e *MySQL*. L&#8217;unico neo però è che l&#8217;app è in versione di prova per 5 giorni, dopodiché va comprata. Per testare le potenzialità di questa app ho installato WordPress nella versione 3.5.

![KSWEB Main App][1]</a> 

&nbsp;

Per prima cosa ho installato phpMyAdmin per poter creare un database con il nome &#8220;*wordpress*&#8220;. Clicchiamo su &#8220;*phpMyAdmin*&#8220;; se non è installato si installerà automaticamente altrimenti vi reindirizzerà sul vostro browser. Per creare un database andate su *Database -> Crea *dopo aver ovviamente inserito il nome del database.

<img alt="KSWEB PHPMyAdmin" src="/wp-content/uploads/2013/01/Screenshot_2013-01-04-18-16-40.png" width="300" height="187" />

&nbsp;

Scaricate nella cartella  /*sdcard/htdocs/* il pacchetto che trovate in questa<a href="http://it.wordpress.org/" target="_blank"> pagina</a> e scompattate l&#8217;archivio .zip

Assicuriamoci di aver aperto il server e, da Chrome (o qualsiasi altro browser) portiamoci su questa pagina

<pre class="lang:default highlight:0 decode:true">http://localhost:8080/wordpress-3.5-it_IT/wordpress/</pre>

nel mio caso, potrebbe variare da come viene scompattato l&#8217;archivio.

![KSWEB Installazione WordPress][2]

&nbsp;

Clicchiamo su &#8220;*Crea un file di configurazione*&#8221; e compiliamo i dati con

  * **Nome database:** wordpress
  * **Nome utente:** root
  * **Password:** lasciatela vuota
  * **Host del database:** localhost
  * **Prefisso tabella:** lasciatela così come è

<div>
  cliccate su &#8220;<em>invia</em>&#8220;
</div>

<div>
</div>

<div>
  <p>
    <img alt="KSWEB Form Installazione WordPress" src="/wp-content/uploads/2013/01/Screenshot_2013-01-04-18-20-38.png" />
  </p>
</div>

<div>
  Se tutto è andato a buon fine clicchiamo su &#8220;<em>Esegui e installa</em>&#8221; . Compiliamo il modulo con utente e password e un&#8217; email e clicchiamo su &#8220;<em>Installa WordPress&#8221; </em>per completare l&#8217;installazione.
</div>

<div>
</div>

<div>
  Ed eccomi loggato nel pannello di controllo di WordPress 😀
</div>

<div>
</div>

<div>
  <p>
    <img alt="KSWEB Pannello Admin WordPress" src="/wp-content/uploads/2013/01/Screenshot_2013-01-04-18-23-47.png" />
  </p>
  
  <p>
    L&#8217;ambiente risulta essere stabile senza particolari rallentamenti sul mio tablet. A mio parere è un applicazione valida dal momento che non c&#8217;è bisogno dei permessi di<strong> </strong><span style="text-decoration: underline;"><strong>root</strong></span>!
  </p>
</div>

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: /wp-content/uploads/2013/01/Screenshot_2013-01-04-17-30-51.png
 [2]: /wp-content/uploads/2013/01/Screenshot_2013-01-04-18-18-16