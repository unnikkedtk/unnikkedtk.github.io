---
title: Come configurare una VPN tramite PPTP
author: unnikked
layout: post
permalink: /come-configurare-una-vpn-tramite-pptp/
bwps_enable_ssl:
  - 
dsq_thread_id:
  - 2601071385
categories:
  - Internet
  - SysAdmin
  - Ubuntu
tags:
  - VPN
---

Una rete privata virtuale (**VPN**) abilita l&#8217;accesso ad una rete privata tramite una rete pubblica, come Internet. Permette ai computer di scambiarsi dati tramite una rete pubblica o condivisa come se fossero direttamente connessi alla rete privata, mantenendone la funzionalità, sicurezza e politiche di gestione della stessa. 

Una **VPN** viene creata stabilendo una connessione virtuale *punto-punto* attraverso l&#8217;uso di connessioni dedicate, protocolli virtuali di tunneling o crittografando il traffico.

Una connessione **VPN** tramite <a href="la-storia-di-internet" title="La storia di Internet" target="_blank">Internet</a> è simile ad una <a href="http://it.wikipedia.org/wiki/Wide_Area_Network" title="Wide Area Network - Da Wikipedia, l'enciclopedia libera." target="_blank">wide area network</a> (**WAN**). Dal punto di vista dell&#8217;utente, le risorse della rete privata estesa vengono utilizzate allo stesso modo delle risorse presenti nella rete privata. 

In un precedente articolo ho esposto i <a href="cosa-e-una-vpn" title="Cosa è una VPN e quali sono i suoi benefici?" target="_blank">benefici dell&#8217;utilizzo di una VPN</a>. In questo articolo vedremo come configurare una VPN tramite un protocollo `point-to-point tunneling`.

Installiamo per prima cosa il server <a href="http://it.wikipedia.org/wiki/PPTP" title="PPTP - Da Wikipedia, l'enciclopedia libera." target="_blank">PPTP</a>:

<pre class="lang:default decode:true">apt-get install pptpd</pre>

Ora apriamo il file di configurazione `/etc/pptpd.conf` con qualsiasi editor di testo e aggiungiamo le seguenti linee:

<pre class="lang:default decode:true">localip 10.0.0.1
remoteip 10.0.0.100-200</pre>

Dove *localip* è l&#8217;indirizzo il del server e *remoteip* sono gli IP che saranno assegnati ai client che si connetteranno a esso.

Ora bisogna impostare l&#8217;autenticazione per PPTP aggiungendo utenti e password. Bisogna aggiungerli nel file `/etc/ppp/chap-secrets`

<pre class="lang:default decode:true"># Secrets for authentication using CHAP
# client        server  secret                  IP addresses
  utente1       pptpd   password1               *
  utente2       pptpd   password2               *</pre>

Dove *client* è la username, *server* è la tipologia del servizio e *secret* è la password. *IP addresses* specifica da quale IP il cliente potrebbe collegarsi, impostando tale campo utilizzando il simbolo &#8216;*&#8217; significa che il server accetterà connessioni da qualsiasi IP per la combinazione utente/password.

Aggiungiamo ora un server DNS al file `/etc/ppp/pptpd-options`:

<pre class="lang:default decode:true">ms-dns 8.8.8.8
ms-dns 8.8.4.4</pre>

E avviamo il demone PPTP con:

<pre class="lang:default decode:true">service pptpd restart</pre>

Possiamo verificare che il demone sia effettivamente attivo utilizzando il comando:

<pre class="lang:default decode:true">netstat -alpn | grep :1723</pre>

<p align="center">
  <img alt="Risultato comando" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-31-175023.png" />
</p>

Impostiamo ora l&#8217;inoltro di IP sul server PPTP. Ciò consentirà di inoltrare i pacchetti tra l&#8217;indirizzo IP pubblico e gli indirizzi IP privati impostati con PPTP e consentiamo anche ai vari client connessi di poter comunicare tra loro.

Modifichiamo il file `/etc/sysctl.conf` e modifichiamo la linea come specificato:

<pre class="lang:default decode:true">net.ipv4.ip_forward = 1</pre>

Per abilitare le modifiche:

<pre class="lang:default decode:true">sysctl -p</pre>

Ora creiamo una regola <a href="http://it.wikipedia.org/wiki/Network_address_translation" title="Network address translation - Da Wikipedia, l'enciclopedia libera." target="_blank">NAT</a> per iptables:

<pre class="lang:default decode:true">iptables -A INPUT -i eth0 -p tcp --dport 1723 -j ACCEPT
iptables -A INPUT -i eth0 -p gre -j ACCEPT
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
iptables -A FORWARD -i ppp+ -o eth0 -j ACCEPT
iptables -A FORWARD -i eth0 -o ppp+ -j ACCEPT
iptables --table nat --append POSTROUTING   --out-interface ppp0 --jump MASQUERADE
iptables -I FORWARD -p tcp --tcp-flags SYN,RST SYN -j TCPMSS --clamp-mss-to-pmtu</pre>

Bisogna notare che il comando `iptables –table nat –append POSTROUTING –out-interface ppp0 –jump MASQUERADE` abilità la possibilità di comunicazione fra pari (*peer*), cioè due client connessi alla VPN saranno in grado di comunicare tra di loro, in questo modo si può utilizzare <a href="http://it.wikipedia.org/wiki/Internet_Control_Message_Protocol" title="Internet Control Message Protocol - Da Wikipedia, l'enciclopedia libera." target="_blank">ICMP</a>, <a href="http://it.wikipedia.org/wiki/Samba_(software)" title="Samba (software) - Da Wikipedia, l'enciclopedia libera." target="_blank">Samba</a> o qualiasi altra cosa. 

Bisogna anche notare che il comando `iptables -I FORWARD -p tcp –tcp-flags SYN,RST SYN -j TCPMSS –clamp-mss-to-pmtu` risolve i problemi con la variazione dell&#8217; <a href="http://it.wikipedia.org/wiki/Maximum_Transmission_Unit" title="Maximum Transmission Unit - Da Wikipedia, l'enciclopedia libera." target="_blank">MTU</a>. 

Salviamo la configurazione con:

<pre class="lang:default decode:true">iptables-save</pre>

Ora il server funziona anche da router.