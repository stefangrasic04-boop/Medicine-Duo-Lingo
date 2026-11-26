# Produkt in razvoj

## Vizija
Zdravstvena pismenost za vsakogar, prednostno odrasli po zaključku šolanja. 3 poti: Zdravje v življenju (osnove), Razumi medicino (mehanizmi), Medicina PRO (študenti). Učni cikel: 1 cilj, mikrorazlaga, 3–5 vprašanj, razlaga, načrt ponavljanja. 5 minut na dan.

## Vsebina
Sedem področij (30 lekcij/90 nalog): telo, preventiva, zdravila in okužbe, zdravstvene odločitve (sistem, nujna stanja, informacije), dobro počutje (spanje, duševno, spolno/reproduktivno zdravje), poglobljena fiziologija/patologija, PRO. Cilj MVP 60/300; dodati prve pomoči, kronične bolezni, zdravstvene mite, preglednice z viri na ravni trditve.

## Gamifikacija
Izvedeno: XP, streak, cilj, dnevni izziv, pregled napredka, ponavljanje. Naslednje: konceptni zemljevid, prilagodljiva težavnost, neobvezne značke, realistični scenariji, dostopnost brez kazni za prekinjen streak. Ne enačiti rezultata z zdravstveno kompetenco.

## Arhitektura
Trenutno: statični HTML/CSS/JS; curriculum.js podatkovne tabele; app.js prikaz, kviz, lokalno stanje mediq-v2; manifest in sw.js omogočita PWA; testni skript Node. Predlagano: ločeni moduli vsebin, tipizirana shema (id, raven, cilj, vprašanja, vir, reviewer, status, datum), React/TypeScript le če kompleksnost to upraviči. Pozneje opcijski Supabase/PostgreSQL z RLS, auth, sinhronizacija in CMS za recenzije. Ne zbirati zdravstvenih podatkov; privzeto brez računa. AI samo za osnutke pod nadzorom recenzenta.

## Roadmap
P0: pregled PR, avtomatski testi, brskalniški QA in medicinska recenzija, odpraviti kritične napake. P1 (2–4 tedne, ocena): 60 lekcij, 300 nalog, podrobni viri in recenzenti; pilot 20–50 odraslih. P2 (4–8 tednov, ocena): prilagajanje, onboarding, kartice in izvoz/uvoz; preveriti dostopnost. P3: opcijski računi, sinhronizacija, lokalizacija, uredniški portal, meritve z izrecnim soglasjem. Cilji pilota: dokončanje prve lekcije >=70%, 7-dnevna vrnitev >=25%, izboljšanje na primerljivem pre/post testu. To so cilji, ne izmerjeni rezultati.

## Medicinska uredniška politika
Avtor navede točne vire, datum in področje; neodvisni zdravnik/ustrezni strokovnjak pregleda trditve ter odgovore; urednik preveri razumljivost, dostopnost in lokalni kontekst; objavi le odobrene verzije. Napake prijaviti, umakniti sporno vsebino, voditi spremembe. Brez personalizirane diagnoze ali terapije.
