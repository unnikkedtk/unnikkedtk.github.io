---
title: Come configurare un certificato SSL su Apache
author: unnikked
layout: post
permalink: /come-configurare-un-certificato-ssl-su-apache/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 2032855393
categories:
  - Linux
  - SysAdmin
  - Ubuntu
  - Webmaster
tags:
  - apache
  - VPS
---

Durante la fase di realizzazione di un sito web a volte è necessario che la trasmissione dei dati avvenga in modo sicuro tra client e server, ciò per evitare azioni fraudolente da parte di malintenzionati. Un esempio: l&#8217;invio di un form `HTML` contenente informazioni sensibili come password, codici bancari etc. 

In `Internet` esiste un protocollo di comunicazione che permette l&#8217;interscambio dei dati tra client e server in modo sicuro e crittografato, ovvero <a href="http://it.wikipedia.org/wiki/HTTPS" title="HTTPS - Wikipedia" target="_blank">HTTPS</a>. 

In questo articolo vedremo come configurare apache per permettere il supporto del protocollo HTTPS.

Per prima cosa bisogna avere installato apache sulla propria macchina. Successivamente va abilitato il modulo <a href="http://it.wikipedia.org/wiki/Secure_Sockets_Layer" title="SSL - Wikipedia" target="_blank">SSL</a> tramite il comando:

<pre class="lang:sh decode:true">a2enmod ssl</pre>

Riavviamo il servizio `Apache` con:

<pre class="lang:sh decode:true">service apache2 restart</pre>

Successivamente andiamo a creare una nuova cartella in cui andremo a salvare il *certificato* e la *chiave*:

<pre class="lang:sh decode:true">mkdir /etc/apache2/ssl</pre>

Quando richiediamo un nuovo certificato, possiamo specificare la sua data entro la quale esso rimane valido cambiando il valore 365 con il numero dei giorni che si preferisce. In questo caso il certificato scadrà dopo un anno:

<pre class="lang:sh decode:true">openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt</pre>

Con questo comando creeremo sia il certificato `SSL` auto-firmato sia la `chiave` del server per proteggerlo, li metterà nella cartella specificata.

<p align="center">
  
  <p>
    Il comando mostrerà sul terminare una lista di campi che bisogna compilare. La linea più importante è <em>&#8220;Common Name&#8221;</em>. Inserisci qui il nome dominio o, se ancora non è disponibile, l&#8217;indirizzo ip del server.
  </p>
  
```
You are about to be asked to enter information that will be incorporated
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
Common Name (e.g. server FQDN or YOUR name) []:example.com                  
Email Address []:webmaster@awesomeinc.com
```
  
  <p>
    Una volta creato il certificato dobbiamo configurare il <code>Virtual Host</code> che andrà a mostrare il certificato. Apriamo il file:
  </p>
  
  <pre class="lang:sh decode:true">vim /etc/apache2/sites-available/default-ssl</pre>
  
  <p>
    Dentro la sezione che inizia con `<VirtualHost *:443>...</VirtualHost>` bisogna effettuare i seguenti cambiamenti. Aggiungiamo una linea con il nome del server sotto la email dell&#8217;amministratore di sistema:
  </p>
  
<pre class="lang:sh decode:true">ServerName example.com:443</pre>
  
  <p>
    Sostituiamo <code>example.com</code> con il nome dominio o l&#8217;indirizzo ip del server (deve essere lo stesso come specificato nel campo <em>Common Name</em> sul certificato).
  </p>
  
  <p>
    Troviamo le seguenti tree linee e assicuriamoci che corrispondano al percorso dove è stato salvato il certificato e la chiave:
  </p>
  
  <pre class="lang:sh decode:true">SSLEngine on
SSLCertificateFile /etc/apache2/ssl/apache.crt
SSLCertificateKeyFile /etc/apache2/ssl/apache.key</pre>
  
  <p>
    Prima che il sito web sia disponibile sulla porta 443 bisogna abilitare il <code>Virtual Host</code> appena modificato:
  </p>
  
  <pre class="lang:sh decode:true">a2ensite default-ssl</pre>
  
  <p>
    Ora possiamo riavviare <code>Apache</code> per applicare le modifiche effettuate:
  </p>
  
  <pre class="lang:sh decode:true">service apache2 reload</pre>
  
  <p>
    Digitando nel browser <code>https://tuonomedominio</code> verrà mostrato il certificato.
  </p>