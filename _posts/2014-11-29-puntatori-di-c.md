---
title: I puntatori di C
author: unnikked
layout: post
permalink: /puntatori-di-c/
bwps_enable_ssl:
  - 
dsq_thread_id:
  - 3273677998
categories:
  - C
  - Programmazione
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Il linguaggio di programmazione C è uno tra i linguaggi ad alto livello tra i più potenti che un programmatore ha a sua disposizione. Benché sia un linguaggio di programmazione ad alto livello permette anche di manipolare alcuni aspetti più di basso livello di un calcolatore, per cui può essere considerato un linguaggio di &#8220;medio&#8221; livello.

Peculiarità di questo linguaggio è la possibilità di gestire direttamente la memoria tramite i puntatori, ciò può risultare difficile per chi si avvicina per la prima volta in questo ambito.

In questo articolo vedremo alcuni concetti base che mostreranno come sia facile gestire la memoria tramite i puntatori.

Assumerò anche che il lettore abbia un minimo di familiarità con il C.

## Che cosa è un puntatore?

Una variabile in un programma è qualcosa a cui è associato un nome e il nome è qualcosa che può variare. Il modo in cui il compilatore e il linker trattano le variabili è che assegnano un blocco specifico di memoria dentro al computer per mantenere il valore di tale variabile. La dimensione di tale blocco dipende dal tipo e dalla architettura considerata.

Per esempio, su una determinata la dimensione di una variabile di tipo `int` è 2 byte, per una variabile di tipo `long` è 4 byte.

In C la dimensione di una variabile di tipo `int`, per esempio, non è detto che abbia la stessa dimensione su tutti i tipi di macchine.

Una variabile in C ha associato due &#8220;valori&#8221;:

  * il valore effettivo della variabile (**rvalue** &#8211; right value)
  * l&#8217;indirizzo della variabile (**lvalue** &#8211; left value)

<pre class="lang:c decode:true">int k;

k = 2;							
printf("Value: tt%dn", k);	
printf("Address: t%pnn", &k);</pre>

Dopo aver assegnato la costante `2` alla variabile `k` possiamo accedervi al suo valore (rvalue) utilizzandola semplicemente (come in riga 4).

Con l&#8217;operatore `&` accedo alla sua parte sinistra (lvalue) e di conseguenza posso visualizzare a quale indirizzo di memoria il valore è stato memorizzato. Es: `0x7fffd9a33e8c`

Secondo **K&R II** (pagina 197):

> Un **oggetto** è una regione della memoria etichettata; un **lvalue** è una espressione che si riferisce a tale oggetto.

Consideriamo ora il seguente pezzo di codice:

<pre class="lang:c decode:true" title="Abbiamo creato un alias?">int j, k;
k = 2;
j = 7;
k = j; // &lt;- è un alias?</pre>

Secondo la definizione sopra citata esaminiamo il pezzo di codice mostrato: nelle linee `2-3` assegniamo i valori alle variabili `k` e `j`, in questo caso abbiamo effettuato l&#8217;accesso all&#8217;rvalue delle variabili le costanti `2` e `7` sono memorizzate rispettivamente nelle variabili `k` e `j` che ovviamente avranno indirizzi di memoria diversi.

Cosa succede alla linea 4? Poiché le variabili `j` e `k` non sono di tipo puntatore in questo caso il programma copierà il valore di `j` (accedendo alla rvalue) copiandolo nel rvalue di `k`. Per cui in questo caso non si è creato un alias.

Per fare in modo che una variabile possa contenere come suo valore un lvalue dobbiamo dichiararla di tipo puntatore tramite il simbolo `*`. Il tipo della variabile (`int`, `float`, `double` etc) indica quanti byte il compilatore deve riservare per quel puntatore, per cui un puntatore di tipo `int` punterà ad una cella di memoria riservata per il tipo `int` (2 byte).

<pre class="lang:c decode:true" title="Dichiarare un puntatore">int *ptr;</pre>

In questo caso abbiamo dichiarato un puntatore di tipo `int`, per cui abbiamo informato il compilatore di riservare tanta memoria quanto è specificata per la variabile di tipo `int`. Es: 2 byte.

Secondo lo standard ANSI se una variabile è dichiarata fuori da qualsiasi funzione essa verrà automaticamente inizializzata a 0.

Similmente per una variabile puntatore essa verrà inzializzata ad un valore specifico tale che si assicura che essa non punti a nessun tipo di oggetto, tale valore è `NULL` e il puntatore verrà chiamato in gergo *null pointer*.

Lo schema reale dei bit usato per un puntatore nullo potrebbe essere valutato come zero dal momento che dipende dal sistema specifico su cui il codice è compilato.

Per rendere il codice sorgente compatibile tra i vari compilatori e tra i vari sistemi viene utilizzata una macro per rappresentare il valore `NULL`.

Questa macro ha il nome `NULL`. Perciò impostando il valore di un puntatore utilizzando questa macro in un operazione di assegnamento, come `ptr = NULL`, ci garantisce che il puntatore è effettivamente un puntatore nullo.

Questa macro può essere utilizzata anche per determinare se un puntatore specifico sia effettivamente nullo, così come si può determinare se una variabile ha il valore 0.

<pre class="lang:c decode:true">int *ptr;
ptr = &k;
printf("Value: tt%dn", *ptr);
printf("Address: t%pnn", &ptr);</pre>

Per manipolare lvalue e rvalue di un puntatore facciamo uso di due operatori & e * rispettivamente.

Con l&#8217;operatore & accediamo alla parte sinistra di un puntatore, per cui nella riga 2 del codice stiamo assegnando l&#8217;indirizzo di `k` nel rvalue di `ptr`.

L&#8217;operatore `*` è detto di **dereferenziazione**, cioè si accede in memoria utilizzando il contenuto del puntatore, poiché il puntatore contiene un indirizzo di memoria (quello di `k`) la linea 3 del codice ci farà avere il valore di `k`. Es: 10.

<p align="center">
  <img alt="puntatori c" src="/wp-content/uploads/2014/01/puntatori-c.png" />
</p>

L&#8217;immagine mostra una situazione tipica in memoria, nelle celle di indirizzo `0x0` e `0x3` sono memorizzati due variabili. Nella cella di indirizzo `0x5` è salvato un puntatore che punta alla cella di indirizzo `0x0`. Utilizzando l&#8217;operatore `*` sul puntatore si otterrà il valore 2, non dereferenziando il puntatore (quindi utilizzando direttamente rvalue) si otterrà `0x0` che non rappresenta un intero ma bensì un indirizzo di memoria.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>