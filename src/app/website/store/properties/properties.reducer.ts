import { createReducer } from '@ngrx/store';
import { propertiesState } from './properties.state';
import { AppState } from '../app.state';
import { PropertyType } from 'src/app/interfaces/property.interface';

const _propertiesReducer = createReducer(propertiesState);

export function propertiesReducer(state: PropertyType[], action) {
  return _propertiesReducer(state, action);
}
