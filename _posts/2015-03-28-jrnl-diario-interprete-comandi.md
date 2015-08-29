---
title: 'jrnl &#8211; un semplice diario per l&#8217;interprete dei comandi'
author: unnikked
layout: post
permalink: /jrnl-diario-interprete-comandi/
dsq_thread_id:
  - 3634022267
categories:
  - Linux
  - Ubuntu
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


jrnl è una applicazione che permette di gestire un diario personale tramite la riga dei comandi. Le voci del diario sono salvate in un file di testo &#8211; puoi inserirlo nella cartella di Dropbox per una sincronizzazione istantanea e avrai la certezza il tuo diario sarà anche leggibile nel futuro, poiché utilizza un file di testo per salvare i dati.

Opzionalmente è possibile crittografare il diario tramite l&#8217;algoritmo <a title="Advanced Encryption Standard - Wikipedia" href="http://en.wikipedia.org/wiki/Advanced_Encryption_Standard" target="_blank">AES 256-bit</a>.

## Installazione

Per installare jrnl è necessario che sulla propria macchina sia installato python e il gestore di pacchetti pip, python è ormai incluso di base in ogni distribuzione linux. Per installare pip su una distro Ubuntu è sufficiente digitare:

<pre class="lang:sh decode:true ">sudo apt-get install python-pip</pre>

Per l&#8217;installazione del diario:

<pre class="lang:sh decode:true ">sudo pip install jrnl</pre>

per la versione standard.

<pre class="lang:sh decode:true ">sudo pip install jrnl[encrypted]</pre>

per la versione che supporti la crittografia.

Alla prima esecuzione del comando `jrnl` il programma chiederà alcune informazioni per una configurazione iniziale:

<pre class="lang:sh decode:true">jrnl 
Path to your journal file (leave blank for ~/journal.txt): 
~/Dropbox/journal.txt
Enter password for journal (leave blank for no encryption): 
Do you want to store the password in your keychain? [Y/n]
y
Journal will be encrypted.
</pre>

  * **Path to your journal file (leave blank for ~/journal.txt): **va specificato il percorso del file di testo in cui il programma salverà le voci.
  * **Enter password for journal (leave blank for no encryption): **se si vuole crittografare le proprie note è necessario fornire una passphrase. 
      * **Do you want to store the password in your keychain? [Y/n] **nel caso si sia scelto di crittografare le note l&#8217;applicazione chiederà se può aggiungere la passphrase al keychain del sistema operativo, in questo modo non sarà necessario inserire alcuna password durante l&#8217;inserimento di una nuova voce.

## Guida all&#8217;uso

jrnl ha due modalità: **composizione** e **visualizzazione**. Ogni qualvolta si avvia il programma senza fornire alcun parametro si entra in modalità composizione, cioè è possibile inserire la voce al diario tramite l&#8217;interprete dei comando o un editor esterno a scelta.

L&#8217;applicazione rompe intenzionalmente una convenzione riguardante i parametri a linea di comando: tutti gli argomenti che inizieranno con un singolo trattino &#8216;`-`&#8216; filtreranno il diario prima della visualizzazione, possono essere combinati arbitrariamente. Gli argomenti con un doppio trattino &#8216;`--`&#8216; controllerà come il diario sarà visualizzato o esportato. I due metodi sono mutualmente esclusivi (cioè è possibile specificare un solo modo per visualizzare o esportare il diario).

### Visualizzazione del diario

E&#8217; possibile visualizzare i diari usando jrnl:

<pre class="lang:sh decode:true ">jrnl -ls</pre>

I diari mostrati corrisponderanno a quelli specificati nel file di configurazione del programma.

### Inserimento di una voce

La modalità composizione viene attivata ogni qual volta si avvia jrnl senza argomenti che inviterà alla immissione di una voce o l&#8217;avvio dell&#8217;editor preferito.

E&#8217; possibile scrivere direttamente sulla linea di comando.

<pre class="lang:sh decode:true ">jrnl today at 3am: I just met Steve Buscemi in a bar! He looked funny.</pre>

