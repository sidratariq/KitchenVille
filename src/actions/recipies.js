import {database} from '../firebase/firebase';

// ADD_RECIPIE
export const addRecipie = (recipie) => {
  console.log("Value of the recipie",recipie)
  return ( 
    {
    type: 'ADD_EXPENSE',
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

// export const startAddRecipie = (recipieData = {}) =>{
//   console.log("Iam the DB value",database)
//     return (dispatch) =>{
//       const {description = '',
//       note = '',
//       amount = 0,
//       createdAt = 0} = recipieData;

//       const recipie = {description,note, amount,createdAt}

//       database().ref("recipies").push(recipie).then((ref)=>{
//         dispatch(addRecipie(
//           {
//             id: ref.key,
//             ...recipie
//           }
//         ))
//       });
//     };
// };

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
