---
title: Come configurare un certificato wildcard SSL su Apache
author: unnikked
layout: post
permalink: /certificato-wildcard-ssl-apache/
itsec_enable_ssl:
  - 
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:46:"/wp-content/uploads/2013/12/ssl-cover-logo.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:46:"/wp-content/uploads/2013/12/ssl-cover-logo.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
dsq_thread_id:
  - 2423258580
gadgetry_post_viewed:
  - 110
categories:
  - Internet
  - Webmaster
tags:
  - apache
  - ssl
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Abbiamo visto come sia possibile <a href="come-configurare-un-certificato-ssl-su-apache" title="Come configurare un certificato SSL su Apache" target="_blank">configurare un certificato SSL su Apache</a> per rendere più sicure le connessioni effettuare verso un sito web. 

Nel caso in cui hanno diversi sottodomini è naturale chiedersi se è possibile utilizzare uno stesso certificato per ognuno di essi. E&#8217; possibile ottenere questo risultato utilizzando un certificato wildcard. 

Questo articolo sarà molto breve e sintetico, illustrerò i comandi da utilizzare necessari per la configurazione di un certificato wildcard. 

Per approfondire la configurazione dei <a href="guida-ai-virtual-host-di-apache" title="Guida ai Virtual Host di Apache" target="_blank">Virtual Host di Apache</a> per i <a href="come-configurare-un-sottodominio" title="Come configurare un sottodominio" target="_blank">sottodomini</a> e la configurazione del <a href="come-configurare-un-certificato-ssl-su-apache" title="Come configurare un certificato SSL su Apache" target="_blank">certificato SSL</a> rimando ad altri miei articoli linkati in questo paragrafo.

Riferendoci al dominio `unnikked.tk` come caso d&#8217;uso, generiamo un certificato wildcard per tutti i sottodomini `*.unnikked.tk`. 

Da terminale digitiamo:

<pre class="lang:sh decode:true " >mkdir /etc/ssl/shared
cd /etc/ssl/shared
openssl genrsa 2048 &gt; host.key
openssl req -new -x509 -nodes -sha1 -days 3650 -key host.key &gt; host.cert</pre>

Il path di riga 1 e 2 può essere sostituito con uno di vostra scelta. Nella riga 3 generiamo una chiave privata a 2048 bit utilizzando l&#8217;algoritmo <a href="http://it.wikipedia.org/wiki/RSA" title="RSA - Da Wikipedia, l'enciclopedia libera" target="_blank">RSA</a>. Infine nella riga 4 generiamo il certificato valido per 3650 giorni, ovvero all&#8217;incirca 10 anni. 

Successivamente ci verrà mostrato a video il classico procedimento per inserire i dati del certificato, alla voce `Common Name` inseriamo *.unnikked.tk .

<pre class="lang:sh decode:true " >You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:New York
Locality Name (eg, city) []:NYC
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Awesome Inc
Organizational Unit Name (eg, section) []:Dept of Merriment
Common Name (e.g. server FQDN or YOUR name) []:*.unnikked.tk               
Email Address []:webmaster@awesomeinc.com</pre>

Dopo aver creato il certificato wildcard digitiamo i seguenti comandi: 

<pre class="lang:sh decode:true " >openssl x509 -noout -fingerprint -text &lt; host.cert &gt; host.info
cat host.cert host.key &gt; host.pem
chmod 400 host.key host.pem</pre>

Ora siamo pronti per utilizzare il certificato wildcard per i nostri sottodomini, particolare attenzione va prestata durante la definizione delle direttive `SSLCertificateFile` e `SSLCertificateKeyFile` :

<pre class="lang:sh decode:true " >SSLEngine On
SSLCertificateFile /etc/ssl/shared/host.pem
SSLCertificateKeyFile /etc/ssl/shared/host.key</pre>

Una volta configurati i file di Virtual Host per ogni sottodominio ricarichiamo la configurazione di Apache: 

<pre class="lang:sh decode:true " >service apache2 reload</pre>

Potrebbe essere mostrato il seguente messaggio di warning: 

<pre class="lang:sh decode:true " >[warn] _default_ VirtualHost overlap on port 443, the first has precedence</pre>

Basta inserire nel file `/etc/apache2/ports.conf` dentro la direttiva `<IfModule mod_ssl.c>`:

<pre class="lang:sh decode:true " >NameVirtualHost *:443</pre>

Riavviamo Apache per testare i sottodomini abilitati per la fruizione tramite protocollo <a href="http://it.wikipedia.org/wiki/HTTPS" title="HTTPS - Da Wikipedia, l'enciclopedia libera." target="_blank">https</a>. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>