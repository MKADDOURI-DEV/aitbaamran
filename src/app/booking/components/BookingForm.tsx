'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setInfo('');
    if (!checkIn || !checkOut) {
      setError('Veuillez choisir vos dates d’arrivée et de départ.');
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      setError('La date de départ doit être postérieure à la date d’arrivée.');
      return;
    }
    if (!siteConfig.bookingEngineUrl) {
      setInfo(
        'Le moteur de réservation officiel n’est pas encore connecté. Renseignez son URL dans src/config/site.ts pour activer la redirection.'
      );
      return;
    }
    const url = new URL(siteConfig.bookingEngineUrl);
    url.searchParams.set('checkin', checkIn);
    url.searchParams.set('checkout', checkOut);
    url.searchParams.set('guests', String(guests));
    window.location.href = url.toString();
  };

  const field =
    'min-h-[52px] w-full rounded-xl border border-input bg-background px-4 text-base text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40';

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-border bg-card p-6 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-3">
        <label className="flex flex-col gap-2 text-sm font-semibold text-card-foreground">
          Arrivée
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className={field} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-card-foreground">
          Départ
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className={field} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-card-foreground">
          Voyageurs
          <input
            type="number"
            min={1}
            max={12}
            value={guests}
            onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))}
            className={field}
          />
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-5 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
          {error}
        </p>
      )}
      {info && (
        <p role="status" className="mt-5 rounded-xl bg-warning/20 px-4 py-3 text-sm font-medium text-foreground">
          {info}
        </p>
      )}

      <button
        type="submit"
        className="mt-8 inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-accent px-8 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-[1.02] sm:w-auto"
      >
        Voir les disponibilités
        <Icon name="ArrowRightIcon" size={18} />
      </button>
    </form>
  );
}