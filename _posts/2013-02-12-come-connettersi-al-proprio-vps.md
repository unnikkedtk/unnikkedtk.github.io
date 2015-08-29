---
title: Come connettersi al proprio VPS tramite SSH
author: unnikked
layout: post
permalink: /come-connettersi-al-proprio-vps/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:39:"/wp-content/uploads/2013/02/vps_ssh.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:39:"/wp-content/uploads/2013/02/vps_ssh.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:90:"Dopo aver ottenuto un server VPS bisogna collegarsi ad esso tramite ssh per poterlo usare.";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 229
dsq_thread_id:
  - 1078885763
itsec_enable_ssl:
  - 
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

  


Nell&#8217; articolo introduttivo abbiamo visto a cosa serve un VPS e come ottenerlo, se siete riusciti ad ottenere un account di prova oppure avete acquistato un pacchetto dai vari siti elencati è ora giunto il momento di connettersi al server. Ma come facciamo a connetterci se il computer è lontano da noi? A questo &#8220;problema&#8221; ci viene incontro il protocollo **SSH**.

SSH è un moderno protocollo di rete che permette di stabilire una sessione remota cifrata tramite interfaccia a riga di comando con un altro host di una rete informatica, questo protocollo va a sostituire i vecchi **telnet**, **rlogin** e l&#8217;ancora usato **ftp**.

Nella maggior parte delle distribuzioni è presente un pacchetto chiamato **OpenSSH** che racchiude in se tutti gli strumenti necessari per fa comunicare due computer tramite una connessione internet.

Per connettersi ad un server remoto basta digitare da terminale :

<pre class="lang:default highlight:0 decode:true ">ssh nomeutente@indirizzoipdellamacchina</pre>

dove *nomeutente* è il nome dell&#8217;account su cui autenticarsi (di solito è **root** ma è sconsigliato usarlo come profilo principale) e *indirizzoipdellamacchina* è l&#8217;ip della macchina oppure può essere anche un nome dominio del tipo *example.com*. Una volta lanciato il comando dopo pochi secondi ci verrà chiesto la password.  
Queste informazioni di solito vengono comunicate tramite email oppure basti andare sul pannello di controllo del fornitore del servizio e trovare nell&#8217;apposita sezione i dati necessari.

Una volta autenticati è come se fossimo a tutti gli effetti seduti davanti al computer, per cui possiamo avviare programmi e usare i comandi tipici della shell linux.

In questo pacchetto ci sono anche altri comandi da utilizzare che ci facilitano alcuni compiti.

## Copiare file tra host

Il comando **scp** permette di copiare un file da un host locale a uno remoto con questa sintassi:

<pre class="lang:default highlight:0 decode:true ">scp percorsoFileLocale nomeUtenteRemoto@indirizzoIP:PercorsoDestinazioneRemota</pre>

Dove *percorsoFileLocale* è il percorso del file locale che si vuole copiare sulla macchina remota, *nomeUtenteRemoto* è il nome dell&#8217;utente con cui autenticarsi, *indirizzoIP* come sopra e *PercorsoDestinazioneRemota* è il percorso di destinazione in cui si vuole copiare il file.

Una volta lanciato il comando vi sarà chiesto di inserire la password di *nomeUtenteRemoto* e comparirà una barra di avanzamento che ci indica la percentuale e il tempo rimanente al trasferimento del file.

Per il viceversa, cioè trasferire un file remoto su un computer locale, bisogna usare il comando nel seguente modo:

<pre class="lang:default highlight:0 decode:true ">scp nomeUtenteRemoto@indirizzoIP:PercorsoFileRemoto PercorsoDestinazioneLocale</pre>

<div class="su-tabs su-tabs-style-default" data-active="1">
  <div class="su-tabs-nav">
    <span class="" data-url="" data-target="blank">Attenzione</span>
  </div>
  
  <div class="su-tabs-panes">
    <div class="su-tabs-pane su-clearfix">
      Il comando scp non può essere usato per trasferire file tra computer remoti, ma solo tra un computer locale ed uno remoto.
    </div>
  </div>
</div>

## Eseguire un comando su un computer remoto

Per eseguire un singolo comando su un computer remoto, usare il comando **ssh** secondo il seguente modello:

<pre class="lang:default highlight:0 decode:true ">ssh nomeutente@indirizzoIP</pre>

## Usare un programma grafico sul computer remoto

È possibile avviare un&#8217;applicazione grafica sul computer remoto e visualizzarla sul computer locale, grazie a una tecnica chiamata** X11 Forwarding**. Gli unici requisiti del computer locale sono una connessione abbastanza veloce con il computer remoto e l&#8217;installazione di base del server **X11**, mentre non ci sono requisiti particolari per il computer remoto. Potrebbe inoltre essere necessaria l&#8217;installazione del pacchetto **xauth** sul computer locale.

Prima di tutto è necessario autorizzare il server grafico del computer remoto (con server ssh attivo) ad accettare connessioni in entrata dal computer locale, quindi sul computer remoto aprire una finestra di terminale e digitare:

<pre class="lang:default highlight:0 decode:true ">xhost +</pre>

<div class="su-tabs su-tabs-style-default" data-active="1">
  <div class="su-tabs-nav">
    <span class="" data-url="" data-target="blank">Attenzione</span>
  </div>
  
  <div class="su-tabs-panes">
    <div class="su-tabs-pane su-clearfix">
      Se l&#8217;esecuzione di questo comando dovesse fallire sarà necessario installare il pacchetto xauth.
    </div>
  </div>
</div>

Successivamente per collegarsi al computer remoto digitare:

<pre class="lang:default highlight:0 decode:true ">ssh -X utenteremoto@computerremoto</pre>

Per chi volesse approfondire di più l&#8217;argomento consiglio questa <a href="http://wiki.ubuntu-it.org/InternetRete/DesktopRemoto/OpenSsh" target="_blank">guida</a> della wiki di Ubuntu.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>