---
title: 'Virtual Host Nginx &#8211; Come configurarli'
author: unnikked
layout: post
permalink: /virtual-host-nginx/
dsq_thread_id:
  - 3749690387
categories:
  - SysAdmin
tags:
  - nginx
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Su Ubuntu, Nginx segue lo schema ordinario per le configurazioni (come Apache). Ecco i file e le cartelle che si trovano in `/etc/nginx`:

  * /etc/nginx/conf.d
  * /etc/nginx/sites-available
  * /etc/nginx/sites-enabled
  * /etc/nginx/nginx.conf

Le cartelle `sites-available` e `sites-enabled` funzionano allo stesso modo come con Apache.

Per una introduzione su come installare Nginx clicca <a href="installare-nginx-ubuntu" title="Come installare nginx su Ubuntu" target="_blank">qui</a>.

I server configurati (virtual host nginx) risiedono nella cartella `sites-available`

Le configurazioni possono essere abilitati creando link simbolici dalla cartella `sites-available` alla cartella `sites-enabled`.

![nginx-vhosts][1]

A differenza di Apache, il pacchetto Ubuntu di Nginx non include alcuna utility come `a2ensite` e `a2dissite`.

Effettuando una ricerca sul web ho trovato <a title="Nginx enable disable site command" href="http://serverfault.com/a/562210/277008" target="_blank">questo</a> pratico script:

<pre class="height-set:true height:50 height-unit:1 lang:sh decode:true ">#!/bin/bash

##
#  File:
#    nginx_modsite
#  Description:
#    Provides a basic script to automate enabling and disabling websites found
#    in the default configuration directories:
#      /etc/nginx/sites-available and /etc/nginx/sites-enabled
#    For easy access to this script, copy it into the directory:
#      /usr/local/sbin
#    Run this script without any arguments or with -h or --help to see a basic
#    help dialog displaying all options.
##

# Copyright (C) 2010 Michael Lustfield &lt;mtecknology@ubuntu.com&gt;

# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions
# are met:
# 1. Redistributions of source code must retain the above copyright
#    notice, this list of conditions and the following disclaimer.
# 2. Redistributions in binary form must reproduce the above copyright
#    notice, this list of conditions and the following disclaimer in the
#    documentation and/or other materials provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY AUTHOR AND CONTRIBUTORS ``AS IS'' AND
# ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
# ARE DISCLAIMED.  IN NO EVENT SHALL AUTHOR OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
# OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
# HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
# LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
# OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
# SUCH DAMAGE.

##
# Default Settings
##

NGINX_CONF_FILE="$(awk -F= -v RS=' ' '/conf-path/ {print $2}' &lt;&lt;&lt; $(nginx -V 2&gt;&1))"
NGINX_CONF_DIR="${NGINX_CONF_FILE%/*}"
NGINX_SITES_AVAILABLE="$NGINX_CONF_DIR/sites-available"
NGINX_SITES_ENABLED="$NGINX_CONF_DIR/sites-enabled"
SELECTED_SITE="$2"

##
# Script Functions
##

ngx_enable_site() {
    [[ ! "$SELECTED_SITE" ]] &&
        ngx_select_site "not_enabled"

    [[ ! -e "$NGINX_SITES_AVAILABLE/$SELECTED_SITE" ]] && 
        ngx_error "Site does not appear to exist."
    [[ -e "$NGINX_SITES_ENABLED/$SELECTED_SITE" ]] &&
        ngx_error "Site appears to already be enabled"

    ln -sf "$NGINX_SITES_AVAILABLE/$SELECTED_SITE" -T "$NGINX_SITES_ENABLED/$SELECTED_SITE"
    ngx_reload
}

ngx_disable_site() {
    [[ ! "$SELECTED_SITE" ]] &&
        ngx_select_site "is_enabled"

    [[ ! -e "$NGINX_SITES_AVAILABLE/$SELECTED_SITE" ]] &&
        ngx_error "Site does not appear to be \'available\'. - Not Removing"
    [[ ! -e "$NGINX_SITES_ENABLED/$SELECTED_SITE" ]] &&
        ngx_error "Site does not appear to be enabled."

    rm -f "$NGINX_SITES_ENABLED/$SELECTED_SITE"
    ngx_reload
}

ngx_list_site() {
    echo "Available sites:"
    ngx_sites "available"
    echo "Enabled Sites"
    ngx_sites "enabled"
}

##
# Helper Functions
##

ngx_select_site() {
    sites_avail=($NGINX_SITES_AVAILABLE/*)
    sa="${sites_avail[@]##*/}"
    sites_en=($NGINX_SITES_ENABLED/*)
    se="${sites_en[@]##*/}"

    case "$1" in
        not_enabled) sites=$(comm -13 &lt;(printf "%s\n" $se) &lt;(printf "%s\n" $sa));;
        is_enabled) sites=$(comm -12 &lt;(printf "%s\n" $se) &lt;(printf "%s\n" $sa));;
    esac

    ngx_prompt "$sites"
}

