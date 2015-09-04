---
title: Esegui operazioni automaticamente tramite crontab
author: unnikked
layout: post
permalink: /operazioni-automatiche-crontab/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 1953206143
categories:
  - Linux
  - SysAdmin
tags:
  - VPS
---

Una attività molto comune per chi deve gestire un server è quello di pianificare backup periodici dei propri files, ottimizzare le tabelle di un database o altro. Per evitare di eseguire manualmente questi compiti sui sistemi operativi Linux esiste un <a title="Demone (Informatica) - Wikipedia" href="http://it.wikipedia.org/wiki/Demone_(informatica)" target="_blank">demone</a> chiamato `crontab` che ci consente di pianificare, ed eseguire dunque, periodicamente operazioni in base a regole specifiche.

Assicuriamoci che il demone sia installato sulla distribuzione Linux (nelle distribuzioni più famose è già presente).

L&#8217;esecuzione di questo programma si basa su delle regole ben precise che vanno inserite in un file di configurazione. (Vedremo in seguito come modificarlo) La sintassi generica da seguire è la seguente.

<div class="su-table">
  <table>
    <tr>
      <th style="text-align:center;">
        <strong>Minuto</strong>
      </th>
      
      <th style="text-align:center;">
        <strong>Ora</strong>
      </th>
      
      <th style="text-align:center;">
        <strong>Giorno del mese</strong>
      </th>
      
      <th style="text-align:center;">
        <strong>Mese</strong>
      </th>
      
      <th style="text-align:center;">
        <strong>Giorno della settimana</strong>
      </th>
      
      <th style="text-align:center;">
        <strong>Comando</strong>
      </th>
    </tr>
    
    <tr>
      <td style="text-align:center;">
        (0-59)
      </td>
      
      <td style="text-align:center;">
        (0-23)
      </td>
      
      <td style="text-align:center;">
        (1-31)
      </td>
      
      <td style="text-align:center;">
        (1-12 o Jan-Dec)
      </td>
      
      <td style="text-align:center;">
        (0-6 o Sun-Sat)
      </td>
      
      <td style="text-align:center;">
      </td>
    </tr>
    
    <tr>
      <td style="text-align:center;">
        <code></code>
      </td>
      
      <td style="text-align:center;">
        <code>2</code>
      </td>
      
      <td style="text-align:center;">
        <code>12</code>
      </td>
      
      <td style="text-align:center;">
        <code>*</code>
      </td>
      
      <td style="text-align:center;">
        <code>0,6</code>
      </td>
      
      <td style="text-align:center;">
        <code>/usr/bin/find</code>
      </td>
    </tr>
  </table>
</div>

Dove i giorni della settimana vanno da *domenica* a *sabato*.

Per modificare il file di configurazione possiamo lanciare il comando :

<pre class="lang:sh decode:true">crontab -e</pre>

Se è la prima volta che si accede a crontab il sistema mostrerà a video una serie di opzioni riferiti all&#8217;editor di default da utilizzare :

<pre class="lang:sh decode:true">no crontab for unnikked - using an empty one

Select an editor.  To change later, run 'select-editor'.
  1. /bin/ed
  2. /bin/nano        &lt;---- easiest
  3. /usr/bin/vim.basic
  4. /usr/bin/vim.tiny

Choose 1-4 [2]:</pre>

Una volta aperto l&#8217;editor di testo è possibile inserire le varie regole, ecco alcuni esempi:

<pre class="lang:sh decode:true">* * * * * /sbin/ping -c 1 192.168.0.1 &gt; /dev/null</pre>

Questa espressione esegue il comando `/sbin/ping -c 1 192.168.0.1` <a title="Gestire i canali standard di Linux" href="gestire-i-canali-standard-linux/" target="_blank">redirezionandolo</a> su `/dev/null` ad ogni minuto, ogni ora, ogni giorno, ogni mese ed ad ogni giorno della settimana.

