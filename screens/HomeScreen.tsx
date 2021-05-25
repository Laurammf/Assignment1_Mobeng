import React from 'react';
import { Text, View, StyleSheet, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firebase from 'firebase';
import FoodList from './FoodList';
  import { AntDesign } from '@expo/vector-icons'; 
  import { Feather } from '@expo/vector-icons'; 
 import {} from '@expo/vector-icons'
 import { FontAwesome } from '@expo/vector-icons';
import CompleteList from './CompleteList';

import UncompleteList from './UncompleteList';


const firebaseConfig = {
  apiKey: "AIzaSyAX5-G-4NpqelfXMZ5ETNL-i5z_kEAk8uU",
  authDomain: "foodapp-laurafonseca.firebaseapp.com",
  projectId: "foodapp-laurafonseca",
  storageBucket: "foodapp-laurafonseca.appspot.com",
  messagingSenderId: "876368040928",
  appId: "1:876368040928:web:7da342f1cb93f6d1f59185",
  measurementId: "G-1GBN84GKQX"
};
if (!firebase.apps.length) {
  // firebase.initializeApp({});
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); 
}


const Home= ({navigation}) =>{
  return (
    <View  style={{marginTop: 150, width: 200, height: 50, backgroundColor: 'powderblue'}}>
      <Text>
        Welcome to Shramba!
      </Text>
      <Button title='FoodList' onPress={() => navigation.navigate("FoodList")}>
      </Button>

    </View>
  );
}


const MyTabs = () => {
  const Tab = createBottomTabNavigator();

  const FirstIcon = <AntDesign name="home" size={24} color="black" />
  const SecondIcon = <AntDesign name="plus" size={24} color="black" />
  const ThirdIcon = <Feather name="list" size={24} color="black" />
  const FourthIcon = <FontAwesome name="list-ol" size={21} color="black" />

// const Stack = createStackNavigator;

  return(
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{title:"Home"
          , tabBarIcon: () => FirstIcon
        }}
          
        />
        <Tab.Screen
          name="FoodList"
          component={FoodList}
          options={{title:"Add"   
          , tabBarIcon: () => SecondIcon
        }}
        />
        <Tab.Screen
          name="CompleteList"
          component={CompleteList}
          options={{title:"CompleteList"
          , tabBarIcon: () => ThirdIcon
    }}
        />
        <Tab.Screen
          name="UncompleteList"
          component={UncompleteList}
          options={{title:"UncompleteList"
          , tabBarIcon: () => ThirdIcon
    }}
        />
 

      </Tab.Navigator>
  )
}





  
export default function HomeScreen() {

  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}


 const styles = StyleSheet.create({
  container: {

  },
 
});


