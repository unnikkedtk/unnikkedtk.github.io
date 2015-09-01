---
title: Come cambiare la porta di connessione di SSH
author: unnikked
layout: post
permalink: /cambiare-porta-connessione-ssh/
dsq_thread_id:
  - 1299035713
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
tags:
  - VPS
---

La porta di default di [SSH][1] è la 22. Qualora si abbia la necessità di cambiarla è possibile farlo andando a modificare un file di configurazione.

Otteniamo i privilegi di root, oppure eseguiamo i seguenti comandi tramite `sudo`. Andremo a modificare il file `/etc/ssh/sshd_config`. Apriamolo con l&#8217;editor di testi preferito:

<pre class="lang:sh decode:true">vim /etc/ssh/sshd_config</pre>

e andiamo a modificare la voce `Port 22`. Al posto di `22` inseriamo la porta che vorremo usare. Consiglio di usare una porta compresa nel range `30-65535`.

Salviamo il file e riavviamo il server. Per collegarci al server dopo questa modifica al comando `ssh` dovremo specificare la porta su cui connettersi tramite l&#8217;argomento `-p`.

<pre class="lang:default decode:true">ssh -p NUM_PORTA utente@ipserver</pre>

Dove `NUM_PORTA` indica la nuova porta specificata nel file di configurazione, `utente` e `ipserver` come di consueto.

Se non abbiamo commesso errori dopo che avremo lanciato il comando ci verrà chiesta la password.

Se vi appare questo errore

<pre class="lang:default decode:true">ssh: connect to host ipserver port NUM_PORTA: Connection refused</pre>

significa che o, vi siete dimenticati di lanciare il comando `ssh` con la direttiva `-p,` oppure avete usato una porta nel comando diversa da quella specificata nel file `/etc/ssh/sshd_config`.

 [1]: # "In informatica e telecomunicazioni SSH (Secure SHell, shell sicura) è un protocollo di rete che permette di stabilire una sessione remota cifrata tramite interfaccia a riga di comando con un altro host di una rete informatica. È il protocollo che ha sostituito l'analogo ma insicuro Telnet."