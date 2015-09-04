---
title: Guida ai Virtual Host di Apache
author: unnikked
layout: post
permalink: /guida-ai-virtual-host-di-apache/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 1787086537
categories:
  - Linux
  - SysAdmin
tags:
  - apache
  - VPS
---

Con il termine `Virtual Host` ci riferiamo alla possibilità di ospitare più di un sito web sulla stessa macchina. I `Virtual Host` possono essere &#8220;basati su IP&#8221;, cioè ogni sito è associato ad un determinato indirizzo IP, o &#8220;basato su nome&#8221;, cioè ogni sito è associato ad un dominio web, i cui stessi puntano allo stesso indirizzo IP della macchina che li ospita. Il risultato finale della configurazione non viene mostrato all&#8217;utente finale.

I virtual host basati su IP usano l&#8217;indirizzo IP della connessione per determinale il corretto virtual host da servire. Pertanto bisogna avere indirizzi IP diversi per ogni host. Ciò significa che il server dovrebbe avere tante schede di rete, associate ad un specifico indirizzo IP, quanti sono gli i siti web da ospitare. Questa configurazione è più difficile da realizzare. Invece, con i virtual host basati su nome, il server si affida al client che comunica il nome dominio tramite la richiesta HTTP. Usando questa tecnica, diversi siti web possono condividere lo stesso indirizzo IP.

<div class="su-error" style="padding:10px;border:1px solid #f03;color:#903;background:#fde">
  <strong>slider</strong><br />images not found
</div>

La tecnica basata sui nomi degli host è di solito più semplice da realizzare, dal momento che bisogna solo configurare il server DNS per mappare ogni hostname al corretto indirizzo IP e successivamente configurare il server Apache per il riconoscimento dei diversi nomi.

Per usare un virtual hosting basato su nome, bisogna assegnare l&#8217;indirizzo IP (e possibilmente la porta) sul server che accetterà le richieste per l&#8217;host. Ciò viene fatto con la direttiva `NameVirtualHost`. Normalmente si può assegnare il simbolo `*` alla direttiva per indicare qualsiasi indirizzo IP del server. Se invece si ha la necessità di utilizzare diverse porte (e.s. uso di SSL) bisogna specificare una `Porta` all&#8217;argomento, come `*:80`. Bisogna notare che inserire un indirizzo IP nella direttiva `NameVirtualHost`, il server non si metterà in ascolto su tale automaticamente.

Il prossimo passo è quello di creare un blocco per ogni diverso host che si vuole servire. L&#8217;argomento della direttiva deve corrispondere ad un NameVirtualHost noto. (Nella maggior parte dei casi sarà &#8220;`*:80`&#8220;. All&#8217;interno di ogni blocco bisogna specificare la direttiva `ServerName` per specificare quale host è servito e la direttiva `DocumentRoot` per mostrare dove si trovano i file da essere mostrati.

Per esempio, supponiamo di voler ospitare un secondo sito su un server con dominio `esempio.com`. Ci basterà creare un file per il nostro virtual host nella cartella `/etc/apache2/sites-available/`

<pre class="lang:default decode:true">vim /etc/apache2/sites-avaiable/esempio</pre>

e scrivere le direttive dei virtual host

<pre class="lang:default decode:true">&lt;VirtualHost *:80&gt;
        ServerAdmin example@webmaster
        ServerName esempio.com
        ServerAlias www.esempio.com
        DocumentRoot /percorso/root/sitoweb
&lt;/VirtualHost&gt;</pre>

Successivamente abilitiamo il virtual host appena creato con il comando

<pre class="lang:default decode:true">a2ensite esempio</pre>

e riavviamo apache

<pre class="lang:default decode:true">service apache2 restart</pre>

Se viene mostrato un messaggio del tipo

<pre class="lang:default decode:true">Could not reliably determine the server's fully qualified domain name, using 127.0.0.1 for ServerName
può essere ignorato in quanto è un warning.</pre>

può essere semplicemente ignorato.

<a id="update"></a>

### Aggiornamento 30/04/2014

Per far scomparire il warning fastidioso di apache bisogna aggiungere nel proprio file `/etc/hosts` un record relativo all&#8217;indirizzo IP del server e il dominio associato ad esso.

Supponendo che l&#8217;indirizzo ip è `192.168.125.122` e il dominio è `example.com`, nel file `/etc/hosts` va riportato:

<pre class="lang:default decode:true " >192.168.125.122    example.com</pre>
