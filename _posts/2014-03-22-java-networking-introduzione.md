---
title: 'Java Networking : introduzione'
author: unnikked
layout: post
permalink: /java-networking-introduzione/
itsec_enable_ssl:
  - 
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:42:"/wp-content/uploads/2014/03/networking.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:42:"/wp-content/uploads/2014/03/networking.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:156:"Utilizzando Java vedremo come sia possibile creare facilmente applicazioni distribuite. Ma prima &egrave; necessario introdurre alcuni concetti elementari. ";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 146
dsq_thread_id:
  - 2484749747
dw-grid:
  - normal
categories:
  - Internet
  - Java
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


I computer che si collegano ad Internet comunicano tra di loro utilizzando sia <a title="Transmission Control Protocol - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Transmission_Control_Protocol" target="_blank">Transmission Control Protocol</a> (**TCP**) che <a title="User Datagram Protocol - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/User_Datagram_Protocol" target="_blank">User Datagram Protocol</a> (**UDP**), come mostra il diagramma<sup>[<a id="note1back" href="#note1">1</a>]</sup> schematicamente:  
<!--more-->

<p align="center">
  <img alt="1netw" src="/wp-content/uploads/2013/12/1netw.gif" />
</p>

Quando si scrive un programma Java che comunica sulla rete si programma sullo *<a title="Livello applicazioni - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Livello_applicazioni" target="_blank">strato applicazione</a>*. Tipicamente non è necessario conoscere lo strato **TCP** o **UDP**. Si possono usare, invece, le classi del package `java.net`. Queste classi forniscono un sistema indipendente per la comunicazione sulla rete. Per decidere quale classe usare, bisogna conoscere le differenze tra **TCP** e **UDP**.

## TCP

Quando due applicazioni vogliono comunicare tra loro in modo affidabile essi stabiliscono una connessione (<a title="Comunicazione orientata alla connessione - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Comunicazione_orientata_alla_connessione" target="_blank">connection oriented</a>) e si inviano a vicenda dati tramite essa. Ciò è analogo ad una chiamata telefonica. Quando due persone comunicano tramite una linea telefonica, viene stabilita una connessione tra i due terminali telefonici, si inviano dati (la voce) parlando attraverso il dispositivo. Come per le compagnie telefoniche **TCP** garantisce che i dati, inviati tra i terminali, vengano correttamente consegnati nello stesso ordine in cui sono stati spediti.

**TCP** fornisce un canale *punto-punto* per le applicazioni che richiedono una connessione affidabile. L&#8217;<a title="Hypertext Transfer Protocol - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">Hypertext Trasfer Protocol</a> (**HTTP**) e <a title="File Transfer Protocol - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/File_Transfer_Protocol" target="_blank">File Transfer Protocol</a> (**FTP**) sono esempi di protocolli che fanno uso di TCP. L&#8217;ordine in cui i dati vengono inviati e ricevuti sulla rete è critico per il corretto funzionamento di queste applicazioni. Quando **HTTP** è usato per leggere da un <a title="Uniform Resource Locator - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Uniform_Resource_Locator" target="_blank">Uniform Resource Locator</a> (**URL**), i dati devono essere ricevuti nello stesso ordine in cui sono stati spediti, altrimenti si otterrà una pagina HTML senza senso, un file zip corrotto o qualche altra informazione non valida.

## UDP

Il protocollo **UDP** fornisce una connessione non affidabile tra due applicazioni sulla rete. **UDP** non è basata su connessione (<a title="Protocollo connectionless - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Protocollo_connectionless" target="_blank">connectionless</a>) come **TCP**. Piuttosto invia pacchetti indipendenti di dati chiamati <a title="Pacchetto (reti) - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Pacchetto_(reti)" target="_blank">datagrammi</a> (*datagrams*) da una applicazione all&#8217;altra. Inviare un datagramma è come inviare una lettera tramite il servizio di posta: l&#8217;ordine di consegna non è importante e non è garantito e ogni messaggio è indipendente dall&#8217;altro.

Per diverse applicazioni, la garanzia di affidabilità è critica per il successo del trasferimento dell&#8217;informazione tra due punti della connessione. Però, altre forme di comunicazioni non richiedono questo standard rigoroso. Infatti, potrebbero esserne rallentati dall&#8217;*overhead* del protocollo o l&#8217;affidabilità potrebbe invalidare completamente il servizio.

