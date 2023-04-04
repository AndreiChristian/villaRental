import { PropertyType } from 'src/app/interfaces/property.interface';
import { propertiesReducer } from './properties/properties.reducer';

export interface AppState {
  properties: PropertyType[];
}

export const appReducer = {
  properties: propertiesReducer,
};
