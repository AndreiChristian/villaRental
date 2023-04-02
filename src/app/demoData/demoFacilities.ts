import {
  Amenity,
  AmenitySection,
  AmenitySubSection,
} from '../interfaces/amenities.interface';

export const redWine: AmenitySubSection = {
  id: 1,
  name: 'Red Wine',
  amenities: [
    {
      id: 1,
      name: 'Cabernet Sauvignon',
      level: 'individual',
      adultOnly: true,
      photo:
        'https://www.winefolly.com/wp-content/uploads/2014/10/cabernet-sauvignon.jpg',
    },
    {
      id: 2,
      name: 'Merlot',
      level: 'individual',
      adultOnly: true,
      photo: 'https://www.winefolly.com/wp-content/uploads/2014/10/merlot.jpg',
    },
    {
      id: 3,
      name: 'Pinot Noir',
      level: 'individual',
      adultOnly: true,
      photo:
        'https://www.winefolly.com/wp-content/uploads/2014/10/pinot-noir.jpg',
    },
    {
      id: 4,
      name: 'Syrah',
      level: 'individual',
      adultOnly: true,
      photo: 'https://www.winefolly.com/wp-content/uploads/2014/10/syrah.jpg',
    },
  ],
};

export const whiteWine: AmenitySubSection = {
  id: 2,
  name: 'White Wine',
  amenities: [
    {
      id: 5,
      name: 'Chardonnay',
      level: 'individual',
      adultOnly: true,
      photo:
        'https://www.winefolly.com/wp-content/uploads/2014/10/chardonnay.jpg',
    },
    {
      id: 6,
      name: 'Pinot Grigio',
      level: 'individual',
      adultOnly: true,
      photo:
        'https://www.winefolly.com/wp-content/uploads/2014/10/pinot-grigio.jpg',
    },
    {
      id: 7,
      name: 'Riesling',
      level: 'individual',
      adultOnly: true,
      photo:
        'https://www.winefolly.com/wp-content/uploads/2014/10/riesling.jpg',
    },
    {
      id: 8,
      name: 'Sauvignon Blanc',
      level: 'individual',
      adultOnly: true,
      photo:
        'https://www.winefolly.com/wp-content/uploads/2014/10/sauvignon-blanc.jpg',
    },
  ],
};

export const champagne: AmenitySubSection = {
  id: 3,
  name: 'Champagne',
  amenities: [
    {
      id: 9,
      name: 'Moet & Chandon',
      level: 'individual',
      adultOnly: true,
      photo:
        'https://www.winefolly.com/wp-content/uploads/2014/10/champagne.jpg',
    },
    {
      id: 10,
      name: 'Veuve Clicquot',
      level: 'individual',
      adultOnly: true,
      photo:
        'https://www.winefolly.com/wp-content/uploads/2014/10/champagne.jpg',
    },
    {
      id: 11,
      name: 'Dom Perignon',
      level: 'individual',
      adultOnly: true,
      photo:
        'https://www.winefolly.com/wp-content/uploads/2014/10/champagne.jpg',
    },
    {
      id: 12,
      name: 'Krug',
      level: 'individual',
      adultOnly: true,
      photo:
        'https://www.winefolly.com/wp-content/uploads/2014/10/champagne.jpg',
    },
  ],
};

export const beverages: AmenitySection = {
  id: 1,
  name: 'Beverages',
  groups: [redWine, whiteWine, champagne],
};
