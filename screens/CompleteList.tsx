import React, {useEffect, useState} from 'react';
import { Text, Button, StyleSheet, SafeAreaView, FlatList, ScrollView, View } from 'react-native';
import {getFoods} from '../api/FoodsApi'
import { Divider, ListItem } from 'react-native-elements';



const CompleteList = ({navigation}) =>{
    return (
      <ScrollView  style={{marginTop: 70}}>
        <Text>
          The Complete List of Ingredients Added in Temporal Ascending Order:
        </Text>
        <Text style={styles.Medium}>Name</Text>
        <Text style={styles.Small}>category, place, confection, best before: </Text>
        <MyListComplete/>
    </ScrollView>
  
    )
  }


  const MyListComplete = () => {

    const [foodList, setFoodList] = useState([]);
    useEffect(() => {
      getFoods(onFoodsReceived);
    }, []);

    const onFoodsReceived = (foodList: any) => {
      console.log(foodList);
      setFoodList(foodList);
    }

    return ( 
    <FlatList
              data={foodList}
              ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
              keyExtractor={(item, index) => index.toString()}
              renderItem = {({ item, index }) => {
    
                return (
                  <ListItem key={index}>
                    <ListItem.Content>
                      <ListItem.Title style={styles.Medium}>{item.name.name}</ListItem.Title>
                      <ListItem.Title style={styles.Small}>
                        {item.category.category} {", "} {item.place.place} {", "} {item.confection.confection} 
                        {/* {", BB: "} {item.date.date.toDate().toString()} */}
                      </ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
                );
              }
            }
            />
            )
  }

  export default CompleteList;



  const styles = StyleSheet.create({
  Medium: {
    fontSize : 20
  },
  Small:{
    fontSize : 12 
  }
  });
