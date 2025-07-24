import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Tournaments from './pages/Tournaments';
import Ranking from './pages/Ranking';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/turnieje" element={<Tournaments />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/logowanie" element={<Login />} />
            <Route path="/rejestracja" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 