// ─────────────────────────────────────────────────────────────
// CONFIGURATION CENTRALE — Aitbaamran
// Statuts : "communiqué" (donné par le client) | "à confirmer" | "vérifié"
// Ne rien publier comme fait établi tant que le statut n'est pas "vérifié".
// ─────────────────────────────────────────────────────────────

export type DataStatus = 'communiqué' | 'à confirmer' | 'vérifié';

export const siteConfig = {
  name: 'Aitbaamran',
  nameStatus: 'à confirmer' as DataStatus,
  address: {
    line: '15, Ras Jnane, Médina, Fès, Maroc',
    status: 'à confirmer' as DataStatus
  },
  contact: {
    phone: '', // à fournir par le client
    email: '', // à fournir par le client
    mapUrl: '' // lien carte à valider
  },
  // URL officielle du PMS / Booking Engine — à fournir par le fournisseur.
  bookingEngineUrl: '',
  languages: ['FR', 'EN', 'AR'] as const
};

export interface RoomCategory {
  id: string;
  name: string;
  capacity: string;
  area: string;
  bed: string;
  note: string;
  image: string;
  alt: string;
}

// Structure administrable : aucun nom, tarif ou équipement n'est inventé.
export const roomCategories: RoomCategory[] = [
{
  id: 'category-a',
  name: 'Catégorie de chambre n°1',
  capacity: 'Capacité : à confirmer',
  area: 'Superficie : à confirmer',
  bed: 'Type de lit : à confirmer',
  note: 'Nom, photos et équipements à fournir par le client.',
  image: "https://images.unsplash.com/photo-1722247519821-eb666def47de",
  alt: 'Chambre lumineuse aux murs clairs et linge de lit blanc, photo de démonstration provisoire'
},
{
  id: 'category-b',
  name: 'Catégorie de chambre n°2',
  capacity: 'Capacité : à confirmer',
  area: 'Superficie : à confirmer',
  bed: 'Type de lit : à confirmer',
  note: 'Nom, photos et équipements à fournir par le client.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11fd180a0-1784987540750.png",
  alt: 'Chambre élégante avec tons chauds et décoration sobre, photo de démonstration provisoire'
},
{
  id: 'category-c',
  name: 'Catégorie de chambre n°3',
  capacity: 'Capacité : à confirmer',
  area: 'Superficie : à confirmer',
  bed: 'Type de lit : à confirmer',
  note: 'Nom, photos et équipements à fournir par le client.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4b00111ac-1792598879783.png",
  alt: 'Suite spacieuse avec lit double et lumière douce, photo de démonstration provisoire'
}];


export interface ServiceItem {
  id: string;
  label: string;
  status: DataStatus;
}

export const services: ServiceItem[] = [
{ id: 'breakfast', label: 'Petit-déjeuner', status: 'à confirmer' },
{ id: 'terrace', label: 'Terrasse', status: 'à confirmer' },
{ id: 'transfer', label: 'Transfert aéroport', status: 'à confirmer' },
{ id: 'hammam', label: 'Hammam / Spa', status: 'à confirmer' },
{ id: 'excursions', label: 'Excursions', status: 'à confirmer' },
{ id: 'dining', label: 'Restauration', status: 'à confirmer' }];


export const navLinks = [
{ href: '/', label: 'Accueil' },
{ href: '/about', label: 'Le Riad' },
{ href: '/rooms', label: 'Chambres' },
{ href: '/discover-f-s', label: 'Découvrir Fès' },
{ href: '/contact', label: 'Contact' }];


export const heroImage =
'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=2000&q=80';