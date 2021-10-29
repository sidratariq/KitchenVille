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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      steps
    } = recipieData;
    const recipie = { description, note,steps};

    return database.ref(`users/${uid}/recipies`).push(recipie).then((ref) => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/recipies/${id}`).remove().then(() => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
   return database.ref(`users/${uid}/recipies/${id}`).update(updates).then(()=>{
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/recipies`).once('value').then((snapshot) => {
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