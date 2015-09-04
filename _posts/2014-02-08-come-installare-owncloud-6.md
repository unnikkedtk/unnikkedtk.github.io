---
title: Come installare Owncloud 6
author: unnikked
layout: post
permalink: /come-installare-owncloud-6/
dsq_thread_id:
  - 2237747166
itsec_enable_ssl:
  - 
categories:
  - Internet
  - Linux
  - SysAdmin
tags:
  - Open Source
  - Self Hosted
  - VPS
---

Con l&#8217;avvento dell&#8217;era del <a href="http://it.wikipedia.org/wiki/Cloud_computing" title="Cloud Computin" target="_blank">Cloud Computing</a>, sono nati molti servizi che sfruttano questo nuovo paradigma, realtà come Dropbox, Google Drive, Sky Drive e altri sfruttano tale tecnologia per offrire un servizio di hosting file per gli utenti.

Ci sono pro e contro nell&#8217;utilizzare un servizio del genere:

  * PRO: file sempre disponibili su qualsiasi dispositivo che supporti il servizio utilizzato
  * PRO: nessuna preoccupazione per il backup dei dati, tutto è gestito dal fornitore del servizio
  * CONTRO: mancanza di accesso ai file in caso di assenza di connessione ad Internet
  * CONTRO: affidamento dei propri file a società terze

Per gli amanti del fai da te o per chi vuole gestire autonomamente i propri file senza affidarsi a terzi esiste il progetto <a href="http://owncloud.org/" title="owncloud.org" target="_blank">Owncloud</a>, open source, che offre una piattaforma per la gestione dei propri file in stile Cloud. 

