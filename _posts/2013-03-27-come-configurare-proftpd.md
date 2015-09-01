---
title: Come configurare ProFTPD
author: unnikked
layout: post
permalink: /come-configurare-proftpd/
dsq_thread_id:
  - 1169100311
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
tags:
  - VPS
---

Abbiamo visto nel precedente <a title="Come configurare un ambiente LAMP" href="http://unnikked.tk/apache-php-mysql/" target="_blank">articolo</a> come configurare un ambiente **LAMP** per sviluppare o rendere pubblico un nostro sito web. Non abbiamo però visto un modo con cui possiamo comunicare con il *web server* senza dover ricorrere all&#8217;accesso *ssh*.

Vedremo quindi come connetterci al nostro **VPS** per creare, modificare o eliminare file, utilizzando il protocollo **FTP** (*File Transfer Protocol*) avvalendoci del pacchetto <a title="Sito ufficiale di ProFTPD" href="http://www.proftpd.org/" target="_blank">ProFTPD</a>.

In *informatica* e *telecomunicazioni* **File Transfer Protocol** (**FTP**) (protocollo di trasferimento file) è un protocollo per la trasmissione di dati tra host basato su **TCP**.

Gli obiettivi principali di **FTP** descritti nella sua **RFC** ufficiale sono:

  * Promuovere la condivisione di file (programmi o dati).
  * Incoraggiare l&#8217;uso indiretto o implicito di computer remoti.
  * Risolvere in maniera trasparente incompatibilità tra differenti sistemi di stoccaggio file tra host.
  * Trasferire dati in maniera affidabile ed efficiente.

**ProFTPD** è un server *FTP* rilasciato sotto licenza **GPL** compatibili con i sistemi *Unix*-like e con i sistemi *Windows* (attraverso **Cygwin**).

Per installare il pacchetto *ProFTPD* effettuiamo l&#8217;accesso al *VPS* con il *nomeutente* che abbiamo creato nell&#8217;articolo [precedente][1] e eseguiamo, da terminale, il seguente comando:

<pre class="lang:sh decode:true">sudo apt-get install proftpd</pre>

Dopo che il pacchetto verrà scaricato, durante l&#8217;installazione vi verrà chiesto di scegliere una tra le due modalità di configurazione, scegliamo la voce *standalone*

![][2]

&bnsp;

Ad installazione terminata il server viene avviato automaticamente, ma prima di poterlo utilizzare dobbiamo configurarlo. Per cui apriamo il file di configurazione:

<pre class="lang:sh decode:true">vim /etc/proftpd/proftpd.conf</pre>

Nella voce *ServerName* inseriamo l&#8217;ip del server:

<pre class="lang:sh decode:true"># If set on you can experience a longer connection delay in many cases.
IdentLookups                    off

ServerName                      "ipserver"
ServerType                      standalone
DeferWelcome                    off</pre>

Successivamente impostiamo la cartella radice del server ftp, di default è impostata alla cartella home dell&#8217;utente corrente, modifichiamo la voce *Default Root* in questo modo:

<pre class="lang:sh decode:true">DefaultRoot                     /var/www</pre>

Salviamo il file e riavviamo il server *ftp* con il seguente comando:

<pre class="lang:sh decode:true">sudo service proftpd restart</pre>

Su linux possiamo gestire i servizi con il comando **service**.

<pre class="lang:sh decode:true">service nome_servizio comando</pre>

dove **nome_servizio** sta per il nome del servizio da gestire, per esempio *proftpd*, e comando sta per il comando da eseguire, per esempio *start*, *stop*, *restart*.

Non abbiamo ancora finito, dobbiamo ancora dare i permessi all&#8217;account *nomeutente*, per prima cosa aggiungiamo *nomeutente* (dove *nomeutente* è il nome dell&#8217;account scelto nell&#8217;[articolo][1] precedente) al gruppo *www-data*:

<pre class="lang:sh decode:true">sudo adduser nomeutente www-data</pre>

Ora rendiamo *nomeutente* proprietario della cartella */var/www*:

<pre class="lang:sh decode:true">sudo chown -R www-data:www-data /var/www</pre>

Ed infine impostiamo i parametri relativi ai permessi di modifica dei file:

<pre class="lang:sh decode:true">sudo chmod -R g+rw /var/www</pre>

Ecco fatto, ora possiamo collegarci al nostro web server tramite un qualsiasi programma che supporti il protocollo *ftp*.

 [1]: http://unnikked.tk/apache-php-mysql/ "Come configurare un ambiente LAMP"
 [2]: /wp-content/uploads/2013/03/proftpd.jpg