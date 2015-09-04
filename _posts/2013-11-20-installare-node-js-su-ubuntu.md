---
title: Come installare Node.js su Debian, Ubuntu e derivate
author: unnikked
layout: post
permalink: /installare-node-js-su-ubuntu/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 1981861802
categories:
  - Linux
  - SysAdmin
  - Ubuntu
  - Webmaster
tags:
  - nodejs
---

<a href="http://nodejs.org/" title="Node.js" target="_blank">`Node.js`</a> è una piattaforma software basato sul <a href="https://code.google.com/p/v8/" title="V8 JavaScript Engine - Google Code" target="_blank">JavaScript engine V8 di Google</a>. E’ comunemente usato per costruire applicazioni server side ad alte prestazioni utilizzando Javascript. Tale engine sta riscuotendo sempre più successo nella comunità open-source.

`Node.js` è disponibile come pacchetti su alcune distro, mentre in alcuni casi bisogna installarlo dai sorgenti. Dal momento che è in costante sviluppo è raccomandato installare l’ultima versione dai sorgenti invece di installare un pacchetto non aggiornato. L’ultima versione di `Node.js` si ottiene tramite <a href="https://npmjs.org/" title="Node.js Package Manager" target="_blank">`npm`</a> (il gestore dei pacchetti di `Node.js`) che permette di installare facilmente moduli esterni a `Node.js`.

### Installazione su Debian {#nodejs-su-debian.wmd-title}

Su Debian, è possibile installare Node.js dai sorgenti:

<pre>sudo apt-get install python g++ make
wget http://nodejs.org/dist/node-latest.tar.gz
tar xvfvz node-latest.tar.gz
cd node-v0.10.21 (sostituisci la versione con quella scaricata)
./configure
make
sudo make install</pre>

### Installazione su Ubuntu o Linux Mint {#nodejs-su-ubuntu-o-linux-mint.wmd-title}

Node.js è presente in Ubuntu (13.04 e superiori). Pertanto il comando da eseguire è il seguente:

<pre>sudo apt-get install nodejs</pre>

E’ possibile installare una versione più recente di Node.js tramite il suo [PPA][1]:

<pre>sudo apt-get install python-software-properties python g++ make
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs</pre>

### Come avviare un server

Per avviare un semplice server HTTP basta copiare questo esempio di codice javascript in un file: 

```javascript
var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello Worldn');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
```

e avviarlo tramite il comando `node`:

<pre class="lang:sh decode:true " >node example.js</pre>

Visitando il link` http://127.0.0.1:8124 `(ovvero `localhost` sulla porta `8124`) o tramite indirizzo ip pubblico associato al server si potrà ottenere una pagina `HTML` statica con scritto *Hello World*.

 [1]: https://launchpad.net/~chris-lea/+archive/node.js