## Peamised failid

- `app/page.js`: avaleht, mis jääb Server Component'iks.
- `app/layout.js`: ühine paigutus ja Link-navigatsioon; sisaldab html- ja body-elemente.
- `app/globals.css`: kogu rakenduse lihtne kujundus.
- `package.json`: sõltuvused ja käsud dev, build, start ning lint.
- `app/about/page.js`: lühike tutvustus.
- `app/components/Counter.jsx`: interaktiivne loendur.
- `app/components/ServerMessage.jsx`: nupust käivitatav API päring koos laadimis- ja veateatega.
- `app/api/message/route.js`: serveris töötav GET endpoint.
## Mida õppisin?

1. **Mida pakub Next.js lisaks Reactile?** Failipõhist marsruutimist, serveris renderdamist ja API endpointe.
2. **Miks vajab loendur 'use client' direktiivi?** See kasutab brauseris useState'i ja nupuvajutuse sündmust.
3. **Kus töötab app/api/message/route.js kood?** Next.js serveris.
4. **Kuidas sarnaneb endpoint Expressi route'iga?** Mõlemad vastavad HTTP päringule, näiteks JSON-iga.
5. **Miks peavad saladused jääma serverisse?** Brauserisse saadetud salajasi võtmeid saab kasutaja näha ja kuritarvitada.


UUS BRANCH: Pull request
