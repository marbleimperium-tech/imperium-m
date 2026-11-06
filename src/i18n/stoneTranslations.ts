import type { StoneItem } from '../types/stone';
import type { Language } from './translations';

type L4 = { en: string; es: string; it: string; de: string };

/** Shared vocabulary (finishes, categories, common words). */
const DICT: Record<string, L4> = {
  // Finishes
  'Polido':   { en: 'Polished',     es: 'Pulido',          it: 'Lucido',        de: 'Poliert' },
  'Levigado': { en: 'Honed',        es: 'Apomazado',       it: 'Levigato',      de: 'Geschliffen' },
  'Escovado': { en: 'Brushed',      es: 'Cepillado',       it: 'Spazzolato',    de: 'Gebürstet' },
  'Acetinado':{ en: 'Satin',        es: 'Satinado',        it: 'Satinato',      de: 'Satiniert' },
  'Flamado':  { en: 'Flamed',       es: 'Flameado',        it: 'Fiammato',      de: 'Geflammt' },
  'Bruto':    { en: 'Raw / Block',  es: 'Bruto / Bloque',  it: 'Grezzo / Blocco', de: 'Roh / Block' },
  // Category labels
  'Quartzito Exótico':  { en: 'Exotic Quartzite',   es: 'Cuarcita Exótica',    it: 'Quarzite Esotica',    de: 'Exotischer Quarzit' },
  'Mármore Nobre':      { en: 'Noble Marble',        es: 'Mármol Noble',        it: 'Marmo Pregiato',      de: 'Edelmarmor' },
  'Granito Exótico':    { en: 'Exotic Granite',      es: 'Granito Exótico',     it: 'Granito Esotico',     de: 'Exotischer Granit' },
  'Granito Superior':   { en: 'Premium Granite',     es: 'Granito Superior',    it: 'Granito Superiore',   de: 'Premium-Granit' },
  'Mármore Travertino': { en: 'Travertine Marble',   es: 'Mármol Travertino',   it: 'Marmo Travertino',    de: 'Travertinmarmor' },
};

interface StoneL10n {
  name?: L4;
  origin: L4;
  colorLabel: L4;
  description: L4;
  recommendedUses: L4[];
  features: L4[];
}

