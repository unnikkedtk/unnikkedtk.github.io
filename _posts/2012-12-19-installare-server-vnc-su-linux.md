---
title: Installare un server vnc su Linux
author: unnikked
excerpt: 'Aggiornamento articolo: Connessione criptata tramite SSH.'
layout: post
permalink: /installare-server-vnc-su-linux/
dsq_thread_id:
  - 979707469
gadgetry_post_viewed:
  - 260
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:47:"/wp-content/uploads/2012/12/vncserver_salto.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:47:"/wp-content/uploads/2012/12/vncserver_salto.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
tags:
  - VNC
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Vi sarà mai capitato di avere la necessità di controllare un computer remoto per aiutare un amico o semplicemente per controllare il proprio pc di casa per controllare lo stato dei torrent o di un upload importante? Oppure semplicemente avete un **<a href="http://it.wikipedia.org/wiki/Virtual_private_server" target="_blank">VPS</a> **ma ancora non avete la dimestichezza necessaria per abbandonare completamente l&#8217;ambiente grafico? Se la risposta a questa domanda è sì allora la risposta è di usare un **server vnc**.  
[quote_box author=&#8221;Wikipedia&#8221; profession=&#8221;&#8221;]I **Virtual Network Computing** (o **VNC**) sono software di controllo remoto e servono per amministrare il proprio computer a distanza: installando un server VNC sulla propria macchina ed impostando una opportuna password si consente ai client VNC di ricevere una immagine dello schermo e di inviare input di tastiera e mouse al computer server tramite una connessione remota. In pratica si può gestire il computer server da un&#8217;altra postazione, come se fosse il proprio computer fisico (applicazione di desktop remoto).[/quote_box] 

&nbsp;

La soluzione adatta nel nostro caso è **vncserver**. Questo pacchetto serve, appunto, per installare sulla propria macchina un server *vnc* su cui poi andremo a collegarci tramite un client.

<p style="text-align: center;">
  <a href="http://unnikked.tk/wp-content/uploads/2012/12/vncserver_salto.jpg"><img class="aligncenter size-full wp-image-178" title="vncserver" alt="vncserver" src="http://unnikked.tk/wp-content/uploads/2012/12/vncserver_salto.jpg" width="300" height="299" /></a>
</p>

<p style="text-align: left;">
  Da questo momento in poi assumo che stiate usando una distribuzione <strong>Debian </strong>o derivata come <strong>Ubuntu</strong>.
</p>

<p style="text-align: left;">
  Iniziamo con l&#8217;aggiornare i repository della distribuzione e la distribuzione stessa (se non si è <em>root</em> anteporre a tutte le istruzioni il comando <em>sudo</em>)
</p>

<pre class="lang:default highlight:0 decode:true">apt-get update
apt-get upgrade</pre>

Ora installiamo i pacchetti necessari alla configurazione del server

<pre class="lang:default highlight:0 decode:true">apt-get install tightvncserver xterm fluxbox iceweasel</pre>

e i font necessari per la visualizzazione corretta dei caratteri

<pre class="lang:default highlight:0 decode:true">apt-get install xfonts-base xfonts-75dpi xfonts-100dpi</pre>

ora portiamoci sulla home dell&#8217;utente creiamo la cartella *.vnc *e posizioniamoci su di essa

<pre class="lang:default highlight:0 decode:true">cd ~
mkdir .vnc
cd .vnc</pre>

Ora creiamo un file *xstartup *con **vim **o **nano **o qualsiasi altro editor di testi e scriviamo in questo la seguente linea

<pre class="lang:default decode:true">fluxbox</pre>

ora diamo i permessi esecutivi al file

<pre class="lang:default decode:true">chmod +x xstartup</pre>

e lanciamo il server

<pre class="lang:default decode:true">vncserver</pre>

Se tutto è andato a buon fine il server partirà e si metterà in *listening *sulla porta **5901 **(il programma segnala :1). Al primo avvio inoltre vi verrà chiesto di inserire la password per il server.

Per chiudere il server basta digitare

<pre class="lang:default highlight:0 decode:true">vncserver -kill :numeroporta</pre>

dove *numeroporta *sta per il numero usato per avviare il server (di default 1).

Per potersi collegare al server è necessario usare qualsiasi *client vnc* inserendo come porta quella impostata all&#8217;avvio del programma (Default :1) e come password quella impostata.

Per le distribuzioni Ubuntu è presente nei repository il client **vncviewer**, per installarlo:

<pre class="lang:default highlight:0 decode:true">apt-get install vnc-java</pre>

per collegarsi al server basta digitare nel terminale

<pre class="lang:default highlight:0 decode:true">vncviewer ipserver:numeroporta</pre>

dove *ipserver* sta per l&#8217;ip associato alla macchina oppure un nome *dominio.com* e infine *numeroporta *come spiegato sopra.

Verrà aperta una finestra in cui sarà chiesta la password.

Inoltre per completezza vi segnalo anche il comando per cambiare eventualmente la password impostata al primo avvio:

<pre class="lang:default decode:true">vncpasswd</pre>

Vi guiderà nella sostituzione della password.

&nbsp;

### Connessione criptata tramite SSH

E&#8217; possibile instaurare una connessione *ssh* tra il server *vnc* e la vostra macchina tramite il comando:

<pre class="lang:sh decode:true">ssh -f -N -L 5901:localhost:5901 ipserver:numeroporta</pre>

Successivamente riavviate il server vnc e collegatevi ad esso con qualsiasi client vnc.

&nbsp;

### Cambiare risoluzione dello schermo

Di default il server vnc apre una sessione con la risoluzione di default che è `800x600`, durante la fase di avvio è possibile specificare la risoluzione dello schermo virtuale:

<pre class="lang:sh decode:true " >vncserver :1 -geometry widthxheight -depth 24
</pre>

dove `width` e `height` sono rispettivamente larghezza e altezza della risoluzione espressi in pixel.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>