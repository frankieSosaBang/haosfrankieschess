import React from 'react';

/*
 * REGISTER PAGE (Strona rejestracji)
 * 
 * Funkcjonalność:
 * - Formularz rejestracji z polami:
 *   * Imię
 *   * Nazwisko  
 *   * Nick/nazwa użytkownika (unikalna)
 *   * Email (weryfikacja)
 *   * Hasło (silne hasło + potwierdzenie)
 *   * Data urodzenia
 *   * Płeć (opcjonalne)
 *   * Miasto/region
 *   * Numer telefonu (opcjonalne)
 * - Walidacja formularza:
 *   * Format email
 *   * Siła hasła (długość, znaki specjalne)
 *   * Zgodność haseł
 *   * Unikalność nicku
 *   * Wiek (minimum 13 lat - COPPA)
 * - Checkbox akceptacji regulaminu i polityki prywatności
 * - Checkbox na newsletter (opcjonalny)
 * - Captcha/ReCaptcha
 * - Wysyłanie emaila weryfikacyjnego
 * - Loading state podczas rejestracji
 * - Obsługa błędów rejestracji
 * - Link do logowania ("Masz już konto? Zaloguj się")
 * 
 * Po rejestracji:
 * - Przekierowanie na stronę potwierdzenia
 * - Informacja o konieczności weryfikacji emaila
 * - Możliwość ponownego wysłania emaila weryfikacyjnego
 * 
 * Integracja z Supabase:
 * - Supabase Auth dla rejestracji
 * - Tworzenie profilu w tabeli 'profiles'
 * - Email weryfikacja przez Supabase
 * - Sprawdzanie unikalności nicku
 * - Upload domyślnego avatara
 */

const Register = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Zarejestruj się</h1>
      <p>Utwórz konto aby móc rejestrować się na turnieje.</p>
      
      <form style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label>Imię:</label>
            <input 
              type="text" 
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                marginTop: '0.25rem',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }} 
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Nazwisko:</label>
            <input 
              type="text" 
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                marginTop: '0.25rem',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }} 
            />
          </div>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label>Nick:</label>
          <input 
            type="text" 
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
        
        <div style={{ marginBottom: '1rem' }}>
          <label>Potwierdź hasło:</label>
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
        
        <div style={{ marginBottom: '1rem' }}>
          <label>
            <input type="checkbox" style={{ marginRight: '0.5rem' }} />
            Akceptuję regulamin i politykę prywatności
          </label>
        </div>
        
        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            padding: '0.75rem', 
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Zarejestruj się
        </button>
      </form>
      
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p>Masz już konto? <a href="/logowanie">Zaloguj się</a></p>
      </div>
    </div>
  );
};

export default Register; 