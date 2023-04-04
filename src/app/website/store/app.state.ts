import { PropertyType } from 'src/app/interfaces/property.interface';
import { propertiesReducer } from './properties/properties.reducer';
import { UserState } from './user/user.state';
import { userReducer } from './user/user.reducer';
import { propertiesState } from './properties/properties.state';

export interface AppState {
  properties: propertiesState;
  user: UserState;
}

export const appReducer = {
  properties: propertiesReducer,
  user: userReducer,
};
