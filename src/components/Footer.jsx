import React from 'react';

const Footer = ({ t, lang }) => {
  const hrefs = ['#hero','#materias','#configurador','#logros','#tarifas','#contacto'];
  const labels_es = ['Inicio','Materias','Configurador','Logros','Tarifas','Contacto'];
  const labels_en = ['Home','Subjects','Configurator','Achievements','Pricing','Contact'];
  const labels = lang==='en' ? labels_en : labels_es;

  return (
    <footer className="bg-[#1A1209] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <img src="/assets/logos/NaHuK Dorado (3).png" alt="KNH" className="h-12 w-auto object-contain opacity-90" />
            <div>
              <p className="font-display font-bold text-white text-lg">KNH Tutorías</p>
              <p className="font-body text-[#9B8060] text-xs font-semibold">Computer Engineer · NAHUK</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-4 justify-center">
            {hrefs.map((href, i) => (
              <a key={href} href={href} className="text-xs font-body font-bold text-[#9B8060] hover:text-[#C9A96E] transition-colors">
                {labels[i]}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-[#3A2E22] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[#6B5A40] font-semibold">
            © {new Date().getFullYear()} Karen Navarro Hurtado. {t.footer.rights}
          </p>
          <p className="font-body text-xs text-[#6B5A40] font-semibold">Toluca, México 🇲🇽</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
