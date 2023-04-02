export interface Amenity {
  id: number;
  name: string;
  level: 'house' | 'room' | 'individual';
  adultOnly: boolean;
  photo?: string;
}

export interface AmenitySubSection {
  id: number;
  name: string;
  amenities: Amenity[];
}

export interface AmenitySection {
  id: number;
  name: string;
  groups: AmenitySubSection[];
}
