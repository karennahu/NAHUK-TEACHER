import React, { useState } from 'react';
import SpriteAnimator from './SpriteAnimator';

const pintandoFrames = [
  '/assets/personaje/pintando/frame1.png','/assets/personaje/pintando/frame2.png',
  '/assets/personaje/pintando/frame3.png','/assets/personaje/pintando/frame4.png',
  '/assets/personaje/pintando/frame5.png','/assets/personaje/pintando/frame6.png',
  '/assets/personaje/pintando/frame7.png',
];

const getGrades = (lang) => [
  { id:'1prim', label: lang==='es'?'1° Primaria':'1st Grade', age:'6-7', emoji:'🌱' },
  { id:'2prim', label: lang==='es'?'2° Primaria':'2nd Grade', age:'7-8', emoji:'🌻' },
  { id:'3prim', label: lang==='es'?'3° Primaria':'3rd Grade', age:'8-9', emoji:'🌟' },
  { id:'4prim', label: lang==='es'?'4° Primaria':'4th Grade', age:'9-10', emoji:'🚀' },
  { id:'5prim', label: lang==='es'?'5° Primaria':'5th Grade', age:'10-11', emoji:'🔭' },
  { id:'6prim', label: lang==='es'?'6° Primaria':'6th Grade', age:'11-12', emoji:'💡' },
  { id:'1sec', label: lang==='es'?'1° Secundaria':'7th Grade', age:'12-13', emoji:'🧪' },
  { id:'2sec', label: lang==='es'?'2° Secundaria':'8th Grade', age:'13-14', emoji:'📊' },
  { id:'3sec', label: lang==='es'?'3° Secundaria':'9th Grade', age:'14-15', emoji:'🎯' },
  { id:'prepa', label: lang==='es'?'Preparatoria':'High School', age:'15-18', emoji:'🏛️' },
  { id:'uni', label: lang==='es'?'Universidad':'College/Uni', age:'18-25', emoji:'🎓' },
  { id:'adulto', label: lang==='es'?'Adulto':'Adult', age:'25+', emoji:'🌍' },
];

const defaultInterests = [
  { id:'minecraft', emoji:'🎮', label_es:'Minecraft / Roblox', label_en:'Minecraft / Roblox' },
  { id:'arte', emoji:'🎨', label_es:'Dibujo / Arte', label_en:'Drawing / Art' },
  { id:'espacio', emoji:'🚀', label_es:'Espacio / Dinosaurios', label_en:'Space / Dinosaurs' },
  { id:'deportes', emoji:'⚽', label_es:'Deportes', label_en:'Sports' },
];

const getMaterias = (lang) => [
  { id:'matematicas', label: lang==='es'?'Matemáticas':'Mathematics', emoji:'📐' },
  { id:'fisica', label: lang==='es'?'Física y Química':'Physics & Chemistry', emoji:'⚗️' },
  { id:'espanol', label: lang==='es'?'Español / Lenguaje':'Spanish / Language', emoji:'📖' },
  { id:'historia', label: lang==='es'?'Historia y Ciencia':'History & Science', emoji:'🔬' },
  { id:'programacion', label: lang==='es'?'Programación':'Programming', emoji:'💻' },
  { id:'otro', label: lang==='es'?'Otra materia':'Other subject', emoji:'✏️' },
];

