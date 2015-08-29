---
title: 'Seafile &#8211; Cloud Storage Open Source e Self Hosted'
author: unnikked
layout: post
permalink: /seafile-cloud-storage-open-source/
bwps_enable_ssl:
  - 
dsq_thread_id:
  - 3787437965
categories:
  - Internet
  - SysAdmin
  - Ubuntu
tags:
  - Open Source
  - Self Hosted
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Seafile è un sistema di archiviazione cloud <a href="https://github.com/haiwen/seafile" title="Seafile su github" target="_blank">open source</a> con le caratteristiche di protezione privacy e supporto per gruppi di lavoro. 

Le collezioni di file sono chiamate librerie e ogni libreria può essere sincronizzata separatamente. Una libreria può anche essere crittografata attraverso una password scelta dall&#8217;utente. 

Seafile permette anche agli utenti di creare gruppi e facilita la condivisione dei file tra i gruppi stessi. 

## Caratteristiche di Seafile

Seafile dispone delle seguenti caratteristiche:

### Sincronizzazione file

  * Sincronizzazione selettiva dei file delle librerie. Ogni libreria può essere sincronizzata separatamente.
  * Gestione della correttezza dei conflitti dei file basata sulla storia invece che sul timestamp.
  * Trasferimento solo per i file che non sono nel server, i trasferimenti incompleti posso essere ripresi. 
  * Sincronizzazione con due o più server.
  * Sincronizzazione con le cartelle esistenti. 
  * Sincronizzazione delle sottocartelle.

### File sharing e collaborazione

  * Condivisione dei file tra utenti o gruppi.
  * Condivisione delle sottocartelle tra utenti o gruppi.
  * Download tramite link protetti da password.
  * Link per upload.
  * Controllo della versione tramite numeri di revisione configurabili.
  * Ripristino dei file cancellati dal cestino, storia o istantanee. 

### Protezione privacy

  * Crittografia di librerie tramite password scelta dall&#8217;utente.
  * Crittografia lato client quando viene usato la sincronizzazione desktop.

## Meccanismo interno

Il modello di controllo di versione di Seafile è basato su Git, ma è semplificato per la sincronizzazione automatica per cui non richiede che Git sia installato. 

Ogni libreria di Seafile si comporta come una repository di Git. Ha la sua storia unica che consiste in una lista di commit. Un commit punta alla radice dell&#8217;istantanea del file system.

Una istantanea consiste in cartelle e file. I file sono divisi ulteriormente in blocchi per rendere il trasferimento dei file più efficiente e ottimizzare l&#8217;uso del disco. 

Le differenze da Git sono:

  * Automatic synchronization.Sincronizzazione automatica.
  * I client non salvano la storia del file, così evitano l&#8217;overhead di salvare più dati. Git non è efficiente per il salvataggio di grandi file come immagini. 
  * I file sono divisi ulteriormente in blocchi per rendere il trasferimento dei file più efficiente e ottimizzare l&#8217;uso del disco.
  * Il trasferimento dei file può essere messo in pausa e ripreso. 
  * Supporto per diversi tipi di archiviazione su lato server.
  * Supporto per il download da più blocchi server per accelerare il trasferimento dei file.
  * Risoluzione dei conflitti più user-friendly (Seafile aggiunge il nome utente come suffisso per i file in conflitto).
  * Gestione progressiva dei file durante la modifica mentre l&#8217;auto-sincronizzazione è attiva. Git non è stato progettato per funzionare in questi casi.

![seafile-dashboard][1]

## Installazione di Seafile

Prima di procedere con il download del pacchetto server è necessario installare alcune dipendenze:

<pre class="lang:default decode:true " >sudo apt-get install python-setuptools python-simplejson python-imaging sqlite3
 </pre>

Una volta installate le dipendenze scarichiamo il pacchetto del server, per installare le ultime versioni guarda <a href="http://seafile.com/en/download/#server" title="Seafile download server" target="_blank">qui</a>: 

<pre class="lang:default decode:true " >wget https://bitbucket.org/haiwen/seafile/downloads/seafile-server_4.1.2_x86-64.tar.gz</pre>

Tramite lo strumento `tar` estraiamo il pacchetto appena scaricato: 

<pre class="lang:default decode:true " >tar xvf seafile-server_4.1.2_x86-64.tar.gz</pre>

Entriamo nella directory estratta: 

<pre class="lang:default decode:true " >cd seafile-server-4.1.2/</pre>

E lanciamo lo script di installazione: 

<pre class="lang:default decode:true " >./setup-seafile.sh </pre>

<p align="center">
  <img src="/wp-content/uploads/2015/04/seafile-setup.png" alt="seafile-setup" />
</p>

Dopo alcuni controlli sulle dipendenze ci verrà chiesto di dare un nome al server. 

<p align="center">
  <img src="/wp-content/uploads/2015/04/seafile-server-name.png" alt="seafile-server-name" />
</p>

Successivamente bisogna specificare a quale indirizzo IP o nome dominio il server fa riferimento: 

<pre class="lang:default decode:true " >What is the ip or domain of this server?
For example, www.mycompany.com, or, 192.168.1.101

[This server's ip or domain]:seafile.local</pre>

Chiederà di specificare le porte per il server ccnet. 

<pre class="lang:sh decode:true " >What tcp port do you want to use for ccnet server?
10001 is the recommended port.
[default: 10001 ]</pre>

Una directory per il salvataggio dei dati. 

<pre class="lang:sh decode:true " >Where do you want to put your seafile data? 
Note: Please use a volume with enough free space.
[default: /home/vagrant/seafile-data ] </pre>

La porta TCP presso il quale il server si metterà in ascolto.

<pre class="lang:sh decode:true " >What tcp port do you want to use for seafile server?
12001 is the recommended port.
[default: 12001 ] </pre>

La porta TCP presso il quale il web server si metterà in ascolto.

<pre class="lang:sh decode:true " >What tcp port do you want to use for seafile httpserver?
8082 is the recommended port.
[default: 8082 ] </pre>

Mostrerà un riepilogo dei dati inseriti fin ora. 

<p align="center">
  <img src="/wp-content/uploads/2015/04/seafile-configuration.png" alt="seafile-configuration" />
</p>

L&#8217;installazione procederà fornendo alcune informazioni finali generate durante l&#8217;installazione. 

Per avviare il server bisogna eseguire dalla cartella principale di progetto: 

<pre class="lang:sh decode:true " >./seafile.sh { start | stop | restart }</pre>

Per avviare l&#8217;interfaccia web invece: 

<pre class="lang:sh decode:true " >./seahub.sh  { start &lt;port&gt; | stop | restart &lt;port&gt; }</pre>

Al primo avvio di `seahub` verranno chieste alcune informazioni per la configurazione di un account amministratore per l&#8217;interfaccia web. 

<p align="center">
  <img src="/wp-content/uploads/2015/04/seafile-seahub-admin.png" alt="seafile-seahub-admin" />
</p>

Una volta avviato `seafile` e `seahub` è possibile collegarsi all&#8217;interfaccia ed iniziare ad usare l&#8217;applicazione. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: /wp-content/uploads/2015/04/seafile-dashboard.png