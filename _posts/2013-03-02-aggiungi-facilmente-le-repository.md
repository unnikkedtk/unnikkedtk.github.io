---
title: '&#8220;add-apt-repository&#8221; aggiungi facilmente le repository'
author: unnikked
layout: post
permalink: /aggiungi-facilmente-le-repository/
dsq_thread_id:
  - 1114319024
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
tags:
  - VPS
---

Se avete scelto di usare una distribuzione *Debian* o derivata da essa (Ubuntu), noterete subito che manca del comando &#8220;*add-apt-repository*&#8220;. Spesso i provider di servizi **VPS** per rendere l&#8217;installazione di un **VPS** il più efficiente e veloce possibile, usano immagini del sistema operativo scarne, ovvero installano solo gli strumenti strettamente necessari.  
L&#8217;utente quindi dovrà configurarsi tutto &#8220;*a mano*&#8220;. Per chi non è pratico a modificare i file di configurazione delle repository del sistema e non vuole rinunciare al comando **add-apt-repository**, vi segnalo qui di seguito uno script trovato in rete.

```bash
#!/bin/bash
if [ $# -eq 1 ]
then
    ppa_name=`echo "$1" | cut -d":" -f2 -s`
    if [ -z "$ppa_name" ]
    then
        echo "PPA name not found"
        echo "Utility to add PPA repositories in your debian machine"
        echo "$0 ppa:user/ppa-name"
    else
        echo "$ppa_name"
        echo "deb http://ppa.launchpad.net/$ppa_name/ubuntu maverick main" &gt;&gt; /etc/apt/sources.list
        apt-get update &gt;&gt; /dev/null 2&gt; /tmp/apt_add_key.txt
        key=`cat /tmp/apt_add_key.txt | cut -d":" -f6 | cut -d" " -f3`
        apt-key adv --keyserver keyserver.ubuntu.com --recv-keys $key
        rm -rf /tmp/apt_add_key.txt
    fi
else
    echo "Utility to add PPA repositories in your debian machine"
    echo "$0 ppa:user/ppa-name"
fi
```

L&#8217;installazione è molto semplice: con i permessi di **root** posizionatevi nella cartella */usr/bin* e create un file chiamato **add-apt-repository**.

<pre class="lang:sh decode:true">touch add-apt-repository</pre>

Aprite il file appena creato con il vostro editor di testo preferito (**vim** o **nano** di solito sono presenti di default sul sistema), copiate e incollate il codice su proposto, salvate ed eseguite questo comando:

<pre class="lang:sh decode:true">chmod +x add-apt-repository</pre>

con questo comando abbiamo dato allo script i permessi di esecuzione. Per usare il comando basta digitare in qualsiasi posizione della shell:

<pre class="lang:sh decode:true">add-apt-repository ppa:nome_repository</pre>

dove *nome_repository* sta per la repository che vogliamo aggiungere al sistema, vi verrà chiesto di confermare l&#8217;inserimento, basta premere **INVIO** e automaticamente essa sarà aggiunta al sistema.

Ovviamente prima di poterla utilizzare bisogna aggiornare l&#8217;elenco delle repository presenti nel sistema con

<pre class="lang:sh decode:true">apt-get update</pre>