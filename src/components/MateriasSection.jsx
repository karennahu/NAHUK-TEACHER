import React, { useState, useEffect } from 'react';

const getMaterias = (lang) => [
  { id:'matematicas', label: lang==='es'?'Matemáticas':'Mathematics', emoji:'📐', color:'bg-blue-100 border-blue-300 text-blue-800', active:'bg-blue-600 border-blue-600 text-white', ring:'ring-blue-300', ph: lang==='es'?'Ej. Fracciones, Álgebra, Geometría...':'E.g. Fractions, Algebra, Geometry...' },
  { id:'fisica', label: lang==='es'?'Física y Química':'Physics & Chemistry', emoji:'⚗️', color:'bg-emerald-100 border-emerald-300 text-emerald-800', active:'bg-emerald-600 border-emerald-600 text-white', ring:'ring-emerald-300', ph: lang==='es'?'Ej. Leyes de Newton, Tabla periódica...':'E.g. Newton\'s Laws, Periodic table...' },
  { id:'espanol', label: lang==='es'?'Español':'Spanish / Language', emoji:'📖', color:'bg-purple-100 border-purple-300 text-purple-800', active:'bg-purple-600 border-purple-600 text-white', ring:'ring-purple-300', ph: lang==='es'?'Ej. Ortografía, Redacción, Gramática...':'E.g. Spelling, Writing, Grammar...' },
  { id:'historia', label: lang==='es'?'Historia y Ciencia':'History & Science', emoji:'🔬', color:'bg-orange-100 border-orange-300 text-orange-800', active:'bg-orange-500 border-orange-500 text-white', ring:'ring-orange-300', ph: lang==='es'?'Ej. Revolución Mexicana, Biología...':'E.g. Mexican Revolution, Biology...' },
];

const MateriasSection = ({ t, lang }) => {
  const materias = getMaterias(lang || 'es');
  const [active, setActive] = useState('matematicas');
  const [val, setVal] = useState('');
  const activeMat = materias.find(m => m.id === active);

  return (
    <section id="materias" className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-xs font-body font-extrabold text-[#C9A96E] tracking-widest uppercase mb-3">{t.materias.eyebrow}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1209] mb-4">{t.materias.h2}</h2>
          <p className="font-body text-[#5A4830] text-base max-w-lg mx-auto font-semibold">{t.materias.sub}</p>
        </div>

        {/* Círculos de materias — siempre en fila de 4, más pequeños en móvil */}
        <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
          {materias.map(m => (
            <button key={m.id} onClick={() => setActive(m.id)} className="flex flex-col items-center gap-2 group">
              <div
                className={`rounded-full border-2 flex items-center justify-center transition-all duration-250 shadow-sm
                  ${active === m.id ? `${m.active} shadow-xl ring-4 ${m.ring} ring-offset-2` : `${m.color} hover:shadow-md`}`}
                style={{
                  width: active === m.id ? 72 : 64,
                  height: active === m.id ? 72 : 64,
                  fontSize: active === m.id ? '1.75rem' : '1.5rem',
                }}>
                {m.emoji}
              </div>
              <span className={`font-body font-extrabold text-[11px] sm:text-xs transition-colors text-center leading-tight max-w-[70px] ${active===m.id ? 'text-[#1A1209]' : 'text-[#6A5840]'}`}>
                {m.label}
              </span>
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="max-w-2xl mx-auto">
          <label className="block font-body font-extrabold text-[#1A1209] mb-2 text-sm">{t.materias.label}</label>
          <div className="relative">
            <input type="text" value={val} onChange={e => setVal(e.target.value)}
              placeholder={activeMat?.ph || ''}
              className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 pr-[110px] rounded-2xl border-2 bg-white font-body text-[#1A1209] text-sm sm:text-base outline-none transition-all duration-200 shadow-sm focus:ring-2 ${activeMat?.ring || 'ring-[#C9A96E]'}
                ${active==='matematicas'?'border-blue-300 focus:border-blue-500':active==='fisica'?'border-emerald-300 focus:border-emerald-500':active==='espanol'?'border-purple-300 focus:border-purple-500':'border-orange-300 focus:border-orange-500'}`} />
            <a href="#configurador"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-[#1A1209] text-white text-xs font-body font-extrabold rounded-xl hover:bg-[#C9A96E] transition-colors whitespace-nowrap">
              {t.materias.config}
            </a>
          </div>
          <p className="text-xs font-body text-[#9B8060] mt-2 ml-1 font-semibold">{t.materias.hint}</p>
        </div>
      </div>
    </section>
  );
};

export default MateriasSection;