<div class="su-note" style="border-color:#8cc5e5;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;">
  <div class="su-note-inner su-clearfix" style="background-color:#9cdbff;border-color:#ebf8ff;color:#333333;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;">
    La maggior parte degli interpreti dei comandi contengono un insieme di caratteri riservati, come <code>#</code> e <code>*</code>, graffette non chiuse, parentesi e così via durante la scrittura di una voce. Per la scrittura di voci lunghe bisogna avviare jrnl senza parametri. Alternativamente si può usare un editor esterno.
  </div>
</div>

E&#8217; possibile importare una voce direttamente da un file:

<pre class="lang:sh decode:true ">jrnl &lt; my_entry.txt</pre>

#### Timestamp intelligenti

La tipologia di timestamp supportati (solo in inglese!):

  * at 6am
  * yesterday
  * last monday
  * sunday at noon
  * 2 march 2012
  * 7 apr
  * 5/20/1998 at 23:42

#### Voci preferite

Per rendere una voce preferita:

<pre class="lang:sh decode:true ">jrnl last sunday *: Best day of my life.</pre>

Se non si vuole aggiungere una data (cioè per riferirsi alla data corrente), le opzioni seguenti sono equivalenti:

  * `jrnl *: Best day of my life.`
  * `jrnl *Best day of my life.`
  * `jrnl Best day of my life.*`

<div class="su-note" style="border-color:#8cc5e5;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;">
  <div class="su-note-inner su-clearfix" style="background-color:#9cdbff;border-color:#ebf8ff;color:#333333;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;">
    Bisogna prestare attenzione che il segno asterisco non sia circondato da spazi bianchi. Es. <code>jrnl Best day of my life! * </code> non funzionerà (il motivo è che * ha un significato speciale per la maggior parte degli interpreti dei comandi).
  </div>
</div>

### Visualizzazione

<pre class="lang:sh decode:true ">jrnl -n 10</pre>

mostrerà le ultime dieci voci (`jrnl -10` è equivalente).

<pre class="lang:sh decode:true ">jrnl -from "last year" -until march</pre>

mostrerà tutto ciò che avvenuto tra l&#8217;inizio dello scorso anno fino a marzo. Per vedere solo le voci preferite:

<pre class="lang:sh decode:true ">jrnl -starred</pre>

### Utilizzo dei tag

Mantieni traccia delle persone, progetti o luoghi etichettandoli con `@` nelle voci.

<pre class="lang:sh decode:true ">jrnl Had a wonderful day on the @beach with @Tom and @Anna.</pre>

E&#8217; possibile filtrare le voci del diario così:

<pre class="lang:sh decode:true ">jrnl @pinkie @WorldDomination</pre>

Visualizzerà tutte le voci in cui sia `@pinkie` o `@WorldDomination` compaiono.

<pre class="lang:sh decode:true ">jrnl -n 5 -and @pineapple @lubricant</pre>

mostrerà le ultime cinque voci contenenti sia @pineapple che @lubricant. E&#8217; possibile cambiare quale simbolo associare per l&#8217;etichettatura nel file di configurazione.

<div class="su-note" style="border-color:#8cc5e5;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;">
  <div class="su-note-inner su-clearfix" style="background-color:#9cdbff;border-color:#ebf8ff;color:#333333;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;">
    <code>jrnl @pinkie @WorldDomination</code> entrerà in modalità visualizzazione anche se non è stato fornito alcun parametro poiché tutte le stringhe inserite sembrano etichette.
  </div>
</div>

### Modifica voci

E&#8217; possibile modificare le voci dopo averle inserite. Ciò è particolarmente utile quando il file del diario è criptato. Per usare questa caratteristica è necessario avere un editor di testo impostato nel file di configurazione:

<pre class="lang:sh decode:true ">jrnl -until 1950 @texas -and @history --edit</pre>

Aprirà l&#8217;editor di testo con tutte le voci etichettare con `@texas` e `@history` prima del 1950; dopo aver salvato il file e chiuso l&#8217;editor il diario sarà aggiornato.