ngx_prompt() {
    sites=($1)
    i=0

    echo "SELECT A WEBSITE:"
    for site in ${sites[@]}; do
        echo -e "$i:\t${sites[$i]}"
        ((i++))
    done

    read -p "Enter number for website: " i
    SELECTED_SITE="${sites[$i]}"
}

ngx_sites() {
    case "$1" in
        available) dir="$NGINX_SITES_AVAILABLE";;
        enabled) dir="$NGINX_SITES_ENABLED";;
    esac

    for file in $dir/*; do
        echo -e "\t${file#*$dir/}"
    done
}

ngx_reload() {
    read -p "Would you like to reload the Nginx configuration now? (Y/n) " reload
    [[ "$reload" != "n" && "$reload" != "N" ]] && invoke-rc.d nginx reload
}

ngx_error() {
    echo -e "${0##*/}: ERROR: $1"
    [[ "$2" ]] && ngx_help
    exit 1
}

ngx_help() {
    echo "Usage: ${0##*/} [options]"
    echo "Options:"
    echo -e "\t&lt;-e|--enable&gt; &lt;site&gt;\tEnable site"
    echo -e "\t&lt;-d|--disable&gt; &lt;site&gt;\tDisable site"
    echo -e "\t&lt;-l|--list&gt;\t\tList sites"
    echo -e "\t&lt;-h|--help&gt;\t\tDisplay help"
    echo -e "\n\tIf &lt;site&gt; is left out a selection of options will be presented."
    echo -e "\tIt is assumed you are using the default sites-enabled and"
    echo -e "\tsites-disabled located at $NGINX_CONF_DIR."
}

##
# Core Piece
##

case "$1" in
    -e|--enable)    ngx_enable_site;;
    -d|--disable)   ngx_disable_site;;
    -l|--list)  ngx_list_site;;
    -h|--help)  ngx_help;;
    *)      ngx_error "No Options Selected" 1; ngx_help;;
esac</pre>

Basta inserirlo nella cartella `/usr/bin/nginx_modsite`, per utilizzarlo:

  * `sudo nginx_modsite -l` per vializzare tutti i siti
  * `sudo nginx_modsite -e test_website` per abilitare &#8220;test_website&#8221;
  * `sudo nginx_modsite -d test_website` per disabilitare &#8220;test_website&#8221;

## Virtual Host Nginx

A differenza di Apache, Nginx non fa distinzione tra vitual host basati su IP e virtual host basati su nome. Tutto funziona come un virtual host basato su nome. 

Il seguente listato è la configurazione di default con cui Nginx viene installato: 

<pre class="lang:sh decode:true ">server {
    listen 80 default_server;
    listen [::]:80 default_server ipv6only=on;

    root /usr/share/nginx/html;
    index index.html index.htm;

    server_name localhost

    charset utf-8;

    location / {
        try_files $uri $uri/ =404;
    }
}</pre>

Ecco il significato di ogni singola direttiva:

  * **Listen** &#8211; Per prima cosa notiamo che ascolta sulla porta 80 e si definisce anche come server di default per le richieste sulla porta 80. Se nessun header HTTP combacia con un virtual host configurato Nginx utilizzerà questo virtual host di default. E&#8217; possibile definire diversi host di default. Per esempio un default_server sulla porta 8080: `listen 8080 default_server` è diverso da sito default sulla porta 80: `listen 80 default_server` ascolta anche la porta 80 su una interfaccia ipv6, se abilitata sul server.
  * **root** &#8211; Qui viene definita la cartella radice dei documenti. Qui è dove i file vengono prelevati, è equivalente alla direttiva Apache `DocumentRoot`.
  * **index** &#8211; La direttiva index definisce quali file il server proverà a leggere se non ne è specificato alcuno, è equivalente alla direttiva Apache `DirectoryIndex`.
  * **server_name** &#8211; E&#8217; il nome host che Nginx dovrebbe usare per controllare l&#8217;header Host. Poiché è un server di default, questo sito correntemente verrà caricato se nessun altro host viene trovato. E&#8217; possibile usare diversi nomi, come s`erver_name www.example.com example.com.` E&#8217; possibile anche utilizzare caratteri wildcard su un nome server all&#8217;inizio o alla fine come per esempio `server_name *.example.com`. E&#8217; possibile utilizzare anche una espressione regolare come `ˆ(.*)\.example\.com$`, ha il beneficio di catturare e usare porzioni del testo estratto tramite l&#8217;espressione regolare.
  * **charset** &#8211; E&#8217; consigliato usare sempre UTF-8.
  * **location** &#8211; Nginx può usare un blocco locazione insieme ad un percorso file o espressione regolare per far corrispondere URL o file per gestirli in modo diverso. In questo esempio qualsiasi locazione viene catturata, successivamente la direttiva `try_files` cercherà di trovare un file nell&#8217;ordine in cui gli schemi sono stati specificati. Di default cerca di usare un URL esplicito per trovare un file, seguito da un nome di una cartella e infine risponde con un errore 404 se non viene trovato alcuna corrispondenza. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>

 [1]: /wp-content/uploads/2015/04/nginx-vhosts.png