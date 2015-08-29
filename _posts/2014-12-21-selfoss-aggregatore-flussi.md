---
title: 'Selfoss &#8211; aggregatore di flussi per tenersi aggiornati'
author: unnikked
layout: post
permalink: /selfoss-aggregatore-flussi/
dsq_thread_id:
  - 3346387292
categories:
  - Internet
  - SysAdmin
tags:
  - Open Source
  - Self Hosted
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


In questo articolo tratterò finalmente uno dei miei progetti preferiti <a href="https://github.com/SSilence/selfoss" title="GitHub - SSilence/selfoss" target="_blank">open source</a> self hosted: <a href="http://selfoss.aditu.de/" title="Selfoss" target="_blank">selfoss</a>. 

Selfoss è un aggregatore di flussi (stream) di vario genere: feed rss, timeline di twitter e facebook, tumblr, reddit ecc. 

E&#8217; ormai da quasi un anno che uso questa piattaforma e finalmente ho deciso di recensirla. 

Le caratteristiche principali di questa applicazione sono: 

  * Accesso tramite interfaccia grafica dal web
  * E&#8217; un aggregatore universale
  * Open source e gratuito
  * Facilmente estensibile per far riconoscere nuove tipologie di flussi
  * Supporto mobile: Android, iOS etc
  * Applicazione scritta in PHP che pesa poco: circa 2MB
  * Supporta MySQL, SQLite e Postgre SQL
  * Importazione di contenuti esterni tramite il formato OPML
  * Api REST per l&#8217;integrazione con servizi esterni

## Interfaccia grafica

Selfoss dispone di una accattivante interfaccia grafica dal facile utilizzo, si adatta automaticamente in base alle dimensioni dello schermo.

#### Desktop

<p align="center">
  <img src="/wp-content/uploads/2014/12/Schermata-da-2014-12-21-132946.png" alt="Selfoss - Desktop" />
</p>

#### Tablet

<p align="center">
  <img src="/wp-content/uploads/2014/12/Schermata-da-2014-12-21-133029.png" alt="Selfoss - Tablet" />
</p>

#### Smartphone

<p align="center">
  <img src="/wp-content/uploads/2014/12/Screenshot_2014-12-21-13-31-32.png" alt="Selfoss - Smartphone" />
</p>

L&#8217;applicazione mostra tutti i flussi raccolti in tre macro categorie: 

  * **Non Lette** &#8211; qui selfoss mostra tutte le nuovi voci presenti nel database
  * **Recenti** &#8211; qui selfoss mostra tutte le voci lette di recente
  * **Contrassegnate** &#8211; qui selfoss mostra tutte le voci contrassegnate

Sono presenti due sezioni con cui è possibile filtrare il flusso e leggere le voci assegnati ad un specifico tag o flusso: 

  * **Parole Chiave** &#8211; da qui è possibile filtrare il flusso principale tramite le parole chiavi (tag) assegnate ai flussi
  * **Fonti** &#8211; da qui è possibile scegliere il flusso specifico da mostrare
### Lettura di una voce

Cliccando su una voce mostrata comparirà il relativo contenuto in linea con l&#8217;interfaccia grafica. 

<p align="center">
  <img src="/wp-content/uploads/2014/12/Schermata-da-2014-12-21-143537.png" alt="Selfoss - lettura voce" />
</p>

  * **Contassegna** &#8211; permette di salvare permanentemente un articolo letto
  * **Segna come letta** &#8211; permette di segnare l&#8217;elemento come letto
  * **Apri** &#8211; apre il link originario del contenuto
  * **Interazioni social** &#8211; permette di condividere i contenuti tramite i canali social

#### Scorciatoie da tastiera

E&#8217; possibile interagire con l&#8217;applicazione tramite shortcut per rendere più produttivo la visione delle voci. 

