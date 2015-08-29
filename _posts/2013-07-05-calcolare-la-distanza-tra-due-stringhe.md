---
title: Calcolare la distanza tra due stringhe
author: unnikked
layout: post
permalink: /calcolare-la-distanza-tra-due-stringhe/
itsec_enable_ssl:
  - 
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:48:"/wp-content/uploads/2013/06/distanzastringhe.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:48:"/wp-content/uploads/2013/06/distanzastringhe.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
dsq_thread_id:
  - 1469124315
gadgetry_post_viewed:
  - 82
categories:
  - Java
tags:
  - algoritmi
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


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

<pre class="lang:java decode:true">public static int distanzaStringhe(String X, String Y) {
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
	}</pre>

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

<p style="text-align: justify;">
  <br />
  
  <div align="center">
    <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
  </div>