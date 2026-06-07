import React from 'react';
import SpriteAnimator from './SpriteAnimator';

const heroFrames = [
  '/assets/personaje/saludar/frame1.png',
  '/assets/personaje/saludar/frame2.png',
];

const HeroSection = ({ t }) => {
  const h = t.hero;
  return (
    <section id="hero" className="min-h-screen flex items-center pt-[72px] relative overflow-hidden bg-[#FDFBF7]">
      
      {/* Aurora */}
      <div className="aurora-container">
        <div className="aurora-orbe aurora-orbe-azul animate-spin-slow"></div>
        <div className="aurora-orbe aurora-orbe-lila"></div>
        <div className="aurora-orbe aurora-orbe-rosa"></div>
      </div>

      {/* Decorative rings — ocultos en móvil para no sobrecargar */}
      <div className="hidden lg:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-[#C9A96E]/08 pointer-events-none" />
      <div className="hidden lg:block absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full border border-[#C9A96E]/06 pointer-events-none" />
      
      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#7BB3F5]/50 via-[#C9A96E] to-[#F0A58A]/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* TEXT */}
          <div className="flex flex-col gap-4 sm:gap-6 order-1">
            {/* Eyebrow */}
            <div className="animate-fadeInUp">
              <span className="inline-flex items-center gap-2 bg-white border border-[#DDD5C8] text-[#8A6A3A] text-xs font-body font-bold px-4 py-2 rounded-full tracking-widest uppercase shadow-sm">
                🎓 {h.eyebrow}
              </span>
            </div>

            {/* Headline — más pequeño en móvil */}
            <div className="animate-fadeInUp delay-1">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-[3rem] leading-[1.15] text-[#1A1209]">
                {h.h1_a}{' '}
                <span className="relative inline-block">
                  <span className="text-[#C9790E]">{h.h1_stress}</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none"><path d="M0 3 Q25 0 50 3 Q75 6 100 3" stroke="#C9790E" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
                </span>{' '}
                {h.h1_b}{' '}
                <span className="relative inline-block">
                  <span className="text-[#3A7FD5]">{h.h1_bore}</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none"><path d="M0 3 Q25 0 50 3 Q75 6 100 3" stroke="#3A7FD5" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
                </span>{' '}
                {h.h1_c}
              </h1>
            </div>

            {/* Sub */}
            <p className="font-body text-[#4A3820] text-base sm:text-lg leading-relaxed animate-fadeInUp delay-2">
              {h.sub} <strong className="text-[#1A1209] font-extrabold">{h.sub_bold}</strong> {h.sub2}{' '}
              <span className="text-[#D4541A] font-bold">{h.sub_draw}</span>,{' '}
              <span className="text-[#1E9E8A] font-bold">{h.sub_game}</span> {h.sub_and}{' '}
              <span className="text-[#7040B0] font-bold">{h.sub_ana}</span> {h.sub3}
            </p>

            {/* Price badge */}
            <div className="animate-fadeInUp delay-3">
              <div className="inline-flex items-center gap-3 bg-amber-50 border-2 border-amber-400 rounded-2xl px-4 py-3 shadow-sm animate-pulse-gold">
                <span className="text-xl sm:text-2xl">⚡</span>
                <div>
                  <p className="font-body text-[10px] text-amber-700 font-extrabold uppercase tracking-widest">{h.price_label}</p>
                  <p className="font-display font-extrabold text-xl sm:text-2xl text-amber-900">
                    {h.price} <span className="text-sm font-body font-semibold text-amber-700">{h.price_unit}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs — siempre en columna en móvil, fila en sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fadeInUp delay-4">
              <a href="#configurador"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#1A1209] text-white font-body font-extrabold text-base rounded-2xl hover:bg-[#C9A96E] transition-all duration-300 shadow-lg">
                {h.cta1}
              </a>
              <a href="https://wa.me/527206643520" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white font-body font-extrabold text-base rounded-2xl hover:bg-[#1DAA56] transition-all duration-300 shadow-md">
                {h.cta2}
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 animate-fadeInUp delay-5">
              {[
                { icon:'🏆', text: h.trust1, cls:'bg-amber-50 border-amber-300 text-amber-900' },
                { icon:'💻', text: h.trust2, cls:'bg-blue-50 border-blue-300 text-blue-900' },
                { icon:'📍', text: h.trust3, cls:'bg-emerald-50 border-emerald-300 text-emerald-900' },
              ].map(p => (
                <span key={p.text} className={`inline-flex items-center gap-1.5 text-xs font-body font-bold px-3 py-1.5 rounded-full border ${p.cls}`}>
                  {p.icon} {p.text}
                </span>
              ))}
            </div>
          </div>

          {/* SPRITE — segundo en móvil, más compacto */}
          <div className="flex justify-center order-2 animate-fadeInUp delay-3">
            {/* En móvil: layout horizontal compacto (foto + stats al lado). En desktop: card completa */}
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C9A96E]/20 to-[#7BB3F5]/10 blur-3xl scale-90 translate-y-10 pointer-events-none" />

              <div className="relative z-10">
                {/* Card background */}
                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-white via-[#F5EFE6] to-[#EDE8DF] rounded-[2.5rem] border border-[#DDD5C8] shadow-2xl" />

                {/* Profile photo top-right */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <img src="/assets/karen-perfil-circular.png" alt="Karen Navarro" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Sprite */}
                <div className="relative z-10 p-4 sm:p-6">
                  <SpriteAnimator frames={heroFrames} fps={1.5} className="animate-float" alt="Tutora animada" />
                </div>

                {/* Stat badges — posicionados con overflow visible controlado */}
                <div className="absolute -left-4 top-8 z-20 bg-white rounded-2xl shadow-lg px-2.5 py-2 border border-[#EDE8DF]">
                  <p className="font-body text-[9px] text-[#9B8060] uppercase tracking-widest font-bold">{h.stat_logros}</p>
                  <p className="font-display font-extrabold text-lg text-gradient-gold">5+</p>
                </div>
                <div className="absolute -right-4 bottom-14 z-20 bg-white rounded-2xl shadow-lg px-2.5 py-2 border border-[#EDE8DF]">
                  <p className="font-body text-[9px] text-[#9B8060] uppercase tracking-widest font-bold">{h.stat_alumnos}</p>
                  <p className="font-display font-extrabold text-lg text-[#3A7FD5]">50+</p>
                </div>
              </div>

              {/* Bottom badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white rounded-full shadow-md px-3 py-1.5 border border-[#EDE8DF] animate-pulse-gold whitespace-nowrap flex items-center gap-1.5">
                <span className="text-amber-400 text-xs">⭐⭐⭐⭐⭐</span>
                <span className="font-body font-bold text-xs text-[#3A2E22]">{h.badge}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16 sm:mt-20 animate-fadeInUp delay-6">
          <a href="#materias" className="flex flex-col items-center gap-1 text-[#9B8060] hover:text-[#C9A96E] transition-colors group">
            <span className="font-body text-xs tracking-widest uppercase font-semibold">{h.explore}</span>
            <span className="text-xl group-hover:translate-y-1.5 transition-transform duration-300">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
