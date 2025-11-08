# Plan za Implementacijo Večjezičnega Spletišča - Backend (Strapi)

## Pregled
Implementacija večjezičnosti na backend strani z uporabo Strapi i18n plugin-a. Privzeti jezik: Slovenian (sl).

## Koraki Implementacije

### 1. Omogoči i18n Plugin
- Datoteka: `config/plugins.ts`
- Dodaj konfiguracijo za i18n plugin z locales: ['sl', 'en']
- Privzeti locale: 'sl'

### 2. Konfiguracija Lokal v Admin Panelu
- Po restartu Strapi, v admin panelu dodaj locales
- Nastavi Slovenian kot privzeti

### 3. Omogoči i18n za Content Types
- Za vsak content type (Article, Page, Global, Landing Page):
  - V Content-Types Builder omogoči Internationalization
  - Polja za prevod: title, content, description, meta

### 4. Testiranje API Endpoints
- Preveri `/api/articles?locale=sl` in `/api/articles?locale=en`
- Zagotovi fallback na privzeti jezik če prevod ni na voljo

### 5. Shranjevanje UI Nizov
- Ustvari `public/locales/sl/common.json` in `public/locales/en/common.json`
- Primer: {"welcome": "Dobrodošli"}

## Status
- [x] i18n plugin omogočen
- [ ] Locales konfigurirani
- [ ] Content types posodobljeni
- [ ] API testiran
- [x] UI nizi shranjeni

## Opombe
- Strapi samodejno upravlja z fallback logiko
- Vsebina se shranjuje v bazi z ločenimi vnosi za vsak locale