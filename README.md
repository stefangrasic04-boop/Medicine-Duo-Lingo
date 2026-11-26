# MEDIQ — Znanje za življenje (2.1 beta)

Slovenska izobraževalna aplikacija: 5 minut na dan, za odrasle zunaj formalnega izobraževanja, radovedne uporabnike in študente medicine.

## Kaj deluje v kodi
- 7 področij, 30 lekcij, 90 vprašanj, tri ravni; mikrorazlage in povezave za branje.
- Kviz, XP samo za prvi pravilni odgovor, dnevni cilj, streak, ponavljanje (0/1/3/7/14 dni), profil, iskanje in filtri.
- Lokalna hramba in izvoz; varnejše obnavljanje stanja; dnevni izziv je stabilen znotraj dneva in ravni.
- PWA manifest in service worker za uporabo učne lupine brez povezave po uspešnem prvem obisku; namestitev je odvisna od brskalnika.

## Zagon
```sh
git clone https://github.com/stefangrasic04-boop/Medicine-Duo-Lingo.git
cd Medicine-Duo-Lingo
git switch mediq-2.1-pwa # dokler spremembe niso v main
python3 -m http.server 8000
```
Odpri http://localhost:8000. Osnovno učenje deluje tudi ob neposrednem odprtju index.html; PWA potrebuje localhost ali HTTPS.
```sh
node --test tests/mediq.test.cjs
```
Testi uporabljajo Node 20+ in simuliran DOM, ne nadomeščajo preizkusa v brskalniku.

## Objava
Po pregledu in testiranju združi PR v main. GitHub → Settings → Pages → Deploy from a branch → main → / (root) → Save. Predvideni URL: https://stefangrasic04-boop.github.io/Medicine-Duo-Lingo/ (objava ni potrjena). Preveri HTTPS, console, manifest in offline delovanje v DevTools. Pri spremembi lupine zvišaj CACHE v sw.js. Glej [načrt](docs/PRODUCT.md) in [QA](docs/QA.md).

## Meje
Beta, ne klinično validirana. Brez diagnoz, terapij, računov, sinhronizacije, analitike ali AI. Viri so za nadaljnje branje, ne dokaz recenzije posamezne trditve. Podatki ostanejo lokalno; izvoz je JSON, uvoz še ni izveden. SVG ikone: preveriti namestitev na iOS/Android; po potrebi dodati PNG. Pred javnim zagonom strokovni pregled in testiranje v dejanskih brskalnikih. V nujnih primerih v Sloveniji 112.
