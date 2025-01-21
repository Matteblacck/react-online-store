import GhostHoodieBlack from './imgs/Ghost_hoodie_black.png';
import GhostHoodieBlackFit from './imgs/ghost_hoodie_black_fit.webp'
import GhostHoodieGrey from './imgs/ghost_hoodie_grey.png';
import GhostHoodieGreyFit from './imgs/ghost_hoodie_grey.webp'
import LvTrackShoes from './imgs/louis-vuitton-track-frontview.avif';
import LvTrainers from './imgs/louis-vuitton-trainers-frontview.avif';
import MMBuffsBlack from './imgs/MM_buffs_black.webp'
import MMBuffsBlackFront from './imgs/MMBuffsBlackFront.webp'

const clotheData = [
  {
    id: "Ghost_hoodie_black",
    name: 'Ghost Hoodie in Black',
    type: 'outwear',
    price: 150,
    image: GhostHoodieBlack,
    images: [GhostHoodieBlack, GhostHoodieBlackFit],
    description:[
      '– 100% cotton 470gsm french terry',
      '– detachable black veil-mesh with buttons',
      '– buttons for the hood adjustment',
      '– customized pullers',
      '– embroidery on the chest'

    ]
  },
  {
    id: 'Ghost_hoodie_gray',
    name: 'Ghost Hoodie in Grey',
    type: 'outwear',
    price: 150,
    image: GhostHoodieGrey,
    images: [GhostHoodieGrey, GhostHoodieGreyFit],
    description:[
      '– 100% cotton 470gsm french terry',
      '– detachable black veil-mesh with buttons',
      '– buttons for the hood adjustment',
      '– customized pullers',
      '– embroidery on the chest'

    ]
  },
  {
    id: 'lv_shoes_green',
    name: 'Louis Vuitton Track Shoes',
    type: 'shoes',
    price: 1200,
    image: LvTrackShoes,
    images:[LvTrackShoes],
    description: [
      '– premium leather and canvas upper for durability',
      '– distinctive Louis Vuitton monogram on the side',
      '– cushioned insole for all-day comfort',
      '– durable rubber sole with traction for stability',
      '– adjustable lacing system for a secure fit',
      '– signature LV branding on the tongue and heel'
    ]
  },
  {
    id: 'lv_trainers',
    name: 'Louis Vuitton Trainers',
    type: 'shoes',
    price: 2250,
    image: LvTrainers,
    images: [LvTrainers],
    description: [
      '– premium leather and canvas upper for durability',
      '– distinctive Louis Vuitton monogram on the side',
      '– cushioned insole for all-day comfort',
      '– durable rubber sole with traction for stability',
      '– adjustable lacing system for a secure fit',
      '– signature LV branding on the tongue and heel'
    ]
  },
    { 
      id: 'MM_buffs_black',
      name: 'MM Buffs In Black',
      type: 'shoes',
      price: 230,
      image: MMBuffsBlackFront,
      images: [MMBuffsBlackFront,MMBuffsBlack],
      description: [
        "– premium black leather and mesh upper for durability and breathability",
        "– distinctive all-black design for a sleek, modern look",
        "– durable rubber sole with traction for stability",
        "– adjustable lacing system for a secure fit",
        "– subtle branding on the tongue and heel for a premium finish"

      ]
    
    }

  
];

export default clotheData;