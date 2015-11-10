---
title: 'Come configurare le connessioni SSH'
author: unnikked
layout: post
permalink: /come-configurare-le-connessioni-ssh/

tags:
  - SSH

---

Mi trovo spesso a dover accedere a diversi server tramite ssh, sebbene riesco ad eseguire il comando di accesso utilizzando l’utility [HSTR](hstr-cronologia-shell-portata-di-mano) lo trovo molto inefficiente per questo scopo poiché devo comunque ricordare la lista dei server a cui ho accesso.

Utilizzando il file `~/.ssh/config` è possibile definire alias per gli host a cui abbiamo l’accesso, in questo modo invece di digitare il solito:

```sh
ssh utente@host
```

Potremo semplicemente digitare:

```sh
ssh mioserver
```

All’interno di questo file è possibile inserire una serie di direttive che non solo facilitano la fase di autenticazione ma possono essere inserite anche direttive che il client ssh supporta (come il [tunnelling](/proxy-socks-creare-tunnel-ssh-navigare-sicuro/) per esempio).

Ecco un esempio di un file `~/.ssh/config`

```sh
Host unalias
    HostName esempio.com
    Port 2222
    User unutente
    IdentityFile ~/.ssh/id_example
    IdentitiesOnly yes
Host unaltroalias
    HostName 192.168.33.10
    User unaltroutente
    PubkeyAuthentication no
Host aws
    HostName un.indirizzo.ec2.aws.com
    User utenteaws
    IdentityFile ~/.ssh/aws_identity.pem
    IdentitiesOnly yes
Host qui quo qua
    HostName deposito.paperopoli.com
    User usernamecondiviso
    IdentityFile ~/.ssh/id_shared
    IdentitiesOnly yes
```

Da notare come sia possibile definire più host per definizione.

Ecco una lista parziale delle direttive utilizzate:

- `HostName` – è il server host remoto (dominio o indirizzo ip) a cui connettersi
- `Port` – la porta da utilizzare per la connessione
- `User` – l’username da utilizzare per l’accesso
- `IdentityFile` – l’identità chiave SSH da usare per l’accesso, se si utilizza il metodo di accesso SSH tramite chiavi
- `IdentitiesOnly` – “Yes” per specificare l’accesso solo tramite le chiavi SSH (non usa l’autenticazione tramite password)
- `PubkeyAutentication` – “No” per specificare di ignorare l’autenticazione tramite chiavi, utilizzando l’autenticazione tramite password.

Queste non sono le uniche direttive da poter essere utilizzare, per scoprire ulteriori direttive basterà digitare `man ssh_config` dalla propria console dei comandi.

![ssh_config](/data/images/man-ssh_config.png)