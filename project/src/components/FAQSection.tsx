import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, BarChart3, Shield, Zap, Users, TrendingUp, Database } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ComponentType<any>;
  keywords: string[];
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Come analizzare i dati aziendali senza competenze tecniche o programmazione?",
      answer: "DashboardGlass permette a CEO, manager e team aziendali di analizzare dati complessi utilizzando il linguaggio naturale, senza bisogno di competenze SQL o programmazione. La nostra piattaforma di business intelligence trasforma le tue domande in italiano (come 'Quali sono i ricavi del trimestre?' o 'Mostrami i clienti più redditizi') in query automatiche sui tuoi database. In pochi secondi ottieni grafici, tabelle e report professionali, eliminando la dipendenza dal reparto IT. Oltre 10.000 aziende utilizzano la nostra soluzione per democratizzare l'accesso ai dati, riducendo i tempi di analisi da giorni a minuti e permettendo decisioni basate sui dati in tempo reale.",
      icon: Search,
      keywords: ["analisi dati", "business intelligence", "senza programmazione", "linguaggio naturale"]
    },
    {
      id: 2,
      question: "Qual è il miglior software di business intelligence per PMI e startup italiane?",
      answer: "DashboardGlass è la soluzione di business intelligence ideale per piccole e medie imprese italiane che cercano uno strumento potente ma accessibile. A differenza di software complessi come Tableau o Power BI che richiedono formazione specialistica, la nostra piattaforma permette di creare dashboard professionali in minuti, non settimane. Supportiamo database MySQL, PostgreSQL, MongoDB e fogli Excel, integrandoci facilmente con i sistemi esistenti. Le PMI risparmiano fino al 70% sui costi di consulenza esterna grazie alla semplicità d'uso, mentre startup e scale-up accelerano le decisioni strategiche con analytics predittive automatiche. Prezzi trasparenti a partire da €49/mese, senza costi nascosti o consulenze obbligatorie.",
      icon: TrendingUp,
      keywords: ["business intelligence PMI", "software BI Italia", "dashboard aziendali", "analytics startup"]
    },
    {
      id: 3,
      question: "Come automatizzare report e KPI aziendali con aggiornamento in tempo reale?",
      answer: "Con DashboardGlass trasformi report manuali e fogli Excel statici in dashboard dinamiche che si aggiornano automaticamente. I tuoi KPI principali (fatturato, margini, performance vendite, customer satisfaction) vengono monitorati 24/7 con refresh automatico ogni ora, giorno o settimana secondo le tue esigenze. La piattaforma invia notifiche intelligenti quando i parametri superano soglie critiche, permettendo interventi tempestivi. Elimini ore di lavoro manuale nella preparazione di report per CDA, investitori o team management. Le dashboard responsive sono accessibili da desktop, tablet e smartphone, garantendo controllo costante delle performance aziendali anche in mobilità. Oltre 500 template predefiniti accelerano la creazione di reportistica professionale.",
      icon: BarChart3,
      keywords: ["automatizzare report", "KPI tempo reale", "dashboard automatiche", "monitoraggio performance"]
    },
    {
      id: 4,
      question: "Software per previsioni di vendita e analisi predittive: quale scegliere?",
      answer: "DashboardGlass integra algoritmi di machine learning avanzati per generare previsioni di vendita accurate basate sui tuoi dati storici. La piattaforma analizza automaticamente trend stagionali, comportamenti clienti e performance prodotti per predire ricavi futuri con precisione fino al 95%. Non servono data scientist: carichi i dati di vendita e in pochi clic ottieni forecast dettagliati per trimestre, semestre o anno. Le previsioni includono scenari ottimistici, realistici e pessimistici, supportando pianificazione budget e strategie commerciali. Funzionalità avanzate come churn prediction, lifetime value clienti e demand forecasting aiutano a ottimizzare inventory, pricing e campagne marketing. Ideale per e-commerce, retail, SaaS e aziende B2B che vogliono decisioni data-driven.",
      icon: TrendingUp,
      keywords: ["previsioni vendita", "analisi predittive", "forecast ricavi", "machine learning business"]
    },
    {
      id: 5,
      question: "Come creare dashboard professionali e KPI aziendali senza designer o sviluppatori?",
      answer: "DashboardGlass offre un editor drag-and-drop intuitivo che permette di creare dashboard professionali in 10 minuti, senza competenze di design o sviluppo. Oltre 50 tipi di grafici (linee, barre, torte, mappe di calore, gauge) si personalizzano con colori aziendali, loghi e layout responsive. I template predefiniti per settori specifici (retail, manufacturing, servizi, e-commerce) accelerano la creazione, mentre l'AI suggerisce automaticamente le visualizzazioni più efficaci per i tuoi dati. Le dashboard si adattano automaticamente a desktop, tablet e smartphone, garantendo presentazioni impeccabili in riunioni, board meeting o presentazioni clienti. Funzioni avanzate includono filtri interattivi, drill-down sui dati e export in PDF/PowerPoint per condivisione offline.",
      icon: BarChart3,
      keywords: ["creare dashboard", "KPI aziendali", "visualizzazione dati", "grafici professionali"]
    },
    {
      id: 6,
      question: "Piattaforma sicura per condividere analisi dati e report con team e stakeholder",
      answer: "DashboardGlass garantisce massima sicurezza nella condivisione di dati sensibili attraverso crittografia end-to-end, autenticazione a due fattori e controlli granulari di accesso. Definisci permessi specifici per utente (view-only, edit, admin) e per dashboard, proteggendo informazioni riservate da accessi non autorizzati. La piattaforma è conforme GDPR e ISO 27001, con server in Europa per rispettare normative sulla privacy. Funzionalità di audit trail tracciano ogni accesso e modifica, mentre watermark personalizzati proteggono da screenshot non autorizzati. Condividi dashboard via link sicuri con scadenza automatica, embed protetti in intranet aziendali o export PDF con controllo versioni. Ideale per CDA, investitori, partner commerciali e team distribuiti che necessitano accesso controllato a analytics aziendali.",
      icon: Shield,
      keywords: ["condivisione sicura dati", "dashboard team", "controllo accessi", "GDPR compliance"]
    },
    {
      id: 7,
      question: "Migliore alternativa italiana a Tableau e Power BI per analisi dati aziendali",
      answer: "DashboardGlass rappresenta l'alternativa italiana più avanzata a Tableau e Microsoft Power BI, progettata specificamente per il mercato italiano e le esigenze delle aziende locali. Mentre Tableau costa oltre €600/utente/anno e richiede settimane di formazione, DashboardGlass offre la stessa potenza analitica a €49/mese con setup in 24 ore. Supporto clienti in italiano, conformità normative locali e integrazione nativa con software gestionali italiani (Zucchetti, TeamSystem, SAP Italia). La piattaforma elabora linguaggio naturale in italiano perfetto, comprendendo terminologie business locali e settoriali. Oltre 1.000 aziende italiane hanno migrato da soluzioni estere, riducendo costi del 60% e aumentando adoption rate del 300% grazie alla semplicità d'uso e supporto dedicato.",
      icon: Zap,
      keywords: ["alternativa Tableau", "Power BI italiano", "business intelligence Italia", "software BI nazionale"]
    },
    {
      id: 8,
      question: "Come integrare database aziendali (MySQL, PostgreSQL, Excel) con strumenti di analisi?",
      answer: "DashboardGlass si connette nativamente a oltre 50 fonti dati: database relazionali (MySQL, PostgreSQL, SQL Server, Oracle), NoSQL (MongoDB, Cassandra), cloud storage (AWS S3, Google Drive), CRM (Salesforce, HubSpot), ERP (SAP, Oracle NetSuite) e file Excel/CSV. L'integrazione richiede pochi clic attraverso connettori pre-configurati, senza necessità di API custom o sviluppo. La piattaforma sincronizza automaticamente i dati con refresh programmabili, mantenendo dashboard sempre aggiornate. Supporta query federate per analisi cross-database e data blending intelligente per unificare fonti eterogenee. Funzionalità ETL integrate puliscono e trasformano dati automaticamente, mentre cache intelligente garantisce performance ottimali anche su dataset di milioni di record. Setup guidato in italiano e supporto tecnico dedicato per migrazioni complesse.",
      icon: Database,
      keywords: ["integrazione database", "connettori dati", "MySQL PostgreSQL", "sincronizzazione automatica"]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-black/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Domande Frequenti su Business Intelligence e Analisi Dati
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scopri come DashboardGlass rivoluziona l'analisi dati aziendale per CEO, manager e team che vogliono decisioni basate sui dati senza competenze tecniche
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => {
            const Icon = item.icon;
            const isOpen = openItems.includes(item.id);
            
            return (
              <div 
                key={item.id}
                className="bg-black/60 backdrop-blur-md rounded-xl border border-cyan-500/20 overflow-hidden hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-cyan-500/5 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-black" />
                    </div>
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="pl-11">
                      <p className="text-gray-300 leading-relaxed text-base">
                        {item.answer}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.keywords.map((keyword, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/20"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-cyan-400/20 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Hai altre domande sulla nostra piattaforma di Business Intelligence?
            </h3>
            <p className="text-gray-300 mb-6">
              Il nostro team di esperti è pronto a rispondere alle tue domande specifiche e mostrarti come DashboardGlass può trasformare la gestione dati della tua azienda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://demo.dashboardglass.com', '_blank', 'noopener,noreferrer')}
                className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-200"
              >
                Prova Demo Gratuita
              </button>
              <button 
                onClick={() => {
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
                className="border-2 border-cyan-400/30 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
              >
                Contatta Esperti
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;