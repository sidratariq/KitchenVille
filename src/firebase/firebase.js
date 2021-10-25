import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDGOwGvqiI52LdfeA3r4DDHHspOz58Jybg",
    authDomain: "kitchenville-eb4d3.firebaseapp.com",
    databaseURL: "https://kitchenville-eb4d3-default-rtdb.firebaseio.com",
    projectId: "kitchenville-eb4d3",
    storageBucket: "kitchenville-eb4d3.appspot.com",
    messagingSenderId: "155736950229",
    appId: "1:155736950229:web:31e499880ca6f5d2aba95c",
    measurementId: "G-YGY1FFZ53E"
};


firebase.initializeApp(config);

const database = firebase.database();

// Setup Recipies with three items (Description, note, amount, createdAt)
// child_removed

// child_removed
database.ref('recipies').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_changed
  database.ref('recipies').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_added
  database.ref('recipies').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  

//subscription 
// database.ref('recipies')
// .on('value',(snapshot)=>{
    // const recipies = [];
// 
    // snapshot.forEach(childSnapshot => {
        // recipies.push({
            // id: childSnapshot.key,
            // ...childSnapshot.val()
        // });
    // });
    // console.log("Value of recipie",recipies);
// });

//Fetching data 
// database.ref('recipies')
// .once('value')
// .then((snapshot)=>{
    // const recipies = [];
// 
    // snapshot.forEach(childSnapshot => {
        // recipies.push({
            // id: childSnapshot.key,
            // ...childSnapshot.val()
        // });
    // });
    // console.log("Value of recipie",recipies);
// });


// database.ref('recipies').push({
//     description:"Biryani",
//     note:"",
//     amount:800,
//     createdAt:237632287,
//     ingredients:'',
//     steps:''
// });


// <------------------ Notes --------------->>
// database.ref('notes').push(
// {
    // title:'Course Topic',
    // body:'React Native, Angular, React ionic'
// })


// Insert
// database.ref().set({
//     name: 'Sidra Tariq',
//     age: 24,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Berlin',
//       country: 'Germany'
//     }
//   }).then(() => {
//     console.log('Data is saved!');
//   }).catch((e) => {
//     console.log('This failed.', e);
//   });


// Fetch 
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   })

// Setup data sub -> Andrew is a Software Developer at Amazon.

// Change the data and make sure it reprints

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });


// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// Remove
// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });