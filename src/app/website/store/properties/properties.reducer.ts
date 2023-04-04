// import { createReducer, on } from '@ngrx/store';
// import { initialState } from './counter.state';

import { createReducer } from '@ngrx/store';
import { propertiesState } from './properties.state';

// const _counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }),
//   on(decrement, (state) => {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }),
//   on(reset, (state) => {
//     return {
//       ...state,
//       counter: 0,
//     };
//   }),
//   on(customIncrement, (state, action) => {
//     return {
//       ...state,
//       counter: state.counter + action.value,
//     };
//   }),
//   on(changeText, (state) => {
//     return {
//       ...state,
//       text: 'Hallo!',
//     };
//   })
// );

// export function counterReducer(state, action) {
//   return _counterReducer(state, action);
// }

const _propertiesReducer = createReducer(propertiesState);

export function propertiesReducer(state, action) {
  return _propertiesReducer(state, action);
}
