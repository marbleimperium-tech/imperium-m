import { StoneItem } from '../types/stone';

export const STONES_DATABASE: StoneItem[] = [
  {
    id: 'patagonia-gold',
    name: 'Patagonia Crystalline Gold',
    category: 'quartzite',
    categoryLabel: 'Quartzito Exótico',
    origin: 'Bahia / Espírito Santo, Brasil',
    colorFamily: 'gold',
    colorLabel: 'Dourado & Cristal',
    description: 'Um dos quartzitos mais desejados do mundo. Apresenta porções translúcidas de quartzo cristalino intercaladas com feldspatos e veios dourados e escuros dramáticos, permitindo retroiluminação estonteante.',
    finishes: ['Polido', 'Levigado', 'Escovado'],
    thicknesses: ['2 cm', '3 cm'],
    specs: {
      waterAbsorption: '0.08%',
      bulkDensity: '2.640 kg/m³',
      flexuralStrength: '21.4 MPa',
      mohsHardness: 7,
      translucency: true,
    },
    recommendedUses: [
      'Ilhas gourmet retroiluminadas',
      'Painéis decorativos de living',
      'Lavabos de alto padrão',
      'Lareiras de luxo'
    ],
    texturePattern: {
      baseColor: '#2b2319',
      secondaryColor: '#524332',
      veinColor: '#d6a858',
      veinColor2: '#f3e8cf',
      patternType: 'crystalline',
    },
    features: [
      'Translúcido à luz LED',
      'Resistência extrema a ácidos e riscos',
      'Formações minerais de quartzo puro'
    ],
    realPhotoUrl: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=1200&q=80',
    architecturalPhotoUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'mont-blanc-supreme',
    name: 'Mont Blanc Supreme',
    category: 'quartzite',
    categoryLabel: 'Quartzito Exótico',
    origin: 'Espírito Santo, Brasil',
    colorFamily: 'white',
    colorLabel: 'Branco Níveo & Cinza',
    description: 'Elegância minimalista atemporal. Fundo branco puro com veios cinza-claros e grafite em fluxo orgânico, unindo a beleza estética do mármore com a dureza indestrutível do quartzo natural.',
    finishes: ['Polido', 'Escovado', 'Levigado'],
    thicknesses: ['2 cm', '3 cm'],
    specs: {
      waterAbsorption: '0.11%',
      bulkDensity: '2.680 kg/m³',
      flexuralStrength: '19.8 MPa',
      mohsHardness: 7,
      translucency: false,
    },
    recommendedUses: [
      'Bancadas de cozinha de uso intenso',
      'Pisos nobres contínuos',
      'Revestimentos verticais de banho',
      'Fachadas ventiladas'
    ],
    texturePattern: {
      baseColor: '#f1f1ee',
      secondaryColor: '#deddd8',
      veinColor: '#7a7873',
      veinColor2: '#b8b6af',
      patternType: 'linear',
    },
    features: [
      'Altíssima resistência a manchas',
      'Substituto ideal para mármores brancos',
      'Disponível em chapas bookmatched'
    ],
    realPhotoUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    architecturalPhotoUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'calacatta-imperial-gold',
    name: 'Calacatta Imperial Gold',
    category: 'marble',
    categoryLabel: 'Mármore Nobre',
    origin: 'Importação Nobre / Apuanos',
    colorFamily: 'white',
    colorLabel: 'Branco & Veios Ouro',
    description: 'A expressão máxima do luxo clássico europeu. Base alva cristalina percorrida por veios expressivos em ouro antigo e cinza suave, perfeita para composições bookmatched espelhadas.',
    finishes: ['Polido', 'Levigado', 'Acetinado'],
    thicknesses: ['2 cm', '3 cm'],
    specs: {
      waterAbsorption: '0.15%',
      bulkDensity: '2.710 kg/m³',
      flexuralStrength: '15.2 MPa',
      mohsHardness: 4,
      translucency: false,
    },
    recommendedUses: [
      'Salas de banho de alto luxo',
      'Painéis de parede espelhados',
      'Mesas de centro e tampos nobres',
      'Pisos internos residenciais'
    ],
    texturePattern: {
      baseColor: '#f9f8f5',
      secondaryColor: '#eae7df',
      veinColor: '#bfa15f',
      veinColor2: '#807e78',
      patternType: 'dramatic',
    },
    features: [
      'Padrão clássico imperial',
      'Resinagem e tela de reforço de fábrica',
      'Tratamento impermeabilizante de alta penetração'
    ],
    realPhotoUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    architecturalPhotoUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'nero-marquina-prime',
    name: 'Nero Marquina Prime',
    category: 'marble',
    categoryLabel: 'Mármore Nobre',
    origin: 'Importação Nobre',
    colorFamily: 'black',
    colorLabel: 'Preto Profundo & Veios Brancos',
    description: 'Preto absoluto com veios brancos cristalinos que cortam a pedra em diagonais arrojadas. Contraste magnético e estética imponente para ambientes sofisticados.',
    finishes: ['Polido', 'Levigado'],
    thicknesses: ['2 cm', '3 cm'],
    specs: {
      waterAbsorption: '0.18%',
      bulkDensity: '2.690 kg/m³',
      flexuralStrength: '14.8 MPa',
      mohsHardness: 4,
      translucency: false,
    },
    recommendedUses: [
      'Bancadas de lavabo esculpidas',
      'Lareiras e pórticos de entrada',
      'Nichos decorativos e aparadores',
      'Recepções corporativas'
    ],
    texturePattern: {
      baseColor: '#0a0a0c',
      secondaryColor: '#1a191d',
      veinColor: '#ffffff',
      veinColor2: '#b0b0b8',
      patternType: 'dramatic',
    },
    features: [
      'Brilho espelhado excepcional',
      'Contraste cromático de alto impacto',
      'Homogeneidade de lote garantida'
    ],
    realPhotoUrl: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80',
    architecturalPhotoUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'taj-mahal-royal',
    name: 'Taj Mahal Royal Quartzite',
    category: 'quartzite',
    categoryLabel: 'Quartzito Exótico',
    origin: 'Ceará / Espírito Santo, Brasil',
    colorFamily: 'gold',
    colorLabel: 'Champagne & Marfim',
    description: 'Reconhecido mundialmente por sua suavidade cromática em tons de creme, marfim e filamentos dourados, aliado à rigidez incomparável. Não risca e não mancha no uso diário.',
    finishes: ['Polido', 'Escovado', 'Levigado'],
    thicknesses: ['2 cm', '3 cm'],
    specs: {
      waterAbsorption: '0.07%',
      bulkDensity: '2.670 kg/m³',
      flexuralStrength: '22.1 MPa',
      mohsHardness: 7,
      translucency: false,
    },
    recommendedUses: [
      'Cozinhas gourmet sem restrições de uso',
      'Pisos de alto tráfego residencial e comercial',
      'Churrasqueiras e áreas gourmet',
      'Banheiros e spas'
    ],
    texturePattern: {
      baseColor: '#e7ded1',
      secondaryColor: '#d6c9b6',
      veinColor: '#bfa782',
      veinColor2: '#9e8967',
      patternType: 'linear',
    },
    features: [
      'Totalmente imune a ácidos cítricos e vinagres',
      'Estabilidade térmica elevada',
      'Textura aveludada na versão escovada'
    ],
    realPhotoUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    architecturalPhotoUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'titanium-gold-black',
    name: 'Titanium Gold Cosmic',
    category: 'granite',
    categoryLabel: 'Granito Exótico',
    origin: 'Espírito Santo, Brasil',
    colorFamily: 'black',
    colorLabel: 'Preto & Ouro Cósmico',
    description: 'Granito exótico brasileiro com redemoinhos dramáticos de quartzo branco, feldspato dourado e minerais de biotita sobre matriz negra intensa. Uma verdadeira obra de arte da natureza.',
    finishes: ['Polido', 'Escovado', 'Levigado'],
    thicknesses: ['2 cm', '3 cm'],
    specs: {
      waterAbsorption: '0.14%',
      bulkDensity: '2.740 kg/m³',
      flexuralStrength: '17.6 MPa',
      mohsHardness: 6.5,
      translucency: false,
    },
    recommendedUses: [
      'Bancadas de cozinha e bares',
      'Ilhas imponentes com cascata',
      'Revestimento de escadas e halls',
      'Pisos de recepção'
    ],
    texturePattern: {
      baseColor: '#121214',
      secondaryColor: '#282522',
      veinColor: '#d4af37',
      veinColor2: '#ecebe8',
      patternType: 'nebula',
    },
    features: [
      'Movimento ondulatório expressivo',
      'Excelente resistência mecânica',
      'Padrão singular em cada chapa'
    ],
    realPhotoUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    architecturalPhotoUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'emerald-green-esmeralda',
    name: 'Emerald Green Supreme',
    category: 'quartzite',
    categoryLabel: 'Quartzito Exótico',
    origin: 'Bahia / Espírito Santo, Brasil',
    colorFamily: 'green',
    colorLabel: 'Verde Esmeralda & Cobre',
    description: 'Raridade botânica em rocha natural. Tons profundos de verde esmeralda com rajadas de cobre, ouro e branco cristalino. Proporciona atmosferas exóticas de alta joalheria arquitetônica.',
    finishes: ['Polido', 'Levigado'],
    thicknesses: ['2 cm', '3 cm'],
    specs: {
      waterAbsorption: '0.09%',
      bulkDensity: '2.660 kg/m³',
      flexuralStrength: '20.2 MPa',
      mohsHardness: 7,
      translucency: true,
    },
    recommendedUses: [
      'Painéis verticais retroiluminados',
      'Bancadas de lavabo exclusivas',
      'Bares e restaurantes de alta gastronomia',
      'Tampos de mesa assinados'
    ],
    texturePattern: {
      baseColor: '#112920',
      secondaryColor: '#1e4435',
      veinColor: '#c59d5f',
      veinColor2: '#529676',
      patternType: 'brecciated',
    },
    features: [
      'Coloração verde botânica raríssima',
      'Permite retroiluminação estratégica',
      'Pedra de coleção e alta especificação'
    ],
    realPhotoUrl: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80',
    architecturalPhotoUrl: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'preto-sao-gabriel',
    name: 'Preto São Gabriel Master',
    category: 'granite',
    categoryLabel: 'Granito Superior',
    origin: 'Espírito Santo, Brasil',
    colorFamily: 'black',
    colorLabel: 'Preto Granulado Nobre',
    description: 'O granito preto brasileiro mais consagrado e confiável da história da construção civil. Granulometria fina e uniforme, resistência estrutural insuperável e acabamento impecável.',
    finishes: ['Polido', 'Escovado', 'Levigado', 'Flamado'],
    thicknesses: ['2 cm', '3 cm'],
    specs: {
      waterAbsorption: '0.12%',
      bulkDensity: '2.890 kg/m³',
      flexuralStrength: '23.8 MPa',
      mohsHardness: 6.5,
      translucency: false,
    },
    recommendedUses: [
      'Grandes obras corporativas e residenciais',
      'Bancadas com excelente relação custo/benefício',
      'Pisos e escadas de altíssimo fluxo',
      'Fachadas e áreas externas'
    ],
    texturePattern: {
      baseColor: '#18181b',
      secondaryColor: '#27272a',
      veinColor: '#3f3f46',
      veinColor2: '#52525b',
      patternType: 'crystalline',
    },
    features: [
      'Estabilidade tonal em grandes metragens',
      'Resistência comprovada ao tempo',
      'Amplo estoque para entrega imediata em lote'
    ],
    realPhotoUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
    architecturalPhotoUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'travertino-navona-romano',
    name: 'Travertino Romano Navona',
    category: 'marble',
    categoryLabel: 'Mármore Travertino',
    origin: 'Importação / Tivoli',
    colorFamily: 'gold',
    colorLabel: 'Bege Areia & Poros Naturais',
    description: 'O clássico milenar da arquitetura romana. Tonalidade creme suave com estriações lineares horizontais. Oferecido na versão resinada e polida ou levigada a poro aberto.',
    finishes: ['Levigado', 'Polido', 'Escovado'],
    thicknesses: ['2 cm', '3 cm'],
    specs: {
      waterAbsorption: '0.35%',
      bulkDensity: '2.520 kg/m³',
      flexuralStrength: '12.4 MPa',
      mohsHardness: 3.5,
      translucency: false,
    },
    recommendedUses: [
      'Pisos internos e varandas cobertas',
      'Bordas de piscinas e spas (acabamento levigado)',
      'Revestimentos de paredes clássicas',
      'Lareiras e escadarias nobres'
    ],
    texturePattern: {
      baseColor: '#ded1bd',
      secondaryColor: '#c7b49a',
      veinColor: '#af9a7e',
      veinColor2: '#f0e6d6',
      patternType: 'linear',
    },
    features: [
      'Conforto térmico natural sob os pés',
      'Opção com resinagem transparente ou estucado',
      'Estética arquitetônica atemporal'
    ],
    realPhotoUrl: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&q=80',
    architecturalPhotoUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'blue-roma-exotic',
    name: 'Blue Roma Imperial',
    category: 'quartzite',
    categoryLabel: 'Quartzito Exótico',
    origin: 'Bahia / Espírito Santo, Brasil',
    colorFamily: 'blue',
    colorLabel: 'Azul Acinzentado & Bronze',
    description: 'Fundo azul-celeste acinzentado entrelaçado por filamentos dramáticos em tons de cobre, ferrugem e ouro. Uma das pedras mais raras e impactantes do portfólio exportação.',
    finishes: ['Polido', 'Levigado'],
    thicknesses: ['2 cm', '3 cm'],
    specs: {
      waterAbsorption: '0.09%',
      bulkDensity: '2.670 kg/m³',
      flexuralStrength: '21.0 MPa',
      mohsHardness: 7,
      translucency: false,
    },
    recommendedUses: [
      'Ilhas gourmet assinadas',
      'Paredes de destaque em living e adegas',
      'Lobbies de hotéis 5 estrelas',
      'Tampos de banho monumentais'
    ],
    texturePattern: {
      baseColor: '#536872',
      secondaryColor: '#3c4e56',
      veinColor: '#b46e39',
      veinColor2: '#d89e5a',
      patternType: 'brecciated',
    },
    features: [
      'Combinação cromática exótica única',
      'Total resistência a riscos por talheres ou facas',
      'Lotes selecionados bloco a bloco'
    ],
    realPhotoUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    architecturalPhotoUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
  }
];

