---
title: Installa Java su Ubuntu e derivate tramite PPA
author: unnikked
layout: post
permalink: /installa-java-ppa/
dsq_thread_id:
  - 1346195296
itsec_enable_ssl:
  - 
categories:
  - Java
  - Novità
  - SysAdmin
tags:
  - VPS
---

Nei repository ufficiali di Canonical c&#8217;è la versione open di Java, la cosiddetta *OpenJDK*. La versione Java rilasciata dalla Oracle è stata tolta dai repository per problemi di licenza. Ma se si ha la necessità di utilizzare la versione rilasciata dalla Oracle possiamo farlo grazie al repository di <a href="http://www.webupd8.org/" target="_blank">Webupd8</a>.

Per i possessori di un **VPS** segnalo <a title="“add-apt-repository” aggiungi facilmente le repository" href="http://unnikked.tk/aggiungi-facilmente-le-repository/" target="_blank">questo articolo</a>, in cui è descritto come aggiungere il comando `add-apt-repository` per aggiungere *repository* nel proprio sistema tramite **PPA**.

Per installare **Oracle Java** digitiamo nel terminale

<pre class="lang:sh decode:true">sudo add-apt-repository ppa:webupd8team/java</pre>

e aggiorniamo la lista delle repository presenti nel sistema

<pre class="lang:sh decode:true">sudo apt-get update</pre>

e infine installiamo Java

<pre class="lang:default decode:true">sudo apt-get install oracle-java7-installer</pre>

Per verificare di aver installato la versione giusta di Oracle digitiamo da terminale.

<pre class="lang:sh decode:true">java -version</pre>

<img class="aligncenter" alt="" src="/wp-content/uploads/2013/05/javaversion.png" />

Se l’aggiornamento non fosse applicato automaticamente, potrete rendere predefinito Java 7 come JDK di sistema utilizzando il comando

<pre class="lang:sh decode:true">sudo update-alternatives --config java</pre>

<img class="aligncenter" alt="" src="/wp-content/uploads/2013/05/javaversionupdate.png" />

Segnalo che nella su detta repository è presente anche la futura versione **Java 8**.