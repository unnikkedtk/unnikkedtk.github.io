---
title: SSL gratuito grazie a Cloudflare per abilitare la connessione HTTPS
author: unnikked
layout: post
permalink: /ssl-gratuito-cloudflare-abilitare-https/
dsq_thread_id:
  - 3179668572
categories:
  - Internet
  - Webmaster
tags:
  - CloudFlare
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Il 6 Agosto 2014, Google <a href="http://googlewebmastercentral.blogspot.it/2014/08/https-as-ranking-signal.html" title="HTTPS as a ranking signal" target="_blank">annuncia</a> sul blog googlewebmastercentral che inizierà a prendere in considerazione anche il fattore https per il ranking sul motore di ricerca. 

Il 29 Settembre 2014, Cloudflare annuncia sul suo blog una nuova feature: <a href="https://blog.cloudflare.com/introducing-universal-ssl/" title="Introducing Universal SSL" target="_blank">Universal SSL</a>. 

Per tutti i clienti, Cloudflare fornisce automaticamente e gratuitamente un certificato SSL che opera su tutta la loro rete che accetta le connessioni HTTPS dai domini e <a href="certificato-wildcard-ssl-apache" title="Come configurare un certificato wildcard SSL su Apache" target="_blank">sottodomini</a> degli utenti. I certificati includono una voce per il dominio radice (es. dominio.com) come anche per tutti i sottodomini di primo livello (es. www.esempio.com, blog.esempio.com ecc).

Questa opzione è attiva di default per tutti i clienti. Sono disponibili tre modalità:

  * **Flexible SSL** &#8211; il visitatore vede HTTPS sul sito web, ma non c&#8217;è alcuna connessione SSL tra i server di CloudFlare e il server web di origine. Non è necessario avere un certificato SSL sul server, comunque i visitatori vedranno il sito web come se HTTPS fosse abilitato.
  * **Full SSL** &#8211; il visitatore vede HTTPS sul sito web e c&#8217;è una connessione SSL tra i server di Cloudflare e i server di origine. Si avrà bisogno di avere il proprio certificato SSL, <a href="come-configurare-un-certificato-ssl-su-apache" title="Come configurare un certificato SSL su Apache" target="_blank">è possibile usare anche un certificato SSL self signed</a>.
  * **Full SSL (Strict)** &#8211; il visitatore vede HTTPS sul sito web e c&#8217;è una connessione SSL tra i server di Cloudflare e i server di origine. Si avrà bisogno di avere il proprio certificato SSL. Questo certificato deve essere firmato da una certification authority, deve avere una data di scadenza ed essere assegnato al nome dominio.

Oltre ovviamente alla possibilità di disabilitare tale caratteristica.

Le tre modalità sono riassumibili con la seguente immagine:

<p align="center">
  <img src="https://www.cloudflare.com/images/ssl/ssl.png" />
</p>

Una volta <a href="http://it.hostingertut.ga/post/integrare-cloudflare" title="Come integrare Cloudflare - Hostinger Tutorials" target="_blank">creato e configurato</a> un dominio con Cloudflare, possiamo constatare se il servizio è attivo e scegliere la modalità SSL tramite il menu *&#8220;CloudFlare Settings&#8221;*

<p align="center">
  <img src="/wp-content/uploads/2014/11/Schermata-da-2014-11-01-131805.png" alt="CloudFlare Settings" />
</p>

E scegliere la modalità più consona: 

![Opzioni SSL CloudFlare][1]

Dopo qualche minuto il vostro sito sarà raggiungibile tramite HTTPS, come il mio sito web.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: /wp-content/uploads/2014/11/Schermata-da-2014-11-01-131840.png