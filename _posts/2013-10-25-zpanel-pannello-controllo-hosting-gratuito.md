---
title: ZPanel un pannello di controllo hosting tutto gratuito
author: unnikked
layout: post
permalink: /zpanel-pannello-controllo-hosting-gratuito/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 1899756719
categories:
  - Linux
  - SysAdmin
  - Ubuntu
tags:
  - VPS
---

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

Successivamente verrà chiesto di inserire il <span class="su-tooltip" data-close="no" data-behavior="hover" data-my="bottom center" data-at="top center" data-classes="su-qtip qtip-bootstrap su-qtip-size-default" data-title="Fully Qualified Domain Name" title="Un FQDN (acronimo di Fully Qualified Domain Name) è un nome di dominio non ambiguo che specifica la posizione assoluta di un nodo all&#039;interno della gerarchia dell&#039;albero DNS. Per distinguere un FQDN da un nome di dominio standard si aggiunge il nome dell&#039;host alla stringa del dominio, in modo da renderla assoluta.">Fully Qualified Domain Name</span> per il vostro server, cioè un nome dominio reale che punta sulla vostra macchina:

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