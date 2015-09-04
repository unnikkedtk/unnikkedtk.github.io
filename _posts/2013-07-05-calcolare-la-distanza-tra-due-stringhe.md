---
title: Calcolare la distanza tra due stringhe
author: unnikked
layout: post
permalink: /calcolare-la-distanza-tra-due-stringhe/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 1469124315
categories:
  - Java
tags:
  - algoritmi
---

In questo articolo vedremo un tecnica algoritmica che fa uso della <a title="Programmazione Dinamica" href="http://it.wikipedia.org/wiki/Programmazione_dinamica" target="_blank">programmazione dinamica</a> per il calcolo della distanza tra due stringhe.

Il problema di calcolare la distanza tra due stringhe è utile per esempio nella stesura di un programma di *spell checking*, ovvero i correttori ortografici. Nell&#8217;articolo non approfondiremo la struttura di uno spell ckecker ma presenterò una tecnica algoritmica molto semplice per introdurre questo problema.

Possiamo definire la distanza tra due stringhe **`X`** e **`Y`** come il numero di operazioni da compiere per trasformare la *stringa `X`* *nella stringa `Y`*. In particolare possiamo definire tre operazioni elementari per questo processo:

<ul style="text-align: justify;">
  <li>
    <code style="line-height: 1.5;">inserisci(c)</code><span style="line-height: 1.5;">: inserisci il carattere </span><strong style="line-height: 1.5;"><code>c</code></strong><span style="line-height: 1.5;"> nella posizione corrente</span>
  </li>
  <li>
    <code>elimina(c)</code>: elimina il carattere <strong><code>c</code></strong> dalla posizione corrente
  </li>
  <li>
    <code>sostituisci(c,d)</code>: sostituisci il carattere <strong><code>c</code></strong> con il carattere <strong><code>d</code></strong> nella posizione corrente
  </li>
</ul>

<p style="text-align: justify;">
  Assumeremo che ogni operazione abbia costo <span style="text-decoration: underline;">unitario</span>, pertanto definiamo la <em>distanza</em> tra due stringhe come numero di operazioni necessarie per trasformare la stringa <strong><code>X</code></strong> nella stringa <strong><code>Y</code></strong>. Ovviamente siamo interessati alla <em>distanza <span style="text-decoration: underline;">minima</span></em> tra due stringe, a tal motivo ci avvaleremo della <em>programmazione dinamica</em> per risolvere questo problema.
</p>

<p style="text-align: justify;">
  Indichiamo con <strong><code>d(X, Y)</code></strong> la distanza tra esse. Invece di approcciare direttamente il problema <strong><code>P</code></strong> ci concentreremo sui suoi sottoproblemi <strong><code>P(i, j)</code></strong>, ovvero trovare la distanza <strong><code>d(Xi, Yj)</code></strong> tra i prefissi <strong><code>Xi=[1...i]</code></strong> e <strong><code>Yj=[1...j]</code></strong>
</p>

<p style="text-align: justify;">
  Notiamo che:
</p>

<ul style="text-align: justify;">
  <li>
    Alcuni sottoproblemi sono banali da risolvere, per esempio la soluzione per il problema <strong><code>P(0,j)</code></strong> consiste nel partire dalla stinga vuota <strong><code>X0 = ε</code></strong> fino al prefisso <strong><code>Yj</code></strong>; la distanza <strong><code>d(X0, Yj)</code></strong> è dunque <strong>j</strong>. Analogo ragionamento vale per il caso <strong><code>P(i, 0)</code></strong> per cui la distanza tra i due prefissi è data da <strong>i</strong>.
  </li>
  <li>
    Il problema finale <strong><code>P=P(m, n)</code></strong>, ovvero <strong><code>d(X, Y) = d(Xm,Yn)</code></strong>.
  </li>
</ul>

<p style="text-align: justify;">
  Queste osservazioni ci consentono di progettare l&#8217;algoritmo.
</p>

