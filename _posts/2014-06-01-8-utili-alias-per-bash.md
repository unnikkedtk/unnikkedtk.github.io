---
title: 8 utili alias per bash
author: unnikked
layout: post
permalink: /8-utili-alias-per-bash/
dsq_thread_id:
  - 2728704681
categories:
  - Bash
  - SysAdmin
  - Ubuntu
---

Una caratteristica che ho sempre apprezzato dei sistemi GNU/Linux è la grande personalizzazione che è possibile effettuare ad esso.

Durante la giornata utilizzo molto spesso l&#8217;interprete dei comandi bash, una caratteristica degli interpreti dei comandi è quello di poter personalizzare l&#8217;ambiente con alias personalizzati per aumentare la produttività.

In un precedente articolo parlai del servizio <a title="Alias.sh – Gestisci i tuoi alias nel cloud" href="gestisci-i-tuoi-alias-nel-cloud" target="_blank">alias.sh</a>, ora invece voglio proporvi una serie di alias da me utilizzati.

## Ricaricare l&#8217;interprete dei comandi

Quando si modificano gli appositi file per personalizzare la propria console dei comandi, ad ogni modifica dobbiamo ricaricare tali file per applicare le modifiche, il comando classico è

<pre class="lang:default decode:true ">source ~/.bashrc</pre>

Potrebbe risultare tedioso riscrivere sempre lo stesso comando (anche se bash supporta l&#8217;attraversamento della storia tramite le freccette direzionali) potremmo utilizzare invece il seguente alias:

<pre class="lang:default decode:true ">alias rebash='source ~/.bashrc'</pre>

## Ottenere il timestamp

Il <a title="Timestamp Unix - Wikipedia" href="http://it.wikipedia.org/wiki/Tempo_(Unix)" target="_blank">timestamp</a> è il numero di secondi trascorsi dal 1 Gennaio 1970 (l&#8217;anno 0 di Unix), può essere utile ottenere tale numero negli script bash, per poterlo ottenere facilmente ho creato quest&#8217;alias:

<pre class="lang:default decode:true ">alias timestamp="date +'%s'"</pre>

## Cat con evidenziazione di sintassi

<a title="Cat - Wikipedia" href="http://it.wikipedia.org/wiki/Cat_(Unix)" target="_blank">Cat</a> è uno tra i comandi più utilizzati, sebbene il suo scopo originario è quello di concatenare più file esso viene spesso utilizzato per visualizzare il contenuto di un file sullo <a title="Gestire i canali standard di Linux" href="gestire-i-canali-standard-linux" target="_blank">standard output</a> dell&#8217;interprete, tuttavia se si sta cercando di visualizzare un codice di un file sorgente di un programma esso non risulterà colorato come spesso accade negli editor di testo specializzati o IDE.

Tramite il modulo python pygmentize possiamo colorare l&#8217;output di questo comando:

<pre class="lang:default decode:true ">alias cat='pygmentize -O style=monokai -f console256 -g'</pre>

Poiché utilizza pygmentize dobbiamo installare la dipendenza sulla propria macchina, per una distribuzione Ubuntu o derivata basta digitare:

<pre class="lang:default decode:true ">sudo apt-get install python-pygments</pre>

Ecco un esempio del risultato prodotto:

<p align="center">
  <img src="/wp-content/uploads/2014/06/Screenshot-01062014-190139.png" alt="Python Pygmentize" />
</p>

## Trimming di una stringa

A volte è utile effettuare il <a title="Trimming - Wikipedia" href="http://en.wikipedia.org/wiki/Trimming_(computer_programming)" target="_blank">trimming</a> di una stringa per eliminare eventuali spazi presenti a fine e/o inizio stringa:

<pre class="lang:default decode:true ">alias trim="sed -e 's/^[[:space:]]*//g' -e 's/[[:space:]]*\$//g'"</pre>

Per utilizzare l&#8217;alias bisogna passare tramite <a title="Gestire i canali standard di Linux" href="http://unnikked.tk/gestire-i-canali-standard-linux/" target="_blank">pipe</a> l&#8217;output di una variabile contenente la stringa, per esempio:

<pre class="lang:default decode:true ">echo "   visita unnikked.tk   " | trim</pre>

## Encoding e decoding di URL

A volte può capitare di avere la necessità di codificare e decodificare le <a title="URL - Wikipedia" href="http://it.wikipedia.org/wiki/Uniform_Resource_Locator" target="_blank">URL</a> questi due alias sfruttano la libreria url presente in python

<pre class="lang:default decode:true ">alias urldecode='python -c "import sys, urllib as ul; print ul.unquote_plus(sys.argv[1])"'
alias urlencode='python -c "import sys, urllib as ul; print ul.quote_plus(sys.argv[1])"'
</pre>

per esempio:

<pre class="lang:default decode:true ">urlencode http://unnikked.tk</pre>

Produrrà in output 

<pre class="lang:default decode:true " >http%3A%2F%2Funnikked.tk</pre>

Cosa produrrà invece 

<pre class="lang:default decode:true " >urldecode $(urlencode http://unnikked.tk)</pre>

?

## Generazione di una password casuale

Una buona norma durante la registrazione ad un sito web è di utilizzare un password diversa rispetto ad altri siti web cui si ha già una registrazione, invece di utilizzare generatori di password online potrete utilizzare il seguente alias:

<pre class="lang:default decode:true ">alias randap="&lt; /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c${1:-16};echo;"</pre>

## Server HTTP

Siete in una LAN privata e avete la necessità di condividere al volo un file presente in una cartella ? O semplicemente volete vedere sul vostro tablet un film che avete sul vostro hard disk ? Invece di installare [Apache][1] e configurare un <a title="Guida ai Virtual Host di Apache" href="guida-ai-virtual-host-di-apache" target="_blank">Virtual Host</a> apposito è possibile sfruttare un modulo di python :

<pre class="lang:default decode:true ">ret=$(python -c 'import sys; print("%i" % (sys.hexversion&lt;0x03000000))')
if [ $ret -eq 0 ]; then 
    alias pyhttp='python -m http.server 8765'
else 
    alias pyhttp='python -m SimpleHTTPServer 8765'
fi
</pre>

questo script crea un alias a seconda della propria versione di python installata, rendendolo compatibile sia con python 3 che con versioni inferiori.

## Ottenere l&#8217;ip pubblico

Può capitare di avere la necessità di conoscere l&#8217;indirizzo IP pubblico associato alla macchina, invece di visitare un sito ad hoc è possibile interrogare direttamente un server DNS che vi restituirà il vostro indirizzo IP pubblico:

<pre class="lang:default decode:true ">alias myip='dig +short myip.opendns.com @resolver1.opendns.com'</pre>

 [1]: apache-php-mysql "Come configurare un ambiente LAMP"