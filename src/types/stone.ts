export type StoneCategory = 'quartzite' | 'marble' | 'granite';

export type StoneFinish = 'Polido' | 'Escovado' | 'Levigado' | 'Acetinado' | 'Flamado';

export interface StoneItem {
  id: string;
  name: string;
  category: StoneCategory;
  categoryLabel: string;
  origin: string;
  colorFamily: 'white' | 'gold' | 'black' | 'green' | 'grey' | 'blue';
  colorLabel: string;
  description: string;
  finishes: StoneFinish[];
  thicknesses: string[];
  specs: {
    waterAbsorption: string; // e.g. "0.12%"
    bulkDensity: string; // e.g. "2.680 kg/m³"
    flexuralStrength: string; // e.g. "18.5 MPa"
    mohsHardness: number; // e.g. 7
    translucency: boolean; // Translucency for backlighting
  };
  recommendedUses: string[];
  texturePattern: {
    baseColor: string;
    secondaryColor: string;
    veinColor: string;
    veinColor2?: string;
    patternType: 'crystalline' | 'linear' | 'dramatic' | 'brecciated' | 'nebula';
  };
  features: string[];
  realPhotoUrl: string;
  architecturalPhotoUrl: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  clientType: 'marmoraria' | 'construtora' | 'arquiteto' | 'importador' | 'particular';
  email: string;
  phone: string;
  stoneId: string;
  volumeType: 'chapas' | 'm2' | 'containers' | 'blocos';
  estimatedQuantity: string;
  destinationCity: string;
  observations: string;
}
