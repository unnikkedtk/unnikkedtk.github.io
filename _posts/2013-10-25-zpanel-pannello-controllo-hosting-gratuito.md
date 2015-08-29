---
title: ZPanel un pannello di controllo hosting tutto gratuito
author: unnikked
layout: post
permalink: /zpanel-pannello-controllo-hosting-gratuito/
itsec_enable_ssl:
  - 
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:38:"/wp-content/uploads/2013/10/ZPanel.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:38:"/wp-content/uploads/2013/10/ZPanel.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:5:"false";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 213
dsq_thread_id:
  - 1899756719
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

  


<p style="text-align: left;">
  <code>ZPanel</code> è una piattaforma che fornisce un pannello di controllo per servizi di Hosting, è gratuito, open source e multipiattaforma.
</p>

<p style="text-align: left;">
  Installeremo <code>ZPanel</code> su <strong>Ubuntu 12.04 LTS</strong>. Prima di iniziare assicuriamoci che sia installato <code>curl</code> sul nostro sistema, necessario durante la fase di installazione del pannello:
</p>

<pre class="lang:sh decode:true">sudo apt-get update
sudo apt-get install curl</pre>

<p style="text-align: left;">
  Una volta installato <code>curl</code> scarichiamo lo <em>script di installazione</em> per Ubuntu dal sito ufficiale:
</p>

<pre class="lang:sh decode:true">wget https://github.com/bobsta63/zpanelx/releases/download/10.1.0/installer-10-1-0-ubuntu-64.sh.x</pre>

E assegniamo i <a title="Come impostare i permessi ai file con “chmod”" href="http://unnikked.tk/permessi-file-chmod/" target="_blank">privilegi di esecuzione</a> allo script:

<pre class="lang:sh decode:true">chmod +x installer-10-1-0-ubuntu-64.sh.x</pre>

E lanciamo la installazione con:

<pre class="lang:sh decode:true">./installer-10-1-0-ubuntu-64.sh.x</pre>

Verranno mostrate una serie di informazioni tra cui l&#8217;uso della licenza `GPL` per questo software, accettiamo la licenza con `y`.

<div class="su-spoiler su-spoiler-style-default su-spoiler-icon-plus su-spoiler-closed">
  <div class="su-spoiler-title">
    <span class="su-spoiler-icon"></span>Licenza GPL
  </div>
  
  <div class="su-spoiler-content su-clearfix" style="display:none">
    <pre>##############################################################
# Welcome to the Official ZPanelX Installer for Ubuntu 12.04 #
#                                                            #
# Please make sure your VPS provider hasn't pre-installed    #
# any packages required by ZPanelX.                          #
#                                                            #
# If you are installing on a physical machine where the OS   #
# has been installed by yourself please make sure you only   #
# installed Ubuntu and no extra packages.                    #
#                                                            #
# If you selected additional options during the Ubuntu       #
# install please consider reinstalling with no               #
# additional options.                                        #
#                                                            #
# Help for this installation script can be obtained on the   #
# official ZPanelCP forums (http://forums.zpanelcp.com)      #
#                                                            #
# All bugs should be reported to http://bugs.zpanelcp.com    #
# Licensed Under the GPL which can be found here:            #
# (http://www.gnu.org/licenses/gpl.html)                     #
#                                                            #
# Owner : Kevin Andrews (kevin@zvps.co.uk)                   #
# Current maintainer : Kevin Andrews (kevin@zvps.co.uk)      #
# Version 3.0.0                                              #
#                                                            #
##############################################################
To contine please agree to the GPL license (y/n/q)?</pre>
  </div>
</div>

Verrà chiesto di inserire il timezone corrente, inseriamo `Europe/Rome`

<div class="su-spoiler su-spoiler-style-default su-spoiler-icon-plus su-spoiler-closed">
  <div class="su-spoiler-title">
    <span class="su-spoiler-icon"></span>Timezone
  </div>
  
  <div class="su-spoiler-content su-clearfix" style="display:none">
    <pre>Find your timezone from : http://php.net/manual/en/timezones.php e.g Europe/London