<pre class="lang:sh decode:true">0 0,12 1 * * /sbin/ping -c 192.168.0.1; ls -la &gt;&gt;/var/log/cronrun</pre>

Questa espressione esegue i comandi specificati alle 24 e alle 12 di ogni primo giorno di ogni mese.

E&#8217; possibile anche specificare alcune parole chiavi per alcune tipologie di espressioni come: 

<div class="su-table">
  <table>
    <tr>
      <th>
        <strong>Chiave</strong>
      </th>
      
      <th>
        <strong>Descrizione</strong>
      </th>
      
      <th>
        <strong>Equivalente a</strong>
      </th>
    </tr>
    
    <tr>
      <td>
        <code>@yearly (o @annually)</code>
      </td>
      
      <td>
        Si esegue una volta all&#8217;anno a mezzanotte al mattino del 1 Gennaio
      </td>
      
      <td>
        <code>0 0 1 1 *</code>
      </td>
    </tr>
    
    <tr>
      <td>
        <code>@monthly</code>
      </td>
      
      <td>
        Si esegue una volta a mese a mezzanotte al mattino del primo del mese
      </td>
      
      <td>
        <code>0 0 1 * *</code>
      </td>
    </tr>
    
    <tr>
      <td>
        <code>@weekly</code>
      </td>
      
      <td>
        Si esegue una volta a settimana alla mezzanotte di Domenica
      </td>
      
      <td>
        <code>0 0 * * 0</code>
      </td>
    </tr>
    
    <tr>
      <td>
        <code>@daily</code>
      </td>
      
      <td>
        Si esegue una volta a giorno alla mezzanotte
      </td>
      
      <td>
        <code>0 0 * * *</code>
      </td>
    </tr>
    
    <tr>
      <td>
        <code>@hourly</code>
      </td>
      
      <td>
        Si esegue una volta all&#8217;inizio di ogni ora
      </td>
      
      <td>
        <code>0 * * * *</code>
      </td>
    </tr>
    
    <tr>
      <td>
        <code>@reboot</code>
      </td>
      
      <td>
        Si esegue all&#8217;avvio
      </td>
      
      <td>
        <code>@reboot&lt;/p>
&lt;p></code>
      </td>
    </tr>
  </table>
</div>

E’ possibile anche utilizzare caratteri speciali nella definizione di un espressione, tuttavia essi dipendono dalla distribuzione e versione specifica di `cron`:

