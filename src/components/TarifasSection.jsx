import React from 'react';
import SpriteAnimator from './SpriteAnimator';

const programandoFrames = [
  '/assets/personaje/programando/frame1.png','/assets/personaje/programando/frame2.png',
  '/assets/personaje/programando/frame3.png','/assets/personaje/programando/frame4.png',
  '/assets/personaje/programando/frame5.png',
];

const TarifasSection = ({ t }) => {
  const r = t.tarifas;
  return (
    <section id="tarifas" className="py-16 sm:py-20 relative overflow-hidden bg-[#FDFBF7]">
      
      {/* Aurora */}
      <div className="aurora-container">
        <div className="aurora-orbe aurora-orbe-azul animate-spin-slow" style={{ top: '20%', left: '-15%' }}></div>
        <div className="aurora-orbe aurora-orbe-lila" style={{ bottom: '-10%', right: '-10%' }}></div>
        <div className="aurora-orbe aurora-orbe-rosa" style={{ top: '-10%', right: '20%' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-xs font-body font-extrabold text-[#C9A96E] tracking-widest uppercase mb-3">{r.eyebrow}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1209] mb-4">{r.h2}</h2>
          <p className="font-body text-[#5A4830] text-base max-w-lg mx-auto font-semibold">{r.sub}</p>
        </div>

        {/* Sprite + badge — visible solo en móvil, centrado arriba de las tarjetas */}
        <div className="flex flex-col items-center gap-3 mb-8 md:hidden">
          <SpriteAnimator frames={programandoFrames} fps={4} className="w-32 animate-float" alt="Programando" />
          <div className="bg-white rounded-2xl px-5 py-3 shadow-md border border-[#D5C9B0] text-center">
            <p className="font-body font-extrabold text-sm text-[#C9A96E]">🎁</p>
            <p className="font-body font-extrabold text-sm text-[#1A1209]">{r.gratis}</p>
          </div>
        </div>

        {/* En móvil: 1 columna (virtual encima, presencial abajo). En md: 3 columnas con sprite en medio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Virtual card */}
          <div className="bg-white rounded-3xl border-2 border-[#7BB3F5] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💻</div>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-800 mb-4 w-fit">{r.virtual}</span>
            <div className="flex items-end gap-1 my-3 sm:my-4">
              <span className="font-display font-extrabold text-4xl text-[#1A1209]">{r.price}</span>
              <span className="font-body text-[#9B8060] text-sm mb-1 font-semibold">{r.unit}</span>
            </div>
            <p className="font-body text-sm text-[#5A4830] mb-4 sm:mb-5 leading-relaxed font-semibold">{r.sub_virtual}</p>
            <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 flex-1">
              {r.f_v.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm font-body text-[#3A2810] font-semibold">
                  <span className="text-[#7BB3F5] mt-0.5 font-extrabold shrink-0">✓</span>{f}
                </li>
              ))}
            </ul>
            <a href="#contacto"
              className="block w-full text-center py-3 px-5 rounded-2xl border-2 border-[#7BB3F5] text-[#3A7FD5] font-body font-extrabold text-sm hover:bg-[#7BB3F5] hover:text-white transition-all duration-300">
              {r.cta_v}
            </a>
          </div>

          {/* Sprite en medio — solo desktop */}
          <div className="hidden md:flex flex-col items-center justify-center py-4 gap-5">
            <SpriteAnimator frames={programandoFrames} fps={4} className="w-full max-w-[180px] animate-float" alt="Programando" />
            <div className="bg-white rounded-2xl px-5 py-4 shadow-md border border-[#D5C9B0] text-center">
              <p className="font-body font-extrabold text-sm text-[#C9A96E] mb-1">🎁</p>
              <p className="font-body font-extrabold text-sm text-[#1A1209]">{r.gratis}</p>
            </div>
          </div>

          {/* Presencial card */}
          <div className="bg-white rounded-3xl border-2 border-[#C9A96E] p-6 sm:p-8 shadow-xl relative flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-[#C9A96E] text-white text-xs font-extrabold px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">{r.popular}</span>
            </div>
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏫</div>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-100 text-amber-800 mb-4 w-fit">{r.presencial}</span>
            <div className="flex items-end gap-1 my-3 sm:my-4">
              <span className="font-display font-extrabold text-4xl text-[#1A1209]">{r.price}</span>
              <span className="font-body text-[#9B8060] text-sm mb-1 font-semibold">{r.unit}</span>
            </div>
            <p className="font-body text-sm text-[#5A4830] mb-4 sm:mb-5 leading-relaxed font-semibold">{r.sub_presencial}</p>
            <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 flex-1">
              {r.f_p.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm font-body text-[#3A2810] font-semibold">
                  <span className="text-[#C9A96E] mt-0.5 font-extrabold shrink-0">✓</span>{f}
                </li>
              ))}
            </ul>
            <a href="#contacto"
              className="block w-full text-center py-3 px-5 rounded-2xl bg-[#1A1209] text-white font-body font-extrabold text-sm hover:bg-[#C9A96E] transition-all duration-300 shadow-md">
              {r.cta_p}
            </a>
          </div>
        </div>

        <p className="text-center font-body text-xs text-[#9B8060] mt-6 sm:mt-8 font-semibold">{r.nota}</p>
      </div>
    </section>
  );
};

export default TarifasSection;
