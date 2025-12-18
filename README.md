# De Verloren Server

## De opdracht

Een bedrijf dat verantwoordelijk is voor het onderhouden van servers is er eentje verloren. Is hij gecrasht? Is hij gehackt? We hebben geen idee. Dit is aan jou om te onderzoeken. Hier is een korte beschrijving van elke puzzel, maar het is niet per se nodig om te puzzels op te kunnen lossen.

## De puzzels

### 1. Login

Ga naar [de website](https://remcoslootmaekersucll.github.io/DigitalForensicsDemo/) om in te loggen in de server interface. Er staat een kleine tip om het wachtwoord te vinden.

### 2. Terminal

Eenmaal je in het systeem bent, wordt je naar een terminal gebracht. Hier moet je een aantal dingetjes vinden. Kun je de naam van de algemene systeembeheerder vinden? En de tijdzone, uitgedrukt in GMT, waarin de server staat? Je kan met `help` alle beschikbare commando's zien. Er staan er een heleboel, maar je hebt maar een paar nodig.

### 3. Firewall

De firewall heeft een verkeerde configuratie. Dit weten we door een **error** die we ondervonden tijdens het verbinden met de server. Zoek de standaard poorten op van de protocollen die tevoorschijn komen en zet de juiste protocollen aan. Let op: het activeren van een fout protocol zal gevolgen hebben. De server zal open en bloot liggen over het hele internet!

Bericht van de **error**: "De server werkt via poort 443 en resolutie via 53."

### 4. Netwerk tracing

De netwerkbeheerder heeft de logbestanden bekeken en heel wat IP-adressen gevonden. Zoek op het internet alle interne IP-addressen _(IP-addressen die niet gerouteerd worden over het publieke netwerk)_ en vergelijk deze met de IP's die je te zien krijgt. Eentje past hier niet in het rijtje thuis. Aan jou de taak om deze aan te duiden.

### 5. Programmeren

Nu een stukje code. Voer het bestand uit door op de knop "Uitvoeren" te klikken en kijk wat er gebeurt.

### 6. Recovery

We zijn er bijna! De server is gecrasht door een corrupte of verdachte bestanden. Aan jou om te cross-checken met de server welke bestanden verwijderd of nagekeken moeten worden. Daarna moet je de server opnieuw verbinden door de juiste poorten te kiezen voor de drie kabels. Als je dat gedaan hebt moet je alleen nog vinden wat het wachtwoord is en dan heb je het gehaald! Goed gedaan!

### About

This is a Dutch-languaged project made for last year high school students to get an introduction as to what there is to learn in the IT field. It was made as a service learning assignment for college.

### Installation

To run the project locally, you should run:

```
npm install --legacy-peer-deps
npm run dev
```
