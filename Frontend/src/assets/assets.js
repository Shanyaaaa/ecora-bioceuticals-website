// Importing Images
import aminopetFront from './aminopet_front.png';
import Aminopet2 from './Aminopet-2.jpg';
import Aminopet3 from './Aminopet-3.jpg';
import Aminopet4 from './Aminopet-4.jpg';
import Aminopet5 from './Aminopet-5.jpg';
import artimarinHome from './artimarin_home.png';
import ArtimarinSus2 from './ArtimarinSUS-2.jpg';
import ArtimarinSus3 from './ArtimarinSUS-3.jpg';
import ArtimarinSus4 from './ArtimarinSUS-4.jpg';
import ArtimarinSus5 from './ArtimarinSUS-5.jpg';
import calcinexHome from './calcinex_home.jpg';
import Calcinex2 from './Calcinex-2.jpg';
import Calcinex3 from './Calcinex-3.jpg';
import Calcinex4 from './Calcinex-4.jpg';
import Calcinex5 from './Calcinex-5.jpg';
import ecora from './ecora.png';
import nanoBackHome from './nano_back_home.jpg';
import nanoFrontHome from './nano_front_home.jpg';
import NanoCur1 from './NanoCur-1.jpg';
import NanoCur2 from './NanoCur-2.jpg';
import petNeuronHome from './pet_neuron_home.jpg';
import PetNeuron2 from './pet_neuron_2.jpg';
import PetNeuron3 from './pet_neuron_3.jpg';
import PetNeuron4 from './pet_neuron_4.jpg';
import PetNeuron5 from './pet_neuron_5.jpg';

import thromboFront from './thrombo-front.png';
import Thrombo2 from './Thrombo-2.png';
import Thrombo3 from './Thrombo-3.jpg';
import Thrombo4 from './Thrombo-4.jpg';
import Thrombo5 from './Thrombo-5.png';
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
import SameLivElite2 from './SameLivElite-2.jpg';
import SameLivElite3 from './SameLivElite-3.jpg';
import SameLivElite4 from './SameLivElite-4.jpg';
import calcinexTab1 from './calcinextab-1.jpg';
import calcinexTab2 from './calcinextab-2.jpg';
import calcinexTab3 from './calcinextab-3.jpg';
import calcinexTab4 from './calcinextab-4.jpg';
import calcinexTab5 from './calcinextab-5.jpg';
import TeamMember1 from './team-member-1.jpeg';
import TeamMember2 from './team-member-2.jpeg';
import TeamMember3 from './team-member-3.jpeg';
import TeamMember4 from './team-member-4.jpeg';
import CalmoraTab from './CalmoraTab-1.jpg';
import CalmoraTab2 from './CalmoraTab-2.jpg';
import CalmoraTab3 from './CalmoraTab-3.jpg';
import CalmoraTab4 from './CalmoraTab-4.jpg';
import CalmoraTab5 from './CalmoraTab-5.jpg';

import CoproTab from './CoproTab-1.jpg';
import CoproTab2 from './CoproTab-2.jpg';
import CoproTab3 from './CoproTab-3.jpg';
import CoproTab4 from './CoproTab-4.jpg';
import CoproTab5 from './CoproTab-5.jpg';
import FurTab from './FurTab-1.jpg';
import ObesitySupportTab from './ObesitySupportTab-1.jpg';
import ObesitySupportTab2 from './ObesitySupportTab-2.jpg';
import ObesitySupportTab3 from './ObesitySupportTab-3.jpg';
import ObesitySupportTab4 from './ObesitySupportTab-4.jpg';
import ObesitySupportTab5 from './ObesitySupportTab-5.jpg';

import OmegaPetEliteCap from './OmegaPetEliteCap-1.jpg';
import OmegaPetEliteCap2 from './OmegaPetEliteCap-2.jpg';
import OmegaPetEliteCap3 from './OmegaPetEliteCap-3.jpg';
import OmegaPetEliteCap4 from './OmegaPetEliteCap-4.jpg';
import OmegaPetEliteCap5 from './OmegaPetEliteCap-5.jpg';
import SporipetTab from './SporipetTab-1.jpg';
import SporipetTab2 from './SporipetTab-2.jpg';
import SporipetTab3 from './SporipetTab-3.jpg';
import SporipetTab4 from './SporipetTab-4.jpg';
import SporipetTab5 from './SporipetTab-5.jpg';
import sameLivBack from './same_liv_back.jpg';
import sameLivFront from './same_liv_front.jpg';
import SameLivSyrup2 from './SameLivSyrup-3.jpg';
import SameLivSyrup3 from './SameLivSyrup-4.jpg';
import SameLivSyrup4 from './SameLivSyrup-5.jpg';

