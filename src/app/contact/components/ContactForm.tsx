'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '', website: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = 'Veuillez indiquer votre nom.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Adresse e-mail invalide.';
    if (values.message.trim().length < 10) e.message = 'Votre message doit contenir au moins 10 caractères.';
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (values.website) return; // honeypot anti-spam
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // TODO: connecter à un service d'envoi (e-mail) validé par le client.
      setSent(true);
    }
  };

  const field =
    'min-h-[52px] w-full rounded-xl border border-input bg-background px-4 text-base text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40';

  if (sent) {
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center gap-4 rounded-3xl border border-success/40 bg-success/10 p-8">
        <Icon name="CheckCircleIcon" size={36} className="text-success" />
        <h2 className="font-display text-2xl text-foreground">Message prêt à être envoyé</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Le formulaire est validé côté navigateur. L’envoi réel sera activé dès qu’un service d’e-mail
          sera configuré par le client.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-border bg-card p-6 sm:p-10">
      <div className="space-y-6">
        <label className="flex flex-col gap-2 text-sm font-semibold text-card-foreground">
          Nom
          <input
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className={field}
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="text-sm font-medium text-destructive">{errors.name}</span>}
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-card-foreground">
          E-mail
          <input
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={field}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="text-sm font-medium text-destructive">{errors.email}</span>}
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-card-foreground">
          Message
          <textarea
            rows={5}
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            className={`${field} py-3`}
            aria-invalid={!!errors.message}
          />
          {errors.message && <span className="text-sm font-medium text-destructive">{errors.message}</span>}
        </label>
        <div className="hidden" aria-hidden="true">
          <label>
            Ne pas remplir
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => setValues({ ...values, website: e.target.value })}
            />
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-primary px-8 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
      >
        Envoyer
        <Icon name="PaperAirplaneIcon" size={18} />
      </button>
    </form>
  );
}