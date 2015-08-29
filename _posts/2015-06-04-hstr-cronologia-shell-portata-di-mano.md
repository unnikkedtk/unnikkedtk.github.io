---
title: 'HSTR &#8211; la cronologia della shell a portata di mano'
author: unnikked
layout: post
permalink: /hstr-cronologia-shell-portata-di-mano/
dsq_thread_id:
  - 3822959954
categories:
  - Bash
  - Ubuntu
tags:
  - Open Source
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Durante l&#8217;utilizzo della linea di comandi spesso ci si può ritrovare nella situazione in cui si ha bisogno di rieseguire un comando scritto poco prima, il classico metodo è quello di premere il tasto &#8220;feccetta su&#8221; e scorrere la cronologia per trovare il comando digitato. 

**Hstr** è uno strumento a linea di comando che aiuta il completamento dei comandi dalla cronologia. E&#8217; pensato per rendere il completamento più semplice ed efficiente rispetto al comando `Ctrl-r`.

E&#8217; un progetto opensource ospitato su <a href="https://github.com/dvorka/hstr" target="_blank">GitHub</a> creato dall&#8217;utente <a href="https://github.com/dvorka" target="_blank">dvorka</a>.

<p align="center">
  <img src="https://camo.githubusercontent.com/f6f9611fe826abbac6136f7afe4a0950548888be/687474703a2f2f6d696e64666f726765722e636f6d2f70726f6a656374732f696d616765732f68682d616e696d617465642d30312e676966" alt="hstr uso" />
</p>

## Come installare hstr

Per installare hstr, abbreviato `hh`, su Ubuntu ci serviremo della repository ufficiale: 

<pre class="lang:sh decode:true " >sudo add-apt-repository ppa:ultradvorka/ppa</pre>

Aggiorniamo le definizioni ed installiamo `hstr`

<pre class="lang:sh decode:true " >sudo apt-get update && sudo apt-get install hh</pre>

Per attivare **hstr** basterà eseguire

<pre class="lang:sh decode:true " >hh --show-configuration &gt;&gt; .bashrc</pre>

eseguendo solo `hh --show-configuration` verrà mostrato la configurazione di default. 

<p align="center">
  <img src="/wp-content/uploads/2015/05/hh-show-config.png" alt="hh --show-config" width="724" height="463" />
</p>

E&#8217; possibile personalizzare a proprio piacimento il comportamento di `hh`, nella repository di progetto è possibile vedere quali <a href="https://github.com/dvorka/hstr/blob/master/CONFIGURATION.md" target="_blank">parametri</a> possono essere personalizzati.

Di default **hstr** si attiva alla pressione di `Ctrl-r` durante la scrittura di un comando. 

E&#8217; disponibile anche il manuale utente tramite `man hh`

<p align="center">
  <img src="/wp-content/uploads/2015/05/hstr-man-page.png" alt="hstr - man page" width="724" height="463" />
</p>

## Comandi principali

Una volta installato **hstr** è possibile avviarlo tramite Ctrl-r oppure digitando hh, non è necessario aver scritto qualcosa nella shell, premendo Ctrl-r mentre si digita un pezzo di comando l&#8217;utility mostrerà i possibili modi di completare il comando basandosi sulla cronologia precedente

<p align="center">
  <img src="/wp-content/uploads/2015/05/hstr-example.png" alt="hstr - example" />
</p>

Una volta avviato `hh` è possibile muoversi nella cronologia usando i tasti freccia `su` e `giù`, con il tasto canc si elimina una voce e con i tasti `Ctrl-f` si aggiunge un comando nei favoriti. 

Eseguendo la combinazione `Ctrl-/` (`Ctrl-shift-/`) è possibile visualizzare tre tipi di liste in ordine: cronologico, uso più frequente e preferiti. 

## Conclusioni

Sebbene esista già un meccanismo simile già integrato nella console, (`Ctrl-r` avvia la ricerca inversa) personalmente ritengo **hstr** uno strumento valido per l&#8217;utilizzo della cronologia della console dei comandi in modo facile è intuitivo, per chi come me esegue gran parte dei comandi tramite shell questa piccola utility darà un tocco di freschezza alle proprie sessioni su console. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>