import Founder from './founder.png';
import { Import } from 'lucide-react';



// ✅ Exporting all products
export const products = [
  {
    _id: 'Calcinex Tab',
    name: 'Calcinex Tab 70’s – Advanced Calcium Supplement for Pets',
    description:
      '"Calcinex Tab is an advanced calcium supplement enriched with Vitamin D3 and K2-MK7, designed to promote strong bones, healthy teeth, and joint support. Ideal for both growing and aging pets, it aids in managing rickets, osteoporosis, and fracture recovery."',
    price: 450,
    image: [calcinexTab1, calcinexTab2, calcinexTab3, calcinexTab4, calcinexTab5],
    category: 'Cats,Dogs',
    subCategory: ['Rickets', 'Osteoporosis', 'Fractures', 'Joint Pain'],
    conditions: ['Calcium Support', 'Joint Support'], // ← was: ['Rickets', 'Osteoporosis', 'Fractures', 'Joint Pain']    
    sizes: ['70 Tabs'],
    bestseller: false,
  },
  {
    _id: 'Artimarin Suspension',
    name: 'Artimarin Suspension for Pets – 200ml | Advanced Liver Support Formula',
    description:
      'Supports liver detox, improves digestion, and helps manage liver-related conditions.',
    price: 290,
    image: [artimarinHome,ArtimarinSus2,ArtimarinSus3,ArtimarinSus4,ArtimarinSus5],
    category: 'Cats,Dogs',
    subCategory: ['Liver Disorders', 'Digestive Health', 'Infectious Diseases'],
    conditions: ['Liver Health', 'Digestive Health', 'Immune Support'], // ← Liver Disorders, Digestive Health, Infectious Diseases
    sizes: ['200ml'],
    bestseller: true,
  },
  {
    _id: 'Sporipet Tab',
    name: 'Sporipet Gut Health & Immunity Support for Pets – 30 Tablets',
    description:
      '1.25 billion spores with probiotics and prebiotics. Enhances digestion and immunity.',
    price: 495,
    image: [SporipetTab,SporipetTab2,SporipetTab3,SporipetTab4,SporipetTab5],
    category: 'Cats,Dogs',
    subCategory: ['Diarrhoea', 'IBS', 'Gas', 'Bloating', 'Heartburn', 'Leaky Gut'],
    conditions: ['Gut Health', 'Digestive Health', 'Immune Support'], // ← Diarrhoea, IBS, Gas, Bloating, Heartburn, Leaky Gut
    sizes: ['30 Tabs'],
    bestseller: true,
  },
  {
    _id: 'Same-Liv Elite Syrup',
    name: 'Same-Liv Elite Syrup Pet Supplement for Liver (100ml)',
    description:
      'Powerful liver support for infection recovery and detoxification.',
    price: 750,
    image: [SameEliteFront,SameEliteBack,SameLivElite2,SameLivElite3,SameLivElite4],
    category: 'Cats,Dogs',
    subCategory: ['Liver Disorders', 'Infectious Diseases', 'Inappetence'],
    conditions: ['Liver Health', 'Immune Support'], // ← Liver Disorders, Infectious Diseases, Inappetence
    sizes: ['100ml'],
    bestseller: true,
  },
  {
    _id: 'Same-Liv Syrup',
    name: 'Same-Liv Syrup 100ml | Same + Silymarin Liver Support',
    description:
      'Effective for chronic liver conditions and appetite loss.',
    price: 450,
    image: [sameLivFront,sameLivBack,SameLivSyrup2,SameLivSyrup3,SameLivSyrup4],
    category: 'Cats,Dogs',
    subCategory: ['Liver Cirrhosis', 'Fibrosis', 'IBD', 'Hepatitis'],
    conditions: ['Liver Health'], // ← Liver Cirrhosis, Fibrosis, IBD, Hepatitis
    sizes: ['100ml'],
    bestseller: false,
  },
  {
    _id: 'Calmora Tablets',
    name: 'Calmora Tablets for Pets – Complete Nervine Care | 30 Tablets',
    description:
      'Calming formula for anxiety, stress, and behavior management.',
    price: 450,
    image: [CalmoraTab, CalmoraTab2,CalmoraTab3,CalmoraTab4,CalmoraTab5],
    category: 'Cats,Dogs',
    subCategory: ['Nervine care, Anxiety', 'Stress', 'Behavioral Issues'],
    conditions: ['Nervine Care'], // ← Nervine care, Anxiety, Stress, Behavioral Issues
    sizes: ['30 Tabs'],
    bestseller: true,
  },
  {
    _id: 'Copro FB Tabs',
    name: 'Copro FB Tabs for Pets | Coprophagia Control & Digestive Support | 30 Tablets',
    description:
      'Discourages stool eating and improves breath and digestion.',
    price: 350,
    image: [CoproTab,CoproTab2,CoproTab3,CoproTab4,CoproTab5],
    category: 'Cats,Dogs',
    subCategory: ['Coprophagia', 'Bad Breath'],
    conditions: ['Digestive Health'], // ← Coprophagia, Bad Breath
    sizes: ['30 Tabs'],
    bestseller: false,
  },
  {
    _id: 'Omega Pet Elite Softgel Capsules',
    name: 'Omega Pet Elite Softgel Capsules | Rich in Omega-3 for Pets | 30 Softgels',
    description:
      'Deep sea fish oil supports joints, skin, and heart health.',
    price: 1490,
    image: [OmegaPetEliteCap,OmegaPetEliteCap2,OmegaPetEliteCap3,OmegaPetEliteCap5,OmegaPetEliteCap4],
    category: 'Cats,Dogs',
    subCategory: ['Joint Inflammation', 'Skin Issues', 'Heart & Brain Health'],
    conditions: ['Joint Support', 'Skin and Coat', 'Heart & Brain Health'], // ← Joint Inflammation, Skin Issues, Heart & Brain Health    
    sizes: ['30 Softgels'],
    bestseller: true,
  },
  {
    _id: 'MPS Obesity Support ',
    name: 'MPS Obesity Support Tablet 60’s',
    description:
      'Supports fat metabolism, energy, and appetite control.',
    price: 680,
    image: [ObesitySupportTab,ObesitySupportTab2,ObesitySupportTab3,ObesitySupportTab4,ObesitySupportTab5],
    category: 'Cats,Dogs',
    subCategory: ['Obesity', 'Low Energy', 'Overeating'],
    conditions: ['Weight Management'], // ← Obesity, Low Energy, Overeating
    sizes: ['60 Tabs'],
    bestseller: false,
  },
  {
    _id:'MPS Furtab ',
    name: 'MPS Furtab Supplement for Pets – 60 Tabs',
    description:
      'Biotin + Omegas for healthy coat and reduced skin inflammation.',
    price: 490,
    image:[FurTab],
    category: 'Cats,Dogs',
    subCategory: ['Skin Inflammation', 'Poor Coat Quality'],
    conditions: ['Skin and Coat'], // ← Skin Inflammation, Poor Coat Quality
    sizes: ['60 Tabs'],
    bestseller: true,
  },
  {

  _id: 'MPS NanoCurcumin',
  name: 'MPS NanoCurcumin for Pets – 30ml',
  description:
    'Nano-formulated curcumin for enhanced stability, absorption, and cellular delivery. Supports chronic disease and cancer management through improved bioavailability.',
  price: 1250,
  image: [nanoFrontHome,nanoBackHome,NanoCur1,NanoCur2],
  category: 'Cats,Dogs',
  subCategory: ['Chronic Inflammation', 'Cancer Support'],
  conditions: ['Immune Support', 'Anti-inflammatory'],
  sizes: ['30ml'],
  bestseller: false,
},
  
{
  _id: 'Thrombo-Fe Syrup',
  name: 'Thrombo-Fe Syrup 200ml – Iron & Platelet Support Supplement for Pets',
  description:
    'Iron-rich formula supporting blood health, platelet production, and recovery from tick fever, anaemia, or post-surgical trauma. Helpful in cases of Echrlichiosis and Babesiosis.',
  price: 380,
  image: [thromboFront,Thrombo2,Thrombo3,Thrombo4,Thrombo5], // or thromboBack if preferred
  category: 'Cats,Dogs',
  subCategory: ['Anaemia', 'Low Platelet Count', 'Blood Parasites'],
  conditions: ['Blood Health', 'Recovery Support'],
  sizes: ['200ml'],
  bestseller: true,
},

{
  _id: 'Aminopet Syrup',
  name: 'Aminopet 200ml Syrup – Amino Acid & Multivitamin Supplement for Pets',
  description:
    'Synergistic blend of essential amino acids, vitamins, grape seed, and nettle extract. Promotes growth in young pets and supports health during pregnancy, ageing, or inappetence.',
  price: 260,
  image: [aminopetFront,Aminopet2,Aminopet3,Aminopet4,Aminopet5],
  category: 'Cats,Dogs',
  subCategory: ['Growth Support', 'Geriatric Nutrition', 'Breeding Health'],
  conditions: ['Nutritional Support'],
  sizes: ['200ml'],
  bestseller: true,
},

{
  _id: 'Calcinex Suspension',
  name: 'Calcinex Calcium Supplement Suspension – 200ml for Pets',
  description:
    'Liquid calcium supplement with Vitamin K2-MK7 for pets of all ages. Supports bone health, fracture healing, and conditions like rickets and osteoporosis.',
  price: 210,
  image: [calcinexHome,Calcinex2,Calcinex3,Calcinex4,Calcinex5],
  category: 'Cats,Dogs',
  subCategory: ['Rickets', 'Fractures', 'Osteoporosis'],
  conditions: ['Calcium Support', 'Bone Health'],
  sizes: ['200ml'],
  bestseller: false,
},
 {
  _id: 'Pet Neuron Syrup',
  name: 'Pet Neuron Syrup – 200ml | Nervine Care & Cognitive Support',
  description:
    'Ayurvedic nervine formula that calms the nervous system and aids recovery from stress, neurological disorders, partial paralysis, and memory issues.',
  price: 480,
  image: [petNeuronHome,PetNeuron2,PetNeuron3,PetNeuron4,PetNeuron5],
  category: 'Cats,Dogs',
  subCategory: ['Neurological Issues', 'Anxiety', 'Cognitive Deficiency'],
  conditions: ['Nervine Care', 'Cognitive Support'],
  sizes: ['200ml'],
  bestseller: true,
},

];


