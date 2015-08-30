---
title: Plugin LaTeX per Sublime Text 2
author: unnikked
layout: post
permalink: /plugin-latex-per-sublime-text-2/
dsq_thread_id:
  - 987363975
itsec_enable_ssl:
  - 
categories:
  - Programmazione
---

Chi di voi non conosce <a href="http://it.wikipedia.org/wiki/LaTeX" target="_blank">LaTex</a>? **LaTeX**, sviluppato da [Leslie Lamport][1], è una estensione di **TeX**, linguaggio di markup ideato da <a href="http://it.wikipedia.org/wiki/Donald_Knuth" target="_blank">Donald Knuth</a> per creare documenti tipografici di alta qualità spesso usato in ambito scientifico-matematico.

In questo articolo non illustrerò come usare LaTeX ma, piuttosto, come configurare un ambiente di sviluppo facile da usare su Linux. Questa configurazione si basa su Linux Mint 14 e può essere applicata anche su Ubuntu e derivate Debian. Di più, con qualche piccola accortezza può essere applicata non solo a qualsiasi distribuzione Linux, ma anche su altre piattaforme come Windows e MacOS X, dal momento che Sublime Tex 2 è un programma multipiattaforma.

Per prima cosa iniziamo con l&#8217;installare Sublime Text 2, lo faremo comodamente dai repository di [**Webupd8**][2]

```
sudo apt-get update
sudo apt-get install sublime-text
```

Ora installiamo i pacchetti texlive e texlive-full per la nostra distribuzione, da terminale

<pre class="lang:sh decode:true">sudo apt-get install texlive
sudo apt-get install texlive-full</pre>

Arrivato a questo punto installiamo un plugin per Sublime Text 2 che ci aiuterà a installare senza troppe difficoltà il plugin per LaTeX sul nostro editor, scaricate il pacchetto **[Package Control][3]**. Questo pacchetto vi aiuterà nell&#8217; installazione dei vari plugin presenti per LaTeX. Noi procederemo per l&#8217;installazione manuale di Package Control, scaricatelo dalla sezione *&#8220;Installation&#8221;* del sito e scaricate il pacchetto dal punto 3. Una volta scaricato il pacchetto lo scompattiamo, rinominiamo la cartella in *Package Control*e la copiamo in */home/tuonome/.config/sublime-text-2/Packages* (per vedere i file/cartelle nascosti premete **Ctrl + H** nel file manager) avviate Sublime Tex 2 e sotto la voce *Preferences* troverete l&#8217;opzione *Package Controll.*

Una volta riavviato Sublime Text 2, installiamo il plugin:

  * Clicchiamo su **&#8220;Preferences&#8221; &#8211; > &#8220;Package Controll&#8221; .** Dal menù a tendina che appare selezioniamo la voce **&#8220;Install Repository&#8221;** inseriamo il seguente link `https://github.com/SublimeText/LaTeXTools` nella barra che apparirà sotto e diamo invio.
  * Ora andiamo di nuovo su **&#8220;Preferences&#8221; &#8211; > &#8220;Package Controll&#8221;** e selezioniamo invece questa volta la voce **&#8220;Install Package&#8221;** cerchiamo la voce *LaTeXTools* clicchiamoci di sopra e il gioco è fatto ! Il plugin si installerà magicamente per voi 😀

Note:

  * per compilate un documento bisogna premere **Ctrl-b**
  * il plug in è compatibile con il visualizzatore PDF **Evince**
  * per ulteriori informazioni su come usare questo plugin visitate la repository su git-hub al seguente link : <https://github.com/SublimeText/LaTeXTools>

 [1]: http://it.wikipedia.org/wiki/Leslie_Lamport "Leslie Lamport"
 [2]: http://www.webupd8.org/
 [3]: http://wbond.net/sublime_packages/package_control