Se si gestiscono diversi diari, si può anche modificare per esempio l&#8217; ultima voce del diario di lavoro tramite `jrnl work -n 1 --edit`. In ogni caso verrà aperto l&#8217;editor di testo.

E&#8217; possibile usare questa caratteristica per eliminare voci dal diario:

<pre class="lang:sh decode:true ">jrnl @girlfriend -until 'june 2012' --edit</pre>

Seleziona tutto il testo, premi cancella, e &#8230;

## Crittografia

### Crittografare e decrittografare

Se non si è scelto di crittografare il file alla prima volta dell&#8217;esecuzione di jrnl è possibile crittografare il file esistente o cambiare la password usando:

<pre class="lang:sh decode:true ">jrnl --encrypt</pre>

Se è già crittografato, il programma chiederà per prima la password corrente. E&#8217; possibile inserire una nuova password e il file del diario sarà sostituito con un file crittografato. Invece,

<pre class="lang:sh decode:true ">jrnl --decrypt</pre>

sostituirà il file crittografato con un file in chiaro. E&#8217; possibile anche specificare un nome di un file, per esempio `jrnl --decrypt plain_text_copy.txt`, per lasciare il file originario invariato.

### Salvare le password nel keychain

Ogniqualvolta un diario viene crittografato, verrà chiesto di salvare la password nel keychain. Se si sceglie questo non sarà necessario inserire la password ogni volta che si voglia inserire o leggere una voce dal diario.

Se inizialmente non si salva la password nel keychain può essere fatto inseguito, basta eseguire `jrnl --encrypt` su un diario già crittografato e inserire la stessa password.

### Una nota sulla sicurezza

Nonostante jrnl segua le pratiche migliori, la sicurezza completa è una illusione. Più di preciso, jrnl lascerà tracce in memoria e nello storico dell&#8217;interprete dei comandi, è pensato di mantenere i diari sicuri durante il transito, per esempio per salvarli su Dropbox. Per disabilitare la registrazione dello storico del diario basta inserire nel file `.bashrc`:

<pre class="lang:sh decode:true ">HISTIGNORE="jrnl *"</pre>

### Decriptare manualmente

Se si vuole decriptare il diario manualmente è necessario scrivere un programma che supporta l&#8217;algoritmo AES in CBC. La chiave usata per crittografare è l&#8217;hash SHA-256 della password, il IV (vettore di inizializzazione) è salvato nei primi 16 byte del file criptato. Il testo in chiaro è codificato in UTF-8 e riempito secondo PKCS#7 prima di essere crittografato. Perciò, per decrittografare un diario in python:

<pre class="lang:sh decode:true ">import hashlib, Crypto.Cipher
key = hashlib.sha256(my_password).digest()
with open("my_journal.txt") as f:
    cipher = f.read()
    crypto = AES.new(key, AES.MODE_CBC, iv = cipher[:16])
    plain = crypto.decrypt(cipher[16:])
    plain = plain.strip(plain[-1])
    plain = plain.decode("utf-8")</pre>

## Importazione ed esportazione

### Esportare etichette

Con:

<pre class="lang:sh decode:true ">jrnl --tags</pre>

Si otterrà una lista di tutte le etichette usate nel diario, ordinate in base alla frequenza di utilizzo. Le etichette che occorrono per più di una volta nella stessa voce verranno contate come uniche.

### Lista di tutte le voci

<pre class="lang:sh decode:true ">jrnl --short</pre>

Mostrerà solamente la data e il titolo di ogni voce.

### Esportazione in JSON

<pre class="lang:sh decode:true ">jrnl --export json</pre>

### Esportazione in Markdown

<pre class="lang:sh decode:true ">jrnl --export markdown</pre>

### Esportazione in file di testo

<pre class="lang:sh decode:true ">jrnl --export text</pre>

### Esportazione in file di testo specificato

Può essere specificato il file di output del diario esportato usando l&#8217;argomento `-o`:

