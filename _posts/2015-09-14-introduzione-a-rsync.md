---
title: 'Introduzione a Rsync'
author: unnikked
layout: post
permalink: /introduzione-a-rsync/

tags:
  - rsync
  - SSH

---

Rsync è uno strumento creato per fornire trasferimenti di file veloci ed incrementali. E’ stato concepito come alternativa migliore ai comandi `scp` e `rcp`. Rsync è utile per caricare file su server remoti, in modo particolare quando è necessario mantenere sincronizzato la versione locale dei file usando poche risorse di rete.

Ci sono diversi strumenti e tecniche che possono essere implementate usando `rsync`. Per esempio pubblicare contenuti aggiornati da una macchina di sviluppo a quella di produzione, effettuare il backup dei file verso un server remoto e mantenere più server di produzione sincronizzati.

In questo articolo vedremo solo una piccola introduzione ad `rsync` fornendo alcune applicazioni pratiche.

##Installare Rsync

Per un sistema basato su Debian/Ubuntu è possibile installare `rsync` tramite repository.

```sh
sudo apt-get install rsync
```

Come impostazione di default, `rsync` utilizza SSH a livello di trasporto per criptare il traffico sulla rete. Anche se è possibile usare `rsync` in modalità anonima per sincronizzare i file da una macchina remota senza usare SSH è opportuno usarlo nella modalità SSH.

Per facilitare le operazioni è consigliabile impostare una [coppia di chiavi di autenticazione](/come-bypassare-il-login-ssh/).

##Il comando Rsync

Una volta installato è facile da usare per operazioni basilari. Ci sono quattro opzioni importanti che coprono un uso basilare di questo strumenti. Essi sono:

- L’opzione `-r` indica di navigare ricorsivamente nelle cartelle e copiare tutto il contenuto della cartella con tutte le sottocartelle.
- Il flag `-v` incrementa la verbosità. Con questa opzione rsync stamperà ogni operazione che esegue.
- L’argomento `-a` attiva la modalità archivio, è un insieme di una serie di opzioni. Effettua una copia ricorsiva, preserva i link simbolici, permessi e tempi di modifica, permessi file e gruppo, dispositivi e file speciali.
- L’opzione `-z` comprime i dati durante il trasferimento velocizzandolo ma al costo di una maggiore complessità computazionale.

Ci sono anche diverse altre opzioni per aggiungere vincoli al comportamento del comando, come per esempio il limite sulla velocità di banda. `man rsync` e `rsync --help` mostrano informazioni di aiuto.

Una volta specificate le opzioni bisogna fornire il percorso sorgente e destinazione. Rsync può essere usato per anche sincronizzare due cartelle locali. I percorsi possono essere usati anche usando la sintassi per SSH/SCP:

```sh
user@hostname:/percorso/al/file
```

Dove user rappresenta il nome utente, hostname è la destinazione remota e `/percorso/al/file` è il percorso ai file sorgenti.

Si possono specificare sia percorsi assoluti che percorsi relativi, questi ultimi tramite l’opzione `-R`.

Per operazioni di sincronizzazione sia la sorgente o la destinazione possono essere percorsi remoti (non entrambi), in base all’ordine in cui sono specificati.

##Come usare rsync per caricare contenuti sulla rete

Se si sta sviluppando un applicazione localmente e la si vuole pubblicare in rete è possibile usare rsync come uno strumento di deployment. Poiché utilizza un approccio incrementale, una volta caricati la prima volta i file, i piccoli cambiamenti saranno riflessi molto velocemente. Ecco un esempio di come il comando dovrebbe essere formato:

```sh
rsync -zr /percorso/alla/cartella-locale user@hostname:/percorso/alla/cartella-remota
```

Le opzioni `-z` e `-r` sono abilitate per copiare ricorsivamente i file in `/percorso/alla/cartella-locale` e comprimerli durante il trasferimento. I file locali sono copiati dalla cartella `/percorso/alla/cartella-locale` nella `/percorso/alla/cartella-remota` sul server remoto hostname.