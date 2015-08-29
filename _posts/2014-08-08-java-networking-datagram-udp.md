---
title: 'Java Networking : Datagram UDP'
author: unnikked
layout: post
permalink: /java-networking-datagram-udp/
bwps_enable_ssl:
  - 
gadgetry_tfuse_post_options:
  - 'a:56:{s:22:"gadgetry_disable_image";s:4:"true";s:22:"gadgetry_disable_video";s:4:"true";s:26:"gadgetry_disable_post_meta";s:4:"true";s:23:"gadgetry_disable_author";s:4:"true";s:31:"gadgetry_disable_published_date";s:4:"true";s:24:"gadgetry_disable_coments";s:4:"true";s:28:"gadgetry_disable_author_info";s:4:"true";s:19:"gadgetry_page_title";s:13:"default_title";s:21:"gadgetry_custom_title";s:0:"";s:21:"gadgetry_single_image";s:0:"";s:30:"gadgetry_single_img_dimensions";a:2:{i:0;s:3:"586";i:1;s:3:"319";}s:28:"gadgetry_single_img_position";s:10:"alignright";s:24:"gadgetry_thumbnail_image";s:0:"";s:27:"gadgetry_thumbnail_position";s:10:"alignright";s:19:"gadgetry_video_link";s:0:"";s:25:"gadgetry_video_dimensions";a:2:{i:0;s:3:"590";i:1;s:3:"191";}s:23:"gadgetry_video_position";s:10:"alignright";s:23:"gadgetry_header_element";s:7:"without";s:22:"gadgetry_select_slider";s:2:"-1";s:17:"gadgetry_page_map";s:0:"";s:25:"gadgetry_content_ads_post";s:4:"true";s:21:"gadgetry_top_ad_space";s:5:"false";s:21:"gadgetry_top_ad_image";s:0:"";s:19:"gadgetry_top_ad_url";s:0:"";s:23:"gadgetry_top_ad_adsense";s:0:"";s:28:"gadgetry_bfcontent_ads_space";s:5:"false";s:23:"gadgetry_bfcontent_type";s:5:"image";s:25:"gadgetry_bfcontent_number";s:3:"one";s:29:"gadgetry_bfcontent_ads_image1";s:0:"";s:27:"gadgetry_bfcontent_ads_url1";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense1";s:0:"";s:29:"gadgetry_bfcontent_ads_image2";s:0:"";s:27:"gadgetry_bfcontent_ads_url2";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense2";s:0:"";s:29:"gadgetry_bfcontent_ads_image3";s:0:"";s:27:"gadgetry_bfcontent_ads_url3";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense3";s:0:"";s:29:"gadgetry_bfcontent_ads_image4";s:0:"";s:27:"gadgetry_bfcontent_ads_url4";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense4";s:0:"";s:29:"gadgetry_bfcontent_ads_image5";s:0:"";s:27:"gadgetry_bfcontent_ads_url5";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense5";s:0:"";s:29:"gadgetry_bfcontent_ads_image6";s:0:"";s:27:"gadgetry_bfcontent_ads_url6";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense6";s:0:"";s:29:"gadgetry_bfcontent_ads_image7";s:0:"";s:27:"gadgetry_bfcontent_ads_url7";s:0:"";s:31:"gadgetry_bfcontent_ads_adsense7";s:0:"";s:19:"gadgetry_hook_space";s:5:"false";s:19:"gadgetry_hook_image";s:0:"";s:17:"gadgetry_hook_url";s:0:"";s:21:"gadgetry_hook_adsense";s:0:"";s:25:"gadgetry_content_subtitle";s:0:"";s:20:"gadgetry_content_top";s:0:"";s:23:"gadgetry_content_bottom";s:0:"";}'
gadgetry_post_viewed:
  - 1
dsq_thread_id:
  - 2910525615
categories:
  - Java
tags:
  - networking
---
<div align="center">
  <!-- unnikked - responsive - header --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="2778724254" data-ad-format="auto"></ins>
</div>

  


Alcune applicazioni che <a href="http://unnikked.tk/java-networking-introduzione/" title="Java Networking : introduzione" target="_blank">comunicano attraverso la rete</a> non richiedono una connessione affidabile *punto-punto* fornita da **<a href="http://unnikked.tk/java-networking-socket-tcp/" title="Java Networking : Socket TCP" target="_blank">TCP</a>**. Piuttosto, l&#8217;applicazione potrebbe beneficiare di un modo di comunicazione che invia pacchetti indipendenti di informazioni il cui ordine di arrivo non è garantito.

