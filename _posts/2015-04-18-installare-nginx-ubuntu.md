---
title: Come installare nginx su Ubuntu
author: unnikked
layout: post
permalink: /installare-nginx-ubuntu/
dsq_thread_id:
  - 3670149011
categories:
  - SysAdmin
  - Ubuntu
tags:
  - nginx
  - VPS
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Nginx è una leggera <a href="http://nginx.org/" title="nginx news" target="_blank">alternativa</a> ad Apache, è simile a [NodeJS][1], HAProxy e le altre tecnologie &#8220;scalabili sul web&#8221;. Ha acquisito una notevole popolarità rispetto ad Apache negli ultimi periodi. 

Nginx viene eseguito come un singolo processo orientato agli eventi, gestisce ogni richiesta in modo asincrono. Ciò permette la gestione di un gran numero di connessioni concorrenti usando relativamente poca memoria. 

Di solito Nginx usa tipicamente pochi processi. Una configurazione tipica di Nginx creerà tanti processi quanti sono le CPU disponibili sul server.

Apache crea processi o thread per ogni connessione, opera in modo sincrono. Ciò significa che ogni processo e thread viene bloccato nel momento in cui esegue un&#8217;attività lenta. 

Esempi di questi eventi sono la lettura dal file system o l&#8217;esecuzione di attività di rete. Si dice in gergo che i processi sono bloccanti, bisogna aspettare il loro termine prima di passarne al successivo. 

Mentre Apache crea diversi processi e thread, Nginx crea pochi processi, chiamati &#8220;workers&#8221;. Ogni processo ha un solo thread. I &#8220;lavoratori&#8221; di Nginx accettano richieste da un [socket][2] condiviso ed esegue l&#8217;attività in modo efficiente. E&#8217; asincrono, orientato agli eventi e non bloccante. E&#8217; libero di eseguire altri compiti mentre aspetta che attività lente, come una lettura dal file system o una richiesta su rete, finiscano. Evita l&#8217;overhead causato dalla creazione, gestione e distruzione di processi e thread. 

## Caratteristiche

Le caratteristiche della versione gratuita di Nginx sono: 

  * Server Web
  * Reverse Proxy
  * Caching dei contenuti (Web Cache)
  * Load Balancer
  * SSL Terminator

## Installazione di Nginx

Useremo la repository &#8220;stable&#8221; di Nginx durante l&#8217;installazione. Essa permetterà di ottenere le ultime versioni stabili che contengono bug fix e aggiornamenti di sicurezza. 

Se si ha installato Apache sullo stesso server ed è avviato si manifesterà un errore mentre si avvia Nginx poiché entrambi utilizzano la porta 80. Sarà necessario fermare o disinstallare Apache usando `service apache stop`.

Per testare le caratteristiche di Nginx consiglio la creazione di una macchina virtuale tramite <a href="gestire-macchine-virtuali-vagrant" title="Come gestire macchine virtuali tramite Vagrant" target="_blank">Vagrant</a>.

Ecco come installare Nginx:

<pre class="lang:sh decode:true " >add-apt-repository -y ppa:nginx/stable
sudo apt-get update
sudo apt-get install -y nginx
sudo service nginx start

# per avviarlo di default all'avvio
sudo update-rc.d nginx defaults</pre>

Per verificare che il server è installato, interroghiamo il server tramite curl:

<pre class="lang:sh decode:true " >curl -I localhost</pre>

![nginx-installed][3]

Se il risultato è simile a quello mostrato in figura il server è stato correttamente installato. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: installare-node-js-su-ubuntu "Come installare Node.js su Debian, Ubuntu e derivate"
 [2]: java-networking-socket-tcp "Java Networking : Socket TCP"
 [3]: /wp-content/uploads/2015/04/nginx-installed.png