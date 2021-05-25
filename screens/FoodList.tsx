

import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Button, Switch, SafeAreaView, TextInput, ActivityIndicator } from 'react-native';
import {addFood, getFoods} from '../api/FoodsApi'
import DatePicker from 'react-native-datepicker';
import {Picker} from '@react-native-picker/picker';

interface Food {
  name: string;
  category: string;
  place:string;
  confection: string;
  date: Date;
}


const placeOptions = [
  {value: "Select an Option", label: "Select an Option"},
  {value: "Fridge", label: "Fridge" },
  {value: "Freezer", label: "Freezer" },
  {value: "Pantry", label: "Pantry" },
  {value: "Drawer", label: "Drawer" },
  {value: "Cabinet", label: "Cabinet" },
];

const categoryOptions = [
  {value: "Select an Option", label: "Select an Option"},
  {value: "Cereal", label: "Cereal"},
  {value: "Fresh", label: "Fresh" },
  {value: "Liquid", label: "Liquid" },
  {value: "Frozen", label: "Frozen" },
  {value: "Sugary", label: "Sugary" },
  {value: "Longterm", label: "Longterm" },
  {value: "Fet", label: "Fet" },
  {value: "Spices", label: "Spices" },

]; 

const confectionOptions = [
  {value: "Select an Option", label: "Select an Option"},
  {value: "Bottle", label: "Bottle"},
  {value: "Cured", label: "Cured" },
  {value: "Plastic", label: "Plastic" },
  {value: "Paperbag", label: "Paperbag" },
  {value: "Canned", label: "Canned" }
];



const FoodList = ({navigation, route}) => {


    

  const [foodList, setFoodList] = useState([]);


  //useEffect, onFoodsReceived were here (in case something gos wrong)


  const onFoodAdded = (food) => {
    console.log("callback from api: ", food);
    const oldFoodList = foodList; 
    oldFoodList.push(food);
    setFoodList(oldFoodList);
  }


    const [name, setName] = useState('');
    const [category, setCategory] = useState('Select an Option');
    const [place, setPlace] = useState('Select an Option');
    const [confection, setConfection] = useState('Select an Option');
    const [date, setDate] = useState(new Date());

    const mySubmitFunction = ({name, category, place, confection, date}
      ) =>{
      if (!name.trim()) {
        alert('Please Enter Name!');
        return;
      }
       else {
        addFood(
          {             
            name: {name},
            category: {category},
            place: {place},
            confection: {confection},
            date: {date}
          })
  }
}
  


        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.container}>
            <Text style={styles.title}>Add Ingredients to Your Schramba!</Text>
                  <Text style={{marginBottom:3}}>Food name (mandatory): </Text>  
                    <TextInput
                      value={name}
                      style={styles.input}
                      onChangeText={setName}
                    />
                  <Text style={{marginBottom:3}}>Choose Category:</Text> 
                    <Picker selectedValue={category}  onValueChange={(itemValue, itemIndex) => setCategory(itemValue)} style={styles.pickStyle}>
                      {categoryOptions.map(list => <Picker.Item label={list.label} value={list.label} />)}
                    </Picker>
                  <Text style={{marginBottom:3}}>Choose Place: </Text>  
                    <Picker selectedValue={place}  onValueChange={(itemValue, itemIndex) => setPlace(itemValue)} style={styles.pickStyle}>
                      {placeOptions.map(list => <Picker.Item label={list.label} value={list.label} />)}
                    </Picker>
                  <Text style={{marginBottom:3}}>Choose Confection: </Text>  
                    <Picker selectedValue={confection}  onValueChange={(itemValue, itemIndex) => setConfection(itemValue)} style={styles.pickStyle}>
                      {confectionOptions.map(list => <Picker.Item label={list.label} value={list.label} />)}
                    </Picker>
                   
                  <Text>Best Before </Text>
                      <DatePicker
                        // style={styles.datePickerStyle}
                        date={date} // Initial date from state
                        value={date}
                        mode="date" // The enum of date, datetime and time
                        format="DD-MM-YYYY"
                        minDate="26-05-2021"
                        maxDate="31-12-2030"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            //display: 'none',
                            position: 'absolute', 
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                          },
                          dateInput: {
                            marginLeft: 36,
                          },
                        }}
                        onDateChange={setDate}
                        // onChange={handleDateChange}
                        // onDateChange={(date) => {
                        //   setDate(date);
                        // }}
                        // onChange={(value) => setDate(value)}
                      />
                    <Button
                      title="Submit"
                      onPress={()=> mySubmitFunction({name, category, place, confection, date})}
                      onFoodAdded       
                    />
              </View>  
             </SafeAreaView> 
        )
                      }
               

      export default FoodList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    margin: 10
  },
  title: {
    marginTop: 8,
    fontSize:18
  },
  input: {
    borderWidth: 1,
    height: 25
  }
});

