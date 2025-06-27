// Importing Images
import aminopetFront from './aminopet_front.png';
import artimarinHome from './artimarin_home.png';
import calcinexHome from './calcinex_home.jpg';
import ecora from './ecora.png';
import nanoBackHome from './nano_back_home.jpg';
import nanoFrontHome from './nano_front_home.jpg';
import petNeuronHome from './pet_neuron_home.jpg';
import sameLivBack from './same_liv_back.jpg';
import sameLivFront from './same_liv_front.jpg';
import thromboBack from './thrombo_back.png';
import thromboFront from './thrombo-front.png';
import searchIcon from './search_icon.png';
import cartIcon from './cart_icon.png';
import profileIcon from './profile_icon.png';
import eg_1 from './eg_1.jpeg';
import eg_2 from './eg_2.jpeg';
import eg_3 from './eg_3.jpg';
import doctors from './doctors.jpeg';
import Dog from './dog.jpg';
import fastDelivery from './fastdelivery.jpg';
import Price from './price.jpg';
import quality from './quality.png';
import AboutEcora from './aboutus.jpg';
import Vision from './vision.jpg';
import SameEliteFront from './same_elite_front.jpg';
import SameEliteBack from './same_elite_back.jpg';
import calcinexTab1 from './calcinextab-1.jpg';
import TeamMember1 from './team-member-1.jpeg';
import TeamMember2 from './team-member-2.jpeg';
import TeamMember3 from './team-member-3.jpeg';
import TeamMember4 from './team-member-4.jpeg';
import CalmoraTab from './CalmoraTab-1.jpg';
import CoproTab from './CoproTab-1.jpg';
import FurTab from './FurTab-1.jpg';
import ObesitySupportTab from './ObesitySupportTab-1.jpg';
import OmegaPetEliteCap from './OmegaPetEliteCap-1.jpg';
import SporipetTab from './SporipetTab-1.jpg';
import sameLivSyrup from './SameLivSyrup-1.jpg';
import Founder from './founder.png';

