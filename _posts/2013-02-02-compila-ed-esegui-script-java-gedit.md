---
title: Compilare ed eseguire script java direttamente da gEdit
author: unnikked
layout: post
permalink: /compila-ed-esegui-script-java-gedit/
dsq_thread_id:
  - 1060971651
itsec_enable_ssl:
  - 
categories:
  - Java
---

A volte trovo molto utile usare un semplice editor di testo per modificare e sviluppare piccoli script invece di usare un IDE molto complesso, se da una parte gli IDE portano vantaggi sulla produttività di grossi progetti, dall&#8217;altra usare un IDE in un contesto &#8220;casereccio&#8221; può risultare molto scomodo.

Utilizzare invece un editor di testo come <a href="http://unnikked.tk/aggiornare-gedit-linux-min/" target="_blank">gEdit</a> per piccoli progetti o comunque per progetti che non richiedono strumenti avanzati di produzione, debugging e deploying, può risultare utile non solo per la loro semplicità d&#8217;utilizzo ma anche per l&#8217; interfaccia poco invasiva e la leggerezza per consumo di risorse.

Però nonostante tutto ci sono alcune attività, quali compilazione ed esecuzione degli script, che potrebbero risultare molto ripetitive e macchinose; gEdit presenta al suo interno un sistema che permette di automatizzare alcune operazioni di *routine *come la compilazione e l&#8217;esecuzione di un programma.

Da questa necessità ho girato un po&#8217; nella rete e ho trovato questo utilissimo script da configurare con gEdit che permette di automatizzare tale operazioni.

```bash
#!/bin/sh

cd $GEDIT_CURRENT_DOCUMENT_DIR

python -c "
import os

arg = '$GEDIT_CURRENT_DOCUMENT_DIR/$GEDIT_CURRENT_DOCUMENT_NAME'
package = ''
data = open(arg, 'r').readlines()

for i in range(len(data)):
	temp = data[i].strip()
	if temp[0:7] == 'package':
		package = temp[8:len(temp)-1]

if package != '':
	for i in range(package.count('.') + 2):
		arg = arg[0:arg.rfind('/')]

	os.system('javac -cp ' + arg + ' ' + '$GEDIT_CURRENT_DOCUMENT_DIR/$GEDIT_CURRENT_DOCUMENT_NAME')
	os.system('java -classpath ' + arg + ' ' + package + '.' + '${GEDIT_CURRENT_DOCUMENT_NAME%.java}')
else:
	os.system('javac $GEDIT_CURRENT_DOCUMENT_NAME')
	os.system('java ${GEDIT_CURRENT_DOCUMENT_NAME%.java}')
"
```

**Nota: **per poter utilizzare questo snippet bisogna aver installato *python *

Apriamo *gEdit* e dalla barra dei menu ci spostiamo in *Tools -> Manage External Tools&#8230; *(assicuratevi di aver attivato il plugin dalle preferenze del programma)*  

![External Tools][1]

In questa finestra clicchiamo sul pulsante **+** situato in basso a sinistra, ci verrà chiesto di inserire un nome al comando. Nel box *Edit* inserite lo script e configurate il comando come più preferite.

Inoltre questo script gestisce automaticamente il *classpath*dei package senza la necessità di configurare variabili d&#8217;ambiente.


 [1]: /wp-content/uploads/2013/02/gedit_externalTools.png