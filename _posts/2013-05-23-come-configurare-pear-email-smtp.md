---
title: Come configurare Pear per inviare email tramite SMTP
author: unnikked
layout: post
permalink: /come-configurare-pear-email-smtp/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 1300783799
categories:
  - Linux
  - PHP
  - SysAdmin
  - Ubuntu
  - Webmaster
tags:
  - SMTP
  - VPS
---

Un ambiente LAMP che si rispetti deve avere la possibilità di inviare email, l&#8217;invio di email è utile per quei siti che utilizzano un servizio di newsletter, conferma account e altro. Negli articoli <a title="Come configurare un ambiente LAMP" href="http://unnikked.tk/apache-php-mysql/" target="_blank"><em>Come configurare un ambiente LAMP</em></a> e <a title="Come configurare ProFTPD" href="http://unnikked.tk/come-configurare-proftpd/" target="_blank"><em>&#8220;Come configurare ProFTPD&#8221;</em></a> abbiamo visto come configurare un ambiente adatto per ospitare un sito web e lavorare nel modo più efficiente possibile.

In questo articolo vedremo come installare i componenti necessari per far funzionare uno script di esempio che vedremo in seguito. Per il test ho usato un account gmail, ma questo script può essere utilizzato con qualsiasi server SMTP.

<p style="text-align: justify;">
  Per iniziare installiamo il pacchetto <code>php-pear</code>
</p>

<pre class="lang:sh decode:true">apt-get install php-pear</pre>

<quote>Il PHP Extension and Application Repository o semplicemente PEAR, è un framework e un sistema di distribuzione per codice scritto in PHP.</quote>

<p style="text-align: justify;">
  Ora installiamo il pacchetto <code>mail</code>
</p>

<pre class="lang:sh decode:true">sudo pear install mail</pre>

<p style="text-align: justify;">
  che ci permetterà di utilizzare la classe <code>Mail.php</code> nei nostri script. Ora installiamo il pacchetto necessario per l&#8217;interfacciamento con un server SMTP.
</p>

<pre class="lang:sh decode:true">sudo pear install Net_SMTP</pre>

<p style="text-align: justify;">
  Al termine dell&#8217;installazione riavviamo <code>apache</code>:
</p>

<pre class="lang:sh decode:true">sudo service apache2 restart</pre>

<p style="text-align: justify;">
  Dopo aver riavviato apache testiamo il tutto con questo semplice script:
</p>

```php
<?php
	require_once "Mail.php";

	//in $host va inserito l'indirizzo del server SMTP
	$host = "smtp.gmail.com";
	//indirizzo email da usare con il server SMTP
	$username = "username@gmail.com";
	//password dell'account 
	$password = "password_gmail";

	//di facile comprensione
	$from = "Username &lt;username@gmail.com&gt;";
	$to = "Username &lt;username@gmail.com&gt;";

	//questa variabile viene trasmesso al server di posta
	$headers= array(
		'From' =&gt; $from,
		'To' =&gt; $to,
		'Subject' =&gt; 'Test email'
	);

	//metodo factory che si occupa della costruzione dell'oggetto
	//da usare nell'indio dell'email
	$smtp = Mail::factory('smtp', array(
		'host' =&gt; $host,
		'auth' =&gt; true,
		'username' =&gt; $username,
		'password' =&gt; $password)
	);

	//invia l'email secondo i parametri in $headers e destinatario $to
	$email = $smtp-&gt;send($to, $headers, "Ciao, questo è un messaggio di prova");

```

<p style="text-align: justify;">
  Credo che i commenti spieghino da solo come va configurato per essere utilizzato. Una volta configurato eseguiamolo nel browser e se tutto è andato bene non otteniamo nessun messaggio di errore, riceveremo nella casella email specificata l&#8217;email che ci siamo autoinviati!
</p>

##### Aggiornamento del 08/10/2013

### Autenticarsi tramite SSL

<p style="text-align: justify;">
  Alcuni server SMTP richiedono l&#8217;autenticazione cifrata tramite SSL per l&#8217;invio delle email, questo snippet di codice mostra come impostare tale autenticazione.
</p>

```php
<?php
 require_once "Mail.php";

 $from = "Sender &lt;sender@example.com&gt;";
 $to = "Recipient &lt;recipient@example.com&gt;";
 $subject = "Hi!";
 $body = "Hi,nnHow are you?";

 $host = "ssl://mail.example.com";
 $port = "465";
 $username = "smtp_username";
 $password = "smtp_password";

 $headers = array ('From' =&gt; $from,
   'To' =&gt; $to,
   'Subject' =&gt; $subject);
 $smtp = Mail::factory('smtp',
   array ('host' =&gt; $host,
     'port' =&gt; $port,
     'auth' =&gt; true,
     'username' =&gt; $username,
     'password' =&gt; $password));

 $mail = $smtp-&gt;send($to, $headers, $body);

 if (PEAR::isError($mail)) {
   echo("&lt;p&gt;" . $mail-&gt;getMessage() . "&lt;/p&gt;");
  } else {
   echo("&lt;p&gt;Message successfully sent!&lt;/p&gt;");
  }
```