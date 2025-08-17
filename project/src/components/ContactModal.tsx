import React, { useState } from 'react';
import { X, Send, Shield } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot anti-spam check
    if (honeypot) {
      console.log('Spam detected');
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Per favore compila tutti i campi obbligatori');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    try {
      // Configurazione EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Non specificata',
        message: formData.message,
        to_email: 'supporto@dashboardglass.com'
      };

      // Invia email tramite EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Da configurare
        'YOUR_TEMPLATE_ID', // Da configurare
        templateParams,
        'YOUR_PUBLIC_KEY' // Da configurare
      );

      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form dopo 3 secondi
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('Errore invio email:', error);
      setIsSubmitting(false);
      setError('Errore durante l\'invio. Riprova più tardi o contatta supporto@dashboardglass.com');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-cyan-400/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Messaggio Inviato!</h3>
            <p className="text-gray-300">
              Il tuo messaggio è stato inviato a supporto@dashboardglass.com. 
              Ti contatteremo presto per programmare la demo.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-6">Prenota una Demo</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Il tuo nome"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="la.tua@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Azienda
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Nome azienda"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Messaggio *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Raccontaci delle tue esigenze di analisi dati..."
                  required
                />
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Protetto da sistema anti-spam</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    <span>Invio in corso...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Invia Richiesta</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;