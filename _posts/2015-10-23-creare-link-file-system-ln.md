---
title: 'Come creare link su file system con ln'
author: unnikked
layout: post
permalink: /creare-link-file-system-ln/

tags:
  - VPS

---

Il comando `ln` crea “meta oggetti” nel file system che si collegano (link) ad altri oggetti che si trovato un file system. Possono puntare a file, cartelle o altri link. Sebbene sembrano utili, un utilizzo improprio di questa funzionalità può causare disorganizzazione e confusione, sono utili per fornire accesso a file e ad organizzazioni di file system.

##Il comando ln

Prendiamo in esame il seguente comando:

```sh
ln -s /var/www/unnikked.tk
```

L’effetto del comando è di creare un link chiamato unnikked.tk nella cartella corrente alla cartella o file situato in `/var/www/unnikked.tk`. Se si vuole specificare un nome diverso per l’oggetto link, bisogna porre alla fine del comando il nome desiderato:

```sh
ln -s /var/www/unnikked.tk unnikked
```

Se si vuole creare un link simbolico in una cartella diversa rispetto a quella corrente è possibile specificare il percorso completo nell’argomento finale del comando:

```sh
ln -s /var/www/unnikked.tk/public /home/unnikked/public/blog
```

##Link simbolici e hard

I link simbolici sono “puntatori” che non contengono alcuna informazione oltre che il luogo dell’oggetto puntato ereditando tutte le altre proprietà di tale oggetto.

Gli hard link permettono a due file apparenti, potenzialmente con nomi diversi, di puntare gli stessi dati. Non è possibile creare hard link verso oggetti che risiedono in altri dispositivi o file system. Possono solo puntare a file, non a cartelle.

##Casi d’uso per i link simbolici

I link del file system sono molto utili e possono semplificare alcuni problemi di organizzazione. Tuttavia, gli oggetti link possono causare confusione, particolarmente quando i link puntano verso altri link o quando puntano a file che non esistono o che sono stati rimossi. Quando usati correttamente, possono essere una risorsa potente nel bagaglio di un amministratori di sistema.

- I file pubblici di un sito web si trovano nella cartella `/var/www/unnikked.tk/public/` ma è necessario che alcuni utenti siano in grado di accedere da questa cartella nella loro cartella `/home/`, è possibile creare link multipli nelle cartelle `/home` degli utenti interessati che puntano a `/var/www/unnikked.tk/public/`.
- Se si vogliono salvare tutti i file di configurazione in una cartella soggetta a versione di controllo situata in `/opt/configs/` e si vuole avere la possibilità di aggiornare le configurazioni semplicemente aggiornando i file nella cartella soggetta a versione di controllo, è possibile creare un numero di link simbolici nella cartella `/etc` ai file nella cartella `/opt/configs`.

##Sicurezza

I link simbolici possono essere spostati, rinominati e rimossi in qualsiasi momento. Quando è creato con un percorso relativo ed in seguito spostato, ci si aspetta che anche l’oggetto puntato venga spostato. Se ciò non avviene esso punterà ad un oggetto che non esiste. Ciò può portare a potenziali falle di sicurezza se un link simbolico è copiato o trasferito su un sistema diverso, o se l’oggetto link è spostato e l’oggetto puntato viene sostituito con del contenuto malevolo. Bisogna prestare attenzione ai potenziali problemi che si possono creare.

##Esempi

###Creazione di link simbolici con percorsi relativi

Consideriamo l’output della sequenza di comandi seguenti, che creano e mostrano un semplice link simbolico:

```sh
$ ls -l
totale 0
-rw-rw-r-- 1 nicola nicola 0 set 23 21:45 foo
 
$ ln -s foo bar
 
$ ls -l
totale 0
lrwxrwxrwx 1 unnikked unnikked 3 ott 25 10:46 bar -> foo
-rw-rw-r-- 1 unnikked unnikked 0 ott 25 10:45 foo
```

La prima colonna dei meta dati per l’oggetto `bar` è `l`, che indica che bar è un link. `ls` stampa anche il luogo del link simbolico. Il link creato è relativo `bar` è collegato all’oggetto `foo` nella stessa cartella.

Consideriamo invece il seguente link relativo:

```sh
$ ln -s ../esempio.txt
 
$ ls -l
lrwxrwxrwx 1 unnikked unnikked 14 ott 25 10:50 esempio.txt -> ../esempio.txt
```

Il comando `ln -s` completerà correttamente l’esecuzione se non ci sono altri file nella cartella puntata che potrebbero causare conflitto con il nome del link creato. Anche se il file puntato deve esistere quando il link è creato, il link o l’oggetto puntato potrebbero essere spostati causando un link rotto.

###Creazione di link simbolici con percorso assoluto

Per evitare i problemi causati dal fornire un link relativo al file puntato, è possibile creare link simbolici che puntano a percorsi assoluti. Consideriamo l’esempio seguente:

```sh
$ ln -s /var/www/unnikked.tk/public /home/unnikked/public
 
$ ls -l /home/unnikked 
totale 0
lrwxrwxrwx 1 unnikked unnikked 3 ott 25 11:43 public -> /var/www/unnikked.tk/public
 
$ ls -l /home/unnikked/public 
totale 48K
-rw-r--r-- 1 unnikked unnikked 355 2015-10-25 10:50 index.htm
-rw-r--r-- 1 unnikked unnikked 38K 2015-10-25 10:37 logo.png
```

###Creazione di un hard link

In molti casi i link simbolici sono preferibili agli hard link. Ci sono alcune situazioni in cui questi sono richiesti

```sh
$ ls -l 
totale 4.0K 
-rw-r--r-- 1 unnikked unnikked 3 ott 25 11:23 foo
 
$ ln foo bar
 
$ ls -l
totale 8.0K
-rw-r--r-- 2 unnikked unnikked 3 ott 25 11:23 bar
-rw-r--r-- 2 unnikked unnikked 3 ott 25 11:23 foo
 
$ touch foo
 
$ ls -l
totale 8.0K 
-rw-r--r-- 2 unnikked unnikked 3 ott 25 11:24 bar
-rw-r--r-- 2 unnikked unnikked 3 ott 25 11:24 foo
```