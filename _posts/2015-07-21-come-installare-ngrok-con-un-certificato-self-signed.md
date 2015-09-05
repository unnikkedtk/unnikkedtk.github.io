---
title: Come installare ngrok con un certificato self-signed
author: unnikked
layout: post
permalink: /come-installare-ngrok-con-un-certificato-self-signed/
dsq_thread_id:
  - 3924093039
categories:
  - Internet
  - Senza categoria
  - SysAdmin
tags:
  - ngrok
  - Open Source
  - Self Hosted
---

Abbiamo visto come tramite <a href="ngrok-tunnel-sicuri-su-localhost" target="_blank">ngrok</a> sia possibile aprire tunnel locali per esporre un servizio web su Internet.

ngrok di base è un servizio hosted, è possibile usufruire in modo gratuito dell&#8217;infrastruttura messa a disposizione dell&#8217;autore.

Poiché è disponibile il <a href="https://github.com/inconshreveable/ngrok" target="_blank">sorgente</a> del progetto vedremo come compilarli per poter includere un certificato self-signed nel pacchetto.

La ricompilazione del pacchetto non è necessaria nel caso in cui si abbia a disposizione di un <a href="http://certificato-wildcard-ssl-apache" target="_blank">certificato wildcard</a> rilasciato da una *<a href="http://it.wikipedia.org/wiki/Certificate_authority" target="_blank">Certification Authority</a>*.

## Compilare ngrok

I passaggi illustrati sono stati eseguiti su una installazione pulita di Ubuntu 14.04 LTS su una box <a href="gestire-macchine-virtuali-vagrant" target="_blank">Vagrant</a> (nulla toglie di eseguire i passaggi sul vostro computer o server).

ngrok è stato sviluppato utilizzando il linguaggio di programmazione <a href="https://golang.org/" target="_blank">Go</a>, installiamo i componenti base di supporto per la compilazione del sorgente.

<pre class="lang:sh decode:true ">sudo apt-get install build-essential golang git mercurial</pre>

Cloniamo la repository del progetto per prepararci alla compilazione.

<pre class="lang:sh decode:true ">git clone https://github.com/inconshreveable/ngrok.git ngrok
cd ngrok</pre>

Prima di passare alla compilazione generiamo il certificato self-signed da includere nei binari che andremo a produrre.

Per facilitare l&#8217;inserimento dei comandi definiremo una variabile nella sessione corrente di bash.

<pre class="lang:default decode:true ">NGROK_DOMAIN="miodominio.com"</pre>

Dove `miodominio.com` è il nome dominio che legheremo al server, vedremo in seguito questo aspetto.

<pre class="lang:sh decode:true ">openssl genrsa -out rootCA.key 2048
openssl req -x509 -new -nodes -key rootCA.key -subj "/CN=$NGROK_DOMAIN" -days 5000 -out rootCA.pem
openssl genrsa -out device.key 2048
openssl req -new -key device.key -subj "/CN=$NGROK_DOMAIN" -out device.csr
openssl x509 -req -in device.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out device.crt -days 5000</pre>

Una volta generato il certificato copiamolo della cartella `assets/client/tls/`.

<pre class="lang:sh decode:true ">cp rootCA.pem assets/client/tls/ngrokroot.crt</pre>

E iniziamo la compilazione del server e del client tramite il comando

<pre class="lang:default decode:true ">make release-server release-client</pre>

<p align="center">
  <img src="/wp-content/uploads/2015/05/ngrok-compiled.png" alt="ngrok-compiled" />
</p>

### Avviare il server

Per avviare il server è sufficiente eseguire:

<pre class="lang:sh decode:true ">./bin/ngrokd -tlsKey=device.key -tlsCrt=device.crt -domain="$NGROK_DOMAIN" -httpAddr=":8000" -httpsAddr=":8001"</pre>

Bisogna prestare attenzione che `device.key` e `device.crt` sono i file generati durante la creazione del certificato.

Ovviamente tramite le direttive `-httpAddr` e `-httpsAddr` è possibile scegliere le porte da associare ad un collegamento `http` e `https` rispettivamente.

