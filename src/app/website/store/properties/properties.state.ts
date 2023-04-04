import { PropertyType } from 'src/app/interfaces/property.interface';

export interface propertiesState {
  properties: PropertyType[];
}

export const propertiesinitialState: propertiesState = {
  properties: [
    {
      id: 1,
      name: 'Villa Magnolia',
      description:
        'Villa Magnolia is a beautiful villa in the heart of the city of San Jose. It is a 3 bedroom, 2 bathroom villa with a large living room, dining room, and kitchen. The villa i',
      src: 'assets/images/villas/1.jpg',
    },
    {
      id: 2,
      name: 'Villa Bella',
      description:
        'Villa Bella is a beautiful villa in the heart of the city of San Jose. It is a 3 bedroom, 2 bathroom villa with a large living room, dining room, and kitchen. The villa i',
      src: 'assets/images/villas/2.jpg',
    },
    {
      id: 3,
      name: 'Villa Alba',
      description:
        'Villa Alba is a beautiful villa in the heart of the city of San Jose. It is a 3 bedroom, 2 bathroom villa with a large living room, dining room, and kitchen. The villa i',
      src: 'assets/images/villas/3.jpg',
    },
    {
      id: 4,
      name: 'Villa Rosa',
      description:
        'Villa Rosa is a beautiful villa in the heart of the city of San Jose. It is a 3 bedroom, 2 bathroom villa with a large living room, dining room, and kitchen. The villa i',
      src: 'assets/images/villas/4.jpg',
    },
  ],
};
