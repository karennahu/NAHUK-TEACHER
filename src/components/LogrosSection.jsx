import React, { useState } from 'react';

const logros = [
  { id:'fractovision', img:'/assets/reconocimientos/FRACTOVISION.png', lugar_es:'1er Lugar', lugar_en:'1st Place', badge:'bg-yellow-400 text-yellow-900', anio:'Junio / June 2025', proyecto:'FractoVision', desc_es:'Sistema de IA para la detección de fracturas y procesamiento de información médica. Categoría: Proyectos de Innovación Nivel Superior.', desc_en:'AI system for fracture detection and medical information processing. Category: Innovation Projects — Higher Education Level.', tag:'🤖 AI Médica', tagColor:'bg-blue-100 text-blue-800' },
  { id:'jilumik', img:'/assets/reconocimientos/JILUMIK.jpg', lugar_es:'2do Lugar', lugar_en:'2nd Place', badge:'bg-gray-200 text-gray-900', anio:'Junio / June 2024', proyecto:'JILUMIK', desc_es:'Casco de fotobiomodulación para el tratamiento no invasivo de enfermedades neurológicas y psicológicas.', desc_en:'Photobiomodulation helmet for non-invasive treatment of neurological and psychological diseases.', tag:'🧠 Neurotecnología', tagColor:'bg-purple-100 text-purple-800' },
  { id:'atmos', img:'/assets/reconocimientos/ATMOS NIMBUS RECONOCIMIENTO .png', lugar_es:'3er Lugar', lugar_en:'3rd Place', badge:'bg-amber-600 text-white', anio:'Junio / June 2025', proyecto:'Atmos Nimbus', desc_es:'Árbol artificial diseñado para la captación y aprovechamiento del agua atmosférica. Categoría: Proyectos Verdes.', desc_en:'Artificial tree designed to capture and harness atmospheric water. Category: Green Projects.', tag:'🌿 Sustentabilidad', tagColor:'bg-emerald-100 text-emerald-800' },
  { id:'municipal', img:'/assets/reconocimientos/PREMIO MUNICIPAL.jpg', lugar_es:'Premio Municipal', lugar_en:'Municipal Award', badge:'bg-red-600 text-white', anio:'Agosto / August 2024', proyecto:'Ayuntamiento de Toluca', desc_es:'Reconocimiento a la Trayectoria Académica, Política y de Emprendimiento. Categoría "B" — 3ra Edición Premio Municipal Juventud Toluca 2024.', desc_en:'Recognition for Academic, Political and Entrepreneurship Career. Category "B" — 3rd Edition Municipal Youth Prize Toluca 2024.', tag:'🏛️ Gobierno', tagColor:'bg-red-100 text-red-800' },
  { id:'consejera', img:'/assets/reconocimientos/CONSEJERA.jpg', lugar_es:'Consejera Propietaria', lugar_en:'University Council Member', badge:'bg-teal-600 text-white', anio:'Octubre / October 2025', proyecto:'H. Consejo Universitario UAEMéx', desc_es:'Reconocimiento por su labor como representante estudiantil de la Facultad de Ingeniería en el H. Consejo Universitario de la UAEMéx.', desc_en:'Recognition for serving as student representative of the Faculty of Engineering in the UAEMéx University Council.', tag:'🎓 Representación', tagColor:'bg-teal-100 text-teal-800' },
];

const cartas = [
  { id:'director', titulo_es:'Carta — Director Facultad de Ingeniería', titulo_en:'Letter — Engineering Faculty Director', autor:'Dr. Marcelo Romero Huertas', cargo_es:'Director de la Facultad de Ingeniería, UAEMéx', cargo_en:'Director, Faculty of Engineering, UAEMéx', resumen_es:'Karen ha demostrado ser una estudiante destacada por su compromiso, liderazgo y participación activa en la vida académica, con alto potencial para la investigación aplicada.', resumen_en:'Karen has proven to be an outstanding student for her commitment, leadership and active participation in academic life, with high potential for applied research.', pdf:'/assets/reconocimientos/carta-director.pdf', color:'border-l-blue-500 bg-gradient-to-br from-blue-50 to-white', badge:'bg-blue-100 text-blue-800' },
  { id:'gobernanza', titulo_es:'Carta — Secretaría de Gobernanza UAEMéx', titulo_en:'Letter — UAEMéx Governance Secretary', autor:'Dr. Jorge Alejandro Vásquez Caicedo', cargo_es:'Secretario de Gobernanza Universitaria, UAEMéx', cargo_en:'University Governance Secretary, UAEMéx', resumen_es:'Su trayectoria académica refleja un compromiso excepcional con el liderazgo estudiantil y la innovación tecnológica en el ámbito universitario.', resumen_en:'Her academic trajectory reflects an exceptional commitment to student leadership and technological innovation in the university sphere.', pdf:'/assets/reconocimientos/carta-secretario-gobernanza.pdf', color:'border-l-indigo-500 bg-gradient-to-br from-indigo-50 to-white', badge:'bg-indigo-100 text-indigo-800' },
  { id:'municipal', titulo_es:'Carta — Presidente Municipal de Toluca', titulo_en:'Letter — Mayor of Toluca', autor:'Lcdo. Ricardo Moreno Bastida', cargo_es:'Presidente Municipal Constitucional de Toluca', cargo_en:'Constitutional Mayor of Toluca', resumen_es:'Su trayectoria se ha caracterizado por un compromiso excepcional con el emprendimiento y la innovación tecnológica, elevando el estándar de innovación en la región.', resumen_en:'Her career has been characterized by an exceptional commitment to entrepreneurship and technological innovation, raising the standard of innovation in our region.', pdf:'/assets/reconocimientos/carta-presidente-municipal.pdf', color:'border-l-red-500 bg-gradient-to-br from-red-50 to-white', badge:'bg-red-100 text-red-800' },
  { id:'departamento', titulo_es:'Carta — Jefa de Depto. de Vinculación', titulo_en:'Letter — Head of Liaison Dept.', autor:'Jefa de Departamento de Vinculación y Fomento Empresarial', cargo_es:'UAEMéx — Facultad de Ingeniería', cargo_en:'UAEMéx — Faculty of Engineering', resumen_es:'Reconocimiento a su participación activa y sobresaliente en proyectos de vinculación e innovación empresarial que impactan positivamente a la región.', resumen_en:'Recognition for her outstanding and active participation in business liaison and innovation projects that positively impact the region.', pdf:'/assets/reconocimientos/carta-jefa-departamento.pdf', color:'border-l-emerald-500 bg-gradient-to-br from-emerald-50 to-white', badge:'bg-emerald-100 text-emerald-800' },
];

