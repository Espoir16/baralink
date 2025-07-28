import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostMission from './pages/PostMission';
import FindMission from './pages/FindMission';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import HomeUser from './pages/HomeUser';

import Header from './components/Header';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
  AOS.refresh(); // Ajout utile
}, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poster" element={<PostMission />} />
        <Route path="/chercher" element={<FindMission />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/homeuser" element={<HomeUser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
