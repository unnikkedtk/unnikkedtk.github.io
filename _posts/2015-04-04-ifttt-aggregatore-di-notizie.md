---
title: Usare IFTTT come aggregatore di notizie dal web
author: unnikked
layout: post
permalink: /ifttt-aggregatore-di-notizie/
dsq_thread_id:
  - 3654188564
categories:
  - Internet
tags:
  - IFTTT
---

IFTTT è uno strumento che ci permette di automatizzare le azioni sul web sfruttando i più noti servizi già presenti, ne ho parlato molto tempo fa in <a title="Rendi automatiche le tue azioni con If This Then That" href="automatizza-if-this-then-that" target="_blank">questo</a> articolo.

Nonostante sia particolarmente legato ai progetti <a title="Self Hosted su unnikked" href="/tag/self-hosted/" target="_blank">self-hosted</a> apprezzo comunque la versatilità di questa piattaforma.

In questo articolo voglio proporvi un metodo per potersi tenere aggiornati senza utilizzare strumenti web ad hoc come feedly o simili oppure senza perdere tempo a configurare server e quant&#8217;altro.

In soli 5 minuti avrete a disposizione un aggregatore di notizie pronto all&#8217;uso.

## Ricette e canali, si cucina su IFTTT?

Su IFTTT i concetti chiavi sono: la ricetta e i canali.

![IFTTT - Channels][1]

I canali sono gli ingredienti base di una ricetta e spaziano dai più noti social network a servizi web.

Attualmente la piattaforma offre più di 100 canali per cui le possibilità di interazioni sono notevoli. 

Ogni canale ha a disposizione due eventi: **triggers** e **actions**.

![IFTTT - Events][2]

I **triggers** sono gli eventi che IFTTT monitora, ogni qualvolta l&#8217;evento si verifica l&#8217;action corrispondente viene eseguita.

Le **actions** sono le azioni che è possibile eseguire al verificarsi di un trigger.

Una ricetta (**recipe**) è invece una combinazione di un solo trigger e una sola action.

<p align="center">
  <a id="embed_recipe-275168" class="embed_recipe embed_recipe-l_43" href="https://ifttt.com/view_embed_recipe/275168-if-astronaut-enters-space-then-push-a-link" target="_blank"><img style="max-width: 100%;" src="https://ifttt.com/recipe_embed_img/275168" alt="IFTTT Recipe: If astronaut enters space, then push a link connects space to pushbullet" width="370px" /></a>
</p>

## Creazione di una ricetta

Il prossimo passo da imparare è quella della creazione di una ricetta, IFTTT mette a disposizione una comoda interfaccia grafica guidata.

Per creare una nuova ricetta basterà cliccare il pulsante <a title="IFTTT - Create a Recipe" href="https://ifttt.com/myrecipes/personal/new" target="_blank">&#8220;Create a Recipe&#8221;</a>.

![ifttt-new][3]

Cliccando su `This` si sceglierà il servizio generante un evento (trigger).

![ifttt chose trigger channel][4]

E&#8217; possibile cercare il servizio tramite il form senza scorrere la pagina. Una volta scelto il servizio vi verrà chiesto di attivarlo (la prima volta) per poi scegliere l&#8217;evento da monitorare.

![ifttt chose a trigger][5]

Se il trigger lo permette è possibile effettuare una scelta più fine dell&#8217;evento da monitorare.

![ifttt complete trigger fields][6]

Una volta creato il trigger è bisogna scegliere il canale da cui scegliere l&#8217;azione da eseguire.

![ifttt choose action chanel][7]

Una volta scelto il canale bisogna selezionare l&#8217;azione vera e propria.

![ifttt choose an action][8]

E personalizzarla tramite i dati estratti dal trigger.

![ifttt complete action fields][9]

Infine verrà presentare la possibilità di descrivere cosa fa la ricetta.

![ifttt create and activate][10]

## Come funziona l&#8217;aggregatore di notizie ?

Dopo aver imparato a creare una ricetta è giunta l&#8217;ora di creare l&#8217;aggregatore di notizie, ci serviranno i canali da cui prelevare le notizie per poi passarlo ad un lettore come Readability oppure su un gruppo facebook, sul proprio blog ecc.

### Generare le notizie

