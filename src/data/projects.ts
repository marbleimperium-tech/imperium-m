export interface ProjectShowcase {
  id: string;
  title: string;
  category: string;
  location: string;
  architect: string;
  stoneId: string;
  stoneName: string;
  description: string;
  imageUrl: string;
  stats: {
    area: string;
    finish: string;
    year: string;
  };
}

export const INSPIRATION_PROJECTS: ProjectShowcase[] = [
  {
    id: 'proj-fasano-kitchen',
    title: 'Residência Villa Marés',
    category: 'Cozinha Gourmet & Ilha Cascata',
    location: 'Guarapari, ES · Brasil',
    architect: 'Studio Arquitetura Contemporânea',
    stoneId: 'patagonia-gold',
    stoneName: 'Patagonia Crystalline Gold',
    description: 'Ilha central monolítica de 4,20m com iluminação perimetral interna. O quartzito exótico translúcido revela formações cristalinas à noite com luz LED âmbar.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    stats: {
      area: '85 m²',
      finish: 'Polido Espelhado',
      year: '2025'
    }
  },
  {
    id: 'proj-manhattan-penthouse',
    title: 'Penthouse Tribeca',
    category: 'Sala de Banho Master',
    location: 'Manhattan, Nova York · EUA',
    architect: 'Foster & Partners Associate',
    stoneId: 'calacatta-imperial-gold',
    stoneName: 'Calacatta Imperial Gold',
    description: 'Revestimento contínuo de piso a teto em placas bookmatched com veios dourados simétricos. Bancada esculpida com cuba dupla integrada.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    stats: {
      area: '140 m²',
      finish: 'Levigado Acetinado',
      year: '2025'
    }
  },
  {
    id: 'proj-corporate-tower',
    title: 'Lobby do Edifício Horizon',
    category: 'Recepção Corporativa & Pórtico',
    location: 'São Paulo, SP · Brasil',
    architect: 'Aflalo & Gasperini Arquitetos',
    stoneId: 'titanium-gold-black',
    stoneName: 'Titanium Gold Cosmic',
    description: 'Painel monumental de 7 metros de altura com granito exótico negro e veios de mica dourada, recepcionando com imponência e alta resistência ao fluxo diário.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=80',
    stats: {
      area: '320 m²',
      finish: 'Escovado Velvet',
      year: '2024'
    }
  },
  {
    id: 'proj-mediterranean-living',
    title: 'Casa Alvorada',
    category: 'Living & Lareira Linear',
    location: 'Miami, Flórida · EUA',
    architect: 'Oppenheim Architecture',
    stoneId: 'mont-blanc-supreme',
    stoneName: 'Mont Blanc Supreme',
    description: 'Painel de lareira com 6 metros em quartzito branco puro, unindo sofisticação cromática minimalista com a resistência inalterável ao calor.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    stats: {
      area: '110 m²',
      finish: 'Polido Espelhado',
      year: '2025'
    }
  }
];
