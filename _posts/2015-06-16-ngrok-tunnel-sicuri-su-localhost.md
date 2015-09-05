---
title: 'ngrok &#8211; tunnel sicuri su localhost'
author: unnikked
layout: post
permalink: /ngrok-tunnel-sicuri-su-localhost/
dsq_thread_id:
  - 3852984912
categories:
  - Internet
  - SysAdmin
tags:
  - ngrok
  - Open Source
  - Self Hosted
---

ngrok è uno strumento che permette di aprire tunnel sulla rete per poter esporre un servizio installato sulla macchina locale su Internet. 

Durante lo sviluppo di una applicazione web o tcp è necessario poterla provare per testarne le funzionalità o mostrarla ad un potenziale cliente, grazie ad ngrok non è necessario configurare firewall, inoltrare porte o altro, con un semplice comando si apre un tunnel ed il servizio viene esposto automaticamente su Internet. 

<a href="https://ngrok.com" target="_blank">ngrok</a> è uno strumento <a href="https://github.com/inconshreveable/ngrok" target="_blank">open-source</a> e disponibile in versione hosted online, tuttavia avendo disponibile i sorgenti è possibile creare una propria istanza privata dell&#8217;applicazione. 

Sebbene sia disponibile la versione <a href="https://ngrok.com/docs" target="_blank">2.0</a> dell&#8217;applicazione tratterò la versione <a href="https://ngrok.com/docs/1" target="_blank">1.x</a> poiché completamente open source. 

## Caratteristiche di ngrok

  * E&#8217; possibile esporre qualsiasi servizio http dietro una rete NAT o firewall su Internet attraverso un sottodominio di ngrok.com
  * E&#8217; possibile esporre qualsiasi servizio tcp dietro una NAT o firewall su Internet su una porta casuale di ngrok.com
  * E&#8217; possibile ispezionare tutte le richieste/risposte http trasmesse sul tunnel
  * E&#8217; possibile rispondere a qualsiasi richiesta che è stata trasmessa sul tunnell

ngork è utile per condividere temporaneamente un sito web che sta girando solamente sulla macchina locale di sviluppo, mostrare un&#8217;app in un contest senza distribuirla, distribuire qualsiasi servizio che consuma webhooks (callback HTTP), debug e studio di qualsiasi servizio web attraverso l&#8217;ispezione del traffico HTTP e l&#8217;esecuzione di servizi di rete su macchine che risiedono dietro un firewall. 

## Installazione ed utilizzo

ngrok è <a href="https://ngrok.com/download/1" target="_blank">multipiattaforma</a>, è disponibile per Linux, Windows, Mac OS X, FreeBSD e architettura Linux/ARM. 

Una volta scaricato l&#8217;archivio `.zip` ed estratto, digitando: 

<pre class="lang:sh decode:true " >./ngrok -help</pre>

verranno mostrate i comandi che è possibile impartire all&#8217;applicazione. 

<p align="center">
  <img src="/wp-content/uploads/2015/05/ngork-help.png" alt="ngork-help" />
</p>

### Esporre un webserver locale su Internet

Assumendo che abbiamo installato Apache, poiché il webserver opera sulla porta 80 bisogna digitare:

<pre class="lang:sh decode:true " >./ngrok 80</pre>

<p align="center">
  <img src="/wp-content/uploads/2015/05/ngrok-apache.png" alt="ngrok-apache" />
</p>

Dall&#8217;immagine si può notare che è stato creato il tunnel correttamente, è possibile accederlo sia tramite http che https. 

### Introspezione del traffico

ngork cattura tutto il traffico HTTP che vi passa attraverso e fornisce una interfaccia web in tempo reale dove è possibile visionare le richieste in dettaglio. 

Una volta avviato ngork, aprendo `http://localhost:4040` è possibile accedere a tale interfaccia. 

Effettuando una richiesta al tunnel è possibile vedere le informazioni dettagliate riguardante la richiesta includendo il tempo, la durata, gli header, form e parametri della query e anche l&#8217;accesso ai byte grezzi inviati. 

<p align="center">
  <img src="/wp-content/uploads/2015/05/ngrok-instrospezione.png" alt="ngrok-instrospezione" />
</p>

### Controllo di sintassi XML/JSON

ngrok ha uno speciale supporto per i formati dati di interscambio più comuni in uso sul web. Qualsiasi dato in formato JSON o XML viene automaticamente formattato e controllato per errori di sintassi. 

<p align="center">
  <img src="/wp-content/uploads/2015/05/ngrok-syntax-checking.png" alt="ngrok-syntax-checking" />
</p>

### Rispondere alle richieste

ngrok permette di rispondere a qualsiasi richiesta http fatta attraverso un tunnel. 

<p align="center">
  <img src="/wp-content/uploads/2015/05/ngrok-replay.png" alt="ngrok-replay" />
</p>

### Protezione del tunnel tramite password

Di default i tunnel creati non richiedono l&#8217;autenticazione attraverso username o password. Ciò significa che qualsiasi utente che conosce o può intuire l&#8217;URL del tunnel può fare richieste. 

E&#8217; possibile mettere in sicurezza il tunnel attraverso una username e password usando l&#8217;opzione `-httpauth` durante la creazione del tunnel. 

Ciò forzerà l&#8217;utilizzo di credenziali di accesso ad ogni richiesta tramite l&#8217;autenticazione base HTTP. 

