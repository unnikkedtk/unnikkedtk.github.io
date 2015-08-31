---
title: Come aumentare la swap di un VPS
author: unnikked
layout: post
permalink: /aumentare-la-swap-di-un-vps/
dsq_thread_id:
  - 1096512933
itsec_enable_ssl:
  - 
categories:
  - Linux
  - SysAdmin
tags:
  - VPS
---

Molti servizi VPS offrono macchine virtuali che garantiscono una soglia massima di RAM (Esempio 512 MB) senza utilizzare alcuna partizione di swap; può risultare utile utilizzarla per cercare di avere un margine di sicurezza sui software installati sul VPS per evitare crash o **kill** di un processo che richiede più risorse di quelle disponibili sulla macchina.

In Linux è possibile allocare parte dello spazio su disco come swap, senza la necessità di andare a ripartizionare il disco o reinstallare il sistema; per fare ciò ci avvaleremo del comando **dd**:

<pre class="lang:sh decode:true">dd if=/dev/zero of=/swapfile bs=1024 count=1048576
mkswap -f /swapfile 
swapon /swapfile</pre>

dove con **count** indichiamo la dimensione in *kilobyte* dello spazio che vogliamo allocare.  
Il comando **mkswap -f** crea il file di swap con nome */swapfile*; infine con **swapon** montiamo il file di swap.

Con questi comandi abbiamo solo creato e montato la swap aggiuntiva ma, ad un eventuale riavvio, il file di swap non viene montato automaticamente, per rendere questo processo automatico bisogna modificare **fstab**, per cui apriamo il file */etc/fstab* e aggiungiamo la seguente linea:

<pre class="lang:default decode:true">/swapfile   none   swap   sw 0 0</pre>

### Nota
Il <strong>kernel Linux 2.6</strong> ha aggiunto un nuovo parametro al kernel chiamato <em><a href="http://en.wikipedia.org/wiki/Swappiness" target="_blank">swappiness</a></em> che permette agli amministratori di modificare il modo in cui Linux effettua lo swap. E&#8217; un numero che va da <strong></strong> a <strong>100</strong>. In sintesi, un valore alto porta ad un numero elevato di pagine di essere &#8220;swappate&#8221;, e un numero basso comporta un maggior numero di applicazioni mantenuti in memoria <em>RAM</em>, anche se sono inattive.</p> 
      
Il valore di default di <em>swappiness</em> è <strong>60</strong>. Si può anche alterarlo temporaneamente (fino al prossimo reboot) digitando come <strong>root</strong>:
      
<pre class="lang:default decode:true">echo 50 &gt; /proc/sys/vm/swappiness</pre>

Se si vuole rendere permanente la modifica bisogna cambiare il paramentro <em>vm.swappiness</em> nel file <em>/etc/sysctl.conf</em></div></div></div> 

Unico inconveniente di questo sistema, è che le prestazioni generali del sistema potrebbero essere ancora peggiori di una normale partizione adibita all&#8217;avvicendamento dei processi, in quanto il file risiede sul file system del sistema operativo per cui è soggetta ai servizi del file system stesso.