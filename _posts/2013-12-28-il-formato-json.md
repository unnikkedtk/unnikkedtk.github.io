---
title: Il formato JSON
author: unnikked
layout: post
permalink: /il-formato-json/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 2078376286
categories:
  - Programmazione
tags:
  - json
---

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
  
  <p>
    Ecco un esempio di codice JSON:
  </p>
  
```json
{
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
}
```
  
  <p>
    Nei prossimi articoli vedremo come generare, analizzare e gestire del codice JSON tramite i linguaggi di programmazione più comuni.
  </p>