<pre class="lang:sh decode:true " >ngrok -httpauth="unnikked:password" 80</pre>

### Richiedere un sottodominio specifico

ngrok assegna un nome casuale in esadecimale come `https://3a4bfceb.ngrok.com` ai tunnel creati. 

E&#8217; possibile anche scegliere un nome personalizzato usando l&#8217;opzione `-subdomain`.

<pre class="lang:sh decode:true " >ngrok -subdomain=unnikked 80</pre>

### Inoltro di servizi TCP

ngrok permette anche di esporre un servizio tcp su Internet. Utilizzando questa caratteristica gli strumenti di debug e introspezione saranno più primitivi poiché ngrok non sa come trattare questi dati. 

<pre class="lang:sh decode:true " >ngrok -proto=tcp 22</pre>

### Inoltro di servizi non locali

ngork può essere usato anche per inoltrare traffico a servizi dietro una NAT o firewall anche quando questi servizi non sono sulla stessa macchina. 

<pre class="lang:sh decode:true " >ngrok 192.168.0.1:80</pre>

## Il file di configurazione di ngrok

Il file di configurazione di ngork è opzionale e formattato usando il formato YAML e permette di usare caratteristiche più avanzate come:

  1. Avvio di più tunnel insieme.
  2. Connessione ad un server personale ngork.
  3. La configurazione di parametri particolari.
  4. Il file di configurazione è caricato di default da `~/.ngrok` ma è possibile sovrascrivere il percorso tramite il parametro `-config` a linea di comando.

### Avvio di più tunnel insieme

Per avviare più di un tunnel è necessario configurare ognuno nel file di configurazione usando i gli appropriati parametri. 

I parametri dei tunnel richiedono un dizionario di nomi per la configurazione dei tunnel. 

Per esempio, definiamo la configurazione di tre tunnel diversi: il primo sarà un tunnel per un sito in sviluppo che viene raggiunto solo tramite https e dispone di autenticazione, il secondo servirà per l&#8217;accesso remoto alla macchina tramite la porta 22 e infine l&#8217;ultimo tunnel servirà per mostrare i progetti personali. 

<pre class="lang:yaml decode:true " >tunnels:
  client:
    auth: "user:password"
    proto:
      https: 8080
  ssh:
    proto: 
      tcp: 22
  projects.unnikked.tk:
    proto:
      http: 9090</pre>

I tre tunnel definiti possono essere avviati simultaneamente usando il comando `ngork start` seguiti dai nomi dei tunnel da avviare: 

<pre class="lang:sh decode:true " >ngrok start client ssh projects.unnikked.tk</pre>

### Configurazione del tunnel

Ogni tunnel configurato può specificare cinque parametri: `proto`, `subdomain`, `auth`, `hostname` e `remote_port`.

Ogni tunnel deve avere il parametro `proto` definito che è un dizionario di protocolli per l&#8217;indirizzo di inoltro locale. 

Il parametro `auth` è opzionale ed è usato per l&#8217;autenticazione dei tunnel `http`/`https`.

Il parametro remote_port è opzionale e server per legare sul server remoto la porta opzionale, è usato solo per i tunnel `tcp`.

ngork usa il nome del tunnel come `sottodominio` o `hostname` per il tunnel creato, ma può essere sovrascritto:

<pre class="lang:yaml decode:true " >tunnels:
  client:
    subdomain: "esempio"
    auth: "unnikked:password"
    proto:
      https: 8080</pre>

Una volta avviato il client inoltrerà `esempio.ngrok.com -> 127.0.0.1:8080`.

Per i tunnel TCP si può richiedere una specifica porta dal server tramite il parametro `remote_port`. Se non specificato, il server assegnerà una porta causale. 

<pre class="lang:sh decode:true " >tunnels:
  ssh:
    remote_port: 60123
    proto:
      tcp: 22</pre>

### Altre opzioni di configurazione

Il file di configurazione ngrok consente di impostare parametri poco comuni. 

Per esempio può essere specificato l&#8217;authtoken usato durante la validazione su ngrok.com usando il parametro `auth_token`. 

E&#8217; possibile cambiare l&#8217;indirizzo che ngrok usa per legare il servizio di introspezione utilizzando il parametro `inspect_addr`:

<pre class="lang:yaml decode:true " >auth_token: abc123
inspect_addr: "0.0.0.0:8888"
tunnels:
  ...</pre>

### Connessione ad un server ngork personale

ngrok supporta la connessione ad un server non ospitato da ngrok.com. Per prima cosa bisogna installare un server, vedremo in seguito come eseguire questa operazione. 

Una volta avviato il server `ngrokd` è necessario configurare due parametri per permettere ad ngork di connettersi in modo sicuro al server installato. 

Il parametro `server_addr` è l&#8217;indirizzo del server personale e `trust_host_root_certs` per rendere la connessione TLS fidata. 

<pre class="lang:yaml decode:true " >server_addr: "esempio.com:4443"
trust_host_root_certs: true
tunnels:
  ...</pre>

### Eseguire ngrok da proxy

Può essere configurato per poter essere eseguito dietro ad un server proxy http usando il parametro http_proxy: 

<pre class="lang:yaml decode:true " >http_proxy: "http://user:password@10.0.0.1:3128"
tunnels:
  ...</pre>