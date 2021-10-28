// import {database} from '../firebase/firebase';
import database from '../firebase/firebase';

// ADD_RECIPIE
export const addRecipie = (recipie) => {
  return ( 
    {
    type: 'ADD_Recipie',
    recipie
  }
  )};


export const startAddRecipie = (recipieData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = recipieData;
    const recipie = { description, note, amount, createdAt };

    return database.ref('recipies').push(recipie).then((ref) => {
      dispatch(addRecipie({
        id: ref.key,
        ...recipie
      }));
    });
  };
};

// REMOVE_RECIPIE
export const removeRecipie = ({ id } = {}) => ({
  type: 'REMOVE_RECIPIE',
  id
});

export const startRemoveRecipie = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`recipies/${id}`).remove().then(() => {
      dispatch(removeRecipie({ id }));
    });
  };
};


// EDIT_RECIPIE
export const editRecipie = (id, updates) => ({
  type: 'EDIT_RECIPIE',
  id,
  updates
});

export const startEditRecipie = (id, updates) =>{
  return (dispatch)=>{
   return database.ref(`recipies/${id}`).update(updates).then(()=>{
      dispatch(editRecipie(id,updates));
    })
}
}

// SET_RECIPIES
export const setRecipies = (recipies) => ({
  type: 'SET_RECIPIES',
  recipies
});

// export const startSetRecipies;


export const startSetRecipies = () => {
  return (dispatch) => {
    return database.ref('recipies').once('value').then((snapshot) => {
      const recipies = [];

      snapshot.forEach((childSnapshot) => {
        recipies.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setRecipies(recipies));
    });
  };
};