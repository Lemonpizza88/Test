import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { Play, BarChart3, Users, TrendingUp, MapPin, Shield, Mail, Phone, MapPin as Location, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import ContactModal from './components/ContactModal';
import SecurityPage from './components/SecurityPage';
import FAQSection from './components/FAQSection';
import InteractiveChart from './components/InteractiveChart';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showSecurityPage, setShowSecurityPage] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listener per aprire modal contatti da altri componenti
  useEffect(() => {
    const handleOpenContactModal = () => {
      setIsContactModalOpen(true);
    };

    window.addEventListener('openContactModal', handleOpenContactModal);
    return () => {
      window.removeEventListener('openContactModal', handleOpenContactModal);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  if (showSecurityPage) {
    return <SecurityPage onBack={() => setShowSecurityPage(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-data-and-graphs-4138-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/30 to-black/70"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">DashboardGlass</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="hover:text-blue-400 transition-colors">
                Funzionalità
              </button>
              <button onClick={() => scrollToSection('demo')} className="hover:text-blue-400 transition-colors">
                Demo
              </button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-blue-400 transition-colors">
                FAQ
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                Contatti
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('features')} className="text-left hover:text-blue-400 transition-colors">
                  Funzionalità
                </button>
                <button onClick={() => scrollToSection('demo')} className="text-left hover:text-blue-400 transition-colors">
                  Demo
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left hover:text-blue-400 transition-colors">
                  FAQ
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors text-left w-fit"
                >
                  Contatti
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 bg-clip-text text-transparent">
                Dashboard e Analytics per Aziende Moderne
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Trasforma i tuoi dati in decisioni strategiche con la nostra piattaforma di business intelligence italiana. 
                Analisi dati avanzate, dashboard interattive e visualizzazioni geografiche per il successo della tua azienda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://demo.dashboardglass.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Prova Gratuita
                </a>
                <button 
                  onClick={() => scrollToSection('demo')}
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="h-5 w-5" />
                  <span>Guarda Demo Ora</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <InteractiveChart />
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Funzionalità */}
      <section id="features" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Funzionalità Avanzate per il Tuo Business
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strumenti potenti e intuitivi per trasformare i dati in opportunità di crescita
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <BarChart3 className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ampia Gamma di Grafici</h3>
              <p className="text-gray-300">
                Visualizza i tuoi dati con grafici a barre, linee, torte, scatter plot e molti altri tipi di visualizzazioni professionali.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Users className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Analisi Utenti</h3>
              <p className="text-gray-300">
                Monitora il comportamento degli utenti, traccia le conversioni e ottimizza le performance del tuo business.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Previsioni AI</h3>
              <p className="text-gray-300">
                Algoritmi di machine learning per prevedere trend futuri e supportare decisioni strategiche basate sui dati.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <MapPin className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Visualizzazioni Geografiche</h3>
              <p className="text-gray-300">
                Mappe interattive e heatmap per analizzare dati geografici e identificare opportunità territoriali.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sicurezza Avanzata</h3>
              <p className="text-gray-300">
                Crittografia end-to-end, controlli di accesso granulari e conformità GDPR per proteggere i tuoi dati sensibili.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <ExternalLink className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Connessioni Database</h3>
              <p className="text-gray-300">
                Connetti direttamente i tuoi database MySQL, PostgreSQL, MongoDB e altri sistemi per analisi in tempo reale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vedi DashboardGlass in Azione
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Scopri come la nostra piattaforma può trasformare il modo in cui visualizzi e analizzi i tuoi dati
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="aspect-video bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl mb-6 overflow-hidden">
              <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
              <div className="sl-embed" style={{position: 'relative', paddingBottom: 'calc(45.71% + 25px)', width: '100%', height: '0', transform: 'scale(1)'}}>
                <iframe 
                  loading="lazy" 
                  className="sl-demo" 
                  src="https://app.storylane.io/demo/ypkvzokxw284?embed=inline" 
                  name="sl-embed" 
                  allow="fullscreen" 
                  allowFullScreen 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(63,95,172,0.35)',
                    boxShadow: '0px 0px 18px rgba(26, 19, 72, 0.15)',
                    borderRadius: '10px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-cyan-600/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-cyan-400 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Importa i Dati</h3>
                <p className="text-gray-400 text-sm">Carica i tuoi file o connetti le tue fonti dati</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-400 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Crea Visualizzazioni</h3>
                <p className="text-gray-400 text-sm">Scegli tra decine di tipi di grafici e personalizza</p>
              </div>
              
              <div className="text-center">
                <div className="bg-cyan-600/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-cyan-400 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Condividi Insights</h3>
                <p className="text-gray-400 text-sm">Esporta report o condividi dashboard interattive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto a Trasformare i Tuoi Dati?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Unisciti alle aziende che hanno già scelto DashboardGlass per le loro analisi. 
              Inizia oggi stesso con la prova gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://demo.dashboardglass.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Inizia Prova Gratuita
              </a>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Parla con un Esperto
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold">DashboardGlass</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                La piattaforma di business intelligence italiana che trasforma i dati in decisioni strategiche per il successo della tua azienda.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Prodotto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">
                    FAQ
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowSecurityPage(true)} className="hover:text-white transition-colors">
                    Sicurezza
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Supporto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:supporto@dashboardglass.com" className="hover:text-white transition-colors flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>supporto@dashboardglass.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
            <div className="space-y-2">
              <p>&copy; 2025 DashboardGlass. Tutti i diritti riservati.</p>
              <p>Partita IVA: 02754140032</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

export default App;