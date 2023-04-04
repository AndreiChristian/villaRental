export interface UserState {
  name: string;
  email: string;
}

export const initialUserState: UserState = {
  name: 'John',
  email: 'john@gmail.com',
};
