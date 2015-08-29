---
title: Compilare ed eseguire script java direttamente da gEdit
author: unnikked
layout: post
permalink: /compila-ed-esegui-script-java-gedit/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:44:"/wp-content/uploads/2013/02/script_gedit.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:44:"/wp-content/uploads/2013/02/script_gedit.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:139:"Script per gEdit che permette di velocizzare la compilazione e l&#039;esecuzione di uno script java direttamente dall&#039;editor di testi.";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 213
dsq_thread_id:
  - 1060971651
itsec_enable_ssl:
  - 
categories:
  - Java
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


A volte trovo molto utile usare un semplice editor di testo per modificare e sviluppare piccoli script invece di usare un IDE molto complesso, se da una parte gli IDE portano vantaggi sulla produttività di grossi progetti, dall&#8217;altra usare un IDE in un contesto &#8220;casereccio&#8221; può risultare molto scomodo.

Utilizzare invece un editor di testo come <a href="http://unnikked.tk/aggiornare-gedit-linux-min/" target="_blank">gEdit</a> per piccoli progetti o comunque per progetti che non richiedono strumenti avanzati di produzione, debugging e deploying, può risultare utile non solo per la loro semplicità d&#8217;utilizzo ma anche per l&#8217; interfaccia poco invasiva e la leggerezza per consumo di risorse.

Però nonostante tutto ci sono alcune attività, quali compilazione ed esecuzione degli script, che potrebbero risultare molto ripetitive e macchinose; gEdit presenta al suo interno un sistema che permette di automatizzare alcune operazioni di *routine *come la compilazione e l&#8217;esecuzione di un programma.

Da questa necessità ho girato un po&#8217; nella rete e ho trovato questo utilissimo script da configurare con gEdit che permette di automatizzare tale operazioni.

<pre class="theme:github lang:sh decode:true">#!/bin/sh

cd $GEDIT_CURRENT_DOCUMENT_DIR

python -c "
import os

arg = '$GEDIT_CURRENT_DOCUMENT_DIR/$GEDIT_CURRENT_DOCUMENT_NAME'
package = ''
data = open(arg, 'r').readlines()

for i in range(len(data)):
	temp = data[i].strip()
	if temp[0:7] == 'package':
		package = temp[8:len(temp)-1]

if package != '':
	for i in range(package.count('.') + 2):
		arg = arg[0:arg.rfind('/')]

	os.system('javac -cp ' + arg + ' ' + '$GEDIT_CURRENT_DOCUMENT_DIR/$GEDIT_CURRENT_DOCUMENT_NAME')
	os.system('java -classpath ' + arg + ' ' + package + '.' + '${GEDIT_CURRENT_DOCUMENT_NAME%.java}')
else:
	os.system('javac $GEDIT_CURRENT_DOCUMENT_NAME')
	os.system('java ${GEDIT_CURRENT_DOCUMENT_NAME%.java}')
"</pre>

**Nota: **per poter utilizzare questo snippet bisogna aver installato *python *

Apriamo *gEdit* e dalla barra dei menu ci spostiamo in *Tools -> Manage External Tools&#8230; *(assicuratevi di aver attivato il plugin dalle preferenze del programma)*  
*

![External Tools][1]

In questa finestra clicchiamo sul pulsante **+ **situato in basso a sinistra, ci verrà chiesto di inserire un nome al comando. Nel box *Edit *inserite lo script e configurate il comando come più preferite. **  
**

Inoltre questo script gestisce automaticamente il *classpath*** **dei package senza la necessità di configurare variabili d&#8217;ambiente.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: /wp-content/uploads/2013/02/gedit_externalTools.png