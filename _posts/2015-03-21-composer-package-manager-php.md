---
title: 'Composer &#8211; il gestore di paccchetti di PHP'
author: unnikked
layout: post
permalink: /composer-package-manager-php/
dsq_thread_id:
  - 3615673989
categories:
  - PHP
  - Programmazione
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


<a title="Composer" href="https://getcomposer.org/" target="_blank">Composer</a> è un gestore di pacchetti per PHP, simile a <a title="Python PIP" href="http://en.wikipedia.org/wiki/Pip_%28package_manager%29" target="_blank">pip</a> per Python, <a title="RubyGems" href="http://en.wikipedia.org/wiki/RubyGems" target="_blank">gem</a> per ruby e <a title="NPM" href="https://www.npmjs.com/" target="_blank">npm</a> per <a title="Come installare Node.js su Debian, Ubuntu e derivate" href="installare-node-js-su-ubuntu" target="_blank">Node</a>. Permette di definire un file <a title="Il formato JSON" href="il-formato-json" target="_blank">JSON</a> per elencare le dipendenze del codice cercando di risolvere questi vincoli per l&#8217;utente scaricando e installando i pacchetti software necessari.

<img class="aligncenter wp-image-2472 size-full" src="https://unnikked.tk/wp-content/uploads/2015/03/composer-cli.png" alt="composer-cli" width="716" height="417" />

## Installare Composer

Per installare una istanza del gestore dei pacchetti bisogna prima posizionarsi nella cartella di progetto ed eseguire:

<pre class="lang:sh decode:true ">curl -sS https://getcomposer.org/installer | php</pre>

Per convenienza è possibile installarlo globalmente:

<pre class="lang:sh decode:true ">mv composer.phar /usr/local/bin/composer
chmod +x composer</pre>

## Come utilizzare composer

Composer ha due principali categorie di dipendenze che può gestire: *&#8220;require&#8221;* e *&#8220;require-dev&#8221;*. Le dipendenze elencate come *&#8220;require&#8221;* sono installate sempre, mentre le dipendenze *&#8220;require-dev&#8221;* sono solo installare quando richieste esplicitamente. Di solito sono strumenti utilizzati durante lo sviluppo, come <a title="PHP CodeSniffer" href="https://github.com/squizlabs/PHP_CodeSniffer" target="_blank">PHP_CodeSniffer</a>. La linea seguente mostra un esempio di come installare <a title="Guzzle HTTP client" href="http://docs.guzzlephp.org/en/latest/" target="_blank">Guzzle</a>, una libreria HTTP popolare.

<pre class="lang:sh decode:true ">php composer.phar require guzzle/guzzle</pre>

<img class=" size-full wp-image-2475 aligncenter" src="https://unnikked.tk/wp-content/uploads/2015/03/installing-guzzle.png" alt="installing-guzzle" width="717" height="268" />

Per installare uno strumento solo per motivi di sviluppo, bisogna aggiungere il flag `--dev`:

<pre class="lang:sh decode:true ">php composer.phar require --dev 'sebastian/phpcpd'</pre>

Ciò installa <a title="PHP Copy Paste Detector" href="https://github.com/sebastianbergmann/phpcpd" target="_blank">PHP Copy-Paste Detector</a>, un altro strumento per misurare la qualità del codice ed è solo una dipendenza in fase di sviluppo.

## Install o update

La prima volta che si esegue `composer install` installerà le librerie e le dipendenze necessarie, basato sul file `composer.json`. Quando termina crea un file lucchetto chiamato `composer.lock`. Questo file contiene una lista di dipendenze che il gestore trova per noi e le versioni esatte. Perciò ogni qualvolta che cercheremo di installare le dipendenze, guarderà in questo file lucchetto e installerà le versioni specificate.

<img class="aligncenter size-full wp-image-2476" src="https://unnikked.tk/wp-content/uploads/2015/03/installing-monolog.png" alt="installing-monolog" width="716" height="141" />

Il comando `composer update` è più aggressivo. Ignora il file `composer.lock` (se presente) e cerca di trovare le versioni più aggiornate di ogni dipendenza che soddisfa i vincoli nel file `composer.json`. Genera un nuovo file `composer.lock` al termine.

## Autoloading

Entrambi i comandi `composer install` e `update` genereranno un autoloader che indicherà a PHP dove trovare tutti i file necessari per usare le librerie che abbiamo appena installato. Per usarlo, basterà usare questa linea (di solito inserita nel file di <a title="Bootstrapping" href="http://en.wikipedia.org/wiki/Bootstrapping" target="_blank">bootstrap</a> che viene eseguito in ogni richiesta):

<pre class="lang:php decode:true">require 'vendor/autoload.php';</pre>

### Esempio

Supponendo di avere un file di configurazione come il seguente:

<pre class="lang:js decode:true">{
    "require": {
        "monolog/monolog": "1.0.*"
    }
}</pre>

una volta eseguito il comando `composer install` è possibile utilizzare direttamente la libreria come mostrato da questo codice di esempio:

<pre class="lang:php decode:true ">require 'vendor/autoload.php';

$log = new Monolog\Logger('name');
$log-&gt;pushHandler(new Monolog\Handler\StreamHandler('app.log', Monolog\Logger::WARNING));

$log-&gt;addWarning('Foo');</pre>

## Conclusioni

Avere a disposizione un gestore di pacchetti ci aiuta a risparmiare tempo nella risoluzione delle dipendenze di un software. Oggi giorno si tendono a sviluppare applicazioni sempre più complesse che utilizzano moduli software già esistenti, ben sviluppati e robusti. Una risoluzione manuale delle dipendenze non solo è noiosa ma anche soggetta ad errori, ecco come i gestori di pacchetti ci semplificano la vita.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>