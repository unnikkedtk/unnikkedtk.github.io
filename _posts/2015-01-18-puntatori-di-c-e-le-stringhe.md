---
title: I puntatori di C e le Stringhe
author: unnikked
layout: post
permalink: /puntatori-di-c-e-le-stringhe/
dsq_thread_id:
  - 3431556900
categories:
  - C
  - Programmazione
---

## I puntatori e le stringhe

Una stringa in C è rappresentata come un array di caratteri terminato dal carattere speciale &#8216;\0&#8242; chiamato *nul character*.

Tale carattere non ha nulla a che vedere con la macro NULL, il carattere &#8216;\0&#8242; è uno zero che occupa 1 byte.

In C una stringa può essere inizializzata in tre modi:

<pre class="lang:c decode:true">char my_string[40];	 	 
my_string[0]='N';	 	 
my_string[1]='i';	 	 
my_string[2]='c';	 	 
my_string[3]='k';	 	 
my_string[4]='\0';	 	 
</pre>

Oppure:

<pre class="lang:c decode:true">char my_string[40] = {'N', 'i', 'c', 'k', '\0'};</pre>

Oppure nel modo più sintetico:

<pre class="lang:default decode:true ">char my_string[40] = "Nick";</pre>

Tutti e tre i metodi portano allo stesso risultato: l&#8217;allocazione in memoria di un array di caratteri di 40 byte nel quale solo i primi 5 sono stati allocati con la parola &#8220;Nick&#8221; , la versione sintetica aggiunge automaticamente il carattere &#8221;.

Poiché una stringa è un array di caratteri possiamo trattarla come un comune array, ecco un esempio di come copiare una stringa:

<pre class="lang:c decode:true">char *my_strcpy(char *destination, const char *source)	 	 
{	 	 
 char *p = destination;	 	 
 while (*source != '\0')	 	 
 {	 	 
     *p++ = *source++;	 	 
 }	 	 
 *p = '\0';	 	 
 return destination;	 	 
}	 	 
</pre>

I parametri passati al metodo sono dei puntatori, poiché in C tutti i parametri sono passati per valore, il contenuto dei puntatori passati al metodo contengono il valore del puntatore e il valore di un puntatore è l&#8217;indirizzo verso cui punta in memoria.

La direttiva `const` comunica al compilatore che il valore di source non può più essere cambiato, per cui se nel metodo si cercherà di modificare la stringa si otterrà un errore.

Il metodo restituisce un puntatore di tipo char che punta alla nuova stringa copiata.

Va messo in evidenza una differenza semantica tra `*ptr++` e `(*ptr)++`: nel primo caso si avanza effettivamente nell&#8217;array utilizzando l&#8217;aritmetica dei puntatori, nel secondo caso si incrementa il valore della cella puntata da ptr.
