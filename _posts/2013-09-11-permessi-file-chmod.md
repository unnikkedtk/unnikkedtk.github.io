---
title: 'Come impostare i permessi ai file con &#8220;chmod&#8221;'
author: unnikked
layout: post
permalink: /permessi-file-chmod/
dsq_thread_id:
  - 1748610923
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
  - Ubuntu
---

I file e le cartelle in Linux possono avere tre tipi di permessi: *lettura* (&#8216;r&#8217;), *scrittura* (&#8216;w&#8217;) ed *esecuzione* (&#8216;x&#8217;). Ogni permesso può essere &#8220;*attivo*&#8221; o &#8220;*inattivo*&#8221; per ogni categoria di utenti: il proprietario del file o della cartella, gli altri utenti nello stesso gruppo del proprietario,  o tutti gli altri.

## I file

Per determinare la modalità di un particolare file, si usa il comando `ls -lg nomefile`. Questo comando produrrà un messaggio simile al seguente:

<pre class="lang:sh highlight:0 decode:true">-rwxr-x--x 1 propietario gruppo 2300 Jul 14 14:38 nomefile</pre>

<span style="text-align: justify;">La stringa di <em>10</em> caratteri sulla sinistra mostra la modalità. Il carattere iniziale (&#8216;</span><strong style="text-align: justify;">&#8211;</strong><span style="text-align: justify;">&#8216; in questo caso) indica la tipologia del file. Il carattere &#8216;-&#8216; indica che il file è un normale file. Il carattere &#8216;</span><strong style="text-align: justify;">d</strong><span style="text-align: justify;">&#8216; significa che è una directory. I caratteri che vanno da <em>2</em> a <em>4</em> sono, rispettivamente, &#8216;<strong>r</strong>&#8216;, &#8216;<strong>w</strong>&#8216; o &#8216;<strong>x</strong>&#8216; se il corrispondente permesso è abilitato oppure &#8216;<strong>&#8211;</strong>&#8216; se il permesso è disabilitato. I caratteri che vanno da <em>5</em> a <em>7</em> similmente rappresentano i permessi per il gruppo; i caratteri che vanno da <em>8</em> a <em>10</em> per tutti gli altri. La seconda stringa mostra il numero di link che puntano al file. La terza stringa identifica il proprietario del file e la quarta stringa dice in quale gruppo è il proprietario del file.</span>

Per cambiare la modalità di un file, usa il comando `chmod`. La forma generale è:

<pre class="lang:default highlight:0 decode:true">chmod X@Y file1 file2 ...</pre>

dove: **X** è una qualsiasi combinazione delle lettere &#8216;**u**&#8216; (per il proprietario), &#8216;**g**&#8216; (per il gruppo), &#8216;**o**&#8216; per gli altri, &#8216;**a**&#8216; (per tutti); **@** può essere sostituito con &#8216;**+**&#8216; per aggiungere permessi, &#8216;**&#8211;**&#8216; per rimuovere permessi, o &#8216;**=**&#8216; per assegnare un permesso assoluto; e **Y** è una qualsiasi combinazione di \`**r**&#8216;, \`**w**&#8216;, \`**x**&#8216;. Eccone alcuni esempi

<pre class="lang:default highlight:0 decode:true">chmod u=rx file
chmod go-rwx file
chmod g+w file
chmod a+x file1 file2
chmod g+rx,o+x file</pre>

<span style="font-size: 1.5em;">Cartelle</span>

Lo schema dei permessi descritti sopra si applica anche alle cartelle. Per una cartella, chiunque abbia il permesso in &#8216;*lettura*&#8216;, può elencare i file usando il comando `ls`: chiunque abbia il permesso in &#8216;*scrittura*&#8216; può creare ed eliminare file in tale cartella; chiunque abbia il permesso di &#8216;*esecuzione*&#8216; può usare un file o una sotto cartella. Per verificare la modalità di una cartella:

<pre class="lang:default highlight:0 decode:true">ls -dl dir ... mostra i permessi per la cartella (cartelle) specificata (specificate)
ls -al dir ... mostra i permessi di tutti i file contenuti nella cartella (cartelle) specificata (specificate) (includendo anche la directory corrente '.')</pre>

<span style="text-align: justify;">Se non è specificata nessuna cartella, vengono elencati tutti i file presente nella cartella corrente. Il risultato sarà qualcosa di simile:</span>

<pre class="lang:default highlight:0 decode:true">drwx------12 fred 592 Jul 11 13:46 .
drwxr-xr-x24 root 1424 Jul 10 13:07 ..</pre>

<span style="text-align: justify;">Il carattere iniziale &#8216;<strong>d</strong>&#8216; indica che è una cartella. Il nome &#8216;<strong>.</strong>&#8216; si riferisce alla cartella corrente. Il nome &#8216;<strong>..</strong>&#8216;, si riferisce alla cartella genitore della cartella corrente. Perciò mostra sempre i permessi per la cartella corrente è quella di provenienza.</span>
