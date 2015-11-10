---
title: 'Proxy SOCKS – come creare un tunnel SSH per navigare in modo sicuro'
author: unnikked
layout: post
permalink: /proxy-socks-creare-tunnel-ssh-navigare-sicuro/

tags:
  - SSH
  - VPS

---

Spesso ci si trova nella situazione in cui si naviga su Internet tramite un access point Wi-Fi pubblico, come quelli che si trovano nei fastfood o nei locali. Non si ha mai la certezza delle misure di sicurezza prese dagli amministratori, le comunicazioni potrebbero essere intercettate da utenti malintenzionati o dall’amministratore di rete stesso.

In questo articolo vedremo come stabilire una connessione sicura per navigazione web attraverso un tunnel stabilito tra il proprio computer e un server remoto VPS.

Il principio di base è quello di lanciare un server proxy [SOCKS](https://it.wikipedia.org/wiki/SOCKS) sul proprio computer usando SSH. Ascolterà su una porta locale e il proprio browser web vi si connetterà per usare il servizio.

##Prerequisiti

- Un server remoto con sistema operativo GNU/Linux.
- Il servizio SSH attivo con la direttiva AllowTcpForwarding abilitata

> Di default è abilitata, in caso negativo bisogna impostare `AllowTcpForwarding yes` nel file `/etc/ssh/sshd_config`. Ovviamente bisogna riavviare il servizio ssh tramite il comando `service ssh restart`

- L’abilità di potersi collegare al server tramite SSH
- Un client SSH per poter stabilire il tunnel
 
##Avvio del server SOCKS

Per avviare un server SOCKS basta utilizzare il seguente comando:

```sh
ssh -D 12345 utente@host
```

La direttiva `-D` specifica la porta locale a cui il server verrà legato come specificato anche nella documentazione `man`.

![man page](/data/images/ssh-d-directive.png)

Ci verrà chiesto di inserire la password e verrà aperta una normale sessione SSH. Non bisogna chiudere la finestra del terminale altrimenti il server SOCKS verrà distrutto.

A questo punto non ci resterà altro che configurare il proprio browser. Un consiglio è quello di consultare le guide ufficiali poiché ogni browser ha modi diversi per configurare il proxy e la procedura potrebbe variare con il rilascio di nuove versioni.

I parametri da utilizzare per la configurazione sono `127.0.0.1` come hostname e `12345` come porta.

##Piccole accortezze

Sebbene dopo aver configurato il proxy ogni richiesta viene inoltrata e crittografata tramite il tunnel le richieste DNS potrebbero essere ancora spedite in chiaro. Sempre consultando la documentazione del proprio browser bisogna trovare l’opzione che specifichi di inoltrare anche il traffico DNS tramite il server proxy.

In alcune reti la porta di default SSH (`22`) potrebbe essere bloccata dal firewall, per circumnavigare questo blocco sarà necessario legare il processo SSH del server remoto su una porta nota ai firewall come la `80` o la `443`. Durante l’apertura del proxy sarà necessario specificare la porta del server remoto SSH tramite la direttiva `-p`.

Questo metodo è un piccolo tentativo di creare una sorta di VPN, solo il traffico del browser viene inoltrato attraverso il proxy, le altre applicazioni utilizzano ancora la rete pubblica, è opportuno in questi casi usare una soluzione VPN adatta come una connessione [PPTP](/come-configurare-una-vpn-tramite-pptp/) o meglio ancora OpenVPN.

E’ comunque possibile configurare anche le altre applicazioni per utilizzare il proxy configurato.