export type Language = 'pt' | 'en' | 'es' | 'it';

export interface Translations {
  nav: {
    catalog: string;
    simulator: string;
    calculator: string;
    export: string;
    about: string;
    contact: string;
    requestQuote: string;
  };
  hero: {
    kicker: string;
    kickerSub: string;
    title: string;
    subtitle: string;
    exploreCatalog: string;
    requestQuote: string;
    stat1Label: string;
    stat2Title: string;
    stat2Label: string;
    stat3Title: string;
    stat3Label: string;
    stat4Title: string;
    stat4Label: string;
  };
  catalog: {
    kicker: string;
    title: string;
    subtitle: string;
    qualityBadge: string;
    allStones: string;
    quartzites: string;
    marbles: string;
    granites: string;
    searchPlaceholder: string;
    colorPalette: string;
    allColors: string;
    lightColors: string;
    goldColors: string;
    darkColors: string;
    exoticColors: string;
    showing: string;
    stones: string;
    noStones: string;
    resetFilters: string;
    inspectSlab: string;
    simulateProject: string;
    quickQuote: string;
    finishes: string;
    translucent: string;
    realPhoto: string;
    vectorMap: string;
  };
  simulator: {
    kicker: string;
    title: string;
    subtitle: string;
    rooms: {
      kitchen: { title: string; subtitle: string; desc: string };
      living: { title: string; subtitle: string; desc: string };
      bathroom: { title: string; subtitle: string; desc: string };
      hall: { title: string; subtitle: string; desc: string };
    };
    selectStone: string;
    stonesAvailable: string;
    quoteThisStone: string;
    turnLedOn: string;
    turnLedOff: string;
  };
  calculator: {
    kicker: string;
    title: string;
    subtitle: string;
    modeArea: string;
    modeSlabs: string;
    areaLabel: string;
    slabsLabel: string;
    thicknessLabel: string;
    stoneTypeLabel: string;
    slabsApprox: string;
    totalWeight: string;
    bundles: string;
    container20ft: string;
    transferToQuote: string;
  };
  export: {
    kicker: string;
    title: string;
    subtitle: string;
    pillars: {
      port: { title: string; desc: string };
      bundles: { title: string; desc: string };
      inspection: { title: string; desc: string };
      docs: { title: string; desc: string };
    };
    reachTitle: string;
    reachSubtitle: string;
    reachDesc: string;
    operationalUnit: string;
  };
  about: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    quarryTag: string;
    reuseWater: string;
    reuseWaterDesc: string;
    precision: string;
    precisionDesc: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    salesCentral: string;
    emailCentral: string;
    headquarters: string;
    strategicLocation: string;
    corporateName: string;
    cnpj: string;
    mainActivity: string;
    requestSalesSupport: string;
    openMap: string;
  };
  modal: {
    inspectTexture: string;
    bookmatch: string;
    backlight: string;
    surfaceFinishes: string;
    mineralHighlights: string;
    geologicalDesc: string;
    labSpecs: string;
    waterAbsorption: string;
    density: string;
    flexural: string;
    mohs: string;
    standardThickness: string;
    recommendedUses: string;
    requestQuoteBatch: string;
    consultWhatsApp: string;
    b2bDisclaimer: string;
    viewRealPhoto: string;
    viewProcedural: string;
  };
  rfq: {
    kicker: string;
    title: string;
    successTitle: string;
    successDesc: string;
    accelerateWhatsApp: string;
    close: string;
    fullName: string;
    companyName: string;
    companyType: string;
    whatsappPhone: string;
    email: string;
    destinationCity: string;
    stoneInterest: string;
    quantity: string;
    unit: string;
    notes: string;
    sendFormal: string;
    quoteWhatsApp: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  pt: {
    nav: {
      catalog: 'Catálogo de Chapas',
      simulator: 'Simulador 3D',
      calculator: 'Calculadora B2B',
      export: 'Exportação & Porto',
      about: 'Sobre Nós',
      contact: 'Contato',
      requestQuote: 'Solicitar Cotação',
    },
    hero: {
      kicker: 'Hub de Guarapari - ES',
      kickerSub: 'Polo Mundial de Extração e Exportação de Rochas',
      title: 'A Majestade das Rochas Naturais Brasileiras para o Mundo',
      subtitle: 'Comércio atacadista de mármores nobres, quartzitos exóticos e granitos em chapas e blocos beneficiados. Padrão exportação para marmorarias, construtoras e distribuidores internacionais.',
      exploreCatalog: 'Explorar Catálogo de Chapas',
      requestQuote: 'Solicitar Cotação de Lote',
      stat1Label: 'Rochas ornamentais entre quartzitos, mármores e granitos',
      stat2Title: 'Classe A',
      stat2Label: 'Padrão exportação com corte multifio e espessura calibrada',
      stat3Title: 'Porto ES',
      stat3Label: 'Escoamento portuário ágil via Vitória e Tubarão',
      stat4Title: 'B2B Direto',
      stat4Label: 'Atendimento atacadista com suporte técnico especializado',
    },
    catalog: {
      kicker: 'Portfólio Exclusivo Atacadista',
      title: 'Catálogo de Chapas & Blocos Selecionados',
      subtitle: 'Fornecemos para marmorarias, incorporadoras e importadores globais. Lotes inspecionados bloco a bloco, com corte preciso em fio diamantado e resinagem a vácuo.',
      qualityBadge: 'Qualidade de Exportação Classe A',
      allStones: 'Todas as Rochas',
      quartzites: 'Quartzitos Exóticos',
      marbles: 'Mármores Nobres',
      granites: 'Granitos Superiores',
      searchPlaceholder: 'Buscar por nome, tom ou origem...',
      colorPalette: 'Paleta de Cores:',
      allColors: 'Todos os Tons',
      lightColors: 'Brancos & Claros',
      goldColors: 'Dourados & Âmbar',
      darkColors: 'Pretos & Escuros',
      exoticColors: 'Verdes & Azuis',
      showing: 'Exibindo',
      stones: 'rochas',
      noStones: 'Nenhuma rocha encontrada com os filtros selecionados.',
      resetFilters: 'Redefinir Filtros',
      inspectSlab: 'Inspecionar Textura & Laudo',
      simulateProject: 'Simular Projeto',
      quickQuote: 'Cotação de Lote',
      finishes: 'Acabamentos',
      translucent: 'Translúcido',
      realPhoto: 'Foto Real da Chapa',
      vectorMap: 'Mapa Mineral',
    },
    simulator: {
      kicker: 'Simulador de Aplicação Arquitetônica',
      title: 'Visualize a Imponência da Rocha no Projeto',
      subtitle: 'Experimente nossos quartzitos, mármores e granitos aplicados em diferentes ambientes de alto padrão. Veja a interação entre iluminação, textura mineral e arquitetura contemporânea.',
      rooms: {
        kitchen: {
          title: 'Ilha Gourmet Monolítica',
          subtitle: 'Cozinha de Alto Padrão & Bancada Cascata',
          desc: 'Bancada contínua com acabamento em meia-esquadria de 45°, cooktop embutido e painel frontal em rocha natural maciça.',
        },
        living: {
          title: 'Painel de Living & Lareira',
          subtitle: 'Parede de Destaque Bookmatched',
          desc: 'Composição monumental espelhada de duas chapas, criando simetria artística de veios naturais ao redor da lareira linear.',
        },
        bathroom: {
          title: 'Sala de Banho & Cuba Esculpida',
          subtitle: 'Bancada Escultural & Revestimento Monolítico',
          desc: 'Revestimento completo de área molhada e bancada com cuba esculpida na própria rocha, valorizando veios e texturas.',
        },
        hall: {
          title: 'Hall & Recepção Corporativa',
          subtitle: 'Balcão de Atendimento Imponente',
          desc: 'Primeira impressão de solidez e sofisticação com balcão geométrico e revestimento em placas de grande formato.',
        },
      },
      selectStone: 'Selecione a Rocha para Testar:',
      stonesAvailable: 'Rochas Disponíveis',
      quoteThisStone: 'Cotar Esta Rocha',
      turnLedOn: 'Ligar LED',
      turnLedOff: 'LED Ligado',
    },
    calculator: {
      kicker: 'Ferramenta B2B para Importadores e Marmorarias',
      title: 'Calculadora de Chapas, Peso e Carga de Contêiner',
      subtitle: 'Otimize sua logística de suprimento no atacado. Calcule a cubagem exata, a quantidade de chapas por cavalete e a taxa de ocupação para frete rodoviário nacional ou marítimo internacional via Porto de Vitória/ES.',
      modeArea: 'Informar Área Total (m²)',
      modeSlabs: 'Informar Qtd. de Chapas',
      areaLabel: 'Metragem Quadrada Desejada:',
      slabsLabel: 'Número Total de Chapas:',
      thicknessLabel: 'Espessura da Rocha:',
      stoneTypeLabel: 'Tipo de Rocha:',
      slabsApprox: 'Chapas Aprox.',
      totalWeight: 'Peso Total',
      bundles: 'Cavaletes',
      container20ft: 'Contêiner 20ft',
      transferToQuote: 'Transferir Este Cálculo para a Cotação Formal',
    },
    export: {
      kicker: 'Infraestrutura & Comércio Exterior',
      title: 'Logística Global a partir do Epicentro Mundial das Rochas',
      subtitle: 'Sediada estrategicamente em Guarapari, Espírito Santo, a Império Marble opera no maior pólo minerador e exportador de rochas ornamentais da América Latina, com acesso imediato aos principais portos marítimos do Brasil.',
      pillars: {
        port: {
          title: 'Acesso Portuário Direto',
          desc: 'Escoamento direto pelos portos de Vitória e Tubarão (ES). Agilidade no desembaraço aduaneiro e redução drástica nos custos de frete interno.',
        },
        bundles: {
          title: 'Estufagem & Cavaletes ISPM 15',
          desc: 'Cavaletes de aço e madeira tratada termicamente contra pragas biológicas, travados e cintados com proteção antichoque para travessias marítimas.',
        },
        inspection: {
          title: 'Inspeção Lote a Lote',
          desc: 'Medição digital com escaneamento de espessura e tonalidade. Cada chapa recebe identificação com código do bloco, dimensões e numeração contínua.',
        },
        docs: {
          title: 'Documentação Internacional',
          desc: 'Emissão de Commercial Invoice, Packing List detalhado, Bill of Lading (B/L) e Certificado de Origem conforme as regras alfandegárias de cada país.',
        },
      },
      reachTitle: 'Amplo Alcance de Exportação',
      reachSubtitle: 'Atendimento Dedicado a Distribuidores e Marmoristas Globais',
      reachDesc: 'Exportamos lotes consolidados de chapas em 2cm e 3cm, assim como blocos brutos e semi-beneficiados para os mercados mais exigentes das Américas, Europa e Oriente Médio.',
      operationalUnit: 'Unidade Operacional & Faturamento',
    },
    about: {
      kicker: 'Sobre a Império Marble',
      title: 'A Arte e a Força da Rocha Natural Elevadas ao Padrão Internacional',
      p1: 'A Império Marble Importação e Exportação Ltda nasceu com o propósito de conectar as mais nobres jazidas de quartzito, granito e mármore aos projetos arquitetônicos mais arrojados do mundo.',
      p2: 'Com base instalada em Guarapari, no Espírito Santo, operamos na vanguarda do setor de rochas ornamentais. Desde a seleção rigorosa de blocos nas frentes de lavra até o processamento com teares multifio de última geração, garantimos chapas com calibragem uniforme, polimento espelhado de alto brilho e telamento estrutural seguro.',
      quarryTag: 'Extração Sustentável & Fio Diamantado',
      reuseWater: '100%',
      reuseWaterDesc: 'Água de reuso no beneficiamento',
      precision: '0.05 mm',
      precisionDesc: 'Precisão no corte de espessura',
    },
    contact: {
      kicker: 'Canais Diretos de Atendimento',
      title: 'Fale com a Império Marble',
      subtitle: 'Consulte disponibilidade de lotes em estoque, reservas de blocos, orçamentos para construtoras ou projetos de exportação. Nossa equipe comercial está à sua disposição.',
      salesCentral: 'Central de Vendas / WhatsApp',
      emailCentral: 'E-mail Comercial & Comex',
      headquarters: 'Sede Administrativa & Operacional',
      strategicLocation: 'Guarapari - Espírito Santo',
      corporateName: 'Razão Social:',
      cnpj: 'Inscrição CNPJ:',
      mainActivity: 'Atividade Principal:',
      requestSalesSupport: 'Solicitar Atendimento Comercial & Tabela de Lotes',
      openMap: 'Abrir no Google Maps',
    },
    modal: {
      inspectTexture: 'Examine a textura mineral e veios',
      bookmatch: 'Bookmatch (Espelhado A+B)',
      backlight: 'Retroiluminação LED',
      surfaceFinishes: 'Acabamentos de Superfície Homologados:',
      mineralHighlights: 'Destaques Minerais:',
      geologicalDesc: 'Descrição Geológica & Estética',
      labSpecs: 'Ficha Técnica Laboratorial (ASTM)',
      waterAbsorption: 'Absorção de Água (ASTM C97):',
      density: 'Densidade Aparente:',
      flexural: 'Resistência à Flexão:',
      mohs: 'Dureza Escala Mohs:',
      standardThickness: 'Espessuras Padrão:',
      recommendedUses: 'Aplicações Recomendadas:',
      requestQuoteBatch: 'Solicitar Cotação em Lote / Chapas',
      consultWhatsApp: 'Consultar Lote Atual no WhatsApp com Especialista',
      b2bDisclaimer: 'Atendimento B2B para marmorarias, construtoras e importadores em todo o mundo.',
      viewRealPhoto: 'Ver Foto Real da Chapa',
      viewProcedural: 'Ver Textura Detalhada',
    },
    rfq: {
      kicker: 'Departamento Comercial & Exportação',
      title: 'Solicitar Cotação de Lote Atacadista',
      successTitle: 'Solicitação Recebida com Sucesso!',
      successDesc: 'Nossa equipe comercial da unidade de Guarapari/ES entrará em contato em até 2 horas úteis com a tabela de preços de lote, fotos das chapas numeradas e opções de frete.',
      accelerateWhatsApp: 'Acelerar Atendimento pelo WhatsApp',
      close: 'Fechar',
      fullName: 'Nome Completo: *',
      companyName: 'Nome da Empresa / Razão Social: *',
      companyType: 'Perfil da Empresa:',
      whatsappPhone: 'WhatsApp / Telefone com DDD: *',
      email: 'E-mail Comercial: *',
      destinationCity: 'Cidade / UF ou Porto de Entrega: *',
      stoneInterest: 'Rocha de Interesse Principal:',
      quantity: 'Quantidade:',
      unit: 'Unidade:',
      notes: 'Observações Adicionais ou Especificações de Projeto:',
      sendFormal: 'Enviar Solicitação Formal',
      quoteWhatsApp: 'Cotar no WhatsApp',
    },
  },
  en: {
    nav: {
      catalog: 'Slab Catalog',
      simulator: '3D Simulator',
      calculator: 'B2B Calculator',
      export: 'Export & Ports',
      about: 'About Us',
      contact: 'Contact',
      requestQuote: 'Request Quote',
    },
    hero: {
      kicker: 'Guarapari Hub - Espírito Santo, Brazil',
      kickerSub: 'World Capital of Natural Stone Extraction & Export',
      title: 'The Majesty of Brazilian Natural Stones for the World',
      subtitle: 'Wholesale supplier of luxury marbles, exotic quartzites, and premium granites in slabs and blocks. Export grade for fabricators, developers, and international distributors.',
      exploreCatalog: 'Explore Slab Catalog',
      requestQuote: 'Request Wholesale Quote',
      stat1Label: 'Ornamental stones among quartzites, marbles, and granites',
      stat2Title: 'Class A',
      stat2Label: 'Export grade multi-wire precision cutting and calibrated gauge',
      stat3Title: 'ES Ports',
      stat3Label: 'Direct ocean freight via Port of Vitoria & Tubarão',
      stat4Title: 'Direct B2B',
      stat4Label: 'Wholesale sales with dedicated geological and Comex support',
    },
    catalog: {
      kicker: 'Exclusive Wholesale Portfolio',
      title: 'Curated Slabs & Blocks Catalog',
      subtitle: 'Supplying stone distributors, fabricators, and contractors globally. Block-by-block inspection, diamond multi-wire cutting, and automated vacuum resining.',
      qualityBadge: 'Class A Export Quality Guaranteed',
      allStones: 'All Stones',
      quartzites: 'Exotic Quartzites',
      marbles: 'Fine Marbles',
      granites: 'Superior Granites',
      searchPlaceholder: 'Search by stone name, tone or origin...',
      colorPalette: 'Color Palette:',
      allColors: 'All Tones',
      lightColors: 'Whites & Lights',
      goldColors: 'Golds & Amber',
      darkColors: 'Blacks & Darks',
      exoticColors: 'Greens & Blues',
      showing: 'Displaying',
      stones: 'stones',
      noStones: 'No natural stones found matching selected filters.',
      resetFilters: 'Reset Filters',
      inspectSlab: 'Inspect Veins & ASTM Specs',
      simulateProject: 'Simulate Project',
      quickQuote: 'Bundle Quote',
      finishes: 'Finishes',
      translucent: 'Translucent',
      realPhoto: 'Real Slab Photo',
      vectorMap: 'Mineral Map',
    },
    simulator: {
      kicker: 'Architectural Environment Simulator',
      title: 'Experience Natural Stone in High-End Spaces',
      subtitle: 'Test our quartzites, marbles, and granites applied to luxury architectural spaces. Observe how lighting, mineral movement, and finishes interact in real time.',
      rooms: {
        kitchen: {
          title: 'Monolithic Gourmet Island',
          subtitle: 'High-End Kitchen & Waterfall Countertop',
          desc: 'Seamless continuous slab with 45° mitered edges, integrated induction cooktop, and monolithic bookmatched face.',
        },
        living: {
          title: 'Living Feature Wall & Fireplace',
          subtitle: 'Bookmatched Statement Accent Wall',
          desc: 'Monumental mirrored composition of two slabs, creating symmetrical geological veining around a linear fireplace.',
        },
        bathroom: {
          title: 'Master Bathroom & Carved Vanity',
          subtitle: 'Sculptural Basin & Full Slab Wall Cladding',
          desc: 'Full-height wet area cladding with matching integrated sink carved directly into the natural stone.',
        },
        hall: {
          title: 'Lobby & Corporate Reception',
          subtitle: 'Imposing Reception Counter & Columns',
          desc: 'Commanding first impression combining massive monolithic stone volumes with warm perimeter LED illumination.',
        },
      },
      selectStone: 'Select Stone to Test:',
      stonesAvailable: 'Available Stones',
      quoteThisStone: 'Quote This Stone',
      turnLedOn: 'Turn LED On',
      turnLedOff: 'LED On',
    },
    calculator: {
      kicker: 'B2B Tool for Importers & Fabricators',
      title: 'Slab, Weight & Ocean Container Calculator',
      subtitle: 'Streamline your wholesale procurement. Compute exact square footage/meters, slab counts per bundle, and container load payload for sea freight from Port of Vitoria/ES.',
      modeArea: 'Input Total Area (m²)',
      modeSlabs: 'Input Slab Quantity',
      areaLabel: 'Requested Square Footage (m²):',
      slabsLabel: 'Total Number of Slabs:',
      thicknessLabel: 'Slab Thickness:',
      stoneTypeLabel: 'Stone Type:',
      slabsApprox: 'Approx. Slabs',
      totalWeight: 'Total Weight',
      bundles: 'A-Frame Bundles',
      container20ft: '20ft Container',
      transferToQuote: 'Export Calculation to Formal RFQ',
    },
    export: {
      kicker: 'Infrastructure & Global Trade',
      title: 'Worldwide Shipping from Latin America’s Stone Capital',
      subtitle: 'Strategically headquartered in Guarapari, Espírito Santo, Império Marble operates at the epicenter of natural stone mining and export, offering instant access to Brazil’s premier deep-water ports.',
      pillars: {
        port: {
          title: 'Direct Deep-Water Port Access',
          desc: 'Immediate dispatch through Port of Vitoria and Tubarão (ES). Rapid customs clearance and minimal overland transport cost.',
        },
        bundles: {
          title: 'ISPM 15 Fumigated Wooden Bundles',
          desc: 'Heavy-duty steel-reinforced A-frames and heat-treated timber, strapped with shock-absorbing corners for ocean voyages.',
        },
        inspection: {
          title: 'Slab-by-Slab Digital Inspection',
          desc: 'High-definition digital scanning of thickness, veining uniformity, and numbering linked to each parent quarry block.',
        },
        docs: {
          title: 'Complete Export Documentation',
          desc: 'Full issuance of Commercial Invoice, detailed Packing List, Ocean Bill of Lading (B/L), and Certificate of Origin.',
        },
      },
      reachTitle: 'Global Export Reach',
      reachSubtitle: 'Dedicated Wholesale Service for International Importers',
      reachDesc: 'We ship 2cm and 3cm consolidated slab containers as well as raw and semi-dressed blocks to the Americas, Europe, and Middle Eastern markets.',
      operationalUnit: 'Operations & Billing Headquarters',
    },
    about: {
      kicker: 'About Império Marble',
      title: 'Crafting Natural Earth Stones to the Highest Global Standards',
      p1: 'Império Marble Importação e Exportação Ltda was founded to bridge the finest Brazilian quartzite, granite, and marble quarries with world-class architectural landmarks.',
      p2: 'Based in Guarapari, Espírito Santo, we operate at the frontier of the ornamental stone industry. From selective block quarrying to multi-wire diamond processing and vacuum resining lines, we deliver calibrated slabs with mirror-like polish and fiberglass reinforced backing.',
      quarryTag: 'Sustainable Quarrying & Diamond Multi-Wire',
      reuseWater: '100%',
      reuseWaterDesc: 'Recycled closed-loop industrial water',
      precision: '0.05 mm',
      precisionDesc: 'Tolerance in slab thickness calibration',
    },
    contact: {
      kicker: 'Direct Sales Channels',
      title: 'Contact Império Marble',
      subtitle: 'Inquire about current bundle availability, block reservations, contractor volume estimates, or export container bookings. Our sales team is at your service.',
      salesCentral: 'Sales Desk / WhatsApp',
      emailCentral: 'Export & Commercial Email',
      headquarters: 'Headquarters & Operations',
      strategicLocation: 'Guarapari - Espírito Santo, Brazil',
      corporateName: 'Corporate Name:',
      cnpj: 'Tax ID (CNPJ):',
      mainActivity: 'Core Activity:',
      requestSalesSupport: 'Request Commercial Quotation & Batch Sheet',
      openMap: 'Open in Google Maps',
    },
    modal: {
      inspectTexture: 'Examine natural mineral veining & crystals',
      bookmatch: 'Bookmatched (A+B Mirror)',
      backlight: 'LED Backlight',
      surfaceFinishes: 'Certified Surface Finishes:',
      mineralHighlights: 'Geological Highlights:',
      geologicalDesc: 'Geological & Aesthetic Overview',
      labSpecs: 'ASTM Laboratory Technical Specifications',
      waterAbsorption: 'Water Absorption (ASTM C97):',
      density: 'Bulk Specific Gravity:',
      flexural: 'Flexural Strength:',
      mohs: 'Mohs Mineral Hardness:',
      standardThickness: 'Standard Thickness:',
      recommendedUses: 'Recommended Architectural Uses:',
      requestQuoteBatch: 'Request Lot / Slab Quote',
      consultWhatsApp: 'Check Current Slabs on WhatsApp with Specialist',
      b2bDisclaimer: 'Dedicated B2B service for stone fabricators, contractors, and global importers.',
      viewRealPhoto: 'View Real Slab Photo',
      viewProcedural: 'View High-Res Texture',
    },
    rfq: {
      kicker: 'Commercial & Export Division',
      title: 'Request Wholesale Lot Quotation',
      successTitle: 'Inquiry Successfully Received!',
      successDesc: 'Our sales engineers in Guarapari/ES will respond within 2 business hours with slab bundle price sheets, high-res slab photos, and shipping logistics.',
      accelerateWhatsApp: 'Fast-Track via WhatsApp Chat',
      close: 'Close',
      fullName: 'Full Name: *',
      companyName: 'Company Name / Fabricator: *',
      companyType: 'Company Profile:',
      whatsappPhone: 'WhatsApp / Phone with Country Code: *',
      email: 'Corporate Email: *',
      destinationCity: 'City / Port of Destination: *',
      stoneInterest: 'Stone of Primary Interest:',
      quantity: 'Quantity:',
      unit: 'Unit:',
      notes: 'Additional Notes or Project Specifications:',
      sendFormal: 'Submit Formal RFQ',
      quoteWhatsApp: 'Quote on WhatsApp',
    },
  },
  es: {
    nav: {
      catalog: 'Catálogo de Tablas',
      simulator: 'Simulador 3D',
      calculator: 'Calculadora B2B',
      export: 'Exportación & Puerto',
      about: 'Nosotros',
      contact: 'Contacto',
      requestQuote: 'Cotizar Lote',
    },
    hero: {
      kicker: 'Polo de Guarapari - ES, Brasil',
      kickerSub: 'Capital Mundial de Extracción y Exportación de Piedras',
      title: 'La Majestad de las Piedras Naturales Brasileñas para el Mundo',
      subtitle: 'Comercio mayorista de mármoles nobles, cuarcitas exóticas y granitos en tablas y bloques beneficiados. Estándar de exportación para marmolerías, constructoras y distribuidores internacionales.',
      exploreCatalog: 'Explorar Catálogo de Tablas',
      requestQuote: 'Solicitar Cotización Mayorista',
      stat1Label: 'Piedras ornamentales entre cuarcitas, mármoles y granitos',
      stat2Title: 'Clase A',
      stat2Label: 'Corte multifilo diamantado de alta precisión y espesor calibrado',
      stat3Title: 'Puertos ES',
      stat3Label: 'Embarque marítimo directo por los puertos de Vitória y Tubarão',
      stat4Title: 'B2B Directo',
      stat4Label: 'Atención mayorista con soporte geológico y de comercio exterior',
    },
    catalog: {
      kicker: 'Portafolio Mayorista Exclusivo',
      title: 'Catálogo de Tablas & Bloques Seleccionados',
      subtitle: 'Suministramos a distribuidores, marmolerías y constructoras en todo el mundo. Lotes inspeccionados bloque por bloque con resinado al vacío.',
      qualityBadge: 'Calidad de Exportación Clase A',
      allStones: 'Todas las Piedras',
      quartzites: 'Cuarcitas Exóticas',
      marbles: 'Mármoles Nobles',
      granites: 'Granitos Superiores',
      searchPlaceholder: 'Buscar por nombre, tono u origen...',
      colorPalette: 'Paleta de Colores:',
      allColors: 'Todos los Tonos',
      lightColors: 'Blancos & Claros',
      goldColors: 'Dorados & Ámbar',
      darkColors: 'Negros & Oscuros',
      exoticColors: 'Verdes & Azules',
      showing: 'Mostrando',
      stones: 'piedras',
      noStones: 'No se encontraron piedras con los filtros seleccionados.',
      resetFilters: 'Restablecer Filtros',
      inspectSlab: 'Inspeccionar Textura & Especificaciones',
      simulateProject: 'Simular Proyecto',
      quickQuote: 'Cotizar Lote',
      finishes: 'Acabados',
      translucent: 'Translúcido',
      realPhoto: 'Foto Real de la Tabla',
      vectorMap: 'Mapa Mineral',
    },
    simulator: {
      kicker: 'Simulador de Aplicación Arquitectónica',
      title: 'Visualice la Imponencia de la Piedra en el Proyecto',
      subtitle: 'Experimente nuestras cuarcitas, mármoles y granitos aplicados en ambientes de alto nivel. Vea la interacción entre iluminación, textura mineral y arquitectura contemporánea.',
      rooms: {
        kitchen: {
          title: 'Isla Gourmet Monolítica',
          subtitle: 'Cocina de Lujo & Encimera en Cascada',
          desc: 'Encimera continua con inglete a 45°, placa de cocción integrada y frente en piedra natural maciza.',
        },
        living: {
          title: 'Pared de Living & Chimenea',
          subtitle: 'Pared de Acento en Bookmatch',
          desc: 'Composición monumental espejada de dos tablas, creando simetría artística de vetas naturales alrededor de la chimenea.',
        },
        bathroom: {
          title: 'Baño Principal & Lavabo Esculpido',
          subtitle: 'Encimera Escultórica & Revestimiento Integral',
          desc: 'Revestimiento de zona húmeda y lavabo tallado directamente en la piedra natural.',
        },
        hall: {
          title: 'Recepción & Lobby Corporativo',
          subtitle: 'Mostrador de Atención Monumental',
          desc: 'Primera impresión de gran solidez y sofisticación con volúmenes geométricos e iluminación perimetral cálida.',
        },
      },
      selectStone: 'Seleccione la Piedra a Probar:',
      stonesAvailable: 'Piedras Disponibles',
      quoteThisStone: 'Cotizar Esta Piedra',
      turnLedOn: 'Encender LED',
      turnLedOff: 'LED Encendido',
    },
    calculator: {
      kicker: 'Herramienta B2B para Importadores y Marmolerías',
      title: 'Calculadora de Tablas, Peso y Carga de Contenedor',
      subtitle: 'Optimice su logística mayorista. Calcule el área exacta, cantidad de tablas por caballete y ocupación de contenedor para flete marítimo desde el Puerto de Vitória/ES.',
      modeArea: 'Ingresar Área Total (m²)',
      modeSlabs: 'Ingresar Cantidad de Tablas',
      areaLabel: 'Metros Cuadrados Deseados (m²):',
      slabsLabel: 'Número Total de Tablas:',
      thicknessLabel: 'Espesor de la Piedra:',
      stoneTypeLabel: 'Tipo de Piedra:',
      slabsApprox: 'Tablas Aprox.',
      totalWeight: 'Peso Total',
      bundles: 'Caballetes',
      container20ft: 'Contenedor 20ft',
      transferToQuote: 'Transferir Este Cálculo a Cotización',
    },
    export: {
      kicker: 'Infraestructura & Comercio Exterior',
      title: 'Logística Global desde el Epicentro Mundial de Piedras',
      subtitle: 'Con sede estratégica en Guarapari, Espírito Santo, Império Marble opera en el mayor polo minero de América Latina, con acceso directo a puertos de ultramar.',
      pillars: {
        port: {
          title: 'Acceso Portuario Directo',
          desc: 'Despacho ágil por los puertos de Vitória y Tubarão (ES). Rápida liberación aduanera y bajo costo de flete interior.',
        },
        bundles: {
          title: 'Caballetes Fumigados ISPM 15',
          desc: 'Caballetes de acero y madera tratada térmicamente con fijaciones seguras para transporte marítimo de larga distancia.',
        },
        inspection: {
          title: 'Inspección Tabla por Tabla',
          desc: 'Escaneo digital de espesor, tonalidad y numeración continua vinculada al bloque de origen.',
        },
        docs: {
          title: 'Documentación Internacional',
          desc: 'Emisión completa de Factura Comercial, Packing List, Conocimiento de Embarque (B/L) y Certificado de Origen.',
        },
      },
      reachTitle: 'Alcance Global de Exportación',
      reachSubtitle: 'Atención Exclusiva para Distribuidores Internacionales',
      reachDesc: 'Exportamos contenedores consolidados de tablas en 2cm y 3cm, así como bloques brutos a los mercados más exigentes del mundo.',
      operationalUnit: 'Unidad Operativa & Facturación',
    },
    about: {
      kicker: 'Acerca de Império Marble',
      title: 'El Arte y la Fuerza de la Piedra Natural al Más Alto Nivel Global',
      p1: 'Império Marble Importação e Exportação Ltda nació con el objetivo de conectar las canteras más exclusivas de Brasil con los proyectos arquitectónicos más emblemáticos del mundo.',
      p2: 'Con base en Guarapari, Espírito Santo, operamos a la vanguardia del sector de rocas ornamentales: corte con multifilo diamantado, resinado al vacío y mallas de refuerzo estructural en fibra de vidrio.',
      quarryTag: 'Extracción Sustentable & Hilo Diamantado',
      reuseWater: '100%',
      reuseWaterDesc: 'Agua reciclada en circuito cerrado',
      precision: '0.05 mm',
      precisionDesc: 'Precisión en calibración de espesor',
    },
    contact: {
      kicker: 'Canales Directos de Atención',
      title: 'Contacte con Império Marble',
      subtitle: 'Consulte disponibilidad de lotes en stock, reservas de bloques o cotizaciones para importación. Nuestro equipo comercial está a su servicio.',
      salesCentral: 'Central de Ventas / WhatsApp',
      emailCentral: 'E-mail Comercial & Comex',
      headquarters: 'Sede Administrativa & Operativa',
      strategicLocation: 'Guarapari - Espírito Santo, Brasil',
      corporateName: 'Razón Social:',
      cnpj: 'Número CNPJ:',
      mainActivity: 'Actividad Principal:',
      requestSalesSupport: 'Solicitar Atención Comercial & Lista de Lotes',
      openMap: 'Abrir en Google Maps',
    },
    modal: {
      inspectTexture: 'Examine la textura mineral y vetas',
      bookmatch: 'Bookmatch (Espejado A+B)',
      backlight: 'Retroiluminación LED',
      surfaceFinishes: 'Acabados Superficiales Homologados:',
      mineralHighlights: 'Aspectos Geológicos:',
      geologicalDesc: 'Descripción Geológica & Estética',
      labSpecs: 'Ficha Técnica Laboratorial (ASTM)',
      waterAbsorption: 'Absorción de Agua (ASTM C97):',
      density: 'Densidad Aparente:',
      flexural: 'Resistencia a la Flexión:',
      mohs: 'Dureza Escala Mohs:',
      standardThickness: 'Espesores Estándar:',
      recommendedUses: 'Aplicaciones Recomendadas:',
      requestQuoteBatch: 'Solicitar Cotización de Lote / Tablas',
      consultWhatsApp: 'Consultar Lote en WhatsApp con Especialista',
      b2bDisclaimer: 'Atención B2B para marmolerías, constructoras e importadores en todo el mundo.',
      viewRealPhoto: 'Ver Foto Real de la Tabla',
      viewProcedural: 'Ver Textura Detallada',
    },
    rfq: {
      kicker: 'Departamento Comercial & Exportación',
      title: 'Solicitar Cotización de Lote Mayorista',
      successTitle: '¡Solicitud Recibida con Éxito!',
      successDesc: 'Nuestro equipo comercial en Guarapari/ES responderá en menos de 2 horas hábiles con la lista de precios, fotos de tablas numeradas y opciones de flete.',
      accelerateWhatsApp: 'Agilizar Atención por WhatsApp',
      close: 'Cerrar',
      fullName: 'Nombre Completo: *',
      companyName: 'Nombre de la Empresa / Razón Social: *',
      companyType: 'Perfil de la Empresa:',
      whatsappPhone: 'WhatsApp / Teléfono: *',
      email: 'E-mail Corporativo: *',
      destinationCity: 'Ciudad / Puerto de Destino: *',
      stoneInterest: 'Piedra de Interés Principal:',
      quantity: 'Cantidad:',
      unit: 'Unidad:',
      notes: 'Observaciones Adicionales o Especificaciones:',
      sendFormal: 'Enviar Solicitud Formal',
      quoteWhatsApp: 'Cotizar en WhatsApp',
    },
  },
  it: {
    nav: {
      catalog: 'Catalogo Lastre',
      simulator: 'Simulatore 3D',
      calculator: 'Calcolatore B2B',
      export: 'Export & Logistica',
      about: 'Chi Siamo',
      contact: 'Contatto',
      requestQuote: 'Richiedi Preventivo',
    },
    hero: {
      kicker: 'Hub di Guarapari - ES, Brasile',
      kickerSub: 'Polo Mondiale di Estrazione ed Esportazione Pietre',
      title: 'La Maestosità delle Pietre Naturali Brasiliane per il Mondo',
      subtitle: 'Commercio all’ingrosso di marmi pregiati, quarziti esotiche e graniti in lastre e blocchi lavorati. Qualità per marmisti, architetti e importatori internazionali.',
      exploreCatalog: 'Esplora Catalogo Lastre',
      requestQuote: 'Richiedi Offerta Lotto',
      stat1Label: 'Varietà ornamentali tra quarziti, marmi e graniti',
      stat2Title: 'Classe A',
      stat2Label: 'Taglio multifilo diamantato di altissima precisione e calibratura',
      stat3Title: 'Porti ES',
      stat3Label: 'Spedizione marittima diretta tramite Porti di Vitória e Tubarão',
      stat4Title: 'B2B Diretto',
      stat4Label: 'Assistenza commerciale all’ingrosso con supporto geologico dedicato',
    },
    catalog: {
      kicker: 'Portafoglio Esclusivo all’Ingrosso',
      title: 'Catalogo di Lastre & Blocchi Selezionati',
      subtitle: 'Fornitura per marmisti, costruttori e distributori in tutto il mondo. Ispezione blocco per blocco e resinatura sottovuoto.',
      qualityBadge: 'Qualità Export Classe A Garantita',
      allStones: 'Tutte le Pietre',
      quartzites: 'Quarziti Esotiche',
      marbles: 'Marmi Pregiati',
      granites: 'Graniti Superiori',
      searchPlaceholder: 'Cerca per nome, tonalità o origine...',
      colorPalette: 'Tonalità di Colore:',
      allColors: 'Tutti i Colori',
      lightColors: 'Bianchi & Chiari',
      goldColors: 'Dorati & Ambra',
      darkColors: 'Neri & Scuri',
      exoticColors: 'Verdi & Blu',
      showing: 'Mostrando',
      stones: 'pietre',
      noStones: 'Nessuna pietra trovata con i filtri selezionati.',
      resetFilters: 'Ripristina Filtri',
      inspectSlab: 'Ispeziona Venature & Scheda ASTM',
      simulateProject: 'Simula Progetto',
      quickQuote: 'Preventivo Lotto',
      finishes: 'Finiture',
      translucent: 'Traslucido',
      realPhoto: 'Foto Reale della Lastra',
      vectorMap: 'Mappa Minerale',
    },
    simulator: {
      kicker: 'Simulatore di Ambientazione Architettonica',
      title: 'Visualizza la Maestosità della Pietra nel Progetto',
      subtitle: 'Sperimenta le nostre quarziti, marmi e graniti nei contesti d’arredo di lusso. Esplora l’interazione tra luce naturale, venature e finiture contemporanee.',
      rooms: {
        kitchen: {
          title: 'Isola Gourmet Monolitica',
          subtitle: 'Cucina di Alto Livello & Piano a Cascata',
          desc: 'Piano continuo con bisellatura a 45°, piano cottura integrato e frontale monolitico in pietra naturale.',
        },
        living: {
          title: 'Parete Living & Camino',
          subtitle: 'Parete di Accento Bookmatched a Macchia Aperta',
          desc: 'Composizione monumentale di due lastre speculari, creando una perfetta armonia artistica attorno al camino.',
        },
        bathroom: {
          title: 'Stanza da Bagno & Lavabo Scolpito',
          subtitle: 'Lavabo Scultoreo & Rivestimento Monolitico',
          desc: 'Rivestimento a tutta altezza dell’area doccia e lavabo scavato direttamente nella pietra.',
        },
        hall: {
          title: 'Hall & Reception Aziendale',
          subtitle: 'Bancone Monumentale Geometrico',
          desc: 'Prima impressione di straordinaria eleganza con volumi geometrici e illuminazione a LED calda.',
        },
      },
      selectStone: 'Seleziona Pietra da Testare:',
      stonesAvailable: 'Pietre Disponibili',
      quoteThisStone: 'Richiedi Questa Pietra',
      turnLedOn: 'Accendi LED',
      turnLedOff: 'LED Acceso',
    },
    calculator: {
      kicker: 'Strumento B2B per Importatori e Marmisti',
      title: 'Calcolatore di Lastre, Peso e Carico Container',
      subtitle: 'Ottimizza la logistica di approvvigionamento. Calcola la metratura esatta, il numero di lastre per cavalletto e la portata del container marittimo dal Porto di Vitória/ES.',
      modeArea: 'Inserisci Metratura Totale (m²)',
      modeSlabs: 'Inserisci Numero Lastre',
      areaLabel: 'Metri Quadri Desiderati (m²):',
      slabsLabel: 'Numero Totale di Lastre:',
      thicknessLabel: 'Spessore della Pietra:',
      stoneTypeLabel: 'Tipo di Pietra:',
      slabsApprox: 'Lastre Aprox.',
      totalWeight: 'Peso Totale',
      bundles: 'Cavalletti',
      container20ft: 'Container 20ft',
      transferToQuote: 'Trasferisci al Preventivo Formale',
    },
    export: {
      kicker: 'Infrastruttura & Commercio Estero',
      title: 'Logistica Globale dall’Epicentro Mondiale delle Pietre',
      subtitle: 'Con sede a Guarapari, nello stato di Espírito Santo, Império Marble opera nel più importante polo estrattivo dell’America Latina, con accesso diretto ai porti oceanici.',
      pillars: {
        port: {
          title: 'Accesso Portuale Diretto',
          desc: 'Spedizione rapida tramite i porti di Vitória e Tubarão (ES). Sdoganamento immediato e riduzione dei costi interni.',
        },
        bundles: {
          title: 'Cavalletti Fumigati ISPM 15',
          desc: 'Cavalletti in acciaio e legno trattato termicamente, fissati con protezioni antiurto per traversate oceaniche.',
        },
        inspection: {
          title: 'Controllo Lastra per Lastra',
          desc: 'Scansione digitale di spessore, omogeneità e numerazione progressiva collegata al blocco originale.',
        },
        docs: {
          title: 'Documentazione Doganale Completa',
          desc: 'Emissione di Fattura Commerciale, Packing List dettagliato, Polizza di Carico (B/L) e Certificato di Origine.',
        },
      },
      reachTitle: 'Presenza Mondiale',
      reachSubtitle: 'Assistenza Dedicata per Importatori e Distributori Internazionali',
      reachDesc: 'Esportiamo lotti consolidati di lastre in spessore 2cm e 3cm, nonché blocchi da riquadrare nei mercati di Americhe, Europa e Medio Oriente.',
      operationalUnit: 'Sede Operativa & Amministrazione',
    },
    about: {
      kicker: 'Informazioni su Império Marble',
      title: 'L’Arte e la Forza della Pietra Naturale Brasiliana',
      p1: 'Império Marble Importação e Exportação Ltda nasce per collegare i giacimenti più esclusivi di quarzite, granito e marmo con i progetti d’architettura più prestigiosi del mondo.',
      p2: 'Con sede a Guarapari, Espírito Santo, operiamo all’avanguardia nel settore lapideo: segagione multifilo diamantata, resinatura sottovuoto e applicazione di rete in fibra di vetro posteriore.',
      quarryTag: 'Estrazione Sostenibile & Filo Diamantato',
      reuseWater: '100%',
      reuseWaterDesc: 'Acqua industriale a ricircolo continuo',
      precision: '0.05 mm',
      precisionDesc: 'Tolleranza massima di calibrazione spessore',
    },
    contact: {
      kicker: 'Canali di Contatto Diretto',
      title: 'Contatta Império Marble',
      subtitle: 'Verifica la disponibilità di lotti in magazzino, prenotazioni blocchi o quotazioni speciali per cantieri ed export. Il nostro team commerciale è a tua disposizione.',
      salesCentral: 'Ufficio Vendite / WhatsApp',
      emailCentral: 'E-mail Commerciale & Comex',
      headquarters: 'Sede Operativa & Logistica',
      strategicLocation: 'Guarapari - Espírito Santo, Brasile',
      corporateName: 'Ragione Sociale:',
      cnpj: 'Codice Fiscale / CNPJ:',
      mainActivity: 'Attività Principale:',
      requestSalesSupport: 'Richiedi Listino Prezzi & Lotti Disponibili',
      openMap: 'Apri in Google Maps',
    },
    modal: {
      inspectTexture: 'Esamina venature minerali e cristalli',
      bookmatch: 'Bookmatched (Macchia Aperta A+B)',
      backlight: 'Retroilluminazione LED',
      surfaceFinishes: 'Finiture Superficiali Omologate:',
      mineralHighlights: 'Caratteristiche Minerali:',
      geologicalDesc: 'Descrizione Geologica ed Estetica',
      labSpecs: 'Scheda Tecnica di Laboratorio (ASTM)',
      waterAbsorption: 'Assorbimento d’Acqua (ASTM C97):',
      density: 'Densità Apparente:',
      flexural: 'Resistenza a Flessione:',
      mohs: 'Durezza Scala Mohs:',
      standardThickness: 'Spessori Standard:',
      recommendedUses: 'Applicazioni Architettoniche:',
      requestQuoteBatch: 'Richiedi Preventivo per Lotto / Lastre',
      consultWhatsApp: 'Verifica Lastre su WhatsApp con Specialista',
      b2bDisclaimer: 'Servizio B2B dedicato per marmisti, costruttori e importatori nel mondo.',
      viewRealPhoto: 'Vedi Foto Reale della Lastra',
      viewProcedural: 'Vedi Texture ad Alta Definizione',
    },
    rfq: {
      kicker: 'Ufficio Commerciale & Export',
      title: 'Richiedi Preventivo Lotto all’Ingrosso',
      successTitle: 'Richiesta Inviata con Successo!',
      successDesc: 'Il nostro team commerciale di Guarapari/ES ti risponderà entro 2 ore lavorative con il listino prezzi, foto delle lastre numerate e opzioni di trasporto marittimo.',
      accelerateWhatsApp: 'Velocizza con Chat WhatsApp',
      close: 'Chiudi',
      fullName: 'Nome e Cognome: *',
      companyName: 'Nome Azienda / Marmista: *',
      companyType: 'Profilo Aziendale:',
      whatsappPhone: 'WhatsApp / Telefono con Prefisso: *',
      email: 'E-mail Aziendale: *',
      destinationCity: 'Città o Porto di Destinazione: *',
      stoneInterest: 'Piedra di Interesse Principale:',
      quantity: 'Quantità:',
      unit: 'Unità di Misura:',
      notes: 'Note Aggiuntive o Specifiche di Progetto:',
      sendFormal: 'Invia Richiesta Formale',
      quoteWhatsApp: 'Richiedi su WhatsApp',
    },
  },
};
