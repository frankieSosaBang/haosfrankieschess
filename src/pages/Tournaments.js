import React from 'react';

/*
 * TOURNAMENTS PAGE (Strona turniejów)
 * 
 * Funkcjonalność:
 * - Lista wszystkich dostępnych turniejów
 * - Filtrowanie turniejów (data, lokalizacja, typ gry, poziom)
 * - Sortowanie turniejów (data, nagrody, liczba uczestników)
 * - Wyszukiwanie turniejów po nazwie
 * - Karty turniejów z podstawowymi informacjami:
 *   * Nazwa turnieju
 *   * Data i godzina
 *   * Lokalizacja
 *   * Typ gry (szachy klasyczne, blitz, rapid)
 *   * Limit uczestników
 *   * Aktualnie zapisanych
 *   * Opłata startowa
 *   * Nagrody
 * - Przycisk rejestracji na turniej
 * - Status turnieju (otwarta rejestracja, pełny, zakończony)
 * 
 * Integracja z Supabase:
 * - Pobieranie listy turniejów z tabeli 'tournaments'
 * - Rejestracja użytkownika na turniej (tabela 'tournament_registrations')
 * - Sprawdzanie czy użytkownik jest już zarejestrowany
 * - Real-time aktualizacje liczby uczestników
 */

const Tournaments = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Turnieje</h1>
      <p>Lista dostępnych turniejów do rejestracji.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Filtry</h3>
        <p>Tutaj będą filtry (data, lokalizacja, typ gry...).</p>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Lista turniejów</h3>
        <p>Tutaj będą karty z turniejami...</p>
      </div>
    </div>
  );
};

export default Tournaments; 