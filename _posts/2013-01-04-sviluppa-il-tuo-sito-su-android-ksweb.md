---
title: Sviluppa il tuo sito su Android con KSWEB!
author: unnikked
layout: post
permalink: /sviluppa-il-tuo-sito-su-android-ksweb/
dsq_thread_id:
  - 1008228068
itsec_enable_ssl:
  - 
categories:
  - Android
tags:
  - webmaster
---

In questo articolo vedremo due soluzioni, che ho trovato sul Play Store, che ci permettono di avere un ambiente per sviluppare siti web direttamente sul **tablet** o **smarthpone** Android. In questo articolo parlerò di **KSWEB** scaricabile da <a href="https://play.google.com/store/apps/details?id=ru.kslabs.ksweb&hl=it" target="_blank">qui</a> e, in un prossimo articolo, parlerò di **PAW Server**.

## KSWEB

KSWEB molto semplicemente una volta scaricato installerà automaticamente un server *lighttpd*, *PHP* e *MySQL*. L&#8217;unico neo però è che l&#8217;app è in versione di prova per 5 giorni, dopodiché va comprata. Per testare le potenzialità di questa app ho installato WordPress nella versione 3.5.

![KSWEB Main App][1]</a> 

&nbsp;

Per prima cosa ho installato phpMyAdmin per poter creare un database con il nome &#8220;*wordpress*&#8220;. Clicchiamo su &#8220;*phpMyAdmin*&#8220;; se non è installato si installerà automaticamente altrimenti vi reindirizzerà sul vostro browser. Per creare un database andate su *Database -> Crea *dopo aver ovviamente inserito il nome del database.

<img alt="KSWEB PHPMyAdmin" src="/wp-content/uploads/2013/01/Screenshot_2013-01-04-18-16-40.png" width="300" height="187" />

&nbsp;

Scaricate nella cartella  /*sdcard/htdocs/* il pacchetto che trovate in questa<a href="http://it.wordpress.org/" target="_blank"> pagina</a> e scompattate l&#8217;archivio .zip

Assicuriamoci di aver aperto il server e, da Chrome (o qualsiasi altro browser) portiamoci su questa pagina

<pre class="lang:default highlight:0 decode:true">http://localhost:8080/wordpress-3.5-it_IT/wordpress/</pre>

nel mio caso, potrebbe variare da come viene scompattato l&#8217;archivio.

![KSWEB Installazione WordPress][2]

&nbsp;

Clicchiamo su &#8220;*Crea un file di configurazione*&#8221; e compiliamo i dati con

  * **Nome database:** wordpress
  * **Nome utente:** root
  * **Password:** lasciatela vuota
  * **Host del database:** localhost
  * **Prefisso tabella:** lasciatela così come è

<div>
  cliccate su &#8220;<em>invia</em>&#8220;
</div>

<div>
</div>

<div>
  <p>
    <img alt="KSWEB Form Installazione WordPress" src="/wp-content/uploads/2013/01/Screenshot_2013-01-04-18-20-38.png" />
  </p>
</div>

<div>
  Se tutto è andato a buon fine clicchiamo su &#8220;<em>Esegui e installa</em>&#8221; . Compiliamo il modulo con utente e password e un&#8217; email e clicchiamo su &#8220;<em>Installa WordPress&#8221; </em>per completare l&#8217;installazione.
</div>

<div>
</div>

<div>
  Ed eccomi loggato nel pannello di controllo di WordPress 😀
</div>

<div>
</div>

<div>
  <p>
    <img alt="KSWEB Pannello Admin WordPress" src="/wp-content/uploads/2013/01/Screenshot_2013-01-04-18-23-47.png" />
  </p>
  
  <p>
    L&#8217;ambiente risulta essere stabile senza particolari rallentamenti sul mio tablet. A mio parere è un applicazione valida dal momento che non c&#8217;è bisogno dei permessi di<strong> </strong><span style="text-decoration: underline;"><strong>root</strong></span>!
  </p>
</div>


 [1]: /wp-content/uploads/2013/01/Screenshot_2013-01-04-17-30-51.png
 [2]: /wp-content/uploads/2013/01/Screenshot_2013-01-04-18-18-16.png