---
title: Impostare un server SFTP su Ubuntu
author: unnikked
layout: post
permalink: /impostare-un-server-sftp-su-ubuntu/
dsq_thread_id:
  - 985648880
gadgetry_post_viewed:
  - 218
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:42:"/wp-content/uploads/2012/12/sftp_testa.jpg";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:42:"/wp-content/uploads/2012/12/sftp_testa.jpg";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
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

  


Cosa è un server SFTP? **SSH File Transfer Protocol** o **SFTP** è un protocollo di rete che prevede il trasferimento dei dati e funzionalità di manipolazione. Inoltre aggiunge la caratteristica di criptare i dati trasferiti tra i due server per rendere le operazioni più sicure.

In questo articolo vedremo come impostare un server SFTP su Ubuntu utilizzando il pacchetto openssh-server. E&#8217; un insieme di programmi che rendono disponibili sessioni crittografate di comunicazione in una rete di computer usando il protocollo SSH. In particolare imposteremo il server in modo tale che ogni utente del sistema avrà la sua cartella personale che è &#8220;isolata&#8221; dal resto del sistema (<a href="http://it.wikipedia.org/wiki/Chroot" target="_blank"><em>chroot</em></a>).

[<img class="aligncenter size-full wp-image-193" title="sftp" src="http://unnikked.tk/wp-content/uploads/2012/12/sftp_salto.png" alt="sftp" width="194" height="191" />][1]

In questo articolo userò come nome utente fittizio &#8220;*unnikked*&#8221; per cui la home di questo utente sarà /home/unnikked. Inoltre supponiamo che l&#8217;utente appartenga al gruppo *group*. Cambieremo la cartella home dell&#8217;utente (chroot) in */home*.

Se non avete già installato **OpenSSH **installiamolo dalla repository:

<pre class="lang:default highlight:0 decode:true">sudo apt-get install ssh openssh-server</pre>

Per abilitare il servizio *SFTP *apriamo il file *sshd_config *:

<pre class="lang:default highlight:0 decode:true">sudo vi /etc/ssh/sshd_config</pre>

e controlliamo che al suo interno sia contenuta la seguente linea:

<pre class="lang:default highlight:0 decode:true">[...]
Subsystem sftp internal-sftp
[...]</pre>

Ora per aggiungere un utente all&#8217;accesso *SFTP *aggiungiamo alla fine del file :

<pre class="lang:default highlight:0 decode:true">[...]
Match User unnikked
    ChrootDirectory /home
    AllowTCPForwarding no
    X11Forwarding no
    ForceCommand internal-sftp</pre>

dove *unnikked *in questo caso è l&#8217;utente da impostare come sopra premesso.

Invece per impostare un gruppo basta aggiungere :

<pre class="lang:default highlight:0 decode:true">[...]
Match Group group
    ChrootDirectory /home
    AllowTCPForwarding no
    X11Forwarding no
    ForceCommand internal-sftp</pre>

Questo cambierà la cartella home a tutti gli utenti *group *nella cartella */home*. Notiamo che tutte le cartelle del percorso relativo alla direttiva *ChrootDirectory *devono essere di proprietà di root che non devono essere scrivibili da nessun altro utente o gruppo. Questo è il motivo per cui non possiamo specificare */home/unnikked*, per esempio, perché non è di proprietà dell&#8217;utente e gruppo *root*.

Ora riavviamo *OpenSSH:*

<pre class="lang:default highlight:0 decode:true">sudo /etc/init.d/ssh restart</pre>

Se aggiungi più di un utente nel file e non vuoi che i diversi utenti possano vedersi le cartelle a vicenda , puoi cambiare i permessi a ogni cartella utente così:

<pre class="lang:default decode:true">sudo chmod 700 /home/unnikked</pre>

In questo modo daremo solo libero accesso al proprietario della cartella.

Ora puoi collegarti alla macchina con qualsiasi software che supporti il protocollo SFTP come FileZilla.

Nota bene che con questa configurazione non abbiamo impostato in alcun modo l&#8217;accesso *SSH *all&#8217;utente. Lo vedremo in seguito in un altro articolo.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: http://unnikked.tk/wp-content/uploads/2012/12/sftp_salto.png