export const COMPANY_INFO = {
  name: 'Império Marble Importação e Exportação Ltda',
  tradeName: 'Império Marble Wholesale & Export',
  cnpj: '69.081.787/0001-60',
  address: {
    street: 'Av. Padre José de Anchieta',
    number: '2165',
    complement: 'Sala 12',
    neighborhood: 'Aeroporto',
    city: 'Guarapari',
    state: 'ES',
    country: 'Brasil',
    zipCode: '29216-015',
    fullFormatted: 'Av. Padre José de Anchieta, 2165, Sala 12 - Aeroporto, Guarapari - ES, CEP 29216-015'
  },
  contact: {
    email: 'imperium.marble@outlook.com',
    phone: '(11) 3404-1255',
    phoneClean: '+551134041255',
    whatsapp: '+551134041255',
    whatsappUrl: 'https://wa.me/551134041255',
    hours: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00'
  },
  stats: [
    { value: '40+', label: 'Variedades de Rochas', desc: 'Quartzitos, mármores e granitos' },
    { value: '100%', label: 'Origem Selecionada', desc: 'Jazidas próprias e parceiros homologados' },
    { value: '25+', label: 'Países de Destino', desc: 'Américas, Europa, Ásia e Oriente Médio' },
    { value: '48h', label: 'Cotação Atacadista', desc: 'Atendimento ágil para marmorarias e construtoras' }
  ]
};
