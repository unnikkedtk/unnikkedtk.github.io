---
title: 'Creare un inoltro email con Zapier'
author: unnikked
layout: post
permalink: /inoltro-email-zapier/

tags:
  - zapier

---

Zapier, per chi non lo conoscesse, è un servizio che mira a servire le utenze business per automatizzare processi che avvengono sul web integrando API di diversi servizi online, un po' come fa [IFTTT](/tags/#IFTTT). 

Per fortuna offre un piano gratuito e avendone uno, inutilizzato, con più di 100 azioni al mese (ho riferito un paio di amici) ho deciso di metterlo a buon uso. 

A volte voglio iscrivermi a qualche newsletter / servizio web senza voler necessariamente fornire la mia reale email, per effettuare un test. 

Dove entra in gioco Zapier ? Tramite lo Zap Mail si può ottenere una casella personalizzata per poter ricevere e spedire email, da qui la _brillante_ idea: creare un inoltro per mascherare il mio reale indirizzo sul web quando ne sento il bisogno. 

Dalla dashboard creo un nuovo zap e scelgo sia come _trigger_ che come _action_ il servizio Zapier Mail. 

![nuovo_zap](https://lh3.googleusercontent.com/-b9lfogK3h9Q/VoKl8LCNhII/AAAAAAAAAIE/6rXaT6dcEcE/s0/Schermata+del+2015-12-29+16%253A24%253A57.png)

Assegno un nome alla casella email personale. 

![casella_personale](https://lh3.googleusercontent.com/-m498xj1oSCI/VoKmWdvZT4I/AAAAAAAAAIQ/zNZp8u7RBgQ/s0/Schermata+del+2015-12-29+16%253A26%253A53.png)

Configuro l'action secondo ovvie impostazioni, assicurandomi di mettere il mio indirizzo email come destinatario. 

![configurazione](https://lh3.googleusercontent.com/-4V-S-Z5Bo0I/VoKmuFRSsrI/AAAAAAAAAIg/oPKf4mkHkkU/s0/Schermata+del+2015-12-29+16%253A28%253A29.png)

Effettuo i test inviando una email all'indirizzo scelto dalla mia stessa email personale e controllo che il tutto funzioni. 

![test funziona](https://lh3.googleusercontent.com/-dtqOx4cVLmM/VoKm-SE82tI/AAAAAAAAAIs/01NKjxppdb8/s0/Schermata+del+2015-12-29+16%253A29%253A39.png)

Tutto funziona, tutti felici. Speriamo che tale casella non venga bloccata in giro al momento delle iscrizioni. 

## Appunti su altri usi

- Creare un Webhook per inviare programmaticamente email con questi indirizzi. 
- Creare un feed RSS dalle email ricevute per darlo in pasto ad un [lettore RSS](/selfoss-aggregatore-flussi/), utile per seguire newsletter.

Sono aperto a suggerimenti. 