const analogias = {
  matematicas_minecraft: { titulo:'¡Matemáticas con Minecraft!', titulo_en:'Math with Minecraft!', texto:'Aprenderemos fracciones dividiendo bloques de construcción y calculando materiales para tus bases. Cada fracción es un bioma diferente. ¡Adiós a la memorización aburrida!', texto_en:'We learn fractions by dividing building blocks and calculating materials for your bases. Every fraction is a different biome. Goodbye boring memorization!', color:'from-blue-50 to-sky-50 border-blue-300', title:'text-blue-700' },
  matematicas_arte: { titulo:'¡Matemáticas a través del Arte!', titulo_en:'Math through Art!', texto:'Usaremos proporción áurea, simetría y geometría para crear dibujos hermosos. Los números cobran vida cuando los pintamos.', texto_en:'We use the golden ratio, symmetry and geometry to create beautiful drawings. Numbers come alive when we paint them.', color:'from-purple-50 to-pink-50 border-purple-300', title:'text-purple-700' },
  matematicas_espacio: { titulo:'¡Matemáticas Espaciales!', titulo_en:'Space Math!', texto:'Calcularemos distancias entre planetas y trayectorias de cohetes. Las fracciones se convierten en combustible de nave.', texto_en:'We calculate distances between planets and rocket trajectories. Fractions become rocket fuel.', color:'from-indigo-50 to-blue-50 border-indigo-300', title:'text-indigo-700' },
  matematicas_deportes: { titulo:'¡Matemáticas en la Cancha!', titulo_en:'Math on the Field!', texto:'Calcularemos estadísticas de jugadores, ángulos de tiro y probabilidades de gol. Cada ejercicio es una jugada táctica.', texto_en:'We calculate player stats, shot angles and goal probabilities. Every problem is a tactical play.', color:'from-orange-50 to-amber-50 border-orange-300', title:'text-orange-700' },
  fisica_minecraft: { titulo:'¡Física en el mundo de bloques!', titulo_en:'Physics in the Block World!', texto:'Las leyes de Newton cobran sentido cuando construimos catapultas en Minecraft. Gravedad e impulso se aprenden jugando.', texto_en:"Newton's laws make sense when we build catapults in Minecraft. Gravity and impulse learned through play.", color:'from-emerald-50 to-teal-50 border-emerald-300', title:'text-emerald-700' },
  fisica_arte: { titulo:'¡Física y Arte Visual!', titulo_en:'Physics & Visual Art!', texto:'Estudiaremos óptica, luz y color a través de la pintura. Los impresionistas usaban física sin saberlo.', texto_en:'We study optics, light and color through painting. The Impressionists used physics without knowing it.', color:'from-purple-50 to-fuchsia-50 border-purple-300', title:'text-purple-700' },
  fisica_espacio: { titulo:'¡Física Cósmica!', titulo_en:'Cosmic Physics!', texto:'Las leyes de gravedad y movimiento planetario son nuestro laboratorio. Física con viajes interestelares imaginarios.', texto_en:'Gravity and planetary motion are our lab. Physics through imaginary interstellar travel.', color:'from-slate-50 to-blue-50 border-slate-300', title:'text-slate-700' },
  fisica_deportes: { titulo:'¡Física en el Estadio!', titulo_en:'Physics at the Stadium!', texto:'Trayectoria de un balón, fricción y potencia de un golpe. La física siempre estuvo en el deporte.', texto_en:'Ball trajectory, friction and force of a kick. Physics was always in sports.', color:'from-orange-50 to-red-50 border-orange-300', title:'text-orange-700' },
  espanol_minecraft: { titulo:'¡Español Gamer!', titulo_en:'Gamer Language Arts!', texto:'Redactaremos guías de Minecraft con narración, descripción y argumentación. Escribir bien es el poder definitivo.', texto_en:'We write Minecraft guides using narration, description and argumentation. Writing well is the ultimate power.', color:'from-purple-50 to-violet-50 border-purple-300', title:'text-purple-700' },
  espanol_arte: { titulo:'¡Español Creativo!', titulo_en:'Creative Language Arts!', texto:'Crearemos poemas visuales e historias ilustradas. La escritura es pintura con palabras.', texto_en:'We create visual poems and illustrated stories. Writing is painting with words.', color:'from-pink-50 to-rose-50 border-pink-300', title:'text-pink-700' },
  espanol_espacio: { titulo:'¡Español Interestelar!', titulo_en:'Interstellar Language Arts!', texto:'Escribiremos diarios de explorador espacial y cartas a civilizaciones lejanas. La gramática nunca fue tan emocionante.', texto_en:'We write space explorer journals and letters to distant civilizations. Grammar was never this exciting.', color:'from-indigo-50 to-blue-50 border-indigo-300', title:'text-indigo-700' },
  espanol_deportes: { titulo:'¡Español Deportivo!', titulo_en:'Sports Language Arts!', texto:'Seremos comentaristas deportivos. Narrar un partido enseña verbos, adjetivos y párrafos con más impacto que cualquier ejercicio.', texto_en:'We become sports commentators. Narrating a match teaches verbs, adjectives and paragraphs more powerfully than any exercise.', color:'from-orange-50 to-amber-50 border-orange-300', title:'text-orange-700' },
  historia_minecraft: { titulo:'¡Historia en modo Survival!', titulo_en:'History in Survival Mode!', texto:'Reconstruiremos civilizaciones antiguas en Minecraft: la pirámide de Teotihuacán o el Coliseo Romano cobran vida.', texto_en:'We rebuild ancient civilizations in Minecraft: the Teotihuacan pyramid or Roman Colosseum come to life.', color:'from-amber-50 to-yellow-50 border-amber-300', title:'text-amber-700' },
  historia_arte: { titulo:'¡Historia a través del Arte!', titulo_en:'History through Art!', texto:"Cada movimiento artístico es una ventana a su época. Pintaremos al estilo de Rivera y entenderemos la historia diferente.", texto_en:"Every art movement is a window into its era. We paint in Rivera's style and understand history differently.", color:'from-red-50 to-orange-50 border-red-300', title:'text-red-700' },
  historia_espacio: { titulo:'¡Historia del Cosmos!', titulo_en:'History of the Cosmos!', texto:'La carrera espacial y los primeros astronautas son historia pura. Aprenderemos cronología con eventos que parecen ciencia ficción.', texto_en:'The space race and first astronauts are pure history. We learn chronology through events that feel like science fiction.', color:'from-sky-50 to-blue-50 border-sky-300', title:'text-sky-700' },
  historia_deportes: { titulo:'¡Historia Deportiva!', titulo_en:'Sports History!', texto:'Las olimpiadas y el origen del fútbol son el hilo conductor perfecto para aprender fechas y contextos históricos.', texto_en:'The Olympics and the origin of football are the perfect thread for learning dates and historical contexts.', color:'from-green-50 to-emerald-50 border-green-300', title:'text-green-700' },
  programacion_minecraft: { titulo:'¡Programa tu propio Minecraft!', titulo_en:'Code your own Minecraft!', texto:'Aprenderemos lógica y programación creando mods y mini-juegos en Minecraft. El código más motivador existe.', texto_en:'We learn logic and programming by creating mods and mini-games in Minecraft. The most motivating code ever.', color:'from-blue-50 to-cyan-50 border-blue-300', title:'text-blue-700' },
  programacion_arte: { titulo:'¡Arte Generativo con Código!', titulo_en:'Generative Art with Code!', texto:'Programaremos arte: fractales, patrones y animaciones. La programación creativa es el futuro del diseño.', texto_en:'We code art: fractals, patterns and animations. Creative programming is the future of design.', color:'from-purple-50 to-pink-50 border-purple-300', title:'text-purple-700' },
  programacion_espacio: { titulo:'¡Programa tu Universo!', titulo_en:'Code your Universe!', texto:'Simularemos sistemas solares y trayectorias de satélites. La astronomía y la programación son el dúo perfecto.', texto_en:'We simulate solar systems and satellite trajectories. Astronomy and programming are the perfect duo.', color:'from-indigo-50 to-violet-50 border-indigo-300', title:'text-indigo-700' },
  programacion_deportes: { titulo:'¡Código en la Cancha!', titulo_en:'Code on the Field!', texto:'Programaremos marcadores y análisis de partidos. Los datos del deporte son el mejor laboratorio de programación.', texto_en:'We code scoreboards and match analysis. Sports data is the best programming lab.', color:'from-green-50 to-teal-50 border-green-300', title:'text-green-700' },
};

