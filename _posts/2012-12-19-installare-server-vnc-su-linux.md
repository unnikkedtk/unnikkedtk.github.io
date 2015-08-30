---
title: Installare un server vnc su Linux
author: unnikked
excerpt: 'Aggiornamento articolo: Connessione criptata tramite SSH.'
layout: post
permalink: /installare-server-vnc-su-linux/
dsq_thread_id:
  - 979707469
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
tags:
  - VNC
  - VPS
---

Vi sarà mai capitato di avere la necessità di controllare un computer remoto per aiutare un amico o semplicemente per controllare il proprio pc di casa per controllare lo stato dei torrent o di un upload importante? Oppure semplicemente avete un **<a href="http://it.wikipedia.org/wiki/Virtual_private_server" target="_blank">VPS</a>** ma ancora non avete la dimestichezza necessaria per abbandonare completamente l&#8217;ambiente grafico? Se la risposta a questa domanda è sì allora la risposta è di usare un **server vnc**.  

> **Virtual Network Computing** (o **VNC**) sono software di controllo remoto e servono per amministrare il proprio computer a distanza: installando un server VNC sulla propria macchina ed impostando una opportuna password si consente ai client VNC di ricevere una immagine dello schermo e di inviare input di tastiera e mouse al computer server tramite una connessione remota. In pratica si può gestire il computer server da un&#8217;altra postazione, come se fosse il proprio computer fisico (applicazione di desktop remoto).

La soluzione adatta nel nostro caso è **vncserver**. Questo pacchetto serve, appunto, per installare sulla propria macchina un server *vnc* su cui poi andremo a collegarci tramite un client.

<p align="center">
  <a href="http://unnikked.tk/wp-content/uploads/2012/12/vncserver_salto.jpg"><img class="aligncenter size-full wp-image-178" title="vncserver" alt="vncserver" src="http://unnikked.tk/wp-content/uploads/2012/12/vncserver_salto.jpg" width="300" height="299" /></a>
</p>

Da questo momento in poi assumo che stiate usando una distribuzione **Debian** o derivata come **Ubuntu**.


Iniziamo con l&#8217;aggiornare i repository della distribuzione e la distribuzione stessa (se non si è *root* anteporre a tutte le istruzioni il comando *sudo*)

```
apt-get update
apt-get upgrade
```

Ora installiamo i pacchetti necessari alla configurazione del server

<pre class="lang:default highlight:0 decode:true">
apt-get install tightvncserver xterm fluxbox iceweasel</pre>

e i font necessari per la visualizzazione corretta dei caratteri

<pre class="lang:default highlight:0 decode:true">
apt-get install xfonts-base xfonts-75dpi xfonts-100dpi</pre>

ora portiamoci sulla home dell'utente creiamo la cartella *.vnc* e posizioniamoci su di essa

<pre class="lang:default highlight:0 decode:true">cd ~
mkdir .vnc
cd .vnc</pre>


Ora creiamo un file *xstartup* con **vim** o **nano** o qualsiasi altro editor di testi e scriviamo in questo la seguente linea

<pre class="lang:default decode:true">fluxbox</pre>

ora diamo i permessi esecutivi al file

<pre class="lang:default decode:true">chmod +x xstartup</pre>

e lanciamo il server

<pre class="lang:default decode:true">vncserver</pre>

Se tutto è andato a buon fine il server partirà e si metterà in *listening* sulla porta **5901** (il programma segnala :1). Al primo avvio inoltre vi verrà chiesto di inserire la password per il server.

Per chiudere il server basta digitare

<pre class="lang:default highlight:0 decode:true">vncserver -kill :numeroporta</pre>

dove *numeroporta*sta per il numero usato per avviare il server (di default 1).

Per potersi collegare al server è necessario usare qualsiasi *client vnc* inserendo come porta quella impostata all&#8217;avvio del programma (Default :1) e come password quella impostata.

Per le distribuzioni Ubuntu è presente nei repository il client **vncviewer**, per installarlo:

<pre class="lang:default highlight:0 decode:true">apt-get install vnc-java</pre>

per collegarsi al server basta digitare nel terminale

<pre class="lang:default highlight:0 decode:true">vncviewer ipserver:numeroporta</pre>

dove **ipserver** sta per l&#8217;ip associato alla macchina oppure un nome **dominio.com** e infine *numeroporta* come spiegato sopra.

Verrà aperta una finestra in cui sarà chiesta la password.

Inoltre per completezza vi segnalo anche il comando per cambiare eventualmente la password impostata al primo avvio:

<pre class="lang:default decode:true">vncpasswd</pre>

Vi guiderà nella sostituzione della password.


### Connessione criptata tramite SSH

E&#8217; possibile instaurare una connessione *ssh* tra il server *vnc* e la vostra macchina tramite il comando:

<pre class="lang:sh decode:true">ssh -f -N -L 5901:localhost:5901 ipserver:numeroporta</pre>

Successivamente riavviate il server vnc e collegatevi ad esso con qualsiasi client vnc.


### Cambiare risoluzione dello schermo

Di default il server vnc apre una sessione con la risoluzione di default che è `800x600`, durante la fase di avvio è possibile specificare la risoluzione dello schermo virtuale:

<pre class="lang:sh decode:true " >vncserver :1 -geometry widthxheight -depth 24
</pre>

dove `width` e `height` sono rispettivamente larghezza e altezza della risoluzione espressi in pixel.