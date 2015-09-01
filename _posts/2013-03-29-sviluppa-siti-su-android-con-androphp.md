---
title: Sviluppa siti in PHP e MySQL su Android con AndroPHP!
author: unnikked
layout: post
permalink: /sviluppa-siti-su-android-con-androphp/
dsq_thread_id:
  - 1173415965
itsec_enable_ssl:
  - 
categories:
  - Android
  - Webmaster
tags:
  - webmaster
---

In uno dei precedenti <a title="Sviluppa il tuo sito su Android con KSWEB!" href="http://unnikked.tk/sviluppa-il-tuo-sito-su-android-ksweb/" target="_blank">articoli</a>, ho presentato **KsWEB**, un&#8217; app che permette di installare sul proprio device *Android* un ambiente <a title="Come configurare un ambiente LAMP" href="http://unnikked.tk/apache-php-mysql/" target="_blank">LAMP</a> per sviluppare siti web. KsWEB è a pagamento e, dopo un periodo limitato di prova, non è più possibile utilizzarla se non si effettua l&#8217;aggiornamento alla versione a pagamento.

Girovagando nel *Play Store* di *Google* ho trovato una valida alternativa a *KsWEB*: <a title="AndroPHP su Play Store!" href="https://play.google.com/store/apps/details?id=com.ayansoft.androphp&hl=it" target="_blank">AndroPHP</a>!

**AndroPHP** offre le stesse potenzialità di *KsWEB*, gratuitamente! E&#8217; completo anche di <a title="Home page di phpMyAdmin" href="http://www.phpmyadmin.net/home_page/index.php" target="_blank">phpMyAdmin</a> per poter gestire comodamente i database *MySQL*.

![][1]

Dall&#8217;immagine possiamo notare quanto sia facile attivare il server *lighttpd*, basta premere il pulsante al centro sotto l&#8217;icona dell&#8217;applicazione.

![][2]


Il pannello di configurazione si presenta facile ed essenziale, è possibile abilitare gli aggiornamenti automatici, impostare la cartella principale del server web e, se si hanno i privilegi di *root*, impostare la *porta* su cui il server deve mettersi in ascolto (di default è la *8080*).

E&#8217; possibile accedere al server, una volta acceso, sia dal proprio device Android, digitando nel browser *http://localhost:8080/ ,* oppure, se connesso ad una *rete locale,* tramite l&#8217;indirizzo fornito nella home dell&#8217;applicazione.

Per esempio, per visualizzare il file *phpinfo.php,* basta digitare nella barra degli indirizzi *http://localhost:8080/phpinfo.php*.

![][3]


Infine per poter accedere a phpmyadmin, basta digitare nella barra degli indirizzi *http://localhost:8080/phpmyadmin/*

![][4]


L&#8217;utente root non ha impostata nessuna password per cui per collegarsi al pannello di controllo cliccate sul tasto &#8220;OK&#8221; senza inserire alcuna password.

![][5]


Non resta che dirvi: buono sviluppo a tutti!


 [1]: /wp-content/uploads/2013/03/Screenshot_2013-03-29-18-02-56.png
 [2]: /wp-content/uploads/2013/03/Screenshot_2013-03-29-18-03-12.png
 [3]: /wp-content/uploads/2013/03/Screenshot_2013-03-29-18-18-50.png
 [4]: /wp-content/uploads/2013/03/Screenshot_2013-03-29-18-20-11.png
 [5]: /wp-content/uploads/2013/03/Screenshot_2013-03-29-18-20-37.png