import React from 'react';

/*
 * LANDING PAGE (Strona główna)
 * 
 * Funkcjonalność:
 * - Pierwsza strona jaką widzi użytkownik
 * - Prezentacja aplikacji i jej możliwości
 * - Hero section z głównym komunikatem
 * - Sekcja z nadchodzącymi turniejami (podgląd)
 * - Sekcja z najlepszymi graczami (podgląd rankingu)
 * - Call-to-action buttony do rejestracji/logowania
 * - Krótkie informacje o tym jak działa aplikacja
 * - Footer z linkami do mediów społecznościowych
 * 
 * Integracja z Supabase:
 * - Pobieranie danych o nadchodzących turniejach
 * - Pobieranie top graczy z rankingu
 * - Sprawdzanie czy użytkownik jest zalogowany
 */

const LandingPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Witaj w TurniejApp!</h1>
      <p>Główna strona aplikacji do rejestracji w turniejach na żywo.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Nadchodzące turnieje</h2>
        <p>Tutaj będą wyświetlane najbliższe turnieje...</p>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Najlepsi gracze</h2>
        <p>Tutaj będzie podgląd rankingu...</p>
      </div>
    </div>
  );
};

export default LandingPage; 