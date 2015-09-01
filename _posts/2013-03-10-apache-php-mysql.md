---
title: Come configurare un ambiente LAMP
author: unnikked
layout: post
permalink: /apache-php-mysql/
dsq_thread_id:
  - 1128739108
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
  - Webmaster
tags:
  - VPS
---

Eccoci qui in un&#8217;altro articolo sui *VPS*, questa volta però tratteremo una modalità di uso comune per un *Virtual Private Server*, ovvero per creare un sito web. Per fare ciò configureremo il così detto ambiente **LAMP** (Linux &#8211; Apache &#8211; MySQL &#8211; PHP) più un servizio **FTP** per permettere lo sviluppo/caricamento dei file più efficiente.

## Apache

Il primo strumento da installare è sicuramente il server Apache.

*Apache HTTP Server*, o più comunemente *Apache*, è il nome dato alla piattaforma server Web modulare più diffusa (ma anche al gruppo di lavoro open source che ha creato, sviluppato e aggiornato il software server), in grado di operare da sistemi operativi UNIX/Linux e Microsoft.

Apache è un software che realizza le funzioni di trasporto delle informazioni, di internetwork e di collegamento, ha il vantaggio di offrire anche funzioni di controllo per la sicurezza come quelli che compie il proxy.

<span style="line-height: 1.5;">Prima di installare Apache consiglio di creare un nuovo account per gestire il lato &#8220;</span><em style="line-height: 1.5;">web server</em><span style="line-height: 1.5;">&#8220;, e per aggiungere un nuovo utente basta digitare nella console del vostro </span><em style="line-height: 1.5;">VPS</em>

<pre class="lang:sh decode:true">adduser nomeutente</pre>

dove *nomeutente* sta per un nome scelto da voi, per esempio: *adduser unnikked,* scegliete una password e premete invio; vi verrà chiesto di compilare una serie di voci per le informazioni dell&#8217;account (non è obbligatorio), che potrete saltarle premendo il tasto invio.

Prima di rieffettuare l&#8217;accesso al server con le credenziali appena create, dobbiamo configurare il comando sudo. Questo comando permette ad account diversi da* root* di potersi autenticare per un periodo limitato di tempo assumendo gli stessi privilegi del &#8220;*superuser*&#8220;. Apriamo il file *sudoers.tmp* con

<pre class="lang:sh decode:true">visudo</pre>

oppure

<pre class="lang:sh decode:true">vim /etc/sudoers</pre>

una volta aperto il file aggiungiamo sotto la linea

<pre class="lang:sh decode:true">#User privilege specification 
root ALL=(ALL:ALL)ALL</pre>

questa istruzione

<pre class="lang:sh decode:true">nomeutente ALL=(ALL:ALL)ALL</pre>

dove *nomeutente* è il nome scelto precedentemente. Salviamo il file ed usciamo dall&#8217;editor di testo.

Ora possiamo disconnetterci dal server e ricollegarci con il *nomeutente* appena creato e configurato.

<pre class="lang:sh decode:true">ssh nomeutente@ipserver (o nomedominio.abc)</pre>

Una volta autenticati con *nomeutente* possiamo installare *Apache*:

<pre class="lang:sh decode:true">sudo apt-get update
sudo apt-get install apache2</pre>

inseriamo la password scelta per *nomeutente* e confermiamo. Al termine dell&#8217;installazione il *web server Apache* viene avviato automaticamente: per verificare che funzioni apriamo una pagina web e digitiamo *l&#8217;indirizzo ip* della macchina (o il nome dominio). Se tutto è andato a buon fine vi apparirà il seguente messaggio.

![][1]

---

<span style="line-height: 1.5;">Su linux possiamo gestire i servizi con il comando </span><strong style="line-height: 1.5;">service</strong><span style="line-height: 1.5;">.</span>

<pre class="lang:sh decode:true">service nome_servizio comando</pre>

dove **nome_servizio** sta per il nome del servizio da gestire, per esempio *apache2*, e comando sta per il comando da eseguire, per esempio *start*, *stop*, *restart*.