Si consideri, per esempio, un orologio che invia l&#8217;ora corrente ai suoi client quando richiesto. Se un client perde un pacchetto non ha senso rispedirlo dal momento che l&#8217;ora sarebbe inesatta quando il client riceve il pacchetto al secondo tentativo. Se il client effettua due richieste e riceve i pacchetti da un server guasto, non ha importanza perché il client può capire che i pacchetti sono inesatti e può effettuare un&#8217;altra richiesta. L&#8217;affidabilità di **TCP** non è necessaria in questo caso poiché causa un degrado delle prestazioni e potrebbe ostacolare l&#8217;utilità del servizio.

Un altro esempio di servizio che non richiede la garanzia di affidabilità del canale è il comando <a title="Ping - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Ping" target="_blank">ping</a>. Lo scopo di questo comando è di verificare la comunicazione tra due programmi sulla rete. Infatti *ping* ha bisogno di conoscere i pacchetti scartati o non ordinati per determinare la qualità della connessione. Un canale affidabile renderebbe vano il servizio.

## Conoscere le porte

In generale un computer ha una singola connessione alla rete. Tutti i dati destinati per un computer particolare arrivano attraverso tale connessione. Tuttavia i dati possono essere destinati a diverse applicazioni eseguiti sul computer. Perciò come fa il computer a conoscere verso quale applicazione inoltrare i dati? Attraverso l&#8217;uso delle <a title="Porta (reti) - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Porta_(reti)" target="_blank">porte</a>.

I dati trasmessi tramite Internet sono accompagnati da una informazione di indirizzamento che identificano il computer e la porta verso la quale sono destinati. Il computer è identificato da un indirizzo **IP** (<a title="Internet Protocol - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Internet_Protocol" target="_blank">Internet Protocol</a>) a *32-bit* (<a title="IPv4 - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/IPv4" target="_blank">IPv4</a>)<sup>[<a id="note2back" href="#note2">2</a>]</sup> che viene usato per consegnare i dati al computer corretto sulla rete. Le porte sono identificate da un numero a *16-bit* che **TCP** e **UDP** usano per consegnare i dati alla giusta applicazione.

Nella comunicazione basata su connessione come **TCP**, una applicazione server lega un <a title="Socket (reti) - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Socket_(reti)" target="_blank">socket</a> ad una specifica porta. Questo ha l&#8217;effetto di registrare il server con il sistema per ricevere tutti i dati destinati a questa porta. Un client può comunicare con il server sulla porta, come specificato:

<p align="center">
  <img alt="2tcp" src="/wp-content/uploads/2013/12/2tcp.gif" />
</p>

**Definizione**: i protocolli **TCP** e **UDP** usano le *porte* per mappare il traffico in entrata su un particolare processo che viene eseguito dal computer.

Nella connessione basata su *datagrammi* come **UDP**, il pacchetto datagramma contiene il numero di porta di destinazione e **UDP** smista il pacchetto verso la giusta applicazione, come illustrato in figura:

<p align="center">
  <img alt="3tcpudp" src="/wp-content/uploads/2013/12/3tcpudp.gif" />
</p>

I numeri di porta vanno da **** a **65.535** poiché rappresentate da un numero a 16 bit (2<sup>16</sup>). I numeri di porta che vanno da **** a **1023** sono riservati; sono riservati per l&#8217;uso da parte dei sevizi noti come **HTTP** e **FTP** e altri servizi di sistema. Queste porte sono chiamate <a title="Lista di porte standard - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Lista_di_porte_standard" target="_blank">well-known ports</a>. Le applicazioni scritte non dovrebbero cercare di legarsi (*bind*) a queste.

* * *

<sup>[<a id="note1"></a>1]</sup> Il così detto stack TPC/IP, va comunque menzionato lo standard <a title="Open Systems Interconnection - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/Open_Systems_Interconnection" target="_blank">ISO/OSI</a>.[**↑**][1]  
<sup>[<a id="note2"></a>2]</sup> Attualmente si è alla versione 6 dello standard (<a title="IPv6 - Da Wikipedia, l'enciclopedia libera." href="http://it.wikipedia.org/wiki/IPv6" target="_blank">IPv6</a>).[**↑**][2]

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: #note1back
 [2]: #note2back