// ✅ Exporting all products
export const products = [
  {
    _id: 'aaaa',
    name: 'Calcinex Tab 70’s – Advanced Calcium Supplement for Pets',
    description:
      'Advanced calcium supplement with Vitamin D3 & K2-MK7. Promotes strong bones, healthy teeth, and joint support.',
    price: 450,
    image: [calcinexTab1],
    category: 'Cats,Dogs',
    subCategory: ['Rickets', 'Osteoporosis', 'Fractures', 'Joint Pain'],
    conditions: ['Rickets', 'Osteoporosis', 'Fractures', 'Joint Pain'],
    sizes: ['70 Tabs'],
    bestseller: false,
  },
  {
    _id: 'aaab',
    name: 'Artimarin Suspension for Pets – 200ml | Advanced Liver Support Formula',
    description:
      'Supports liver detox, improves digestion, and helps manage liver-related conditions.',
    price: 290,
    image: [artimarinHome],
    category: 'Cats,Dogs',
    subCategory: ['Liver Disorders', 'Digestive Health', 'Infectious Diseases'],
    conditions: ['Liver Disorders', 'Digestive Health', 'Infectious Diseases'],
    sizes: ['200ml'],
    bestseller: true,
  },
  {
    _id: 'aaac',
    name: 'Sporipet Gut Health & Immunity Support for Pets – 30 Tablets',
    description:
      '1.25 billion spores with probiotics and prebiotics. Enhances digestion and immunity.',
    price: 495,
    image: [SporipetTab],
    category: 'Cats,Dogs',
    subCategory: ['Diarrhoea', 'IBS', 'Gas', 'Bloating', 'Heartburn', 'Leaky Gut'],
    conditions: ['Diarrhoea', 'IBS', 'Gas', 'Bloating', 'Heartburn', 'Leaky Gut'],
    sizes: ['30 Tabs'],
    bestseller: true,
  },
  {
    _id: 'aaad',
    name: 'Same-Liv Elite Syrup Pet Supplement for Liver (100ml)',
    description:
      'Powerful liver support for infection recovery and detoxification.',
    price: 750,
    image: [sameLivSyrup],
    category: 'Cats,Dogs',
    subCategory: ['Liver Disorders', 'Infectious Diseases', 'Inappetence'],
    conditions: ['Liver Disorders', 'Infectious Diseases', 'Inappetence'],
    sizes: ['100ml'],
    bestseller: true,
  },
  {
    _id: 'aaae',
    name: 'Same-Liv Syrup 100ml | Same + Silymarin Liver Support',
    description:
      'Effective for chronic liver conditions and appetite loss.',
    price: 450,
    image: [sameLivFront],
    category: 'Cats,Dogs',
    subCategory: ['Liver Cirrhosis', 'Fibrosis', 'IBD', 'Hepatitis'],
    conditions: ['Liver Cirrhosis', 'Fibrosis', 'IBD', 'Hepatitis'],
    sizes: ['100ml'],
    bestseller: false,
  },
  {
    _id: 'aaaf',
    name: 'Calmora Tablets for Pets – Complete Nervine Care | 30 Tablets',
    description:
      'Calming formula for anxiety, stress, and behavior management.',
    price: 450,
    image: [CalmoraTab],
    category: 'Cats,Dogs',
    subCategory: ['Nervine care, Anxiety', 'Stress', 'Behavioral Issues'],
    conditions: ['Nervine care, Anxiety', 'Stress', 'Behavioral Issues'],
    sizes: ['30 Tabs'],
    bestseller: true,
  },
  {
    _id: 'aaag',
    name: 'Copro FB Tabs for Pets | Coprophagia Control & Digestive Support | 30 Tablets',
    description:
      'Discourages stool eating and improves breath and digestion.',
    price: 350,
    image: [CoproTab],
    category: 'Cats,Dogs',
    subCategory: ['Coprophagia', 'Bad Breath'],
    conditions: ['Coprophagia', 'Bad Breath'],
    sizes: ['30 Tabs'],
    bestseller: false,
  },
  {
    _id: 'aaah',
    name: 'Omega Pet Elite Softgel Capsules | Rich in Omega-3 for Pets | 30 Softgels',
    description:
      'Deep sea fish oil supports joints, skin, and heart health.',
    price: 1490,
    image: [OmegaPetEliteCap],
    category: 'Cats,Dogs',
    subCategory: ['Joint Inflammation', 'Skin Issues', 'Heart & Brain Health'],
    conditions: ['Joint Inflammation', 'Skin Issues', 'Heart & Brain Health'],
    sizes: ['30 Softgels'],
    bestseller: true,
  },
  {
    _id: 'aaai',
    name: 'MPS Obesity Support Tablet 60’s',
    description:
      'Supports fat metabolism, energy, and appetite control.',
    price: 680,
    image: [ObesitySupportTab],
    category: 'Cats,Dogs',
    subCategory: ['Obesity', 'Low Energy', 'Overeating'],
    conditions: ['Obesity', 'Low Energy', 'Overeating'],
    sizes: ['60 Tabs'],
    bestseller: false,
  },
  {
    _id: 'aaaj',
    name: 'MPS Furtab Supplement for Pets – 60 Tabs',
    description:
      'Biotin + Omegas for healthy coat and reduced skin inflammation.',
    price: 490,
    image: [FurTab],
    category: 'Cats,Dogs',
    subCategory: ['Skin Inflammation', 'Poor Coat Quality'],
    conditions: ['Skin Inflammation', 'Poor Coat Quality'],
    sizes: ['60 Tabs'],
    bestseller: true,
  },
];


// ✅ Export all assets as a named object
export const assets = {
  aminopetFront,
  artimarinHome,
  calcinexHome,
  ecora,
  nanoBackHome,
  nanoFrontHome,
  petNeuronHome,
  sameLivBack,
  sameLivFront,
  thromboBack,
  thromboFront,
  searchIcon,
  cartIcon,
  profileIcon,
  eg_1,
  eg_2,
  eg_3,
  doctors,
  Dog,
  fastDelivery,
  Price,
  quality,
  AboutEcora,
  Vision,
  SameEliteFront,
  SameEliteBack,
  calcinexTab1,
  TeamMember1,
  TeamMember2,
  TeamMember3,
  TeamMember4,
  CalmoraTab,
  CoproTab,
  FurTab,
  ObesitySupportTab,
  OmegaPetEliteCap,
  SporipetTab,
  sameLivSyrup,
  Founder,
};
