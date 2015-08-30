---
title: Impostare un server SFTP su Ubuntu
author: unnikked
layout: post
permalink: /impostare-un-server-sftp-su-ubuntu/
dsq_thread_id:
  - 985648880
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
  - Ubuntu
tags:
  - VPS
---

Cosa è un server SFTP? **SSH File Transfer Protocol** o **SFTP** è un protocollo di rete che prevede il trasferimento dei dati e funzionalità di manipolazione. Inoltre aggiunge la caratteristica di criptare i dati trasferiti tra i due server per rendere le operazioni più sicure.

In questo articolo vedremo come impostare un server SFTP su Ubuntu utilizzando il pacchetto openssh-server. E&#8217; un insieme di programmi che rendono disponibili sessioni crittografate di comunicazione in una rete di computer usando il protocollo SSH. In particolare imposteremo il server in modo tale che ogni utente del sistema avrà la sua cartella personale che è &#8220;isolata&#8221; dal resto del sistema (<a href="http://it.wikipedia.org/wiki/Chroot" target="_blank"><em>chroot</em></a>).

[<img class="aligncenter size-full wp-image-193" title="sftp" src="http://unnikked.tk/wp-content/uploads/2012/12/sftp_salto.png" alt="sftp" width="194" height="191" />][1]

In questo articolo userò come nome utente fittizio &#8220;*unnikked*&#8221; per cui la home di questo utente sarà /home/unnikked. Inoltre supponiamo che l&#8217;utente appartenga al gruppo *group*. Cambieremo la cartella home dell&#8217;utente (chroot) in */home*.

Se non avete già installato **OpenSSH **installiamolo dalla repository:

<pre class="lang:default highlight:0 decode:true">sudo apt-get install ssh openssh-server</pre>

Per abilitare il servizio *SFTP *apriamo il file *sshd_config *:

<pre class="lang:default highlight:0 decode:true">sudo vi /etc/ssh/sshd_config</pre>

e controlliamo che al suo interno sia contenuta la seguente linea:

<pre class="lang:default highlight:0 decode:true">[...]
Subsystem sftp internal-sftp
[...]</pre>

Ora per aggiungere un utente all&#8217;accesso *SFTP *aggiungiamo alla fine del file :

<pre class="lang:default highlight:0 decode:true">[...]
Match User unnikked
    ChrootDirectory /home
    AllowTCPForwarding no
    X11Forwarding no
    ForceCommand internal-sftp</pre>

dove *unnikked *in questo caso è l&#8217;utente da impostare come sopra premesso.

Invece per impostare un gruppo basta aggiungere :

<pre class="lang:default highlight:0 decode:true">[...]
Match Group group
    ChrootDirectory /home
    AllowTCPForwarding no
    X11Forwarding no
    ForceCommand internal-sftp</pre>

Questo cambierà la cartella home a tutti gli utenti *group *nella cartella */home*. Notiamo che tutte le cartelle del percorso relativo alla direttiva *ChrootDirectory *devono essere di proprietà di root che non devono essere scrivibili da nessun altro utente o gruppo. Questo è il motivo per cui non possiamo specificare */home/unnikked*, per esempio, perché non è di proprietà dell&#8217;utente e gruppo *root*.

Ora riavviamo *OpenSSH:*

<pre class="lang:default highlight:0 decode:true">sudo /etc/init.d/ssh restart</pre>

Se aggiungi più di un utente nel file e non vuoi che i diversi utenti possano vedersi le cartelle a vicenda , puoi cambiare i permessi a ogni cartella utente così:

<pre class="lang:default decode:true">sudo chmod 700 /home/unnikked</pre>

In questo modo daremo solo libero accesso al proprietario della cartella.

Ora puoi collegarti alla macchina con qualsiasi software che supporti il protocollo SFTP come FileZilla.

Nota bene che con questa configurazione non abbiamo impostato in alcun modo l&#8217;accesso *SSH *all&#8217;utente. Lo vedremo in seguito in un altro articolo.

 [1]: http://unnikked.tk/wp-content/uploads/2012/12/sftp_salto.png