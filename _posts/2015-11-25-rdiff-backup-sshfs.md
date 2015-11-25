---
title: 'Come usare Rdiff-backup con SSHFS'
author: unnikked
layout: post
permalink: /rdiff-backup-sshfs/

tags:
  - VPS
  - SSH

---

`Rdiff-backup` è un sistema di backup open source che effettua backup incrementali, differenziali su una vasta varietà di piattaforme. Diversi utenti usano `rdiff-backup` su entrambi i lati delle operazioni di backup, ciò può essere però problematico quando si usano diversi sistemi operativi o diverse versioni di `rdiff-backup`. In questa guida vedremo come usare `rdiff-backup` in combinazione con `sshfs` per montare in modo sicuro un file system remoto su un server backup Linux, eliminando la necessità di eseguire `rdiff-backup` sul server da backuppare. 

Bisogna notare che questo metodo di salvataggio dati remoto dipende molto sulla sicurezza del server di backup, poiché l'utente che effettua i backup avrà accesso SSH sul server remoto. Il file system dell'host remoto sarà montato in modalità _solo lettura_ sul server di backup come metodo di sicurezza elementare, ciò non offre una protezione robusta se un individuo malintenzionato compromette l'account che effettua i backup del server (o l'account root del server di backup).

Si assume che l'host remoto sia provvisto di accesso SSH e che sia possibile accedervi dal server di backup. 

## Installazione dei requisiti

Sul server di backup è necessario installare `rdiff-backup` e `sshfs`. Per sistemi Debia e Ubuntu: 

```sh
apt-get update
apt-get upgrade
apt-get install rdiff-backup sshfs
```

## Configurazione dell'utente di backup sull'host remoto
Sull'host remoto (il server che sarà backuppato), bisogna accedervi tramite il nome utente designato per i backup dal server di backup. Se l'utente non ha una cartella `.ssh`, la si crea una insieme ad una coppia di chiavi eseguendo questo comando:

```sh
ssh-keygen -t rsa
```

## Aggiungere e congiurare l'utente di backup
I comandi proposti servono per aggiungere un utente per `rdiff-backup` e rendere l'utente un membro del gruppo `fuse` sul server di backup. I backup saranno salvati dentro la cartella home utente. 

```sh
adduser rdiffbackup
usermod -a -G fuse rdiffbackup
```

Bisogna generare una coppia di chiavi SSH per il nuovo utente e copiarla sul file remoto `authorized_keys` del server. Ciò permetterà l'utente `rdiffbackup` sul server di backup di montare il file system dell'host remoto senza richiedere l'inserimento di una password. 

```sh
su - rdiffbackup
ssh-keygen -t rsa
scp ~/.ssh/id_rsa.pub user@hostname.com:/home/user/.ssh/uploaded_key.pub
ssh user@hostname.com "echo \`cat ~/.ssh/uploaded_key.pub\` >> ~/.ssh/authorized_keys"
```

## Creare un punto di montaggio e cartelle di backup
I comandi a seguire servono per creare le cartelle nella home di `rdiffbackup` per montare il file system remoto e salvare i backup. 

```sh
mkdir -p /home/rdiffbackup/mnt/remotehost/remotepath
mkdir -p /home/rdiffbackup/backup/remotehost/remotepath
chown -R rdiffbackup:rdiffbackup /home/rdiffbackup
```

Come esempio, se si ha necessità di salvare la cartella `/home` di un host remoto chiamato `unnikked.tk`: 

```sh
mkdir -p /home/rdiffbackup/mnt/unnikked.tk/home
mkdir -p /home/rdiffbackup/backup/unnikked.tk/home
chown -R rdiffbackup:rdiffbackup /home/rdiffbackup
```

## Configurare SSHFS
Bisogna aggiungere una linea al file `/etc/fstab` per montare il file system dell'host remoto. 

```sh
 <sshfs#user@remotehost>:/remotepath /home/rdiffbackup/mnt/remotehost/remotepath fuse user,noauto,ro 0 0

```

Ciò consentirà all'utente `rdiffbackup` di montare e leggere il silesystem remoto. Sarà montato in modalità solo lettura come protezione elementare. Per effettuare un test: 

```sh
su - rdiffbackup
mount /home/rdiffbackup/mnt/remotehost/remotepath
rdiff-backup -v5 /home/rdiffbackup/mnt/remotehost/remotepath /home/rdiffbackup/backup/remotehost/remotepath
```

## Automatizzare i backup 
In un file `/home/rdiffbackup/backup.sh` si inserisce il seguente contenuto. 

```sh
#!/bin/sh
mount /home/rdiffbackup/mnt/remotehost/remotepath
rdiff-backup /home/rdiffbackup/mnt/remotehost/remotepath /home/rdiffbackup/backup/remotehost/remotepath
umount /home/rdiffbackup/mnt/remotehost/remotepath
```

Questo script monterà il filesystem remoto, lo salva, e lo smonta al completamento. Bisogna renderlo eseguibile: 

```sh
chmod +x /home/rdiffbackup/backup.sh
```

Bisogna modificare il file `crontab` dell'utente `rdiffbackup` (tramite `crontab -e`) per eseguire backup automatici giornalmente alle 2 del mattino.

```
00 02 * * * /home/rdiffbackup/backup.sh
```

## Ripristinare un backup
Per ripristinare un backup, bisogna eseguire un comando sul server di backup che sia simile al seguente. Bisogna notare che qualsiasi percorso specificato per `/restoredir` sarà sovrascritto sul server di backup; i backup non sono automaticamente ripristinari sul server remoto. Presta attenzione a non specificare una cartella che contiene file che desideri mantenere. 

```sh
rdiff-backup -r now /home/rdiffbackup/backup/remotehost/remotepath /restoredir
```

Ripristinerà la versione più recente della cartella di backup alla cartella `/restoredir` sul server di backup. E' possibile specificare il tempo preciso del backup. 

```sh
rdiff-backup -r 10D /home/rdiffbackup/backup/remotehost/remotepath /restoredir
```

## Link utili
- [Documentazione rdiff-backup](http://rdiff-backup.nongnu.org/docs.html)
- [SSHFS](/sshfs-montare-file-system-remoto/)
- [Crontab](/operazioni-automatiche-crontab/)
- [Login SSH senza password](/come-bypassare-il-login-ssh/)