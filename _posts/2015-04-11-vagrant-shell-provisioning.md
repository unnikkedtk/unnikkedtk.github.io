---
title: 'Vagrant &#8211; Shell Provisioning'
author: unnikked
layout: post
permalink: /vagrant-shell-provisioning/
dsq_thread_id:
  - 3672872536
categories:
  - SysAdmin
  - Ubuntu
tags:
  - vagrant
---

Il modo più semplice per preparare una base box è usare un file di scripting per l&#8217;interprete dei comandi che verrà eseguito sulla macchina virtuale. Ciò consente di non imparare tool specifici come Pupper, Ansible o simili. 

Si parte da un `Vagrantfile` così strutturato:

<pre class="lang:ruby decode:true " >Vagrant.configure("2") do |config|
	
	config.vm.box = "ubuntu/trusty64"

	config.vm.network :forwarded_port, guest: 80, host: 8931, auto_correct: true
	config.vm.synced_folder "./", "/var/www", create: true, group: "www-data", owner: "www-data"

	config.vm.provider "virtualbox" do |v|
		v.name = "Shell Provisioning Tutorial"
		v.customize ["modifyvm", :id, "--memory", "1024"]
	end

end</pre>

E&#8217; necessario specificare la tipologia di provisioning, che nel nostro caso si chiama `shell`. Per specificarlo: 

<pre class="lang:ruby decode:true " >config.vm.provision "shell" do |s|
    s.path "provision/setup.sh"
end</pre>

Vagrant mette a disposizione due tipologie di shell provisioning, inlinea (**inline**) e esterno (**external**), cioè permette di eseguire comandi direttamente specificati nel `Vagrantfile` oppure da una sorgente esterna, anche un URL.

In questo caso useremo il file `provision/setup.sh`. Creiamo il file `setup.sh` ed iniziamo a scrivere il seguente contenuto: 

<pre class="lang:sh decode:true " >#!/bin/bash
 
echo "Provisioning virtual machine..."</pre>

Eseguendo il comando `vagrant up` verrà mostrato *Provisioning virtual machine&#8230;* sullo schermo. 

Bisogna notare che Vagrant preparerà la macchina virtuale solo al primo avvio, per rieseguire il file di provisioning bisogna utilizzare il parametro `--provision` sia per `vagrant up --provision` che per `vagrant reload --provision`.

La preparazione verrà rieseguita anche dopo aver distrutto e ricostruito una macchina virtuale tramite `vagrant destroy` e `vagrant up`.

Per mostrare un caso d&#8217;uso di shell provisioning andremo a preparare uno script che installerà un ambiente LEMP al primo avvio. 

## Installazione dei pacchetti di base

Iniziamo con l&#8217;installare alcuni pacchetti di base, sempre nel file `provision/setup.sh`:

<pre class="lang:sh decode:true " >echo "Installing Git"
apt-get install git -y &gt; /dev/null
 
echo "Installing Nginx"
apt-get install nginx -y &gt; /dev/null</pre>

## Installazione di PHP

L&#8217;installazione di PHP ed alcuni pacchetti di base:

<pre class="lang:sh decode:true " >echo "Installing PHP"
apt-get install php5-common php5-dev php5-cli php5-fpm -y &gt; /dev/null
 
echo "Installing PHP extensions"
apt-get install curl php5-curl php5-gd php5-mcrypt php5-mysql -y &gt; /dev/null</pre>

## Installazione MySQL

L&#8217;installazione di MySQL presenta alcune difficoltà, è necessario interagire durante l&#8217;installazione per fornire la password di root. 

Tuttavia Vagrant deve automatizzare l&#8217;installazione e in qualche modo bisogna trovare una soluzione per fornire la password automaticamente. 

Per questo scenario andremo ad installare uno strumento chiamato `debconf-utils`:

<pre class="lang:sh decode:true " >apt-get install debconf-utils -y &gt; /dev/null</pre>

Ora possiamo usare questa utility per indicare al processo di installazione di MySQL di non mostrare il dialogo per l&#8217;inserimento della password ma di accettarla tramite la riga di comando:

<pre class="lang:sh decode:true " >debconf-set-selections &lt;&lt;&lt; "mysql-server mysql-server/root_password password 1234"
 
debconf-set-selections &lt;&lt;&lt; "mysql-server mysql-server/root_password_again password 1234"</pre>

Nei due comandi **1234** è la password che verrà utilizzata per l&#8217;utente `root`.

Possiamo ora procedere con l&#8217;installazione di MySQL senza ottenere il dialogo per l&#8217;inserimento della password. 

<pre class="lang:sh decode:true " >apt-get install mysql-server -y &gt; /dev/null</pre>

### Note

  * L&#8217;output di ogni comando è stato <a href="gestire-i-canali-standard-linux" title="Gestire i canali standard di Linux" target="_blank">rediretto</a> su `> /dev/null`. In questo modo ogni messaggio prodotto dal processo di provisioning verrà soppresso.
  * Quando si installa una applicazione usando il comando `apt-get install` vi verrà chiesto la conferma, usando il parametro `-y` si indicherà al processo di installare il programma senza chiedere tale conferma.

## Configurare Nginx

Ora che abbiamo installato i pacchetti necessari per l&#8217;ambiente di sviluppo PHP, è necessario anche configurare Nginx per servire i file di progetto. 

Il modo più semplice è quello di creare un file nella cartella sincronizzata e usarla come file di configurazione per Nginx. 

Creiamo un file chiamato `nginx_vhost` nella cartella `provision/config`, il percorso del file sarà ovviamente `provision/config/nginx_vhost`.

Questo file conterrà una configurazione di base per un virtual host: 

<pre class="lang:sh decode:true " >server {
    listen 80;
    server_name localhost;
     
    root /var/www/src/;
    index index.php index.html;
     
    # Important for VirtualBox
    sendfile off;
     
    location / {
        try_files $uri $uri/ =404;
    }
     
    location ~* \.php {
        include fastcgi_params;
         
        fastcgi_pass unix:/var/run/php5-fpm.sock;
         
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_cache off;
        fastcgi_index index.php;
    }
}</pre>

Bisogna inserire queste linee di codice nel file `setup.sh` per configurare Nginx ed abilitare il virtual host: 

<pre class="lang:sh decode:true " >echo "Configuring Nginx"
cp /var/www/provision/config/nginx_vhost /etc/nginx/sites-available/nginx_vhost &gt; /dev/null
 
ln -s /etc/nginx/sites-available/nginx_vhost /etc/nginx/sites-enabled/
 
rm -rf /etc/nginx/sites-available/default

service nginx restart > /dev/null</pre>

Il virtual host creato punta alla cartella `/var/www/src/`. Creiamo questa cartella e creiamo anche un file `index.php` con contenuto: 

<pre class="lang:php decode:true " >&lt;?php echo "Hello World!"; ?&gt;</pre>

La struttura della cartella finale dovrebbe somigliare a:

![vagrant shell provision folder structure][1]

Dopo aver eseguito `vagrant up` si dovrebbe essere in grado di accedere la pagina visitando `localhost:8931` nel browser. 


 [1]: /wp-content/uploads/2015/04/vagrant-shell-provision-folder-structure.png