const Lightbox = ({ item, onClose, lang }) => {
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative z-10 max-w-3xl w-full max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl animate-slideIn flex flex-col" onClick={e=>e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#EDE8DF] shrink-0">
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#1A1209]">{item.proyecto}</h3>
            <p className="font-body text-xs text-[#9B8060] font-semibold">{item.anio}</p>
          </div>
          <button onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#6B6B6B] hover:bg-[#C9A96E] hover:text-white transition-all font-extrabold text-lg shadow-sm">
            ✕
          </button>
        </div>
        <div className="overflow-auto flex-1">
          <img src={item.img} alt={item.proyecto} className="w-full h-auto object-contain" />
        </div>
        <div className="px-4 sm:px-6 py-3 border-t border-[#EDE8DF] shrink-0 bg-[#FAFAF8]">
          <p className="font-body text-xs text-[#7A5A30] font-semibold text-center">{lang==='en'?item.desc_en:item.desc_es}</p>
        </div>
      </div>
    </div>
  );
};

const LogrosSection = ({ t, lang }) => {
  const l = t.logros;
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="logros" className="py-16 sm:py-20 bg-white">
      {lightbox && <Lightbox item={lightbox} onClose={()=>setLightbox(null)} lang={lang} />}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs font-body font-extrabold text-[#C9A96E] tracking-widest uppercase mb-3">{l.eyebrow}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1209] mb-4">{l.h2}</h2>
          <p className="font-body text-[#5A4830] text-base max-w-xl mx-auto font-semibold">{l.sub}</p>
        </div>

        {/* Awards grid — 1 col en móvil, 2 en sm, 3 en lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {logros.map(item => (
            <div key={item.id} onClick={()=>setLightbox(item)}
              className="bg-white rounded-3xl shadow-sm border border-[#E0D8CE] overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5EFE6]">
                <img src={item.img} alt={item.proyecto} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-extrabold ${item.badge} shadow-sm`}>
                  🏆 {lang==='en'?item.lugar_en:item.lugar_es}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#1A1209] font-extrabold text-xs px-4 py-2 rounded-full shadow-md">
                    {l.ver}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                  <h3 className="font-display font-bold text-sm sm:text-base text-[#1A1209]">{item.proyecto}</h3>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 ${item.tagColor}`}>{item.tag}</span>
                </div>
                <p className="font-body text-xs text-[#C9790E] font-extrabold mb-1">{item.anio}</p>
                <p className="font-body text-xs text-[#6B5A44] leading-relaxed font-medium">{lang==='en'?item.desc_en:item.desc_es}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cartas de recomendación */}
        <div className="bg-gradient-to-br from-[#F5EFE6] via-[#FDFBF7] to-[#EDE8DC] rounded-3xl p-5 sm:p-8 lg:p-12 border border-[#D5C9B0]">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1209] mb-2">{l.cartas_h}</h3>
            <p className="font-body text-sm text-[#7A5A30] font-semibold">{l.cartas_sub}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
            {cartas.map(c => (
              <div key={c.id} className={`rounded-2xl border-l-4 ${c.color} shadow-sm p-4 sm:p-6 flex flex-col gap-3 border border-[#E0D8CE] overflow-hidden`}>
                <div>
                  {/* Badge adaptado para móvil — puede ser largo, wrap permitido */}
                  <span className={`inline-block text-[10px] font-extrabold px-2.5 py-1 rounded-full ${c.badge} leading-tight`}>{lang==='en'?c.titulo_en:c.titulo_es}</span>
                  <p className="font-display font-bold text-sm sm:text-base text-[#1A1209] mt-2">{c.autor}</p>
                  <p className="font-body text-xs text-[#7A5A30] font-semibold">{lang==='en'?c.cargo_en:c.cargo_es}</p>
                </div>
                <blockquote className="font-body text-xs sm:text-sm text-[#2A2010] leading-relaxed italic border-l-2 border-[#C9A96E]/40 pl-3 font-semibold">
                  {lang==='en'?c.resumen_en:c.resumen_es}
                </blockquote>
                <a href={c.pdf} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1A1209] text-white font-body font-extrabold text-xs rounded-xl hover:bg-[#C9A96E] transition-all w-fit shadow-sm">
                  {l.read_pdf}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogrosSection;
