---
title: 'Come ottenere e integrare con Apache un certificato valido tramite Let's encrypt'
author: unnikked
layout: post
permalink: /certificati-ssl-gratuiti-lets-encrypt-integrazione-apache/

tags:
  - weblog

---

Let's Encrypt è una [certificate authority](https://it.wikipedia.org/wiki/Certificate_authority) che è entrata nella fase di beta al pubblico il [3 Dicembre 2015](https://letsencrypt.org/2015/12/03/entering-public-beta.html) che fornisce [certificati](https://en.wikipedia.org/wiki/Public_key_certificate) gratuiti [X.509](https://it.wikipedia.org/wiki/X.509) per il [Transport Layer Security (TLS)](https://it.wikipedia.org/wiki/Transport_Layer_Security) attraverso un processo automatizzato progettato per eliminare il processo manuale attuale per la creazione, validazione, firma, installazione e rinnovo dei certificati per la messa in sicurezza dei siti web. 

Dal [sito ufficiale](https://letsencrypt.org) è possibile ottenere tutte le informazioni riguardante il progetto. 

In questo tutorial vedremo come installare un certificato TLS/SSL da Let's Encrypt per un virtual host di Apache su una server Ubuntu 14.04. Ovviamente il processo è reiterabile per un altro virtual host. 

In passato ho mostrato come [configurare un certificato self-signed su Apache](/come-configurare-un-certificato-ssl-su-apache/), perciò qual'è il vantaggio di usare Let's Encrypt? Il vantaggio è enorme perché con questo servizio si possono ottenere certificati validi (ovvero firmati da una CA) e riconosciuti dai moderni browser, rendendo "inutile" una soluzione alternativa come [Cloudflare Universal SSL](/ssl-gratuito-cloudflare-abilitare-https/). 

## Prerequisiti

Per poter seguire correttamente questo tutorial bisogna soddisfare i seguenti prerequisiti:

- Server Linux con Ubuntu 14.04 connesso alla rete Internet pubblica (se si usa [Vagrant](/gestire-macchine-virtuali-vagrant/), bisogna esporre la VM su Internet).
- Un dominio registrato valido (consiglio di usare [freenom](/come-ottenere-dominio-livello-gratis/) per la registrazione di domini gratuiti)
- Bisogna aver installato Apache (non necessariamente l'intero stack LAMP) e avere le conoscenze di base per impostare un [virtual host](/guida-ai-virtual-host-di-apache/) per il dominio. 
- Uso di [`cron` per automatizzare](/operazioni-automatiche-crontab/) il processo di rinnovo.

> Per creare velocemente un virtual host puoi usare [il mio script dedicato](https://github.com/unnikked/Apache-VirtualHost-Manager), effettua tutti i passaggi automaticamente. 

# Installare Let's Encrypt

Al momento non è incluso alcun binario nelle repository Ubuntu e il client ufficiale è scritto in python. 

Per installarlo ci basterà clonare la repository in `/opt`:

```
sudo git clone https://github.com/letsencrypt/letsencrypt
/opt/letsencrypt
```

> Per installare git `sudo apt-get install git`

# Generare il certificato

La generazione di un certificato SSL per Apache è una operazione semplice attraverso l'utilizzo del client Let's Encrypt. Il client automaticamente ottiene ed installa un nuovo certificato SSL valido per i domini forniti come parametro. 

Sebbene sia possibile combinare più certificati insieme, anche se i domini sono diversi, è consigliato creare certificato separati per nome domini unici. E' buona pratica combinare i sotto domini di uno specifico dominio insieme. 

Supponiamo di voler generare un certificato per `unnikked.tk`, entriamo nella cartella `/opt/letsencrypt` e digitiamo: 

```
./letsencrypt-auto --apache \
    -d unnikked.tk \
    -d www.unnikked.tk
```

Dove l'opzione `--apache` configura il certificato automaticamente per apache e i parametri `-d` specificano i nomi domini. 

> E' importante notare che il dominio di secondo livello `unnikked` è specificato prima del sotto dominio `www.unnikked`. 

Dopo che verranno istallate le dipendenze, verrà mostrato una guida passo-passo per personalizzare le opzioni del certificato. Sarà chiesto di fornire una email per recuperare chiavi perse e notifiche e si potrà scegliere di abilitare l'accesso `http` e `https` oppure forzare tutte le richieste verso `https`.

Ad installazione finita, il certificato generato si troverà al percorso `/etc/letsencrypt/live`.

> E' possibile verificare lo stato del certificato SSL al seguente link https://www.ssllabs.com/ssltest/analyze.html?d=example.com&latest 
> Dove `example.com` è il dominio scelto.

Ora si dovrebbe essere in grado di accedere al sito web usando il protocollo `https`. 

# Rinnovo automatico

I certificati Let's Encrypt sono validi solo per 90 giorni, è raccomandato rinnovare i certificati ogni 60 giorni. Al momento della scrittura dell'articolo il rinnovo automatico non è disponibile nel client, ma è possibile rinnovare manualmente il certificato eseguendo il client utilizzando gli stessi parametri utilizzati in precedenza.  

Per rinnovare il certificato generato precedentemente per il dominio `unnikked.tk` è necessario eseguire. 

```
./letsencrypt-auto certonly --apache \
	--renew-by-default \
	-d unnikked.tk \
	-d www.unnikked.tk
```

Bisogna notare come sono stati forniti gli stessi parametri del comando precedente, se non forniti allo stesso modo verrà generato un nuovo certificato. 

Per automatizzare il processo di rinnovo è possibile far uso di un cron job eseguendo uno script che automatizzerà il processo. 

Possiamo per esempio creare un cron che esegue il rinnovo del certificato ogni due mesi. 

```
0 0 1 */2 0 cd /opt/letsencrypt && ./letsencrypt-auto certonly --apache --renew-by-default -d unnikked.tk -d www.unnikked.tk
```


