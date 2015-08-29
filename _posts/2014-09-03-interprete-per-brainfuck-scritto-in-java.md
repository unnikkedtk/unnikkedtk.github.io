---
title: Un interprete per Brainfuck scritto in Java
author: unnikked
layout: post
permalink: /interprete-per-brainfuck-scritto-in-java/
dsq_thread_id:
  - 2983947099
categories:
  - Java
  - Programmazione
tags:
  - Brainfuck
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Sin da ragazzino mi sono sempre chiesto come si facesse a comandare un computer tramite un linguaggio di programmazione.

Che sia Java, C, Python, PHP o altri, mi ha sempre affascinato il modo in cui un file di testo scritto con un&#8217; opportuna sintassi e una buona dose di coscienza si possa tramutare, quasi per magia, in azioni che un dispositivo elettronico è in grado di eseguire.

Alcuni linguaggi di programmazione sono facili da usare, per la loro proprietà di essere compresi quasi quanto il linguaggio naturale, ma esistono altri, invece, che pur avendo lo stesso potere di espressività alla pari di un qualsiasi linguaggio di alto livello, sono molto difficili da utilizzare. Uno tra questi linguaggi, così detti esoterici, è il <a title="Brainfuck - Wikipedia" href="http://it.wikipedia.org/wiki/Brainfuck" target="_blank">Brainfuck</a> .

Brainfuck è stato creato intorno il 1993 da Urban Müller con lo scopo di essere un linguaggio di programmazione adatto per una <a title="Macchina di Turing - Wikipedia" href="http://it.wikipedia.org/wiki/Macchina_di_Turing" target="_blank">macchina di Turing</a> che potesse disporre di un compilatore molto piccolo.

Il linguaggio dispone di otto istruzioni elementari, di cui due usate per l&#8217;I/O.  