Il protocollo UDP fornisce una modalità di comunicazione in cui le applicazioni inviano pacchetti di dati, chiamati datagrammi. Un datagramma è un messaggio indipendente e auto-contenuto il cui arrivo, tempo di arrivo e integrità non è garantito. Le classi `<a href="http://docs.oracle.com/javase/7/docs/api/java/net/DatagramPacket.html" title="DatagramPacket Java 7 API" target="_blank">DatagramPacket</a>` e `<a href="http://docs.oracle.com/javase/7/docs/api/java/net/DatagramSocket.html" title="DatagramSocket Java 7 API" target="_blank">DatagramSocket</a>` del package `java.net` implementano una modalità di comunicazione tramite protocollo **UDP** indipendente dal sistema. 

## Cos&#8217;è un datagramma?

I client e i server che comunicano attraverso una connessione affidabile, come un <a href="http://unnikked.tk/java-networking-socket-tcp/" title="Java Networking : Socket TCP" target="_blank">socket TCP</a>, utilizzano un canale dedicato *punto-punto*, o almeno hanno l&#8217;illusione di utilizzarne uno. Per comunicare prima stabiliscono una connessione, trasmettono i dati e infine chiudono la connessione. Tutti i dati inviati tramite la connessione sono ricevuti nello stesso ordine in cui sono stati spediti. 

Al contrario le applicazioni che comunicano via datagrammi, inviano e ricevono pacchetti di informazioni indipendenti. I server e i client non hanno bisogno di una connessione dedicata *punto-punto*. La ricezione dei datagrammi non è garantita, nemmeno il loro ordine di arrivo. 

## Una semplice chat

Segue l&#8217;esempio di una semplice chat sviluppata sfruttando UDP. L&#8217;esempio ha lo scopo di far vedere il pratica i vari componenti visti.

La classe `Server` resta in ascolto su una specifica porta `UDP` in attesa delle richieste da parte dei client. Bisogna notare che a differenza dei `<a href="http://unnikked.tk/java-networking-socket-tcp/" title="Java Networking : Socket TCP" target="_blank">Socket</a>` con `UDP` non è necessario l&#8217;utilizzo dei Thread.

<pre class="lang:java decode:true " >public class Server extends Thread {
    protected DatagramSocket socket = null;
    protected DatagramPacket packet = null;
    protected ServerManager serverManager = null;

    public Server() throws IOException {
    	socket = new DatagramSocket(10000);
    	serverManager = new ServerManager();
    }

	public void run() {
		System.out.println("Server avviato!");
		while(true) {
			try {
				byte[] buf = new byte[256];

				// riceve la richiesta
                packet = new DatagramPacket(buf, buf.length);
                socket.receive(packet); //bloccante

                String message = new String(packet.getData(), 0, packet.getLength());
                System.out.println(message);

                serverManager.parseMessage(socket, packet, message);

			}catch(IOException ex) {
				ex.printStackTrace();
				socket.close();
			}
		}
	}

	public static void main(String[] args) throws IOException {
		new Server().start();
	}
}</pre>

La classe `ServerManager` processa le richieste da parte dei client implementando un mini protocollo di comunicazione. L&#8217; `HashMap` semanticamente corrisponde ad una stanza per chattare, viene mantenuto l&#8217;username e i dettagli della *&#8220;connessione&#8221;* dei vari client, in questo modo viene consentito l&#8217;accesso al server da parte di più utenti che utilizzano la stessa connessione internet.

<!--nextpage-->

Il protocollo di comunicazione è semplice: 

  * `0 username` &#8211; per autenticarsi con l&#8217;username scelto
  * `1 messaggio` &#8211; per spedire un messaggio

