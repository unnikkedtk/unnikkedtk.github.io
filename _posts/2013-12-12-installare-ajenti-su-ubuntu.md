---
title: Come installare Ajenti su Ubuntu
author: unnikked
layout: post
permalink: /installare-ajenti-su-ubuntu/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:43:"/wp-content/uploads/2013/12/thunderclap.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:43:"/wp-content/uploads/2013/12/thunderclap.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 2045839467
gadgetry_post_viewed:
  - 59
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

  


`Ajenti` è un pannello di amministrazione per server, open source, disponibile su `Linux` e `FreeBSD` che supporta varie configurazioni software per server con un una raffinata interfaccia utente.

`Ajenti` include molti plugin pronti all&#8217;uso che permettono la configurazione sia del sistema operativo che dei pacchetti software. La lista dei software supportati include **<a title="Guida ai Virtual Host di Apache" href="guida-ai-virtual-host-di-apache" target="_blank">Apache</a>**, **BIND9**, **<a title="Esegui operazioni automaticamente tramite crontab" href="operazioni-automatiche-crontab" target="_blank">Cron</a>**, **CTDB**, **DHCPD**, **NFSD**, **Iptables**, **Munin**, **<a title="Come configurare un ambiente LAMP" href="apache-php-mysql" target="_blank">MySQL</a>**, **Netatalk**, **NGINX**, **PostgreSQL**, **Samba**, **lm-sensors**, **Squid 3**, **Supervisor**.

Dispone di una interfaccia veloce e *responsive*, utilizza poca memoria e dispone di strumenti come **gestore file**, **terminale** e **editor di codice**, tutto ciò che un amministratore necessita.

Quindi si presenta come una valida alternativa al ben famoso `<a title="Webmin - Homepage" href="http://www.webmin.com/" target="_blank">Webmin</a>`.

<div class="su-error" style="padding:10px;border:1px solid #f03;color:#903;background:#fde">
  <strong>slider</strong><br />images not found
</div>

Per installare `Ajenti` aggiungiamo la chiave della repository:

<pre class="lang:sh decode:true ">wget http://repo.ajenti.org/debian/key -O- | apt-key add -</pre>

Aggiungiamo la repository in `/etc/apt/sources.list`:

<pre class="lang:sh decode:true ">echo "deb http://repo.ajenti.org/ng/debian main main ubuntu" &gt;&gt; /etc/apt/sources.list</pre>

<p align="center">
  [SALTO] 
  
  <p>
    Installiamo il pacchetto:
  </p>
  
  <pre class="lang:sh decode:true ">apt-get update && apt-get install ajenti</pre>
  
  <p>
    Avviamo il servizio:
  </p>
  
  <pre class="lang:sh decode:true ">service ajenti restart</pre>
  
  <p>
    Il pannello è disponibile tramite <code>HTTPS</code> sulla porta <code>8000</code>. La username di default è <strong>root</strong> e la password è <strong>admin</strong>.
  </p>
  
  <p>
    Si raccomanda di cambiare la password di <strong>root</strong> dopo aver installato il software per far ciò bisogna andare nella sezione <em>Configura -> UTENTI</em>
  </p>
  
  <p align="center">
    <img alt="Dashboard" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-12-142744.png" />
  </p>
  
  <p>
    e cliccare su <em>Modifica password</em>
  </p>
  
  <p align="center">
    <img alt="Modifica password" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-12-142932.png" />
  </p>
  
  <p>
    Confermiamo i cambiamenti cliccando sul tasto <em>Salva</em> e riavviamo il pannello cliccando su <em>Riavvia</em>.
  </p>
  
  <br />
  
  <div align="center">
    <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
  </div>