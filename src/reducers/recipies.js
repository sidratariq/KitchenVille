// Recipies Reducer

const recipiesReducerDefaultState = [];

export default (state = recipiesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RECIPIE':
      return [
        ...state,
        action.recipie
      ];
    case 'REMOVE_RECIPIE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_RECIPIE':
      return state.map((recipie) => {
        if (recipie.id === action.id) {
          return {
            ...recipie,
            ...action.updates
          };
        } else {
          return recipie;
        };
      });
    case 'SET_RECIPIES':
      return action.recipies;
    default:
      return state;
  }
};
