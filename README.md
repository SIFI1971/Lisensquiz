# Lisensquiz – øving til amatørradioprøven

Quiz-app for hele lisenskurset (NRRL «Veien til internasjonal radioamatørlisens»), laget i samme stil som Q-koder-appen.

- **Øv:** 346 spørsmål fra kapittel 2–13 og 16, med forklaring etter hvert svar. 142 av dem er merket **prøvenære** – de likner mest på det som spørres om på lisensprøven (basert på temaene i Nkoms eksempelprøve og læringsmålene). Spørsmål du bommer på kommer igjen snart; tre riktige på rad = mestret.
- **Prøvetest:** «Som prøven» gir 28 prøvenære spørsmål med samme beståttkrav som eksempelprøven (maks 6 feil). Du kan også ta 20 eller 50 spørsmål fra hele banken.
- **Kapitler:** Velg hvilke kapitler du vil øve på, og se fremgang per kapittel.

Virker uten nett etter første besøk, og kan installeres på mobilen («Legg til på startskjermen»).

## Publisere på GitHub Pages
1. Lag et nytt repo, f.eks. `Lisensquiz`, og last opp alle filene i denne mappen.
2. Settings → Pages → Deploy from a branch → `main` / `(root)`.
3. Appen ligger da på `https://<brukernavn>.github.io/Lisensquiz/`.

Spørsmålene ligger i `index.html` som linjer på formen `Q("kapittel", "spørsmål", ["riktig", "feil", "feil", "feil"], "forklaring")`. Første alternativ er alltid det riktige – appen stokker rekkefølgen.
Hvis du endrer filene senere: øk versjonsnummeret i `sw.js` (`lisensquiz-v1` → `v2`) så mobilene henter ny versjon.

Reglene følger forskrift om radioamatørvirksomhet (Nkom, 23.03.2026). Dette er ikke de offisielle eksamensspørsmålene.