<div class="su-table">
  <table>
    <tr>
      <th>
        Scorciatoria
      </th>
      
      <th>
        Funzionalità
      </th>
    </tr>
    
    <tr>
      <td>
        <code>space</code>
      </td>
      
      <td>
        seleziona ed apre la prossima voce
      </td>
    </tr>
    
    <tr>
      <td>
        <code>j</code>
      </td>
      
      <td>
        seleziona ed apre la prossima voce
      </td>
    </tr>
    
    <tr>
      <td>
        <code>n</code>
      </td>
      
      <td>
        selezione la prossima voce
      </td>
    </tr>
    
    <tr>
      <td>
        <code>→</code>
      </td>
      
      <td>
        selezione la prossima voce (e la apre quando la voce corrente è aperta)
      </td>
    </tr>
    
    <tr>
      <td>
        <code>shift + space</code>
      </td>
      
      <td>
        seleziona ed apre la precedente voce
      </td>
    </tr>
    
    <tr>
      <td>
        <code>k</code>
      </td>
      
      <td>
        seleziona ed apre la precedente voce
      </td>
    </tr>
    
    <tr>
      <td>
        <code>p</code>
      </td>
      
      <td>
        selezione la precedente voce
      </td>
    </tr>
    
    <tr>
      <td>
        <code>←</code>
      </td>
      
      <td>
        selezione la precedente voce
      </td>
    </tr>
    
    <tr>
      <td>
        <code>s</code>
      </td>
      
      <td>
        contrassegna o toglie il contrassegno alla voce selezionata
      </td>
    </tr>
    
    <tr>
      <td>
        <code>m</code>
      </td>
      
      <td>
        contrassegna la voce selezionata come letta/non letta
      </td>
    </tr>
    
    <tr>
      <td>
        <code>t</code>
      </td>
      
      <td>
        ignora la voce corrente (contrassegna come letta e apre la prossima)
      </td>
    </tr>
    
    <tr>
      <td>
        <code>shift + t</code>
      </td>
      
      <td>
        ignora la voce corrente (contrassegna come letta e apre la precedente)
      </td>
    </tr>
    
    <tr>
      <td>
        <code>v</code>
      </td>
      
      <td>
        apre il collegamento della voce corrente in un nuovo tab/finestra del browser
      </td>
    </tr>
    
    <tr>
      <td>
        <code>Shift + v</code>
      </td>
      
      <td>
        apre il collegamento della voce corrente in un nuovo tab/finestra del browser e la contrassegna come letta
      </td>
    </tr>
    
    <tr>
      <td>
        <code>Ctrl + m</code>
      </td>
      
      <td>
        tutte le voci come lette
      </td>
    </tr>
    
    <tr>
      <td>
        <code>r</code>
      </td>
      
      <td>
        ricarica la lista
      </td>
    </tr>
    
    <tr>
      <td>
        <code>o</code>
      </td>
      
      <td>
        apre / chiude la voce corrente
      </td>
    </tr>
    
    <tr>
      <td>
        <code>shift + o</code>
      </td>
      
      <td>
        chiude tutte le voci aperte
      </td>
    </tr>
    
    <tr>
      <td>
        <code>shift + n</code>
      </td>
      
      <td>
        apre la sezione Recenti
      </td>
    </tr>
    
    <tr>
      <td>
        <code>shift + u</code>
      </td>
      
      <td>
        apre la sezione Non lette
      </td>
    </tr>
    
    <tr>
      <td>
        <code>shift + s</code>
      </td>
      
      <td>
        apre la sezione Contrassegnate
      </td>
    </tr>
  </table>
</div>

### Aggiunta di un nuovo flusso

Tramite l&#8217;icona a forma di nuvola è possibile gestire ed inserire o importare flussi. 

<p align="center">
  <img src="/wp-content/uploads/2014/12/Schermata-da-2014-12-21-145850.png" alt="Selfoss - aggiunta fonte" />
</p>

E&#8217; possibile aggiungere diverse fonti come mostrato in figura, ogni fonte avrà dei parametri di configurazioni specifici. 

<p align="center">
  <img src="https://unnikked.tk/wp-content/uploads/2014/12/Schermata-da-2014-12-21-150116.png" alt="Selfoss - spouts" />
</p>

Il campo **Titolo** serve per specificare il titolo della fonte e il campo **Parole chiave** serve per associate tale flusso ad una etichetta specifica. 

Tramite il sistema di plugin è possibile aggiungere nuovi controllori (spouts) per gestire nuovi flussi di dati, tale caratteristica è, secondo me, ciò che rende selfoss molto versatile rispetto ai tradizionali lettori feed RSS. 

## Installazione

### Requisiti

