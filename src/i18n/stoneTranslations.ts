import type { StoneItem } from '../types/stone';
import type { Language } from './translations';

type L3 = { en: string; es: string; it: string };

/** Shared vocabulary (finishes, categories, common words). */
const DICT: Record<string, L3> = {
  // Finishes
  'Polido': { en: 'Polished', es: 'Pulido', it: 'Lucido' },
  'Levigado': { en: 'Honed', es: 'Apomazado', it: 'Levigato' },
  'Escovado': { en: 'Brushed', es: 'Cepillado', it: 'Spazzolato' },
  'Acetinado': { en: 'Satin', es: 'Satinado', it: 'Satinato' },
  'Flamado': { en: 'Flamed', es: 'Flameado', it: 'Fiammato' },
  // Category labels
  'Quartzito Exótico': { en: 'Exotic Quartzite', es: 'Cuarcita Exótica', it: 'Quarzite Esotica' },
  'Mármore Nobre': { en: 'Noble Marble', es: 'Mármol Noble', it: 'Marmo Pregiato' },
  'Granito Exótico': { en: 'Exotic Granite', es: 'Granito Exótico', it: 'Granito Esotico' },
  'Granito Superior': { en: 'Premium Granite', es: 'Granito Superior', it: 'Granito Superiore' },
  'Mármore Travertino': { en: 'Travertine Marble', es: 'Mármol Travertino', it: 'Marmo Travertino' },
};

interface StoneL10n {
  origin: L3;
  colorLabel: L3;
  description: L3;
  recommendedUses: L3[];
  features: L3[];
}

