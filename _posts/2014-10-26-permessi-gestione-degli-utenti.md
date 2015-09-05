---
title: Permessi e gestione degli utenti in Linux
author: unnikked
layout: post
permalink: /permessi-gestione-degli-utenti/
dsq_thread_id:
  - 3158141772
categories:
  - SysAdmin
tags:
  - Linux Basics
  - VPS
---

## Permessi

I permessi in Linux possono confondere all&#8217;inizio. Per ogni cartella e file, ci sono permessi che possono essere impostati per informare quali utenti possono effettuare operazioni su di essi, così come quali operazioni tali utenti non possono effettuare. Gli utenti possono **leggere (r)**, **scrivere (w)** ed **eseguire (x)** file e/o cartelle. 

Ecco come questi tre tipologie di permessi si applicano alle cartelle e ai file:

  * **Cartelle** 
      * `lettura` &#8211; abilità di leggere il contenuto di una cartella
      * `scrittura` &#8211; abilità di rinominare o creare un nuovo file o cartella dentro una cartella (o eliminarla)
      * `esecuzione` &#8211; abilità di entrare (`cd`) in una cartella
  * **File** 
      * `lettura` &#8211; abilità di leggere il file
      * `scrittura` &#8211; abilità di modificare o scrivere il file(o eliminarlo)
      * `esecuzione` &#8211; abilità di eseguire il file (come uno script bash)

Un&#8217;altro aspetto da considerare sono gli utenti e i gruppi. Per ogni file e cartella possiamo definire come gli **utenti (u)**, **gruppi (g)** e **altri (o)** possono interagire con una cartella o un file.

  * Utenti &#8211; sono i permessi dei proprietari del file o della cartella
  * Gruppo &#8211; sono i permessi per gli utenti che fanno parte di un gruppo. Un utente può far parte di uno o più gruppi. I permessi di gruppo sono i mezzi principali per come più utenti possono leggere, scrivere o eseguire lo stesso insieme di file.
  * Altri &#8211; sono i permessi per gli utenti che non sono proprietari del file/cartella o che non fanno parte di un gruppo

### Controllare i permessi

Per illustrarlo, controlliamo i permessi di una cartella, per esempio `/var/www`:

<pre class="lang:default decode:true ">$ ls -la /var/www
drwxr-xr-x  2 root root 4096 May  3 19:52 .          # Curent Directory
drwxr-xr-x 12 root root 4096 May  3 19:46 ..         # Containing Directory
-rw-r-xr--  1 root root   13 May  3 19:52 index.html # File in this Directory</pre>

Come possiamo interpretare queste informazioni?

  * drwxr-xr-x &#8211; Permessi Utente/Gruppo/Altri. La lettera &#8220;d&#8221; indica che è una cartella. Se non è presente significa che è un file.
  * 2 &#8211; Questo è il numero degli <a title="Collegamento fisico - Wikipedia" href="http://it.wikipedia.org/wiki/Collegamento_fisico" target="_blank">hard link</a> al file o alla cartella
  * root root &#8211; L&#8217;Utente e il Gruppo assegnato al file o alla cartella
  * May 3 19:52 &#8211; tempo di ultima modifica o creazione
  * . &#8211; Il nome del file. Un punto (.) indica la cartella corrente. Due punti (..) indica la cartella del livello superiore. Altrimenti verrà mostrato il nome della cartella o del file.

Vediamo cosa significa la colonna degli attributi, la prima colonna di informazioni: Per qualsiasi insieme di attributi, il primo simbolo indica se è una cartella (d), link (l) (link simbolico) o file (-). 

I caratteri successivi, considerati a gruppi di tre, denotato i permessi di lettura, scrittura ed esecuzione rispettivamente: per gli utenti, gruppi e gli altri. Per esempio l&#8217;insieme `drwxr-xr-x`

  * d &#8211; indica che è una cartella
  * rwx &#8211; l&#8217;utente ha i permessi di lettura, scrittura ed esecuzione
  * r-x &#8211; il gruppo può leggere ed eseguire, ma non scrivere
  * r-x &#8211; stessi permessi per gli altri. Poiché è una cartella ciò significa gli utenti possono leggere la cartella ma non modificarla o modificare i file in essa contenuti

Analizziamo ora `-rw-r-xr--`:

  * &#8211; &#8211; indica che è un file
  * rw- &#8211; indica che l&#8217;utente può leggere, scrivere ma non eseguire il file
  * r-x &#8211; i membri del gruppo possono leggere il file o eseguirlo
  * r&#8211; &#8211; gli altri possono solo leggere il file

Per vedere come impostare i permessi ad un file o ad una cartella vi invito a leggere <a href="permessi-file-chmod" title="Come impostare i permessi ai file con “chmod”" target="_blank">quest&#8217;altro articolo</a> scritto in passato. 

## Gestione degli utenti

Ogni utente creato, di default appartiene all&#8217;utente e al gruppo avente stesso nome. Gli utenti possono appartenere ad un gruppo primario e successivamente possono essere aggiunti ad altri gruppi come gruppi secondari. 

