---
title: 'Solo: un Project Manager adatto per i Freelancer'
author: unnikked
layout: post
permalink: /solo-un-project-manager-adatto-per-freelancer/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:47:"/wp-content/uploads/2013/12/solo-screenshot.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:47:"/wp-content/uploads/2013/12/solo-screenshot.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 70
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 2126265602
categories:
  - Internet
  - Webmaster
tags:
  - Business
  - Open Source
  - Produttività
  - Self Hosted
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


<a title="The free & easy way to manage your projects" href="http://www.getsoloapp.com/" target="_blank">Solo</a> è un&#8217;applicazione gratuita per la gestione di progetti creata appositamente per i freelancer. Si possono creare contatti, gestire compiti, caricare file, tracciare i progressi del progetto e prendere appunti.

E&#8217; dotata di una interfaccia grafica accattivante che la rende facile da utilizzare, è facile da installare e il suo codice sorgente è liberamente modificabile.

E&#8217; disponibile in due versioni, una gratuita e una a pagamento chiamata <a title="Project management for freelancers and small businesses" href="http://www.duetapp.com/" target="_blank">Duet</a>.

Con Duet, a differenza di Solo, i possono creare accessi per i clienti, gestire più utenti, gestire le fatture, gestire i pagamenti tramite PayPal e la possibilità di creare discussioni.

## Installazione

L&#8217;installazione di Solo è facile, basterà caricare il pacchetto di installazione su <a href="come-ottenere-e-configurare-un-server-vps/" title="Come ottenere e configurare un server VPS" target="_blank">un server virtuale VPS</a> e seguire la procedura guidata. Prima di procedere con l&#8217;installazione dobbiamo essere certi di aver [installato un ambiente LAMP][1] con una versione di PHP maggiore o uguale alla 5.3 .

Creiamo tramite la console MySQL il database che andrà ad ospitare Solo, prima però effettuiamo l&#8217;acceso con:

<pre class="lang:default decode:true">mysql -u root -p</pre>

