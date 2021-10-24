// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RECIPIE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_RECIPIE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_RECIPIE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};
