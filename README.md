# De Verloren Server

## De opdracht

Een bedrijf dat verantwoordelijk is voor het onderhouden van servers is er eentje verloren. Is hij gecrasht? Is hij gehackt? We hebben geen idee. Dit is aan jou om te onderzoeken.

## De puzzels

### 1. Login

Ga naar [de server zijn website](EFFECTIEVE LINK) om in te loggen in de server interface. Er staat een kleine tip om het wachtwoord te vinden.

### 2. Terminal

Eenmaal je in het systeem bent, wordt je naar een terminal gebracht. Hier moet je een naam zien te vinden. Je kan met `help` alle beschikbare commando's zien. Er staan er een heleboel, maar je hebt maar een handjevol nodig.

**Tip:** `man` is kort voor "manual"...

### 3. Firewall

De firewall heeft een verkeerde configuratie. Dit weten we door een **error** die we ondervonden tijdens het verbinden met de server. Zoek de standaard poorten op van de protocollen die tevoorschijn komen en zet de juiste protocollen aan. Let op: het activeren van een fout protocol zal gevolgen hebben. De server zal open en bloot over het hele internet staan!

Bericht van de **error**: "De server werkt via poort 443 en resolutie via 53."

### 4. Netwerk tracing

In het logbestand zijn er heel wat IP-addressen te vinden. Zoek op het internet alle interne IP-addressen _(IP-addressen die niet gerouteerd worden over het publieke netwerk)_ en vergelijk deze met de IP's in het logbestand. Is er eentje die er niet hoort? Overduidelijk wel, anders stellen we de vraag niet... Aan jou om te vinden welke dit is.

### 5. Encryptie

Dit is een manier van geheimhouding waar je zeer dankbaar om moet zijn. De reden dat hackers niet zomaar alle berichten die je verstuurt kunnen lezen, is omdat deze berichten geëncrypteerd worden voordat ze over het internet verstuurd worden. Dit wil zeggen: versleuteld. Alleen de persoon met de juiste sleutel (die in een ander netwerk-pakket verstuurd wordt) kan de berichten terug decrypten. Dit is nu juist wat er mis is gelopen. We hebben het geëncrypteerde bestand gekregen, maar we missen de sleutel. We zullen het heel simpel houden, want dit is best een ingewikkeld systeem... Voor eenvoud gebruiken we het RSA-algoritme. Met deze informatie kun je verder op de website.

<!-- misschien veranderen naar code debugging... -->

### 6. Recovery

We zijn er bijna! We moeten nog 1 ding doen. De hardware (meerbepaald processor) is aan het oververhitten. Los dit zo snel mogelijk op, zodat de processor niet compleet oververhit en onbruikbaar wordt! Zet daarna het systeem weer aan en kijk of de netwerkmodule juist opstart (deze heb je normaal gezien eerder gefixt). Eenmaal je de recovery key invult, zal de server weer beschikbaar zijn over het hele bedrijf!