Ho identificato i seguenti canali da cui poter estrapolare informazioni:

  * <a title="IFTTT - Feed" href="https://ifttt.com/feed" target="_blank">Feed RSS</a>: è il più classico ed immediato.
  * <a title="IFTTT - BuzzFeed" href="https://ifttt.com/buzzfeed" target="_blank">BuzzFeed</a>: è un sito su cui vengono aggregate diverse notizie prese sul web
  * <a title="IFTTT - Digg" href="https://ifttt.com/digg" target="_blank">Digg</a>: è un altro aggregatore di notizie del web
  * <a title="IFTTT - ESPN" href="https://ifttt.com/espn" target="_blank">ESPN</a>: è il più famoso portale di notizie sportive
  * <a title="IFTTT - InStyle" href="https://ifttt.com/instyle" target="_blank">InStyle</a>: notizie dal mondo della moda
  * <a title="IFTTT - People" href="https://ifttt.com/peoplemag" target="_blank">People</a>: notizie dal mondo delle celebrità
  * <a title="IFTTT - Reddit" href="https://ifttt.com/reddit" target="_blank">Reddit</a>: il social network basato sulle news
  * <a title="IFTTT - Space" href="https://ifttt.com/space" target="_blank">Space</a>: notizie dal mondo dello spazio
  * <a title="IFTTT - Sport Illustrated" href="https://ifttt.com/sports_illustrated" target="_blank">Sport Illustrated</a>: notizie dal mondo dello sport
  * <a title="IFTTT - The New York Times" href="https://ifttt.com/nytimes" target="_blank">The New York Times</a>: penso non ci sia bisogno di presentarlo
  * <a title="IFTTT - Time" href="https://ifttt.com/time" target="_blank">Time</a>: anche esso si presenta da solo

### Aggregare le notizie

Una volta scelte i canali da cui attingere bisogna scegliere dove redirigere il contenuto catturato, questo dipende dalla vostra volontà, per cui mi limito a segnalare alcune modalità che potrebbero permettere una fruizione comoda dei contenuti:

  * <a title="IFTTT - Email" href="https://ifttt.com/email" target="_blank">Email</a>: ad ogni notizia generata mandatevi una email sulla posta
  * <a title="IFTTT - Email Digest" href="https://ifttt.com/email_digest" target="_blank">Email Digest</a>: periodicamente (settimanalmente o giornalmente) vi verrà spedita una email con i contenuti catturati, una sorta di news letter.
  * Notifiche push: mandatevi una notifica push usando i diversi canali a disposizione
  * <a title="IFTTT - Pocket" href="https://ifttt.com/pocket" target="_blank">Pocket</a>: un app che permette il salvataggio di pagine web
  * <a title="IFTTT - Readability" href="https://ifttt.com/readability" target="_blank">Readability</a>: app simile a Pocket
  * <a title="IFTTT - Instapaper" href="https://ifttt.com/instapaper" target="_blank">Instapaper</a>: un&#8217;altra alternativa a Pocket e Readability

## Come seguire il mio blog

Ovviamente non posso che proporvi il mio blog come fonte di contenuti da consumare. Ho preparato per voi delle ricette pronte all&#8217;uso. Basterà cliccare su una delle seguenti ricette per importarle automaticamente sul vostro account IFTTT e iniziare a seguirmi. 

Per i possessori di uno smartphone Android:

<a href="https://ifttt.com/view\_embed\_recipe/275205-segui-unnikked-su-android" target = "\_blank" class="embed\_recipe embed\_recipe-l\_25" id= "embed_recipe-275205"><img src= 'https://ifttt.com/recipe\_embed\_img/275205' alt="IFTTT Recipe: Segui unnikked su Android connects feed to android-notifications" width="370px" style="max-width:100%"/></a>

Oppure ricevi una email:

<a href="https://ifttt.com/view\_embed\_recipe/275206-segui-unnikked-sulla-tua-casella-di-posta" target = "\_blank" class="embed\_recipe embed\_recipe-l\_41" id= "embed_recipe-275206"><img src= 'https://ifttt.com/recipe\_embed\_img/275206' alt="IFTTT Recipe: Segui unnikked sulla tua casella di posta connects feed to email" width="370px" style="max-width:100%"/></a>

Con questa ricetta invece è possibile ricevere una notifica push tramite PushBullet (sia per Android che iOS):

<a href="https://ifttt.com/view\_embed\_recipe/275209-ricevi-una-notifica-push-tramite-pushbullet" target = "\_blank" class="embed\_recipe embed\_recipe-l\_43" id= "embed_recipe-275209"><img src= 'https://ifttt.com/recipe\_embed\_img/275209' alt="IFTTT Recipe: Ricevi una notifica push tramite PushBullet connects feed to pushbullet" width="370px" style="max-width:100%"/></a>

Per poter creare le ricette bisogna avere un account sul servizio utilizzato, per cui non ho potuto creare ulteriori ricette.


 [1]: /wp-content/uploads/2015/04/Schermata-del-2015-04-01-193148.png
 [2]: /wp-content/uploads/2015/04/Schermata-del-2015-04-01-193449.png
 [3]: /wp-content/uploads/2015/04/ifttt-new.png
 [4]: /wp-content/uploads/2015/04/ifttt-chose-trigger-channel.png
 [5]: /wp-content/uploads/2015/04/ifttt-chose-a-trigger.png
 [6]: /wp-content/uploads/2015/04/ifttt-complete-trigger-fields.png
 [7]: /wp-content/uploads/2015/04/ifttt-choose-action-chanel.png
 [8]: /wp-content/uploads/2015/04/ifttt-choose-an-action.png
 [9]: /wp-content/uploads/2015/04/ifttt-complete-action-fields.png
 [10]: /wp-content/uploads/2015/04/ifttt-create-and-activate.png