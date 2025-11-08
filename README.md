# Strapi React Router 7 Začetni Projekt

Polno-stack TypeScript začetni projekt s Strapi headless CMS in React Router 7 z modernimi komponentami uporabniškega vmesnika.

## 🚀 Tehnološki Sklad

### Frontend (Odjemalec)
- **React Router 7** - Polno-stack React ogrodje z datotečnim usmerjanjem
- **React 19** - Najnovejši React z modernimi funkcijami
- **TypeScript** - Varno razvojno okolje
- **TailwindCSS 4** - Priročni CSS ogrodje
- **Radix UI** - Dostopne, neoblikovane komponente uporabniškega vmesnika
- **Lucide React** - Lepi in dosledni ikoni
- **React Markdown** - Upodabljanje Markdown z podporo GitHub Flavored Markdown
- **Vite** - Hitro orodje za gradnjo in razvojni strežnik

### Backend (Strežnik)
- **Strapi 5** - Headless CMS z admin panelom
- **SQLite** - Baza podatkov (better-sqlite3)
- **TypeScript** - Varno razvojno okolje za backend
- **Node.js** - Izvajalno okolje

### Orodja za Razvoj
- **Concurrently** - Izvajanje več ukazov vzporedno
- **Wait-on** - Čakanje na razpoložljivost storitev
- **ESLint & TypeScript** - Kakovost kode in preverjanje tipov

## 📋 Predpogoji

- Node.js (>=20.0.0)
- npm upravitelj paketov

## 🛠️ Nastavitev

### Hitri Začetek

1. **Klonirajte repozitorij**
   ```bash
   git clone <repository-url>
   cd react-project
   ```

2. **Namestite odvisnosti in nastavite odjemalca ter strežnik**
    ```bash
    npm run setup
    ```

3. **Posadite bazo podatkov z vzorčnimi podatki**
    ```bash
    npm run seed
    ```

4. **Zaženite razvojne strežnike**
    ```bash
    npm run dev
    ```

Aplikacija bo na voljo na:
- **Frontend**: http://localhost:5174
- **Strapi Admin**: http://localhost:1337/admin

### Ročna Nastavitev

Če želite nastaviti ročno:

1. **Namestite korenske odvisnosti**
    ```bash
    npm install
    ```

2. **Nastavite odjemalca**
    ```bash
    npm run setup:client
    ```

3. **Nastavite strežnik**
    ```bash
    npm run setup:server
    ```

4. **Posadite bazo podatkov**
    ```bash
    npm run seed
    ```

## 🎯 Razpoložljivi Skripti

### Korenska Raven
- `npm run setup` - Namestite in nastavite odjemalca ter strežnik
- `npm run dev` - Zaženite oba razvojna strežnika
- `npm run seed` - Uvozite vzorčne podatke v Strapi
- `npm run export` - Izvozite trenutne Strapi podatke
- `npm run client` - Zaženite samo razvojni strežnik odjemalca
- `npm run server` - Zaženite samo razvojni strežnik strežnika

### Odjemalec (Frontend)
```bash
cd client
npm run dev        # Zaženite razvojni strežnik
npm run build      # Gradite za produkcijo
npm run start      # Zaženite produkcijski strežnik
npm run typecheck  # Izvedite TypeScript preverjanja
```

### Strežnik (Strapi)
```bash
cd server
npm run develop    # Zaženite razvojni strežnik z admin panelom
npm run start      # Zaženite produkcijski strežnik
npm run build      # Gradite admin panel
npm run console    # Odprite Strapi konzolo
```

## 📁 Struktura Projekta

```
├── client/                 # React Router 7 frontend
│   ├── app/
│   │   ├── components/     # Ponovno uporabne komponente uporabniškega vmesnika
│   │   │   ├── blocks/     # Dinamični bloki vsebine
│   │   │   ├── custom/     # Prilagojene komponente
│   │   │   │   └── ui/         # Osnovne komponente uporabniškega vmesnika (Radix)
│   │   ├── lib/           # Pripomočki in API odjemalec
│   │   ├── routes/        # Datotečno usmerjanje
│   │   └── types/         # TypeScript definicije tipov
│   └── package.json
│
├── server/                # Strapi CMS backend
│   ├── config/           # Strapi konfiguracija
│   ├── src/
│   │   ├── api/          # API končne točke
│   │   └── components/   # Strapi komponente
│   └── package.json
│
├── seed-data.tar.gz      # Vzorčni podatki za sajenje
└── package.json          # Korenska konfiguracija paketov
```
├── client/                 # React Router 7 frontend
│   ├── app/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── blocks/     # Dynamic content blocks
│   │   │   ├── custom/     # Custom components
│   │   │   └── ui/         # Base UI components (Radix)
│   │   ├── lib/           # Utilities and API client
│   │   ├── routes/        # File-based routing
│   │   └── types/         # TypeScript type definitions
│   └── package.json
│
├── server/                # Strapi CMS backend
│   ├── config/           # Strapi configuration
│   ├── src/
│   │   ├── api/          # API endpoints
│   │   └── components/   # Strapi components
│   └── package.json
│
├── seed-data.tar.gz      # Sample data for seeding
└── package.json          # Root package configuration
```

## 🎨 Funkcije

- **Dinamični Bloki Vsebine** - Prilagodljiva gradnja strani s ponovno uporabnimi komponentami
- **Upravljanje Člankov** - Polni CRUD za članke s predstavljenimi slikami in avtorji
- **Varno Tipiziran API** - Močno tipizirani API odzivi in komponente
- **Odzivni Dizajn** - Mobilno-prvi odzivni postavitve
- **Optimizirano za SEO** - Meta oznake in strukturirani podatki
- **Obravnava Napak** - Elegančne meje napak in 404 strani
- **Optimizacija Slik** - Optimizirano nalaganje slik z razmerji stranic

## 🔧 Konfiguracija

### Spremenljivke Okolja

Skript za nastavitev samodejno kopira datoteke okolja. Lahko ročno konfigurirate:

- Kopirajte `.env.example` v `.env` v obeh mapah `client/` in `server/`
- Posodobite konfiguracije baze podatkov in API po potrebi

### Strapi Admin

Po izvedbi `npm run seed` lahko dostopate do Strapi admin panela na http://localhost:1337/admin s posajenimi admin poverilnicami.

## 📚 Izvedite Več

- [React Router 7 Dokumentacija](https://reactrouter.com)
- [Strapi Dokumentacija](https://docs.strapi.io)
- [TailwindCSS Dokumentacija](https://tailwindcss.com/docs)
- [Radix UI Dokumentacija](https://www.radix-ui.com)

## 🤝 Prispevanje

1. Forknite repozitorij
2. Ustvarite vejo funkcije
3. Naredite svoje spremembe
4. Dodajte teste, če je primerno
5. Pošljite zahtevo za združitev

## 📄 Licenca

Ta projekt je licenciran pod MIT licenco.
