import type { LocalizedText } from '../context/I18nContext';

export interface ProjectShowcase {
  id: string;
  title: LocalizedText;
  category: LocalizedText;
  location: LocalizedText;
  architect: string;
  stoneId: string;
  stoneName: string;
  description: LocalizedText;
  imageUrl: string;
  stats: {
    area: string;
    finish: LocalizedText;
    year: string;
  };
}

export const INSPIRATION_PROJECTS: ProjectShowcase[] = [
  {
    id: 'proj-fasano-kitchen',
    title: { pt: 'Residência Villa Marés', en: 'Villa Marés Residence', es: 'Residencia Villa Marés', it: 'Residenza Villa Marés' },
    category: { pt: 'Living Monumental & Lareira', en: 'Monumental Living Room & Fireplace', es: 'Living Monumental y Chimenea', it: 'Living Monumentale & Camino' },
    location: { pt: 'Guarapari, ES · Brasil', en: 'Guarapari, ES · Brazil', es: 'Guarapari, ES · Brasil', it: 'Guarapari, ES · Brasile' },
    architect: 'Studio Arquitetura Contemporânea',
    stoneId: 'patagonia-gold',
    stoneName: 'Patagonia Crystalline Gold',
    description: {
      pt: 'Living com pé-direito duplo e lareira monumental em quartzito translúcido. A formação cristalina ganha vida à noite com a iluminação LED interna integrada.',
      en: 'Double-height living room with a monumental fireplace in translucent quartzite. The crystalline formation comes alive at night with integrated internal LED lighting.',
      es: 'Living de doble altura con chimenea monumental en cuarcita translúcida. La formación cristalina cobra vida de noche con la iluminación LED interna integrada.',
      it: 'Living a doppia altezza con camino monumentale in quarzite traslucida. La formazione cristallina prende vita di notte grazie all’illuminazione LED interna integrata.',
    },
    imageUrl: '/images/patagonia-chapa.jpg',
    stats: {
      area: '85 m²',
      finish: { pt: 'Polido Retroiluminado', en: 'Polished Backlit', es: 'Pulido Retroiluminado', it: 'Lucido Retroilluminato' },
      year: '2025',
    },
  },
  {
    id: 'proj-manhattan-penthouse',
    title: { pt: 'Spa & Penthouse Tribeca', en: 'Tribeca Spa & Penthouse', es: 'Spa y Penthouse Tribeca', it: 'Spa & Attico Tribeca' },
    category: { pt: 'Piscina Indoor & Spa Master', en: 'Indoor Pool & Master Spa', es: 'Piscina Interior y Spa Master', it: 'Piscina Interna & Spa Master' },
    location: { pt: 'Manhattan, Nova York · EUA', en: 'Manhattan, New York · USA', es: 'Manhattan, Nueva York · EE. UU.', it: 'Manhattan, New York · USA' },
    architect: 'Foster & Partners Associate',
    stoneId: 'calacatta-imperial-gold',
    stoneName: 'Calacatta Imperial Gold',
    description: {
      pt: 'Spa e piscina privativa totalmente revestidos em mármore nobre com paginação bookmatched contínua entre paredes, pilares e fundo da piscina.',
      en: 'Spa and private pool fully clad in noble marble with continuous bookmatched layout across walls, columns and pool floor.',
      es: 'Spa y piscina privada totalmente revestidos en mármol noble con paginación bookmatched continua entre paredes, pilares y fondo de la piscina.',
      it: 'Spa e piscina privata interamente rivestite in marmo pregiato con impaginazione bookmatch continua tra pareti, pilastri e fondo vasca.',
    },
    imageUrl: '/images/hero-1.jpg',
    stats: {
      area: '140 m²',
      finish: { pt: 'Polido Espelhado Bookmatched', en: 'Mirror Polished Bookmatched', es: 'Pulido Espejo Bookmatched', it: 'Lucido a Specchio Bookmatch' },
      year: '2025',
    },
  },
  {
    id: 'proj-corporate-tower',
    title: { pt: 'Lobby do Edifício Horizon', en: 'Horizon Building Lobby', es: 'Lobby del Edificio Horizon', it: 'Lobby del Palazzo Horizon' },
    category: { pt: 'Living & Piso Nobre de Alta Refletância', en: 'Living & High-Gloss Premium Flooring', es: 'Living y Piso Noble de Alta Reflectancia', it: 'Living & Pavimento Pregiato ad Alta Riflettanza' },
    location: { pt: 'São Paulo, SP · Brasil', en: 'São Paulo, SP · Brazil', es: 'São Paulo, SP · Brasil', it: 'San Paolo, SP · Brasile' },
    architect: 'Aflalo & Gasperini Arquitetos',
    stoneId: 'titanium-gold-black',
    stoneName: 'Titanium Gold Cosmic',
    description: {
      pt: 'Piso monumental com polimento diamantado cristalino em rocha escura e veios cósmicos de ouro, gerando reflexo espelhado e amplitude visual extrema.',
      en: 'Monumental floor with crystal diamond polish in dark stone with cosmic gold veins, creating mirror reflections and extreme visual depth.',
      es: 'Piso monumental con pulido diamantado cristalino en roca oscura y vetas cósmicas de oro, generando reflejo espejado y amplitud visual extrema.',
      it: 'Pavimento monumentale con lucidatura diamantata cristallina in pietra scura e venature cosmiche dorate, per riflessi a specchio e ampiezza visiva estrema.',
    },
    imageUrl: '/images/patio-blocos.jpg',
    stats: {
      area: '320 m²',
      finish: { pt: 'Polido Cristalino', en: 'Crystal Polished', es: 'Pulido Cristalino', it: 'Lucido Cristallino' },
      year: '2024',
    },
  },
  {
    id: 'proj-mediterranean-living',
    title: { pt: 'Casa Alvorada', en: 'Casa Alvorada', es: 'Casa Alvorada', it: 'Casa Alvorada' },
    category: { pt: 'Cozinha Gourmet & Ilha Cascata', en: 'Gourmet Kitchen & Waterfall Island', es: 'Cocina Gourmet e Isla Cascada', it: 'Cucina Gourmet & Isola a Cascata' },
    location: { pt: 'Miami, Flórida · EUA', en: 'Miami, Florida · USA', es: 'Miami, Florida · EE. UU.', it: 'Miami, Florida · USA' },
    architect: 'Oppenheim Architecture',
    stoneId: 'mont-blanc-supreme',
    stoneName: 'Mont Blanc Supreme',
    description: {
      pt: 'Ilha em cascata, bancadas e coifa esculpida em quartzito Mont Blanc Supreme com veios contínuos, trazendo pureza estética e resistência inalterável.',
      en: 'Waterfall island, countertops and sculpted hood in Mont Blanc Supreme quartzite with continuous veining, bringing aesthetic purity and lasting durability.',
      es: 'Isla en cascada, encimeras y campana esculpida en cuarcita Mont Blanc Supreme con vetas continuas, aportando pureza estética y resistencia inalterable.',
      it: 'Isola a cascata, piani e cappa scolpita in quarzite Mont Blanc Supreme con venature continue, per purezza estetica e resistenza inalterabile.',
    },
    imageUrl: '/images/mont-blanc-chapa.jpg',
    stats: {
      area: '110 m²',
      finish: { pt: 'Polido Espelhado', en: 'Mirror Polished', es: 'Pulido Espejo', it: 'Lucido a Specchio' },
      year: '2025',
    },
  },
];
