---
title: Come aumentare la swap di un VPS
author: unnikked
layout: post
permalink: /aumentare-la-swap-di-un-vps/
dsq_thread_id:
  - 1096512933
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:58:"/wp-content/uploads/2013/02/RAM_-_closeup_of_connector.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:58:"/wp-content/uploads/2013/02/RAM_-_closeup_of_connector.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:173:"Con il termine swap si intende l&#039;estensione della capacit&agrave; della memoria volatile complessiva del computer, oltre il limite imposto dalla quantit&agrave; di RAM.";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 196
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
tags:
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Molti servizi VPS offrono macchine virtuali che garantiscono una soglia massima di RAM (Esempio 512 MB) senza utilizzare alcuna partizione di swap; può risultare utile utilizzarla per cercare di avere un margine di sicurezza sui software installati sul VPS per evitare crash o **kill** di un processo che richiede più risorse di quelle disponibili sulla macchina.

In Linux è possibile allocare parte dello spazio su disco come swap, senza la necessità di andare a ripartizionare il disco o reinstallare il sistema; per fare ciò ci avvaleremo del comando **dd**:

<pre class="lang:sh decode:true">dd if=/dev/zero of=/swapfile bs=1024 count=1048576
mkswap -f /swapfile 
swapon /swapfile</pre>

dove con **count** indichiamo la dimensione in *kilobyte* dello spazio che vogliamo allocare.  
Il comando **mkswap -f** crea il file di swap con nome */swapfile*; infine con **swapon** montiamo il file di swap.

Con questi comandi abbiamo solo creato e montato la swap aggiuntiva ma, ad un eventuale riavvio, il file di swap non viene montato automaticamente, per rendere questo processo automatico bisogna modificare **fstab**, per cui apriamo il file */etc/fstab* e aggiungiamo la seguente linea:

<pre class="lang:default decode:true">/swapfile   none   swap   sw 0 0</pre>

<div class="su-tabs su-tabs-style-default" data-active="1">
  <div class="su-tabs-nav">
    <span class="" data-url="" data-target="blank">Nota</span>
  </div>
  
  <div class="su-tabs-panes">
    <div class="su-tabs-pane su-clearfix">
      Il <strong>kernel Linux 2.6</strong> ha aggiunto un nuovo parametro al kernel chiamato <em><a href="http://en.wikipedia.org/wiki/Swappiness" target="_blank">swappiness</a></em> che permette agli amministratori di modificare il modo in cui Linux effettua lo swap. E&#8217; un numero che va da <strong></strong> a <strong>100</strong>. In sintesi, un valore alto porta ad un numero elevato di pagine di essere &#8220;swappate&#8221;, e un numero basso comporta un maggior numero di applicazioni mantenuti in memoria <em>RAM</em>, anche se sono inattive.</p> 
      
      <p>
        Il valore di default di <em>swappiness</em> è <strong>60</strong>. Si può anche alterarlo temporaneamente (fino al prossimo reboot) digitando come <strong>root</strong>:
      </p>
      
      <pre class="lang:default decode:true">echo 50 &gt; /proc/sys/vm/swappiness</pre>
      
      <p>
        Se si vuole rendere permanente la modifica bisogna cambiare il paramentro <em>vm.swappiness</em> nel file <em>/etc/sysctl.conf</em></div></div></div> 
        
        <p>
          Unico inconveniente di questo sistema, è che le prestazioni generali del sistema potrebbero essere ancora peggiori di una normale partizione adibita all&#8217;avvicendamento dei processi, in quanto il file risiede sul file system del sistema operativo per cui è soggetta ai servizi del file system stesso.
        </p>
        
        <br />
        
        <div align="center">
          <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
        </div>