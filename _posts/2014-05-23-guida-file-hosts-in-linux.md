---
title: Guida al file hosts in Linux
author: unnikked
layout: post
permalink: /guida-file-hosts-in-linux/
dsq_thread_id:
  - 2707679177
categories:
  - Internet
  - SysAdmin
tags:
  - internet
  - Linux Basics
  - networking
---

Vedremo tramite un esempio la funzione svolta dal file `/etc/hosts` presente in qualsiasi distribuzione GNU/Linux e maggiore sistema operativo presente nel mercato. 

Supponiamo di svilluppare un software o sito web su una <a href="/tag/virtualbox/" title="Articoli relativi a VirtualBox" target="_blank">macchina virtuale</a> presente sulla nostra macchina locale. Supponiamo che tale macchina virtuale nella rete locale abbia come indirizzo `192.168.0.200` . Supponiamo, infine, che tale applicazione sia accessibile tramite browser (non necessariamente dobbiamo trovarci in questo caso). 

Per poter testare l&#8217;applicazione è necessario che essa sia identificata tramite un dominio. Tuttavia l&#8217;acquisto di un dominio in fase di test potrebbe non essere la scelta migliore, dovremo gestire la configurazione dei <a href="http://it.wikipedia.org/wiki/Domain_Name_System" title="DNS - Wikipedia" target="_blank">DNS</a>, il porforwarding dell&#8217;applicazione per essere accessibile dall&#8217;esterno ecc ecc. 

Dettagli che possono essere tralasciati in fase di sviluppo. Ci appare evidente la necessità di creare un dominio fittizio per tale applicazione, diciamo `app.local`

Anche qui potrebbero sorgere dubbi, i domini con estensione `.local` non esistono! 

E&#8217; qui che il file `hosts` ci viene in aiuto! Tutto ciò che ci serve è di poter tradurre un nome mnemonico come `app.local` nell&#8217;effettivo <a href="http://it.wikipedia.org/wiki/Indirizzo_IP" title="Indirizzo IP - Wikipedia" target="_blank">indirizzo IP</a>, ovvero quello che un normale server DNS effettua ogni giorno per noi durante la digitazione di un dominio sulla barra degli indirizzi di qualsiasi browser. 

Il file `hosts` è speciale per alcuni aspetti, ogni qualvolta chiediamo al sistema operativo di risolvere un nome dominio esso prima effettuerà un controllo in tale file (trascuriamo la cache DNS). 

Per cui, in tale file potremo specificare qualsiasi relazione `indirizzo ip -> lista nome domini`.

Torniamo al nostro caso, vogliamo associare all&#8217;indirizzo ip `192.168.0.200` il nome dominio (fittizio) `app.local` .

Apriamo il file `/etc/hosts` con un editor di testi che abbia anche i privilegi di amministrazione:

<pre class="lang:sh decode:true " >sudo vim /etc/hosts</pre>

e specifichiamo la relazione `indirizzo ip -> lista nome domini` nel seguente formato:

<pre class="lang:sh decode:true " >192.168.0.200 app.local</pre>

Se si ha la necessità di associare lo stesso indirizzo ip a più domini basta specificare tutti gli altri intervallati da uno spazio

<pre class="lang:sh decode:true " >192.168.0.200 app.local test.vps ciao.mail a.b</pre>

Un altro esempio pratico del file `hosts` è quello di poter ridefinire la destinazione dei nomi domini già registrati (sfruttiamo la caratteristica per la quale il sistema operativo effettua sempre una &#8220;sbirciatina&#8221; nel file hosts locale), supponiamo di voler bannare `unnikked.tk` dato che non pubblica mai niente di interessante e non vogliamo che sia accessibile dalla rete locale. 

<pre class="lang:sh decode:true " >127.0.0.1 unnikked.tk</pre>

in questo caso `unnikked.tk` &#8220;punterà&#8221; alla nostra macchina locale (`localhost`). 

Ovviamente tutti questi cambiamenti hanno effetto solo sulla macchina locale e non sull&#8217;intera Internet. 

## xip.io

Se non vuoi o puoi modificare il file hosts presente sulla tua macchina locale è possibile utilizzare questo servizio chiamato <a href="xip.io" title="wildcard DNS for everyone" target="_blank">xip.io</a> .

Permette di ottenere lo stesso effetto del file hosts nel qual caso si voglia avere un nome dominio per un indirizzo ip locale, basta digitare nella barra degli indirizzi un url nel formato `indirizzoiplocale.xip.io` (Es: `127.0.0.1.xip.io`)
