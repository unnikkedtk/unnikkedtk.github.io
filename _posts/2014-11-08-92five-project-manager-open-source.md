---
title: '92five &#8211; un project manager open source'
author: unnikked
layout: post
permalink: /92five-project-manager-open-source/
dsq_thread_id:
  - 3204420273
categories:
  - Novità
tags:
  - Open Source
  - Self Hosted
  - VPS
---

92five è un gestore progetti open source, è possibile installarlo su qualsiasi server che soddisfa le seguenti caratteristiche:

  * PHP 5.4 o maggiore
  * Estensione PDO per PHP
  * Estensione MCrypt per PHP
  * Libreria PHP GD
  * Database MySQL

## Caratteristiche

92five copre tutte le caratteristiche di un gestore di progetto. Ecco le caratteristiche

**Progetti**  
Tutto inizia con i progetti. Una interfaccia accattivante mostra tutte le statistiche e le informazioni utili da tenere sott&#8217;occhio. 

<p align="center">
  <img src="/wp-content/uploads/2014/10/project1.png" alt="92five app - Projects" />
</p>

**Tasks**  
I task normalmente non sono fatti in tempo. Per questo motivo i task sono progettati in modo che difficilmente possono essere dimenticati.

<p align="center">
  <img src="/wp-content/uploads/2014/10/task1.png" alt="92five app - Tasks" />
</p>

**Tabella di lavoro**  
La tabella di lavoro ti permette di compilare il tempo trascorso su un progetto in modo facile ed intuitivo.

<p align="center">
  <img src="/wp-content/uploads/2014/10/timesheet.png" alt="92five app - Timesheet" />
</p>

**Calendario**  
Con il calendario è sempre possibile tenere sott&#8217;occhio le attività e gli eventi.

<p align="center">
  <img src="/wp-content/uploads/2014/10/calendar.png" alt="92five app - Calendario" />
</p>

**To-do**  
Gestione facile ed intuitiva delle cose da fare. Sono personali e nessun&#8217;altro potrà vederle.

**Report**  
Sono disponibili report settimanali, report mensili e report di progetto. Viene mostrato anche chi ha lavorato su un progetto e per quante ore. 

<p align="center">
  <img src="/wp-content/uploads/2014/10/projectreport.png" alt="projectreport" />
</p>

**Profilo utente**  
Ogni utente avrà un proprio profilo utente

**Ruoli**  
Quattro livelli: User, Leader, Manager e Admin.

**Gestione utenti**  
La gestione utenti è facile ed intuiva. 

## Installazione

Per installare su una macchina virtuale o un VPS l&#8217;applicazione dobbiamo controllare che le dipendenze richieste dalla piattaforma siano soddisfatte. Per una macchina che abbia installato Ubuntu 14.04 LTS digitiamo dalla console dei comandi : 

<pre class="lang:sh decode:true " >sudo apt-get install apache2 php5 mcrypt php5-mcrypt php5-curl php5-gd mysql-server mysql-client php5-mysql</pre>

In questo modo installeremo un ambiente LAMP adatto per 92five. 

Abilitiamo mod_rewrite e l&#8217;estensione mcrypt di PHP:

<pre class="lang:sh decode:true " >sudo a2enmod rewrite
sudo php5enmod mcrypt</pre>

Riavviamo apache per applicare le modifiche:

<pre class="lang:default decode:true " >sudo service apache2 restart</pre>

<div class="su-box su-box-style-default" style="border-color:#292929;">
  <div class="su-box-title" style="background-color:#333333;color:#FFFFFF;">
    Attenzione
  </div>
  
  <div class="su-box-content su-clearfix">
    Il VirtualHost di default di apache inibisce che siano sovrascritte le regole tramite file .htaccess, per cui per far funzionare correttamente l&#8217;applicazione bisogna modificare il file /etc/apache2/sites-available/000-default.conf e di sovrascriverlo con il template proposto</p> 
    
    <pre class="lang:default decode:true " >&lt;VirtualHost *:80&gt;
	ServerAdmin webmaster@localhost