const STONE_L10N: Record<string, StoneL10n> = {
  'patagonia-gold': {
    origin: { en: 'Bahia / Espírito Santo, Brazil', es: 'Bahía / Espírito Santo, Brasil', it: 'Bahia / Espírito Santo, Brasile' },
    colorLabel: { en: 'Gold & Crystal', es: 'Dorado y Cristal', it: 'Oro & Cristallo' },
    description: {
      en: 'One of the most sought-after quartzites in the world. It features translucent portions of crystalline quartz interspersed with feldspars and dramatic gold and dark veins, allowing stunning backlighting.',
      es: 'Una de las cuarcitas más deseadas del mundo. Presenta porciones translúcidas de cuarzo cristalino intercaladas con feldespatos y vetas doradas y oscuras dramáticas, permitiendo una retroiluminación impresionante.',
      it: 'Una delle quarziti più desiderate al mondo. Presenta porzioni traslucide di quarzo cristallino alternate a feldspati e drammatiche venature dorate e scure, consentendo una retroilluminazione straordinaria.',
    },
    recommendedUses: [
      { en: 'Backlit gourmet islands', es: 'Islas gourmet retroiluminadas', it: 'Isole gourmet retroilluminate' },
      { en: 'Decorative living room panels', es: 'Paneles decorativos de living', it: 'Pannelli decorativi per il living' },
      { en: 'High-end powder rooms', es: 'Tocadores de alto nivel', it: 'Bagni ospiti di alto livello' },
      { en: 'Luxury fireplaces', es: 'Chimeneas de lujo', it: 'Camini di lusso' },
    ],
    features: [
      { en: 'Translucent under LED light', es: 'Translúcido a la luz LED', it: 'Traslucido alla luce LED' },
      { en: 'Extreme resistance to acids and scratches', es: 'Resistencia extrema a ácidos y rayaduras', it: 'Resistenza estrema ad acidi e graffi' },
      { en: 'Pure quartz mineral formations', es: 'Formaciones minerales de cuarzo puro', it: 'Formazioni minerali di quarzo puro' },
    ],
  },
  'mont-blanc-supreme': {
    origin: { en: 'Espírito Santo, Brazil', es: 'Espírito Santo, Brasil', it: 'Espírito Santo, Brasile' },
    colorLabel: { en: 'Snow White & Grey', es: 'Blanco Níveo y Gris', it: 'Bianco Neve & Grigio' },
    description: {
      en: 'Timeless minimalist elegance. A pure white background with light grey and graphite veins in organic flow, combining the aesthetic beauty of marble with the indestructible hardness of natural quartz.',
      es: 'Elegancia minimalista atemporal. Fondo blanco puro con vetas gris claro y grafito en flujo orgánico, uniendo la belleza estética del mármol con la dureza indestructible del cuarzo natural.',
      it: 'Eleganza minimalista senza tempo. Fondo bianco puro con venature grigio chiaro e grafite in flusso organico, che unisce la bellezza del marmo alla durezza indistruttibile del quarzo naturale.',
    },
    recommendedUses: [
      { en: 'Heavy-use kitchen countertops', es: 'Encimeras de cocina de uso intenso', it: 'Piani cucina ad uso intensivo' },
      { en: 'Continuous premium flooring', es: 'Pisos nobles continuos', it: 'Pavimenti pregiati continui' },
      { en: 'Bathroom wall cladding', es: 'Revestimientos verticales de baño', it: 'Rivestimenti verticali per bagni' },
      { en: 'Ventilated façades', es: 'Fachadas ventiladas', it: 'Facciate ventilate' },
    ],
    features: [
      { en: 'Very high stain resistance', es: 'Altísima resistencia a manchas', it: 'Altissima resistenza alle macchie' },
      { en: 'Ideal substitute for white marbles', es: 'Sustituto ideal de los mármoles blancos', it: 'Sostituto ideale dei marmi bianchi' },
      { en: 'Available in bookmatched slabs', es: 'Disponible en placas bookmatched', it: 'Disponibile in lastre bookmatch' },
    ],
  },
  'calacatta-imperial-gold': {
    origin: { en: 'Noble Import / Apuan Alps', es: 'Importación Noble / Apuanos', it: 'Importazione Pregiata / Apuane' },
    colorLabel: { en: 'White & Gold Veins', es: 'Blanco y Vetas Oro', it: 'Bianco & Venature Oro' },
    description: {
      en: 'The ultimate expression of classic European luxury. A crystalline white base traversed by expressive veins in antique gold and soft grey, perfect for mirrored bookmatched compositions.',
      es: 'La máxima expresión del lujo clásico europeo. Base blanca cristalina recorrida por vetas expresivas en oro antiguo y gris suave, perfecta para composiciones bookmatched espejadas.',
      it: 'La massima espressione del lusso classico europeo. Base bianca cristallina attraversata da venature espressive in oro antico e grigio tenue, perfetta per composizioni bookmatch a specchio.',
    },
    recommendedUses: [
      { en: 'Luxury bathrooms', es: 'Baños de alto lujo', it: 'Bagni di alto lusso' },
      { en: 'Mirrored wall panels', es: 'Paneles de pared espejados', it: 'Pannelli a parete a specchio' },
      { en: 'Coffee tables and premium tops', es: 'Mesas de centro y tableros nobles', it: 'Tavolini e piani pregiati' },
      { en: 'Residential interior flooring', es: 'Pisos interiores residenciales', it: 'Pavimenti interni residenziali' },
    ],
    features: [
      { en: 'Classic imperial pattern', es: 'Patrón clásico imperial', it: 'Motivo classico imperiale' },
      { en: 'Factory resin and reinforcement mesh', es: 'Resinado y malla de refuerzo de fábrica', it: 'Resinatura e rete di rinforzo di fabbrica' },
      { en: 'Deep-penetrating waterproofing treatment', es: 'Tratamiento impermeabilizante de alta penetración', it: 'Trattamento idrorepellente ad alta penetrazione' },
    ],
  },
  'nero-marquina-prime': {
    origin: { en: 'Noble Import', es: 'Importación Noble', it: 'Importazione Pregiata' },
    colorLabel: { en: 'Deep Black & White Veins', es: 'Negro Profundo y Vetas Blancas', it: 'Nero Profondo & Venature Bianche' },
    description: {
      en: 'Absolute black with crystalline white veins cutting through the stone in bold diagonals. Magnetic contrast and imposing aesthetics for sophisticated spaces.',
      es: 'Negro absoluto con vetas blancas cristalinas que cortan la piedra en diagonales audaces. Contraste magnético y estética imponente para ambientes sofisticados.',
      it: 'Nero assoluto con venature bianche cristalline che attraversano la pietra in diagonali audaci. Contrasto magnetico ed estetica imponente per ambienti sofisticati.',
    },
    recommendedUses: [
      { en: 'Sculpted vanity tops', es: 'Encimeras de tocador esculpidas', it: 'Piani lavabo scolpiti' },
      { en: 'Fireplaces and entrance portals', es: 'Chimeneas y pórticos de entrada', it: "Camini e portali d'ingresso" },
      { en: 'Decorative niches and sideboards', es: 'Nichos decorativos y aparadores', it: 'Nicchie decorative e credenze' },
      { en: 'Corporate receptions', es: 'Recepciones corporativas', it: 'Reception aziendali' },
    ],
    features: [
      { en: 'Exceptional mirror shine', es: 'Brillo espejado excepcional', it: 'Brillantezza a specchio eccezionale' },
      { en: 'High-impact chromatic contrast', es: 'Contraste cromático de alto impacto', it: 'Contrasto cromatico di forte impatto' },
      { en: 'Guaranteed lot consistency', es: 'Homogeneidad de lote garantizada', it: 'Omogeneità di lotto garantita' },
    ],
  },
  'taj-mahal-royal': {
    origin: { en: 'Ceará / Espírito Santo, Brazil', es: 'Ceará / Espírito Santo, Brasil', it: 'Ceará / Espírito Santo, Brasile' },
    colorLabel: { en: 'Champagne & Ivory', es: 'Champán y Marfil', it: 'Champagne & Avorio' },
    description: {
      en: 'World-renowned for its soft chromatic tones of cream, ivory and golden filaments, combined with unmatched rigidity. It does not scratch or stain in daily use.',
      es: 'Reconocida mundialmente por su suavidad cromática en tonos crema, marfil y filamentos dorados, unida a una rigidez incomparable. No se raya ni se mancha en el uso diario.',
      it: "Celebre in tutto il mondo per la morbidezza cromatica nei toni crema, avorio e filamenti dorati, unita a una rigidità impareggiabile. Non si graffia e non si macchia nell'uso quotidiano.",
    },
    recommendedUses: [
      { en: 'Gourmet kitchens with no usage restrictions', es: 'Cocinas gourmet sin restricciones de uso', it: "Cucine gourmet senza limiti d'uso" },
      { en: 'High-traffic residential and commercial floors', es: 'Pisos de alto tráfico residencial y comercial', it: 'Pavimenti ad alto traffico residenziali e commerciali' },
      { en: 'Barbecues and gourmet areas', es: 'Parrillas y áreas gourmet', it: 'Barbecue e aree gourmet' },
      { en: 'Bathrooms and spas', es: 'Baños y spas', it: 'Bagni e spa' },
    ],
    features: [
      { en: 'Fully immune to citric acids and vinegars', es: 'Totalmente inmune a ácidos cítricos y vinagres', it: 'Totalmente immune ad acidi citrici e aceti' },
      { en: 'High thermal stability', es: 'Elevada estabilidad térmica', it: 'Elevata stabilità termica' },
      { en: 'Velvety texture in the brushed version', es: 'Textura aterciopelada en la versión cepillada', it: 'Texture vellutata nella versione spazzolata' },
    ],
  },
  'titanium-gold-black': {
    origin: { en: 'Espírito Santo, Brazil', es: 'Espírito Santo, Brasil', it: 'Espírito Santo, Brasile' },
    colorLabel: { en: 'Black & Cosmic Gold', es: 'Negro y Oro Cósmico', it: 'Nero & Oro Cosmico' },
    description: {
      en: 'Exotic Brazilian granite with dramatic swirls of white quartz, golden feldspar and biotite minerals over an intense black matrix. A true work of art by nature.',
      es: 'Granito exótico brasileño con remolinos dramáticos de cuarzo blanco, feldespato dorado y minerales de biotita sobre una matriz negra intensa. Una verdadera obra de arte de la naturaleza.',
      it: "Granito esotico brasiliano con vortici drammatici di quarzo bianco, feldspato dorato e minerali di biotite su una matrice nera intensa. Una vera opera d'arte della natura.",
    },
    recommendedUses: [
      { en: 'Kitchen and bar countertops', es: 'Encimeras de cocina y bares', it: 'Piani cucina e bar' },
      { en: 'Imposing waterfall islands', es: 'Islas imponentes con cascada', it: 'Isole imponenti a cascata' },
      { en: 'Stair and hall cladding', es: 'Revestimiento de escaleras y halls', it: 'Rivestimento di scale e hall' },
      { en: 'Reception floors', es: 'Pisos de recepción', it: 'Pavimenti di reception' },
    ],
    features: [
      { en: 'Expressive wave-like movement', es: 'Movimiento ondulante expresivo', it: 'Movimento ondulato espressivo' },
      { en: 'Excellent mechanical strength', es: 'Excelente resistencia mecánica', it: 'Eccellente resistenza meccanica' },
      { en: 'Unique pattern on every slab', es: 'Patrón singular en cada placa', it: 'Motivo unico su ogni lastra' },
    ],
  },
  'emerald-green-esmeralda': {
    origin: { en: 'Bahia / Espírito Santo, Brazil', es: 'Bahía / Espírito Santo, Brasil', it: 'Bahia / Espírito Santo, Brasile' },
    colorLabel: { en: 'Emerald Green & Copper', es: 'Verde Esmeralda y Cobre', it: 'Verde Smeraldo & Rame' },
    description: {
      en: 'A botanical rarity in natural stone. Deep emerald green tones with bursts of copper, gold and crystalline white. It creates exotic atmospheres of architectural high jewelry.',
      es: 'Rareza botánica en roca natural. Tonos profundos de verde esmeralda con ráfagas de cobre, oro y blanco cristalino. Crea atmósferas exóticas de alta joyería arquitectónica.',
      it: 'Una rarità botanica in pietra naturale. Profondi toni verde smeraldo con lampi di rame, oro e bianco cristallino. Crea atmosfere esotiche di alta gioielleria architettonica.',
    },
    recommendedUses: [
      { en: 'Backlit vertical panels', es: 'Paneles verticales retroiluminados', it: 'Pannelli verticali retroilluminati' },
      { en: 'Exclusive vanity tops', es: 'Encimeras de tocador exclusivas', it: 'Piani lavabo esclusivi' },
      { en: 'Fine-dining bars and restaurants', es: 'Bares y restaurantes de alta gastronomía', it: 'Bar e ristoranti di alta cucina' },
      { en: 'Signature tabletops', es: 'Tableros de mesa de autor', it: "Piani tavolo d'autore" },
    ],
    features: [
      { en: 'Extremely rare botanical green color', es: 'Coloración verde botánica rarísima', it: 'Colorazione verde botanico rarissima' },
      { en: 'Allows strategic backlighting', es: 'Permite retroiluminación estratégica', it: 'Consente retroilluminazione strategica' },
      { en: 'Collector stone for high specification', es: 'Piedra de colección y alta especificación', it: 'Pietra da collezione di alta specifica' },
    ],
  },
  'preto-sao-gabriel': {
    origin: { en: 'Espírito Santo, Brazil', es: 'Espírito Santo, Brasil', it: 'Espírito Santo, Brasile' },
    colorLabel: { en: 'Noble Granular Black', es: 'Negro Granulado Noble', it: 'Nero Granulare Pregiato' },
    description: {
      en: 'The most acclaimed and reliable Brazilian black granite in construction history. Fine, uniform grain, unbeatable structural strength and a flawless finish.',
      es: 'El granito negro brasileño más consagrado y confiable de la historia de la construcción. Granulometría fina y uniforme, resistencia estructural insuperable y acabado impecable.',
      it: "Il granito nero brasiliano più celebre e affidabile della storia dell'edilizia. Grana fine e uniforme, resistenza strutturale insuperabile e finitura impeccabile.",
    },
    recommendedUses: [
      { en: 'Large corporate and residential projects', es: 'Grandes obras corporativas y residenciales', it: 'Grandi progetti aziendali e residenziali' },
      { en: 'Countertops with excellent cost/benefit', es: 'Encimeras con excelente relación costo/beneficio', it: 'Piani con ottimo rapporto qualità/prezzo' },
      { en: 'Very high-traffic floors and stairs', es: 'Pisos y escaleras de altísimo tránsito', it: 'Pavimenti e scale ad altissimo traffico' },
      { en: 'Façades and outdoor areas', es: 'Fachadas y áreas exteriores', it: 'Facciate e aree esterne' },
    ],
    features: [
      { en: 'Tonal stability across large areas', es: 'Estabilidad tonal en grandes metrajes', it: 'Stabilità tonale su grandi superfici' },
      { en: 'Proven weather resistance', es: 'Resistencia comprobada al paso del tiempo', it: 'Resistenza al tempo comprovata' },
      { en: 'Large stock for immediate lot delivery', es: 'Amplio stock para entrega inmediata en lote', it: 'Ampio magazzino per consegna immediata a lotti' },
    ],
  },
  'travertino-navona-romano': {
    origin: { en: 'Import / Tivoli', es: 'Importación / Tívoli', it: 'Importazione / Tivoli' },
    colorLabel: { en: 'Sand Beige & Natural Pores', es: 'Beige Arena y Poros Naturales', it: 'Beige Sabbia & Pori Naturali' },
    description: {
      en: 'The ancient classic of Roman architecture. Soft cream tone with horizontal linear striations. Available resin-filled and polished or honed with open pores.',
      es: 'El clásico milenario de la arquitectura romana. Tonalidad crema suave con estrías lineales horizontales. Disponible resinado y pulido o apomazado a poro abierto.',
      it: "Il classico millenario dell'architettura romana. Tonalità crema tenue con striature lineari orizzontali. Disponibile resinato e lucidato oppure levigato a poro aperto.",
    },
    recommendedUses: [
      { en: 'Interior floors and covered terraces', es: 'Pisos interiores y terrazas cubiertas', it: 'Pavimenti interni e terrazze coperte' },
      { en: 'Pool and spa edges (honed finish)', es: 'Bordes de piscinas y spas (acabado apomazado)', it: 'Bordi piscina e spa (finitura levigata)' },
      { en: 'Classic wall cladding', es: 'Revestimientos de paredes clásicas', it: 'Rivestimenti murali classici' },
      { en: 'Fireplaces and noble staircases', es: 'Chimeneas y escaleras nobles', it: 'Camini e scalinate pregiate' },
    ],
    features: [
      { en: 'Natural thermal comfort underfoot', es: 'Confort térmico natural bajo los pies', it: 'Comfort termico naturale sotto i piedi' },
      { en: 'Clear resin or filled options', es: 'Opción con resinado transparente o estucado', it: 'Opzione con resina trasparente o stuccato' },
      { en: 'Timeless architectural aesthetics', es: 'Estética arquitectónica atemporal', it: 'Estetica architettonica senza tempo' },
    ],
  },
  'blue-roma-exotic': {
    origin: { en: 'Bahia / Espírito Santo, Brazil', es: 'Bahía / Espírito Santo, Brasil', it: 'Bahia / Espírito Santo, Brasile' },
    colorLabel: { en: 'Greyish Blue & Bronze', es: 'Azul Grisáceo y Bronce', it: 'Blu Grigiastro & Bronzo' },
    description: {
      en: 'A greyish sky-blue background interwoven with dramatic filaments in copper, rust and gold tones. One of the rarest and most striking stones in the export portfolio.',
      es: 'Fondo azul celeste grisáceo entrelazado por filamentos dramáticos en tonos cobre, óxido y oro. Una de las piedras más raras e impactantes del portafolio de exportación.',
      it: 'Fondo azzurro grigiastro intrecciato da filamenti drammatici nei toni del rame, ruggine e oro. Una delle pietre più rare e d’impatto del portfolio export.',
    },
    recommendedUses: [
      { en: 'Signature gourmet islands', es: 'Islas gourmet de autor', it: "Isole gourmet d'autore" },
      { en: 'Feature walls in living rooms and wine cellars', es: 'Paredes destacadas en living y bodegas', it: 'Pareti di design nel living e nelle cantine' },
      { en: '5-star hotel lobbies', es: 'Lobbies de hoteles 5 estrellas', it: 'Lobby di hotel 5 stelle' },
      { en: 'Monumental bathroom tops', es: 'Encimeras de baño monumentales', it: 'Piani bagno monumentali' },
    ],
    features: [
      { en: 'Unique exotic color combination', es: 'Combinación cromática exótica única', it: 'Combinazione cromatica esotica unica' },
      { en: 'Full resistance to scratches from cutlery or knives', es: 'Total resistencia a rayaduras por cubiertos o cuchillos', it: 'Totale resistenza ai graffi di posate e coltelli' },
      { en: 'Lots selected block by block', es: 'Lotes seleccionados bloque a bloque', it: 'Lotti selezionati blocco per blocco' },
    ],
  },
};

/** Translate a single shared term (finish, category label…). */
export const translateTerm = (term: string, lang: Language): string => {
  if (lang === 'pt') return term;
  return DICT[term]?.[lang] ?? term;
};

/** Returns a copy of the stone with all display texts in the requested language. */
export const localizeStone = (stone: StoneItem, lang: Language): StoneItem => {
  if (lang === 'pt') return stone;
  const l = STONE_L10N[stone.id];
  return {
    ...stone,
    categoryLabel: translateTerm(stone.categoryLabel, lang),
    finishes: stone.finishes.map((f) => translateTerm(f, lang)),
    ...(l
      ? {
          origin: l.origin[lang],
          colorLabel: l.colorLabel[lang],
          description: l.description[lang],
          recommendedUses: l.recommendedUses.map((u) => u[lang]),
          features: l.features.map((f) => f[lang]),
        }
      : {}),
  };
};