---

## My-SQL

Una volta installato *Apache* è la volta di installare il server **My-SQL**.

MySQL è un Relational database management system (RDBMS), composto da un client con interfaccia a riga di comando e un server, entrambi disponibili sia per sistemi Unix o Unix-like come GNU/Linux che per Windows, anche se prevale un suo utilizzo in ambito Unix.

E&#8217; particolarmente utile per gestire i dati prodotti dai siti web. Installiamo *My-SQL* e alcune librerie utili per il suo corretto funzionamento:

<pre class="lang:sh decode:true">sudo apt-get install mysql-server php5-mysql libapache2-mod-auth-mysql</pre>

ci si presenterà una schermata simile che ci invita a scegliere la password per l&#8217;utente* root* di mysql.

![][2]

&nbsp;

Installiamo un* database* di prova con

<pre class="lang:sh decode:true">sudo mysql_install_db</pre>

Ora, *My-SQL*è pronto per essere utilizzato, ma non è adatto per un ambiente produttivo. Per cui eseguiamo il comando

<pre class="lang:sh decode:true">sudo /usr/bin/mysql_secure_installation</pre>

per iniziare il processo di *messa in sicurezza* dell&#8217;ambiente *My-SQL*.

Ci verrà chiesto la password dell&#8217;utente* root* *My-SQL* precedentemente scelta, compariranno in serie le seguenti domande

  * **You already have a root password set, so you can safely answer &#8216;n&#8217;.**  Rispondiamo con N se non la si vuole cambiare.
  * **By default, a MySQL installation has an anonymous user, allowing anyone to log into MySQL without having to have a user account created for them. This is intended only for testing, and to make the installation go a bit smoother. You should remove them before moving into a production environment.** Digitiamo Y
  * **Normally, root should only be allowed to connect from &#8216;localhost&#8217;. This ensures that someone cannot guess at the root password from the network.** Digitiamo Y
  * **By default, MySQL comes with a database named &#8216;test&#8217; that anyone can access. This is also intended only for testing, and should be removed before moving into a production environment.** Digitiamo Y
  * **Reloading the privilege tables will ensure that all changes made so far will take effect immediately.** Digitiamo Y

Possiamo ora collegarci all&#8217; interfaccia a linea di comando di *My-SQL* con questo comando

<pre class="lang:sh decode:true">sudo mysql -u root -p</pre>

(L&#8217;uso dell&#8217;interfaccia a linea di comando di *My-SQL*non viene trattato in questo articolo).

## PHP

Installiamo, infine, **PHP**

PHP (acronimo ricorsivo di &#8220;PHP: Hypertext Preprocessor&#8221;, preprocessore di ipertesti; originariamente acronimo di &#8220;Personal Home Page&#8221;) è un linguaggio di programmazione interpretato, originariamente concepito per la programmazione Web ovvero la realizzazione di pagine web dinamiche.

lanciamo questo comando

<pre class="lang:sh decode:true">sudo apt-get install php5 libapache2-mod-php5 php5-mcrypt</pre>

---

Un&#8217;alternativa all&#8217;interfaccia di comando di *My-SQL* è **phpMyAdmin**, un software scritto in PHP che permette di gestire i database e le tabelle direttamente dal browser.

Per installarlo digitiamo il seguente comando:

<pre class="lang:sh decode:true">sudo apt-get install phpmyadmin</pre>

scegliamo di configurarlo con *apache2*, selezioniamo con *spazio* e confermiamo *invio*. Alla richiesta **Configuration** **phpmyadmin** confermiamo su *yes* e scegliamo una password per l&#8217;account amministrativo di *phpmyadmin*.

---

Abbiamo appena installato un ambiente **LAMP** completo e produttivo, nel prossimo articolo vedremo come installare un server **FTP** per interagire con lo spazio web facilmente.


 [1]: /wp-content/uploads/2013/03/it_works_3.png
 [2]: /wp-content/uploads/2013/03/scelta-password-mysql.png