# Project Plan

## Puzzel Flow (logisch, oplopend in moeilijkheid)

1. Vergrendeld gebruikersaccount
   Je begint op een “locked screen”. Hint staat in een post-it in de hoek (“Vandaag is de verjaardag van de netwerkbeheerder”). Je vindt in een map een personeelslijst → geboortejaar = wachtwoord.\
   **Leerdoel**: logische deductie, geen echte security.

2. Nep-CLI terminal (super basic)
   Op de desktop staat een icoon “Recovery Terminal”.
   Je moet maar 3 commands gebruiken:
   `ls`, `open 'file'` en `run`. In een logbestand zie je: “backup missing… corrupted entry at line 42”. Je opent de file, ziet een foutregel, moet een script runnen dat het herstelt.\
   **Leerdoel**: basis CLI begrijpen zonder echte syntax.

3. Firefall — Firewall misconfiguratie
   Een mini “feature” waarin je 3 regels aan/uit moet klikken. Slechts 3 opties:

   - Allow HTTP
   - Allow DNS
   - Allow SSH

   Je krijgt een hint: "De update server werkt via poort 443 en resolutie via 53".
   Je activeert dus HTTP/HTTPS + DNS.\
    **Leerdoel**: concept van poorten → heel simpel voorgesteld.

4. Netwerk trace puzzel
   Een logbestand toont 3 IP-adressen, maar één is "verdacht". De hint zegt: "Internal = begint met 10." Je moet het juiste IP aanklikken.\
   **Leerdoel**: basis van IP ranges, intuïtief.

5. Encryptie puzzel (heel mild)
   Je vindt een bestand “keys.txt.enc”. Elders ligt een hint: ROT13 is geen echte encryptie… maar bruikbaar voor dit testbestand. Je plakt de tekst in een ingebouwde ROT13-tool. Uitkomst: een code die je nodig hebt voor de eindpuzzel.\
   **Leerdoel**: kennismaking met simpele encoding.

6. Eindpuzzel: Server reboot panel
   Een visueel paneel met:

   - CPU overheat warning → repareer door een slider naar beneden te trekken.
   - Network module offline → klik op 3 knipperende knoppen in juiste volgorde.
   - Enter recovery key → gebruik de ROT13-uitkomst.

   Daarna speelt een kleine animatie “Server restored”.

## Look & feel

Een simpele “faux desktop” webpagina (HTML/CSS/JS).\
Vensters die je opent met puzzels. Licht retro, maar modern genoeg om niet technisch te lijken. Geen echte hacking vibes → meer “IT escape room voor eerstejaars”.

## Waarom beginner-friendly?

Geen echte command syntax.\
Geen echte security of networks knowledge nodig.\
Veel visuele hints.\
Slechts één scherm → geen ingewikkeld gereis.\
Leert basis IT-concepten op een speelse manier.

Als je wilt, kan ik één van deze dingen doen:

- de volledige verhaallijn uitschrijven
- mockups maken van schermen
- alle puzzels volledig technisch uitwerken
- het als HTML/JS project opzetten
