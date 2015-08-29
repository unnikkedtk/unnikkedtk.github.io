---
title: Poche una alternativa self hosted a Pocket
author: unnikked
layout: post
permalink: /poche-una-alternativa-self-hosted-pocket/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:65:"/wp-content/uploads/2013/12/Screenshot-from-2013-12-30-213028.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:65:"/wp-content/uploads/2013/12/Screenshot-from-2013-12-30-213028.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 58
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 2087546885
categories:
  - Internet
  - Webmaster
tags:
  - feed rss
  - IFTTT
  - Open Source
  - Self Hosted
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Mentre navighiamo su Internet sicuramente ci sarà capitato di non poter leggere al volo un articolo interessante per mancanza di tempo. Applicazioni web come <a href="http://getpocket.com/" title="Pocket " target="_blank">Pocket</a> soddisfano questa necessità, riuscendo a portare anche l&#8217;esperienza di poter leggere in un secondo momento i link salvati su un dispositivo mobile. Caratteristica peculiare di questo servizio è quello di salvare letteralmente il contenuto del link estrapolando solo il contenuto principale.

<a href="http://www.inthepoche.com/" title="Poche, a self hostable read-it-later app" target="_blank">Poche</a> nella sua semplicità riesce a svolgere questo compito. Non solo, questa applicazione è completamente <a href="https://github.com/inthepoche/poche" title="Repository Github Poche" target="_blank">open source</a>! 

## Installazione

Prima di installare Poche assicuriamoci di aver installato l&#8217;estensione `php5-sqlite`:

<pre class="lang:default decode:true " >apt-get install php5-sqlite</pre>

E riavviamo `apache` con:

<pre class="lang:default decode:true " >service apache2 restart</pre>

Scarichiamo l&#8217;ultima versione di Poche tramite `wget` nella cartella `/var/www`:

<pre class="lang:default decode:true " >wget http://r.cdetc.fr/latest-poche</pre>

Estraiamolo con:

<pre class="lang:default decode:true " >unzip latest-poche</pre>

Rinominiamo la cartella per semplicità:

<pre class="lang:default decode:true " >mv poche-1.3.0/ poche/</pre>

Assegniamo l&#8217;utente `www-data` alla cartella `poche/`:

<pre class="lang:default decode:true " >chown -R www-data:www-data poche/</pre>

Ora entriamo nella cartella e procediamo con l&#8217;installazione

<pre class="lang:default decode:true " >cd poche/</pre>

<p align="center">
  [SALTO] 
  
  <h2>
    Installazione in ambiente shared
  </h2>
  
  <p>
    Poiché per l&#8217;installazione Poche fa uso di <a href="http://getcomposer.org/" title="Composer - Dependency Manager for PHP" target="_blank">Composer</a> per la risoluzione delle dipendenze, in un ambiente shared, come <a href="crea-il-tuo-sito-web-su-hostinger-it" title="Crea il tuo sito web su Hostinger.it">Hostinger</a>, è possibile installarlo scaricando <a href="http://r.cdetc.fr/vendorzip" title="Vendor Zip Poche">questo pacchetto</a> estraendolo nella cartella principale di Poche.
  </p>
  
  <h2>
    Installazione tramite Composer
  </h2>
  
  <p>
    Per l&#8217;installazione tramite Composer, scarichiamo Composer nella cartella principale di Poche:
  </p>
  
  <pre class="lang:default decode:true " >curl -s http://getcomposer.org/installer | php</pre>
  
  <p>
    E lanciamo l&#8217;installazione con:
  </p>
  
  <pre class="lang:default decode:true " >php composer.phar install</pre>
  
  <p>
    Rinominiamo ora il file di configurazione:
  </p>
  
  <pre class="lang:default decode:true " >cp inc/poche/config.inc.php.new inc/poche/config.inc.php</pre>
  
  <p>
    Nella variabile <code>SALT</code> Poche richiede una stringa robusta, generiamola con:
  </p>
  
  <pre class="lang:default decode:true " >salt=`&lt; /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c20;`</pre>
  
  <p>
    e inseriamola nel file <code>config.inc.php</code> tramite <code>sed</code>:
  </p>
  
  <pre class="lang:default decode:true " >sed "s/define ('SALT', '');/define ('SALT', '$salt');/" inc/poche/config.inc.php -i</pre>
  
  <p>
    <!--nextpage-->
  </p>
  
  <h2>
    Configurazione del database
  </h2>
  
  <p>
    Poche può essere utilizzato con un database <code>sqlite</code>, <code>MySQL</code> o <code>postgresql</code>.
  </p>
  
  <p>
    Per utilizzarlo con sqlite basta che si copia il database dalla cartella <code>install/</code> in <code>db/</code>:
  </p>
  
  <pre class="lang:default decode:true " >cp install/poche.sqlite db/</pre>
  
  <p>
    e proseguire con la finalizzazione dell&#8217;installazione.
  </p>
  
  <p>
    Per proteggere il proprio database sqlite è possibile usare questo snippet per la sua protezione, creiamo un file .htaccess nella cartella principale di Poche e inseriamo il seguente codice:
  </p>
  
  <pre class="lang:default decode:true " >Options -Indexes
&lt;Files ~ ".sqlite$"&gt;
    Order allow,deny
    Deny from all