Innanzitutto assicuriamoci di disporre di un <a href="/apache-php-mysql/" title="Come configurare un ambiente LAMP" target="_blank">ambiente LAMP</a> sul server evetualmente associarlo ad un <a href="/guida-ai-virtual-host-di-apache/" title="Guida ai Virtual Host di Apache" target="_blank">virtual host</a> specifico e assicuriamoci che le dipendenze dell&#8217;applicazione siano soddisfatte:

  * PHP 5.3+
  * MySQL, PostgreSLQ o SQLite
  * Apache, Nginx o lighthttpd

Se viene utilizzato Apache assicuriamoci che `mod_rewrite` e `mod_headers` siano abilitate. 

### Download pacchetto e installazione

E possibile installare le ultime modifiche apportate all&#8217;applicazione clonando la <a href="https://github.com/SSilence/selfoss" title="Github - SSilence/selfoss" target="_blank">repository</a> oppure scaricando l&#8217;<a href="https://github.com/SSilence/selfoss/releases" title="Github - SSilence/selfoss/releases" target="_blank">ultima versione</a> disponibile. 

Dopo aver scaricato o clonato la repository sul server assicuriamoci che le cartelle ata/cache, `data/favicons`, `data/logs`, `data/thumbnails`, `data/sqlite` e `public/` abbiano i permessi in scrittura. 

Se installato su un VPS è sufficiente ripristinare la proprietà dell&#8217;utente www-data: 

<pre class="lang:sh decode:true " >sudo chown -R www-data:www-data /percorso/selfoss</pre>

E impostiamo i permessi su 755: 

<pre class="lang:sh decode:true " >sudo chmod -R 755 /percorso/selfoss</pre>

Inseriamo ora i dettagli del database nel file config.ini (se non si vuole usare MySQL non è necessario specificare alcun database, il sistema utilizzerà di default SQLite, bisogna averlo installato sul server). 

Il database in ogni caso verrà creato automaticamente. 

E&#8217; consigliato creare un cronjob che faccia eseguire periodicamente il file update.php per permettere a selfoss di catturare nuove voci dai flussi indicati. 

E&#8217; ora possibile aprire l&#8217;applicazione all&#8217;indirizzo configurato. 

### File di configurazione

La configurazione è opzionale. Qualsiasi modifica al file config.ini sovrascrive le impostazioni in defaults.ini. Per personalizzare le impostazioni è necessario seguire queste istruzioni: 

  * Copia defaults.ini su config.ini.
  * Modifica config.ini ed elimina i parametri che non si vogliono sovrascrivere
  * Non eliminare la linea [globals] 

