---
title: 'Kanboard &#8211; la metodologia Kanban self-hosted'
author: unnikked
layout: post
permalink: /kanboard-metodologia-kanban-self-hosted/
dsq_thread_id:
  - 3592710858
categories:
  - SysAdmin
tags:
  - Self Hosted
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Kanboard è un progetto open source e self-hosted che mira a fornire uno strumento per la gestione di compiti utilizzando la metodologia kanban.

## Cosa è Kanban?

Kanban è una metodologia sviluppata originariamente dalla Toyota per migliorare l&#8217;efficienza di produzione.

Ci sono solo due vincoli imposti da questa metodologia:

  * Visualizzare il flusso di lavoro
  * Limitare il lavoro in corso

### Visualizzare il flusso di lavoro

  * Il lavoro è mostrato su una lavagna, si ha una comprensione generale del progetto
  * Ogni colonna rappresenta un passo nel flusso di lavoro

## Concentrazione ed evita il multitasking

  * Ogni fase può avere un limite durante lo svolgimento
  * I limiti sono strumenti utili per identificare i colli di bottiglia
  * I limiti evitano di lavorare su diversi compiti allo stesso tempo

## Misura la performance e il miglioramento

Kanban usa il comando e tempi di ciclo per misurare la performance:

  * **Tempo di comando**: tempo tra la creazione di un compito e il suo completamento.
  * **Tempo di ciclo**: tempo tra l&#8217;inizio di un compito e il suo completamento.

Per esempio si potrebbe avere una situazione in cui si abbia un tempo di comando di 100 giorni e bisogna lavorare sono 1 ora per completare il compito.

## Caratteristiche principali

Ecco le caratteristiche principali che questo software mette a disposizione.

### Panoramica visuale e chiara dei compiti

<img class=" aligncenter" src="/wp-content/uploads/2015/03/board.png" alt="kanboard - board" />

  * Con la funzionalità Drag & Drop tra le colonne è possibile spostare i compiti facilmente in un solo click.
  * E&#8217; possibile personalizzare le colonne secondo il flusso di lavoro
  * E&#8217; possibile limitare il lavoro in corso per essere più efficienti.

### Unica dashboard per tutti i progetti

<img class=" aligncenter" src="/wp-content/uploads/2015/03/dashboard.png" alt="kanboard - dashboard" />

  * Le informazioni più importati sono in un unico posto.
  * E&#8217; presente una lista dei compiti e dei sotto compiti assegnati.
  * Sono presenti le ultime attività dei progetti.

### Lavora in gruppo o in autonomia

<img class=" aligncenter" src="/wp-content/uploads/2015/03/permissions.png" alt="kanboard - permessi" />

  * Kanboard è progettato per piccoli gruppi ma è possibile sfruttarlo anche per lavorare in autonomia.
  * E&#8217; presente un sistema di gestione di permessi.
  * Ogni utente può avere progetti privati.
  * E&#8217; possibile condividere le lavagne con persone esterne.

### Gestione dei compiti

<img class=" aligncenter" src="/wp-content/uploads/2015/03/task.png" alt="kanboard - compiti" />

  * E&#8217; possibile suddividere un compito in sotto compiti per stimare il tempo o la complessità.
  * E&#8217; possibile descrivere il compito utilizzando la sintassi <a title="Markdown specifica" href="http://daringfireball.net/projects/markdown/syntax" target="_blank">Markdown</a>.
  * E&#8217; possibile aggiungere commenti, documenti, cambiare il colore, la categoria, l&#8217;assegnatario, la scadenza.
  * E&#8217; possibile muovere o duplicare i compiti tra progetti con un solo click.

### Azioni automatiche

<img class=" aligncenter" src="/wp-content/uploads/2015/03/actions.png" alt="kanban - azioni" />

  * E&#8217; possibile automatizzare il flusso di lavoro.
  * In base a determinati eventi è possibile cambiare automaticamente l&#8217;assegnatario, colore, categorie.

### Swimlane

Le swimlane sono suddivisioni orizzontali della lavagna.

<img class=" aligncenter" src="/wp-content/uploads/2015/03/swimlanes.png" alt="kanban - swimlanes" />

E&#8217; possibile dividere la lavagna in diverse sezioni per gestire il rilascio di un software, diversi classi di servizi o qualsiasi altra cosa.

### Analisi dei dati

<img class=" aligncenter" src="/wp-content/uploads/2015/03/analytics.png" alt="kanban - analytics" />  
E&#8217; possibile analizzare e migliorare il flusso di lavoro usando il diagramma di flusso cumulativo, visualizzare i compiti e la distribuzione degli utenti.

### Caratteristiche aggiuntive

  * Notifiche email.
  * Separazione dei privilegi: amministratore o utente.
  * Sistema di autenticazione multiplo: LDAP/ActiveDirectory, Google, Github e anche Reverse-Proxy.
  * API Json-RPC e Webhook per creare compiti attraverso software esterni.
  * Interfaccia a riga di comando.
  * Utilizzabile su qualsiasi servizio (hosting condiviso, VPS, Raspberry Pi o in locale).
  * Usa Sqlite di default o MySQL o Postgresql.
  * L&#8217;installazione è estremamente semplice.
  * Tradotto in 15 lingue tra cui l&#8217;italiano!
  * Codice sorgente rilasciato sotto licenza <a title="AGPLv3 Licenza" href="http://www.gnu.org/licenses/agpl-3.0.txt" target="_blank">AGPLv3</a>.

## Installazione

L&#8217;installazione di questa applicazione è veramente triviale. Una volta creato un Virtual Host di apache basta scaricare il pacchetto:

<pre class="lang:sh decode:true " >cd /var/www/
sudo wget http://kanboard.net/kanboard-latest.zip</pre>

Scompattare il pacchetto:

<pre class="lang:sh decode:true " >sudo unzip kanboard-latest.zip</pre>

Ripristinare i permessi all&#8217;utente www-data:

<pre class="lang:sh decode:true " >sudo chown -R www-data:www-data kanboard/data</pre>

Rimuovere il file zip scaricato:

<pre class="lang:sh decode:true " >sudo rm kanboard-latest.zip</pre>

L&#8217;username e la password di default sono **admin/admin**, pertanto consiglio di cambiare subito le credenziali una volta installato kanboard. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>