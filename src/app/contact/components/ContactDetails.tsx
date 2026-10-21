import React from 'react';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';
import StatusBadge from '@/components/StatusBadge';
import { siteConfig } from '@/config/site';

export default function ContactDetails() {
  const rows = [
    { icon: 'MapPinIcon', label: 'Adresse', value: siteConfig.address.line, status: siteConfig.address.status },
    { icon: 'PhoneIcon', label: 'Téléphone', value: siteConfig.contact.phone || 'À fournir par le client', status: 'à confirmer' as const },
    { icon: 'EnvelopeIcon', label: 'E-mail', value: siteConfig.contact.email || 'À fournir par le client', status: 'à confirmer' as const },
  ];

  return (
    <div className="flex h-full flex-col justify-between gap-6">
      {rows.map((r, i) => (
        <RevealOnScroll key={r.label} delay={i * 90}>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Icon name={r.icon as 'MapPinIcon'} size={22} />
            </span>
            <div className="flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-3">
                <h3 className="font-display text-lg text-secondary-foreground">{r.label}</h3>
                <StatusBadge status={r.status} />
              </div>
              <p className="text-base text-muted-foreground">{r.value}</p>
            </div>
          </div>
        </RevealOnScroll>
      ))}
      <RevealOnScroll delay={300}>
        <div className="rounded-2xl border border-dashed border-border p-5 text-sm leading-relaxed text-muted-foreground">
          La carte interactive sera ajoutée dès validation de l’adresse exacte. Aucun lien cartographique
          fictif n’est affiché.
        </div>
      </RevealOnScroll>
    </div>
  );
}