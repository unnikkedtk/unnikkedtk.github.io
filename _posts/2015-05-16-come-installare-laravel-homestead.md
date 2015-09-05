---
title: Come installare Laravel Homestead
author: unnikked
layout: post
permalink: /come-installare-laravel-homestead/
dsq_thread_id:
  - 3768868507
categories:
  - PHP
  - Programmazione
tags:
  - Laravel
---

<a href="http://laravel.com/" title="Laravel - The PHP Framework For Artisans" target="_blank">Laravel</a> Homestead è una box per Vagrant pre-configurata che fornisce un ambiente di sviluppo ideale senza richiedere l&#8217;installazione di PHP, HHVM, un web server e qualsiasi altro software sulla macchina locale.

Le box di <a title="Vagrant su Unnikked" href="/tag/vagrant/" target="_blank">Vagrant</a> sono completamente usa e getta, se qualcosa va male è sempre possibile distruggere e ricreare la macchina virtuale.

## Software incluso

  * Ubuntu 14.04
  * PHP 5.6
  * HHVM
  * Nginx
  * MySQL
  * Postgres
  * Node (Con Bower, Grunt e Gulp)
  * Redis
  * Memcached
  * Beanstalkd
  * Laravel Envoy
  * Fabric + HipChat Extension
  * Blackfire Profiler

## Vagrant Box

Prima di eseguire l&#8217;ambiente Laravel Homestead bisogna installare <a href="/gestire-macchine-virtuali-vagrant/" title="Come gestire macchine virtuali tramite Vagrant" target="_blank">VirtualBox e Vagrant</a>. 

Per aggiungere la box di Laravel Homestead: 

<pre class="lang:sh decode:true " >vagrant box add laravel/homestead</pre>

## Installare Laravel Homestead

Una volta che la box è stata aggiunta a Vagrant è possible installare lo strumento a riga di comando di Laravel Homestead tramite il comando <a href="composer-package-manager-php" title="Composer – il gestore di paccchetti di PHP" target="_blank">composer global</a>: 

<pre class="lang:sh decode:true " >composer global require "laravel/homestead=~2.0"</pre>

Assicuriamoci di inserire il percorso della cartella `~/.composer/vendor/bin` nel PATH di sistema in modo tale che l&#8217;eseguibile `homestead` sia trovato per l&#8217;esecuzione.

<pre class="lang:sh decode:true " >PATH=~/.composer/vendor/bin:$PATH</pre>

Una volta installato lo strumento a riga di comando è necessario eseguire il comando inizializzazione per creare il file di configurazione `Homestead.yaml`

<pre class="lang:sh decode:true " >homestead init</pre>

Il file `Homestead.yaml` viene posizionato nella cartella `~/.homestead`. E&#8217; possibile modificare tale file attraverso: 

<pre class="lang:sh decode:true " >homestead edit</pre>

### Configurazione del provider

La chiave `provider` nel file `Homestead.yaml` indica quale provider Vagrant deve usare: `virtualbox` o `vmware_fusion`. 

<pre class="lang:yaml decode:true " >provider: virtualbox</pre>

### Configurazione della chiave SSH

Bisogna modificare il file `Homestead.yaml` per configurare il percorso alla chiave pubblica SSH così come le cartelle che si vogliano condividere tra la macchina principale e Homestead. 

Se non si ha a disposizione una chiave SSH è possibile generare una coppia di chiavi SSH tramite:

<pre class="lang:sh decode:true " >ssh-keygen -t rsa -C "you@homestead"</pre>

Una volta configurata la chiave SSH bisogna specificare il percorso della chiave nella proprietà `authorize`.

### Configurazione delle cartelle condivise

La proprietà `folders` del file `Homestead.yaml` elenca tutte le cartelle che si vogliono condividere con Laravel Homestead. Non appena i file contenuti in queste cartelle saranno sincronizzati tra la macchina locale e Laravel Homestead automaticamente. 

Per abilitare NFS basta specificarlo nel file di configurazione come mostrato: 

<pre class="lang:sh decode:true " >folders:
    - map: ~/Code
      to: /home/vagrant/Code
      type: "nfs"
</pre>

### Configurazione dei siti Nginx

La proprietà `sites` permette di associare facilmente un &#8220;dominio&#8221; ad una cartella nell&#8217;ambiente Homestead. Una configurazione di esempio è fornita nel file `Homestead.yaml`

Si può abilitare HHVM per quasiasi sito usando l&#8217;opzione `hhvm`:

<pre class="lang:yaml decode:true " >sites:
    - map: homestead.app
      to: /home/vagrant/Code/Laravel/public
      hhvm: true
</pre>

Ogni sito sarà accessibile tramite HTTP attraverso la porta `8000` e HTTPS tramite la porta `44300`.

### Alias Bash

Per aggiungere alias bash alla box Homestead è necessario aggiungerli al file degli alias nella cartella `~/.homestead`. 

## Avvio della box

Una volta configurato il file `Homestead.yaml` secondo le proprie preferenze è possibile usare `homestead up` per avviare la macchina virtuale e `homestead ssh` per accedervi in SSH. 

Vagrant avvierà la macchina virtuale e configurerà le cartelle condivise e i siti Nginx automaticamente. 

Per distruggere la macchina è necessario usare il domando `vagrant destroy --force`

Per far funzionare correttamente la macchina virtuale è necessario aggiungere al file `<a href="guida-file-hosts-in-linux" title="Guida al file hosts in Linux">/etc/hosts</a>` l&#8217;indirizzo ip della macchina virtuale: 

<pre class="lang:sh decode:true " >192.168.10.10  homestead.app</pre>

L&#8217;indirizzo IP mostrato è quello impostato nel file `Homestead.yaml`. Una volta aggiunto il dominio al file hosts è possibile accedere al sito tramite il browser. 

`http://homestead.app`