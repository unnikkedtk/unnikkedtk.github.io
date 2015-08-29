---
title: 'Java Networking : Socket TCP'
author: unnikked
layout: post
permalink: /java-networking-socket-tcp/
bwps_enable_ssl:
  - 
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:5:"false";s:22:"gadgetry_disable_video";s:5:"false";s:26:"gadgetry_disable_post_meta";s:5:"false";s:23:"gadgetry_disable_author";s:5:"false";s:31:"gadgetry_disable_published_date";s:5:"false";s:24:"gadgetry_disable_coments";s:5:"false";s:28:"gadgetry_disable_author_info";s:5:"false";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:0:"";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:9:"alignleft";s:24:"gadgetry_thumbnail_image";s:0:"";s:27:"gadgetry_thumbnail_position";s:7:"noalign";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 2
dsq_thread_id:
  - 2619502460
categories:
  - Internet
  - Java
tags:
  - networking
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


# Cosa è un socket?

Di solito un *server* viene eseguito su computer che ha un *socket* legato ad una specifica *porta*. Il server aspetta, ascoltando sulla porta assegnata (*binding*), in attesa di una richiesta di connessione da parte di un *client*.

Il client è a conoscenza dell&#8217; *hostname* della macchina su cui il server è in esecuzione e la porta su cui è in ascolto. Per effettuare una richiesta di connessione (<a title="Handshaking - Wikipedia" href="http://en.wikipedia.org/wiki/Handshaking#Examples" target="_blank"><em>three way handshake</em></a>), il client cerca di &#8220;raggiungere&#8221; il server utilizzando l&#8217;hostname e la porta a sua conoscenza. Il client ha anche bisogno di identificarsi per il server perciò si lega su una porta locale che viene usata durante la connessione. Ciò viene di solito assegnata dal sistema.

<p align="center">
  <img src="/wp-content/uploads/2013/12/5connect.gif" alt="connect" />
</p>

Se tutto va bene il server accetta la connessione. Al momento dell&#8217;accettazione, il server ottiene un nuovo socket associato ad porta locale scelta casualmente e ha il terminale opposto legato all&#8217;indirizzo e porta del client. E&#8217; necessario creare un nuovo socket per fare in modo che il server possa gestire eventuali altre richieste connessioni, spesso il socket creato da una richiesta di connessione viene associato ad un thread che ne gestisce la sua esecuzione.

<p align="center">
  <img src="/wp-content/uploads/2013/12/6connect.gif" alt="connect" />
</p>

Sul client, se la connessione è accettata, viene creato un socket e il client lo usa per *comunicare* con il server.

Il client e il server possono ora comunicare scrivendo o leggendo dal socket.

Un canale è una combinazione di un *indirizzo IP* e di un *numero di porta*. Ogni connessione <a title="RFC793 - TCP Specification" href="http://tools.ietf.org/html/rfc793" target="_blank"><strong>TCP</strong></a> può essere identificata univocamente dai due terminali del canale. In questo modo si possono avere diverse connessioni tra una macchina e un server.

Il package `java.net` fornisce la classe `Socket` che implementa un terminale del canale di connessione tra un programma Java e un programma sulla rete. La classe `Socket` si affida all&#8217;implementazione dipendente dalla piattaforma e nasconde i dettagli di ogni particolare sistema dal programma Java. Usando tale classe, invece di fare affidamento su codice nativo, il programma Java può comunicare sulla rete in un ambiente indipendente dalla piattaforma.

In più il package `java.net` include la classe `ServerSocket` che implementa un socket usato dal server per mettersi in ascolto per accettare le richieste dei client.

## Servizio echo

Vediamo una semplice applicazione Java che consta di due classi `EchoServer` ed `EchoClient`. Tale applicazione, seppur semplice e minimale, permette di toccare con mano i rudimenti della programmazione tramite `Socket` in Java.

La classe `EchoServer` si limiterà a rispedire al client la stessa stringa ricevuta. I commenti del codice spiegano le vari fasi dell&#8217;applicazione.

<pre class="lang:java decode:true" title="EchoServer">import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;


/**
 * Classe server del servizio Echo. Questa classe restituisce al client
 * qualsiasi stringa inviata.
 */
public class EchoServer extends Thread {
    /**
     * Porta su cui il ServerSocket si lega.
     */
    private static final int PORT = 65500;

    /**
     * ServerSocket è un socket speciale, crea un nuovo Socket
     * ad ogni richiesta di connessione.
     */
    protected final ServerSocket serverSocket;

    /**
     * Il costruttore instanzia il ServerSocket su cui i client
     * effettueranno una richiesta di connessione.
     * @throws IOException
     */
    public EchoServer() throws IOException {
        this.serverSocket = new ServerSocket(PORT);
        start();
    }