<div class="su-table">
  <table>
    <tr>
      <th>
        Carattere
      </th>
      
      <th align="left">
        Significato
      </th>
    </tr>
    
    <tr>
      <td>
        >
      </td>
      
      <td style="text-align: left">
        incrementa il puntatore
      </td>
    </tr>
    
    <tr>
      <td>
        <
      </td>
      
      <td style="text-align: left">
        decrementa il puntatore
      </td>
    </tr>
    
    <tr>
      <td>
        +
      </td>
      
      <td style="text-align: left">
        incrementa il byte indirizzato dal puntatore
      </td>
    </tr>
    
    <tr>
      <td>
        &#8211;
      </td>
      
      <td style="text-align: left">
        decrementa il byte indirizzato dal puntatore
      </td>
    </tr>
    
    <tr>
      <td>
        .
      </td>
      
      <td style="text-align: left">
        output dal byte indirizzato dal puntatore (ASCII)
      </td>
    </tr>
    
    <tr>
      <td>
        ,
      </td>
      
      <td style="text-align: left">
        input al byte indirizzato dal puntatore (ASCII)
      </td>
    </tr>
    
    <tr>
      <td>
        [
      </td>
      
      <td style="text-align: left">
        salta in avanti all’istruzione dopo il corrispondente ] se il byte indirizzato dal puntatore è zero
      </td>
    </tr>
    
    <tr>
      <td>
        ]
      </td>
      
      <td style="text-align: left">
        salta indietro all’istruzione dopo il corrispondente [ se il byte indirizzato dal puntatore non è zero
      </td>
    </tr>
  </table>
</div>

Data la specifica del linguaggio scrivere il relativo interprete per Brainfuck è banale.

<pre class="lang:java decode:true " >import java.util.*;
public class Brainfuck {
    private Scanner sc = new Scanner(System.in);
    private final int LENGTH = 65535;
    private byte[] mem = new byte[LENGTH];
    private int dataPointer;

    public void interpret(String code) {
        int l = 0;
        for(int i = 0; i &lt; code.length(); i++) {
            if(code.charAt(i) == '&gt;') {
                dataPointer = (dataPointer == LENGTH-1) ? 0 : dataPointer + 1;
            } else if(code.charAt(i) == '&lt;') {
                dataPointer = (dataPointer == 0) ? LENGTH-1 : dataPointer - 1;
            } else if(code.charAt(i) == '+') {
                mem[dataPointer]++;
            } else if(code.charAt(i) == '-') {
                mem[dataPointer]--;
            } else if(code.charAt(i) == '.') {
                System.out.print((char) mem[dataPointer]);
            } else if(code.charAt(i) == ',') {
                mem[dataPointer] = (byte) sc.next().charAt(0);
            } else if(code.charAt(i) == '[') {
                if(mem[dataPointer] == 0) {
                    i++;
                    while(l &gt; 0 || code.charAt(i) != ']') {
                        if(code.charAt(i) == '[') l++;
                        if(code.charAt(i) == ']') l--;
                        i++;
                    }
                }
            } else if(code.charAt(i) == ']') {
                if(mem[dataPointer] != 0) {
                    i--;
                    while(l &gt; 0 || code.charAt(i) != '[') {
                        if(code.charAt(i) == ']') l++;
                        if(code.charAt(i) == '[') l--;
                        i--;
                    }
                    i--;
                }
            }
        }
    }

    public static void main(String[] args) {
        new Brainfuck().interpret(args[0]);
    }
}</pre>

Il codice sorgente proposto assume che il programma dato in input sia corretto sintatticamente. La memoria è rappresentato da un array di `byte` come richiesto dalla specifica. La variabile di istanza `dataPointer` memorizza la cella di memoria puntata (manipolata dalle istruzioni + &#8211; > <).

Bisogna prestare attenzione alle istruzioni di salto (branching) [ e ].

Ogni qualvolta si incontra l&#8217;istruzione [ bisogna trovare la corrispondente istruzione di chiusura ] 

<!--nextpage-->

## Da Brainfuck a Java

Tradurre un codice sorgente in Brainfuck in un codice sorgente Java è anche un procedimento molto facile da eseguire.

Ogni istruzione Brainfuck corrisponde ad un istruzione di un linguaggio ad alto livello, come Java, secondo lo schema:

<div class="su-table">
  <table>
    <tr>
      <th>
        Brainfuck
      </th>
      
      <th style="text-align: left">
        Java
      </th>
    </tr>
    
    <tr>
      <td>
        >
      </td>
      
      <td style="text-align: left">
        ptr++;
      </td>
    </tr>
    
    <tr>
      <td>
        <
      </td>
      
      <td style="text-align: left">
        ptr–;
      </td>
    </tr>
    
    <tr>
      <td>
        +
      </td>
      
      <td style="text-align: left">
        mem[ptr]++;
      </td>
    </tr>
    
    <tr>
      <td>
        &#8211;
      </td>
      
      <td style="text-align: left">
        mem[ptr]–;
      </td>
    </tr>
    
    <tr>
      <td>
        .
      </td>
      
      <td style="text-align: left">
        System.out.print((char) mem[ptr]);
      </td>
    </tr>
    
    <tr>
      <td>
        ,
      </td>
      
      <td style="text-align: left">
        mem[ptr] = (byte) in.next().charAt(0);
      </td>
    </tr>
    
    <tr>
      <td>
        [
      </td>
      
      <td style="text-align: left">
        while(mem[ptr] != 0) {
      </td>
    </tr>
    
    <tr>
      <td>
        ]
      </td>
      
      <td style="text-align: left">
        }
      </td>
    </tr>
  </table>
</div>

Anche in questo caso il codice Java è molto semplice

<pre class="lang:java decode:true " >public class BrainfuckToJava {
	private StringBuilder source;
	private int ident;
	
	public BrainfuckToJava(String code) {
		source = new StringBuilder();
		source.append("import java.util.Scanner;\n");
		source.append("public class BFConverted {\n");
		source.append("\tprivate static int ptr;\n");
		source.append("\tprivate static byte[] mem = new byte[65535];\n");
		source.append("\tprivate static Scanner in = new Scanner(System.in);\n");
		source.append("\tpublic static void main(String[] args) {\n");
		convert(code, source);
		source.append("\t}\n");
		source.append("}\n");
		System.out.println(source.toString());
	}
	
	private void convert(String code, StringBuilder source) {
		for(int i = 0; i &lt; code.length(); i++) {
			for(int t = 0; t &lt; ident; t++) source.append('\t');
			switch(code.charAt(i)) {
				case '&gt;': source.append("\t\tptr++;\n"); break;
				case '&lt;': source.append("\t\tptr--;\n"); break;
				case '+': source.append("\t\tmem[ptr]++;\n"); break;
				case '-': source.append("\t\tmem[ptr]--;\n"); break;
				case '.': source.append("\t\tSystem.out.print((char) mem[ptr]);\n"); break;
				case ',': source.append("\t\tmem[ptr] = (byte) in.next().charAt(0);\n"); break;
				case '[': source.append("\t\twhile(mem[ptr] != 0) {\n"); ident++; break;
				case ']': source.append("\t\t}\n"); break;
				default: continue;
			}
			if(i+1 &lt; code.length() && code.charAt(i+1) == ']') ident--;
		}
	}
	
	public static void main(String[] args) {
		new BrainfuckToJava(args[0]);
	}
}</pre>

Bisogna prestare attenzione che la <a title="JVM - Wikipedia" href="http://it.wikipedia.org/wiki/Macchina_virtuale_Java" target="_blank">Java Virtual Machine</a> non permette <a title="StackOverflow" href="http://stackoverflow.com/a/2408005" target="_blank">metodi che abbiano una dimensione maggiore di 64KB</a> per tanto, lunghissimi programmi scritti in Brainfuck potrebbero non essere eseguiti dalla JVM, sebbene la traduzione sia corretta.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>