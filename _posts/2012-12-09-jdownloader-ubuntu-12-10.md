---
title: jDownloader su Ubuntu 12.10 Quantal Quezal
author: unnikked
layout: post
permalink: /jdownloader-ubuntu-12-10/
dsq_thread_id:
  - 1381471102
itsec_enable_ssl:
  - 
categories:
  - Ubuntu
---

In questo articolo vedremo brevemente come installare **jDownloader** su Ubuntu 12.10 da repository. La repository funziona su tutte le versione di Ubuntu, Debian e derivate. Importante, per poter utilizzare JDownloader dovete avere installato la **Java Virtual Machine**, di norma è installato di default in tutte le distribuzioni Linux famose.

Per gli utenti **Windows** e **Mac** possono scaricare jDownloader dal [sito ufficiale][1] dove è anche presente la versione per **Linux**. Inoltre è anche disponibile il codice sorgente del programma.

Per chi non lo sapesse jDownloader è (cito da wikipedia) :

> **JDownloader** è un gestore di download open source scritto in linguaggio Java.
> 
> Esso dispone di numerose funzioni utili in particolare per chi utilizza siti di file hosting, come l&#8217;auto-estrazione di archivi compressi, l&#8217;unione di file divisi in più parti, il riconoscimento immediato di URL riconducibili a download, la possibilità di definire un limite massimo per la velocità di download e il riconoscimento di codici captcha.
> 
> Supporta inoltre l&#8217;uso di account premium per tutti i siti di file hosting (come, tra i più famosi, Rapidshare), ma può anche scaricare video da Youtube e molti altri siti. JDownloader offre anche la possibilità di cambiare l&#8217;indirizzo IP creando uno script di riconnessione.

Dopo aver spiegato brevemente le caratteristiche del programma arriviamo al dunque sull&#8217;installazione del software. Apriamo una finestra del terminale e da **root** o con il comando **sudo** digitiamo:

<pre class="lang:sh decode:true">sudo add-apt-repository ppa:jd-team/jdownloader
sudo apt-get update
sudo apt-get install jdownloader</pre>

E&#8217; anche possibile integrare jDownloader con **Unity**, per farlo basta scaricare il seguente pacchetto da repository :

<pre class="lang:sh decode:true">sudo add-apt-repository ppa:narfss/proyectobs
sudo apt-get update
sudo apt-get install unity-jdownloader</pre>

Ora apriamo jDownloader andiamo su *Estensioni -> Gestiore plugin* e spuntiamo la casella relativa alla voce *Controllo remoto JD*.

Et voilà ora avremo jDownloader integrato con Unity.


 [1]: http://jdownloader.org/download/index