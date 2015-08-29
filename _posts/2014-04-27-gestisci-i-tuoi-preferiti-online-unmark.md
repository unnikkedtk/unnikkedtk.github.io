---
title: Gestisci i tuoi preferiti online con Unmark
author: unnikked
layout: post
permalink: /gestisci-i-tuoi-preferiti-online-unmark/
dsq_thread_id:
  - 2642344532
categories:
  - Webmaster
tags:
  - Open Source
  - Self Hosted
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Chi naviga molto su Internet sa bene che gestire i propri preferiti è faticoso, con l&#8217;avvento dei dispositivi mobili intelligenti quali smarthphone e tablet, viene fuori la necessità di poter accedere ai propri preferiti ovunque, avere dunque un luogo centralizzato sembra essere la soluzione ideale.

Esistono svariate app che svolgono già questo ruolo egregiamente, a partire dal browser Chrome che permette di sincronizzare i propri preferiti su tutti i dispositivi mobili quali Android e iOS a web app come <a title="Never lose a link again. " href="https://delicious.com/" target="_blank">Delicious</a>.

L&#8217;app che voglio farvi conoscere in questo articolo è un progetto <a title="unmark is on github" href="https://github.com/plainmade/unmark" target="_blank">opensource</a> aperto da poco, disponibile sia in versione hosted online presso <a title="The to do app for bookmarks" href="http://unmark.it" target="_blank">unmark.it</a> che self-hosted, **unmark**.

> Unmark is designed to help you actually do something with your bookmarks, rather than just hoard them. A simple layout puts the focus on your task at hand and friendly reminders keep you in line. Filtering options let you find what you&#8217;re looking for.

In questo articolo vedremo come poter installare unmark sia su un VPS che su un servizio di hosting condiviso come [Hostinger][1].

Le caratteristiche principali di questa web app sono:

<table>
  <tr>
    <td>
      <img class="aligncenter" src="/wp-content/uploads/2014/04/feature_preview.jpg" alt="" />
    </td>
    
    <td>
      <img class="aligncenter" src="/wp-content/uploads/2014/04/feature_notes.jpg" alt="" />
    </td>
    
    <td>
      <img class="aligncenter" src="/wp-content/uploads/2014/04/feature_bookmarklet.jpg" alt="" />
    </td>
  </tr>
  
  <tr>
    <td>
      <h6 style="text-align: center;">
        Anteprima contenuti
      </h6>
    </td>
    
    <td style="text-align: center;">
      <h6>
        Tag e appunti
      </h6>
    </td>
    
    <td style="text-align: center;">
      <h6>
        Bookmarklet per il salvataggio
      </h6>
    </td>
  </tr>
  
  <tr>
    <td>
      <img class="aligncenter" src="/wp-content/uploads/2014/04/feature_chrome.jpg" alt="" />
    </td>
    
    <td>
      <img class="aligncenter" src="/wp-content/uploads/2014/04/feature_import.jpg" alt="" />
    </td>
    
    <td>
      <img class="aligncenter" src="/wp-content/uploads/2014/04/feature_git.jpg" alt="" />
    </td>
  </tr>
  
  <tr>
    <td style="text-align: center;">
      <h6>
        Estensione per chrome
      </h6>
    </td>
    
    <td style="text-align: center;">
      <h6>
        Import & Export
      </h6>
    </td>
    
    <td style="text-align: center;">
      <h6>
        Sorgenti su GitHub
      </h6>
    </td>
  </tr>
</table>

## Installazione su VPS

Per poter installare unmark su un <a title="Come ottenere e configurare un server VPS" href="http://unnikked.tk/come-ottenere-e-configurare-un-server-vps/" target="_blank">VPS</a> per prima cosa dobbiamo aver configurato un [ambiente LAMP][2] adatto, dopodiché ci portiamo nella cartella principale del web server apache:

<pre class="lang:default decode:true">cd /var/www</pre>

