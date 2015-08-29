---
title: Il formato JSON
author: unnikked
layout: post
permalink: /il-formato-json/
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:65:"/wp-content/uploads/2013/12/Screenshot-from-2013-12-28-153717.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:65:"/wp-content/uploads/2013/12/Screenshot-from-2013-12-28-153717.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 55
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 2078376286
categories:
  - Programmazione
tags:
  - json
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


<a href="http://json.org/" title="JSON Home Page" target="_blank">JSON</a> (*Javascript Object Notation*) è un formato di interscambio dati leggero. E&#8217; facile da leggere e scrivere per le persone e facile per le macchine da generare e analizzare. E&#8217; basato sulla notazione del <a href="http://javascript.crockford.com/" title="Javascript Programming Language" target="_blank">linguaggio di programmazione Javascript</a>, <a href="http://www.ecma-international.org/publications/files/ecma-st/ECMA-262.pdf" title="Standard ECMA" target="_blank">Standard ECMA-262 terza edizione del Dicembre 1999</a>. JSON è un formato testuale completamente indipendente dal linguaggio usato ma usa convenzioni che sono familiari ai programmatori dei linguaggi della famiglia **C**, includendo **C**, **C++**, **C#**, **Java**, **JavaScript**, **Perl**, **Python** e diversi altri. Queste proprietà rendono JSON un linguaggio ideale per lo scambio di dati.

JSON è basato su due strutture: 

  * Una collezione di coppie *nome/valore*. In vari linguaggi, questo è realizzato tramite un oggetto, record, struttura, dizionario, tabella hash, lista con chiave, o array associativo. 
  * Una lista ordinata di *valori*. Nella maggior parte dei linguaggi, questo è realizzato tramite array, vettore, lista o sequenze.

Queste sono strutture dati universali. Virtualmente tutti i moderni linguaggi di programmazione li supportano. E&#8217; logico pensare che un formato di dato che è interscambiabile tra diversi linguaggi di programmazione è basato su queste strutture.

Un *oggetto* è un insieme non ordinato di coppie nome/valore. Un oggetto inizia con `{` e termina con `}`. Ogni nome è seguito da `:` (due punti) e le coppie nome/valore sono separati da `,` (virgola).

<p align="center">
  <img src="http://www.json.org/object.gif" alt="Oggetto JSON" />
</p>

Un *array* è una collezione ordinata di valore. Un array inizia con `[` e termina con `]`. I valori sono separati da `,` (virgola).

<p align="center">
  <img src="http://www.json.org/array.gif" alt="Array JSON" />
</p>

Un *valore* è una stringa tra doppi apici, o un numero, o vero o falso o null, o un oggetto o un array. Queste strutture possono essere innestate.

<p align="center">
  <img src="http://www.json.org/value.gif" alt="Valore JSON" />
</p>

Una *stringa* è una sequenza di zero o più caratteri <a href="http://it.wikipedia.org/wiki/Unicode" title="Standard Unicode" target="_blank">Unicode</a>, incapsulati fra doppi apici, usando il carattere di escape `` (backslash). Un carattere è rappresentato come un singolo carattere di stringa. Una stringa è molto simile a una stringa di C o Java.

<p align="center">
  <img src="http://www.json.org/string.gif" alt="Stringa JSON" />
</p>

Un numero è molto simile al formato C o Java, ad eccezione che i formati ottale e esadecimale non sono usati.

<p align="center">
  <img src="http://www.json.org/number.gif" alt="Numeri JSON" />
</p>

<p align="center">
  [SALTO] 
  
  <p>
    Ecco un esempio di codice JSON:
  </p>
  
  <pre class="lang:js decode:true " >{
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}</pre>
  
  <p>
    Nei prossimi articoli vedremo come generare, analizzare e gestire del codice JSON tramite i linguaggi di programmazione più comuni.
  </p>
  
  <br />
  
  <div align="center">
    <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
  </div>