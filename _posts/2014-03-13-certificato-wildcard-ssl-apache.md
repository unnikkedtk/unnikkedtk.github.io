---
title: Come configurare un certificato wildcard SSL su Apache
author: unnikked
layout: post
permalink: /certificato-wildcard-ssl-apache/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 2423258580
categories:
  - Internet
  - Webmaster
tags:
  - apache
  - ssl
---

Abbiamo visto come sia possibile <a href="come-configurare-un-certificato-ssl-su-apache" title="Come configurare un certificato SSL su Apache" target="_blank">configurare un certificato SSL su Apache</a> per rendere più sicure le connessioni effettuare verso un sito web. 

Nel caso in cui hanno diversi sottodomini è naturale chiedersi se è possibile utilizzare uno stesso certificato per ognuno di essi. E&#8217; possibile ottenere questo risultato utilizzando un certificato wildcard. 

Questo articolo sarà molto breve e sintetico, illustrerò i comandi da utilizzare necessari per la configurazione di un certificato wildcard. 

Per approfondire la configurazione dei <a href="guida-ai-virtual-host-di-apache" title="Guida ai Virtual Host di Apache" target="_blank">Virtual Host di Apache</a> per i <a href="come-configurare-un-sottodominio" title="Come configurare un sottodominio" target="_blank">sottodomini</a> e la configurazione del <a href="come-configurare-un-certificato-ssl-su-apache" title="Come configurare un certificato SSL su Apache" target="_blank">certificato SSL</a> rimando ad altri miei articoli linkati in questo paragrafo.

Riferendoci al dominio `unnikked.tk` come caso d&#8217;uso, generiamo un certificato wildcard per tutti i sottodomini `*.unnikked.tk`. 

Da terminale digitiamo:

<pre class="lang:sh decode:true " >mkdir /etc/ssl/shared
cd /etc/ssl/shared
openssl genrsa 2048 &gt; host.key
openssl req -new -x509 -nodes -sha1 -days 3650 -key host.key &gt; host.cert</pre>

Il path di riga 1 e 2 può essere sostituito con uno di vostra scelta. Nella riga 3 generiamo una chiave privata a 2048 bit utilizzando l&#8217;algoritmo <a href="http://it.wikipedia.org/wiki/RSA" title="RSA - Da Wikipedia, l'enciclopedia libera" target="_blank">RSA</a>. Infine nella riga 4 generiamo il certificato valido per 3650 giorni, ovvero all&#8217;incirca 10 anni. 

Successivamente ci verrà mostrato a video il classico procedimento per inserire i dati del certificato, alla voce `Common Name` inseriamo *.unnikked.tk .

<pre class="lang:sh decode:true " >You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:New York
Locality Name (eg, city) []:NYC
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Awesome Inc
Organizational Unit Name (eg, section) []:Dept of Merriment
Common Name (e.g. server FQDN or YOUR name) []:*.unnikked.tk               
Email Address []:webmaster@awesomeinc.com</pre>

Dopo aver creato il certificato wildcard digitiamo i seguenti comandi: 

<pre class="lang:sh decode:true " >openssl x509 -noout -fingerprint -text &lt; host.cert &gt; host.info
cat host.cert host.key &gt; host.pem
chmod 400 host.key host.pem</pre>

Ora siamo pronti per utilizzare il certificato wildcard per i nostri sottodomini, particolare attenzione va prestata durante la definizione delle direttive `SSLCertificateFile` e `SSLCertificateKeyFile` :

<pre class="lang:sh decode:true " >SSLEngine On
SSLCertificateFile /etc/ssl/shared/host.pem
SSLCertificateKeyFile /etc/ssl/shared/host.key</pre>

Una volta configurati i file di Virtual Host per ogni sottodominio ricarichiamo la configurazione di Apache: 

<pre class="lang:sh decode:true " >service apache2 reload</pre>

Potrebbe essere mostrato il seguente messaggio di warning: 

<pre class="lang:sh decode:true " >[warn] _default_ VirtualHost overlap on port 443, the first has precedence</pre>

Basta inserire nel file `/etc/apache2/ports.conf` dentro la direttiva `<IfModule mod_ssl.c>`:

<pre class="lang:sh decode:true " >NameVirtualHost *:443</pre>

Riavviamo Apache per testare i sottodomini abilitati per la fruizione tramite protocollo <a href="http://it.wikipedia.org/wiki/HTTPS" title="HTTPS - Da Wikipedia, l'enciclopedia libera." target="_blank">https</a>. 
