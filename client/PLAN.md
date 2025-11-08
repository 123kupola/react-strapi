# Plan za Implementacijo Večjezičnega Spletišča - Frontend (React Router)

## Pregled
Implementacija večjezičnosti na frontend strani z uporabo react-i18next. Privzeti jezik: Slovenian (sl).

## Koraki Implementacije

### 1. Namestitev Knjižnic
- Dodaj react-i18next, i18next, i18next-browser-languagedetector v package.json
- Namesti z npm

### 2. Konfiguracija i18n
- Ustvari lib/i18n.ts
- Nastavi fallbackLng: 'sl'
- Dodaj resources za sl in en

### 3. Jezikovne Datoteke za UI
- Ustvari src/locales/sl/common.json in src/locales/en/common.json
- Dodaj prevode za UI nize

### 4. Routing z Locale
- Posodobi routes.ts za /:locale/*
- Dodaj logiko za locale v komponentah

### 5. API Klice z Locale
- Dodaj locale parameter v API klice
- Implementiraj fallback če prevod ni na voljo

### 6. Testiranje
- Preveri preklapljanje jezikov
- Testiraj fallback

## Status
- [x] Knjižnice nameščene
- [x] i18n konfiguriran
- [x] Jezikovne datoteke ustvarjene
- [x] Routing posodobljen
- [x] API klice posodobljeni
- [ ] Testirano

## Opombe
- Uporabi useTranslation hook za prevode
- Fallback na privzeti jezik če prevod ni na voljo