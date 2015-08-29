---
title: I puntatori di C e gli Array
author: unnikked
layout: post
permalink: /puntatori-di-c-e-gli-array/
dsq_thread_id:
  - 3366782109
categories:
  - C
  - Programmazione
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Nel <a href="/puntatori-di-c/" title="I puntatori di C" target="_blank">precedente articolo</a> abbiamo introdotto i puntatori di C e le operazioni di base ad essi applicabili, in questo articolo affronteremo l&#8217;uso dei puntatori con gli array. 

## I puntatori e gli Array

Vediamo ora il motivo per cui è necessario dare un tipo ad un puntatore, supponiamo di dichiarare un puntare di tipo `int`

<pre class="lang:c decode:true " >int *ptr;</pre>

supponiamo ora di assegnarli un valore 

<pre class="lang:c decode:true " >*ptr = 5;</pre>

in questo caso il compilatore sa che dovrà copiare `2 byte` per rappresentare il numero `5` come intero in memoria.

Se il puntatore fosse stato dichiarato di tipo `long` allora il compilatore avrebbe dovuto copiare `4 byte` in memoria.

Supponiamo ora di avere in memoria un blocco di `20 byte` assegnato, ciò significa che possiamo immagazzinare `10` interi in questa porzione di memoria, la cima di tale blocco è puntata da un puntatore.

Consideriamo la seguente operazione: 

<pre class="lang:c decode:true " >ptr = ptr + 1;	 	 
//oppure	 	 
ptr++	 	 
//oppure	 	 
++ptr	 	 
//anche nel caso dell'operatore unario -- pre e post posto</pre>

Poiché il compilatore riconosce che la variabile `ptr` è di tipo puntatore (`int`) la tratta come tale, in particolare l&#8217;incremento dell&#8217;indirizzo contenuto in `ptr` non sarà di `1` ma bensi di `2`, poiché per rappresentare un intero abbiamo bisogno di `2` byte, per cui se prima `ptr` puntava a `0x1002` dopo l&#8217;operazione di incremento il contenuto di `ptr` sarà `0x1004`.

Semanticamente ciò corrisponde a prelevare il prossimo intero contenuto nel blocco di memoria riservato.

Le operazioni aritmetiche sui puntatori prendono il nome di *aritmetica dei puntatori*.

Nella realtà il blocco di `20 byte` allocati contiguamente in memoria prende il nome di *array*

Consideriamo il seguente codice: 

<pre class="lang:c decode:true " >int my_array[] = {5,1,79,3,-7,131};</pre>

Come in ogni linguaggio di programmazione ciò corrisponde all&#8217;inizializzazione di un array di `6` elementi, l&#8217;accesso ad ogni elemento dell&#8217;array può essere effettuato tramite l&#8217;operatore `[]`. Es `my_array[2];`

L&#8217;accesso ad un array può essere effettuato anche sfruttando le proprietà dei puntatori:

<pre class="lang:c decode:true " >int *ptr;	 	 
ptr = &#038;my_array[0];</pre>

Possiamo attraversare l&#8217;array sia utilizzando la notazione canonica oppure tramite dereferenziamento dei puntatori.

<pre class="lang:c decode:true " >#include&lt;stdio.h&gt;	 	 
int my_array[] = {5,1,79,3,-7,131};

int *ptr, *ptr_1, *ptr_2;	 
	 
int main(void) {	 	 
    int i;	 	 
    ptr = &#038;my_array[0];	 	 
    ptr_1 = &#038;my_array[0];	 	 
    ptr_2 = &#038;my_array[0];	 	 
    printf("\n\n");	 	 
    for (i = 0; i &lt; 6; i++) {	 	 
        printf("my_array[%d] = %d ",i, my_array[i]);	 	 
        printf("ptr + %d = %d\n ",i, *(ptr + i));	 	 
        printf("ptr + %d = %d\n ",i, *ptr_1++);	 	 
        printf("ptr + %d = %d\n",i, *(++ptr_2));	 	 
    }	 	 
    return 0;	 	 
}</pre>

Particolarità di C è che quando si dichiara un array la variabile punta al primo elemento dell'array stesso, per cui una dichiarazione del tipo: 

<pre class="lang:c decode:true " >int my_array[] = {5,1,79,3,-7,131};	 	 
int *ptr;	 	 
ptr = my_array;</pre>

è perfettamente legale.

Tuttavia non possiamo scrivere:

<pre class="lang:c decode:true " >my_array = ptr;</pre>

Il motivo è che `ptr` è una variabile mentre `my_array` è una costante. Cioè l'indirizzo in cui il primo elemento di `my_array` viene salvato non può essere cambiato una volta che è stato dichiarato `my_array[]`.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>