const getAnalogia = (materia, interest, lang) => {
  const key = `${materia}_${interest}`;
  const a = analogias[key];
  if (a) return { titulo: lang==='en' ? a.titulo_en : a.titulo, texto: lang==='en' ? a.texto_en : a.texto, color: a.color, title: a.title };
  const matLabel = { matematicas: lang==='en'?'Mathematics':'Matemáticas', fisica: lang==='en'?'Physics':'Física', espanol: lang==='en'?'Spanish':'Español', historia: lang==='en'?'History':'Historia', programacion: lang==='en'?'Programming':'Programación', otro: lang==='en'?'the subject':'la materia' };
  return {
    titulo: lang==='en' ? `${matLabel[materia]} + their passion!` : `¡${matLabel[materia]} + su pasión!`,
    texto: lang==='en' ? `We will take everything they love and turn it into the best learning experience for ${matLabel[materia].toLowerCase()}. Book your free session!` : `Tomaremos todo lo que le apasiona y lo convertiremos en el mejor aprendizaje de ${matLabel[materia].toLowerCase()}. ¡Agenda tu sesión gratuita!`,
    color: 'from-amber-50 to-yellow-50 border-amber-300', title: 'text-amber-800',
  };
};

const ConfiguradorSection = ({ t, lang }) => {
  const c = t.config;
  const [step, setStep] = useState(1);
  const [grade, setGrade] = useState(null);
  const [interest, setInterest] = useState(null);
  const [materia, setMateria] = useState(null);
  const [customInterest, setCustomInterest] = useState('');
  const [showCustom, setShowCustom] = useState(false);
  const grades = getGrades(lang || 'es');
  const materias = getMaterias(lang || 'es');
  const interests = defaultInterests.map(i => ({ ...i, label: lang==='en' ? i.label_en : i.label_es }));

  const finalInterest = interest === 'custom' ? customInterest.toLowerCase().trim() : interest;
  const analogia = materia && finalInterest ? getAnalogia(materia, finalInterest, lang) : null;
  const reset = () => { setStep(1); setGrade(null); setInterest(null); setMateria(null); setCustomInterest(''); setShowCustom(false); };

  const BackBtn = ({ onClick }) => (
    <button onClick={onClick}
      className="inline-flex items-center gap-2 px-5 py-3 bg-[#C9A96E] text-white font-body font-extrabold text-sm rounded-2xl hover:bg-[#A07840] transition-all duration-200 shadow-md active:scale-95">
      {c.btn_back}
    </button>
  );

  return (
    <section id="configurador" className="py-16 sm:py-20 relative overflow-hidden bg-[#FDFBF7]">
      
      {/* Aurora */}
      <div className="aurora-container">
        <div className="aurora-orbe aurora-orbe-rosa animate-spin-slow" style={{ top: '-10%', left: '10%' }}></div>
        <div className="aurora-orbe aurora-orbe-lila" style={{ bottom: '-15%', left: '-5%' }}></div>
        <div className="aurora-orbe aurora-orbe-azul" style={{ bottom: '10%', right: '-15%' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-xs font-body font-extrabold text-[#C9A96E] tracking-widest uppercase mb-3">{c.eyebrow}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1209] mb-4">{c.h2}</h2>
          <p className="font-body text-[#5A4830] text-base max-w-lg mx-auto font-semibold">{c.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Step bar */}
            <div className="flex items-center gap-2 mb-7 sm:mb-8">
              {[1,2,3].map(n => (
                <React.Fragment key={n}>
                  <div className={`flex items-center gap-2 ${n<3?'flex-1':''}`}>
                    <div className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm font-extrabold border-2 transition-all duration-300 shrink-0
                      ${step>n?'bg-[#C9A96E] border-[#C9A96E] text-white':step===n?'bg-[#1A1209] border-[#1A1209] text-white':'bg-white border-[#C5B99A] text-[#9B8060]'}`}>
                      {step>n?'✓':n}
                    </div>
                    {n<3 && <div className={`flex-1 h-1 rounded-full transition-all duration-500 ${step>n?'bg-[#C9A96E]':'bg-[#D5C9B0]'}`} />}
                  </div>
                </React.Fragment>
              ))}
              <span className="ml-2 text-xs font-body font-extrabold text-[#7A5A30] whitespace-nowrap">{[c.step1,c.step2,c.step3][step-1]}</span>
            </div>

            {/* STEP 1 — grado escolar */}
            {step===1 && (
              <div className="animate-fadeIn">
                <h3 className="font-display font-bold text-xl text-[#1A1209] mb-1">{c.s1h}</h3>
                <p className="font-body text-sm text-[#7A5A30] font-semibold mb-4 sm:mb-5">{c.s1sub}</p>
                {/* 3 columnas en móvil para que quepan bien los 12 grados */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                  {grades.map(g => (
                    <button key={g.id} onClick={()=>{setGrade(g.id);setStep(2);}}
                      className={`flex flex-col items-center p-2.5 sm:p-4 rounded-2xl border-2 bg-white transition-all duration-200 hover:border-[#C9A96E] hover:shadow-md active:scale-95
                        ${grade===g.id?'border-[#C9A96E] shadow-lg ring-2 ring-[#C9A96E]/30':'border-[#D5C9B0]'}`}>
                      <span className="text-xl sm:text-2xl mb-1">{g.emoji}</span>
                      <span className="font-body font-extrabold text-[11px] sm:text-xs text-[#1A1209] text-center leading-tight">{g.label}</span>
                      <span className="font-body text-[10px] sm:text-xs text-[#5A4830] font-bold mt-0.5">{g.age} {lang==='es'?'años':'yrs'}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 — intereses */}
            {step===2 && (
              <div className="animate-fadeIn">
                <h3 className="font-display font-bold text-xl text-[#1A1209] mb-1">{c.s2h}</h3>
                <p className="font-body text-sm text-[#7A5A30] font-semibold mb-4 sm:mb-5">{c.s2sub}</p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                  {interests.map(int => (
                    <button key={int.id} onClick={()=>{setInterest(int.id);setShowCustom(false);setStep(3);}}
                      className={`flex flex-col items-center justify-center p-4 sm:p-5 rounded-3xl border-2 bg-white transition-all duration-200 hover:border-[#C9A96E] hover:shadow-lg active:scale-95
                        ${interest===int.id?'border-[#C9A96E] shadow-lg':'border-[#D5C9B0]'}`}>
                      <span className="text-4xl sm:text-5xl mb-2">{int.emoji}</span>
                      <span className="font-body font-extrabold text-sm text-[#1A1209] text-center">{int.label}</span>
                    </button>
                  ))}
                </div>
                {/* Custom interest */}
                <div className="bg-white rounded-2xl border-2 border-dashed border-[#C9A96E]/60 p-3 sm:p-4 mb-4 sm:mb-5">
                  <button onClick={()=>setShowCustom(!showCustom)} className="flex items-center gap-3 w-full text-left">
                    <span className="text-2xl">✏️</span>
                    <div className="min-w-0">
                      <p className="font-body font-extrabold text-sm text-[#1A1209]">{c.s2custom_btn}</p>
                      <p className="font-body text-xs text-[#7A5A30] font-semibold">{c.s2custom_hint}</p>
                    </div>
                    <span className="ml-auto text-[#C9A96E] font-extrabold text-xl shrink-0">{showCustom?'−':'+'}</span>
                  </button>
                  {showCustom && (
                    <div className="mt-3 flex gap-2">
                      <input type="text" value={customInterest} onChange={e=>setCustomInterest(e.target.value)}
                        placeholder={c.s2custom_placeholder}
                        className="flex-1 min-w-0 px-3 py-2.5 rounded-xl border-2 border-[#D5C9B0] bg-[#FDFBF7] font-body text-sm text-[#1A1209] font-semibold outline-none focus:border-[#C9A96E] transition-colors" />
                      <button onClick={()=>{if(customInterest.trim()){setInterest('custom');setStep(3);}}}
                        disabled={!customInterest.trim()}
                        className="px-3 py-2.5 bg-[#C9A96E] text-white font-body font-extrabold text-sm rounded-xl hover:bg-[#A07840] disabled:opacity-40 transition-colors shrink-0">
                        {c.s2use}
                      </button>
                    </div>
                  )}
                </div>
                <BackBtn onClick={()=>setStep(1)} />
              </div>
            )}

            {/* STEP 3 — materia */}
            {step===3 && (
              <div className="animate-fadeIn">
                <h3 className="font-display font-bold text-xl text-[#1A1209] mb-1">{c.s3h}</h3>
                <p className="font-body text-sm text-[#7A5A30] font-semibold mb-4 sm:mb-5">
                  {c.s3sub}{' '}<strong className="text-[#C9790E]">{interest==='custom'?customInterest:interests.find(i=>i.id===interest)?.label}</strong>.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">
                  {materias.map(mat => (
                    <button key={mat.id} onClick={()=>setMateria(mat.id)}
                      className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl border-2 bg-white transition-all duration-200 hover:shadow-md active:scale-95
                        ${materia===mat.id?'border-[#C9A96E] shadow-lg ring-2 ring-[#C9A96E]/20':'border-[#D5C9B0] hover:border-[#C9A96E]'}`}>
                      <span className="text-xl sm:text-2xl shrink-0">{mat.emoji}</span>
                      <span className="font-body font-extrabold text-xs sm:text-sm text-[#1A1209] text-left leading-tight">{mat.label}</span>
                    </button>
                  ))}
                </div>
                {/* Analogia — texto contenido, sin desborde */}
                {analogia && (
                  <div className={`rounded-3xl border-2 bg-gradient-to-br p-4 sm:p-6 mb-5 sm:mb-6 ${analogia.color} animate-slideIn overflow-hidden`}>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl sm:text-3xl shrink-0">✨</span>
                      <div className="min-w-0">
                        <h4 className={`font-display font-bold text-base sm:text-lg mb-2 ${analogia.title}`}>{analogia.titulo}</h4>
                        <p className="font-body text-[#2A2010] text-sm leading-relaxed font-semibold">{analogia.texto}</p>
                        <a href="#contacto"
                          className="inline-flex items-center gap-2 mt-3 sm:mt-4 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#1A1209] text-white text-sm font-body font-extrabold rounded-xl hover:bg-[#C9A96E] transition-colors">
                          {c.cta_temario}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex gap-3 flex-wrap">
                  <BackBtn onClick={()=>setStep(2)} />
                  <button onClick={reset}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-[#C5B99A] text-[#7A5A30] font-body font-extrabold text-sm rounded-2xl hover:border-[#C9A96E] hover:text-[#A07840] transition-all duration-200 shadow-sm">
                    {c.btn_reset}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sprite — oculto en móvil, visible en lg */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-4">
            <SpriteAnimator 
              frames={pintandoFrames} 
              fps={5} 
              className="w-full max-w-[210px] animate-float" 
              alt="Personaje pintando" 
            />
            <div className="bg-white rounded-2xl px-5 py-3.5 shadow-sm border border-[#D5C9B0] text-center max-w-[280px]">
              <p className="font-body font-extrabold text-sm text-[#C9A96E]">✨</p>
              <p className="font-body text-sm text-[#1A1209] font-bold mt-1">{c.sprite_caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfiguradorSection;