Enter Your Time Zone: Europe/Rome</pre>
  </div>
</div>

Successivamente verrà chiesto di inserire il `<span class="su-tooltip" data-close="no" data-behavior="hover" data-my="bottom center" data-at="top center" data-classes="su-qtip qtip-bootstrap su-qtip-size-default" data-title="Fully Qualified Domain Name" title="Un FQDN (acronimo di Fully Qualified Domain Name) è un nome di dominio non ambiguo che specifica la posizione assoluta di un nodo all&#039;interno della gerarchia dell&#039;albero DNS. Per distinguere un FQDN da un nome di dominio standard si aggiunge il nome dell&#039;host alla stringa del dominio, in modo da renderla assoluta.">Fully Qualified Domain Name</span>` per il vostro server, cioè un nome dominio reale che punta sulla vostra macchina:

<div class="su-spoiler su-spoiler-style-default su-spoiler-icon-plus su-spoiler-closed">
  <div class="su-spoiler-title">
    <span class="su-spoiler-icon"></span>FQDN
  </div>
  
  <div class="su-spoiler-content su-clearfix" style="display:none">
    <pre>Enter Your Time Zone: Europe/Rome  
Enter the FQDN of the server (example: zpanel.yourdomain.com): example.unnikked.tk</pre>
  </div>
</div>

Ora inseriamo l&#8217;indirizzo IP fisico della macchina:

<div class="su-spoiler su-spoiler-style-default su-spoiler-icon-plus su-spoiler-closed">
  <div class="su-spoiler-title">
    <span class="su-spoiler-icon"></span>Indirizzo IP
  </div>
  
  <div class="su-spoiler-content su-clearfix" style="display:none">
    <pre>Enter the Public (external) IP of the server: xxx.xxx.xxx.xxx</pre>
  </div>
</div>

Confermiamo l&#8217;installazione con `y`. Al termine dell&#8217; installazione verranno comunicate tutte le password necessarie dei servizi connessi al pannello di controllo:

<div class="su-spoiler su-spoiler-style-default su-spoiler-icon-plus su-spoiler-closed">
  <div class="su-spoiler-title">
    <span class="su-spoiler-icon"></span>Termine installazione
  </div>
  
  <div class="su-spoiler-content su-clearfix" style="display:none">
    <pre>##############################################################
# Congratulations ZpanelX has now been installed on your     #
# server. Review the log file left in /root/ for             #
# any errors encountered during installation.                #
#                                                            #
# Save the following information somewhere safe:             #
# MySQL Root Password    : ****************
# MySQL Postfix Password : ****************
# ZPanelX Username       : zadmin                            #
# ZPanelX Password       : ****************
#                                                            #
# ZPanelX Web login can be accessed using your server IP     #
# inside any http web browser.                               #
#                                                            #
# REPORT ZPANEL INSTALLATION BUGS AND ZPANEL CORE BUGS TO:   #
# (http://bugs.zpanelcp.com)                                 #
#                                                            #
# This installer has been thoroughly tested on               #
# (http://www.zvps.co.uk) zVPS servers. However it is not    #
# possible to guarantee the compatibility of other VPS       #
# provider Operating System templates of Ubuntu 12.04        #
#                                                            #
##############################################################</pre>
  </div>
</div>

Inoltre tali password vengono salvate in un file `password.txt` nella directory `/root`.

Una volta terminata l&#8217;installazione possiamo accedere al pannello di controllo digitando sulla barra degli indirizzi del browser il dominio assegnato durante la fase di installazione.

<img class="aligncenter" alt="" src="/wp-content/uploads/2013/10/zpanel_dashboard.png" />

Per maggiori informazioni su come configurare il pannello di controllo vi rimando alla lettura della <a title="ZPanel Documentation " href="http://docs.zpanelcp.com/" target="_blank">documentazione</a> ufficiale.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>