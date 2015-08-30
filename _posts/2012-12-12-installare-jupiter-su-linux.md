---
title: 'Installare Jupiter l&#8217;applet che gestisce il risparmio energetico su Linux'
author: unnikked
layout: post
permalink: /installare-jupiter-su-linux/
dsq_thread_id:
  - 993538132
itsec_enable_ssl:
  - 
categories:
  - Linux
  - Ubuntu
---
In questo articolo parleremo di un applet che ci aiuterà a gestire il risparmio energetico su Linux. Stiamo parlando di **Jupiter Applet**.

**Jupiter** è progettato per migliorare la vita della batteria di un portatile Linux integrandosi con il sistema operativo cambiando parametri specifici quando il portatile funziona con la batteria o con la rete domestica.

<p align="center">
  <a href="http://unnikked.tk/wp-content/uploads/2012/12/Jupiter_salto.png"><img class="aligncenter size-medium wp-image-140" title="Jupiter_salto" src="http://unnikked.tk/wp-content/uploads/2012/12/Jupiter_salto-300x95.png" alt="Jupiter" width="300" height="95" /></a>
</p>

Per di più Jupiter fornisce accesso veloce a quelle funzionalità hardware che sono comunemente richieste: come la gestione del monitor, gestione della risoluzione, WIFI e bluetooth.

Nel momento in cui sto scrivendo l&#8217;articolo Jupiter è alla versione **0.1.7**. Vediamo insieme le caratteristiche di questo programmino:

  * Imposta automaticamente le modalità della **CPU** quando il portatile è alimentato dalla batteria o dalla rete elettrica
  * Regola automaticamente il **kernel** quando il portatile è alimentato dalla batteria o dalla rete elettrica
  * Regola automaticamente l&#8217;**hardware** quando il portatile è alimentato dalla batteria o dalla rete elettrica
  * Supporta la tecnologia *Asus Super Hybrid Engine *(SHE)
  * Ricorda ed applica l&#8217;ultima configurazione impostata
  * E&#8217; veloce ed efficiente, **consuma poco**
  * Facilmente personalizzabile

Per installarla su Ubuntu o derivate digitiamo da terminale:

<pre class="lang:default highlight:0 decode:true">sudo add-apt-repository ppa:webupd8team/jupiter
sudo apt-get update
sudo apt-get install jupiter</pre>

Al termine dell&#8217;installazione riavviamo il computer ed ecco Jupiter funzionare alla perfezione.

**EDIT del 16/12/2012**

Per chi usa Linux Mint 14 avrà sicuramente notato che la grafica delle notifiche cambia, questo perché Jupiter installa anche il pacchetto *notify-osd*. Per ripristinare il vecchio sistema basta rimuovere tale pacchetto, pertanto digitate nel terminale:

<pre class="lang:default highlight:0 decode:true ">sudo apt-get autoremove notify-osd</pre>

Riavviate la vostra distribuzione e tutto tornerà come prima.