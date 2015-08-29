---
title: Come configurare un sottodominio
author: unnikked
layout: post
permalink: /come-configurare-un-sottodominio/
itsec_enable_ssl:
  - 
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:65:"/wp-content/uploads/2013/06/DNS-Changer-il-luned&igrave;-nero.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:65:"/wp-content/uploads/2013/06/DNS-Changer-il-luned&igrave;-nero.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 187
dsq_thread_id:
  - 1458146750
categories:
  - Internet
  - SysAdmin
  - Webmaster
tags:
  - internet
  - VPS
  - webmaster
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


La configurazione di un <a href="http://it.wikipedia.org/wiki/Sottodominio" target="_blank">sottodominio</a> è molto simile alla configurazione di un nome dominio. La sola differenza è che il sottodominio è legato al corrispondente nome dominio. Una richiesta per il sottodominio (es. `http://ciao.unnikked.tk`) sarà instradato verso un *server DNS* che contiene l&#8217;informazione DNS del *dominio genitore* (`unnikked.tk`). Una volta che il *record DNS* viene risolto ottenendo un particolare *indirizzo IP*, la richiesta è inviata al *web server* in ascolto su tale indirizzo IP. Il web server può ora delegare la richiesta ad un particolare sito web basato sul nome del sottodominio.

<img class="aligncenter size-full wp-image-1092" alt="dns" src="http://unnikked.tk/wp-content/uploads/2013/06/dns.png" width="410" height="294" />

## Configurazione sottodominio sul server DNS

Per inoltrare (*forward*) la zona di ricerca (*lookup zone*) del dominio genitore nel server DNS esso dovrebbe contenere un puntatore al sottodominio utilizzando sia un *alias* (**CNAME**), un *hostname* (**A**) o uno scambiatore di email (*mail exchanger*) (**MX**). L&#8217;alias (CNAME) è usato per un sottodominio se il sottodominio punta ad un sito web che gira sullo stesso server web con lo stesso indirizzo IP del dominio genitore. Un record (A) hostname è usato se il sottodominio punta ad un diverso server web, o allo stesso server web che ascolta su un indirizzo IP diverso (come nel caso della distribuzione del carico di un sito web).

**Impostazione alias (CNAME):** Un alias punta al sottodominio presente nello stesso server web, che ospita il sito web del dominio genitore. I *nomi canonici* (**CNAMES**) sono aggiunti per ciascuno dei sottodomini mostrati qui sotto. Una volta che il sottodominio è risolto all&#8217;indirizzo IP del server web, esso può instradare la richiesta a diversi siti web (*guarda la sezione sulla configurazione del server web*). Nota che un alias per `www` è impostato come un sottodominio di default dalla maggior parte delle compagnie di hosting, perciò le richieste a `www.domain.com` sono inviati allo stesso sito web che gestisce le richieste per `domain.com`.

<pre class="lang:default decode:true">www IN CNAME domain.com.
subdomain1 IN CNAME domain.com.
subdomain2 IN CNAME domain.com.</pre>

**Impostazione record (A) indirizzo:** Una voce DNS hostname è richiesta se il sottodominio sta puntando ad un diverso indirizzo IP impostato per il nome dominio. Aggiungi un record indirizzo (A) per inoltrare la zona di ricerca del dominio genitore e associa l&#8217;indirizzo con l&#8217;ip del server web, che gestirà la richiesta per il sottodominio.

<pre class="lang:default decode:true">subdomain1 IN A 123.2.33.45.
subdomain2 IN A 123.2.33.46.</pre>

**Impostazione scambiatore email (MX): **La configurazione del sottodominio del scambiatore email è richiesto se un server email è configurato a gestire le email del sottodominio. Per esempio, un indirizzo email come `utente@ciao.unnikked.tk` richiederà una impostazione del sottodominio per risolvere il server email per `ciao.unnikked.tk`. La configurazione è simile all&#8217;impostazione CNAME ma con un record MX.

<pre class="lang:default decode:true">subdomain1 IN MX 10 subdomain1.domain.com.
subdomain2 IN MX 10 subdomain2.domain.com.</pre>

Se il sottodominio è configurato su un altro server DNS, deve essere creato un record *Name Server* (**NS**) per il sottodominio sul corrispondente server DNS, così può delegare la ricerca del sottodominio ad un altro name server. Usando diversi name server si possono eliminare problemi di sicurezza nel caso in cui il sottodominio è gestito da diversi amministratori. Comunque, la ricerca porta ad un *overhead* addizionale.

## Configurazione del web server per il sottodominio

Una volta che il server DNS è configurato per inviare le richieste dei sottodomini al corrispondente indirizzo IP, inizia il lavoro per il server web. Esso deve essere configurato in modo da gestire le richieste dei sottomini basati anche su indirizzi ip o voci di testata dell&#8217;host (*host header*). Essi sono comunemente usati dai server web per ospitare diversi domini o sottodomini su un solo indirizzo IP.

Il server web apache configura i sottodomini con voci di tipo `VirtualHost` nel file `httpd.conf` come mostrato di seguito.

<pre class="lang:default decode:true">Listen 80
NameVirtualHost *

&lt;VirtualHost *&gt;
ServerName www.domain.com
DocumentRoot /home/httpd/htdocs/
&lt;/VirtualHost&gt;

&lt;VirtualHost *&gt;
ServerName subdomain.domain.com
DocumentRoot /home/httpd/htdocs/subdomain/
&lt;/VirtualHost&gt;</pre>

<img class="aligncenter size-full wp-image-1094" alt="apache_web_server_logo_0" src="http://unnikked.tk/wp-content/uploads/2013/06/apache_web_server_logo_0.png" width="540" height="180" />

## Conclusioni

La configurazione dei sottodomini inizia con una voce nel server DNS del dominio genitore e la ricerca risolve il sottodominio ad un indirizzo IP del server web. Il server web di turno delega la richiesta basata sulla sua configurazione per il sottodominio. Diverse configurazioni di sottodomini possono essere usate effettivamente per distribuire il carico eventualmente tra le web application disponibili o i web server ascoltano su un indirizzo IP diverso. Il carico di distribuzione è ottenuto dalla caratteristica *<a href="http://it.wikipedia.org/wiki/Scheduling#RR" target="_blank">round robin</a>* del **BIND** del DNS.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>