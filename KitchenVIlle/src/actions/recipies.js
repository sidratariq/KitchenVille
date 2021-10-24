import uuid from 'uuid';

// ADD_RECIPIE
export const addRecipie = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_RECIPIE',
  recipie: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_RECIPIE
export const removeRecipie = ({ id } = {}) => ({
  type: 'REMOVE_RECIPIE',
  id
});

// EDIT_RECIPIE
export const editRecipie = (id, updates) => ({
  type: 'EDIT_RECIPIE',
  id,
  updates
});
