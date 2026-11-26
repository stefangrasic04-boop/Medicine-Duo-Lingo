# Testni načrt

## Avtomatsko
node --test tests/mediq.test.cjs — struktura 30/90, navigacija, kviz, XP, ponovni zagon, ponastavitev, okvarjena shramba in obstoj PWA datotek. Simuliran DOM; rezultat v konkretnem okolju je treba zabeležiti.

## Ročno pred izdajo
- Chrome, Firefox, Safari (iOS), Android Chrome; 320 px in desktop; tipkovnica in bralnik zaslona.
- Dokončaj lekcijo s pravilnimi in napačnimi odgovori, ponovi; XP se ne podvoji, napačno vprašanje je takoj na seznamu.
- Preveri 2/3 prag, datum pri polnoči, streak, filtre, nastavitve in izvoz JSON; onemogoči shrambo.
- Na localhost/HTTPS po prvem obisku počakaj, da je service worker aktiviran; ponovno naloži stran offline; lekcija in kviz morata delovati; zunanje povezave ne.
- Preveri posodobitev cache, namestitev na Android/iOS in ikono; ne obljubljaj enake podpore povsod.
- Preveri GitHub Pages projektno podpot, brez 404 in brez napak v konzoli.
- Neodvisni medicinski pregled vsake trditve, odgovora in vira pred javno promocijo.
- Zabeleži okolje, datum, rezultat in napako. Kritična napaka ali manjkajoč medicinski pregled zadrži javni zagon.
