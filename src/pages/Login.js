import React from 'react';

/*
 * LOGIN PAGE (Strona logowania)
 * 
 * Funkcjonalność:
 * - Formularz logowania z polami:
 *   * Email/nazwa użytkownika
 *   * Hasło
 *   * Checkbox "Zapamiętaj mnie"
 * - Walidacja formularza (format email, wymagane pola)
 * - Obsługa błędów logowania
 * - Link do odzyskiwania hasła ("Zapomniałeś hasła?")
 * - Link do rejestracji ("Nie masz konta? Zarejestruj się")
 * - Opcje logowania społecznościowego (Google, Facebook)
 * - Przekierowanie po udanym logowaniu:
 *   * Na stronę główną (domyślnie)
 *   * Na stronę, z której użytkownik przyszedł (redirect)
 *   * Na profil (jeśli pierwszy raz)
 * - Loading state podczas logowania
 * - Wyświetlanie komunikatów błędów
 * 
 * Przypadki użycia:
 * - Jeśli użytkownik JUŻ jest zalogowany: przekierowanie na profil/stronę główną
 * - Logowanie z parametrem redirect w URL
 * 
 * Integracja z Supabase:
 * - Supabase Auth dla logowania email/hasło
 * - OAuth dla logowania społecznościowego
 * - Zarządzanie sesjami
 * - Reset hasła przez email
 * - Weryfikacja statusu użytkownika
 */

const Login = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Zaloguj się</h1>
      <p>Wprowadź swoje dane aby się zalogować.</p>
      
      <form style={{ marginTop: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input 
            type="email" 
            style={{ 
              width: '100%', 
              padding: '0.5rem', 
              marginTop: '0.25rem',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }} 
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label>Hasło:</label>
          <input 
            type="password" 
            style={{ 
              width: '100%', 
              padding: '0.5rem', 
              marginTop: '0.25rem',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }} 
          />
        </div>
        
        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            padding: '0.75rem', 
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Zaloguj się
        </button>
      </form>
      
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p><a href="/reset-password">Zapomniałeś hasła?</a></p>
        <p>Nie masz konta? <a href="/rejestracja">Zarejestruj się</a></p>
      </div>
    </div>
  );
};

export default Login; 