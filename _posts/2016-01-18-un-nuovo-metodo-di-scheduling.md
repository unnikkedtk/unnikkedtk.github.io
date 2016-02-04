---
title: 'Un nuovo metodo di scheduling'
author: unnikked
layout: post
permalink: /nuovo-metodo-scheduling/

tags:
  - weblog

---

Quando hai un blog, devi anche pensare a pubblicizzare (SPAM per i più pignoli) per ottenere il traffico, altrimenti come fai ad emergere? 

Un primo passo è ottimizzare il lato SEO del blog, in modo tale da ricevere traffico dalle ricerche organiche; non siamo biologi. 

Oltre al traffico generato dai motori di ricerca (leggi google perché in tutti questi anni di blogging l'80/90% del traffico mi arriva da lui) è importante comunque pianificare una strategia di scheduling di contenuti su un social media. 

Che sia spam ininterrotto dei propri articoli o di link poco importa, aiuta a creare un brand dietro al blog, il che aiuta. 

---

Nel corso degli anni sono passato dall'usare Buffer, a pubblicare manualmente, a schedulare con la pagina facebook e tweetdeck e tool simili, fino ad arrivare [tramite IFTTT e google calendar](https://unnikked.ga/how-to-manage-telegram-channel-with-bot) (se leggi tra le righe capirai il perché ho linkato un articolo sui blog di telegram). 

Questi metodo si aiutano, ma hanno un difetto: sono buchi neri che piegano lo spazio tempo come non mai. 

Sinceramente a me secca spendere 700 ore a fare il figo e a schedulare come un robot; preferisco spendere queste mila ore a rispondere ai commenti, parlare su twitter e sul mio [gruppo Telegram](https://telegram.me/joinchat/AEis8ADDqfu2WoeSUEBdbA).  (ok questo articolo sta sembrando sempre più un post per pubblicizzare le mie attività con Telegram, storytelling ? no, siete troppo paranoici.)

E allora quale è questo micidiale metodo che sto cercando di propinarvi in stile _come ottenere 700k visitatori senza fare niente_.

---

## Cron, BASH, curl, IFTTT

Perché scomodare formati dati speciali, super servizi quando in una serata potevo costruirmi la soluzione finale a tutto ? Eh, la pigrizia. 

Bando alle ciance e snoccioliamo "l'algoritmo"

- I cron attivano gli script ad orari da me prefissati
- Lo script ottiene una linea random da un banale ed evergreen file di testo 
- Tramite `curl` posto la richiesta su un recipe `Maker` di IFTTT così non devo sbattermi, con oAuth e mazzi vari (sono pigro). 

Il risultato ? Gustatavalalo. 

```bash
#!/bin/bash

FILE="random_links.txt"

TEXT="$(shuf -n 1 $FILE)" # magia, magia!

curl -s \
	-X POST https://maker.ifttt.com/trigger/post_twitter_text/with/key/tipiaceressesaperlo \
	-d value1="$TEXT"

```