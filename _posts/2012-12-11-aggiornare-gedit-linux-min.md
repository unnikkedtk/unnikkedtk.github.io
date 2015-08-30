---
title: Aggiornare gedit su Linux Mint 14 Maya
author: unnikked
layout: post
permalink: /aggiornare-gedit-linux-min/
dsq_thread_id:
  - 993266875
itsec_enable_ssl:
  - 
categories:
  - Novità
---

**Linux Mint 14** ha di default la versione **2** di gedit, ma con un semplice trucchetto possiamo aggiornarla alla versione **3.6.1** (anche se l&#8217;ultima versione è la **3.6.2**).

<p align="center">
  <a href="http://unnikked.tk/wp-content/uploads/2012/12/gedit_testata_salto.png"><img class="aligncenter size-full wp-image-117" title="gedit_testata_salto" src="http://unnikked.tk/wp-content/uploads/2012/12/gedit_testata_salto.png" alt="gedit" width="300" height="154" /></a>
</p>

Apriamo semplicemente una finestra di terminale e digitiamo :

<pre class="lang:default highlight:0 decode:true">sudo apt-get purge gedit
sudo apt-get purge gedit-common
sudo apt-get install gedit-common/quantal
sudo apt-get install gedit/quantal</pre>

Ecco qui avremo **gedit** aggiornato alla versione** 3.6.1**

Questa procedura è inoltre utilizzabile anche per chi utilizza **Ubuntu 12.10 Quantal Quetzal**, nel caso in cui si trovi installata una versione non recente di gedit.

Ecco la lista dei plugin contenuta nel pacchetto di gedit:

  * **Change case **&#8211; cambia le lettere da maiuscolo a minuscolo o viceversa.
  * **Document statistics **&#8211; Conta il numero di linee, parole, caratteri con spazio, caratteri senza spazio e i byte nel file corrente.
  * **External tools **&#8211; Esegue programmi esterni e ne mostra i risultati.
  * **File browser pane **&#8211; Visualizza e apre i file direttamente dal pannello laterale.
  * **Indent lines **&#8211; Indenta la seguente linea oppure la rimuove.
  * **Insert date/time **&#8211; Inserisce la data corrente nel documento.
  * **Snippets **&#8211; Da la possibilità di creare macro personalizzate per aumentare la produttività.
  * **Sort **&#8211; Riordina il testo selezionato.
  * **Spell checker **&#8211; Controlla l&#8217;ortografia al testo selezionato. Puoi configurare gedit per controllare l&#8217;ortografia automaticamente o manualmente nella lingua specificata.
  * **Tag list **&#8211; Mostra nel pannello laterale una lista dei più comuni tag inseriti nel file.
  * **User name** &#8211; Inserisce il nome dell&#8217;utente corrente nel file.