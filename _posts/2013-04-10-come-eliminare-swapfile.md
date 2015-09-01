---
title: Come eliminare /swapfile dal proprio VPS
author: unnikked
excerpt: 'L&#039;utilizzo di /swapfile potrebbe non esserci più di aiuto nel momento in cui aggiorniamo le prestazioni del nostro server, ragion per cui è buona norma eliminarlo per recuperare spazio ed aumentare ulteriormente le prestazioni del sistema.'
layout: post
permalink: /come-eliminare-swapfile/
dsq_thread_id:
  - 1200561533
itsec_enable_ssl:
  - 
categories:
  - Novità
---

Nell&#8217;articolo <a title="come aumentare la swap di un VPS" href="http://unnikked.tk/aumentare-la-swap-di-un-vps/" target="_blank">Come aumentare la swap di un VPS</a> abbiamo visto come è possibile aumentare la RAM disponibile ad un VPS utilizzando un *file di swap*.

Abbiamo anche visto che l&#8217;utilizza di questa tecnica è sconveniente, poiché va a rallentare l&#8217;intero sistema. Ci possiamo trovare nel caso in cui abbiamo aggiornato il nostro VPS (aggiornamento RAM, CPU, spazio etc.) per cui potremmo non aver più bisogno di utilizzare il file di swap. Vediamo insieme come eliminare la */swapfile*.

Dalla nostra console digitiamo:

<pre class="lang:sh decode:true">swapoff /swappfile</pre>

con questo comando abbiamo *smontato* il file di swap.

Successivamente ricordiamoci di eliminare la voce all&#8217;automounting* della swap dal file *fstab* per cui da terminale digitiamo:*

<pre class="lang:sh decode:true ">vim /etc/fstab</pre>

ed eliminiamo la riga

<pre class="lang:sh decode:true ">/swapfile   none   swap   sw 0 0</pre>

salviamo il file ed eliminiamo `/swapfile`

<pre class="lang:sh decode:true ">rm /swapfile</pre>

Riavviamo il VPS e il gioco è fatto!