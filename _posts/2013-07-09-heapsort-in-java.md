---
title: HeapSort in Java
author: unnikked
layout: post
permalink: /heapsort-in-java/
itsec_enable_ssl:
  - 
fsb_social_twitter:
  - 1
dsq_thread_id:
  - 1481116146
fsb_social_google:
  - 0
fsb_social_facebook:
  - 0
gadgetry_post_viewed:
  - 88
categories:
  - Java
  - Programmazione
tags:
  - algoritmi
  - strutture dati
---

Gli algoritmi di ordinamento vengono utilizzati dappertutto il giorno d&#8217;oggi, le informazioni vengono ordinate per essere facilmente reperibili in futuro, basti pensare a google che indicizza e mantiene ordinate le pagine web (tramite altre strutture dati più complesse) per consentire agli utenti di ottenere le loro ricerche in meno di un secondo. Fin dall&#8217;inizio dell&#8217;era informatica molti teorici ha cercato di progettare algoritmi sempre più efficienti. Dallo studio fatto è emerso che non è possibile ordinare un array di n elementi in meno di `Ω(nlogn)` confronti (logaritmo intenso in base 2).

In questo articolo voglio presentarvi l&#8217;algoritmo `heap sort` che si basa sulla struttura dati <a title="Heap Binario" href="http://it.wikipedia.org/wiki/Heap_binario" target="_blank"><code>heap</code></a> con complessità temporale `Ω(nlogn)`, in più tale algoritmo riesce ad ordinare anche *in loco* utilizzando lo stesso array per cui il suo costo in tempo di spazio in memoria è `O(n)` più lo spazio per i metodi ricorsivi di costruzione heap e aggiustamento.

L&#8217;algoritmo l&#8217;ho sviluppato in Java, utilizzando i *generici*, ciò significa che potrete utilizzare qualsiasi tipo Java su cui è definito una relazione di ordine totale tramite l&#8217;interfaccia `Comparable`.

Prima di proporre la classe `HeapSort` descrivo come funziona l&#8217;algoritmo senza scendere in troppi tecnicismi.

L&#8217;algoritmo come su detto si basta su una struttura dati di tipo `heap`. Un `heap` associato ad un insieme L di elementi è un <a title="Albero Binario" href="http://it.wikipedia.org/wiki/Albero_binario" target="_blank">albero binario</a> radicato con le seguenti proprietà:

<ul style="text-align: justify;">
  <ul style="text-align: justify;">
    <ul>
      <li>
        <em>Struttura:</em> l&#8217;albero è completo almeno fino al penultimo livello.
      </li>
      <li>
        <em>Contenuto informativo:</em> gli elementi di L sono memorizzati nei nodi dell&#8217;albero; ogni nodo v memorizza uno ed un solo elemento e ogni elemento è memorizzato in un solo nodo.<em></em>
      </li>
      <li>
        <em></em>Ordinamento a heap:<em> il valore dell&#8217;elemento di un nodo è sempre maggiore o uguale al valore degli elementi nei figli.</em>
      </li>
    </ul>
  </ul>
</ul>

<img class="aligncenter size-full wp-image-1151" alt="max-heap" src="/wp-content/uploads/2013/07/max-heap.png" width="265" height="188" />

La proprietà sulla *struttura* di un heap implica che un heap con n nodi ha altezza θ(logn). Invece la proprietà *ordinamento a heap* implica che il massimo si trova sempre nella radice dell&#8217;heap.

Elencate le proprietà dell&#8217;heap l&#8217;algoritmo `heap sort` comprenderà di tre fasi:

<ul style="text-align: justify;">
  <ul style="text-align: justify;">
    <ul style="text-align: justify;">
      <li>
        dato un array A, generare velocemente l&#8217;heap corrispondente;
      </li>
      <li>
        trovare il massimo nell&#8217;heap;
      </li>
      <li>
        cancellare il massimo nell&#8217;heap;
      </li>
      <li>
        generare l&#8217;array ordinato;
      </li>
    </ul>
  </ul>
</ul>

## Trovare il massimo

Come detto in precedenza per la proprietà *ordinamento a heap* implica che il massimo si trova sempre nella radice dell&#8217;heap.

## Cancellare il massimo

Per cancellare il massimo dalla radice eseguiamo i seguenti passaggi:

<ul style="text-align: justify;">
  <ul style="text-align: justify;">
    <ul style="text-align: justify;">
      <li>
        copiamo nella radice l&#8217;ultima foglia dell&#8217;heap
      </li>
      <li>
        eliminiamo la foglia copiata
      </li>
      <li>
        ripristiniamo la struttura <em>ordinamento a heap</em>
      </li>
    </ul>
  </ul>
</ul>

