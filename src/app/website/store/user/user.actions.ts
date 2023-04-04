import { createAction, props } from '@ngrx/store';

export const updateUser = createAction(
  'updateUser',
  props<{ name: string; email: string }>()
);
