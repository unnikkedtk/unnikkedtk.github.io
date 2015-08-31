---
title: Come connettersi al proprio VPS tramite SSH
author: unnikked
layout: post
permalink: /come-connettersi-al-proprio-vps/
dsq_thread_id:
  - 1078885763
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
  - Ubuntu
tags:
  - VPS
---

Nell&#8217; articolo introduttivo abbiamo visto a cosa serve un VPS e come ottenerlo, se siete riusciti ad ottenere un account di prova oppure avete acquistato un pacchetto dai vari siti elencati è ora giunto il momento di connettersi al server. Ma come facciamo a connetterci se il computer è lontano da noi? A questo &#8220;problema&#8221; ci viene incontro il protocollo **SSH**.

SSH è un moderno protocollo di rete che permette di stabilire una sessione remota cifrata tramite interfaccia a riga di comando con un altro host di una rete informatica, questo protocollo va a sostituire i vecchi **telnet**, **rlogin** e l&#8217;ancora usato **ftp**.

Nella maggior parte delle distribuzioni è presente un pacchetto chiamato **OpenSSH** che racchiude in se tutti gli strumenti necessari per fa comunicare due computer tramite una connessione internet.

Per connettersi ad un server remoto basta digitare da terminale :

```bash
ssh nomeutente@indirizzoipdellamacchina
```

dove *nomeutente* è il nome dell&#8217;account su cui autenticarsi (di solito è **root** ma è sconsigliato usarlo come profilo principale) e *indirizzoipdellamacchina* è l&#8217;ip della macchina oppure può essere anche un nome dominio del tipo *example.com*. Una volta lanciato il comando dopo pochi secondi ci verrà chiesto la password.  
Queste informazioni di solito vengono comunicate tramite email oppure basti andare sul pannello di controllo del fornitore del servizio e trovare nell&#8217;apposita sezione i dati necessari.

Una volta autenticati è come se fossimo a tutti gli effetti seduti davanti al computer, per cui possiamo avviare programmi e usare i comandi tipici della shell linux.

In questo pacchetto ci sono anche altri comandi da utilizzare che ci facilitano alcuni compiti.

## Copiare file tra host

Il comando **scp** permette di copiare un file da un host locale a uno remoto con questa sintassi:

<pre class="lang:default highlight:0 decode:true ">scp percorsoFileLocale nomeUtenteRemoto@indirizzoIP:PercorsoDestinazioneRemota</pre>

Dove *percorsoFileLocale* è il percorso del file locale che si vuole copiare sulla macchina remota, *nomeUtenteRemoto* è il nome dell&#8217;utente con cui autenticarsi, *indirizzoIP* come sopra e *PercorsoDestinazioneRemota* è il percorso di destinazione in cui si vuole copiare il file.

Una volta lanciato il comando vi sarà chiesto di inserire la password di *nomeUtenteRemoto* e comparirà una barra di avanzamento che ci indica la percentuale e il tempo rimanente al trasferimento del file.

Per il viceversa, cioè trasferire un file remoto su un computer locale, bisogna usare il comando nel seguente modo:

<pre class="lang:default highlight:0 decode:true ">scp nomeUtenteRemoto@indirizzoIP:PercorsoFileRemoto PercorsoDestinazioneLocale</pre>

<div class="su-tabs su-tabs-style-default" data-active="1">
  <div class="su-tabs-nav">
    <span class="" data-url="" data-target="blank">Attenzione</span>
  </div>
  
  <div class="su-tabs-panes">
    <div class="su-tabs-pane su-clearfix">
      Il comando scp non può essere usato per trasferire file tra computer remoti, ma solo tra un computer locale ed uno remoto.
    </div>
  </div>
</div>

## Eseguire un comando su un computer remoto

Per eseguire un singolo comando su un computer remoto, usare il comando **ssh** secondo il seguente modello:

<pre class="lang:default highlight:0 decode:true ">ssh nomeutente@indirizzoIP</pre>

## Usare un programma grafico sul computer remoto

È possibile avviare un&#8217;applicazione grafica sul computer remoto e visualizzarla sul computer locale, grazie a una tecnica chiamata** X11 Forwarding**. Gli unici requisiti del computer locale sono una connessione abbastanza veloce con il computer remoto e l&#8217;installazione di base del server **X11**, mentre non ci sono requisiti particolari per il computer remoto. Potrebbe inoltre essere necessaria l&#8217;installazione del pacchetto **xauth** sul computer locale.

Prima di tutto è necessario autorizzare il server grafico del computer remoto (con server ssh attivo) ad accettare connessioni in entrata dal computer locale, quindi sul computer remoto aprire una finestra di terminale e digitare:

<pre class="lang:default highlight:0 decode:true ">xhost +</pre>

<div class="su-tabs su-tabs-style-default" data-active="1">
  <div class="su-tabs-nav">
    <span class="" data-url="" data-target="blank">Attenzione</span>
  </div>
  
  <div class="su-tabs-panes">
    <div class="su-tabs-pane su-clearfix">
      Se l&#8217;esecuzione di questo comando dovesse fallire sarà necessario installare il pacchetto xauth.
    </div>
  </div>
</div>

Successivamente per collegarsi al computer remoto digitare:

<pre class="lang:default highlight:0 decode:true ">ssh -X utenteremoto@computerremoto</pre>

Per chi volesse approfondire di più l&#8217;argomento consiglio questa <a href="http://wiki.ubuntu-it.org/InternetRete/DesktopRemoto/OpenSsh" target="_blank">guida</a> della wiki di Ubuntu.