<pre class="lang:java decode:true " >public class ServerManager {
	private HashMap&lt;String, ConnectionDetails&gt; connected = new HashMap&lt;String, ConnectionDetails&gt;();

	public void parseMessage(DatagramSocket socket, DatagramPacket packet, String message) throws IOException {
		Pattern pattern = Pattern.compile("([^\\s]+)\\s(.*)");
		Matcher match = pattern.matcher(message);
		try{
			match.find();

			int cmd = Integer.parseInt(match.group(1));
			if(cmd == 0) { //auth
				String username = match.group(2);
				ConnectionDetails con = new ConnectionDetails(packet.getAddress(), packet.getPort());
				if(!connected.containsKey(username) && !connected.containsValue(con)) {
					connected.put(username, con);
					System.out.println(username + " registrato!");
					sendMessage(socket, packet, ""+ username + " sei stato autenticato, ora puoi chattare!");
				} else {
					sendMessage(socket, packet, "Sei già stato autenticato.");
				}
			} else if(cmd == 1) {
				ConnectionDetails con = new ConnectionDetails(packet.getAddress(), packet.getPort());
				if(connected.containsValue(con)) {
					Collection&lt;String&gt; u = connected.keySet();
					String username = null;
					for(String user : u) {
						ConnectionDetails c = connected.get(user);
						if(c.equals(con)) username = user;
					}
					for(String user : u) {
						ConnectionDetails c = connected.get(user);
						byte[] res = new String(username + " : " + match.group(2)).getBytes();
						socket.send(new DatagramPacket(res, res.length, c.getAddress(), c.getPort()));
					}
				} else {
					sendMessage(socket, packet, "Non sei autenticato, non puoi chattare!");
				}
			} else {
				sendMessage(socket, packet, "**Comando errato");
			}
		} catch (Exception e) {
			sendMessage(socket, packet, "**Comando errato");
		}
	}
	
	private void sendMessage(DatagramSocket socket, DatagramPacket packet, String message) throws IOException {
		byte[] res = message.getBytes();
		socket.send(new DatagramPacket(res, res.length, packet.getAddress(), packet.getPort()));
	}
}</pre>

La classe `ConnectionDetails` è di supporto per laa memorizzazione dei dettagli di una *&#8220;connessione&#8221;* da parte di uno specifico client, quale l&#8217;indirizzo ip e la porta.

<pre class="lang:java decode:true " >public class ConnectionDetails {
	private InetAddress address;
	private int port;

	public ConnectionDetails(InetAddress address, int port) {
		this.address = address;
		this.port = port;
	}

	public InetAddress getAddress() {
		return address;
	}

	public int getPort() {
		return port;
	}

	public boolean equals(Object o) {
		if(this == o) return true;
		ConnectionDetails d = (ConnectionDetails) o;
		if(address.equals(d.getAddress()) && port == d.getPort()) return true;
		return false;
	}
}</pre>

La classe `Client` ha lo scopo di interagire con il `Server` (ma va?) ricevendo e mostrando a linea di comando i messaggi ricevuti dal `Server`. L&#8217;invio dei messaggi è gestito dalla classe `CLI`.

<pre class="lang:java decode:true " >public class Client extends Thread {
	private DatagramSocket socket;

	public Client() throws IOException {
		socket = new DatagramSocket();
		new CLI(socket).start();
	}

	public void run() {
		try {
			while(true) {
				byte[] buf = new byte[256];

				// ottieni risposta
		        DatagramPacket packet = new DatagramPacket(buf, buf.length);
		        socket.receive(packet);

			    // mostra risposta
		        String received = new String(packet.getData(), 0, packet.getLength());
		        System.out.println(received);
			}
		} catch (IOException ex) {
			ex.printStackTrace();
			System.exit(0);
		}
	}

	public static void main(String[] args) throws IOException {
		new Client().start();
	}
}</pre>

La classe `CLI` fornisce un mini ambiente di interazione tramite linea di comando. Bisogna inviare i messaggi conformi al protocollo di comunicazione del `Server`.

<pre class="lang:java decode:true " >class CLI extends Thread {
	DatagramSocket socket;
	private Scanner sc = new Scanner(System.in);
	private String ip;

	public CLI(DatagramSocket socket) {
		this.socket = socket;
	}

	public void run() {
		System.out.print("Insert server ip: ");
		ip = sc.nextLine();
		while(true) {
			try {
				String cmd = sc.nextLine();
				if(cmd.equalsIgnoreCase("exit")) { socket.close(); }

				byte[] res = cmd.getBytes();
				socket.send(new DatagramPacket(res, res.length, InetAddress.getByName(ip), 10000));

			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
	}
}</pre>

## Multicast

Insieme a `DatagramSocket`, `java.net` fornisce anche una classe chiamata `<a href="http://docs.oracle.com/javase/7/docs/api/java/net/MulticastSocket.html" title="MulticastSocket Java 7 API">MulticastSocket</a>`. Questo tipo di socket è usato sul lato client per mettersi in ascolto dei pacchetti il cui server trasmette a più client. 

  


<div align="center">
  <!-- unnikked - responsive - footer --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3846608868139288" data-ad-slot="4255457452" data-ad-format="auto"></ins>
</div>