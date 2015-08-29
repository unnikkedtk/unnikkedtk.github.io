---
title: Come sincronizzare calendari e contatti usando gli standard CardDAV e CalDAV con Baïkal su Ubuntu 14.04
author: unnikked
layout: post
permalink: /sincronizzazione-carddav-caldav-con-baikal/
dsq_thread_id:
  - 4025615777
categories:
  - Linux
  - Ubuntu
tags:
  - Open Source
  - Self Hosted
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Con il numero crescente di persone che utilizzano diversi dispositivi (smartphone, computer, tablet ecc) la necessità di mantenere tutto sincronizzato aumenta.

Gli standard <a href="https://en.wikipedia.org/wiki/CalDAV" target="_blank">CalDAV</a> e <a href="https://en.wikipedia.org/wiki/CardDAV" target="_blank">CardDAV</a> forniscono un modo veloce e facile per mantenere sincronizzate le nostre attività e i nostri contatti.

In questo tutorial vedremo come sincronizzare calendari e contatti da un server che si controlla, usando una installazione di <a href="http://baikal-server.com/" target="_blank">Baïkal</a>: un server CalDAV e CardDAV scritto in PHP.

## Prerequisiti

Per poter seguire questo tutorial è necessario disporre di una macchina con sopra installato Ubuntu 14.04 di cui si ha accesso SSH (per un test locale si può usare <a href="https://unnikked.tk/gestire-macchine-virtuali-vagrant/" target="_blank">Vagrant</a>), di un account con privilegi di amministrazione e di un dominio per l&#8217;accesso al server (durante il test locale è consigliabile impostare un dominio fittizio tramite il file `<a href="https://unnikked.tk/guida-file-hosts-in-linux/" target="_blank">/etc/hosts</a>`).

Si installeranno anche le dipendenze utilizzate da Baïkal e configurato un <a href="https://unnikked.tk/come-configurare-un-certificato-ssl-su-apache/" target="_blank">certificato SSL</a>.

## Installazione di Baïkal

Per iniziare installeremo le dipendenze del pacchetto, scaricheremo l&#8217;archivio di installazione procedendo con l&#8217;estrazione.

In questo tutorial si utilizzerà la versione 0.2.7 ma è consigliabile controllare il <a href="http://baikal-server.com/" target="_blank">sito ufficiale</a> per l&#8217;uscita di nuove versioni.

Assumendo una installazione pulita di Ubuntu procediamo con l&#8217;aggiornamento delle definizioni delle repository.

<pre class="lang:sh decode:true ">sudo apt-get update</pre>

Per poter installare Baïkal dobbiamo avere a disposizione un ambiente quasi <a href="https://unnikked.tk/apache-php-mysql/" target="_blank">LAMP</a>, al posto di MySQL utilizzeremo SQLite.

Questo software comunque supporta anche <a href="https://unnikked.tk/installare-nginx-ubuntu/" target="_blank">Nginx</a> come webserver e MySQL come gestore database.

<pre class="lang:sh decode:true ">sudo apt-get install apache2 php5 php5-sqlite sqlite3</pre>

Ora che l&#8217;ambiente di base è stato installato possiamo procedere con il download del server procedendo con l&#8217;installazione.

Per prima cosa spostiamoci in `/var/www`

<pre class="lang:sh decode:true ">cd /var/www</pre>

Scarichiamo la versione `0.2.7 `

<pre class="lang:sh decode:true ">sudo wget http://baikal-server.com/get/baikal-regular-0.2.7.tgz</pre>

Ed estraiamo l&#8217;archivio utilizzando l&#8217;utility `tar`

<pre class="lang:sh decode:true ">sudo tar -xvzf baikal-regular-0.2.7.tgz</pre>

Procediamo ora con alcune operazioni di routine, per prima cosa eliminiamo l&#8217;archivio `baikal-regular-0.2.7.tgz` scaricato tramite il comando `rm`

<pre class="lang:sh decode:true ">sudo rm baikal-regular-0.2.7.tgz</pre>

E rinominiamo la cartella `baikal-regular` nel nome dominio utilizzato, per esempio `dav.example.com`

<pre class="lang:sh decode:true ">sudo mv baikal-regular dav.example.com</pre>

Ripristiniamo i <a href="https://unnikked.tk/permessi-gestione-degli-utenti/" target="_blank">permessi</a> utenti e gruppo a `www-data`

<pre class="lang:sh decode:true ">sudo chown -R www-data:www-data dav.example.com</pre>

## Configurare Apache

La nostra applicazione è ora installata, dobbiamo ora configurare un <a href="https://unnikked.tk/guida-ai-virtual-host-di-apache/" target="_blank">VirtualHost di Apache</a>.

Baïkal ci rende la vita facile includendo nei file di progetto un file di configurazione template per Apache.

Ci basterà copiare tale file nella cartella `sites-available` e modificarlo secondo i parametri a disposizione.

<pre class="lang:sh decode:true ">sudo cp /var/www/dav.example.com/Specific/virtualhosts/baikal.apache2 /etc/apache2/sites-available/dav_example_com.conf</pre>

Utilizzando un editor di testo come `vim` possiamo modificare il file `dav_example_com.conf` e sostituire `dav.example.com` con il nome dominio che punterà al web server.

<pre class="lang:sh decode:true ">sudo vim /etc/apache2/sites-available/dav_example_com-ssl.conf</pre>

<pre class="lang:sh decode:true ">&lt;VirtualHost *:80&gt;
    DocumentRoot /var/www/dav.example.com/html
    ServerName dav.example.com

    RewriteEngine On
    RewriteRule /.well-known/carddav /card.php [R,L]
    RewriteRule /.well-known/caldav /cal.php [R,L]

    &lt;Directory "/var/www/dav.example.com/html"&gt;
        Options None
        Options +FollowSymlinks
        AllowOverride All
    &lt;/Directory&gt;
