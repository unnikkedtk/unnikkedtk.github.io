---
title: Quali sono i vantaggi di VirtualBox ?
author: unnikked
layout: post
permalink: /quali-sono-i-vantaggi-di-virtualbox/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 1381443635
categories:
  - Novità
tags:
  - VirtualBox
---

La <a href="http://it.wikipedia.org/wiki/Virtualizzazione" target="_blank">virtualizzazione</a> nell&#8217;informatica moderna è un aspetto che sicuramente non va trascurato. Con l&#8217;avvento di macchine sempre più potenti ed efficienti si è abbandonato la fruizione dei servizi informatici con architetture ad hoc e si è preferito passare ad un sistema virtualizzato.

Molti test di un nuovo sistema operativo vengono prima effettuati utilizzando un sistema di virtualizzazione e successivamente fatti eseguire su hardware reale.

<a href="https://www.virtualbox.org/" target="_blank">VirtualBox</a> è una delle tante alternative che ci permette di far provare e apprezzare le caratteristiche che ci offre il concetto di virtualizzazione.

<img class="aligncenter" style="line-height: 1.5;" alt="" src="/wp-content/uploads/2013/06/virtualbox-logo.png" /><span style="line-height: 1.5;"><br /> </span>

Prima di rispondere alla domanda posta nel titolo dell&#8217;articolo voglio presentarvi meglio l&#8217;applicazione.

VirtualBox emula i seguenti componenti hardware:

  * Gli [hard disk][1] vengono emulati con uno speciale formato contenitore chiamato &#8220;Virtual Disk Images&#8221; ([file][2] VDI), che è, al momento, incompatibile con i formati utilizzati dalle altre soluzioni di virtualizzazione. Sono comunque supportati i file VMDK (VMware ed altri) e VHD (Microsoft). Inoltre, VirtualBox ha la caratteristica peculiare di poter collegarsi a supporti [iSCSI][3], e di poterli utilizzare come dischi virtuali.

  * Come [scheda grafica][4], per impostazione predefinita VirtualBox fornisce una [periferica][5] [VESA][6] con 12 [MB][7] di [RAM][8] configurabili. Un [driver][9] video speciale viene fornito dalle *Guest Additions* (per sistemi guest Windows, GNU/Linux e Solaris): questo driver conferisce maggiore performance e la possibilità di regolare la risoluzione del sistema guest quando la finestra della [macchina virtuale][10] viene ridimensionata. Dalla versione 2.1.0 è inoltre possibile eseguire applicazioni che utilizzano le [librerie][11] [OpenGL][12] sulla macchina [client][13] sfruttando direttamente la scheda video del [computer][14] host.

  * Come scheda di rete [Ethernet][15], VirtualBox fornisce le seguenti [NIC][16]: 
      * AMD PCnet PCI II (Am79C970A);
      * AMD PCnet-Fast III (Am79C973) (default);
      * Intel PRO/1000 MT Desktop (82540EM);
      * Intel PRO/1000 T Server (82543GC);
      * Intel PRO/1000 MT Server (82545EM).

  * Come [scheda audio][17], VirtualBox mette a disposizione una periferica Intel ICH AC&#8217;97 oppure una [SoundBlaster 16][18].

  * [installando][19] il [pacchetto][20] proprietario di estensioni per VirtualBox, viene emulato un [controller][21] USB, così che qualunque periferica USB collegata al sistema host può essere vista da quello guest. Se VirtualBox svolge il ruolo di [server][22] [RDP][23], può anche utilizzare periferiche USB connesse al [client][13] RDP remoto come se fossero connesse all&#8217;host.

Inoltre VirtualBox è un software *<a href="https://it.wikipedia.org/wiki/Open_source" target="_blank">OpenSource</a> *(nella sua versione ridotta) liberamente scaricabile e per chi fosse interessato e abbia le conoscenze adeguate può &#8220;spulciare&#8221; il codice sorgente per capire il suo funzionamento. Per di più è disponibile per i maggiori sistemi operativi presenti in commercio.