```java
public static int distanzaStringhe(String X, String Y) {
		int m = X.length(), n = Y.length();
		int[][] D = new int[m][n];
		for(int i = 0; i &lt; m; i++) D[i][0] = i;
		for (int j = 0; j &lt; n; j++) D[0][j] = j;
		for (int i = 1; i &lt; m; i++) {
			for (int j = 1; j &lt; n; j++) {
				if(X.charAt(i) != Y.charAt(j)) {
					D[i][j] = 1 + minimo(D[i][j-1], D[i-1][j], D[i-1][j-1]);
				} else {
					D[i][j] = D[i-1][j-1];
				}
			}
		}
		return D[m-1][n-1];
	}
```

<p style="text-align: justify;">
  L&#8217;approccio utilizzato è stato il seguente:
</p>

<ul style="text-align: justify;">
  <li>
    <em>I sottoproblemi da risolvere <strong><code>P(i, j)</code></strong></em> sono rappresentati da una matrice <strong><code>m * n</code></strong> per memorizzare i dati intermedi, memorizziamo in<strong> <code>D(i, j)</code></strong> la soluzione del sottoproblema <strong><code>P(i, j)</code></strong> che conterrà la distanza tra i prefissi <strong><code>d(Xi,Yj)</code></strong>
  </li>
  <li>
    <em>I valori iniziali della matrice</em> sono dedotti dalla prima osservazione fatta, inizializziamo la prima riga e la prima colonna della matrice come dedotto. (righe 4 e 5)
  </li>
  <li>
    <em>La soluzione globale del problema</em> è memorizzata nella cella <strong><code>D[m-1][n-1]</code></strong>, corrispondete al problema originario <strong><code>P=P(m, n)</code></strong> come dedotto nella seconda osservazione.
  </li>
</ul>

<p style="text-align: justify;">
  <span style="line-height: 1.5;">Il generico passo dell&#8217;algoritmo, cioè la generica soluzione del sottoproblema </span><strong style="line-height: 1.5;"><code>P(i, j)</code></strong><span style="line-height: 1.5;"> è stata risolta come di seguito:</span>
</p>

<ul style="text-align: justify;">
  <li>
    Se <code>&lt;strong>X[i] = Y[j]&lt;/strong></code> allora il minimo costo per trasformare <strong><code>Xi</code></strong> in <strong><code>Xj</code></strong> è dato dal costo per trasformare <strong><code>Xi-1</code></strong> in<strong> <code>Yi-1</code></strong>, ovvero non bisogna modificare la stringa.
  </li>
  <li>
    Se <strong><code>X[i] != Y[j]</code></strong> allora: <ul>
      <li>
        <code>inserisci(Y[j])</code>:il minimo costo per trasformare <strong><code>Xi</code> in <code>Xj</code></strong> è dato dal costo per trasformare <strong><code>Xi</code></strong> in <strong><code>Yi-1</code></strong> più <strong>1</strong> inserimento per il carattere <strong><code>Y[j]</code></strong>
      </li>
      <li>
        <code>elimina(X[i])</code>:il minimo costo per trasformare<strong> <code>Xi</code> </strong>in <strong><code>Xj</code></strong> è dato dal costo per trasformare <strong><code>Xi-i</code> </strong>in<strong> <code>Yi</code></strong> più <strong>1</strong> cancellazione per il carattere <strong><code>X[i]</code></strong>
      </li>
      <li>
        <code>sostituisci(X[i], Y[j])</code>:il minimo costo per trasformare <strong><code>Xi</code></strong> in <strong><code>Xj</code></strong> è dato dal costo per trasformare <strong><code>Xi-i</code></strong> in<strong> <code>Yi-1</code> </strong>più <strong>1</strong> sostituzione dell carattere <strong><code>X[i]</code></strong> in <strong><code>Y[j]</code></strong>
      </li>
    </ul>
  </li>
</ul>

<p style="text-align: justify;">
  Dal momento che siamo interessati la soluzione <em>ottima</em> per il problema, allora scegliamo il minimo tra i tre casi (riga 9).
</p>

<p style="text-align: justify;">
  L&#8217;algoritmo richiede un tempo di esecuzione <strong><code>O(m*n)</code></strong>, dove<strong> <code>X</code></strong> e <strong><code>Y</code> </strong>sono le due stringhe in ingresso, con <strong><code>|X| = m</code> </strong>e<strong> <code>|Y| = n</code></strong>. L&#8217;occupazione in memoria è <strong><code>O(m*n)</code></strong>.
</p>