Il gruppo primario è quello a cui file e cartelle sono assegnare quando un utente li crea.

E&#8217; possibile vedere una lista degli utenti creati in /etc/passwd: 

<pre class="lang:sh decode:true " >$ cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
libuuid:x:100:101::/var/lib/libuuid:
syslog:x:101:104::/home/syslog:/bin/false
messagebus:x:102:106::/var/run/dbus:/bin/false
usbmux:x:103:46:usbmux daemon,,,:/home/usbmux:/bin/false
dnsmasq:x:104:65534:dnsmasq,,,:/var/lib/misc:/bin/false
avahi-autoipd:x:105:113:Avahi autoip daemon,,,:/var/lib/avahi-autoipd:/bin/false
kernoops:x:106:65534:Kernel Oops Tracking Daemon,,,:/:/bin/false
rtkit:x:107:114:RealtimeKit,,,:/proc:/bin/false
saned:x:108:115::/home/saned:/bin/false
whoopsie:x:109:116::/nonexistent:/bin/false
speech-dispatcher:x:110:29:Speech Dispatcher,,,:/var/run/speech-dispatcher:/bin/sh
avahi:x:111:117:Avahi mDNS daemon,,,:/var/run/avahi-daemon:/bin/false
lightdm:x:112:118:Light Display Manager:/var/lib/lightdm:/bin/false
colord:x:113:121:colord colour management daemon,,,:/var/lib/colord:/bin/false
hplip:x:114:7:HPLIP system user,,,:/var/run/hplip:/bin/false
pulse:x:115:122:PulseAudio daemon,,,:/var/run/pulse:/bin/false
nicola:x:1000:1000:nicola,,,:/home/nicola:/bin/bash
mysql:x:116:126:MySQL Server,,,:/nonexistent:/bin/false
</pre>

Ci verranno mostrate le seguenti informazioni separate da colonne:

  * utente
  * password (&#8220;x&#8221; significa che l&#8217;utente ha una password criptata)
  * ID Utente (UID)
  * ID Gruppo (GID)
  * Informazioni Utente (Informazioni esterne)
  * Cartella principale (Home)
  * La Shell usata dall&#8217;utente

### Creazione degli utenti

Per creare un nuovo utente bisogna utilizzare il comando adduser seguito dal nome che vogliamo assegnare.

<pre class="lang:default decode:true " >sudo adduser unnikked</pre>

Verranno presentate una serie di passi di configurazione nonché la password.

Se ricontrolliamo ora il file `/etc/passwd` troveremo una riga simile a questa:

<pre class="lang:default decode:true " >unnikked:x:1001:1003:,,,:/home/unnikked:/bin/bash</pre>

Nell&#8217;esempio, l&#8217;utente è &#8220;unnikked&#8221; e ha un `UID` pari a 1001 e un `GID` pari a 1003. 

Possiamo eseguire operazioni per conto di questo utente digitando:

<pre class="lang:default decode:true " >sudo su - unnikked</pre>

Possiamo digitare groups per vedere in quali gruppi appartiene l&#8217;utente:

<pre class="lang:default decode:true " >$ groups
unnikked</pre>

Per tornare all&#8217;utente precedente (ovvero scollegarsi con l&#8217;utente corrente) basterà digitare il comando `exit`. 

Assegniamo ora all&#8217;utente unnikked un gruppo secondario, per esempio `www-data`.

<pre class="lang:default decode:true " >sudo usermod -G www-data unnikked</pre>

La direttiva `-G` (attenzione alla maiuscola) assegna all&#8217;utente unnikked il gruppo www-data. Ciò significa che se un file o una cartella fa parte del gruppo www-data che permette ai membri di poter scrivere e leggere, allora l&#8217;utente unnikked sarà in grado di leggere e scrivere file in questa cartella. 

In alternativa è possibile assegnare all&#8217;utente unnikked il gruppo principale www-data, in questo modo tutte i nuovi file o cartelle create saranno automaticamente assegnate al gruppo www-data. Altrimenti avremo bisogno di cambiare successivamente gruppo a tali file o cartelle create.

Per assegnare un gruppo come gruppo principale per un utente specifico:

<pre class="lang:default decode:true " >sudo usermod -g www-data unnikked</pre>

In questo caso `-g` (attenzione di nuovo, è una lettera minuscola!) assegnerà il gruppo www-data all&#8217;utente unnikked come gruppo principale.

Successivamente possiamo fare in modo che i file contenuti nella cartella `/var/www` siano appartenenti al gruppo www-data per fare in modo che eventuali utenti appartenenti a tale gruppo possano operare su essi: 

<pre class="lang:default decode:true " >sudo chgrp -R www-data /var/www</pre>

per cambiare gruppo a tutti i file e cartelle (la direttiva `-R` significa &#8220;ricorsivamente&#8221;) contenuti in /var/www

<pre class="lang:default decode:true " >sudo chmod -R g+rwx /var/www</pre>

Per assegnare i permessi di lettura, scrittura ed esecuzione al gruppo ricorsivamente.