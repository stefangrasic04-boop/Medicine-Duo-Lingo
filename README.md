# MEDIQ — Znanje za življenje

Interaktivna slovenska izobraževalna spletna aplikacija za odrasle, radovedne posameznike in študente medicine.

## Različica 2.0
- 7 področij, 30 lekcij, 90 vprašanj, 3 ravni zahtevnosti.
- Mikrorazlage, premešani odgovori, povratne informacije in povezave za nadaljnje branje.
- Dnevni cilji, XP za prvi pravilni odgovor, streak, napredek po področjih, dnevni izziv.
- Časovno razporejeno ponavljanje (0, 1, 3, 7, 14 dni), iskanje, filtri in lokalni izvoz podatkov.
- Odzivni dizajn, dostopnost s tipkovnico in brez zunanjih knjižnic.

## Lokalni zagon
Odpri index.html v sodobnem brskalniku ali zaženi `python3 -m http.server 8000` v mapi repozitorija in odpri http://localhost:8000.

## Objava na GitHub Pages
Settings → Pages → Deploy from a branch → main → / (root) → Save.
Pričakovani naslov: https://stefangrasic04-boop.github.io/Medicine-Duo-Lingo/

## Datoteke
- index.html: osnovna struktura strani
- styles.css: odzivni vizualni sistem
- curriculum.js: učne vsebine in nadaljnje branje
- app.js: navigacija, učne seje, napredek, ponavljanje

## Omejitve
To je beta, ne klinično validiran izdelek. Vsebina potrebuje neodvisen strokovni pregled; viri so povezave za nadaljnje branje in ne dokaz recenzije vsake trditve. Aplikacija ne diagnosticira ali zdravi. Lokalni napredek ni sinhroniziran med napravami, ni registracije, plačil, strežniške baze ali AI-pomočnika. Različica 2.0 ima novo shemo lokalne shrambe in ne prenaša napredka iz različice 1.0. Javna objava zahteva aktivacijo GitHub Pages. 