// ✅ Export all assets as a named object
export const assets = {
  aminopetFront,
  Aminopet2,
  Aminopet3,
  Aminopet4,
  Aminopet5,
  artimarinHome,
  ArtimarinSus2,
  ArtimarinSus3,
  ArtimarinSus4,
  ArtimarinSus5,
  calcinexHome,
  ecora,
  nanoBackHome,
  nanoFrontHome,
  NanoCur1,
  NanoCur2,
  petNeuronHome,
  PetNeuron2,
  PetNeuron3,
  PetNeuron4,
  PetNeuron5,
  sameLivBack,
  sameLivFront,
  SameLivElite2,
  SameLivElite3,
  SameLivElite4,
  thromboFront,
  Thrombo2,
  Thrombo3,
  Thrombo4,
  Thrombo5,
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
  SameLivSyrup2,
  SameLivSyrup3,
  SameLivSyrup4,

  calcinexTab1,
  calcinexTab2,
  calcinexTab3,
  calcinexTab4,
  calcinexTab5,

  Calcinex3,
  Calcinex4,
  Calcinex5,
  TeamMember1,
  TeamMember2,
  TeamMember3,
  TeamMember4,
  CalmoraTab,
 
  CalmoraTab2,
  CalmoraTab3,
  CalmoraTab4,
  CalmoraTab5,
  CoproTab,
  CoproTab2,
  CoproTab3,
  CoproTab4,
  CoproTab5,
  
  FurTab,
  ObesitySupportTab,
  ObesitySupportTab2,
  ObesitySupportTab3,
  ObesitySupportTab4,
  ObesitySupportTab5,
  OmegaPetEliteCap,
  OmegaPetEliteCap2,
  OmegaPetEliteCap3,
  OmegaPetEliteCap4,
  OmegaPetEliteCap5,
  SporipetTab,
  SporipetTab2,
  SporipetTab3,
  SporipetTab4,
  SporipetTab5,
  Founder,
};
