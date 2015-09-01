---
title: Come bypassare il login SSH
author: unnikked
layout: post
permalink: /come-bypassare-il-login-ssh/
dsq_thread_id:
  - 1144257079
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
tags:
  - openssh
  - VPS
---

Se siete stufi di inserire sempre la stessa password per accedere al vostro server remoto oppure effettuate spesso operazioni di trasferimento file tramite il comando **scp** o volete lanciare un comando sulla macchina remota senza però voler effettuare un accesso diretto, allora possiamo bypassare il processo di autenticazione facendo comunicare le due macchine tramite una chiave d&#8217;autenticazione comune.

La prima cosa che bisogna fare è generare una chiave (se l&#8217;avete già fatto saltate questo passaggio) tramite il comando:

<pre class="lang:sh decode:true">ssh-keygen -t rsa</pre>

verrà chiesto di scegliere una *passphrase* per la chiave (opzionale).

Successivamente usiamo questo comando per inserire la chiave nel server remoto:

<pre class="lang:sh decode:true">cat ~/.ssh/id_rsa.pub | ssh nomeutente@indirizzoip 'cat &gt;&gt; .ssh/authorized_keys'</pre>

dove **nomeutente** sta per il nome dell&#8217;utente su cui volete aggiungere la chiave e **indirizzoip** è l&#8217;indirizzo della macchina (o nome dominio); se non conoscete ancora la funzione di **ssh** leggete questo <a href="http://unnikked.tk/come-connettersi-al-proprio-vps/" target="_blank">articolo</a>. Inserite la password. Dopo di che dovreste essere in grado di accedere al server senza password, o anche usare **scp** o **rsync** senza inserire la password:

<pre class="lang:sh decode:true">ssh nomeutente@indirizzoip</pre>

dove **nomeutente** sta per il nome dell&#8217;utente su cui volete aggiungere la chiave e **indirizzoip** è l&#8217;indirizzo della macchina (o nome dominio).

<img class="aligncenter" alt="" src="http://unnikked.tk/wp-content/uploads/2013/03/ssh_rsa.png" />

## Metodo alternativo

Si può anche usare il comando **ssh-copy-id**. Per esempio, dopo aver generato la chiave, usate questo comando:

<pre class="lang:sh decode:true">ssh-copy-id -i ~/.ssh/id_rsa.pub nomeutente@indirizzoip</pre>

dove **nomeutente** sta per il nome dell&#8217;utente su cui volete aggiungere la chiave e **indirizzoip** è l&#8217;indirizzo della macchina (o nome dominio).