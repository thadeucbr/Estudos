// Esse reducer será responsável por tratar as informações da pessoa usuária
const ADD_EMAIL = 'ADD_EMAIL';

const INITIAL_STATE = { email: '' };
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