Cloniamo la repository tramite `git`:

<pre class="lang:default decode:true">git clone https://github.com/plainmade/unmark.git</pre>

Oppure scarichiamo il pacchetto `.zip` dell&#8217;ultima versione tramite wget:

<pre class="lang:default decode:true">wget https://github.com/plainmade/unmark/archive/master.zip</pre>

ed estraiamo l&#8217;archivio con:

<pre class="lang:default decode:true">unzip master.zip</pre>

Assegniamo la cartella del progetto all&#8217;utente di apache:

<pre class="lang:sh decode:true">chown -R www-data:www-data cartella/unmark</pre>

Dopo esserci portati nella cartella principale del progetto, dobbiamo creare un file di configurazione per il database `MySQL`:

<pre class="lang:sh decode:true">cp application/config/database-sample.php application/config/database.php</pre>

Creiamo ora tramite linea di comando il database necessario per la nuova istanza di unmark:

<pre class="lang:default decode:true">mysql -u user -p password</pre>

Sostituendo user e password rispettivamente il nome utente e la password dell&#8217;utente del server MySQL.

Una volta effettuato l&#8217;accesso eseguiamo la seguente query per la creazione del database:

<pre class="lang:mysql decode:true">mysql&gt; CREATE DATABASE unmark;</pre>

e usciamo dalla console digitando:

<pre class="lang:sh decode:true">mysql&gt; exit;</pre>

Ora dobbiamo aggiornare il file di configurazione precedentemente creato, ovvero `database.php`, apriamolo con l&#8217;editor di testo preferito e compiliamo i dati necessari:

<pre class="lang:php decode:true">if ($_SERVER['HTTP_HOST'] == 'localhost') { // If local, load this
  $db['default']['hostname'] = '127.0.0.1';
  $db['default']['username'] = 'root';
  $db['default']['password'] = 'root';
  $db['default']['database'] = 'unmark';

} else { // If not local, load this
  $db['default']['hostname'] = 'localhost';
  $db['default']['username'] = 'username';
  $db['default']['password'] = 'password';
  $db['default']['database'] = 'unmark';

}</pre>

Successivamente tramite browser raggiungiamo l&#8217;installazione di unmark `http://tuodominio.com/cartella/unmark/setup`

<p align="center">
  <img src="/wp-content/uploads/2014/04/unmark_hostinger_user_registration.png" alt="unmark_hostinger_user_registration" />
</p>

## Installazione su Hostinger

In questa sezione vedremo come installare unmark su <a title="Crea il tuo sito web su Hostinger.it" href="crea-il-tuo-sito-web-su-hostinger-it" target="_blank">Hostinger</a>. Ci avvaleremo di alcuni strumenti del pannello di controllo che ci aiuteranno a velocizzare il processo di installazione.

Per prima cosa andiamo sulla pagina di <a title="unmark releases - GitHub" href="https://github.com/plainmade/unmark/releases" target="_blank">release di unmark</a> e copiamo il link relativo all&#8217;ultima versione disponibile. Consiglio di copiare il link per l&#8217;archivio `tar.gz` così potremo scompattarlo automaticamente dalla console che mette a disposizione Hostinger nel suo pannello di controllo.

Dopodiché andiamo sulla console di Hostinger, dobbiamo cliccare sull&#8217;opzione `Console SSH` come in figura.

<p align="center">
  <img src="/wp-content/uploads/2014/04/unmark_hostinger_console_ssh.png" alt="unmark_hostinger_console_ssh" />
</p>

