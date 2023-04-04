import { createReducer, on } from '@ngrx/store';
import { initialUserState } from './user.state';
import { updateUser } from './user.actions';

const _userReducer = createReducer(
  initialUserState,

  on(updateUser, (state, action) => {
    return {
      ...state,
      name: action.name,
      email: action.email,
    };
  })
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
