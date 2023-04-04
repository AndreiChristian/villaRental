import { createReducer } from '@ngrx/store';
import { propertiesState, propertiesinitialState } from './properties.state';
import { AppState } from '../app.state';
import { PropertyType } from 'src/app/interfaces/property.interface';

const _propertiesReducer = createReducer(propertiesinitialState);

export function propertiesReducer(state, action) {
  return _propertiesReducer(state, action);
}
