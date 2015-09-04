---
title: Come installare Ajenti su Ubuntu
author: unnikked
layout: post
permalink: /installare-ajenti-su-ubuntu/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 2045839467
categories:
  - Linux
  - SysAdmin
  - Ubuntu
tags:
  - VPS
---

`Ajenti` è un pannello di amministrazione per server, open source, disponibile su `Linux` e `FreeBSD` che supporta varie configurazioni software per server con un una raffinata interfaccia utente.

`Ajenti` include molti plugin pronti all&#8217;uso che permettono la configurazione sia del sistema operativo che dei pacchetti software. La lista dei software supportati include **<a title="Guida ai Virtual Host di Apache" href="guida-ai-virtual-host-di-apache" target="_blank">Apache</a>**, **BIND9**, **<a title="Esegui operazioni automaticamente tramite crontab" href="operazioni-automatiche-crontab" target="_blank">Cron</a>**, **CTDB**, **DHCPD**, **NFSD**, **Iptables**, **Munin**, **<a title="Come configurare un ambiente LAMP" href="apache-php-mysql" target="_blank">MySQL</a>**, **Netatalk**, **NGINX**, **PostgreSQL**, **Samba**, **lm-sensors**, **Squid 3**, **Supervisor**.

Dispone di una interfaccia veloce e *responsive*, utilizza poca memoria e dispone di strumenti come **gestore file**, **terminale** e **editor di codice**, tutto ciò che un amministratore necessita.

Quindi si presenta come una valida alternativa al ben famoso <a title="Webmin - Homepage" href="http://www.webmin.com/" target="_blank">Webmin</a>.

Per installare `Ajenti` aggiungiamo la chiave della repository:

<pre class="lang:sh decode:true ">wget http://repo.ajenti.org/debian/key -O- | apt-key add -</pre>

Aggiungiamo la repository in `/etc/apt/sources.list`:

<pre class="lang:sh decode:true ">echo "deb http://repo.ajenti.org/ng/debian main main ubuntu" &gt;&gt; /etc/apt/sources.list</pre>

<p align="center">
  
  <p>
    Installiamo il pacchetto:
  </p>
  
  <pre class="lang:sh decode:true ">apt-get update && apt-get install ajenti</pre>
  
  <p>
    Avviamo il servizio:
  </p>
  
  <pre class="lang:sh decode:true ">service ajenti restart</pre>
  
  <p>
    Il pannello è disponibile tramite <code>HTTPS</code> sulla porta <code>8000</code>. La username di default è <strong>root</strong> e la password è <strong>admin</strong>.
  </p>
  
  <p>
    Si raccomanda di cambiare la password di <strong>root</strong> dopo aver installato il software per far ciò bisogna andare nella sezione <em>Configura -> UTENTI</em>
  </p>
  
  <p align="center">
    <img alt="Dashboard" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-12-142744.png" />
  </p>
  
  <p>
    e cliccare su <em>Modifica password</em>
  </p>
  
  <p align="center">
    <img alt="Modifica password" src="/wp-content/uploads/2013/12/Screenshot-from-2013-12-12-142932.png" />
  </p>
  
  <p>
    Confermiamo i cambiamenti cliccando sul tasto <em>Salva</em> e riavviamo il pannello cliccando su <em>Riavvia</em>.
  </p>
  
  <br />
  
  <div align="center">
    <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
  </div>