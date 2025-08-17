import React from 'react';
import { Shield, Server, Lock, Eye, ArrowLeft } from 'lucide-react';

interface SecurityPageProps {
  onBack: () => void;
}

const SecurityPage: React.FC<SecurityPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Video di sfondo */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Contenuto principale */}
      <div className="relative z-10">
        {/* Header con pulsante indietro */}
        <div className="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Torna alla Homepage</span>
            </button>
          </div>
        </div>

        {/* Sezione Hero */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Sicurezza e Privacy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La protezione dei tuoi dati è la nostra priorità assoluta. Scopri come garantiamo 
              la massima sicurezza per la tua azienda.
            </p>
          </div>
        </section>

        {/* Sezioni di sicurezza */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Privacy dei Dati */}
            <div className="bg-black/60 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8 shadow-2xl shadow-cyan-400/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-white">Privacy Assoluta dei Dati</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p className="text-lg">
                  <strong className="text-cyan-400">I tuoi dati rimangono esclusivamente tuoi.</strong> 
                  DashboardGlass non condivide, vende o trasferisce mai i dati dei clienti a terze parti.
                </p>
                <p>
                  Quando utilizzi le funzionalità di intelligenza artificiale della nostra piattaforma, 
                  sfruttiamo API a pagamento di fornitori certificati. Ogni richiesta AI è processata 
                  in modo sicuro e i dati vengono immediatamente eliminati dopo l'elaborazione, 
                  senza alcuna memorizzazione permanente.
                </p>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mt-6">
                  <p className="text-cyan-400 font-semibold">
                    ✓ Zero condivisione dati con terze parti<br/>
                    ✓ API AI a pagamento per massima sicurezza<br/>
                    ✓ Eliminazione immediata dopo elaborazione
                  </p>
                </div>
              </div>
            </div>

            {/* Server Dedicato */}
            <div className="bg-black/60 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8 shadow-2xl shadow-cyan-400/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-white">Server Virtuale Dedicato</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p className="text-lg">
                  <strong className="text-cyan-400">Ogni cliente dispone di un server virtuale completamente dedicato.</strong> 
                  La tua istanza di DashboardGlass è isolata e accessibile esclusivamente dalla tua rete aziendale.
                </p>
                <p>
                  Questo approccio garantisce che i tuoi dati sensibili non condividano mai risorse 
                  con altri clienti e che l'accesso sia limitato esclusivamente ai dispositivi 
                  autorizzati della tua organizzazione.
                </p>
                <p>
                  <strong className="text-white">Il costo del server dedicato è già incluso nel canone mensile</strong> - 
                  nessun costo aggiuntivo per la massima sicurezza.
                </p>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mt-6">
                  <p className="text-cyan-400 font-semibold">
                    ✓ Server virtuale dedicato per ogni cliente<br/>
                    ✓ Accesso limitato alla rete aziendale<br/>
                    ✓ Isolamento completo dai dati di altri clienti<br/>
                    ✓ Costo incluso nel canone mensile
                  </p>
                </div>
              </div>
            </div>

            {/* Sicurezza Tecnica */}
            <div className="bg-black/60 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8 shadow-2xl shadow-cyan-400/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-white">Sicurezza Tecnica Avanzata</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  La nostra infrastruttura implementa i più alti standard di sicurezza industriale:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Crittografia</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Crittografia end-to-end AES-256</li>
                      <li>• Connessioni HTTPS/TLS 1.3</li>
                      <li>• Chiavi di crittografia uniche per cliente</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Controllo Accessi</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Autenticazione a due fattori (2FA)</li>
                      <li>• Controlli granulari per utente</li>
                      <li>• Audit trail completo</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Conformità</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Conformità GDPR completa</li>
                      <li>• Certificazione ISO 27001</li>
                      <li>• Server in Europa</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Monitoraggio</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Monitoraggio 24/7</li>
                      <li>• Backup automatici giornalieri</li>
                      <li>• Disaster recovery garantito</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600/20 to-cyan-400/20 rounded-2xl p-8 border border-cyan-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hai domande sulla sicurezza?
                </h3>
                <p className="text-gray-300 mb-6">
                  Il nostro team di sicurezza è disponibile per rispondere a qualsiasi domanda 
                  specifica sui nostri protocolli di protezione dati.
                </p>
                <a 
                  href="mailto:supporto@dashboardglass.com"
                  className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-200 inline-block"
                >
                  Contatta il Team Sicurezza
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecurityPage;