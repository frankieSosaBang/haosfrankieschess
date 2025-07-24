import React from 'react';

/*
 * RANKING PAGE (Strona rankingu)
 * 
 * Funkcjonalność:
 * - Ranking wszystkich graczy w systemie
 * - Sortowanie po różnych kryteriach:
 *   * Punkty rankingowe (ELO/rating)
 *   * Liczba wygranych turniejów
 *   * Liczba rozegranych partii
 *   * Procent wygranych
 * - Filtrowanie graczy:
 *   * Po kategorii wiekowej
 *   * Po płci
 *   * Po regionie/mieście
 *   * Po aktywności (ostatnie 30/90 dni)
 * - Wyszukiwanie gracza po nazwie/nicku
 * - Tabela rankingowa z kolumnami:
 *   * Pozycja w rankingu
 *   * Avatar/zdjęcie gracza
 *   * Nazwa użytkownika
 *   * Rating/punkty
 *   * Liczba turniejów
 *   * Ostatnia aktywność
 * - Szczegóły gracza po kliknięciu (przekierowanie do profilu)
 * - Paginacja dla dużej liczby graczy
 * 
 * Integracja z Supabase:
 * - Pobieranie danych graczy z tabeli 'profiles'
 * - Pobieranie statystyk z tabeli 'player_stats'
 * - Kalkulacja rankingu na podstawie wyników turniejów
 * - Real-time aktualizacje rankingu
 */

const Ranking = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Ranking graczy</h1>
      <p>Tabela rankingowa wszystkich zarejestrowanych graczy.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Filtry i sortowanie</h3>
        <p>Tutaj będą opcje filtrowania i sortowania...</p>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Tabela rankingowa</h3>
        <p>Tutaj będzie tabela z rankingiem graczy...</p>
      </div>
    </div>
  );
};

export default Ranking; 