Ecco un esempio di configurazione del file config.ini che fornisce la protezione tramite password (di default l&#8217;accesso è pubblico!)

<pre class="lang:default decode:true " >[globals]
username=secretagent
password=5d95c032abce4865d49ee225d28a8a939ea39a924a158f0056ebb1880d9
salt=1291929@9394$95%939201098*61234324(@#$(!*@#981923123</pre>

Invece ecco un esempio per utilizzare MySQL come database. 

<pre class="lang:default decode:true " >[globals]
db_type=mysql
db_host=localhost
db_database=selfoss
db_username=secretagent
db_password=life0fD4ng3r
db_port=3306</pre>

Ecco la tabella dei parametri che è possibile personalizzare: 

<div class="su-table">
  <table>
    <tr>
      <th>
        Parametro
      </th>
      
      <th>
        Funzionalità
      </th>
    </tr>
    
    <tr>
      <td>
        <code>db_type</code>
      </td>
      
      <td>
        di database (sqlite, mysql o pgsql)
      </td>
    </tr>
    
    <tr>
      <td>
        <code>db_file</code>
      </td>
      
      <td>
        sqlite file di database
      </td>
    </tr>
    
    <tr>
      <td>
        <code>db_host</code>
      </td>
      
      <td>
        database hostname
      </td>
    </tr>
    
    <tr>
      <td>
        <code>db_database</code>
      </td>
      
      <td>
        nome del database
      </td>
    </tr>
    
    <tr>
      <td>
        <code>db_username</code>
      </td>
      
      <td>
        database username
      </td>
    </tr>
    
    <tr>
      <td>
        <code>db_password</code>
      </td>
      
      <td>
        database password
      </td>
    </tr>
    
    <tr>
      <td>
        <code>db_prefix</code>
      </td>
      
      <td>
        prefisso tabella per MySQL/SQLite
      </td>
    </tr>
    
    <tr>
      <td>
        <code>db_port</code>
      </td>
      
      <td>
        porta per la connessione al database (3306 per mysql, 5432 per PostgreSQL)
      </td>
    </tr>
    
    <tr>
      <td>
        <code>logger_level</code>
      </td>
      
      <td>
        livello di log; il file di log si trova <code>/data/logs/default.log</code> sono disponibili i seguenti livelli: DEBUG, INFO, NOTICE, WARNING, ERROR, NONE usalo per la risoluzione di problemi durante l’aggiornamenti dei feed (ma presta attenzione che il file di log potrebbe diventare molto grande)
      </td>
    </tr>
    
    <tr>
      <td>
        <code>items_perpage</code>
      </td>
      
      <td>
        numero di voci per pagina nel flusso principale
      </td>
    </tr>
    
    <tr>
      <td>
        <code>items_lifetime</code>
      </td>
      
      <td>
        i giorni per la quale una voce è mantenuta del database (le voci contrassegnate non verranno eliminate)
      </td>
    </tr>
    
    <tr>
      <td>
        <code>base_url</code>
      </td>
      
      <td>
        indirizzo di base della pagina di selfoss; usa questa opzione se usi un proxy ssl poiché cambia la variabile globale <code>$_SERVER</code>
      </td>
    </tr>
    
    <tr>
      <td>
        <code>username</code>
      </td>
      
      <td>
        username per accesso opzionale. Imposta un username e una password per abilitare il login.
      </td>
    </tr>
    
    <tr>
      <td>
        <code>password</code>
      </td>
      
      <td>
        hash della password per il login opzionale. Puoi generare un hash per la password usando questa pagina dell’installazione di selfoss <a href="http://your_selfoss_url.com/password">http://your_selfoss_url.com/password</a>
      </td>
    </tr>
    
    <tr>
      <td>
        <code>salt</code>
      </td>
      
      <td>
        salt per l’hashing della password (vedi Wikipedia)
      </td>
    </tr>
    
    <tr>
      <td>
        <code>public</code>
      </td>
      
      <td>
        se usi l’accesso (username e password sono impostati), puoi permettere agli ospiti di vedere il flusso principale. Inserisci <code>1</code> per abilitare questa modalità di scrittura protetta
      </td>
    </tr>
    
    <tr>
      <td>
        <code>rss_title</code>
      </td>
      
      <td>
        titolo del feed rss generato.
      </td>
    </tr>
    
    <tr>
      <td>
        <code>rss_max_items</code>
      </td>
      
      <td>
        numero massimo di elementi nel feed rss generato
      </td>
    </tr>
    
    <tr>
      <td>
        <code>rss_mark_as_read</code>
      </td>
      
      <td>
        impostalo ad <code>1</code> per contrassegnare automaticamente le voci come lette dopo averle ottenute tramite rss
      </td>
    </tr>
    
    <tr>
      <td>
        <code>homepage</code>
      </td>
      
      <td>
        imposta il flusso preferito in homepage tra newest, unread e starred. Default = newest.
      </td>
    </tr>
    
    <tr>
      <td>
        <code>auto_mark_as_read</code>
      </td>
      
      <td>
        imposta a <code>1</code> per contrassegnare automaticamente le voci come lette dopo averle aperte/lette.
      </td>
    </tr>
    
    <tr>
      <td>
        <code>auto_stream_more</code>
      </td>
      
      <td>
        imposta a <code></code> per disabilitare il caricamento automatico delle altre voci mentre si scorre in basso la pagina. Con <code>1</code> è richiesto un click sul pulsante.
      </td>
    </tr>
    
    <tr>
      <td>
        <code>language</code>
      </td>
      
      <td>
        lascia a <code></code> o vuoto per scoprire automaticamente la lingua (del browser) o imposta a “de” per il tedesco, “en” per l’inglese, “fr” per il francese, “cs” per il ceco, “nl” per l’olandese, “ru” per il russo, “tr” per il turco, “lv” per il lituato e “cn” per il cinese semplificato
      </td>
    </tr>
    
    <tr>
      <td>
        <code>anonymizer</code>
      </td>
      
      <td>
        imposta qui il servizio di anonimazione url. es: anonymizer=<a href="http://anonym.to/">http://anonym.to/</a>?
      </td>
    </tr>
    
    <tr>
      <td>
        <code>use_system_font</code>
      </td>
      
      <td>
        imposta a <code>1</code> se si hanno problemi con i caratteri spaciali, verrà usato Arial invece di Open Sans.
      </td>
    </tr>
    
    <tr>
      <td>
        <code>readability</code>
      </td>
      
      <td>
        chiave api di default per tutti i feed catturati dallo spout readability. Puoi anche inserire la chiave api di readability nei parametri dello spout per ogni singolo feed.
      </td>
    </tr>
    
    <tr>
      <td>
        <code>allow_public_update_access</code>
      </td>
      
      <td>
        imposta a <code>1</code> per permettere l’accesso pubblico a <code>/update</code> (tutti possono accedere e avviare il processo di aggiornamento)
      </td>
    </tr>
    
    <tr>
      <td>
        <code>share</code>
      </td>
      
      <td>
        definisce quali pulsanti di condivisone sono visibili sotto ogni voce. Default è <code>gtfprde</code> (g = google, f = facebook, t = twitter, p = pocket, r = readability, d = delicious, w = wallabag, e = email). Se vuoi abilitare solo facebook e twitter usa <code>share=ft</code>
      </td>
    </tr>
    
    <tr>
      <td>
        <code>wallabag</code>
      </td>
      
      <td>
        url a wallabag
      </td>
    </tr>
    
    <tr>
      <td>
        <code>unread_order</code>
      </td>
      
      <td>
        imposta a <code>asc</code> per leggere le voci dalla più vecchia alla più recente, lasciala vuota per leggere dalla più recente alla più vecchia
      </td>
    </tr>
    
    <tr>
      <td>
        <code>load_images_on_mobile</code>
      </td>
      
      <td>
        imposta a <code>1</code> per permettere il caricamento dinamico delle immagini sui dispositivi mobili
      </td>
    </tr>
  </table>
</div>

## Aggiornamento

Per aggiornare una installazione di selfoss basta seguire questi passaggi

  * Effettua un backup del database e della cartella `"data"`.
  * IMPORTANTE: non eliminare la cartella &#8220;data&#8221;. Elimina tutti i vecchi file e cartelle escludendo solo la cartella &#8220;data&#8221;.<liCarica tutti i file e le cartelle esclusa la cartella "data" (IMPORTANTE: carica anche il file invisibile 
`.htaccess`)</li> 

  * Rinomina la cartella `/data/icons` in `/data/favicons`
  * Cancella i file `/public/all.css` e `/public/all.js`
  * Cancella la cache del browser

## Scrivere le proprie estensioni

Selfoss mette a disposizione un mini framework per l&#8217;implementazione di nuovi plugin, chiamati spouts, per l&#8217;integrazione di nuovi flussi di informazioni (email, file di log ecc). 

L&#8217;architettura del sistema dei plugin è descritta schematicamente dal seguente diagramma UML: 

<p align="center">
  <img src="/wp-content/uploads/2014/12/uml.png" alt="Selfoss - uml" />
</p>

Bisogna creare una classe php e inserirla nella cartella `/spouts/il_tuo_spout/tuo_spout.php`. 

### Variabili interne

Le variabili `$name` e `$description` contengono il nome e la descrizione dello spout. La variabile `$params` contiene la definizione dei parametri dei campi di ingresso mostrati all&#8217;utente che deve compilare. Ecco un esempio per un ipotetico spout per leggere le email: 

<pre class="lang:php decode:true " >&lt;?PHP
        namespace spouts\mail;
        class imap extends \spouts\spout {
            public $name = 'Email';
            public $description = 'email imap account as source';
            public $params = array(
                    "email" =&gt; array(
                    "title"      =&gt; "Email",
                    "type"       =&gt; "text",
                    "default"    =&gt; "",
                    "required"   =&gt; true,
                    "validation" =&gt; array("email")
                ),
                "password" =&gt; array(
                    "title"      =&gt; "Password",
                    "type"       =&gt; "password",
                    "default"    =&gt; "",
                    "required"   =&gt; true,
                    "validation" =&gt; array("notempty")
                ),
                "host" =&gt; array(
                    "title"      =&gt; "URL",
                    "type"       =&gt; "text",
                    "default"    =&gt; "",
                    "required"   =&gt; true,
                    "validation" =&gt; array("notempty")
                )
            );
        }</pre>

### Metodi

La classe deve implementare tre cose: 

  * La funzione `load($params)` che sarà eseguita da selfoss quando i contenuti saranno aggiornati (quando viene eseguito `update.php`). La funzione load ha un solo parametro che l&#8217;utente ha configurato. Questa funzione contiene il codice sorgente per catturare i dati (es. caricare le email dall&#8217;account IMAP)
  * Bisogna implementare l&#8217;interfaccia `Iterable`. Selfoss la userà in seguito per iterare su ogni singola voce della sorgente (es. le email scaricate dalla funzione `load`)
  * Selfoss itera su tutte le voci usando l&#8217;interfaccia `Iterable`. Selfoss riceverà tutte le informazioni sulle voci usando le funzioni definite dalla classe astratta `\spouts\spout` (es. riceverà il soggetto della email eseguendo il metodo `getTitle()`)

Ecco un esempio di <a href="https://github.com/SSilence/selfoss/blob/master/spouts%2Ftwitter%2Flisttimeline.php" title="Spout - Twitter List Timeline" target="_blank">spout</a> che ho implementato: permette di leggere tutti i tweet presenti in una lista di Twitter, per semplicità ho ereditato l&#8217;implementazione dello spout `usertimeline` e ho modificato solo le funzionalità necessarie. 

<pre class="lang:php decode:true " >&lt;?php

namespace spouts\twitter;

class listtimeline extends \spouts\twitter\usertimeline {
	public function __construct() {
		$this-&gt;name = 'Twitter - List timeline';
		$this-&gt;description = 'The timeline of a given list';
		$this-&gt;params = array(
	        "consumer_key" =&gt; array(
	            "title"      =&gt; "Consumer Key",
	            "type"       =&gt; "text",
	            "default"    =&gt; "",
	            "required"   =&gt; true,
	            "validation" =&gt; array("notempty")
	        ),
	        "consumer_secret" =&gt; array(
	            "title"      =&gt; "Consumer Secret",
	            "type"       =&gt; "password",
	            "default"    =&gt; "",
	            "required"   =&gt; true,
	            "validation" =&gt; array("notempty")
	        ),
	        "slug" =&gt; array(
	            "title"      =&gt; "List Slug",
	            "type"       =&gt; "text",
	            "default"    =&gt; "",
	            "required"   =&gt; true,
	            "validation" =&gt; array("notempty")
	        ),
	        "owner_screen_name" =&gt; array(
	            "title"      =&gt; "Username",
	            "type"       =&gt; "text",
	            "default"    =&gt; "",
	            "required"   =&gt; true,
	            "validation" =&gt; array("notempty")
	        )
	    );
	}

    public function load($params) {
        $twitter = new \TwitterOAuth($params['consumer_key'], $params['consumer_secret']);
        $timeline = $twitter-&gt;get('lists/statuses', array('slug' =&gt; $params['slug'], 'owner_screen_name' =&gt; $params['owner_screen_name'], 'include_rts' =&gt; 1, 'count' =&gt; 50));
        if(isset($timeline-&gt;error))
            throw new \exception($timeline-&gt;error);
        
        if(!is_array($timeline))
            throw new \exception('invalid twitter response');
        
        $this-&gt;items = $timeline;
        
        $this-&gt;htmlUrl = 'http://twitter.com/' . urlencode($params['owner_screen_name']);
    }

}</pre>

## Api Rest

Selfoss dispone anche di un insieme di API che segue la filosofia REST per poter permettere di accedere tramite applicazioni esterne alla piattaforma, <a href="https://github.com/SSilence/selfoss/wiki/Restful-API-for-Apps-or-any-other-external-access" title="Selfoss - API" target="_blank">qui</a> sono descritte tali API. 

## Client per smatphone

Sono inoltre disponibile le app per <a href="https://play.google.com/store/apps/details?id=fr.ydelouis.selfoss" title="Selfoss - Android Client" target="_blank">Android</a> e <a href="https://itunes.apple.com/us/app/cataracta/id817392033?mt=8&#038;ign-mpt=uo%3D4" title="Selfoss - iOS" target="_blank">iOS</a> per interagire con selfoss, ma personalmente preferisco usare la versione mobile accessibile via browser. 

### Ulteriori estensioni

Effettuando una <a href="https://github.com/search?utf8=%E2%9C%93&#038;q=selfoss" title="Selfoss su Github" target="_blank">ricerca</a> su github è possibile vedere come la comunità abbia creato diverse app che si integrano tramite l&#8217;utilizzo delle API alla propria istanza di selfoss. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>