/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, ArrowRight, KeyRound, Building2, Download, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';

const Logo = ({ isDark, id }: { isDark?: boolean; id?: string }) => {
  return (
    <div id={id} className={`flex items-center gap-3 p-4 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      <div className="relative">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
            isDark 
              ? 'bg-emerald-500 shadow-emerald-500/20' 
              : 'bg-slate-900 shadow-slate-900/20'
          }`}
        >
          <ShieldCheck className={`w-7 h-7 ${isDark ? 'text-slate-950' : 'text-white'}`} />
        </div>
        <div
          className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center border-2 ${
            isDark ? 'bg-slate-900 border-slate-900 text-emerald-400' : 'bg-white border-white text-slate-900'
          }`}
        >
          <KeyRound className="w-3 h-3" />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-display font-bold tracking-tight">
          ENTRY<span className={isDark ? 'text-emerald-400' : 'text-emerald-600'}>PASS</span>
        </span>
        <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Security & Access
        </span>
      </div>
    </div>
  );
};

const IconOnly = ({ isDark, id }: { isDark?: boolean; id?: string }) => {
  return (
    <div id={id} className={`p-8 flex items-center justify-center ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="relative">
        <div
          className={`w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl ${
            isDark 
              ? 'bg-emerald-500 shadow-emerald-500/20' 
              : 'bg-slate-900 shadow-slate-900/20'
          }`}
        >
          <ShieldCheck className={`w-14 h-14 ${isDark ? 'text-slate-950' : 'text-white'}`} />
        </div>
        <div
          className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center border-4 ${
            isDark ? 'bg-slate-900 border-slate-900 text-emerald-400' : 'bg-white border-white text-slate-900'
          }`}
        >
          <KeyRound className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const downloadLogo = async (id: string, fileName: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    
    setDownloading(id);
    setError(null);
    try {
      // Small delay to ensure styles are applied
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const dataUrl = await toPng(element, { 
        backgroundColor: id.includes('dark') ? '#0f172a' : '#ffffff',
        pixelRatio: 3,
        cacheBust: true,
      });
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error downloading logo:', err);
      setError('Error al generar la imagen. Por favor, intenta de nuevo.');
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50">
      {/* Header */}
      <header className="p-6 max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex gap-4">
          <a href="#brand-kit" className="text-slate-600 hover:text-slate-900 text-sm font-medium flex items-center gap-2">
            <ImageIcon className="w-4 h-4" /> Kit de Marca
          </a>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
            Contactar
          </button>
        </div>
      </header>

      {error && (
        <div className="fixed bottom-8 right-8 bg-red-100 border border-red-200 text-red-700 px-6 py-3 rounded-xl shadow-lg z-50 flex items-center gap-2">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="font-bold ml-2">×</button>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Control de acceso inteligente para <span className="text-emerald-600">barrios privados.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Optimiza la seguridad y agiliza el ingreso de visitas y residentes con nuestra plataforma integral de gestión.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20">
                Empezar ahora <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Ver demo
              </button>
            </div>
          </motion.div>

          <div className="space-y-8">
            {/* Light Mode Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Light Mode</span>
              </div>
              <div className="flex justify-center">
                <Logo />
              </div>
            </motion.div>

            {/* Dark Mode Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-slate-900 p-12 rounded-3xl shadow-2xl border border-slate-800 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Dark Mode</span>
              </div>
              <div className="flex justify-center">
                <Logo isDark />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brand Kit Section */}
        <section id="brand-kit" className="scroll-mt-24 mb-32">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Kit de Marca (PNG Assets)</h2>
            <p className="text-slate-600">Descarga los logos originales en alta resolución para tus presentaciones y materiales.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Light Logo Download */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col items-center">
              <div className="mb-8 border border-slate-100 rounded-lg overflow-hidden">
                <Logo id="logo-light-dl" />
              </div>
              <button 
                onClick={() => downloadLogo('logo-light-dl', 'entrypass-logo-light')}
                disabled={downloading === 'logo-light-dl'}
                className="w-full bg-slate-100 text-slate-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all disabled:opacity-50"
              >
                <Download className="w-4 h-4" /> {downloading === 'logo-light-dl' ? 'Generando...' : 'Descargar PNG Light'}
              </button>
            </div>

            {/* Dark Logo Download */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col items-center">
              <div className="mb-8 border border-slate-800 rounded-lg overflow-hidden">
                <Logo isDark id="logo-dark-dl" />
              </div>
              <button 
                onClick={() => downloadLogo('logo-dark-dl', 'entrypass-logo-dark')}
                disabled={downloading === 'logo-dark-dl'}
                className="w-full bg-slate-800 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-700 transition-all disabled:opacity-50"
              >
                <Download className="w-4 h-4" /> {downloading === 'logo-dark-dl' ? 'Generando...' : 'Descargar PNG Dark'}
              </button>
            </div>

            {/* Icon Only Download */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col items-center">
              <div className="mb-8 border border-slate-100 rounded-lg overflow-hidden">
                <IconOnly id="icon-dl" />
              </div>
              <button 
                onClick={() => downloadLogo('icon-dl', 'entrypass-icon')}
                disabled={downloading === 'icon-dl'}
                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all disabled:opacity-50"
              >
                <Download className="w-4 h-4" /> {downloading === 'icon-dl' ? 'Generando...' : 'Descargar Icono PNG'}
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Seguridad Máxima", desc: "Protocolos de encriptación y validación de identidad en tiempo real." },
            { icon: Building2, title: "Gestión de Barrios", desc: "Panel administrativo centralizado para múltiples accesos y perímetros." },
            { icon: KeyRound, title: "Acceso QR", desc: "Invitaciones temporales vía QR para visitas, agilizando la guardia." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + (i * 0.1) }}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                <feature.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="py-12 border-t border-slate-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <p className="text-slate-500 text-sm">
            © 2026 ENTRYPASS. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
