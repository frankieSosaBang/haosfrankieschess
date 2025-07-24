# haosfrankieschess

Aplikacja React do rejestracji w turniejach na żywo z integracją Supabase.

## Funkcjonalności

- **Landing Page** - Strona główna z prezentacją aplikacji
- **Turnieje** - Przeglądanie i rejestracja na turnieje
- **Ranking** - Tabela rankingowa graczy
- **Profil** - Zarządzanie profilem użytkownika
- **Autoryzacja** - Logowanie i rejestracja przez Supabase

## Technologie

- React 18
- React Router DOM 6
- Supabase (baza danych + autoryzacja)

## Instalacja

1. Sklonuj repozytorium
2. Zainstaluj zależności:
```bash
npm install
```

3. Skonfiguruj Supabase (będzie potrzebny klucz API)

4. Uruchom aplikację:
```bash
npm start
```

Aplikacja będzie dostępna pod adresem: http://localhost:3000

## Struktura projektu

```
src/
├── components/
│   └── NavBar.js          # Nawigacja między stronami
├── pages/
│   ├── LandingPage.js     # Strona główna
│   ├── Tournaments.js     # Lista turniejów
│   ├── Ranking.js         # Ranking graczy
│   ├── Profile.js         # Profil użytkownika
│   ├── Login.js           # Logowanie
│   └── Register.js        # Rejestracja
├── App.js                 # Główny komponent z routingiem
└── index.js               # Punkt wejścia aplikacji
```

## Następne kroki

1. Integracja z Supabase
2. Implementacja formularzy i walidacji
3. Dodanie stylów (CSS/Styled Components)
4. Implementacja logiki biznesowej
5. Testy
