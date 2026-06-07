import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MateriasSection from './components/MateriasSection';
import ConfiguradorSection from './components/ConfiguradorSection';
import LogrosSection from './components/LogrosSection';
import TarifasSection from './components/TarifasSection';
import ContactoSection from './components/ContactoSection';
import Footer from './components/Footer';
import translations from './i18n';

function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];
  const toggleLang = () => setLang(l => l === 'es' ? 'en' : 'es');

  return (
    <div className="min-h-screen bg-cream">
      <Navbar t={t} lang={lang} toggleLang={toggleLang} />
      <main>
        <HeroSection t={t} />
        <MateriasSection t={t} />
        <ConfiguradorSection t={t} lang={lang} />
        <LogrosSection t={t} lang={lang} />
        <TarifasSection t={t} />
        <ContactoSection t={t} lang={lang} />
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
}

export default App;
