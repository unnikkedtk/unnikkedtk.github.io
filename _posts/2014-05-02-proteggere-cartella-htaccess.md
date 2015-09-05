---
title: Come proteggere tramite password una cartella attraverso .htaccess
author: unnikked
layout: post
permalink: /proteggere-cartella-htaccess/
dsq_thread_id:
  - 2655460240
categories:
  - Webmaster
tags:
  - apache
  - VPS
---

Quello che andremo a vedere in questo breve articolo è una tecnica che ci consentirà di proteggere con password una cartella tramite una funzionalità nativa di **<a href="tag/apache/" title="Articoli correlati. " target="_blank">Apache</a>** utilizzando il file `.htaccess`.

Per proteggere una cartella con una password basta inserire il seguente codice in un file `.htaccess` e inserirlo nella cartella da bloccare.

<pre class="lang:sh decode:true ">AuthType Basic
AuthName "Area riservata"
AuthUserFile /percorso/al/file/.htpasswd
require valid-user</pre>

Le direttive `AuthName` e `AuthUserFile` specificano rispettivamente il nome da mostrare nel dialogo di accesso e il percorso del file `.htpasswd` in cui verranno elencati gli utenti, con le rispettive password, abilitati all&#8217;area.

Per generare le password è possibile utilizzare <a href="https://www.google.it/search?q=how+to+create+password+for+.htaccess" title="how to create password for .htaccess" target="_blank">qualsiasi strumento ad-hoc</a> che si può reperire online oppure generarlo tramite il comando `htpasswd` da linea di comando: 

<pre class="lang:default decode:true " >htpasswd -c /percorso/al/file/.htpasswd unnikked</pre>

Verrà chiesto di inserire la password per l&#8217;utente specificato. E&#8217; importante sottolineare che il percorso per il file `.htpasswd` <a href="http://it.wikipedia.org/wiki/Percorso#Percorsi_Unix" title="Percorsi Unix - Wikipedia" target="_blank">deve essere assoluto</a> (e può avere qualsiasi nome fintantoché è specificato correttamente nel file `.htaccess`) e che è possibile collocare tale file in qualsiasi cartella del filesystem (ovviamente impostando opportunamente i <a href="permessi-file-chmod" title="Come impostare i permessi ai file con “chmod”" target="_blank">permessi</a>). 

<p align="center">
  <img src="/wp-content/uploads/2014/04/htpassword-login-dialog.png" alt="htaccess-login-dialog" />
</p>

Ovviamente è possibile aggiungere ulteriori utenti al file `.htaccess`, è necessario ripetere il comando sopra esposto e specificare un nuovo nome utente.

Accoppiare questo metodo basilare di autenticazione con l&#8217;uso di un certificato <a href="come-configurare-un-certificato-ssl-su-apache" title="Come configurare un certificato SSL su Apache" target="_blank">SSL self-signed</a> oppure rilasciato da una <a href="http://it.wikipedia.org/wiki/Certificate_authority" title="Certificate authority - Da Wikipedia, l'enciclopedia libera." target="_blank">Certification Authorithy</a> si renderà il processo di autenticazione più sicuro. 

Tale espediente può essere utilizzato sia su <a href="http://unnikked.tk/tag/vps/" title="Articoli correlati a VPS" target="_blank">server VPS</a> o su hosting condiviso che supporti tale funzionalità di Apache. 