dove al posto di root può essere inserito qualsiasi utente mysql precedentemente abilitato alla creazione di database e tabelle (consiglio di non utilizzare mai l&#8217;utente root in fase di produzione), verrà chiesta la password. Una volta autenticati creiamo il database `solo`:

<pre class="lang:default decode:true">mysql&gt; CREATE DATABASE solo;
Query OK, 1 row affected (0.00 sec)</pre>

usciamo dalla console con il comando `exit` e portiamoci in `/var/www` con il comando `cd` e scarichiamo l&#8217;ultima versione di solo:

<pre class="lang:default decode:true">curl 'http://www.getsoloapp.com/server/do_download' -H 'DNT: 1' -H 'Accept-Encoding: gzip,deflate,sdch' -H 'Host: www.getsoloapp.com' -H 'Accept-Language: it-IT,it;q=0.8,en-US;q=0.6,en;q=0.4' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Referer: http://www.getsoloapp.com/download' -H 'Cookie: _ga=GA1.2.1257010325.1385835780' -H 'Connection: keep-alive' --compressed &gt; solo.zip</pre>

Se siete interessati al significato di questo comando potrete trovare la spiegazione su [explainshell.com][2].

<p align="center">
  [SALTO] 
  
  <p>
    Estraiamo l&#8217;archivio con:
  </p>
  
  <pre class="lang:default decode:true">unzip solo.zip</pre>
  
  <p>
    E assegniamo la cartella a <code>www-data</code> con:
  </p>
  
  <pre class="lang:default decode:true " >chown -R www-data:www-data solo/</pre>
  
  <p>
    Ora siamo pronti per lanciare l&#8217;installazione di Solo, nel browser digitiamo <code>http://indirizzoip/solo/install</code>
  </p>
  
  <p align="center">
    <img alt="Wizard Installazione" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-29-141506.png" />
  </p>
  
  <p>
    clicchiamo su <em>Next Step</em>, se il server è configurato correttamente non ci verranno mostrati particolari errori
  </p>
  
  <p align="center">
    <img alt="Wizard Server Requirements" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-29-141737.png" />
  </p>
  
  <p>
    clicchiamo su <em>Next Step</em> ci verrà chiesto di <a title="Come impostare i permessi ai file con “chmod”" href="permessi-file-chmod">controllare i permessi</a> di alcune cartelle dell&#8217;applicazione
  </p>
  
  <p align="center">
    <img alt="Wizard File Permission" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-29-142325.png" />
  </p>
  
  <p>
    in particolare dovranno essere impostati su <strong>777</strong> ma possiamo evitare questo passaggio poiché abbiamo assegnato la cartella solo all&#8217;utente e gruppo <code>www-data</code>.
  </p>
  
  <p>
    Clicchiamo su <em>Check Folder Permission</em>, se tutto è stato fatto correttamente ci verrà detto <em>&#8220;Your folder permissions are correct&#8221;</em>, continuiamo cliccando su <em>Next Step</em>
  </p>
  
  <p>
    Ci verrà ora chiesto di configurare il database, come mostrato in figura
  </p>
  
  <p align="center">
    <img alt="Wizard Database" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-29-142936.png" />
  </p>
  
  <p>
    molto probabilmente lo script di installazione è in grado di creare autonomamente il database, ma personalmente preferisco effettuare l&#8217;operazione manualmente non solo per avere sotto controllo il processo di installazione ma anche perché in una configurazione server potrebbe capitare che un utente MySQL (es. pincopallo) non abbia i privilegi necessari per creare nuovi database. Inoltre se si installa Solo in un ambiente shared come <a title="Crea il tuo sito web su Hostinger.it" href="crea-il-tuo-sito-web-su-hostinger-it">Hostinger</a> è necessario creare preventivamente il database tramite il pannello di controllo.
  </p>
  
  <p>
    Clicchiamo ora su <em>&#8220;Create Database&#8221;</em>, se la proceduta è andata a buon fine riceveremo <em>&#8220;Database created successfully&#8221;</em>, proseguiamo cliccando su <em>Next Step</em>.
  </p>
  
  <p>
    Ora possiamo creare il profilo utente principale per utilizzare l&#8217;applicazione
  </p>
  
  <p align="center">
    <img alt="Wizard User Profile" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-29-143846.png" />
  </p>
  
  <p>
    Di default Solo creerà un account utente con nome <code>admin</code> e password <code>admin</code>, è consigliabile cambiare subito queste credenziali di accesso
  </p>
  
  <p align="center">
    <img alt="Wizard Finish" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-29-144106.png" />
  </p>
  
  <p>
    finalizziamo l&#8217;installazione cliccando su <em>Log In</em>.
  </p>
  
  <p>
    E&#8217; consigliabile eliminare la cartella di installazione:
  </p>
  
  <pre class="lang:default decode:true">rm -r solo/install/</pre>
  
  <h2>
    Cambio password di default
  </h2>
  
  <p>
    Una volta effettuati l&#8217;accesso su Solo otterremo la Dashboard principale dell&#8217;applicazione
  </p>
  
  <p align="center">
    <img alt="Dashboard Solo" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-29-144622.png" />
  </p>
  
  <p>
    per cambiare la password dovremo andare sul profilo principale, in questo caso clicchiamo su <em>&#8220;Sample&#8221;</em>
  </p>
  
  <p align="center">
    <img alt="Solo Main Profile" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-29-144954.png" />
  </p>
  
  <p>
    clicchiamo su <em>&#8220;Change Password&#8221;</em> per cambiare la password
  </p>
  
  <p align="center">
    <img alt="Solo change Password" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-29-145259.png" />
  </p>
  
  <p>
    <!--nextpage-->
  </p>
  
  <h2>
    Caratteristiche
  </h2>
  
  <h3>
    Dashboard
  </h3>
  
  <p>
    La dashboard elenca i progetti inseriti e permette di vedere velocemente lo stato di ogni progetto.
  </p>
  
  <h3>
    Dettagli progetto
  </h3>
  
  <p>
    La pagina sui dettagli di progetto mostra un riscontro veloce dei progetti. Elenca le seguenti informazioni:
  </p>
  
  <ul>
    <li>
      <strong>Project progress</strong> &#8211; Una percentuale indica la parte del progetto che è stata completata. Ciò è automaticamente calcolato.
    </li>
    <li>
      <strong>Project status</strong> &#8211; Il colore indica lo stato del progetto. Verde rientra nella scadenza, giallo significa che il progetto è a rischio e rosso significa che è in ritardo
    </li>
    <li>
      <strong>Expected Progress</strong> &#8211; Valore auto calcolato basato sulla data di inizio e fine del progetto. Ciò è usato insieme al progresso corrente per determinare lo stato del progetto
    </li>
    <li>
      <strong>Recent activity</strong> &#8211; Elenca tutte le recenti attività. Per esempio, nuovi compiti, compiti svolti, upload di file, messaggi, etc.
    </li>
  </ul>
  
  <h3>
    Progresso automatico dei progetti e tracciamento degli stati
  </h3>
  
  <p>
    Lo stato di avanzamento di ogni progetto è automaticamente calcolato in base al numero totale dei compiti inseriti nel progetto e il numero totale di compiti completati. Di default, ogni compito ha la stessa importanza in un progetto, ma questo parametro può essere sovrascritto, rendendo alcuni compiti più rivelanti.
  </p>
  
  <p>
    Utilizzando il progresso compiuto e il progresso atteso, l&#8217;applicazione può calcolare lo stato del progetto.
  </p>
  
  <p>
    L&#8217;applicazione può anche calcolare il progresso atteso basato sulla data di inizio e fine del progetto.
  </p>
  
  <ul>
    <li>
      <strong>Verde</strong> &#8211; Il progetto rientra nei tempi di consegna
    </li>
    <li>
      <strong>Giallo</strong> &#8211; Il è a rischio. I progressi più importanti non sono stati svolti, potrebbe ritardare
    </li>
    <li>
      <strong>Rosso</strong> &#8211; Il progetto è in ritardo o la data di consegna è già passata.
    </li>
  </ul>
  
  <h3>
    Lista dei compiti
  </h3>
  
  <p>
    La lista dei compiti è progettata per permettere l&#8217;aggiunta dei compiti il più veloce possibile. Basta digitare e cliccare invio per creare un nuovo compito.
  </p>
  
  <ul>
    <li>
      aggiungi una colonna alla fine del compito per creare una testata
    </li>
    <li>
      doppio click sul compito per vederne i dettagli
    </li>
  </ul>
  
  <p>
    I compiti vengono automaticamente salvati, ma si può premere <code>ctrl-s</code> se si vuole salvare immediatamente.
  </p>
  
  <p>
    Si possono filtrare i compiti per lo stato di completamento e creatore o si possono cercare velocemente con il motore di ricerca integrato.
  </p>
  
  <h3>
    Dettagli dei compiti
  </h3>
  
  <p>
    La pagina dei dettagli dei compiti permette di eseguire le seguenti operazioni:
  </p>
  
  <ul>
    <li>
      Vedere maggiori informazioni sui compiti inclusi: appunti sui compiti, a chi è stato assegnato il compito, quanto tempo è già stato speso sul compito e i file che sono associati al compito
    </li>
    <li>
      <strong>Timer del compito</strong> &#8211; Il timer permette di tracciare quanto tempo è stato speso su un compito
    </li>
    <li>
      Una lista di tutte le voci che mostrano le persone che hanno lavorato su un compito, la data e quanto tempo hanno speso su esso
    </li>
    <li>
      Allegare un file ad un compito
    </li>
    <li>
      Modificare o eliminare un compito.
    </li>
  </ul>
  
  <h3>
    Timer del compito
  </h3>
  
  <p>
    Il timer del compito traccia automaticamente quanto tempo è stato speso su un compito. Bisogna cliccare sul pulsante <em>&#8220;Start Timer&#8221;</em> per iniziare.
  </p>
  
  <h3>
    Calendario
  </h3>
  
  <p>
    Il calendario del progetto permette di vedere velocemente quali compiti scadono nell&#8217;imminente.
  </p>
  
  <h3>
    Lista dei file
  </h3>
  
  <p>
    La lista dei file è progettata per permettere di trovare i file caricati il più veloce possibile. Ci sono due modi di vedere la lista dei file:
  </p>
  
  <ul>
    <li>
      <strong>File Previews</strong> &#8211; Questa sezione mostra i file insieme ad un anteprima del file stesso. L&#8217;anteprima include un player multimediale per i file video e audio. L&#8217;anteprima supporta i seguenti formati: pdf, immaggini, audio, video, testo e codice
    </li>
    <li>
      <strong>File List View </strong>&#8211; Questa sezione mostra i file colorati in base al tipo di file.
    </li>
  </ul>
  
  <h3>
    Dettagli dei file
  </h3>
  
  <p>
    Questa pagina mostra un anteprima più dettagliata del file ed ha l&#8217;opzione per il download, l&#8217;aggiunta di appunti e l&#8217;eliminazione del file.
  </p>
  
  <h3>
    Caricamento dei file
  </h3>
  
  <p>
    Si possono caricare più file nello stesso momento utilizzando il caricatore ajax. Il caricatore dei file mostra separatamente il progresso di caricamento per ogni file.
  </p>
  
  <h3>
    Appunti di progetto
  </h3>
  
  <p>
    Un amministratore può aggiungere appunti a qualsiasi progetto usando l&#8217;editor integrato <a title="WYSIWYG - Wikipedia" href="http://it.wikipedia.org/wiki/WYSIWYG" target="_blank">WYSIWYG</a>.
  </p>
  
  <h3>
    Dettagli del cliente
  </h3>
  
  <p>
    Lists all information about a client including:
  </p>
  
  <p>
    Elenca tutte le informazioni sul cliente che includono:
  </p>
  
  <ul>
    <li>
      Email, indirizzo, telefono e sito web
    </li>
    <li>
      Progetti attivi del cliente
    </li>
    <li>
      La pagina dei dettagli del cliente permette anche di aggiungere nuovi utenti al cliente.
    </li>
  </ul>
  
  <h3>
    Dettagli utente
  </h3>
  
  <p>
    Questa sezione mostra le informazioni di contatto degll&#8217;utente (email, indirizzo, telefono) e permette anche la modifica della password e della foto profilo.
  </p>
  
  <h3>
    Ricerca
  </h3>
  
  <p>
    Una ricerca restituisce una lista su tutti i progetti, compiti, fatture, file e messaggi che soddisfano la ricerca.
  </p>
  
  <h2>
    Configurazione delle email
  </h2>
  
  <p>
    By default, the application uses PHP&#8217;s built in mail() function to send all emails. Some host no longer allow this function and require SMTP. If your host requires SMTP, you will need to enable this functionality in the config file. Here are the steps you need to follow
  </p>
  
  <p>
    Di default, l&#8217;applicazione usa la funziona nativa di PHP <code>mail()</code> per inviare tutte le email. Alcuni host non permettono l&#8217;uso di questa funzione e richiedono <a title="SMTP - Wikipedia" href="http://it.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol" target="_blank">SMTP</a>. <a title="Come configurare Pear per inviare email tramite SMTP" href="hcome-configurare-pear-email-smtp" target="_blank">Per abilitare SMTP</a> bisogna modificare il file di configurazione che si trova in <code>cartellaprincipaledisolo/server/config/config.php</code>.
  </p>
  
  <p>
    Bisogna cambiare il valore di <code>email.use_smtp</code> da <code>false</code> a <code>true</code>
  </p>
  
  <pre class="lang:default decode:true">$CONFIG['email']['use_smtp'] = true;</pre>
  
  <p>
    e inserire le credenziali di accesso nelle variabili
  </p>
  
  <pre class="lang:default decode:true">$CONFIG['email']['host'] = 'smtp.myhost.com';
$CONFIG['email']['port'] = 465;
$CONFIG['email']['enable_authentication'] = true;
$CONFIG['email']['username'] = 'myusername';
$CONFIG['email']['password'] = 'mypassword';
$CONFIG['email']['enable_encryption'] = 'ssl';</pre>
  
  <h2>
    Conclusioni
  </h2>
  
  <p>
    Se siete arrivati a leggere fin qui sicuramente questa applicazione vi interessa, personalmente la trovo molto funzionale non solo per progetti commerciali ma anche per tracciare i propri progetti personali. Ha tutti gli strumenti per essere di grande aiuto alla produttività.
  </p>
  
  <p>
    Un ultimo consiglio, se si ha la necessità di accedere da remoto all&#8217;applicazione (nel caso di una installazione su un server locale) è quello di <a title="Come configurare un certificato SSL su Apache" href="come-configurare-un-certificato-ssl-su-apache" target="_blank">configurare apache per trasferire i dati in modalità sicura tramite https</a>.
  </p>
  
  <br />
  
  <div align="center">
    <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
  </div>

 [1]: apache-php-mysql "Come configurare un ambiente LAMP"
 [2]: http://explainshell.com/explain?cmd=curl+%27http%3A%2F%2Fwww.getsoloapp.com%2Fserver%2Fdo_download%27+-H+%27DNT%3A+1%27+-H+%27Accept-Encoding%3A+gzip%2Cdeflate%2Csdch%27+-H+%27Host%3A+www.getsoloapp.com%27+-H+%27Accept-Language%3A+it-IT%2Cit%3Bq%3D0.8%2Cen-US%3Bq%3D0.6%2Cen%3Bq%3D0.4%27+-H+%27User-Agent%3A+Mozilla%2F5.0+%28X11%3B+Linux+x86_64%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F31.0.1650.57+Safari%2F537.36%27+-H+%27Accept%3A+text%2Fhtml%2Capplication%2Fxhtml%2Bxml%2Capplication%2Fxml%3Bq%3D0.9%2Cimage%2Fwebp%2C*%2F*%3Bq%3D0.8%27+-H+%27Referer%3A+http%3A%2F%2Fwww.getsoloapp.com%2Fdownload%27+-H+%27Cookie%3A+_ga%3DGA1.2.1257010325.1385835780%27+-H+%27Connection%3A+keep-alive%27+--compressed+%3E+solo.zip "explainshell.com"