#	ServerAlias yourdomainhere
	DocumentRoot /var/www/html
	&lt;Directory /&gt;
		Options FollowSymLinks
		AllowOverride None
	&lt;/Directory&gt;
	&lt;Directory /var/www/html&gt;
		Options Indexes FollowSymLinks MultiViews
		AllowOverride all
		Order allow,deny
		allow from all
	&lt;/Directory&gt;

	ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
	&lt;Directory "/usr/lib/cgi-bin"&gt;
		AllowOverride None
		Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
		Order allow,deny
		Allow from all
	&lt;/Directory&gt;

	ErrorLog ${APACHE_LOG_DIR}/error.log

	# Possible values include: debug, info, notice, warn, error, crit,
	# alert, emerg.
	LogLevel warn

	CustomLog ${APACHE_LOG_DIR}/access.log combined
&lt;/VirtualHost&gt;</pre>
    
    <p>
      Ricaricando la configurazione con:
    </p>
    
    <pre class="lang:sh decode:true " >sudo service apache2 reload</pre>
    
    <p>
      </div></div> 
      
      <p>
        Spostiamoci nella cartella /var/www/html (è possibile cambiare la directory di root di apache tramite Virtual Host):
      </p>
      
      <pre class="lang:sh decode:true " >cd /var/www/html</pre>
      
      <p>
        E scarichiamo l&#8217;ultima versione dell&#8217;applicazione:
      </p>
      
      <pre class="lang:sh decode:true " >sudo wget https://github.com/chintanbanugaria/92five/archive/master.zip</pre>
      
      <p>
        Estraiamo il contenuto dell&#8217;archivio tramite il comando unzip:
      </p>
      
      <pre class="lang:sh decode:true " >sudo unzip master.zip</pre>
      
      <p>
        Assegniamo i permessi ai file estratti tramite chown:
      </p>
      
      <pre class="lang:sh decode:true " >sudo chown -R www-data:www-data 92five-master/</pre>
      
      <div class="su-box su-box-style-default" style="border-color:#292929;">
        <div class="su-box-title" style="background-color:#333333;color:#FFFFFF;">
          Attenzione
        </div>
        
        <div class="su-box-content su-clearfix">
          Ovviamente se si è estratto l&#8217;archivio in un percorso diverso, bisogna aggiornare il parametro del comando di conseguenza.
        </div>
      </div>
      
      <p>
        Ora possiamo procedere con l&#8217;installazione tramite browser, apriamolo dunque e digitiamo l&#8217;indirizzo del server su install/:
      </p><p align="center"
      
      <img src="/wp-content/uploads/2014/08/Screenshot-19082014-200231.png" alt="Installazione 92five" /> 
      
      <p>
        Se non sono mostrati errori clicchiamo su &#8220;Let&#8217;s Begin&#8221;.
      </p>
      
      <p>
        Il wizard di installazione chiederà i dettagli per la creazione del database, apriamo la console di MySQL:
      </p>
      
      <pre class="lang:sh decode:true " >sudo mysql -u root -p</pre>
      
      <p>
        E digitiamo la seguente query:
      </p>
      
      <pre class="lang:mysql decode:true " >CREATE DATABASE 92five;</pre>
      
      <p>
        Ora possiamo compilare i campi mostrati in figura:
      </p>
      
      <p>
        <img src="/wp-content/uploads/2014/08/Screenshot-19082014-200932.png" alt="92five - configurazione database" />
      </p>
      
      <p>
        Selezioniamo la timezone relativo al posto in cui viviamo:
      </p>
      
      <p>
        <img src="/wp-content/uploads/2014/08/Screenshot-19082014-201036.png" alt="92five - timezone" />
      </p>
      
      <p>
        E creiamo l&#8217;account di amministrazione:
      </p>
      
      <p>
        <img src="/wp-content/uploads/2014/08/Screenshot-19082014-201249.png" alt="92five - account amministrazione" />
      </p>
      
      <p>
        Completando l&#8217;installazione:
      </p>
      
      <p>
        <img src="/wp-content/uploads/2014/08/Screenshot-19082014-201450.png" alt="92five - installazione completata" />
      </p>
      
      <p>
        Visitando l&#8217;url di installazione è possibile utilizzare l&#8217;applicazione.
      </p>