### Avviare il client

Per avviare il client è necessario informare il programma di voler connettersi ad un servizio che utilizza un certificato non firmato da una certification authority.

<pre class="lang:sh decode:true ">echo -e "server_addr: $NGROK_DOMAIN:4443\ntrust_host_root_certs: false" &gt; ngrok-config
./bin/ngrok -config=ngrok-config 80</pre>

L&#8217;utilizzo di ngrok da ora è come descritto nel <a href="ngrok-tunnel-sicuri-su-localhost" target="_blank">precedente</a> articolo.

## Configurazione del dominio

Per poter legare un dominio al server è necessario che il server DNS supporti il wildcard per le definizioni delle zone.

Personalmente ho utilizzato <a href="http://ssl-gratuito-cloudflare-abilitare-https" target="_blank">Cloudflare</a> poiché lo supporta insieme ad un dominio registrato tramite <a href="http://come-ottenere-dominio-livello-gratis" target="_blank">freenom</a>.

Una volta <a href="https://it.hostingertut.ga/post/integrare-cloudflare" target="_blank">integrato</a> il dominio a Cloudflare bisogna far puntare un record A all&#8217;indirizzo IP del server principale e creare un record CNAME wildcard.

![ngrok-cloudflare-cname][1]

In base al nome dominio base scelto (dominio secondo livello, terzo livello ecc) è possibile creare record CNAME in modo tale da legare le stringhe alfanumeriche generate da ngrok ad un livello di dominio interessato.

<table class="rwd-table">
  <tr>
    <th>
      Ngrok Dominio Base
    </th>
    
    <th>
      HostName
    </th>
    
    <th>
      Ngrok Tunnel Url
    </th>
  </tr>
  
  <tr>
    <td data-th="Ngrok Base Domain">
      miodominio.com
    </td>
    
    <td data-th="HostName">
      *
    </td>
    
    <td data-th="Ngrok Tunnel Url">
      [stringa-generata].miodominio.com
    </td>
  </tr>
  
  <tr>
    <td data-th="Ngrok Base Domain">
      tunnel.miodominio.com
    </td>
    
    <td data-th="HostName">
      *.tunnel
    </td>
    
    <td data-th="Ngrok Tunnel Url">
      [stringa-generata].tunnel.miodominio.com
    </td>
  </tr>
  
  <tr>
    <td data-th="Ngrok Base Domain">
      ngrok.miodominio.com
    </td>
    
    <td data-th="HostName">
      *.ngrok
    </td>
    
    <td data-th="Ngrok Tunnel Url">
      [stringa-generata].ngrok.miodominio.com
    </td>
  </tr>
  
  <tr>
    <td data-th="Ngrok Base Domain">
      tunnel.ngrok.miodominio.com
    </td>
    
    <td data-th="HostName">
      *.tunnel.ngrok
    </td>
    
    <td data-th="Ngrok Tunnel Url">
      [stringa-generata].tunnel.ngrok.miodominio.com
    </td>
  </tr>
</table>

Il valore della colonna `HostName` è ciò che andrebbe inserito nel campo CNAME, la sintassi potrebbe variare in base al servizio usato. 

Nota bene, il certificato wildcard deve corrispondere allo schema usato. 

## Avvio di un server tramite certificato rilasciato da una CA

Se si ha a disposizione un certificato wildcard rilasciato da una certification authority non è necessario ricompilare i sorgenti. 

### Avvio del server

<pre class="lang:shell decode:true " >./ngrokd -tlsKey="/path/to/tls.key" -tlsCrt="/path/to/tls.crt" -domain="example.com"</pre>

Dove `-tlsKey` e `-tlsCrt` sono i file del certificato rilasciato dal certification authority e `-domain` è il nome dominio. 

### Avvio del client

Anche in questo caso bisogna usare un file di configurazione per istruire al client verso quale server connettersi. 

<pre class="lang:yaml decode:true " >server_addr: example.com:4443
trust_host_root_certs: true</pre>

 [1]: /wp-content/uploads/2015/05/ngrok-cloudflare-cname.png