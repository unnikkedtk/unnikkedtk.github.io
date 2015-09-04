---
title: Gestire i canali standard di Linux
author: unnikked
layout: post
permalink: /gestire-i-canali-standard-linux/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 1868996387
categories:
  - Bash
  - Linux
  - Programmazione
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


In tutti i moderni sistemi operativi i canali standard (o *standard streams*), rappresentano i dispositivi logici di *input* e di *output* che collegano un programma con l&#8217;ambiente operativo in cui esso viene eseguito (tipicamente un terminale testuale) e che sono connessi automaticamente al suo avvio. Questi canali predefiniti sono disponibili nei sistemi operativi *Unix* e *Unix-like*, negli ambienti d&#8217;esecuzione del linguaggio `C` e `C++` e nei loro derivati. I tre canali di input/output predefiniti sono detti **standard input**, **standard output** e **standard error** (talvolta abbreviati rispettivamente in `stdin`, `stdout` e `stderr`). <sup>[<a href="#1">1</a>]</sup>

Questi canali possono essere gestiti tramite i simboli `|`, `>`, `>>`, `<`, `<<`.

## Pipeline

La pipeline, o *pipe*, permette di redirigere lo *standard output* (`stdout`) di un comando nello *standard input* (`stdin`) del comando che lo segue in una singola esecuzione a catena. L&#8217;uso della pipeline non è limitata ad una sola istanza per esecuzione, spesso lo `stdout` di un comando è usato come `stdin` del comando che lo segue e conseguentemente lo `stdout` di quest&#8217;ultimo viene rediretto di nuovo nello `stdin` di un altro comando, e così via fino ad un numero arbitrario di redirezionamenti.

Alcuni esempi di comandi su come può essere sfruttato questo comando sono:

<pre class="lang:sh decode:true">ls -l | grep .gz</pre>

il comando mostrerà i file che terminano per .gz presenti nella cartella corrente.

<pre class="lang:sh decode:true">ps -ef | grep $USER</pre>

il comando visualizza tutti i processi proprietari dell&#8217;utente loggato.

## Redirezionamento dei dati tramite >, >>, < e <<

Un altro aspetto importante dell&#8217;esecuzione dei comandi dalla linea di comando (**CLI**) è l&#8217;abilità di scrivere diversi output su un dispositivo o di inserire l&#8217;input in un comando da un dispositivo. Per scrivere l&#8217;output di un comando bisogna aggiungere il simbolo di maggiore (`>` o `>>`) seguito dal nome del dispositivo o del file su cui scrivere dopo il comando da eseguire. Se il file non esiste ma si hanno i permessi in <a title="Come impostare i permessi ai file con “chmod”" href="http://unnikked.tk/permessi-file-chmod/" target="_blank">scrittura</a> i simboli `>` e `>>` creano il file con i permessi <a title="Umask - Wikipedia" href="http://it.wikipedia.org/wiki/Umask" target="_blank">umask</a> dell&#8217;utente e scrive l&#8217;output del comando sul file appena creato. Se, inoltre, il file non esiste `>` cerca di aprire il file e di sovrascriverne il contenuto. Se invece si vuole aggiungere contenuto al file, bisogna usare `>>`.

Riprendendo gli esempi visti precedentemente potremmo decidere di salvare su file l&#8217;output dei comandi:

<pre class="lang:sh decode:true">ls -l | grep .gz &gt; lista_file_gz
ps -ef | grep $USER &gt;&gt; processi_utente</pre>

### stdout e stderr

Quando si redirige l&#8217;output con il simbolo `>`, solo lo `stdout` del comando è rediretto. Bisogna ricordare che in informatica esiste oltre a `stout` anche `stderr` come scritto nell&#8217;introduzione dell&#8217;articolo. `Stdout` è rappresentato come **1**, mentre `stderr` con **2** (`stdin` è rappresentato con ****). Per redirigere i rispettivi output bisogna specificare prima del simbolo `>` il *<span class="su-tooltip" data-close="no" data-behavior="hover" data-my="bottom center" data-at="top center" data-classes="su-qtip qtip-bootstrap su-qtip-size-default" data-title="" title="Nei sistemi operativi Unix e Unix-like un descrittore di file (o file descriptor) è un numero intero non negativo che rappresenta un file, una pipe o un socket aperto da un processo e sul quale il processo può effettuare operazioni di input/output.">descrittore di file</span>* (per esempio: `1>`, `2>`) per indirizzare l&#8217;output sul corretto dispositivo.

Il seguente esempio cerca di elencare i file `fileA.tar.bz2` e `fileC.tar.bz2`. Sfortunatamente, come mostrato nel primo comando (`ls`), il `fileC.tar.bz2` non esiste. Separando `stdout` in `ls.out` e `stderr` in `ls.err` possiamo vedere i risultati del comando.

<pre class="lang:sh decode:true">#ls
fileA.tar.bz2 fileAA.tar.bz2 fileB.tar.bz2 fileBB.tar.bz2

#ls fileA.tar.bz2 fileC.tar.bz2 1&gt; ls.out 2&gt; ls.err

#cat ls.out 
fileA.tar.bz2

#cat ls.err
ls: 0653-341 The file fileC.tar.bz2 does not exist.</pre>