VirtualBox in soldoni permette di emulare un sistema operativo (detto* guest*) su una macchina ospitante (detto *host*), tramite questo software è possibile virtualizzare Linux su Windows e/o viceversa, Linux su MacOs e/o viceversa, MacOs su Windows e/o viceversa. Non solo, è possibile anche utilizzare sistemi operativi sviluppati su un&#8217;architettura diversa da quella canonica di Intel o AMD su un sistema host Intel o AMD. (Non sempre è possibile, dipende dal grado di traduzione delle istruzioni macchina di un&#8217;architettura X ad un&#8217;architettura Y)

Per cui i vantaggi di un software di emulazione come VirtualBox sono molteplici:

  * <span style="line-height: 13px;">per un novellino che vorrebbe imparare ad usare Linux prima di installarlo fisicamente sulla proprio computer può sfruttare una macchina virtuale per effettuare i suoi test.</span>
  * per uno sviluppatore di software può sfruttare le macchine virtuali per testare il suo progetto sulle principali piattaforme.
  * una macchina virtuale può essere usata come una sorta di firewall per provare prima un software scaricato su internet in virtuale senza intaccare il sistema operativo host, per evitare eventuali danni da virus.

l&#8217;elenco potrebbe andare all&#8217;infinito, la virtualizzazione si presta a svariati casi dal *user oriented* all&#8217;impiego in progetti aziendali.

Unica pecca, per poterlo utilizzare bisogna avere un computer di medie prestazioni, con molta RAM e una discreta potenza di CPU. Vedremo insieme nei prossimi articoli come sfruttare questo software.

Come già detto VirtualBox è disponibile per i principali sistemi operativi che si trovano sul mercato, per scaricarlo basta andare nella pagina di <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">download</a> sul sito ufficiale.

Per chi utilizza Debian o derivate è possibile installarlo tramite repository

<pre class="lang:sh decode:true">sudo apt-get install virtualbox virtualbox-guest-additions</pre>

&nbsp;


 [1]: http://it.wikipedia.org/wiki/Hard_disk "Hard disk"
 [2]: http://it.wikipedia.org/wiki/File "File"
 [3]: http://it.wikipedia.org/wiki/Internet_Small_Computer_Systems_Interface "Internet Small Computer Systems Interface"
 [4]: http://it.wikipedia.org/wiki/Scheda_grafica "Scheda grafica"
 [5]: http://it.wikipedia.org/wiki/Periferica "Periferica"
 [6]: http://it.wikipedia.org/wiki/VESA "VESA"
 [7]: http://it.wikipedia.org/wiki/Megabyte "Megabyte"
 [8]: http://it.wikipedia.org/wiki/RAM "RAM"
 [9]: http://it.wikipedia.org/wiki/Driver "Driver"
 [10]: http://it.wikipedia.org/wiki/Macchina_virtuale "Macchina virtuale"
 [11]: http://it.wikipedia.org/wiki/Libreria_(informatica) "Libreria (informatica)"
 [12]: http://it.wikipedia.org/wiki/OpenGL "OpenGL"
 [13]: http://it.wikipedia.org/wiki/Client "Client"
 [14]: http://it.wikipedia.org/wiki/Computer "Computer"
 [15]: http://it.wikipedia.org/wiki/Ethernet "Ethernet"
 [16]: http://it.wikipedia.org/wiki/Scheda_di_rete "Scheda di rete"
 [17]: http://it.wikipedia.org/wiki/Scheda_audio "Scheda audio"
 [18]: http://it.wikipedia.org/wiki/Sound_Blaster "Sound Blaster"
 [19]: http://it.wikipedia.org/wiki/Installazione_(informatica) "Installazione (informatica)"
 [20]: http://it.wikipedia.org/wiki/Pacchetto_(software) "Pacchetto (software)"
 [21]: http://it.wikipedia.org/wiki/Controller_(informatica) "Controller (informatica)"
 [22]: http://it.wikipedia.org/wiki/Server "Server"
 [23]: http://it.wikipedia.org/wiki/RDP "RDP"