Ci apparirà la console. (da questo momento in poi scrivo i comandi nell&#8217;usuale visualizzatore di codice per rendere più facile la lettura dei comandi)

Per prima cosa ci sposiamo nella cartella `public_html`:

<pre class="lang:sh decode:true">cd public_html</pre>

e scarichiamo l&#8217;ultima versione di unmark (al momento della stesura dell&#8217;articolo è la `1.5.2`):

<pre class="lang:sh decode:true">wget https://github.com/plainmade/unmark/archive/1.5.2.tar.gz</pre>

Estraiamo l&#8217;archivio con il comando `tar`:

<pre class="lang:sh decode:true">tar -xvf 1.5.2.tar.gz</pre>

Spostiamo tutti i file dalla cartella `unmark-1.5.2` alla directory corrente ovvero `public_html`:

<pre class="lang:sh decode:true">mv unmark-1.5.2/* .</pre>

Spostiamo anche il file `.htaccess` da essa.

<pre class="lang:sh decode:true">mv unmark-1.5.2/.htaccess .</pre>

Purtroppo i comandi `rm` e `rmdir` sono disabilitati dalla console, pertanto la cartella `unmark-1.5.2` va eliminata manualmente o tramite `FTP` o tramite il gestore file che forniscono nel pannello di controllo.

Per lo stesso motivo non è possibile creare il file di configurazione per il database poiché si ha necessità di usare il comando `cp`, ma vedremo più avanti come fare.

Dobbiamo ora creare il database mysql relativo ad unmark, pertanto andiamo nella sezione apposita del pannello di controllo.

<p align="center">
  <img src="/wp-content/uploads/2014/04/unmark_hostinger_database.png" alt="unmark_hostinger_database" />
</p>

E compiliamo i dati del modulo di creazione.

<p align="center">
  <img src="/wp-content/uploads/2014/04/unmark_hostinger_database_wizard.png" alt="unmark_hostinger_database_wizard" />
</p>

Creiamo ora un file di configurazione per il database che andremo a modificare tramite il gestore file integrato di hostinger in cui inseriremo i dettagli del database.

Spostiamoci nella cartella `application/configs` e duplichiamo il file `database-sample.php` rinominandolo successivamente in `database.php` (ometto i passaggi tramite immagini poiché il gestore file è molto intuitivo da usare).

<p align="center">
  <img src="/wp-content/uploads/2014/04/unmark_hostinger_database_file_manager.png" alt="unmark_hostinger_database_file_manager" />
</p>

Modifichiamo il file inserendo nei campi mostrati nell&#8217;immagine i parametri creati nella sezione MySQL. (l&#8217;immagine è a scopo illustrativo)

<p align="center">
  <img src="/wp-content/uploads/2014/04/unmark_hostinger_database_config.png" alt="unmark_hostinger_database_config" />
</p>

Successivamente possiamo andare sull&#8217;url del nostro sito web e creare il primo account.

<p align="center">
  <img src="/wp-content/uploads/2014/04/unmark_hostinger_user_registration.png" alt="unmark_hostinger_user_registration" />
</p>

## Aggiornamento della piattaforma

Poiché abbiamo scelto di installare una istanza di unmark preoccupandoci di gestire il server su cui è ospitata, è nostro compito mantenere aggiornata l&#8217;installazione con le ultime feature sviluppate.

Non solo, è anche nostro compito pianificare una strategia di backup per salvare periodicamente il database (ed eventualmente i file) di unmark.

Per aggiornare unmark basta eseguire questi semplici passaggi:

  * bisogna scaricare l&#8217;ultima versione di unmark
  * estrarre il contenuto dell&#8217;archivio nella stessa cartella di installazione di unmark
  * andare sull&#8217;url `http://tuodominio.com/istanza/unmark/upgrade`
  * per chi ha accesso alla shell del server (es. per chi possiede un VPS) è possibile lanciare il seguente comando `php index.php migrations latest`

Ovviamente, prima di effettuare qualsiasi aggiornamento è consigliabile avere una copia di backup di unmark, nel caso l&#8217;aggiornamento non andasse a buon fine.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: crea-il-tuo-sito-web-su-hostinger-it "Crea il tuo sito web su Hostinger.it"
 [2]: apache-php-mysql "Come configurare un ambiente LAMP"