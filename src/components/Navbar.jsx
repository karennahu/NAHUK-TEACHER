import React, { useState, useEffect } from 'react';

const Navbar = ({ t, lang, toggleLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href:'#materias', label: t.nav.materias },
    { href:'#configurador', label: t.nav.configurador },
    { href:'#logros', label: t.nav.logros },
    { href:'#tarifas', label: t.nav.tarifas },
    { href:'#contacto', label: t.nav.contacto },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#4A3126]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <img src="/assets/logos/NaHuK Dorado (3).png" alt="KNH" className="h-8 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform" />
          <span className="font-display font-bold text-base sm:text-lg text-[#A0814A] tracking-wide hidden sm:block">KNH Tutorías</span>
        </a>

        <ul className="hidden md:flex items-center gap-5">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-body font-semibold text-[#3A2E22] hover:text-[#C9A96E] transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#C9A96E] group-hover:w-full transition-all duration-300 rounded" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border-2 border-[#C9A96E]/40 text-xs font-body font-bold text-[#A0814A] hover:bg-[#F5EFE6] transition-colors">
            🌐 {t.lang_switch}
          </button>
          <a href="#contacto"
            className="px-5 py-2.5 bg-[#C9A96E] text-white text-sm font-body font-bold rounded-full hover:bg-[#A0814A] transition-colors shadow-sm">
            {t.nav.reservar}
          </a>
        </div>

        {/* Mobile buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleLang}
            className="px-2.5 py-1.5 rounded-full border border-[#C9A96E]/50 text-[10px] font-body font-bold text-[#A0814A]">
            🌐 {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#3A2E22]" aria-label="Menú">
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-t border-[#EDE8DF] px-4 py-4 space-y-1 shadow-md">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="block text-sm font-body font-bold text-[#3A2E22] hover:text-[#C9A96E] py-3 border-b border-[#F0E8DC] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setMenuOpen(false)}
            className="block mt-3 w-full text-center py-3.5 bg-[#C9A96E] text-white font-body font-bold text-sm rounded-2xl">
            {t.nav.reservar}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
