---
title: Come ottenere e configurare un server VPS
author: unnikked
layout: post
permalink: /come-ottenere-e-configurare-un-server-vps/
dsq_thread_id:
  - 1073605152
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
tags:
  - VPS
---

Con questo articolo, ho in mente di aprire una serie di guide su come poter utilizzare un server VPS.

Gli articoli pubblicati recentemente:

  * <a title="Installare un server vnc su Linux" href="http://unnikked.tk/installare-server-vnc-su-linux/" target="_blank">Installare un server vnc su Linux</a>
  * <a title="Impostare un server SFTP su Ubuntu" href="http://unnikked.tk/impostare-un-server-sftp-su-ubuntu/" target="_blank">Impostare un server SFTP su Ubuntu</a>

possono essere considerati facente parte di questa serie.

In questa pubblicazione, inizierò con il comunicarvi alcuni servizi, da me testati e usati, per cui poter ordinare o eventualmente ricevere un account di prova o in alcuni casi anche un account gratuito per un tempo illimitato:

  * <a href="http://chunkhost.com/r/unnikked" target="_blank">ChunkHost</a>
  * <a href="https://www.digitalocean.com" target="_blank">DigitalOcean</a>
  * <a href="http://account.renderhosting.net/whmcs/aff.php?aff=064" target="_blank">RenderHosting</a>
  * <a href="http://www.host1free.com/" target="_blank">Host1Free</a>

Ho avuto modo di usare tali servizi dal momento che c&#8217;è stato un periodo in cui rilasciavano account gratuiti. ChunkHost attualmente tramite l&#8217;account di Facebook dà la possibilità di ottenere un *chunk* gratuito, ma i tempi di attesa spesso solo lunghi, dato le richieste, ma tentare non nuoce.

### ChunkHost

<a href="http://chunkhost.com/r/unnikked" target="_blank">ChunkHost</a> offre server VPS gratuitamente e con un sistema di *refeerall*, ovvero per i clienti che riuscite a riferire al servizio, dà risorse aggiuntive.

### DigitalOcean

<a href="https://www.digitalocean.com" target="_blank">DigitalOcean</a>, a differenza degli altri servizi, offre VPS tramite tecnologia Cloud, ovvero permette di avere un server VPS *on demand* a tempo e con risorse hardware specifiche; la tariffa a consumo è oraria e permette di salvare le immagini di un server qualora lo si volesse disattivare.

### RenderHosting

<a href="http://account.renderhosting.net/whmcs/aff.php?aff=064" target="_blank">RenderHosting</a> l&#8217;ho conosciuto tramite un offerta per un piano di 256MB + swap 10GB di spazio e 100GB di traffico a 1$ mensile. Offre svariati piani per ogni esigenza a prezzi contenuti (nello specifico i piani **BargainVM VPS Servers**).

### Host1Free

<a href="http://www.host1free.com/" target="_blank">Host1Free</a> l&#8217;ho scoperto grazie ad un periodo in cui distribuivano account gratis; ora invece è possibile ottenerne uno mettendo un &#8220;Mi Piace&#8221; alla loro pagina Facebook, periodicamente estraggono un vincitore e regolarmente pubblicano anche dei contest dove in palio offrono al vincitore un account gratuito a tempo indeterminato.

Inoltre, girando in rete, si possono trovare forum in cui gli utenti pubblicano link per account di prova (dalle 4 ore fino ad un mese) o di codici per sconti e tanto altro. La comunità più attiva in questo campo è quella di <a href="https://freevps.us/" target="_blank">freevps.us</a>.

## Ma a cosa serve un VPS?

VPS sta per *Virtual Private Server*, in sintesi è un computer virtuale che gira su computer più potente sui cui girano diverse macchine virtuali. Questa soluzione è adottata per rendere disponibili le risorse di un computer molto potente a diversi utenti che lo possono usare per svariati scopi.  
A titolo di esempio con un VPS si può creare un sito web completo in cui l&#8217;utente ha pieno controllo delle risorse e delle configurazioni software, nel caso in cui si abbia bisogno di un particolare modulo per PHP o un particolare gestore database; può essere usato per creare server multiplayer per giochi, per creare la propria posta elettronica, per creare la propria connessione VPN e tanto altro; può essere utilizzato anche da computer remoto, tramite il protocollo VNC, quindi è possibile usare i programmi che si usano quotidianamente su Ubuntu come Chrome, gEdit, ecc ecc.  
Ovviamente per l&#8217;uso che se ne vuole fare bisogna scegliere un VPS con le adeguate risorse.  
Vedremo nel corso dei prossimi articoli, una volta ottenuto un account presso qualsiasi fornitore di VPS, come collegarci e gestirlo.