const STONE_L10N: Record<string, StoneL10n> = {
  'patagonia-gold': {
    origin: {
      en: 'Bahia / Espírito Santo, Brazil',
      es: 'Bahía / Espírito Santo, Brasil',
      it: 'Bahia / Espírito Santo, Brasile',
      de: 'Bahia / Espírito Santo, Brasilien',
    },
    colorLabel: {
      en: 'Gold & Crystal',
      es: 'Dorado y Cristal',
      it: 'Oro & Cristallo',
      de: 'Gold & Kristall',
    },
    description: {
      en: 'One of the most sought-after quartzites in the world. It features translucent portions of crystalline quartz interspersed with feldspars and dramatic gold and dark veins, allowing stunning backlighting.',
      es: 'Una de las cuarcitas más deseadas del mundo. Presenta porciones translúcidas de cuarzo cristalino intercaladas con feldespatos y vetas doradas y oscuras dramáticas, permitiendo una retroiluminación impresionante.',
      it: 'Una delle quarziti più desiderate al mondo. Presenta porzioni traslucide di quarzo cristallino alternate a feldspati e drammatiche venature dorate e scure, consentendo una retroilluminazione straordinaria.',
      de: 'Einer der begehrtesten Quarzite der Welt. Er weist transluzente Bereiche aus kristallinem Quarz auf, durchzogen von Feldspäten sowie dramatischen Gold- und Dunkeladern – ideal für spektakuläre Hinterleuchtung.',
    },
    recommendedUses: [
      { en: 'Backlit gourmet islands',       es: 'Islas gourmet retroiluminadas',       it: 'Isole gourmet retroilluminate',         de: 'Hinterleuchtete Gourmet-Inseln' },
      { en: 'Decorative living room panels', es: 'Paneles decorativos de living',       it: 'Pannelli decorativi per il living',      de: 'Dekorative Wohnzimmerpaneele' },
      { en: 'High-end powder rooms',         es: 'Tocadores de alto nivel',             it: 'Bagni ospiti di alto livello',          de: 'Exklusive Gäste-WCs' },
      { en: 'Luxury fireplaces',             es: 'Chimeneas de lujo',                   it: 'Camini di lusso',                       de: 'Luxus-Kamine' },
    ],
    features: [
      { en: 'Translucent under LED light',                      es: 'Translúcido a la luz LED',                      it: 'Traslucido alla luce LED',                       de: 'Transluzent unter LED-Licht' },
      { en: 'Extreme resistance to acids and scratches',        es: 'Resistencia extrema a ácidos y rayaduras',      it: 'Resistenza estrema ad acidi e graffi',            de: 'Extreme Beständigkeit gegen Säuren und Kratzer' },
      { en: 'Pure quartz mineral formations',                   es: 'Formaciones minerales de cuarzo puro',          it: 'Formazioni minerali di quarzo puro',             de: 'Reinquarz-Mineralformationen' },
    ],
  },

  'mont-blanc-supreme': {
    origin: {
      en: 'Espírito Santo, Brazil',
      es: 'Espírito Santo, Brasil',
      it: 'Espírito Santo, Brasile',
      de: 'Espírito Santo, Brasilien',
    },
    colorLabel: {
      en: 'Snow White & Grey',
      es: 'Blanco Níveo y Gris',
      it: 'Bianco Neve & Grigio',
      de: 'Schneeweiß & Grau',
    },
    description: {
      en: 'Timeless minimalist elegance. A pure white background with light grey and graphite veins in organic flow, combining the aesthetic beauty of marble with the indestructible hardness of natural quartz.',
      es: 'Elegancia minimalista atemporal. Fondo blanco puro con vetas gris claro y grafito en flujo orgánico, uniendo la belleza estética del mármol con la dureza indestructible del cuarzo natural.',
      it: 'Eleganza minimalista senza tempo. Fondo bianco puro con venature grigio chiaro e grafite in flusso organico, che unisce la bellezza del marmo alla durezza indistruttibile del quarzo naturale.',
      de: 'Zeitlose minimalistische Eleganz. Reinweißer Grund mit hellgrauen und Graphitadern in organischem Fluss – vereint die Ästhetik von Marmor mit der unzerstörbaren Härte von Naturquarz.',
    },
    recommendedUses: [
      { en: 'Heavy-use kitchen countertops', es: 'Encimeras de cocina de uso intenso', it: 'Piani cucina ad uso intensivo',       de: 'Stark beanspruchte Küchenarbeitsplatten' },
      { en: 'Continuous premium flooring',   es: 'Pisos nobles continuos',            it: 'Pavimenti pregiati continui',         de: 'Durchgehende Edelbodenanlagen' },
      { en: 'Bathroom wall cladding',        es: 'Revestimientos verticales de baño', it: 'Rivestimenti verticali per bagni',    de: 'Badezimmer-Wandverkleidungen' },
      { en: 'Ventilated façades',            es: 'Fachadas ventiladas',               it: 'Facciate ventilate',                  de: 'Hinterlüftete Fassaden' },
    ],
    features: [
      { en: 'Very high stain resistance',           es: 'Altísima resistencia a manchas',               it: 'Altissima resistenza alle macchie',      de: 'Sehr hohe Fleckenbeständigkeit' },
      { en: 'Ideal substitute for white marbles',   es: 'Sustituto ideal de los mármoles blancos',      it: 'Sostituto ideale dei marmi bianchi',     de: 'Idealer Ersatz für weißen Marmor' },
      { en: 'Available in bookmatched slabs',       es: 'Disponible en placas bookmatched',             it: 'Disponibile in lastre bookmatch',         de: 'Erhältlich als Bookmatch-Platten' },
    ],
  },

  'calacatta-imperial-gold': {
    origin: {
      en: 'Noble Import / Apuan Alps',
      es: 'Importación Noble / Apuanos',
      it: 'Importazione Pregiata / Apuane',
      de: 'Edle Importware / Apuanische Alpen',
    },
    colorLabel: {
      en: 'White & Gold Veins',
      es: 'Blanco y Vetas Oro',
      it: 'Bianco & Venature Oro',
      de: 'Weiß & Goldadern',
    },
    description: {
      en: 'The ultimate expression of classic European luxury. A crystalline white base traversed by expressive veins in antique gold and soft grey, perfect for mirrored bookmatched compositions.',
      es: 'La máxima expresión del lujo clásico europeo. Base blanca cristalina recorrida por vetas expresivas en oro antiguo y gris suave, perfecta para composiciones bookmatched espejadas.',
      it: 'La massima espressione del lusso classico europeo. Base bianca cristallina attraversata da venature espressive in oro antico e grigio tenue, perfetta per composizioni bookmatch a specchio.',
      de: 'Der Inbegriff europäischen Klassikluxus. Kristallweißer Grund, durchzogen von ausdrucksstarken Adern in Antikgold und Zartgrau – ideal für gespiegelte Bookmatch-Kompositionen.',
    },
    recommendedUses: [
      { en: 'Luxury bathrooms',                 es: 'Baños de alto lujo',                it: 'Bagni di alto lusso',             de: 'Luxusbadezimmer' },
      { en: 'Mirrored wall panels',             es: 'Paneles de pared espejados',        it: 'Pannelli a parete a specchio',    de: 'Gespiegelte Wandpaneele' },
      { en: 'Coffee tables and premium tops',   es: 'Mesas de centro y tableros nobles', it: 'Tavolini e piani pregiati',       de: 'Couchtische und edle Tischplatten' },
      { en: 'Residential interior flooring',   es: 'Pisos interiores residenciales',    it: 'Pavimenti interni residenziali',  de: 'Wohnräume – Innenboden' },
    ],
    features: [
      { en: 'Classic imperial pattern',                     es: 'Patrón clásico imperial',                   it: 'Motivo classico imperiale',              de: 'Klassisches Imperiales Muster' },
      { en: 'Factory resin and reinforcement mesh',         es: 'Resinado y malla de refuerzo de fábrica',   it: 'Resinatura e rete di rinforzo di fabbrica', de: 'Werks-Harzung und Verstärkungsgewebe' },
      { en: 'Deep-penetrating waterproofing treatment',     es: 'Tratamiento impermeabilizante de alta penetración', it: 'Trattamento idrorepellente ad alta penetrazione', de: 'Tiefenimprägnierendes Hydrophobierungsmittel' },
    ],
  },

  'nero-marquina-prime': {
    origin: {
      en: 'Noble Import',
      es: 'Importación Noble',
      it: 'Importazione Pregiata',
      de: 'Edle Importware',
    },
    colorLabel: {
      en: 'Deep Black & White Veins',
      es: 'Negro Profundo y Vetas Blancas',
      it: 'Nero Profondo & Venature Bianche',
      de: 'Tiefes Schwarz & Weiße Adern',
    },
    description: {
      en: 'Absolute black with crystalline white veins cutting through the stone in bold diagonals. Magnetic contrast and imposing aesthetics for sophisticated spaces.',
      es: 'Negro absoluto con vetas blancas cristalinas que cortan la piedra en diagonales audaces. Contraste magnético y estética imponente para ambientes sofisticados.',
      it: 'Nero assoluto con venature bianche cristalline che attraversano la pietra in diagonali audaci. Contrasto magnetico ed estetica imponente per ambienti sofisticati.',
      de: 'Absolutes Schwarz mit kristallweißen Adern in kühnen Diagonalen. Magnetischer Kontrast und imposante Ästhetik für anspruchsvolle Räume.',
    },
    recommendedUses: [
      { en: 'Sculpted vanity tops',               es: 'Encimeras de tocador esculpidas',    it: 'Piani lavabo scolpiti',              de: 'Skulpturale Waschtischplatten' },
      { en: 'Fireplaces and entrance portals',    es: 'Chimeneas y pórticos de entrada',    it: "Camini e portali d'ingresso",         de: 'Kamine und Eingangsportale' },
      { en: 'Decorative niches and sideboards',  es: 'Nichos decorativos y aparadores',    it: 'Nicchie decorative e credenze',      de: 'Dekorative Nischen und Sideboards' },
      { en: 'Corporate receptions',              es: 'Recepciones corporativas',            it: 'Reception aziendali',                de: 'Unternehmensempfangsbereiche' },
    ],
    features: [
      { en: 'Exceptional mirror shine',               es: 'Brillo espejado excepcional',            it: 'Brillantezza a specchio eccezionale',    de: 'Außergewöhnlicher Spiegelglanz' },
      { en: 'High-impact chromatic contrast',         es: 'Contraste cromático de alto impacto',    it: 'Contrasto cromatico di forte impatto',   de: 'Farbkontrast mit starker Wirkung' },
      { en: 'Guaranteed lot consistency',            es: 'Homogeneidad de lote garantizada',       it: 'Omogeneità di lotto garantita',          de: 'Garantierte Chargenkonsistenz' },
    ],
  },

  'taj-mahal-royal': {
    origin: {
      en: 'Ceará / Espírito Santo, Brazil',
      es: 'Ceará / Espírito Santo, Brasil',
      it: 'Ceará / Espírito Santo, Brasile',
      de: 'Ceará / Espírito Santo, Brasilien',
    },
    colorLabel: {
      en: 'Champagne & Ivory',
      es: 'Champán y Marfil',
      it: 'Champagne & Avorio',
      de: 'Champagner & Elfenbein',
    },
    description: {
      en: 'World-renowned for its soft chromatic tones of cream, ivory and golden filaments, combined with unmatched rigidity. It does not scratch or stain in daily use.',
      es: 'Reconocida mundialmente por su suavidad cromática en tonos crema, marfil y filamentos dorados, unida a una rigidez incomparable. No se raya ni se mancha en el uso diario.',
      it: "Celebre in tutto il mondo per la morbidezza cromatica nei toni crema, avorio e filamenti dorati, unita a una rigidità impareggiabile. Non si graffia e non si macchia nell'uso quotidiano.",
      de: 'Weltweit bekannt für seine sanften Crème-, Elfenbein- und Goldfilamenttöne bei unvergleichlicher Härte. Keine Kratzer, keine Flecken im täglichen Gebrauch.',
    },
    recommendedUses: [
      { en: 'Gourmet kitchens with no usage restrictions', es: 'Cocinas gourmet sin restricciones de uso',           it: "Cucine gourmet senza limiti d'uso",                       de: 'Gourmetküchen ohne Nutzungseinschränkungen' },
      { en: 'High-traffic residential and commercial floors', es: 'Pisos de alto tráfico residencial y comercial',  it: 'Pavimenti ad alto traffico residenziali e commerciali',  de: 'Stark frequentierte Wohn- und Gewerbeböden' },
      { en: 'Barbecues and gourmet areas',                 es: 'Parrillas y áreas gourmet',                        it: 'Barbecue e aree gourmet',                                de: 'Grillbereiche und Gourmet-Zonen' },
      { en: 'Bathrooms and spas',                          es: 'Baños y spas',                                     it: 'Bagni e spa',                                            de: 'Badezimmer und Spas' },
    ],
    features: [
      { en: 'Fully immune to citric acids and vinegars', es: 'Totalmente inmune a ácidos cítricos y vinagres', it: 'Totalmente immune ad acidi citrici e aceti', de: 'Vollständig beständig gegen Zitronensäuren und Essig' },
      { en: 'High thermal stability',                    es: 'Elevada estabilidad térmica',                   it: 'Elevata stabilità termica',                 de: 'Hohe thermische Stabilität' },
      { en: 'Velvety texture in the brushed version',   es: 'Textura aterciopelada en la versión cepillada', it: 'Texture vellutata nella versione spazzolata', de: 'Samtartige Textur in der gebürsteten Variante' },
    ],
  },

  'titanium-gold-black': {
    origin: {
      en: 'Espírito Santo, Brazil',
      es: 'Espírito Santo, Brasil',
      it: 'Espírito Santo, Brasile',
      de: 'Espírito Santo, Brasilien',
    },
    colorLabel: {
      en: 'Black & Cosmic Gold',
      es: 'Negro y Oro Cósmico',
      it: 'Nero & Oro Cosmico',
      de: 'Schwarz & Kosmisches Gold',
    },
    description: {
      en: 'Exotic Brazilian granite with dramatic swirls of white quartz, golden feldspar and biotite minerals over an intense black matrix. A true work of art by nature.',
      es: 'Granito exótico brasileño con remolinos dramáticos de cuarzo blanco, feldespato dorado y minerales de biotita sobre una matriz negra intensa. Una verdadera obra de arte de la naturaleza.',
      it: "Granito esotico brasiliano con vortici drammatici di quarzo bianco, feldspato dorato e minerali di biotite su una matrice nera intensa. Una vera opera d'arte della natura.",
      de: 'Exotischer brasilianischer Granit mit dramatischen Wirbeln aus weißem Quarz, goldenem Feldspat und Biotitmineralen auf intensiv schwarzer Matrix. Ein wahres Naturkunstwerk.',
    },
    recommendedUses: [
      { en: 'Kitchen and bar countertops',      es: 'Encimeras de cocina y bares',          it: 'Piani cucina e bar',                    de: 'Küchen- und Bartheken' },
      { en: 'Imposing waterfall islands',       es: 'Islas imponentes con cascada',         it: 'Isole imponenti a cascata',             de: 'Imposante Wasserfall-Inseln' },
      { en: 'Stair and hall cladding',          es: 'Revestimiento de escaleras y halls',   it: 'Rivestimento di scale e hall',          de: 'Treppen- und Flurverkleidungen' },
      { en: 'Reception floors',                 es: 'Pisos de recepción',                   it: 'Pavimenti di reception',                de: 'Empfangsbodenbeläge' },
    ],
    features: [
      { en: 'Expressive wave-like movement',    es: 'Movimiento ondulante expresivo',       it: 'Movimento ondulato espressivo',         de: 'Ausdrucksstarke Wellenbewegung' },
      { en: 'Excellent mechanical strength',    es: 'Excelente resistencia mecánica',       it: 'Eccellente resistenza meccanica',       de: 'Hervorragende mechanische Festigkeit' },
      { en: 'Unique pattern on every slab',     es: 'Patrón singular en cada placa',        it: 'Motivo unico su ogni lastra',           de: 'Einzigartiges Muster auf jeder Platte' },
    ],
  },

  'emerald-green-esmeralda': {
    origin: {
      en: 'Bahia / Espírito Santo, Brazil',
      es: 'Bahía / Espírito Santo, Brasil',
      it: 'Bahia / Espírito Santo, Brasile',
      de: 'Bahia / Espírito Santo, Brasilien',
    },
    colorLabel: {
      en: 'Emerald Green & Copper',
      es: 'Verde Esmeralda y Cobre',
      it: 'Verde Smeraldo & Rame',
      de: 'Smaragdgrün & Kupfer',
    },
    description: {
      en: 'A botanical rarity in natural stone. Deep emerald green tones with bursts of copper, gold and crystalline white. It creates exotic atmospheres of architectural high jewelry.',
      es: 'Rareza botánica en roca natural. Tonos profundos de verde esmeralda con ráfagas de cobre, oro y blanco cristalino. Crea atmósferas exóticas de alta joyería arquitectónica.',
      it: 'Una rarità botanica in pietra naturale. Profondi toni verde smeraldo con lampi di rame, oro e bianco cristallino. Crea atmosfere esotiche di alta gioielleria architettonica.',
      de: 'Eine botanische Rarität in Naturstein. Tiefe Smaragdgrüntöne mit Kupfer-, Gold- und Kristallweißakzenten. Schafft exotische Atmosphären architektonischen Hochschmucks.',
    },
    recommendedUses: [
      { en: 'Backlit vertical panels',         es: 'Paneles verticales retroiluminados',    it: 'Pannelli verticali retroilluminati',    de: 'Hinterleuchtete Vertikalpaneele' },
      { en: 'Exclusive vanity tops',           es: 'Encimeras de tocador exclusivas',       it: 'Piani lavabo esclusivi',                de: 'Exklusive Waschtischplatten' },
      { en: 'Fine-dining bars and restaurants',es: 'Bares y restaurantes de alta gastronomía', it: 'Bar e ristoranti di alta cucina',   de: 'Gourmet-Bars und Spitzenrestaurants' },
      { en: 'Signature tabletops',             es: 'Tableros de mesa de autor',             it: "Piani tavolo d'autore",                de: 'Designtischplatten' },
    ],
    features: [
      { en: 'Extremely rare botanical green color', es: 'Coloración verde botánica rarísima',    it: 'Colorazione verde botanico rarissima',  de: 'Äußerst seltenes botanisches Grün' },
      { en: 'Allows strategic backlighting',        es: 'Permite retroiluminación estratégica',  it: 'Consente retroilluminazione strategica', de: 'Ermöglicht strategische Hinterleuchtung' },
      { en: 'Collector stone for high specification',es: 'Piedra de colección y alta especificación', it: 'Pietra da collezione di alta specifica', de: 'Sammlungsstein für höchste Anforderungen' },
    ],
  },

  'preto-sao-gabriel': {
    origin: {
      en: 'Espírito Santo, Brazil',
      es: 'Espírito Santo, Brasil',
      it: 'Espírito Santo, Brasile',
      de: 'Espírito Santo, Brasilien',
    },
    colorLabel: {
      en: 'Noble Granular Black',
      es: 'Negro Granulado Noble',
      it: 'Nero Granulare Pregiato',
      de: 'Edles Körnerschwarz',
    },
    description: {
      en: 'The most acclaimed and reliable Brazilian black granite in construction history. Fine, uniform grain, unbeatable structural strength and a flawless finish.',
      es: 'El granito negro brasileño más consagrado y confiable de la historia de la construcción. Granulometría fina y uniforme, resistencia estructural insuperable y acabado impecable.',
      it: "Il granito nero brasiliano più celebre e affidabile della storia dell'edilizia. Grana fine e uniforme, resistenza strutturale insuperabile e finitura impeccabile.",
      de: 'Der bekannteste und zuverlässigste schwarze Granit Brasiliens in der Baugeschichte. Feines, gleichmäßiges Korn, unübertroffene Strukturfestigkeit und tadellose Oberfläche.',
    },
    recommendedUses: [
      { en: 'Large corporate and residential projects',   es: 'Grandes obras corporativas y residenciales',  it: 'Grandi progetti aziendali e residenziali',  de: 'Große Gewerbe- und Wohnbauprojekte' },
      { en: 'Countertops with excellent cost/benefit',   es: 'Encimeras con excelente relación costo/beneficio', it: 'Piani con ottimo rapporto qualità/prezzo', de: 'Arbeitsplatten mit hervorragendem Preis-Leistungs-Verhältnis' },
      { en: 'Very high-traffic floors and stairs',       es: 'Pisos y escaleras de altísimo tránsito',      it: 'Pavimenti e scale ad altissimo traffico',   de: 'Stark frequentierte Böden und Treppen' },
      { en: 'Façades and outdoor areas',                 es: 'Fachadas y áreas exteriores',                 it: 'Facciate e aree esterne',                   de: 'Fassaden und Außenbereiche' },
    ],
    features: [
      { en: 'Tonal stability across large areas',         es: 'Estabilidad tonal en grandes metrajes',         it: 'Stabilità tonale su grandi superfici',       de: 'Tonale Beständigkeit über große Flächen' },
      { en: 'Proven weather resistance',                  es: 'Resistencia comprobada al paso del tiempo',     it: 'Resistenza al tempo comprovata',             de: 'Nachgewiesene Witterungsbeständigkeit' },
      { en: 'Large stock for immediate lot delivery',     es: 'Amplio stock para entrega inmediata en lote',   it: 'Ampio magazzino per consegna immediata a lotti', de: 'Großes Lager für sofortige Chargenlieferung' },
    ],
  },

  'travertino-navona-romano': {
    origin: {
      en: 'Import / Tivoli',
      es: 'Importación / Tívoli',
      it: 'Importazione / Tivoli',
      de: 'Importware / Tivoli',
    },
    colorLabel: {
      en: 'Sand Beige & Natural Pores',
      es: 'Beige Arena y Poros Naturales',
      it: 'Beige Sabbia & Pori Naturali',
      de: 'Sandbeige & Natürliche Poren',
    },
    description: {
      en: 'The ancient classic of Roman architecture. Soft cream tone with horizontal linear striations. Available resin-filled and polished or honed with open pores.',
      es: 'El clásico milenario de la arquitectura romana. Tonalidad crema suave con estrías lineales horizontales. Disponible resinado y pulido o apomazado a poro abierto.',
      it: "Il classico millenario dell'architettura romana. Tonalità crema tenue con striature lineari orizzontali. Disponibile resinato e lucidato oppure levigato a poro aperto.",
      de: 'Der jahrtausendealte Klassiker der römischen Architektur. Zarte Cremtönung mit horizontalen Streifungen. Erhältlich gefüllt und poliert oder geschliffen mit offenen Poren.',
    },
    recommendedUses: [
      { en: 'Interior floors and covered terraces',       es: 'Pisos interiores y terrazas cubiertas',          it: 'Pavimenti interni e terrazze coperte',         de: 'Innenböden und überdachte Terrassen' },
      { en: 'Pool and spa edges (honed finish)',          es: 'Bordes de piscinas y spas (acabado apomazado)',   it: 'Bordi piscina e spa (finitura levigata)',       de: 'Pool- und Spa-Einfassungen (geschliffen)' },
      { en: 'Classic wall cladding',                     es: 'Revestimientos de paredes clásicas',             it: 'Rivestimenti murali classici',                 de: 'Klassische Wandverkleidungen' },
      { en: 'Fireplaces and noble staircases',           es: 'Chimeneas y escaleras nobles',                   it: 'Camini e scalinate pregiate',                  de: 'Kamine und edle Treppen' },
    ],
    features: [
      { en: 'Natural thermal comfort underfoot',    es: 'Confort térmico natural bajo los pies',      it: 'Comfort termico naturale sotto i piedi',   de: 'Natürlicher Wärmekomfort unter den Füßen' },
      { en: 'Clear resin or filled options',        es: 'Opción con resinado transparente o estucado', it: 'Opzione con resina trasparente o stuccato', de: 'Klare Harzfüllung oder Verpachtungsoption' },
      { en: 'Timeless architectural aesthetics',   es: 'Estética arquitectónica atemporal',           it: 'Estetica architettonica senza tempo',       de: 'Zeitlose Architekturästhetik' },
    ],
  },

  'blue-roma-exotic': {
    origin: {
      en: 'Bahia / Espírito Santo, Brazil',
      es: 'Bahía / Espírito Santo, Brasil',
      it: 'Bahia / Espírito Santo, Brasile',
      de: 'Bahia / Espírito Santo, Brasilien',
    },
    colorLabel: {
      en: 'Greyish Blue & Bronze',
      es: 'Azul Grisáceo y Bronce',
      it: 'Blu Grigiastro & Bronzo',
      de: 'Graublau & Bronze',
    },
    description: {
      en: 'A greyish sky-blue background interwoven with dramatic filaments in copper, rust and gold tones. One of the rarest and most striking stones in the export portfolio.',
      es: 'Fondo azul celeste grisáceo entrelazado por filamentos dramáticos en tonos cobre, óxido y oro. Una de las piedras más raras e impactantes del portafolio de exportación.',
      it: "Fondo azzurro grigiastro intrecciato da filamenti drammatici nei toni del rame, ruggine e oro. Una delle pietre più rare e d'impatto del portfolio export.",
      de: 'Graublauer Himmelshintergrund, durchwoben von dramatischen Filamenten in Kupfer-, Rost- und Goldtönen. Einer der seltensten und eindrucksvollsten Steine des Exportportfolios.',
    },
    recommendedUses: [
      { en: 'Signature gourmet islands',                        es: 'Islas gourmet de autor',                      it: "Isole gourmet d'autore",                       de: 'Design-Gourmet-Inseln' },
      { en: 'Feature walls in living rooms and wine cellars',  es: 'Paredes destacadas en living y bodegas',       it: 'Pareti di design nel living e nelle cantine',  de: 'Akzentwände in Wohnräumen und Weinkellern' },
      { en: '5-star hotel lobbies',                            es: 'Lobbies de hoteles 5 estrellas',               it: 'Lobby di hotel 5 stelle',                      de: '5-Sterne-Hotel-Lobbys' },
      { en: 'Monumental bathroom tops',                        es: 'Encimeras de baño monumentales',               it: 'Piani bagno monumentali',                      de: 'Monumentale Badezimmerplatten' },
    ],
    features: [
      { en: 'Unique exotic color combination',                       es: 'Combinación cromática exótica única',              it: 'Combinazione cromatica esotica unica',           de: 'Einzigartige exotische Farbkombination' },
      { en: 'Full resistance to scratches from cutlery or knives',  es: 'Total resistencia a rayaduras por cubiertos o cuchillos', it: 'Totale resistenza ai graffi di posate e coltelli', de: 'Vollständige Kratzfestigkeit gegen Besteck und Messer' },
      { en: 'Lots selected block by block',                          es: 'Lotes seleccionados bloque a bloque',              it: 'Lotti selezionati blocco per blocco',            de: 'Chargen Block für Block selektiert' },
    ],
  },

  'quartzite-blocks': {
    name: {
      en: 'Quartzite Blocks',
      es: 'Bloques de Cuarcita',
      it: 'Blocchi di Quarzite',
      de: 'Quarzitblöcke',
    },
    origin: {
      en: 'Espírito Santo / Bahia, Brazil',
      es: 'Espírito Santo / Bahía, Brasil',
      it: 'Espírito Santo / Bahia, Brasile',
      de: 'Espírito Santo / Bahia, Brasilien',
    },
    colorLabel: {
      en: 'Emerald Green & Crystalline Grey',
      es: 'Verde Esmeralda y Gris Cristalino',
      it: 'Verde Smeraldo & Grigio Cristallino',
      de: 'Smaragdgrün & Kristallgrau',
    },
    description: {
      en: 'Natural stones prized for their patterns, veins, and variety of colors. They can be traded as raw blocks for gangsaw cutting or as processed slabs for high-end architectural projects.',
      es: 'Rocas naturales valoradas por sus dibujos, vetas y variedad de colores. Pueden comercializarse en bloques brutos para corte en telar o en placas procesadas para proyectos de alto nivel.',
      it: 'Rocce naturali apprezzate per i loro disegni, venature e varietà di colori. Possono essere commercializzate in blocchi grezzi da segare o in lastre lavorate per progetti architettonici di pregio.',
      de: 'Natursteine, die für ihre Muster, Adern und Farbenvielfalt geschätzt werden. Erhältlich als Rohblöcke für die Gatterung oder als veredelte Platten für anspruchsvolle Architekturprojekte.',
    },
    recommendedUses: [
      { en: 'Block gangsaw cutting and slab processing',         es: 'Corte en telar y procesamiento de placas',        it: 'Segagione a telaio e lavorazione lastre',          de: 'Blockgatterung und Plattenverarbeitung' },
      { en: 'Large-scale corporate and residential projects',   es: 'Grandes obras corporativas y residenciales',      it: 'Grandi opere residenziali e commerciali',          de: 'Groß angelegte Gewerbe- und Wohnbauprojekte' },
      { en: 'Gourmet islands and luxury countertops',           es: 'Islas gourmet y encimeras de alto estándar',      it: 'Isole gourmet e piani di alto standard',           de: 'Gourmet-Inseln und Luxus-Arbeitsplatten' },
      { en: 'High-impact façades and decorative panels',        es: 'Fachadas y paneles de pared de alto impacto',     it: 'Facciate e pannelli decorativi di grande impatto', de: 'Wirkungsstarke Fassaden und Dekorpaneele' },
    ],
    features: [
      { en: 'Quarry supply available in raw blocks or finished slabs', es: 'Suministro de cantera disponible en bloques brutos o placas', it: 'Fornitura da cava disponibile in blocchi grezzi o lastre finite', de: 'Steinbruchlieferung als Rohblöcke oder Fertigplatten' },
      { en: 'Exuberant organic patterns and unique natural veins',      es: 'Vetas y diseños orgánicos exuberantes y exclusivos',          it: 'Venature e disegni organici esuberanti ed esclusivi',           de: 'Üppige organische Muster und einzigartige Naturmaserungen' },
      { en: 'High mineral hardness (Mohs 7) and superior durability',  es: 'Alta dureza mineral (Mohs 7) y durabilidad superior',          it: 'Elevata durezza minerale (Mohs 7) e durabilità superiore',      de: 'Hohe Mineralfestigkeit (Mohs 7) und überlegene Haltbarkeit' },
    ],
  },

  'natural-stone-slabs': {
    name: {
      en: 'Natural Stone Slabs',
      es: 'Placas de Rocas Naturales',
      it: 'Lastre di Pietre Naturali',
      de: 'Natursteinplatten',
    },
    origin: {
      en: 'Espírito Santo, Brazil',
      es: 'Espírito Santo, Brasil',
      it: 'Espírito Santo, Brasile',
      de: 'Espírito Santo, Brasilien',
    },
    colorLabel: {
      en: 'Cosmic Black & White Veins',
      es: 'Negro Cósmico y Vetas Blancas',
      it: 'Nero Cosmico & Venature Bianche',
      de: 'Kosmisches Schwarz & Weiße Adern',
    },
    description: {
      en: 'Precision-cut and processed natural stone materials, available in polished, honed, brushed, and other finishes according to availability and project specifications.',
      es: 'Materiales cortados y procesados, con opciones de acabado pulido, apomazado, cepillado y otros, según disponibilidad y especificaciones del proyecto.',
      it: 'Materiali tagliati e lavorati, con opzioni di finitura lucida, levigata, spazzolata e altre, in base alla disponibilità e alle specifiche di progetto.',
      de: 'Präzisionsgeschnittene und veredelte Natursteinmaterialien, erhältlich in polierter, geschliffener, gebürsteter und weiteren Oberflächen je nach Verfügbarkeit und Projektspezifikation.',
    },
    recommendedUses: [
      { en: 'High-end kitchen countertops and islands',          es: 'Encimeras de cocina e islas de alto nivel',         it: 'Piani cucina e isole di alto livello',              de: 'Hochwertige Küchenarbeitsplatten und Inseln' },
      { en: 'Vertical wall cladding and decorative panels',     es: 'Revestimientos verticales y paneles decorativos',   it: 'Rivestimenti verticali e pannelli decorativi',      de: 'Vertikale Wandverkleidungen und Dekorpaneele' },
      { en: 'Continuous luxury commercial and residential floors', es: 'Pisos continuos comerciales y residenciales de lujo', it: 'Pavimenti continui commerciali e residenziali di lusso', de: 'Durchgehende Luxusböden im Gewerbe und Wohnbereich' },
      { en: 'Monumental fireplaces and architectural staircases', es: 'Chimeneas monumentales y escalinatas arquitectónicas', it: 'Camini monumentali e scalinate architettoniche',  de: 'Monumentale Kamine und Architekturtreppen' },
    ],
    features: [
      { en: 'Calibrated slabs with factory reinforcement resin',  es: 'Placas calibradas con resinado y malla de refuerzo de fábrica', it: 'Lastre calibrate con resinatura e rete di rinforzo di fabbrica', de: 'Kalibrierte Platten mit Werks-Harzung und Verstärkungsgewebe' },
      { en: 'Premium finishes: polished, honed, brushed, and satin', es: 'Acabados nobles: pulido, apomazado, cepillado y satinado', it: 'Finiture pregiate: lucido, levigato, spazzolato e satinato', de: 'Edle Oberflächen: poliert, geschliffen, gebürstet und satiniert' },
      { en: 'Available in bookmatched mirrored compositions',     es: 'Disponible en composiciones bookmatched espejadas',  it: 'Disponibile in composizioni bookmatch a specchio',  de: 'Erhältlich als gespiegelte Bookmatch-Kompositionen' },
    ],
  },

  'marble-blocks': {
    name: {
      en: 'Marble Blocks',
      es: 'Bloques de Mármol',
      it: 'Blocchi di Marmo',
      de: 'Marmorblöcke',
    },
    origin: {
      en: 'Espírito Santo / Paraná, Brazil & Imports',
      es: 'Espírito Santo / Paraná, Brasil e Importaciones',
      it: 'Espírito Santo / Paraná, Brasile & Importazioni',
      de: 'Espírito Santo / Paraná, Brasilien & Importware',
    },
    colorLabel: {
      en: 'Pure White & Subtle Grey',
      es: 'Blanco Puro y Gris Suave',
      it: 'Bianco Puro & Grigio Delicato',
      de: 'Reinweiß & Zartes Grau',
    },
    description: {
      en: 'Blocks quarried in large dimensions, featuring natural patterns, veins, and tonalities unique to each deposit. Ideal for gangsaw cutting and high-end slab processing.',
      es: 'Bloques extraídos en grandes dimensiones, con patrones naturales, vetas y tonalidades características de cada cantera. Ideales para corte en telar y procesamiento de placas de alta gama.',
      it: 'Blocchi estratti in grandi dimensioni, con disegni naturali, venature e tonalità caratteristiche di ogni cava. Ideali per la segagione a telaio e la produzione di lastre pregiate.',
      de: 'In großen Abmessungen gewonnene Blöcke mit natürlichen Mustern, Adern und lagerspezifischen Farbgebungen. Ideal für Gatterung und hochwertige Plattenverarbeitung.',
    },
    recommendedUses: [
      { en: 'Gangsaw cutting and diamond wire processing',       es: 'Corte en telar y procesamiento con hilo diamantado', it: 'Segagione a telaio e lavorazione a filo diamantato', de: 'Gatterung und Diamantdrahtsägen' },
      { en: 'High-end architectural and residential projects',  es: 'Proyectos arquitectónicos y residenciales de alto nivel', it: 'Progetti architettonici e residenziali di alto livello', de: 'Hochwertige Architektur- und Wohnbauprojekte' },
      { en: 'Luxury bathrooms, sculptural vanities, and basins', es: 'Baños de lujo, encimeras y lavabos esculturales', it: 'Bagni di lusso, piani lavabo e vasche scultoree', de: 'Luxusbäder, skulpturale Waschtische und Becken' },
      { en: 'Noble cladding and mirrored bookmatched compositions', es: 'Revestimientos nobles y composiciones bookmatched espejadas', it: 'Rivestimenti pregiati e composizioni bookmatch a specchio', de: 'Edle Verkleidungen und gespiegelte Bookmatch-Kompositionen' },
    ],
    features: [
      { en: 'First-choice square blocks in large commercial dimensions', es: 'Bloques cúbicos de primera selección en grandes dimensiones', it: 'Blocchi squadrati di prima scelta in grandi dimensioni commerciali', de: 'Erstklassige Quaderblöcke in großen Handelsformaten' },
      { en: 'Pure white background with elegant natural veining',        es: 'Fondo blanco puro con vetas naturales elegantes',              it: 'Fondo bianco puro con venature naturali eleganti',               de: 'Reinweißer Grund mit eleganter Naturmaserung' },
      { en: 'Ready for export shipping in containers or breakbulk',     es: 'Disponibilidad inmediata para exportación en contenedores',    it: 'Disponibilità immediata per esportazione in container',          de: 'Exportbereit per Container oder Stückgut' },
    ],
  },

  'granite-blocks': {
    name: {
      en: 'Granite Blocks',
      es: 'Bloques de Granito',
      it: 'Blocchi di Granito',
      de: 'Granitblöcke',
    },
    origin: {
      en: 'Espírito Santo / Minas Gerais, Brazil',
      es: 'Espírito Santo / Minas Gerais, Brasil',
      it: 'Espírito Santo / Minas Gerais, Brasile',
      de: 'Espírito Santo / Minas Gerais, Brasilien',
    },
    colorLabel: {
      en: 'Granular Grey & Earth Tones',
      es: 'Gris Granulado y Tonos Terrosos',
      it: 'Grigio Granulare & Toni Terra',
      de: 'Körniges Grau & Erdtöne',
    },
    description: {
      en: 'Large blocks quarried directly from open-pit deposits, rough-cut and intended for gangsaw processing mills and high-capacity stone processors.',
      es: 'Grandes bloques extraídos de canteras, con cortes brutos, destinados a aserraderos e industrias de procesamiento a gran escala.',
      it: 'Grandi blocchi estratti direttamente da cave a cielo aperto, a taglio grezzo, destinati a segherie e industrie di lavorazione ad alta capacità.',
      de: 'Direkt aus Tagebaulagerstätten gewonnene Großblöcke, rohgeschnitten, bestimmt für Steinsägewerke und hochleistungsfähige Steinverarbeitungsbetriebe.',
    },
    recommendedUses: [
      { en: 'Multi-wire industrial cutting and gangsaw processing',   es: 'Corte industrial con multifilo y telar diamantado',          it: 'Segagione industriale con multifilo e telaio diamantato',   de: 'Multidraht-Industrieschnitt und Gatterung' },
      { en: 'Major infrastructure and commercial developments',      es: 'Grandes proyectos comerciales y de infraestructura',         it: 'Grandi opere commerciali e infrastrutture',                 de: 'Große Infrastruktur- und Gewerbeprojekte' },
      { en: 'Heavy-traffic industrial, airport and urban flooring',  es: 'Pavimentos de alto tráfico urbano, aeroportuario e industrial', it: 'Pavimentazioni industriali, aeroportuali e urbane ad alto traffico', de: 'Stark frequentierte Industrie-, Flughafen- und Stadtböden' },
      { en: 'Ventilated façades and monumental architectural cladding', es: 'Fachadas ventiladas y revestimientos arquitectónicos monumentales', it: 'Facciate ventilate e rivestimenti monumentali',       de: 'Hinterlüftete Fassaden und monumentale Architekturverkleidungen' },
    ],
    features: [
      { en: 'Direct quarry blocks with clean commercial squaring',       es: 'Bloques directos de cantera con escuadrado comercial limpio',  it: 'Blocchi diretti da cava con squadratura commerciale netta',    de: 'Direkte Steinbruchblöcke mit sauberer Handelsviereckung' },
      { en: 'Continuous large-scale supply capacity for export',        es: 'Capacidad de suministro continuo a gran escala para exportación', it: 'Fornitura continua su larga scala per export via porto',    de: 'Kontinuierliche Großlieferfähigkeit für den Export' },
      { en: 'High mineral hardness (Mohs 6.5) and unmatched structural strength', es: 'Alta dureza mineral (Mohs 6.5) y resistencia estructural insuperable', it: 'Elevata durezza minerale (Mohs 6.5) e resistenza strutturale superiore', de: 'Hohe Mineralfestigkeit (Mohs 6.5) und unübertroffene Strukturfestigkeit' },
    ],
  },
};

/** Translate a single shared term (finish, category label…). */
export const translateTerm = (term: string, lang: Language): string => {
  if (lang === 'pt') return term;
  return DICT[term]?.[lang as keyof L4] ?? term;
};

/** Returns a copy of the stone with all display texts in the requested language. */
export const localizeStone = (stone: StoneItem, lang: Language): StoneItem => {
  if (lang === 'pt') return stone;
  const l = STONE_L10N[stone.id];
  return {
    ...stone,
    name: l?.name ? (l.name[lang as keyof L4] ?? stone.name) : stone.name,
    categoryLabel: translateTerm(stone.categoryLabel, lang),
    finishes: stone.finishes.map((f) => translateTerm(f, lang)) as any,
    ...(l
      ? {
          origin: l.origin[lang as keyof L4] ?? l.origin.en,
          colorLabel: l.colorLabel[lang as keyof L4] ?? l.colorLabel.en,
          description: l.description[lang as keyof L4] ?? l.description.en,
          recommendedUses: l.recommendedUses.map((u) => u[lang as keyof L4] ?? u.en),
          features: l.features.map((f) => f[lang as keyof L4] ?? f.en),
        }
      : {}),
  };
};
