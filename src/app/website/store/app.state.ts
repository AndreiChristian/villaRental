import { PropertyType } from 'src/app/interfaces/property.interface';
import { propertiesReducer } from './properties/properties.reducer';
import { UserState } from './user/user.state';
import { userReducer } from './user/user.reducer';

export interface AppState {
  properties: PropertyType[];
  user: UserState;
}

export const appReducer = {
  properties: propertiesReducer,
  user: userReducer,
};
