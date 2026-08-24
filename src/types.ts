export interface SneakerDNA {
  silhouetteType: string;
  upperMaterial: string;
  midsoleTech: string;
  outsoleTraction: string;
  craftOrigin: string;
  radarStats: {
    scarcity: number; // 0-100
    culturalImpact: number; // 0-100
    technicalInnovation: number; // 0-100
    streetCred: number; // 0-100
    artisanCraft: number; // 0-100
  };
}

export interface AuthInspectionPoint {
  id: string;
  part: 'Stitching' | 'UV Luminescence' | 'Sole Mold' | 'Typography' | 'Material Grain';
  description: string;
  legitIndicator: string;
  counterfeitTell: string;
  coordinates: { x: number; y: number }; // percentage on image
}

export interface SneakerArtifact {
  id: string;
  brand: 'NIKE' | 'PUMA' | 'COMET' | 'GULLY LABS' | 'ONE8' | 'BANJAARAN' | 'NEW BALANCE';
  brandOrigin: string;
  name: string;
  codeName: string;
  releaseYear: number;
  category: 'Motorsport Heritage' | 'Basketball Icon' | 'Indian Subculture' | 'Artisan Avant-Garde' | 'Running & Performance' | 'Streetwear Collab';
  primaryImage: string;
  secondaryImage: string;
  headline: string;
  culturalLore: string;
  designStory: string;
  whyItMatters: string;
  designer: string;
  materials: string[];
  dna: SneakerDNA;
  authInspection: AuthInspectionPoint[];
  collectorTier: 'Grail' | 'Archival Landmark' | 'Subculture Classic' | 'Artisan Masterpiece';
  curatorNotes: string;
}

export interface ResaleSimulationParams {
  supplyUnits: number; // 100 to 50000
  demandIndex: number; // 1 to 100
  hypeVelocity: number; // 1 to 100
  culturalWeight: number; // 1 to 100
  collabMultiplier: number; // 1.0 to 5.0
}

export interface SneakerIdentityProfile {
  name: string;
  subculture: 'Street Heritage' | 'Gully Movement' | 'Tech Minimalist' | 'High Fashion Purist' | 'Sport Innovator' | 'Artisan Eccentric';
  aestheticAlignment: 'Monochrome Brutalist' | 'Vibrant Subcultural' | 'Vintage Patina' | 'Raw Deconstructed' | 'Precision Luxury';
  favMaterial: 'Raw Denim & Handloom' | 'Top-Grain Leather' | 'Engineered Mesh' | 'Embroidered Suede' | 'Carbon & Sonic Foam';
  culturalFocus: 'Indian Renaissance' | 'Japanese Innovation' | 'Motorsport Speed' | 'Basketball Golden Era';
  archetypeTitle: string;
  badgeNumber: string;
}
