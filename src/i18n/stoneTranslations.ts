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
  'Bruto': { en: 'Raw / Block', es: 'Bruto / Bloque', it: 'Grezzo / Blocco' },
  // Category labels
  'Quartzito Exótico': { en: 'Exotic Quartzite', es: 'Cuarcita Exótica', it: 'Quarzite Esotica' },
  'Mármore Nobre': { en: 'Noble Marble', es: 'Mármol Noble', it: 'Marmo Pregiato' },
  'Granito Exótico': { en: 'Exotic Granite', es: 'Granito Exótico', it: 'Granito Esotico' },
  'Granito Superior': { en: 'Premium Granite', es: 'Granito Superior', it: 'Granito Superiore' },
  'Mármore Travertino': { en: 'Travertine Marble', es: 'Mármol Travertino', it: 'Marmo Travertino' },
};

interface StoneL10n {
  name?: L3;
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
  'quartzite-blocks': {
    name: {
      en: 'Quartzite Blocks',
      es: 'Bloques de Cuarcita',
      it: 'Blocchi di Quarzite',
    },
    origin: {
      en: 'Espírito Santo / Bahia, Brazil',
      es: 'Espírito Santo / Bahía, Brasil',
      it: 'Espírito Santo / Bahia, Brasile',
    },
    colorLabel: {
      en: 'Emerald Green & Crystalline Grey',
      es: 'Verde Esmeralda y Gris Cristalino',
      it: 'Verde Smeraldo & Grigio Cristallino',
    },
    description: {
      en: 'Natural stones prized for their patterns, veins, and variety of colors. They can be traded as raw blocks for gangsaw cutting or as processed slabs for high-end architectural projects.',
      es: 'Rocas naturales valoradas por sus dibujos, vetas y variedad de colores. Pueden comercializarse en bloques brutos para corte en telar o en placas procesadas para proyectos de alto nivel.',
      it: 'Rocce naturali apprezzate per i loro disegni, venature e varietà di colori. Possono essere commercializzate in blocchi grezzi da segare o in lastre lavorate per progetti architettonici di pregio.',
    },
    recommendedUses: [
      {
        en: 'Block gangsaw cutting and slab processing',
        es: 'Corte en telar y procesamiento de placas',
        it: 'Segagione a telaio e lavorazione lastre',
      },
      {
        en: 'Large-scale corporate and residential projects',
        es: 'Grandes obras corporativas y residenciales',
        it: 'Grandi opere residenziali e commerciali',
      },
      {
        en: 'Gourmet islands and luxury countertops',
        es: 'Islas gourmet y encimeras de alto estándar',
        it: 'Isole gourmet e piani di alto standard',
      },
      {
        en: 'High-impact façades and decorative panels',
        es: 'Fachadas y paneles de pared de alto impacto',
        it: 'Facciate e pannelli decorativi di grande impatto',
      },
    ],
    features: [
      {
        en: 'Quarry supply available in raw blocks or finished slabs',
        es: 'Suministro de cantera disponible en bloques brutos o placas',
        it: 'Fornitura da cava disponibile in blocchi grezzi o lastre finite',
      },
      {
        en: 'Exuberant organic patterns and unique natural veins',
        es: 'Vetas y diseños orgánicos exuberantes y exclusivos',
        it: 'Venature e disegni organici esuberanti ed esclusivi',
      },
      {
        en: 'High mineral hardness (Mohs 7) and superior durability',
        es: 'Alta dureza mineral (Mohs 7) y durabilidad superior',
        it: 'Elevata durezza minerale (Mohs 7) e durabilità superiore',
      },
    ],
  },
  'natural-stone-slabs': {
    name: {
      en: 'Natural Stone Slabs',
      es: 'Placas de Rocas Naturales',
      it: 'Lastre di Pietre Naturali',
    },
    origin: {
      en: 'Espírito Santo, Brazil',
      es: 'Espírito Santo, Brasil',
      it: 'Espírito Santo, Brasile',
    },
    colorLabel: {
      en: 'Cosmic Black & White Veins',
      es: 'Negro Cósmico y Vetas Blancas',
      it: 'Nero Cosmico & Venature Bianche',
    },
    description: {
      en: 'Precision-cut and processed natural stone materials, available in polished, honed, brushed, and other finishes according to availability and project specifications.',
      es: 'Materiales cortados y procesados, con opciones de acabado pulido, apomazado, cepillado y otros, según disponibilidad y especificaciones del proyecto.',
      it: 'Materiali tagliati e lavorati, con opzioni di finitura lucida, levigata, spazzolata e altre, in base alla disponibilità e alle specifiche di progetto.',
    },
    recommendedUses: [
      {
        en: 'High-end kitchen countertops and islands',
        es: 'Encimeras de cocina e islas de alto nivel',
        it: 'Piani cucina e isole di alto livello',
      },
      {
        en: 'Vertical wall cladding and decorative panels',
        es: 'Revestimientos verticales y paneles decorativos',
        it: 'Rivestimenti verticali e pannelli decorativi',
      },
      {
        en: 'Continuous luxury commercial and residential floors',
        es: 'Pisos continuos comerciales y residenciales de lujo',
        it: 'Pavimenti continui commerciali e residenziali di lusso',
      },
      {
        en: 'Monumental fireplaces and architectural staircases',
        es: 'Chimeneas monumentales y escalinatas arquitectónicas',
        it: 'Camini monumentali e scalinate architettoniche',
      },
    ],
    features: [
      {
        en: 'Calibrated slabs with factory reinforcement resin',
        es: 'Placas calibradas con resinado y malla de refuerzo de fábrica',
        it: 'Lastre calibrate con resinatura e rete di rinforzo di fabbrica',
      },
      {
        en: 'Premium finishes: polished, honed, brushed, and satin',
        es: 'Acabados nobles: pulido, apomazado, cepillado y satinado',
        it: 'Finiture pregiate: lucido, levigato, spazzolato e satinato',
      },
      {
        en: 'Available in bookmatched mirrored compositions',
        es: 'Disponible en composiciones bookmatched espejadas',
        it: 'Disponibile in composizioni bookmatch a specchio',
      },
    ],
  },
  'marble-blocks': {
    name: {
      en: 'Marble Blocks',
      es: 'Bloques de Mármol',
      it: 'Blocchi di Marmo',
    },
    origin: {
      en: 'Espírito Santo / Paraná, Brazil & Imports',
      es: 'Espírito Santo / Paraná, Brasil e Importaciones',
      it: 'Espírito Santo / Paraná, Brasile & Importazioni',
    },
    colorLabel: {
      en: 'Pure White & Subtle Grey',
      es: 'Blanco Puro y Gris Suave',
      it: 'Bianco Puro & Grigio Delicato',
    },
    description: {
      en: 'Blocks quarried in large dimensions, featuring natural patterns, veins, and tonalities unique to each deposit. Ideal for gangsaw cutting and high-end slab processing.',
      es: 'Bloques extraídos en grandes dimensiones, con patrones naturales, vetas y tonalidades características de cada cantera. Ideales para corte en telar y procesamiento de placas de alta gama.',
      it: 'Blocchi estratti in grandi dimensioni, con disegni naturali, venature e tonalità caratteristiche di ogni cava. Ideali per la segagione a telaio e la produzione di lastre pregiate.',
    },
    recommendedUses: [
      {
        en: 'Gangsaw cutting and diamond wire processing',
        es: 'Corte en telar y procesamiento con hilo diamantado',
        it: 'Segagione a telaio e lavorazione a filo diamantato',
      },
      {
        en: 'High-end architectural and residential projects',
        es: 'Proyectos arquitectónicos y residenciales de alto nivel',
        it: 'Progetti architettonici e residenziali di alto livello',
      },
      {
        en: 'Luxury bathrooms, sculptural vanities, and basins',
        es: 'Baños de lujo, encimeras y lavabos esculturales',
        it: 'Bagni di lusso, piani lavabo e vasche scultoree',
      },
      {
        en: 'Noble cladding and mirrored bookmatched compositions',
        es: 'Revestimientos nobles y composiciones bookmatched espejadas',
        it: 'Rivestimenti pregiati e composizioni bookmatch a specchio',
      },
    ],
    features: [
      {
        en: 'First-choice square blocks in large commercial dimensions',
        es: 'Bloques cúbicos de primera selección en grandes dimensiones',
        it: 'Blocchi squadrati di prima scelta in grandi dimensioni commerciali',
      },
      {
        en: 'Pure white background with elegant natural veining',
        es: 'Fondo blanco puro con vetas naturales elegantes',
        it: 'Fondo bianco puro con venature naturali eleganti',
      },
      {
        en: 'Ready for export shipping in containers or breakbulk',
        es: 'Disponibilidad inmediata para exportación en contenedores',
        it: 'Disponibilità immediata per esportazione in container',
      },
    ],
  },
  'granite-blocks': {
    name: {
      en: 'Granite Blocks',
      es: 'Bloques de Granito',
      it: 'Blocchi di Granito',
    },
    origin: {
      en: 'Espírito Santo / Minas Gerais, Brazil',
      es: 'Espírito Santo / Minas Gerais, Brasil',
      it: 'Espírito Santo / Minas Gerais, Brasile',
    },
    colorLabel: {
      en: 'Granular Grey & Earth Tones',
      es: 'Gris Granulado y Tonos Terrosos',
      it: 'Grigio Granulare & Toni Terra',
    },
    description: {
      en: 'Large blocks quarried directly from open-pit deposits, rough-cut and intended for gangsaw processing mills and high-capacity stone processors.',
      es: 'Grandes bloques extraídos de canteras, con cortes brutos, destinados a aserraderos e industrias de procesamiento a gran escala.',
      it: 'Grandi blocchi estratti direttamente da cave a cielo aperto, a taglio grezzo, destinati a segherie e industrie di lavorazione ad alta capacità.',
    },
    recommendedUses: [
      {
        en: 'Multi-wire industrial cutting and gangsaw processing',
        es: 'Corte industrial con multifilo y telar diamantado',
        it: 'Segagione industriale con multifilo e telaio diamantato',
      },
      {
        en: 'Major infrastructure and commercial developments',
        es: 'Grandes proyectos comerciales y de infraestructura',
        it: 'Grandi opere commerciali e infrastrutture',
      },
      {
        en: 'Heavy-traffic industrial, airport and urban flooring',
        es: 'Pavimentos de alto tráfico urbano, aeroportuario e industrial',
        it: 'Pavimentazioni industriali, aeroportuali e urbane ad alto traffico',
      },
      {
        en: 'Ventilated façades and monumental architectural cladding',
        es: 'Fachadas ventiladas y revestimientos arquitectónicos monumentales',
        it: 'Facciate ventilate e rivestimenti monumentali',
      },
    ],
    features: [
      {
        en: 'Direct quarry blocks with clean commercial squaring',
        es: 'Bloques directos de cantera con escuadrado comercial limpio',
        it: 'Blocchi diretti da cava con squadratura commerciale netta',
      },
      {
        en: 'Continuous large-scale supply capacity for export',
        es: 'Capacidad de suministro continuo a gran escala para exportación',
        it: 'Fornitura continua su larga scala per export via porto',
      },
      {
        en: 'High mineral hardness (Mohs 6.5) and unmatched structural strength',
        es: 'Alta dureza mineral (Mohs 6.5) y resistencia estructural insuperable',
        it: 'Elevata durezza minerale (Mohs 6.5) e resistenza strutturale superiore',
      },
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
    name: l?.name ? l.name[lang] : stone.name,
    categoryLabel: translateTerm(stone.categoryLabel, lang),
    finishes: stone.finishes.map((f) => translateTerm(f, lang)) as any,
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