<pre class="lang:sh decode:true ">jrnl --export md -o journal.md</pre>

Il comando genererà un file chiamato `journal.md`. Se l&#8217;argomento `-o` è una cartella, jnrl esporterà ogni voce in un file individuale.

<pre class="lang:sh decode:true ">jrnl --export json -o my_entries/</pre>

Il contenuto di `my_entries/ ` somiglierà a:

<pre class="lang:sh decode:true">my_entries/
|- 2013_06_03_a-beautiful-day.json
|- 2013_06_07_dinner-with-gabriel.json
|- ...
</pre>

## Usi avanzati

### File di configurazione

Si può configurare il modo in cui jrnl si comporta in un file di configurazione. Di default è `~/.jrnl_config`. Se la variabile `XDG_CONFIG_HOME` è impostata il file di configurazione sarà salvato presso `$XDG_CONFIG_HOME/jrnl`.

Il file di configurazione è formattato usando la sintassi JSON potendo configurare le seguenti opzioni:

  * **journals**: percorsi ai file dei diari
  * **editor**: se impostato, esegue il comando per lanciare un editor di testo esterno per la stesura delle voci, es. `vim`
  * **encrypt**: se `true` crittograferà il diario usando AES
  * **tagsymbols**: i simboli che saranno interpretati come etichette.
  * **default_hour** e **default_minute**: se si fornisce una data, come thursday, ma non viene specificato un&#8217;ora, la voce sarà creata usando questo parametro.
  * **timeformat**: come formattare i timestamp nel diario, consulta la documentazione di python per i formati.
  * **highlight**: se `true` le etichette saranno evidenziate in azzurro
  * **linewrap**: controlla la larghezza dell&#8217;output. Impostato su `false` non spezzerà lunghe linee.
Anche se sembra intuitivo usare il carattere `#` per le etichette, c&#8217;è un compromesso: nella maggior parte degli interpreti dei comandi questo simbolo è interpretato come un commento. Ciò significa che se digiti

<pre class="lang:sh decode:true " >jrnl Implemented endless scrolling on the #frontend of our website.</pre>

l&#8217;interprete bash troncherà tutto ciò che segue `#` prima di passarlo a `_jrnl`. Per evitare questo comportamento racchiudi l&#8217;input tramite le graffette: 

<pre class="lang:sh decode:true " >jrnl "Implemented endless scrolling on the #frontend of our website."</pre>

O usa il prompt dei comandi o un editor esterno per comporre le voci. 

## Diari multipli

Puoi configurare `_jrnl_` in modo da usare più diari (es. privato e lavoro) definendo più diari nel file `.jrnl_config`, per esempio:

<pre class="lang:js decode:true " >{
...
  "journals": {
    "default": "~/journal.txt",
    "work":    "~/work.txt"
  }
}</pre>

Il diario `default` è creato la prima volta che si avvia `_jrnl_`. E&#8217; possibile accedere al diario `work` usando `jrnl work` invece che `jrnl`, esempi:

<pre class="lang:sh decode:true " >jrnl work at 10am: Meeting with @Steve
jrnl work -n 3</pre>

useranno entrambi `~/work.txt`, mentre `jrnl -n 3` mostrerà le ultime tre voci da `~/journal.txt` (lo stesso risultato si ottiene tramite `jrnl default -n 3`)

E&#8217; possibile anche sovrascrivere le opzioni di default per ogni diario individualmente: 

<pre class="lang:js decode:true " >{
  ...
  "encrypt": false
  "journals": {
    "default": "~/journal.txt",
    "work": {
      "journal": "~/work.txt",
      "encrypt": true
    },
    "food": "~/my_recipes.txt",
}
</pre>

I diari `default` e `food` non verranno crittografati, mentre il diario work sì. 

Cambiare `encrypt` ad un valore diverso non crittograferà o decrittograferà i file di diario, afferma semplicemente se il diario è crittografato. Quindi cambiando manualmente questa opzione potrebbe rendere impossibile la lettura del diario. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>