Il terzo passo è fondamentale per mantenere la proprietà *ordinamento a heap* poiché l&#8217;elemento che si trova nella foglia potrebbe inficiare tale proprietà. Per ripristinarla basta che ricorsivamente sia verificata la proprietà  
ricorsivamente nel seguente modo: se il nodo `v` è una foglia, non bisogna fare niente, siamo arrivati alla fine dell&#8217;heap; altrimenti troviamo il figlio `u` di `v` con il valore massimo, se il valore di `v` è minore del valore di `v` scambiamo i valori e ricorsivamente richiamiamo la stessa funzione sul nodo `u`.

<h2 style="text-align: justify;">
  Costruzione dell&#8217;heap
</h2>

Dal momento che utilizziamo lo stesso array, sfrutteremo la rappresentazione posizionale di un heap tramite l&#8217;utilizzo di un array i cui figli, sinisto e destro, si troveranno rispettivamente in posizione `2*i+1` e `2*i+2`.

<img class="aligncenter size-full wp-image-1159" alt="binary-heap-insertion-3" src="/wp-content/uploads/2013/07/binary-heap-insertion-3.png" width="300" height="300" />

Notiamo che utilizzando il vettore posizionale la struttura ad albero gode di una *struttura rafforzata*: l&#8217;albero è completo fino al penultimo livello e le foglie sull&#8217;ultimo livello sono tutte compattate a sinistra.

La creazione dell&#8217;heap è una operazione che non richiede alcun confronto, dobbiamo solo spostare gli elementi dell&#8217;array per far rispettare la proprietà di *ordinamento a heap*. Utilizziamo la tecnica <a title="Divide et Impera" href="http://it.wikipedia.org/wiki/Divide_et_impera" target="_blank"><code>divide et impera</code></a> per ripristinare tale proprietà. L&#8217;algoritmo per il ripristino della proprietà somiglia molto concettualmente all&#8217;algoritmo di visita <a title="Visita Post Order" href="http://it.wikipedia.org/wiki/Visita_post-order" target="_blank">post fissa</a> (si visitano ricorsivamente prima il sottoalbero sinistro e poi quello destro di un nodo ed infine si visita il nodo stesso) di un albero binario, al posto della visita del nodo va richiamato su esso la procedura di aggiustamento dell&#8217;heap descritta nel paragrafo precedente.

<h2 style="text-align: justify;">
  Ordinare l&#8217;array
</h2>

L&#8217;idea di ordinare in loco viene dal fatto che una volta eliminato il massimo dall&#8217;heap rimane uno spazio &#8220;vuoto&#8221; nell&#8217;array, in questa locazione può essere inserito il massimo estratto. Ripetendo per `n` volte questa procedura l&#8217;array viene ordinato.

Ecco il codice della classe `HeapSort` che ho scritto:

```java
public final class HeapSort {

	public static &lt;T extends Comparable&lt;? super T&gt;&gt; void sort(T[] array) {
		int lastLeaf = array.length - 1;
		heapify(0, array);
		for(int i = 0; i &lt; array.length; i++) {
			array[lastLeaf] = removeMax(lastLeaf, array);
			lastLeaf--;
		}
	}

	private static &lt;T extends Comparable&lt;? super T&gt;&gt; void fixHeap(int index, T[] heap, int lastLeaf) {
		if(2*index+1 &gt; lastLeaf && 2*index+2 &gt;lastLeaf) return;
		else {
			int maxChildIndex = maxChildIndex(index, heap, lastLeaf);
			if(heap[index].compareTo(heap[maxChildIndex]) &lt; 0) {
				T tmp = heap[index];
				heap[index] = heap[maxChildIndex];
				heap[maxChildIndex] = tmp;
				fixHeap(maxChildIndex, heap, lastLeaf);
			}
		}
	}

	private static &lt;T extends Comparable&lt;? super T&gt;&gt; int maxChildIndex(int index, T[] heap, int lastLeaf) {
		if(2*index+1 &gt; lastLeaf) return 2*index+2;
		if(2*index+2 &gt; lastLeaf) return 2*index+1;
		return(heap[2*index+1].compareTo(heap[2*index+2]) &lt; 0) ? 2*index+2 : 2*index+1;
	}

	private static &lt;T extends Comparable&lt;? super T&gt;&gt; void heapify(int index, T[]heap) {
		if(index &gt;= heap.length) return;
		heapify(2*index+1, heap);
		heapify(2*index+2, heap);
		fixHeap(index, heap, heap.length-1);
	}

	private static &lt;T extends Comparable&lt;? super T&gt;&gt; T removeMax(int lastLeaf, T[]heap) {
		T max = heap[0];
		heap[0] = heap[lastLeaf];
		fixHeap(0, heap, lastLeaf-1);
		return max;
	}

	public static void main(String[] args) {
		Integer[] a = {84,2,7,3,25,14,35,65,88,4};
		System.out.println(java.util.Arrays.toString(a));
		sort(a);
		System.out.println(java.util.Arrays.toString(a));
	}
}
```