&lt;/VirtualHost&gt;</pre>

E&#8217; ora necessario configurare un certificato SSL. E&#8217; possibile comprare un certificato SSL oppure <a href="https://unnikked.tk/come-configurare-un-certificato-ssl-su-apache/" target="_blank">crearne uno</a>.

Una volta generato / scaricato il certificato SSL assumiamo che siano stati spostati nella cartella `/etc/apache2/ssl` e che i file siano chiamati `apache.crt` e `apache.key`.

E&#8217; necessario ora comunicare ad Apache come usare il certificato SSL. Creiamo il file `dav_example_com-ssl.conf` e copiamo il contenuto proposto

<pre class="lang:sh decode:true ">sudo nano /etc/apache2/sites-available/dav_example_com-ssl.conf</pre>

<pre class="lang:sh decode:true ">&lt;IfModule mod_ssl.c&gt;
    &lt;VirtualHost _default_:443&gt;
        ServerAdmin webmaster@localhost

        DocumentRoot /var/www/dav.example.com/html
        ServerName dav.example.com

            RewriteEngine On
            RewriteRule /.well-known/carddav /card.php [R,L]
            RewriteRule /.well-known/caldav /cal.php [R,L]

        &lt;Directory "/var/www/dav.example.com/html"&gt;
            Options None
            Options +FollowSymlinks
            AllowOverride All
        &lt;/Directory&gt;

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        SSLEngine on

        SSLCertificateFile    /etc/apache2/ssl/apache.crt
        SSLCertificateKeyFile /etc/apache2/ssl/apache.key

        &lt;FilesMatch "\.(cgi|shtml|phtml|php)$"&gt;
                SSLOptions +StdEnvVars
        &lt;/FilesMatch&gt;
        &lt;Directory /usr/lib/cgi-bin&gt;
                SSLOptions +StdEnvVars
        &lt;/Directory&gt;

        BrowserMatch "MSIE [2-6]" \
                nokeepalive ssl-unclean-shutdown \
                downgrade-1.0 force-response-1.0
        BrowserMatch "MSIE [17-9]" ssl-unclean-shutdown

    &lt;/VirtualHost&gt;
&lt;/IfModule&gt;</pre>

Ovviamente non dimentichiamoci di sostituire `dav.example.com` e i nomi dei file del certificato con i nomi reali a nostra disposizione.

Abbiamo quasi finito. Le configurazioni per Apache sono terminate, ora abbiamo bisogno di abilitare il modulo `<a href="https://unnikked.tk/come-abilitare-modulo-mod_rewrite/" target="_blank">rewrite</a>`, abilitare i siti e riavviare Apache.

Per abilitare il modulo `rewrite` utilizziamo l&#8217;utility `a2enmod`

<pre class="lang:sh decode:true ">sudo a2enmod rewrite</pre>

Utilizzando invece il comando `a2ensite` abilitiamo i due `VirtualHost` configurati

<pre class="lang:default decode:true ">sudo a2ensite dav_example_com dav_example_com-ssl</pre>

E infine riavviamo Apache

<pre class="lang:sh decode:true ">sudo service apache2 restart</pre>

## Configurare Baïkal

Prima di procedere con l&#8217;installazione da browser è necessario lanciare un ultimo comando dalla console dei comandi atto alla creazione del file `ENABLE_INSTALL`.

<pre class="lang:sh decode:true ">sudo touch /var/www/dav.example.com/Specific/ENABLE_INSTALL</pre>

Possiamo ora aprire il browser sul dominio configurato per iniziare l&#8217;installazione, per esempio `https://dav.example.com`.

![baikal-wizard][1]

Verrà mostrata una schermata con diverse opzioni. Impostiamo il fuso orario tramite il menu a tendina e creiamo una password per l&#8217;amministrazione, le altre configurazioni possono rimanere alterate.

Una volta cliccato su **Save changes** è necessario scegliere SQLite, non è necessario porre modifiche al parametro visualizzato.

![baikal-database-setup][2]

Cliccando di nuovo su **Save changes** è possibile iniziare ad usare Baïkal cliccando su **Start using Baïkal**.

![baikal-installation-completed][3]

## Creazione utenti

Una volta installato l&#8217;applicazione è necessario creare gli utenti e collegarli per avviare la sincronizzazione.

Per creare un utente bisogna accedere alla interfaccia di amministrazione utilizzando l&#8217;utente **admin** e la password scelta durante l&#8217;installazione.

La prima pagina dell&#8217;applicazione è la Dashboard. Mostra cosa è abilitato e fornisce alcune statistiche basilari come il numero degli utenti, calendari e contatti.

Per creare un utente:

  1. In cima alla pagina, clicchiamo su **Users and resources**
  2. Ora clicchiamo sul pulsante a destra **+ Add user**
  3. Compiliamo i campi e clicchiamo sul pulsante **Save changes**

## Conclusioni

E&#8217; ora possibile iniziare la sincronizzazione dei calendari e dei contatti. E&#8217; possibile utilizzare qualsiasi client CalDAV e CardDAV per la connessione al server, bisogna utilizzare il nome dominio configurato come hostname. Nota alcuni client necessitano che come username deve essere fornito la email dell&#8217;utente. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: https://unnikked.tk/wp-content/uploads/2015/06/baikal-wizard.png
 [2]: https://unnikked.tk/wp-content/uploads/2015/06/baikal-database-setup.png
 [3]: https://unnikked.tk/wp-content/uploads/2015/06/baikal-installation-completed.png