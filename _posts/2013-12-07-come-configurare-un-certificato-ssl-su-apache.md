---
title: Come configurare un certificato SSL su Apache
author: unnikked
layout: post
permalink: /come-configurare-un-certificato-ssl-su-apache/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 2032855393
gadgetry_post_viewed:
  - 66
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:46:"/wp-content/uploads/2013/12/ssl-cover-logo.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:46:"/wp-content/uploads/2013/12/ssl-cover-logo.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
categories:
  - Linux
  - SysAdmin
  - Ubuntu
  - Webmaster
tags:
  - apache
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Durante la fase di realizzazione di un sito web a volte è necessario che la trasmissione dei dati avvenga in modo sicuro tra client e server, ciò per evitare azioni fraudolente da parte di malintenzionati. Un esempio: l&#8217;invio di un form `HTML` contenente informazioni sensibili come password, codici bancari etc. 

In `Internet` esiste un protocollo di comunicazione che permette l&#8217;interscambio dei dati tra client e server in modo sicuro e crittografato, ovvero <a href="http://it.wikipedia.org/wiki/HTTPS" title="HTTPS - Wikipedia" target="_blank">HTTPS</a>. 

In questo articolo vedremo come configurare apache per permettere il supporto del protocollo HTTPS.

Per prima cosa bisogna avere installato apache sulla propria macchina. Successivamente va abilitato il modulo `<a href="http://it.wikipedia.org/wiki/Secure_Sockets_Layer" title="SSL - Wikipedia" target="_blank">SSL</a>` tramite il comando:

<pre class="lang:sh decode:true">a2enmod ssl</pre>

Riavviamo il servizio `Apache` con:

<pre class="lang:sh decode:true">service apache2 restart</pre>

Successivamente andiamo a creare una nuova cartella in cui andremo a salvare il *certificato* e la *chiave*:

<pre class="lang:sh decode:true">mkdir /etc/apache2/ssl</pre>

Quando richiediamo un nuovo certificato, possiamo specificare la sua data entro la quale esso rimane valido cambiando il valore 365 con il numero dei giorni che si preferisce. In questo caso il certificato scadrà dopo un anno:

<pre class="lang:sh decode:true">openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt</pre>

Con questo comando creeremo sia il certificato `SSL` auto-firmato sia la `chiave` del server per proteggerlo, li metterà nella cartella specificata.

<p align="center">
  [SALTO] 
  
  <p>
    Il comando mostrerà sul terminare una lista di campi che bisogna compilare. La linea più importante è <em>&#8220;Common Name&#8221;</em>. Inserisci qui il nome dominio o, se ancora non è disponibile, l&#8217;indirizzo ip del server.
  </p>
  
  <pre class="lang:default highlight:0 decode:true">You are about to be asked to enter information that will be incorporated
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
Common Name (e.g. server FQDN or YOUR name) []:example.com                  
Email Address []:webmaster@awesomeinc.com</pre>
  
  <p>
    Una volta creato il certificato dobbiamo configurare il <code>Virtual Host</code> che andrà a mostrare il certificato. Apriamo il file:
  </p>
  
  <pre class="lang:sh decode:true">vim /etc/apache2/sites-available/default-ssl</pre>
  
  <p>
    Dentro la sezione che inizia con <code>
&lt;pre>&lt;VirtualHost *:443>&lt;/pre>
&lt;p></code> bisogna effettuare i seguenti cambiamenti. Aggiungiamo una linea con il nome del server sotto la email dell&#8217;amministratore di sistema:
  </p>
  
  <pre class="lang:sh decode:true">ServerName example.com:443</pre>
  
  <p>
    Sostituiamo <code>example.com</code> con il nome dominio o l&#8217;indirizzo ip del server (deve essere lo stesso come specificato nel campo <em>Common Name</em> sul certificato).
  </p>
  
  <p>
    Troviamo le seguenti tree linee e assicuriamoci che corrispondano al percorso dove è stato salvato il certificato e la chiave:
  </p>
  
  <pre class="lang:sh decode:true">SSLEngine on
SSLCertificateFile /etc/apache2/ssl/apache.crt
SSLCertificateKeyFile /etc/apache2/ssl/apache.key</pre>
  
  <p>
    Prima che il sito web sia disponibile sulla porta 443 bisogna abilitare il <code>Virtual Host</code> appena modificato:
  </p>
  
  <pre class="lang:sh decode:true">a2ensite default-ssl</pre>
  
  <p>
    Ora possiamo riavviare <code>Apache</code> per applicare le modifiche effettuate:
  </p>
  
  <pre class="lang:sh decode:true">service apache2 reload</pre>
  
  <p>
    Digitando nel browser <code>https://tuonomedominio</code> verrà mostrato il certificato.
  </p>
  
  <br />
  
  <div align="center">
    <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
  </div>