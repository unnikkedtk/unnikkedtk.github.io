---
title: '&#8220;add-apt-repository&#8221; aggiungi facilmente le repository'
author: unnikked
layout: post
permalink: /aggiungi-facilmente-le-repository/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:65:"/wp-content/uploads/2013/03/Screenshot-from-2013-03-02-200322.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:65:"/wp-content/uploads/2013/03/Screenshot-from-2013-03-02-200322.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:116:"Come aggiungere facilmente repository sulle distribuzioni Debian e Debian-based tramite lo script add-apt-repository";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 161
dsq_thread_id:
  - 1114319024
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

  


Se avete scelto di usare una distribuzione *Debian* o derivata da essa (Ubuntu), noterete subito che manca del comando &#8220;*add-apt-repository*&#8220;. Spesso i provider di servizi **VPS** per rendere l&#8217;installazione di un **VPS** il più efficiente e veloce possibile, usano immagini del sistema operativo scarne, ovvero installano solo gli strumenti strettamente necessari.  
L&#8217;utente quindi dovrà configurarsi tutto &#8220;*a mano*&#8220;. Per chi non è pratico a modificare i file di configurazione delle repository del sistema e non vuole rinunciare al comando **add-apt-repository**, vi segnalo qui di seguito uno script trovato in rete.

<pre class="lang:sh decode:true">#!/bin/bash
if [ $# -eq 1 ]
then
    ppa_name=`echo "$1" | cut -d":" -f2 -s`
    if [ -z "$ppa_name" ]
    then
        echo "PPA name not found"
        echo "Utility to add PPA repositories in your debian machine"
        echo "$0 ppa:user/ppa-name"
    else
        echo "$ppa_name"
        echo "deb http://ppa.launchpad.net/$ppa_name/ubuntu maverick main" &gt;&gt; /etc/apt/sources.list
        apt-get update &gt;&gt; /dev/null 2&gt; /tmp/apt_add_key.txt
        key=`cat /tmp/apt_add_key.txt | cut -d":" -f6 | cut -d" " -f3`
        apt-key adv --keyserver keyserver.ubuntu.com --recv-keys $key
        rm -rf /tmp/apt_add_key.txt
    fi
else
    echo "Utility to add PPA repositories in your debian machine"
    echo "$0 ppa:user/ppa-name"
fi</pre>

L&#8217;installazione è molto semplice: con i permessi di **root** posizionatevi nella cartella */usr/bin* e create un file chiamato **add-apt-repository**.

<pre class="lang:sh decode:true">touch add-apt-repository</pre>

Aprite il file appena creato con il vostro editor di testo preferito (**vim** o **nano** di solito sono presenti di default sul sistema), copiate e incollate il codice su proposto, salvate ed eseguite questo comando:

<pre class="lang:sh decode:true">chmod +x add-apt-repository</pre>

con questo comando abbiamo dato allo script i permessi di esecuzione. Per usare il comando basta digitare in qualsiasi posizione della shell:

<pre class="lang:sh decode:true">add-apt-repository ppa:nome_repository</pre>

dove *nome_repository* sta per la repository che vogliamo aggiungere al sistema, vi verrà chiesto di confermare l&#8217;inserimento, basta premere **INVIO** e automaticamente essa sarà aggiunta al sistema.

Ovviamente prima di poterla utilizzare bisogna aggiornare l&#8217;elenco delle repository presenti nel sistema con

<pre class="lang:sh decode:true">apt-get update</pre>

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>