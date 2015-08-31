---
title: LaTeX su Android con TeXPortal
author: unnikked
layout: post
permalink: /latex-su-android-con-texportal/
dsq_thread_id:
  - 994867389
itsec_enable_ssl:
  - 
categories:
  - Android
---

In un <a title="Plugin LaTeX per Sublime Text 2" href="plugin-latex-per-sublime-text-2/" target="_blank">precedente</a> articolo parlai della possibilità di installare gli strumenti necessari per poter scrivere documenti professionali in LaTeX. Girovagando per il **Play Store **del robottino verde mi sono imbattuto in questa fantastica app <span style="text-decoration: underline;">gratuita</span>: **TeXPortal**

<p align="center"><img src="/wp-content/uploads/2012/12/unnamed.png" alt="TeXPortal" width="124" height="124" /></p>


Questa app sostanzialmente permette di compilare documenti scritti in LaTeX sul proprio dispositivo android senza ulteriori servizi estern. Ma come fa? Una volta installata, l&#8217;app al momento opportuno scarica i pacchetti necessari già compilati per l&#8217;architettura ARM. Tutto ciò non ha bisogno dei permessi di **root**!

Che dire, un lavoro eccezionale quello di *<a href="https://github.com/anhoavu" target="_blank">anhoavu</a> *che ha reso disponibile il progetto anche su **GitHub**.

Ma vediamo insieme ora le caratteristiche e una piccola guida introduttiva su come usare questa fantastica applicazione.

Le caratteristiche dell&#8217;app le elenco qui di seguito:

  * Supporta il testo TeX e LaTeX (con output sia in DVI e PDF) la compilazione dei testi è effettuata tramite gli strumenti standard di (La)TeX (tex, pdftex,  bibtex, makeindex, metafont, &#8230;)
  * Permette l&#8217;installazione di più di 2000 pacchetti disponibili su **CTAN **(Comprehensive TeX Archive Network)
  * Risolve gli errori (suggerisce i pacchetti mancanti, genera automaticamente i font mancanti, etc )
  * Non necessita di root
  * Lavora offline (ma richiede l&#8217;accesso ad internet per scaricare i pacchetti necessari)

Per installare l&#8217;app basta andare sul Play Store di Google e cercare *TeXPortal *oppure <a href="https://play.google.com/store/apps/details?id=lah.texportal&hl=it" target="_blank">qui</a>. Purtroppo l&#8217;app non dispone di un editor integrato, ma possiamo sempre usare un editor di testo qualsiasi disponibile sul market, personalmente consiglio <a title="DroidEdit – editor di codice sorgente per Android" href="http://unnikked.tk/droidedit-editor-per-android/" target="_blank">DroidEdit</a>. Una volta aperta l&#8217;app ci troveremo davanti una schermata del genere.

![TeXPortal][1]

L&#8217;app nell&#8217;uso è molto intuitiva in particolare troveremo in alto a destra la voce &#8220;*Manage*&#8221; per installare manualmente pacchetti, sopra il tasto *Compile *troviamo il campo per selezionare il file da compilare e a destra del pulsante *Compile *troviamo un menu dropdown per selezionare il formato output tra

  * (DVI) Plain TeX
  * (PDF) Plain TeX
  * (DVI) LaTeX
  * (PDF) LaTeX
  * BibTeX
  * MakeIndex

![][2]

Ora non resta che scrivere qualcosa in LaTeX e compilarlo. Provare per credere.


 [1]: /wp-content/uploads/2012/12/Screenshot_2012-12-27-11-24-14.png
 [2]: /wp-content/uploads/2012/12/Screenshot_2012-12-27-11-24-48.png