---
title: 'SSHFS: client per montare un file system remoto tramite SSH'
author: unnikked
layout: post
permalink: /sshfs-montare-file-system-remoto/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 2271249881
categories:
  - Internet
  - Linux
  - SysAdmin
tags:
  - SSH
  - VPS
---

**SSHFS** (*SSH Filesystem*) è un client per montare e interagire con un filesystem situato su una macchina remota. 

Il client *SSHFS* interagisce con la macchina remota tramite il protocollo **SFTP** (<a href="http://it.wikipedia.org/wiki/SSH_File_Transfer_Protocol" title="SSH File Transfer Protocol - Da Wikipedia, l'enciclopedia libera." target="_blank">SSH File Transfer Protocol</a>) che fornisce funzionalità di accesso, trasferimento e gestione file utilizzando un flusso dati affidabile come estensione del protocollo <a href="come-connettersi-al-proprio-vps" title="Come connettersi al proprio VPS tramite SSH" target="_blank">SSH</a> (Secure Shell). 

L&#8217;implementazione, sul computer locale dove SSHFS viene montato, fa uso del modulo del kernel **FUSE** (<a href="http://it.wikipedia.org/wiki/FUSE" title="FUSE - Da Wikipedia, l'enciclopedia libera." target="_blank">Filesystem in Userspace</a>)

Questo particolare strumento è utile per quegli utenti che hanno necessità di modificare spesso file su una macchina remota senza avere una copia locale persistente dei file. 

Si integra bene anche con i più comuni file manager presenti per le distribuzioni, rendendo il filesystem remoto accessibile come qualsiasi periferica collegata al proprio pc. 

Gli utilizzi di questo client sono innumerevoli. 

<p align="center">
  <img src="/wp-content/uploads/2014/02/sshfs.png" alt="sshfs" />
</p>

<p align="center">
  
  <h2>
    Installazione di SSHFS
  </h2>
  
  <p>
    Per installare <em>SSHFS</em> su una distribuzione Ubuntu Linux e derivata basta scaricare il pacchetto dai repository ufficiali:
  </p>
  
  <pre class="lang:sh decode:true " >apt-get install sshfs</pre>
  
  <p>
    Prima di montare il file system sul nostro computer creiamo una cartella in cui montare il filesystem remoto:
  </p>
  
  <pre class="lang:sh decode:true " >mkdir &lt;directory_locale> </pre>
  
  <p>
    e procediamo a montare il filesystem tramite:
  </p>
  
  <pre class="lang:default decode:true " >sshfs [&lt;utente>@]&lt;server>:&lt;/directory/da/montare> &lt;directory_locale>
</pre>
  
  <p>
    in cui <code>&lt;utente></code> è il nome utente, <code>&lt;server></code> è l&#8217;indirizzo del server, </directory/da/montare> è l&#8217;indirizzo della directory da montare (remota) e <code>&lt;directory_locale></code> è l&#8217;indirizzo della directory su cui montare (locale).
  </p>
  
  <p>
    Se <code>&lt;server></code> è un indirizzo <a href="http://it.wikipedia.org/wiki/IPv6" title="IPv6 - Da Wikipedia, l'enciclopedia libera." target="_blank">IPv6</a> è necessario racchiudere tale indirizzo tra parentesi quadre.
  </p>
  
  <p>
    Per smontare invece:
  </p>
  
  <pre class="lang:sh decode:true " >fusermount -u &lt;directory_locale&gt;</pre>
  
  <p>
    Per ulteriori informazioni per i vari parametri accettati consultate la pagina del manuale una volta installato tramite:
  </p>
  
  <pre class="lang:sh decode:true " >man sshfs</pre>