&lt;/Files&gt;</pre>
  
  <p>
    Per chi usa nginx la configurazione da utilizzare è:
  </p>
  
  <pre class="lang:default decode:true " >location ~ /(db) {
    deny all;
    return 404;
}</pre>
  
  <p>
    Se invece si vuole utilizzare MySQL o postgresql basta importare il file del database, per prima cosa creiamo un database per Poche, effettuiamo l&#8217;accesso alla console MySQL con:
  </p>
  
  <pre class="lang:default decode:true " >mysql -u root -p</pre>
  
  <p>
    E creiamo il database con:
  </p>
  
  <pre class="lang:default decode:true " >mysql&gt; CREATE DATABASE poche;</pre>
  
  <p>
    Usciamo con <code>exit</code> e importiamo il database con:
  </p>
  
  <pre class="lang:default decode:true " >mysql -u root -p poche &lt; install/mysql.sql</pre>
  
  <p>
    Successivamente modifichiamo i seguenti parametri del file <code>config.inc.php</code> con le credenziali del database:
  </p>
  
  <pre class="lang:php decode:true " ># only for postgres & mysql
define ('STORAGE_SERVER', 'localhost');
define ('STORAGE_DB', 'poche');
define ('STORAGE_USER', 'poche');
define ('STORAGE_PASSWORD', 'poche');
</pre>
  
  <p>
    riassegniamo i <code>www-data:www-data</code> ai file generati da composer:
  </p>
  
  <pre class="lang:default decode:true">chown -R www-data:www-data *</pre>
  
  <p>
    Ed eliminiamo la cartella <code>/install</code>:
  </p>
  
  <pre class="lang:default decode:true " >rm -r install/</pre>
  
  <p>
    Collegandoci su <code>http://indirizzoip/poche</code> otterremo la pagina di installazione di Poche
  </p>
  
  <p align="center">
    <img src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-30-212506.png" alt="Poche - Installazione" />
  </p>
  
  <p>
    Compilando il modulo creeremo l&#8217;account principale per gestire Poche, una volta &#8220;registrati&#8221; otterremo nella pagina principale dell&#8217;applicazione
  </p>
  
  <p align="center">
    <img src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-30-212826.png" alt="Poche - Dashboard" />
  </p>
  
  <p>
    <!--nextpage-->
  </p>
  
  <h2>
    Caratteristiche
  </h2>
  
  <h3>
    Home
  </h3>
  
  <p>
    La pagina principale mostra gli ultimi link inseriti nel database.
  </p>
  
  <h3>
    Favorites
  </h3>
  
  <p>
    Questa sezione mostra i link che sono stati marcati come preferiti tramite il simbolo stella (☆).
  </p>
  
  <h3>
    Archive
  </h3>
  
  <p>
    L&#8217;archivio mostra tutti i link che sono stati marcati come letti tramite il simbolo <img src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-30-213709.png" />
  </p>
  
  <h3>
    Tags
  </h3>
  
  <p>
    La sezione tags mostra l&#8217;elenco dei tags utilizzati per ordinare la propria collezione di link.
  </p>
  
  <h3>
    Config
  </h3>
  
  <p>
    Nella sezione config troviamo vari link per poter scaricare estensioni per aggiungere facilmente link alla propria installazione di Poche per Firefox, Chrome, Android, Windows Phone e un bookmark da utilizzare con un browser qualsiasi.
  </p>
  
  <p>
    Inoltre è presente un form con cui è possibile inserire link nel database direttamente dall&#8217;applicazione.
  </p>
  
  <p>
    E&#8217; possibile anche generare un token per la generazione di feed rss per i tag creati, funzionalità che la trovo molto utile per la condivisione dei propri salvataggi in rete, oppure utilizzarli insieme a <a href="http://unnikked.tk/automatizza-if-this-then-that/" title="Rendi automatiche le tue azioni con If This Then That" target="_blank">If This Then That</a> per creare le ricette più curiose e simpatiche.
  </p>
  
  <h2>
    Importazioni dei link
  </h2>
  
  <p>
    Sempre nella sezione config è possibile importare link da servizi esterni come Pocket, <a href="http://www.instapaper.com/" title="Instapaper - Home Page" target="_blank">Instapaper</a> e <a href="https://www.readability.com/" title="Read Comfortably — Anytime, Anywhere" target="_blank">Readability</a>.
  </p>
  
  <p>
    Per importare per esempio i link salvati su Pocket, effettuiamo l&#8217;accesso al servizio e esportiamo i dati nella sezione <a href="https://getpocket.com/export" title="Pocket - Export" target="_blank">export</a> delle impostazioni.
  </p>
  
  <p>
    Successivamente carichiamo il file dentro la cartella principale di Poche e clicchiamo sul link di importazione.
  </p>
  
  <h2>
    Conclusione
  </h2>
  
  <p>
    Personalmente trovo questo progetto open source interessante e l&#8217;applicazione nella sua semplicità funzionale, la mancanza di un motore di ricerca interno come Pocket si fa sentire ma l&#8217;uso dei tag semplifica molto l&#8217;organizzazione dei propri link.
  </p>
  
  <p>
    Come sempre consiglio di configurare un <a href="come-configurare-un-certificato-ssl-su-apache" title="Come configurare un certificato SSL su Apache" target="_blank">certificato SSL self signed</a> per proteggere la connessione tra l&#8217;applicazione e il proprio browser.
  </p>
  
  <br />
  
  <div align="center">
    <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
  </div>