import React, { useState } from 'react';
import SpriteAnimator from './SpriteAnimator';

const graciasFrames = [
  '/assets/personaje/gracias/frame1.png',
  '/assets/personaje/gracias/frame2.png',
  '/assets/personaje/gracias/frame3.png',
];

const getMaterias = (lang) => lang==='en'
  ? ['Mathematics','Physics & Chemistry','Spanish / Language','History & Science','Programming / Computing','Other subject']
  : ['Matemáticas','Física y Química','Español','Historia y Ciencias','Programación / Cómputo','Otra materia'];

const ContactoSection = ({ t, lang }) => {
  const c = t.contacto;
  const [form, setForm] = useState({ padre:'', whatsapp:'', alumno:'', edad:'', materia:'', mensaje:'' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xqeoprak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Hubo un error al enviar. Intenta de nuevo o escríbeme por WhatsApp.');
      }
    } catch {
      alert('Hubo un error al enviar. Intenta de nuevo o escríbeme por WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls = 'w-full px-4 py-3 rounded-2xl border-2 border-[#D5C9B0] bg-white font-body text-[#1A1209] text-sm font-semibold outline-none focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 transition-all placeholder-[#B5A88C]';
  const labelCls = 'block text-xs font-body font-extrabold text-[#5A4830] mb-1.5 uppercase tracking-wider';

  return (
    <section id="contacto" className="py-16 sm:py-20 bg-[#F5EFE6] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#C9A96E]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 sm:w-56 h-40 sm:h-56 bg-[#7BB3F5]/06 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-xs font-body font-extrabold text-[#C9A96E] tracking-widest uppercase mb-3">{c.eyebrow}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1209] mb-4">{c.h2}</h2>
          <p className="font-body text-[#5A4830] text-base max-w-lg mx-auto font-semibold">{c.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-lg border border-[#D5C9B0] p-5 sm:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={labelCls}>{c.f_padre}</label>
                  <input name="padre" value={form.padre} onChange={handleChange} required placeholder={c.f_padre_ph} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{c.f_wa}</label>
                  <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required placeholder={c.f_wa_ph} className={inputCls} />
                </div>
                {/* Nombre y edad: columna en móvil, fila en sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className={labelCls}>{c.f_alumno}</label>
                    <input name="alumno" value={form.alumno} onChange={handleChange} required placeholder={c.f_alumno_ph} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>{c.f_edad}</label>
                    <input name="edad" value={form.edad} onChange={handleChange} required placeholder={c.f_edad_ph} className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>{c.f_materia}</label>
                  <select name="materia" value={form.materia} onChange={handleChange} required className={inputCls}>
                    <option value="">...</option>
                    {getMaterias(lang).map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{c.f_msg}</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} rows={3} placeholder={c.f_msg_ph} className={`${inputCls} resize-none`} />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-4 px-6 bg-[#1A1209] text-white font-body font-extrabold text-base rounded-2xl hover:bg-[#C9A96E] transition-all duration-300 disabled:opacity-60 shadow-md">
                  {loading ? c.sending : c.btn_send}
                </button>
                <p className="text-center text-xs font-body text-[#7A5A30] font-semibold">
                  {c.wa_text}{' '}
                  <a href="https://wa.me/527206643520" target="_blank" rel="noopener noreferrer"
                    className="text-[#25D366] font-extrabold hover:underline">WhatsApp directo</a>
                </p>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="text-6xl mb-5">🎉</div>
                <h3 className="font-display font-bold text-2xl text-[#1A1209] mb-3">{c.ok_title}</h3>
                <p className="font-body text-[#5A4830] text-sm leading-relaxed font-semibold mb-6">{c.ok_text}</p>
                <button onClick={()=>setSubmitted(false)}
                  className="px-6 py-3 border-2 border-[#D5C9B0] text-sm font-body font-extrabold text-[#7A5A30] rounded-2xl hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors">
                  {c.ok_btn}
                </button>
              </div>
            )}
          </div>

          {/* Derecha: sprite (compacto) + tarjeta de contacto */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            {/* Sprite más pequeño en móvil */}
            <SpriteAnimator frames={graciasFrames} fps={2} className="w-40 sm:w-full sm:max-w-[260px] animate-float" alt="Personaje agradeciendo" />

            {/* Tarjeta de contacto */}
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-xl border border-[#C9A96E]/30">
              {/* Header oscuro */}
              <div className="bg-[#2D2218] px-6 sm:px-8 py-6 sm:py-8 flex flex-col items-center text-center gap-3 sm:gap-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3px] border-[#C9A96E] overflow-hidden shadow-lg">
                    <img src="/assets/karen-perfil-circular.png" alt="Karen Navarro" className="w-full h-full object-cover" />
                  </div>
                  <img src="/assets/logos/NaHuK Dorado (3).png" alt="KNH" className="h-8 sm:h-10 w-auto object-contain opacity-95" />
                  <div>
                    <p className="font-display font-bold text-lg sm:text-xl text-white tracking-widest">{c.card_title}</p>
                    <p className="font-body text-[#C9A96E] text-xs tracking-[0.2em] uppercase mt-0.5 font-bold">{c.card_role}</p>
                  </div>
                </div>
              </div>
              {/* Pie de tarjeta */}
              <div className="bg-[#F5EFE6] px-6 sm:px-8 py-5 sm:py-6 space-y-3 border-t-2 border-[#C9A96E]/30">
                <div className="w-12 h-0.5 bg-[#C9A96E]/60 mx-auto mb-3 sm:mb-4 rounded" />
                <a href="mailto:karen.navarro.hurtado@gmail.com"
                  className="flex items-center gap-3 text-[#3A2010] font-body font-bold hover:text-[#C9A96E] transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#C9A96E] group-hover:text-white transition-colors text-sm">✉️</span>
                  {/* Email con overflow elíptico en móvil */}
                  <span className="text-xs truncate">karen.navarro.hurtado@gmail.com</span>
                </a>
                <a href="tel:7206643520"
                  className="flex items-center gap-3 text-[#3A2010] font-body font-bold hover:text-[#C9A96E] transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#C9A96E] group-hover:text-white transition-colors text-sm">📞</span>
                  <span className="text-xs">720 664 3520</span>
                </a>
                <div className="flex items-center gap-3 text-[#7A5A30] font-body font-semibold">
                  <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-sm">📍</span>
                  <span className="text-xs">Toluca, Estado de México</span>
                </div>
                <a href="https://wa.me/527206643520" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-3 sm:mt-4 w-full py-3 bg-[#25D366] text-white font-body font-extrabold text-sm rounded-2xl hover:bg-[#1DAA56] transition-all shadow-md">
                  📱 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
