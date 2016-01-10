---
title: 'Appunti elementari su git'
author: unnikked
layout: post
permalink: /selfoss-progetto-open-source-preferito/

tags:
  - git

---

[Git](https://it.wikipedia.org/wiki/Git_%28software%29) è un sistema software di controllo di versione distribuito, creato da Linus Torvalds nel 2005.

Per installalo su un un sistema Debian/Ubuntu. 

```
sudo apt-get install git
```

Il primo passo da eseguire è dare alcune configurazioni globali a git: 

```
$ git config --global user.name = "Nicola Malizia";
$ git config --global user.email = "unnikked@gmail.com";
```

Per inizializzare una nuova repository bisogna utilizzare il comando `init`

```
$ git init
```

produrrà una schermata simile. 

![git init](https://lh3.googleusercontent.com/-MKyXHlD48Ws/VpJvjckgnvI/AAAAAAAAALk/qp44ptTLiVQ/s0/Schermata+del+2016-01-10+15%253A49%253A23.png "git init")

Verrà creata la cartella nascosta `.git`. **Non eliminare questa cartella** - serve per il sistema git tenere traccia delle modifiche effettuate ai file ed altro. 

Per effettuare il primo commit, per prima cosa bisogna avere qualcosa per cui effettuare un `commit`. 

```
echo "File da inserire nel commit" > file.md
```

Per aggiungere nell'area di `stagin` il file bisogna utilizzare il comando `add`. 

---

> L'area `stagin` è un luogo temporaneo dove i file attendono il `commit`

---

> Il comando `add` crea una _foto_ del file di come appare al momento dell'esecuzione del comando. 

---

```
git add file.md
```

Utilizzando il comando `status` si può vedere lo stato corrente della repository. 

![git add](https://lh3.googleusercontent.com/-_uJKmIAhV0c/VpJwk_QAIkI/AAAAAAAAALw/ulVtBWaqW9Q/s0/Schermata+del+2016-01-10+15%253A53%253A54.png "git add")

Dall'immagine si nota di come il file `file.md` sia in attesa nell'area `stagin` pronto per essere _committato_. 

Per effettuare un `commit` si usa il comando omonimo. 

```
git commit -m "Primo commit"
```

L'opzione `-m` ci consente di descrivere il commit. 

---

> Descrivere sempre il contenuto del commit, aiuta a tenere traccia dell'evoluzione dello sviluppo. 

---

> Un `commit` è un salvataggio dello stato dei file che si trovano nell'aria di `staging`

---

Tramite il comando `log` è possibile consultare lo storico dei `commit`

```
$ git log
```

![git log](https://lh3.googleusercontent.com/-LYbiMV6iB3o/VpJyUTYmWNI/AAAAAAAAAME/bX8BD94IhEM/s0/Schermata+del+2016-01-10+16%253A01%253A22.png "git log")

### Spiegazione dei comandi add e commit

Il ciclo add-commit funziona in questo modo: ogni qual volta si esegue il comando `add` viene fatta una _foto_ al file o ai file e posti nell'area `stagin` in attesa di ricevere un commit. 

Il comando `commit` prende i file che si trovano nell'area di `stagin` e li salva nella repository. 

Bisogna prestare attenzione a questo concetto, se dopo una `add` lo stesso file viene modificato, lo stato della modifica non viene riflesso automaticamente nell'area di `staging`, bisogna ri-effettuare una nuova `add` per mettere in attesa di `commit` il file. 

![stagin area](https://lh3.googleusercontent.com/-GzQa5IOY4yI/VpJ1B-vNytI/AAAAAAAAAMY/nJygledcahA/s0/Schermata+del+2016-01-10+16%253A12%253A58.png "staging area")

Come mostrato in figura, effettuando un commit, solo lo stato dei file che si trovano nella stagin area, in verde, viene salvato nella repository. 

## Come annullare un commit

Ci sono casi in cui è necessario annullare un commit perché si è commessi qualche errore (per esempio un errore di battitura). 

Invece di effettuare commit per una singola modifica (è possibile farlo, ma da diciamo che vedere singoli commit per correzioni di sviste rendono difficile tracciare (inquinano) lo storico della repository) è possibile annullare il commit, effettuare le modifiche e rieffettuarlo. 

Per esempio si ha uno storico del genere. 

![](https://lh3.googleusercontent.com/-nt-PdvRV6LY/VpJ20vfXqZI/AAAAAAAAAMs/PgKfWhckBFM/s0/Schermata+del+2016-01-10+16%253A20%253A36.png)

E si vuole tornare allo stato di "Primo commit" per effettuare la modifica senza creare un nuovo commit, si copia l'identificativo mostrato alla voce in giallo oro `commit` e si esegue il comando `reset`.

Reset accetta due opzioni:

- `--hard` annulla i commit eliminandoli fisicamente
- `--soft` annulla i commit mantenendo le modifiche

Quando usare `hard` e `soft` ? Dipende molto dal caso. 

```
$ git reset --hard 03fd55c9683886ac18456735b3c8bd8c8ecf2717
```

E lo status torna a 

![git log](https://lh3.googleusercontent.com/-LYbiMV6iB3o/VpJyUTYmWNI/AAAAAAAAAME/bX8BD94IhEM/s0/Schermata+del+2016-01-10+16%253A01%253A22.png "git log")

Modifichiamo i file e li riaggiungiamo all'area di staging. Invece di eseguire il comando add si usa il comando. 

```
$ git commit --amend
```

Si aprirà l'editor impostato per git per poter modificare il messaggio di commit, uscendo si conferma il commit (nel caso non si voglia cambiare il messaggio). 

![commit amend](https://lh3.googleusercontent.com/-CHgbdBql-_8/VpJ4iZ73FFI/AAAAAAAAANA/P_5FpQHN_lo/s0/Schermata+del+2016-01-10+16%253A27%253A54.png "commit amend")

Eseguendo il comando show è possibile verificare la correttezza della modifica. 

![show](https://lh3.googleusercontent.com/-0gwJCWz585k/VpJ46caLUoI/AAAAAAAAANM/AhRy_Ewx5js/s0/Schermata+del+2016-01-10+16%253A29%253A14.png "show")


## Togliere un file dall'area staging

```
$ git checkout -- <file>
```

## Branching

Letteralmente ramificare, sono delle linee alternative del ramo principale detto `master` i rami (da ora i poi branch) servono per lavorare a versioni alternative (leggi, nuove feature di un progetto) senza intaccare il branch `master` utile se in questo ramo è presente una versione funzionante del progetto. 

Per creare un nuovo branch

```
$ git checkout -b nome_branch
```

E' possibile lavorare sul branch come descritto in precedenza. 

## Spostarsi tra branch

```
$ git checkout nome_branch
```

Nota, non va inserito `-b`.


## Unire branch

Dopo aver sviluppato la modifica è possibile unire (`merging`) il branch su `master`

Per prima cosa bisogna posizionarsi sul branch `master`

```
$ git checkout master
```

Ed effettuare il merge

```
$ git merge nome_branch
```

## Eliminare branch

Una volta effettuato il merge tra branch è possibile eliminarlo con

```
$ git branch -d nome_branch
```

Un workflow consigliato è quello proposto da [GitHub](https://guides.github.com/introduction/flow/index.html). 