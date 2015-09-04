---
title: Crea il tuo blog automatico con IFTTT
author: unnikked
layout: post
permalink: /crea-il-tuo-blog-automatico-con-ifttt/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 1401060375
categories:
  - Internet
  - Webmaster
tags:
  - IFTTT
  - Wordpress
---

Nell&#8217;articolo <a title="Rendi automatiche le tue azioni con If This Then That" href="http://unnikked.tk/automatizza-if-this-then-that/" target="_blank">&#8220;Rendi automatiche le tue azioni con IFTTT&#8221;</a> ho presentato quest utile servizio che permette l&#8217;automatizzazione di azioni che si possono effettuare su internet.

IFTTT è capace di integrarsi anche con un blog WordPress, ragion per cui mi è venuto in mente di sfruttare questo servizio per creare una sorta di blog automatico. L&#8217;idea si basa sul sfruttare un feed RSS catturarne il contenuto e creare un articolo sul blog utilizzando il contenuto del feed.

Sebbene tale pratica sia scorretta eticamente (personalmente trovo sgradevole il &#8220;copia incolla&#8221; dei contenuti&#8221;) potrebbe essere sfruttata per una sorta di archivio personale di un determinato argomento di proprio interesse.

In questo esempio userò <a href="http://bit.ly/YSiSku" target="_blank">Hostinger Italia</a> come piattaforma hosting, e WordPress come piattaforma per creare il blog e per l&#8217;appunto IFTTT per far interagire WordPress con un feed RSS.

Per i meno esperti consiglio la visione del video tutorial da me creato su come installare facilmente WordPress su Hostinger Italia.

Dopo aver creato un account su Hostinger e installato WordPress scegliamo uno o più feed RSS da inserire nel nostro blog.  
Nel mio esempio ho scelto di utilizzare i feed RSS della [NASA][1]. Potrete utilizzare qualsiasi feed RSS nel formato Atom o RSS.

Accediamo alla pagina di IFTTT e cliccliamo su &#8220;Channels&#8221;, attiviamo il canale associato al nostro blog appena creato. Portiamoci sulla icona di [WordPress][2] e accediamo alla sua sezione.

<p style="text-align: center;">
  <img class="aligncenter  wp-image-1014" alt="01_Activate" src="http://unnikked.tk/wp-content/uploads/2013/06/01_Activate.png" width="564" height="261" />
</p>

Clicchiamo su &#8220;Activate&#8221;.

<p style="text-align: center;">
  <img class="aligncenter  wp-image-1015" alt="02_Activate" src="http://unnikked.tk/wp-content/uploads/2013/06/02_Activate.png" width="643" height="361" />
</p>

Inseriamo il link del blog e relativa username e password per permettere a IFTTT di poter accedere al blog (a tal proposito consiglio di creare un utente ad hoc per IFTTT). Clicchiamo infine su &#8220;Activate&#8221;.

Una volta attivato il canale passiamo alla creazione della ricetta, clicchiamo su &#8220;Create&#8221;. Cliccando su &#8220;this&#8221; ci appariranno una serie di canali, clicchiamo su &#8220;Feed&#8221;.

<p style="text-align: center;">
  <img class="aligncenter  wp-image-1016" alt="03_ActivateFeed" src="http://unnikked.tk/wp-content/uploads/2013/06/03_ActivateFeed.png" width="720" height="265" />
</p>

Clicchiamo su &#8220;New feed item&#8221;.

<p style="text-align: center;">
  <img class="aligncenter  wp-image-1017" alt="04_ActivateFeed" src="http://unnikked.tk/wp-content/uploads/2013/06/04_ActivateFeed.png" width="732" height="316" />
</p>

Inseriamo il link al feed RSS da utilizzare e clicchiamo su &#8220;Create Trigger&#8221;.

Ora clicchiamo su &#8220;that&#8221; e scegliamo il canale WordPress.

<p style="text-align: center;">
  <img class="aligncenter  wp-image-1018" alt="05_ActivateWP" src="http://unnikked.tk/wp-content/uploads/2013/06/05_ActivateWP.png" width="712" height="255" />
</p>

Clicchiamo su &#8220;Create Post&#8221;

<img class="aligncenter size-full wp-image-1019" alt="06_ActivateWP" src="http://unnikked.tk/wp-content/uploads/2013/06/06_ActivateWP.png" width="578" height="535" />

Modifichiamo i campi se necessari e clicchiamo su &#8220;Create Action&#8221;. Diamo un nome alla ricetta e clicchiamo su &#8220;Create Recipe&#8221;. Abbiamo creato una ricetta!

Ecco il risultato sul <a href="http://spacenews.p.ht" target="_blank">blog</a>.


 [1]: http://www.nasa.gov/rss/
 [2]: https://ifttt.com/wordpress