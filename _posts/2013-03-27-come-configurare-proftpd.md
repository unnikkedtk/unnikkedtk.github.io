---
title: Come configurare ProFTPD
author: unnikked
layout: post
permalink: /come-configurare-proftpd/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:39:"/wp-content/uploads/2013/03/proftpd.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:39:"/wp-content/uploads/2013/03/proftpd.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 254
dsq_thread_id:
  - 1169100311
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

  


Abbiamo visto nel precedente <a title="Come configurare un ambiente LAMP" href="http://unnikked.tk/apache-php-mysql/" target="_blank">articolo</a> come configurare un ambiente **LAMP** per sviluppare o rendere pubblico un nostro sito web. Non abbiamo però visto un modo con cui possiamo comunicare con il *web server* senza dover ricorrere all&#8217;accesso *ssh*.

Vedremo quindi come connetterci al nostro **VPS** per creare, modificare o eliminare file, utilizzando il protocollo **FTP** (*File Transfer Protocol*) avvalendoci del pacchetto <a title="Sito ufficiale di ProFTPD" href="http://www.proftpd.org/" target="_blank">ProFTPD</a>.

In *informatica* e *telecomunicazioni* **File Transfer Protocol** (**FTP**) (protocollo di trasferimento file) è un protocollo per la trasmissione di dati tra host basato su **TCP**.

Gli obiettivi principali di **FTP** descritti nella sua **RFC** ufficiale sono:

  * Promuovere la condivisione di file (programmi o dati).
  * Incoraggiare l&#8217;uso indiretto o implicito di computer remoti.
  * Risolvere in maniera trasparente incompatibilità tra differenti sistemi di stoccaggio file tra host.
  * Trasferire dati in maniera affidabile ed efficiente.

**ProFTPD** è un server *FTP* rilasciato sotto licenza **GPL** compatibili con i sistemi *Unix*-like e con i sistemi *Windows* (attraverso **Cygwin**).

Per installare il pacchetto *ProFTPD* effettuiamo l&#8217;accesso al *VPS* con il *nomeutente* che abbiamo creato nell&#8217;articolo [precedente][1] e eseguiamo, da terminale, il seguente comando:

<pre class="lang:sh decode:true">sudo apt-get install proftpd</pre>

Dopo che il pacchetto verrà scaricato, durante l&#8217;installazione vi verrà chiesto di scegliere una tra le due modalità di configurazione, scegliamo la voce *standalone*

![][2]

&bnsp;

Ad installazione terminata il server viene avviato automaticamente, ma prima di poterlo utilizzare dobbiamo configurarlo. Per cui apriamo il file di configurazione:

<pre class="lang:sh decode:true">vim /etc/proftpd/proftpd.conf</pre>

Nella voce *ServerName* inseriamo l&#8217;ip del server:

<pre class="lang:sh decode:true"># If set on you can experience a longer connection delay in many cases.
IdentLookups                    off

ServerName                      "ipserver"
ServerType                      standalone
DeferWelcome                    off</pre>

Successivamente impostiamo la cartella radice del server ftp, di default è impostata alla cartella home dell&#8217;utente corrente, modifichiamo la voce *Default Root* in questo modo:

<pre class="lang:sh decode:true">DefaultRoot                     /var/www</pre>

Salviamo il file e riavviamo il server *ftp* con il seguente comando:

<pre class="lang:sh decode:true">sudo service proftpd restart</pre>

Su linux possiamo gestire i servizi con il comando **service**.

<pre class="lang:sh decode:true">service nome_servizio comando</pre>

dove** nome_servizio** sta per il nome del servizio da gestire, per esempio *proftpd*, e comando sta per il comando da eseguire, per esempio *start*, *stop*, *restart*.

Non abbiamo ancora finito, dobbiamo ancora dare i permessi all&#8217;account *nomeutente*, per prima cosa aggiungiamo *nomeutente* (dove *nomeutente* è il nome dell&#8217;account scelto nell&#8217;[articolo][1] precedente) al gruppo *www-data*:

<pre class="lang:sh decode:true">sudo adduser nomeutente www-data</pre>

Ora rendiamo *nomeutente* proprietario della cartella */var/www*:

<pre class="lang:sh decode:true">sudo chown -R www-data:www-data /var/www</pre>

Ed infine impostiamo i parametri relativi ai permessi di modifica dei file:

<pre class="lang:sh decode:true">sudo chmod -R g+rw /var/www</pre>

Ecco fatto, ora possiamo collegarci al nostro web server tramite un qualsiasi programma che supporti il protocollo *ftp*.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: http://unnikked.tk/apache-php-mysql/ "Come configurare un ambiente LAMP"
 [2]: /wp-content/uploads/2013/03/proftpd.jpg