---
title: Monitora il tuo server con Linux Dash
author: unnikked
layout: post
permalink: /monitora-tuo-server-linux-dash/
dsq_thread_id:
  - 2674976131
categories:
  - Linux
  - SysAdmin
tags:
  - monitoring
  - Open Source
  - Self Hosted
  - VPS
---

Un compito fondamentale per un amministratore di sistema è il monitoring dei server. Esistono svariate soluzioni professionali per tale scopo. 

In questo articolo voglio proporvi uno script minimale dotato di interfaccia grafica accattivante `linux dash` . 

Linux Dash è un progetto opensource scaricabile da <a href="https://github.com/afaqurk/linux-dash" title="Linux-Dash" target="_blank">github</a>. 

Le sue caratteristiche peculiari sono:

  * E&#8217; dotato di una interfaccia grafica minimale e accattivante
  * Monitoring on demand di RAM, Carico CPU, Uptime, Allocazione disco, utenti, risorse di rete e altro
  * Compatibile con server Apache e Nginx
  * Sviluppato in PHP
  * Supporta una varietà di server Linux

## Installazione

L&#8217;installazione è molto semplice da effettuare, basta scaricare la cartella o clonare la repository nella root o in una cartella specifica del proprio server web e raggiungerlo tramite un dominio o indirizzo ip.

Se abbiamo installato `git` sulla nostra macchina ci basta clonare la repository nel server:

<pre class="lang:sh decode:true " >git clone https://github.com/afaqurk/linux-dash.git</pre>

e visualizzare la dashboard dall&#8217;indirizzo web corrispondente. 

Altrimenti è possibile (in mancanza di git) scaricare l&#8217;ultima versione tramite `wget`:

<pre class="lang:sh decode:true " >wget https://github.com/afaqurk/linux-dash/archive/master.zip</pre>

e scompattarlo con l&#8217;utility unzip: 

<pre class="lang:default decode:true " >unzip master.zip</pre>

E consigliabile <a href="proteggere-cartella-htaccess" title="Come proteggere tramite password una cartella attraverso .htaccess" target="_blank">proteggere la cartella</a> in cui risiede *linux dash* poiché mostra molte informazioni circa gli applicativi installati, tale informazioni potrebbero essere sfruttate da malintenzionati per un attacco malevole. 

Personalmente utilizzo questo script per monitorare il <a href="come-ottenere-e-configurare-un-server-vps" title="Come ottenere e configurare un server VPS" target="_blank">VPS</a> presso cui è ospitato il blog, trovo comodo poter dare un&#8217;occhiata veloce ai parametri del server (anche da mobile dato che l&#8217;interfaccia è sviluppata con <a href="getbootstrap.com" title="Bootstrap - front end framework" target="_blank">bootstrap</a>, quindi è <a href="http://it.wikipedia.org/wiki/Design_responsivo" title="Design responsivo - Da Wikipedia, l'enciclopedia libera." target="_blank">responsive</a>) senza dover necessariamente [accedere via ssh][1]. 

 [1]: come-connettersi-al-proprio-vps "Come connettersi al proprio VPS tramite SSH"