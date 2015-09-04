---
title: Come abilitare il modulo mod_rewrite di apache
author: unnikked
layout: post
permalink: /come-abilitare-modulo-mod_rewrite/
itsec_enable_ssl:
  - 
dsq_thread_id:
  - 1317134269
categories:
  - Linux
  - SysAdmin
tags:
  - VPS
---

Apache offre un interessante modulo per *&#8220;riscrivere&#8221;* le proprie *URL* in base a dei criteri scelti. Il modulo <a title="mod_rewrite apache" href="http://httpd.apache.org/docs/2.0/mod/mod_rewrite.html" target="_blank">`mod_rewrite`</a> permette questa operazione. Questo modulo ci viene in aiuto per rendere le *URL* delle nostre pagine *SEO-Friendly*, ovvero ci permette di ridefinire le *URL* del nostro sito web per essere più *&#8220;appetibili&#8221;* ai motori di ricerca come Google, Bing e Yahoo.

Per abilitare il modulo `mod_rewrite`, da terminale:

<pre class="lang:sh decode:true">sudo a2enmod rewrite</pre>

e successivamente riavviamo `apache`

<pre class="lang:sh decode:true crayon-selected">sudo service apache2 restart</pre>

Il modulo è stato abilitato. Ora nel file `.htaccess` è possibile richiedere la riscrittura delle *url*, ecco un file di esempio:

<pre class="lang:default decode:true">&lt;IfModule mod_rewrite.c&gt;
    RewriteEngine On
    RewriteBase /
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.php [L]
&lt;/IfModule&gt;</pre>

In un prossimo articolo cercherò di spiegare il funzionamento di questo modulo.