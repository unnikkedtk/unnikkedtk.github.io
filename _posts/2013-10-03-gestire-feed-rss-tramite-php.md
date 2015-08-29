---
title: Gestire un feed RSS tramite PHP
author: unnikked
layout: post
permalink: /gestire-feed-rss-tramite-php/
gadgetry_tfuse_post_options:
  - 
itsec_enable_ssl:
  - 
gadgetry_post_viewed:
  - 109
dsq_thread_id:
  - 1821691183
categories:
  - Internet
  - PHP
  - Programmazione
  - Webmaster
tags:
  - feed rss
  - xml
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Con l&#8217;avvento dei <a title="Blog - Wikipedia" href="http://it.wikipedia.org/wiki/Blog" target="_blank">blog</a> e più in generale dei portali che offrono agli utenti la fruizione di notizie, si è venuta a creare la necessità di definire uno standard per l&#8217;interscambio di informazioni. Il formato <a title="RSS - Wikipedia" href="http://it.wikipedia.org/wiki/RSS" target="_blank"><code>RSS</code></a> è uno standard basato su <a title="XML - Wikipedia" href="http://it.wikipedia.org/wiki/XML" target="_blank"><code>XML</code></a> che permette di definire una serie di regole per la generazione dei contenuti.

Un esempio di utilizzo dei flussi RSS, sono gli aggregatori online di questo formato, in modo da permettere all&#8217;utente di gestire in maniera centralizzata le varie notizie provenienti dai vari portali di informazioni presenti sul web.

Il noto linguaggio di scripting server side `PHP` fornisce tra le sue varie librerie un insieme di funzioni per la manipolazione dei dati nel formato `XML`.

In questo articolo useremo la funzione <a title="PHP: simplexml_load_file - Documentazione" href="http://www.php.net/manual/en/function.simplexml-load-file.php" target="_blank"><code>simplexml_load_file</code></a> che ci permetterà di effettuare facilmente la fase di *parsing* del documento.

Dal momento che lo standard `RSS` deriva dal formato `XML`, la funzione `simplexml_load_file` ci viene incontro per gestire il formato `RSS`.

Va segnalato comunque che esistono varie specifiche del formato RSS, in questo articolo non presenterò le varie specifiche presenti sul web ma mi limiterò a proporre un approccio generale applicabile anche ad un generico file `XML`.

Supponiamo di avere una struttura di un feed RSS del genere:

<pre class="wrap:true lang:xhtml decode:true">&lt;?xml version="1.0" encoding="ISO-8859-1"?&gt;
&lt;rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/"&gt;
	&lt;channel&gt;
		&lt;title&gt;Unnikked - Esperienze personali in campo informatico&lt;/title&gt;
		&lt;link&gt;http://unnikked.tk&lt;/link&gt;
		&lt;description&gt;Esperienze personali in campo informatico&lt;/description&gt;
		&lt;language&gt;it&lt;/language&gt;
		&lt;lastBuildDate&gt;13/09/2013 12.46.21&lt;/lastBuildDate&gt;
		&lt;item&gt;
			&lt;title&gt;Come impostare i permessi ai file con &quot;chmod&quot;&lt;/title&gt;
			&lt;link&gt;http://unnikked.tk/permessi-file-chmod/&lt;/link&gt;
			&lt;description&gt;I file e le cartelle in Linux possono avere tre tipi di permessi: lettura (&apos;r&apos;), scrittura (&apos;w&apos;) ed esecuzione (&apos;x&apos;). Ogni permesso puo&apos; essere &quot;attivo&quot; o &quot;inattivo&quot; per ogni categoria...&lt;/description&gt;
			&lt;author&gt;unnikked&lt;/author&gt;
			&lt;pubDate&gt;09/11/2013&lt;/pubDate&gt;
		&lt;/item&gt;
		&lt;item&gt;
			&lt;title&gt;Impara PHP in 5 minuti&lt;/title&gt;
			&lt;link&gt;http://#&lt;/link&gt;
			&lt;description&gt;Girovagando su Stumbleupon mi sono imbattuto in una simpatica pagina su cui e&apos; presente un listato che mostra le caratteristiche del linguaggio PHP 5. L&apos;ho trovato molto utile, sintetico ma...&lt;/description&gt;
			&lt;author&gt;unnikked&lt;/author&gt;
			&lt;pubDate&gt;08/09/2013&lt;/pubDate&gt;
		&lt;/item&gt;
	&lt;/channel&gt;
&lt;/rss&gt;</pre>

Il seguente frammento di codice mostra uno dei tanti modi per gestire il file XML :

<pre class="lang:php decode:true">&lt;?php
$simple = simplexml_load_file('feed.rss');
	echo '&lt;a href="'.$simple-&gt;channel-&gt;link.'"&gt;'.$simple-&gt;channel-&gt;title.'&lt;/a&gt;&lt;br/&gt;&lt;br/&gt;';
	foreach($simple-&gt;channel-&gt;item as $item) {
		echo '&lt;b&gt;&lt;a href="'.$item-&gt;link.'"&gt;'.$item-&gt;title.'&lt;/a&gt;&lt;/b&gt;&lt;br/&gt;';
		echo '&lt;p&gt;'.$item-&gt;description .'&lt;/p&gt;';
		echo '&lt;em&gt;'.$item-&gt;author.'&lt;/em&gt; - '.date("d/m/Y",strtotime((string)($item-&gt;pubDate))) ;
		echo '&lt;br/&gt;&lt;br/&gt;';
	}
?&gt;</pre>

Il metodo `simplexml_load_file` restituisce un oggetto di tipo `<a title="PHP Documentation - SimpleXMLElement" href="http://www.php.net/manual/en/class.simplexmlelement.php" target="_blank">SimpleXMLElement</a>`; tale classe *incapsula* al proprio interno i *nodi* del file `XML` per cui la lettura del metodo è di facile comprensione. Per tanto accedendo ai vari campi della classe (anche in modo gerarchico come si evince dall&#8217;esempio) è possibile attraversare la struttura del file `XML`.

<del>Un esempio di esecuzione dello script è disponibile qui.</del>

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>