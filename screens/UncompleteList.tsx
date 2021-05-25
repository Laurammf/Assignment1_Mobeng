import React, {useEffect, useState} from 'react';
import { Text, Button, StyleSheet, SafeAreaView, FlatList, ScrollView, View } from 'react-native';
import {getFoodsMissData} from '../api/FoodsApi'
import { Divider, ListItem } from 'react-native-elements';
import FoodList from './FoodList';
import { createNavigatorFactory } from '@react-navigation/core';



const UncompleteList = ({navigation, qryItem}) =>{
    return (
      <ScrollView  style={{marginTop: 70}}>
        <Text>The List of Uncomplete Ingredients</Text>
          <Text style={styles.Medium}>Name</Text>
          <Text style={styles.Small}>category, place, confection</Text>
        
        <MyListMissData qryItem={'category.category'}/>
        <MyListMissData qryItem={'place.place'}/>
        <MyListMissData qryItem={'category.category'}/>
    </ScrollView>
  
    )
  }


  const MyListMissData = ({qryItem}) => {

    const [foodList, setFoodList] = useState([]);


    useEffect(() => {
        getFoodsMissData(onFoodsReceived, qryItem);
      }, []);
  
  
      const onFoodsReceived = (foodList: any) => {
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
                      <ListItem.Title style={styles.Medium}>
                        {item.name.name}
                        <Button color="dodgerblue" title="EDIT" style={styles.Button}></Button>
                      </ListItem.Title>
                      <ListItem.Title style={styles.Small}>
                      {item.category.category} {", "} {item.place.place} {", "} {item.confection.confection} {     }
                      </ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
                );
              }
            }
            />
            )
  }

  export default UncompleteList;



  const styles = StyleSheet.create({
  Medium: {
    fontSize : 20
  },
  Small:{
    fontSize : 12 
  },
  Button: {
    height: 30, 
  }
  });


