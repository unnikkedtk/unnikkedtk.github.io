---
title: Plugin LaTeX per Sublime Text 2
author: unnikked
layout: post
permalink: /plugin-latex-per-sublime-text-2/
dsq_thread_id:
  - 987363975
gadgetry_post_viewed:
  - 106
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:48:"/wp-content/uploads/2012/12/sublime-text-2.0.png";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:0:"";s:24:"gadgetry_thumbnail_image";s:48:"/wp-content/uploads/2012/12/sublime-text-2.0.png";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
itsec_enable_ssl:
  - 
categories:
  - Programmazione
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Chi di voi non conosce<a href="http://it.wikipedia.org/wiki/LaTeX" target="_blank"> LaTex</a> ?** LaTeX**, sviluppato da [Leslie Lamport][1], è una estensione di **TeX**, linguaggio di markup ideato da <a href="http://it.wikipedia.org/wiki/Donald_Knuth" target="_blank">Donald Knuth</a> per creare documenti tipografici di alta qualità spesso usato in ambito scientifico-matematico.

In questo articolo non illustrerò come usare LaTeX ma, piuttosto, come configurare un ambiente di sviluppo facile da usare su Linux. Questa configurazione si basa su Linux Mint 14 e può essere applicata anche su Ubuntu e derivate Debian. Di più, con qualche piccola accortezza può essere applicata non solo a qualsiasi distribuzione Linux, ma anche su altre piattaforme come Windows e MacOS X, dal momento che Sublime Tex 2 è un programma multipiattaforma.

Per prima cosa iniziamo con l&#8217;installare Sublime Text 2, lo faremo comodamente dai repository di [**Webupd8**][2]

<pre class="lang:sh decode:true">sudo add-apt-repository ppa:webupd8team/sublime-text-2
sudo apt-get update
sudo apt-get install sublime-text</pre>

Ora installiamo i pacchetti texlive e texlive-full per la nostra distribuzione, da terminale

<pre class="lang:sh decode:true">sudo apt-get install texlive
sudo apt-get install texlive-full</pre>

Arrivato a questo punto installiamo un plugin per Sublime Text 2 che ci aiuterà a installare senza troppe difficoltà il plugin per LaTeX sul nostro editor, scaricate il pacchetto **[Package Control][3]**. Questo pacchetto vi aiuterà nell&#8217; installazione dei vari plugin presenti per LaTeX. Noi procederemo per l&#8217;installazione manuale di Package Control, scaricatelo dalla sezione  *&#8220;Installation&#8221; *del sito e scaricate il pacchetto dal punto 3. Una volta scaricato il pacchetto lo scompattiamo, rinominiamo la cartella in *Package Control *e la copiamo in */home/tuonome/.config/sublime-text-2/Packages *(per vedere i file/cartelle nascosti premete **Ctrl + H **nel file manager) avviate Sublime Tex 2 e sotto la voce *Preferences *troverete l&#8217;opzione *Package Controll.*

Una volta riavviato Sublime Text 2, installiamo il plugin:

  * Clicchiamo su **&#8220;Preferences&#8221; &#8211; > &#8220;Package Controll&#8221; . **Dal menù a tendina che appare selezioniamo la voce **&#8220;Install Repository&#8221; **inseriamo il seguente link <span class="lang:default highlight:0 decode:true  crayon-inline ">https://github.com/SublimeText/LaTeXTools</span>  nella barra che apparirà sotto e diamo invio.
  * Ora andiamo di nuovo su **&#8220;Preferences&#8221; &#8211; > &#8220;Package Controll&#8221; **e selezioniamo invece questa volta la voce **&#8220;Install Package&#8221; **cerchiamo la voce *LaTeXTools *clicchiamoci di sopra e il gioco è fatto ! Il plugin si installerà magicamente per voi 😀

Note:

  * per compilate un documento bisogna premere **Ctrl-b **
  * il plug in è compatibile con il visualizzatore PDF** Evince**
  * per ulteriori informazioni su come usare questo plugin visitate la repository su git-hub al seguente link : <https://github.com/SublimeText/LaTeXTools>

[<img class="aligncenter size-full wp-image-75" title="Sublime_Text_Logo" src="http://unnikked.tk/wp-content/uploads/2012/12/Sublime_Text_Logo.png" alt="" width="256" height="256" />][4]

&nbsp;

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: http://it.wikipedia.org/wiki/Leslie_Lamport "Leslie Lamport"
 [2]: http://www.webupd8.org/
 [3]: http://wbond.net/sublime_packages/package_control
 [4]: http://unnikked.tk/wp-content/uploads/2012/12/Sublime_Text_Logo.png