La stessa regola si applica anche al simbolo `>>`.

<p style="text-align: justify;">
</p>

In alcuni casi è necessario avere entrambi `stdout` e `stderr` scritti sullo stesso file o dispositivo. Si può effettuare tale operazione in due modi. Il primo metodo è di redirigere `1>` e `2>` sullo stesso file:

<pre class="lang:sh decode:true"># ls fileA.tar.bz2 fileC.tar.bz2 1&gt; ls.out 2&gt; ls.out

# cat ls.out
fileA.tar.bz2
ls: 0653-341 The file fileC.tar.bz2 does not exist.</pre>

Il secondo metodo è più semplice e veloce del precedente.

<pre class="lang:sh decode:true"># ls fileA.tar.bz2 fileC.tar.bz2 &gt; ls.out 2&gt;&1

# cat ls.out
fileA.tar.bz2
ls: 0653-341 The file fileC.tar.bz2 does not exist.</pre>

Prima viene eseguito `ls fileA.tar.bz2 fileC.tar.bz2`. Lo `stdout` è rediretto su `ls.out` con `> ls.out`, e `stderr` è rediretto sullo stesso file sul quale `stdout` è rediretto (`ls.out`) con `2>&1`.

### Scrivere su dispositivi

Abbiamo detto che si può redirigere l&#8217;output di un comando sui files cosi come sui dispositivi. Si possono redirigere dati su stampanti, floppy, Terminal Types (*TTYs*), ed altri vari dispositivi. Per esempio, se si vuole inviare un messaggio a tutti gli utenti collegati alle rispettive sessioni (o *TTYs*), si dovrebbe solamente ciclare su `who` e redirigere un messaggio sul *TTYs* se si hanno i permessi adeguati.

<pre class="lang:sh decode:true">#for _TTY in $(who | awk '{print $2}')
&gt; do
&gt; _TTY="/dev/${_TTY}"
&gt; echo "Sending message on ${_TTY}"
&gt; echo "visita unnikked.tk" &gt; ${_TTY}
&gt; done

Sending message on /dev/tty2
Sending message on /dev/tty1
Sending message on /dev/tty8
bash: /dev/tty8: Permesso negato
Sending message on /dev/pts/1
Sending message on /dev/pts/2
visita unnikked.tk
Sending message on /dev/pts/3
Sending message on /dev/pts/4
Sending message on /dev/pts/5
Sending message on /dev/pts/6
Sending message on /dev/pts/7
Sending message on /dev/pts/8</pre>

### stdin

Quando si usano i comandi `<` e `<<` bisogna pensare che si esegue un comando con lo `stdin` già fornito.

Per esempio, vogliamo inviare una email di un testo in formato `ASCII` ad un altro utente. Si potrebbe usare una pipe per redigere lo `stdout` di `cat` sul `stdin` di `mail` (cioè, `cat mail_file.out | mail -s "Here's your E-mail!" email@example.com`), o si può redigere il contenuto del file per diventare lo `stdin` del comando mail:

<pre class="lang:sh decode:true"># mail -s "Here's your E-mail!" email@example.com &lt; mail_file.out</pre>

Usando `<<`, conosciuto anche come *here-document*, può salvare tempo nella formattazione del testo ed è più facile sul tempo di esecuzione del comando. Usando `<<`, la stringa di testo è diretta al comando da eseguire come `stdin`, ma si può continuare ad inserire informazioni fino a quando viene raggiunto l&#8217;identificatore di fine. Si digita il comando seguito da `<<` e l&#8217;identificatore di fine; si digita quello che si vuole e si finisce con l&#8217;identificatore di fine o con una nuova linea. L&#8217;uso di *here-document* permette di preservare gli spazi, nuove linee e cosi via.  
Per esempio, piuttosto che scrivere cinque `echo` che `UNIX` dovrebbe processare individualmente:

<pre class="lang:sh decode:true"># echo "Line 1"
Line 1

# echo "Line 2"
Line 2

# echo "Line 3"
Line 3

# echo "Line 4"
Line 4

# echo "Line 5"
Line 5</pre>

si potrebbe usare il seguente codice per sostituire i diversi echo e `UNIX` dovrà solo processare una singola esecuzione:

<pre class="lang:sh decode:true"># cat &lt;&lt; EOF
&gt; Line 1
&gt; Line 2
&gt; Line 3
&gt; Line 4
&gt; Line 5
&gt; EOF

Line 1
Line 2
Line 3
Line 4
Line 5</pre>

Per permettere l&#8217;inserimento dei *tab* negli script, bisogna inserire il trattino (`-`) tra `<<` e l&#8217;identificatore di fine:

<pre class="lang:sh decode:true"># cat &lt;&lt;- ATC
&gt;	Line 1
&gt;	Line 2
&gt;	Line 3
&gt;	Line 4
&gt;	Line 5
&gt; ATC

Line 1
Line 2
Line 3
Line 4
Line 5</pre>


<sup>[<a id="1"></a>1]</sup> &#8211; Citazione da <a title="Canali Standard - Wikipedia" href="http://it.wikipedia.org/wiki/Canali_standard" target="_blank">Wikipedia</a>.</p>   