<div class="su-list su-list-style-">
  <ul>
    <li>
      <i class="fa fa-angle-right" style="color:#333"></i> <p>
        <strong>Asterisco (*)</strong>: L’asterisco indica che l’espressione corrisconde a tutti i valori del campo. Es: usando un asterisco nel campo <em>mese</em> indica <em>ogni mese</em>.
      </p>
    </li>
    
    <li>
      <i class="fa fa-angle-right" style="color:#333"></i> <p>
        <strong>Slash ( / )</strong>: Lo slash descrive gli incrementi di intervalli. Per esempio <code>3-59/15</code> nel campo <em>minuto</em> indica il terzo minuto dell’ora e ogni 15 minuti da allora in poi. La forma <code>*/...</code> è equivalente alla forma <code>primo-ultimo/...</code>, cioè un incremento sul più grande possibile intervallo del campo.
      </p>
    </li>
    
    <li>
      <i class="fa fa-angle-right" style="color:#333"></i> <p>
        <strong>Percento ( % )</strong>: I segni percento (<code>%</code>) nel comando, salvo che non viene valutato come carattere di escape tramite il simbolo (<code></code>), sono cambiati in caratteri di nuova linea, e tutti i dati dopo il primo <code>%</code> sono inviati al comando come standard input.
      </p>
    </li>
    
    <li>
      <i class="fa fa-angle-right" style="color:#333"></i> <p>
        <strong>Virgola ( , )</strong>: La virgola è usata per separare gli elementi di una lista. Per esempio, l’uso di <code>MON,WED,FRI</code> nel campo <em>giorno della settimana</em> significa <em>lunedi, mercoledi e giovedi</em>.
      </p>
    </li>
    
    <li>
      <i class="fa fa-angle-right" style="color:#333"></i> <p>
        <strong>Trattino ( &#8211; )</strong>: Per esempio, <code>2013-2020</code> indica ogni anno tra l’anno <code>2013</code> e l’anno <code>2020</code>, incluso.
      </p>
    </li>
    
    <li>
      <i class="fa fa-angle-right" style="color:#333"></i> <p>
        <strong>L</strong>: ‘L’ sta per “ultimo”. Quando è usato nel campo <em>giorno della settimana</em>, permette di specificare costrutti come “l’ultimo venerdi” (”<code>5L</code>”) del mese specificato. Nel campo <em>giorno del mese</em> indicica l’ultimo giorno del mese. <em>Nota: L è un carattere non stardard ed esiste solo in alcune implementazioni di <code>cron</code> (Quartz java scheduler)</em>.
      </p>
    </li>
    
    <li>
      <i class="fa fa-angle-right" style="color:#333"></i> <p>
        <strong>W</strong>: Il carattere ‘W’ viene utilizzato nel campo <em>giorno del mese</em>. Questo carattere è usato per specificare i giorni della settimana (lunedi-venerdi) vicini al giorno specificato. Come esempio, se si specifica ”<code>15W</code>” come valore del campo <em>giorno del mese</em>. il significato è: “i più vicini giorni della settimana vicini al giorno 15 del mese.” Così, se il giorno 15 è sabato, il cron viene eseguito venerdi 14. Se il 15 è domenica, il cron viene eseguito lunedi 16. Se il 15 è martedi, il cron viene eseguito martedi 15. Comunque se si specifica ”<code>1W</code>” come valore e il primo giorno del mese è sabato, il cron viene eseguito lunedi 3 dal momento che non salta oltre i giorni del mese. Il carattere ‘W’ può essere specificato solo quando il <em>giorno del mese</em> è un singolo giorno, non un intervallo o una lista di giorni.<em>Nota: W è un carattere non stardard ed esiste solo in alcune implementazioni di <code>cron</code> (Quartz java scheduler)</em>.
      </p>
    </li>
    
    <li>
      <i class="fa fa-angle-right" style="color:#333"></i> <p>
        <strong>Hash ( # )</strong>: ’#’ è permesso nel campo <em>giorno della settimana</em> e deve essere seguito da un numero tra 1 e 5 (dopo aver specificato il giorno della settimana ovviamente). Permette di specificare costrutti come “il secondo venerdi” del mese specificato.
      </p>
    </li>
    
    <li>
      <i class="fa fa-angle-right" style="color:#333"></i> <p>
        <strong>Punto interrogativo ( ? )</strong>: E’ usato al posto di ’*’ per lasciare i campi <em>giorno del mese</em> o <em>giorno della settimana</em> vuoto.
      </p>
    </li>
  </ul>
</div>

E&#8217; possibile comunque vedere i crontab presenti nel sistema per l&#8217;utente corrente tramite il comando:

<pre class="lang:sh decode:true " >crontab -l</pre>

Oppure è possibile editare e/o visualizzare il file crontab di un specifico utente

<pre class="lang:default decode:true " >crontab -u(user)    &lt;- modifica i crontab di (user)
crontab -u(user) -l &lt;- visualizza i crontab di (user)</pre>

Dove `(user)`, comprese le parentesi tonde sta per il nome dell&#8217;utente presente nella macchina, ovviamente bisogna avere i <a href="permessi-file-chmod/" title="Come impostare i permessi ai file con “chmod”" target="_blank">privilegi</a> abilitati per modificare il file di crontab dell&#8217;utente specificato.

Per maggiori informazioni sui comandi supportati da `crontab` invito la lettura del suo manuale tramite shell:

<pre class="lang:sh decode:true " >man crontab</pre>
