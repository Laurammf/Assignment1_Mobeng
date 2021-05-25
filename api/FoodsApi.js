import firebase from 'firebase'
import firestore from '@react-native-firebase/firestore'
// import * as firebase from 'firebase/app'

export function addFood (food, addComplete){
    firebase.firestore()
    .collection('Foods')
    .add({
        name: food.name,
        category: food.category,
        place: food.place,
        confection: food.confection,
        date: firebase.firestore.Timestamp.fromDate(new Date()).toDate(food.date),
        // date: food.date.fromDate(),
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then((snapshot)=>snapshot.get())
        .then((foodData)=>addComplete(foodData.data()))
        .catch((error)=> console.log(error));
}


// const created = firebase.firestore.Timestamp.fromDate(new Date()).toDate());
// You have to import firebase from 'firebase/app' explicitly in your code.






export function deleteFood (food, deleteComplete){
    firebase.firestore()
    .collection('Foods')
    .doc(food.id).delete()
    .then(()=>deleteComplete())
    .catch((error)=> console.log(error));
}



// send back listem of food items
export async function getFoods(foodsRetrieved){
    var foodList = [];

    var snapshot = await firebase.firestore()
    .collection('Foods')
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc)=> {
        foodList.push(doc.data());
    });

    console.log(foodList);

    foodsRetrieved(foodList);
}


// Logical OR queries. In this case, you should create a separate query for 
// each OR condition and merge the query results in your app. https://rnfirebase.io/firestore/usage

export async function getFoodsMissData(foodsRetrieved2, qryItem){
    var foodList = [];

    var snapshot = await firebase.firestore()
    .collection('Foods')
    .where(qryItem, '==','Select an Option')
    .get()

    snapshot.forEach((doc)=> {
        foodList.push(doc.data());
    });


    foodsRetrieved2(foodList);
// }
}