<p align="center">
  
  <p>
    L&#8217;installazione di questa piattaforma su un server domestico <a href="come-ottenere-e-configurare-un-server-vps" title="Come ottenere e configurare un server VPS" target="_blank">hosting VPS</a> non lo rendono un sistema cloud vero e proprio, parlerò della tecnologia Cloud in futuro.
  </p>
  
  <p>
    Credo non siano necessarie ulteriori spiegazioni su come possa funzionare Owncloud, segnalo il <a href="http://owncloud.org/" title="Access. Sync. Share." target="_blank">sito ufficiale</a> del progetto per chi vuole approfondire le caratteristiche offerte. Per cui vediamo come installare Owncloud su una distribuzione Ubuntu Linux.
  </p>
  
  
  <h2>
    Installazione
  </h2>
  
  <p>
    Prima di procedere all&#8217;installazione di Owncloud 6 bisogna avere un <a href="apache-php-mysql" title="Come configurare un ambiente LAMP" target="_blank">ambiente LAMP</a> installato sulla propria macchina.
  </p>
  
  <p>
    Procederemo con l&#8217;istallazione manuale, portiamoci nella cartella <code>/var/www</code>:
  </p>
  
  <pre class="lang:default decode:true ">cd /var/www</pre>
  
  <p>
    E scarichiamo l&#8217;ultima versione di Owncloud:
  </p>
  
  <pre class="lang:default decode:true " >wget http://download.owncloud.org/community/owncloud-6.0.0a.tar.bz2</pre>
  
  <p>
    Estraiamo l&#8217;archivio con:
  </p>
  
  <pre class="lang:default decode:true " >tar xvjf owncloud-6.0.0a.tar.bz2</pre>
  
  <p>
    Prima di procedere con l&#8217;istallazione assicuriamoci che la macchina che ospiterà Owncloud soddisfa i requisiti minimi:
  </p>
  
  <pre class="lang:default decode:true " >apt-get install apache2 php5 php5-gd php-xml-parser php5-intl</pre>
  
  <p>
    Tuttavia come requisiti opzionali Owncloud richiede anche:
  </p>
  
  <pre class="lang:default decode:true " >apt-get install php5-sqlite php5-mysql smbclient curl libcurl3 php5-curl</pre>
  
  <p>
    smbclient è usato per dare la possibilità di montare la condivisione SMB su Owncloud. Il pacchetto curl è richiesto per alcune app (es. autenticazione utente tramite http)
  </p>
  
  <p>
    Non è necessario nessun supporto WebDAV per il webserver (es. il modulo apache mod_webdav) per accedere ad Owncloud, esso, infatti, ha un server WebDAV integrato. Bisogna controllare che non ci sia nessun modulo WebDav sul webserver (almeno per cartella di Owncloud), dal momento che potrebbe andare in conflitto con il supporto integrato della piattaforma.
  </p>
  
  <h2>
    Impostare i permessi
  </h2>
  
  <p>
    Il proprietario del webserver deve <a href="permessi-file-chmod" title="Come impostare i permessi ai file con “chmod”" target="_blank">&#8220;possedere&#8221;</a> le cartelle apps/, data/ e config/ nell&#8217;installazione.
  </p>
  
  <pre class="lang:default decode:true " >chown -R www-data:www-data owncloud</pre>
  
  <p>
    Si sostituisca <code>www-data:www-data</code> con l&#8217;utente e il gruppo del proprietario del webserver.
  </p>
  
  <h2>
    Abilitare .htaccess e mod_rewrite per Apache
  </h2>
  
  <p>
    Se si usa il webserver Apache è raccomandato abilitare i file <code>.htaccess</code> utilizzati da Owncloud per migliorare la sicurezza e per utilizzare <code>&lt;a href="http://en.wikipedia.org/wiki/WebFinger" title="WebFinger | From Wikipedia, the free encyclopedia" target="_blank">webfinger&lt;/a></code>.
  </p>
  
  <p>
    Per abilitare i file <code>.htaccess</code> bisogna controllare che <code>AllowOverride</code> è impostato su <code>All</code> nella cartella <code>/var/www/</code> nel file di configurazione del <a href="guida-ai-virtual-host-di-apache" title="Guida ai Virtual Host di Apache" target="_blank">Virtual Host di Apache</a>.
  </p>
  
  <p>
    Di solito questo file è in <code>/etc/apache2/sites-enabled/000-default</code>.
  </p>
  
  <p align="center">
    <img src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-23-201034.png" />
  </p>
  
  <p>
    Rendiamo effettiva la modifica con:
  </p>
  
  <pre class="lang:default decode:true " >service apache2 reload</pre>
  
  <p>
    Bisognerebbe anche eseguire il comando a2enmod rewrite e a2enmod header:
  </p>
  
  <pre class="lang:default decode:true " >a2enmod rewrite && a2enmod headers</pre>
  
  <p>
    Riavviamo il servizio apache:
  </p>
  
  <pre class="lang:default decode:true " >service apache2 restart</pre>
  
  <h2>
    Installazione guidata
  </h2>
  
  <p>
    Siamo pronti ora per eseguire l&#8217;installazione guidata di Owncloud, digitiamo sul browser <code>http://indirizzoip/</code> o <code>http://indirizzoip/owncloud/</code>
  </p>
  
  <p align="center">
    <img src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-23-201545.png" alt="Screenshot from 2013-12-23 20:15:45" />
  </p>
  
  <h2>
    Creazione database MySQL
  </h2>
  
  <p>
    Se si vuole creare un database MySQL per Owncloud digitiamo da terminale:
  </p>
  
  <pre class="lang:default decode:true " >mysql -u root -p</pre>
  
  <p>
    Inseriamo la password di root di MySQL e creiamo un nuovo database con:
  </p>
  
  <pre class="lang:default decode:true " >mysql&gt; create database owncloud;</pre>
  
  <p>
    Verifichiamo che sia stato effettivamente creato con la seguente query:
  </p>
  
  <pre class="lang:default decode:true " >mysql&gt; show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| owncloud           |
| performance_schema |
+--------------------+
4 rows in set (0.01 sec)
</pre>
  
  <p>
    Possiamo uscire dalla console di MySQL con:
  </p>
  
  <pre class="lang:default decode:true " >mysql&gt; exit</pre>
  
  <p>
    Una volta completato il wizard ci troveremo davanti alla dashboard di owncloud:
  </p>
  
  <p align="center">
    <img src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-23-202255.png" alt="Screenshot from 2013-12-23 20:22:55" />
  </p>
  
  <h2>
    Connessione cifrata
  </h2>
  
  <p>
    Per navigare in sicurezza sulla propria installazione di Owncloud consiglio di <a href="come-configurare-un-certificato-ssl-su-apache" title="Come configurare un certificato SSL su Apache" target="_blank">creare un certificato self-signed</a> per la protezione dei propri dati inviati ad Owncloud.
  </p>