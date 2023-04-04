import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PropertyType } from 'src/app/interfaces/property.interface';
import { AppState } from '../app.state';
import { propertiesState } from './properties.state';

// const getCounterState = createFeatureSelector<CounterState>('counter');

// export const getCounter = createSelector(getCounterState, (state) => {
//   return state.counter;
// });

const getPropertiesState = createFeatureSelector<propertiesState>('properties');

export const getPropertiesList = createSelector(
  getPropertiesState,
  (state) => {
    return state;
  }
);
