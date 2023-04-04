import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PropertyType } from 'src/app/interfaces/property.interface';

// const getCounterState = createFeatureSelector<CounterState>('counter');

// export const getCounter = createSelector(getCounterState, (state) => {
//   return state.counter;
// });

// export const getText = createSelector(getCounterState, (state) => {
//   return state.text;
// });

const getPropertiesState = createFeatureSelector<PropertyType[]>('properties');

export const getPropertiesList = createSelector(
  createFeatureSelector,
  (state) => {
    return state;
  }
);