    /**
     * Nel corpo del metodo run() i passaggi sono semplici:
     *  1. Viene creato un socket ad ogni richiesta di connessione.
     *  2. Viene letto il messaggio spedito.
     *  3. Lo stesso messaggio viene rispedito al mittende.
     *  4. Il server si rimette in ascolto per eventuali nuove richieste.
     */
    public void run() {
        while (true) {
            try {
                /*
                    serverSocket.accept() è una chiamata bloccante, ovvero
                    il server rimmarrà bloccato su questa chiamata di procedura
                    fintantoché non verrà effettuata una richiesta di connessione
                    da parte di un client.
                 */
                Socket clientSocket = serverSocket.accept();
                /*
                    I messaggi vengono scambiati tramite serializzazione di stringhe.
                    Per semplicità viene usata questa strategia, bisogna notare che è
                    possibile utilizzare qualsiasi classe Java che supporti la gestione
                    di un InputStream.
                 */
                ObjectInputStream input = new ObjectInputStream(clientSocket.getInputStream());
                String message = (String) input.readObject(); // lettura del messaggio
                /*
                    Vale come input.
                 */
                ObjectOutputStream output = new ObjectOutputStream(clientSocket.getOutputStream());
                System.out.println(message);
                output.writeObject(message);
                output.flush();
                // Richiesta gestita, poiché siamo in un ciclo infinito il server è pronto per gestire
                // una nuova connessione.
            } catch (IOException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        try {
            new EchoServer();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
</pre>

La classe `EchoClient` si limiterà ad inviare una stringa e a ricevere la risposta da parte del server.

<pre class="lang:java decode:true" title="EchoClient">import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;

/**
 * Classe client che si interfaccia con EchoServer. Un client
 * può effettuare una sola richiesta del servizio per connessione.
 */

public class EchoClient {
    /*
        Nel client deve essere specificato sia l'hostname
        che la porta del server di destinazione.
     */
    private static final String HOSTNAME = "localhost";
    private static final int PORT = 65500;

    private final Socket clientSocket;
    private ObjectOutputStream output;
    private ObjectInputStream input;

    /**
     * La creazione dell'oggetto Socket crea automaticamente
     * una richiesta di connessione all'HOSTINAME e PORT
     * specificato nei parametri del costruttore.
     * @throws IOException
     */
    public EchoClient() throws IOException {
        this.clientSocket = new Socket(HOSTNAME, PORT);
    }

    /**
     * Invia il messaggio al server una volta effettuata la connessione.
     * @param message
     * @throws IOException
     */
    public void sendMessage(String message) throws IOException {
        output = new ObjectOutputStream(clientSocket.getOutputStream());
        output.writeObject(message); // vedi EchoServer
        output.flush();
    }

    /**
     * Riceve il messaggio di risposta del server.
     * @return message
     * @throws IOException
     * @throws ClassNotFoundException
     */
    public String receiveMessage() throws IOException, ClassNotFoundException {
        input = new ObjectInputStream(clientSocket.getInputStream());
        String message = (String) input.readObject(); //Vedi EchoServer
        return message;
    }

    public static void main(String[] args) {
        try {
            EchoClient client = new EchoClient();
            client.sendMessage("Stringa");
            String message = client.receiveMessage();
            System.out.println(message);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
</pre>

Questa implementazione ha un difetto. Infatti non riesce a gestire più richieste contemporanee da parte di diversi client. Questo perché ogni richiesta è effettuata sequenzialmente nel blocco `while` del metodo `run()` di `EchoServer`.

Nella pratica il server riuscirebbe a gestire più connessioni anche se gestite in modo sequenziale, infatti deve solo ricevere una stringa e rimandarla al mittente, certamente non sono operazioni che impiegano molto tempo per completarsi.

E&#8217; possibile gestire connessioni multiple su un server tramite l&#8217;ausilio dei `Thread` di Java. Infatti, lasciando la gestione della richiesta ad un `Thread` il server può ritornare in ascolto in attesa di nuove connessioni senza che eventuali client debbano aspettare la loro elaborazione.

La classe `EchoServerMultipleConnection` estende `EchoServer` e tramite `HandlerRequest` processa il client che ha richiesto la connessione.

<pre class="lang:java decode:true" title="EchoServerMultipleConnection">import java.io.IOException;
import java.net.Socket;

public class EchoServerMultipleConnection extends EchoServer {

    public EchoServerMultipleConnection() throws IOException {
        super();
    }

    @Override
    public void run() {
        while (true) {
            try {
                Socket clientSocket = serverSocket.accept();
                /*
                    Deleghiamo ad un Thread la gestione della richiesta da
                    parte del client. La JVM legherà automaticamente a livello
                    di sistema operativo il Socket al Thread.
                 */
                new Thread(new HandlerRequest(clientSocket)).start();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        try {
            new EchoServerMultipleConnection();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
</pre>

<pre class="lang:java decode:true" title="HandlerRequest">import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;

/**
 * Classe di supporto per la gestione multipla di Client.
 */

public class HandlerRequest implements Runnable {
    /*
        Questo membro privato conserverà il riferimento
        del Socket restituito dalla chiamata
        serverSocket.accept()
     */
    private final Socket socket;

    public HandlerRequest(Socket socket) {
        this.socket = socket;
    }

    /*
        Il metodo run() si comporta allo stesso modo della gestione della richiesta
        di un client della classe EchoServer.
     */
    public void run() {
        try {
            ObjectInputStream input = new ObjectInputStream(socket.getInputStream());
            String message = (String) input.readObject();
            ObjectOutputStream output = new ObjectOutputStream(socket.getOutputStream());
            System.out.println(message);
            output.writeObject(message);
            output.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
</pre>

E&#8217; possibile scaricare l&#8217;archivio del programma <a title="Echo Service - GitHub Gist" href="https://gist.github.com/unnikked/9748282" target="_blank">qui</a>. Nei prossimi articoli vedremo casi d&#8217;uso più realistici sull&#8217;uso dei socket.

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>