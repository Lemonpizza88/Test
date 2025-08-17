# Configurazione EmailJS per Form di Contatto

## Passaggi per attivare l'invio email reale:

### 1. Crea account EmailJS
- Vai su [https://www.emailjs.com/](https://www.emailjs.com/)
- Registrati gratuitamente (200 email/mese gratis)

### 2. Configura il servizio email
- Nel dashboard EmailJS, vai su "Email Services"
- Aggiungi un servizio (Gmail, Outlook, etc.)
- Annota il **Service ID**

### 3. Crea template email
- Vai su "Email Templates" 
- Crea un nuovo template con questi campi:
  ```
  Da: {{from_name}} <{{from_email}}>
  A: supporto@dashboardglass.com
  Oggetto: Nuova richiesta demo da {{from_name}}
  
  Nome: {{from_name}}
  Email: {{from_email}}
  Azienda: {{company}}
  
  Messaggio:
  {{message}}
  ```
- Annota il **Template ID**

### 4. Ottieni Public Key
- Vai su "Account" → "General"
- Copia la **Public Key**

### 5. Configura le variabili d'ambiente
- Crea file `.env` nella root del progetto
- Aggiungi le tue credenziali:
  ```
  VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
  VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
  VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
  ```

### 6. Aggiorna il codice
Nel file `src/components/ContactModal.tsx`, sostituisci:
```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',     // → process.env.VITE_EMAILJS_SERVICE_ID
  'YOUR_TEMPLATE_ID',    // → process.env.VITE_EMAILJS_TEMPLATE_ID
  templateParams,
  'YOUR_PUBLIC_KEY'      // → process.env.VITE_EMAILJS_PUBLIC_KEY
);
```

Con:
```javascript
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

### 7. Test
- Riavvia il server di sviluppo
- Compila e invia il form
- Controlla che l'email arrivi a supporto@dashboardglass.com

## Sicurezza
- Le credenziali EmailJS sono sicure da esporre nel frontend
- Il limite gratuito è 200 email/mese
- Per volumi maggiori, considera un piano a pagamento

## Troubleshooting
- Verifica che tutti gli ID siano corretti
- Controlla la console browser per errori
- Assicurati che il template EmailJS sia pubblicato
- Verifica che il servizio email sia attivo