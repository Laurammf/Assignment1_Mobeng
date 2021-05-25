//FoodList 21.05


// old version before 21.05

// import React, {useEffect, useState} from 'react';
// import { Text, View, StyleSheet, Button, Switch, SafeAreaView, TextInput, ActivityIndicator } from 'react-native';
// import {addFood, getFoods} from '../api/FoodsApi'
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
// import {ListItem, Divider} from 'react-native-elements';
// import Select from "react-select";
// import DatePicker from 'react-native-datepicker';


// interface Food {
//   name: string;
//   category: string;
//   place:string;
//   confection: string;
//   date: Date;
// }


// const placeOptions = [
//   {value: "x", label: "Select an Option"},
//   {value: "Fridge", label: "Fridge" },
//   {value: "Freezer", label: "Freezer" },
//   {value: "Pantry", label: "Pantry" },
//   {value: "Drawer", label: "Drawer" },
//   {value: "Cabinet", label: "Cabinet" },
// ];

// const categoryOptions = [
//   {value: "Meat", label: "Meat"},
//   {value: "Cereal", label: "Cereal"},
//   {value: "Fresh", label: "Fresh" },
//   {value: "Liquid", label: "Liquid" },
//   {value: "Frozen", label: "Frozen" },
//   {value: "Sugary", label: "Sugary" },
//   {value: "Longterm", label: "Longterm" },
//   {value: "Fet", label: "Fet" },
//   {value: "Spices", label: "Spices" },

// ]; 

// const confectionOptions = [
//   {value: "Canned", label: "Canned"},
//   {value: "Bottle", label: "Bottle"},
//   {value: "Cured", label: "Cured" },
//   {value: "Plastic", label: "Plastic" },
//   {value: "Paperbag", label: "Paperbag" },
//   {value: "Canned", label: "Canned" }
// ];



// const FoodList = ({navigation, route}) => { 
    

//   const [foodList, setFoodList] = useState([]);


//   //useEffect, onFoodsReceived were here (in case something goe wrong)


//   const onFoodAdded = (food) => {
//     console.log("callback from api: ", food);
//     const oldFoodList = foodList; // changed var to const
//     oldFoodList.push(food);
//     setFoodList(oldFoodList);
//   }


//     const [name, setName] = useState('insert name');
//     const [category, setCategory] = useState('');
//     const [place, setPlace] = useState('');
//     const [confection, setConfection] = useState('');
//     const [date, setDate] = useState(new Date());

//         return (
//             <SafeAreaView style={styles.container}>
//                 {/* <View> */}
//                   <Text style={{marginBottom:3}}>Insert food name</Text>  
//                     <TextInput
//                       value={name}
//                       style={styles.input}
//                       onChangeText={setName}
//                     />
//                     <Text style={{marginBottom:3}}>Choose Category:</Text>  
//                       <Select
//                         value={category}
//                         options={categoryOptions}
//                         onChange={setCategory}     
//                       /> 
//                     <Text style={{marginBottom:3}}>Choose Place: </Text>  
//                       <Select
//                         value={place}
//                         options={placeOptions}
//                         onChange={setPlace}     
//                       /> 
//                     <Text style={{marginBottom:3}}>Choose Confection Type: </Text>  
//                       <Select
//                         value={confection}
//                         options={confectionOptions}
//                         onChange={setConfection}     
//                       /> 
//                     <Text>Best Before </Text>
//                       <DatePicker
//                         // style={styles.datePickerStyle}
//                         date={date} // Initial date from state
//                         value={date}
//                         mode="date" // The enum of date, datetime and time
//                         format="DD-MM-YYYY"
//                         minDate="26-05-2021"
//                         maxDate="31-12-2030"
//                         confirmBtnText="Confirm"
//                         cancelBtnText="Cancel"
//                         customStyles={{
//                           dateIcon: {
//                             //display: 'none',
//                             position: 'absolute', 
//                             left: 0,
//                             top: 4,
//                             marginLeft: 0,
//                           },
//                           dateInput: {
//                             marginLeft: 36,
//                           },
//                         }}
//                         onDateChange={setDate}
//                         // onChange={handleDateChange}
//                         // onDateChange={(date) => {
//                         //   setDate(date);
//                         // }}
//                         // onChange={(value) => setDate(value)}
//                       />
//                     <Button
//                       title="Submit"
//                       onPress={()=> addFood(
//                         {             
//                           name: {name},
//                           category: {category},
//                           place: {place},
//                           confection: {confection},
//                           date: {date}
//                         },
//                         onFoodAdded       
//                       )} 
//                     />
//               {/* </View>   */}
//             </SafeAreaView>
//         )
//     }



//     const MyList = () => {
//       const [foodList, setFoodList] = useState([]);
//       useEffect(() => {
//         // console.log("foodlist component loaded:");
//         getFoods(onFoodsReceived);
//       }, []);
//       const onFoodsReceived = (foodList: any) => {
//         console.log(foodList);
//         setFoodList(foodList);
//       }
//       return ( 
//       <FlatList
//                 data={foodList}
//                 ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem = {({ item, index }) => {
//                   // console.log("item name is: ", item.name);
//                   // console.log("category " + item.category.category.label)
//                   return (
//                     <ListItem key={index}>
//                       <ListItem.Content>
//                         <ListItem.Title>{item.name.name}</ListItem.Title>
//                         <ListItem.Title>{item.category.category.label}</ListItem.Title>
//                       </ListItem.Content>
//                     </ListItem>
//                   );
//                 }
//               }
//               />
//               )
//     }



    



// // secure version of flatlist 
//   //   <FlatList
//   //   data={foodList}
//   //   ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
//   //   keyExtractor={(item, index) => index.toString()}
//   //   renderItem = {({ item, index }) => {
//   //     console.log("item name is: ", item);
//       // return (
//       //   <ListItem key={index}>
//       //     <ListItem.Content>
//       //       <ListItem.Title>{item.name.name}</ListItem.Title>
//       //       {/* <ListItem.Title>{item.name}</ListItem.Title> */}
//       //     </ListItem.Content>
//       //   </ListItem>
//       // );
//   //   }
//   // }
//   // />














// import React, {useState} from 'react';
// import { Text, View, StyleSheet, Button, Switch, TextInput, ActivityIndicator, AsyncStorage } from 'react-native';
// import { Formik } from 'formik';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import * as yup from "yup";
// import Select from "react-select";
// import Constants from 'expo-constants';
// import {Persist} from 'formik-persist'
// import { valueContainerCSS } from 'react-select/src/components/containers';



// const InputField = ({label, formikProps, formikKey, ...rest}) => (
//     <View style={{marginHorizontal:20, marginVertical:5}}>
//       <Text style={{marginBottom:3}}>{label}</Text>  
//       <TextInput 
//         style={{
//           borderWidth:1,
//           borderColor: "black",
//           padding: 10,
//           marginBottom: 3
//         }}
//         onChangeText={formikProps.handleChange(formikKey)} 
//         {...rest}
//         />
//       <Text style={{color: "red"}}>{formikProps.errors.[formikKey]}</Text>
//   </View>
//   )

//   const validationSchema = yup.object().shape({
//       name: yup.string().label('name').required(),
//       category: yup.string().label('Category'), 
//       place: yup.string().label('Place'),
//       confectiontype: yup.string().label('Confectiontype'),
//       bestbefore: yup.date(),
//       // place: yup.array().label('Place').max(1)
//       //         .of(yup.object().shape({
//       //           label: yup.string().required(),
//       //           value: yup.string().required()
//       //     })
//       })
  
  
  
  
//       const MySelect = ({label, formikProps, formikKey, options, ...rest}) => (
//         <View style={{marginHorizontal:20, marginVertical:5}}>
//         <Text style={{marginBottom:3}}>{label}</Text>  
//               <Select
//               styles={selectStyle}
//               options={options}
//               // onChange={this.handleChange}
//               // onBlur={this.handleBlur}
//               // value={this.props.value}
//               onChangeText={formikProps.handleChange(formikKey)}
//               {...rest}
//               />
//         </View>
//       )
  
//         //fix this
//       const categoryOptions = [
//         {value: "x", label: "Canned"},
//         {value: "Fresh", label: "Fresh" },
//         {value: "Liquid", label: "Liquid" },
//         {value: "Frozen", label: "Frozen" },
//         {value: "Sugary", label: "Sugary" },
//         {value: "Longterm", label: "Longterm" },
//       ];
      
        
//       const placeOptions = [
//         {value: "x", label: "Select an Option"},
//         {value: "Fridge", label: "Fridge" },
//         {value: "Freezer", label: "Freezer" },
//         {value: "Pantry", label: "Pantry" },
//         {value: "Drawer", label: "Drawer" },
//         {value: "Cabinet", label: "Cabinet" },
//       ];
  
//       const confectionOptions = [
//         {value: "x", label: "Canned"},
//         {value: "Bottle", label: "Bottle"},
//         {value: "Cured", label: "Cured" },
//         {value: "Plastic", label: "Plastic" },
//         {value: "Paperbag", label: "Paperbag" },
//         {value: "Canned", label: "Canned" }
//       ];


//     interface FoodItem {
//         foodid: string;
//         name:string;
//         category: string;
//         place: string;
//         confectiontype: string;
//         bestbefore: string;
//       }
  


//    const Add = props => {

    

//     return (
//     <SafeAreaView style={{marginTop:90}}>
//         <Formik
//         initialValues={{  name: "",
//                             category: "", 
//                             place:"",
//                             confectiontype: "",
//                             bestbefore: "" //change here
//                             }} 
//         onSubmit={(values, actions) => 
//             {alert(JSON.stringify(values));
//             setTimeout(()=> {
//                 actions.setSubmitting(false);}, 1000);
//         }}
//         validationSchema={validationSchema}
//         >
//       {formikProps=> (
//         <React.Fragment>
//           <InputField
//             placeholder="insert ingredient"
//             label="Food Name:"
//             formikProps={formikProps}
//             formikKey="name"
//           />
//           <MySelect
//            label="Category:"
//            formikProps={formikProps}
//            formikKey="catgory"
//            options={categoryOptions}
//             /> 
//           <MySelect
//            label="Place:"
//            formikProps={formikProps}
//            formikKey="place"
//            options={placeOptions}
//             /> 
//           <MySelect
//            label="Confection Type:"
//            formikProps={formikProps}
//            formikKey="confectiontype"
//            options={confectionOptions}
//             /> 
//            <InputField
//                 placeholder="dd-mm-yyyy"
//                 label="Best Before:"
//                 formikProps={formikProps}
//                 formikKey="bestbefore"
//           />
//             {formikProps.isSubmitting 
//                         ? (<ActivityIndicator/>)
//                         :(<Button title="Submit" onPress={formikProps.handleSubmit} />)}
//                         {/* onPress={formikProps.handleSubmit} */}
//         </React.Fragment>
//     )}
  
//     </Formik>

//     </SafeAreaView>
//    );
// };

//    const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingTop: Constants.statusBarHeight,
//       backgroundColor: '#ecf0f1',
//       padding: 8,
//     },
//     paragraph: {
//       margin: 24,
//       fontSize: 18,
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//   });
  
//   const homestyles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingTop: Constants.statusBarHeight,
//       backgroundColor: '#ecf0f1',
//       padding: 800,
//     },
//     // paragraph: {
//     //   margin: 24,
//     //   fontSize: 18,
//     //   fontWeight: 'bold',
//     //   textAlign: 'center',
//     //   paddingTop: 50  },
//   });
//   const selectStyle = {
//     menu: base => ({
//       ...base,
//       zIndex: 100,
//       borderWidth:1,
//       borderColor: "black",
//       padding: 10,
//       marginBottom: 3
//     })
//   }
  


//    export default Add;





























// import React, {setState}, {Component} from 'react';
// import { Text, View, StyleSheet, Button, Switch, TextInput, ActivityIndicator, AsyncStorage } from 'react-native';
// import { Form, Formik } from 'formik';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import * as yup from "yup";
// import Select from "react-select";
// import Constants from 'expo-constants';
// import {Persist} from 'formik-persist'
// import { valueContainerCSS } from 'react-select/src/components/containers';





// const InputField = ({label, formikProps, formikKey, ...rest}) => (
//     <View style={{marginHorizontal:20, marginVertical:5}}>
//       <Text style={{marginBottom:3}}>{label}</Text>  
//       <TextInput 
//         style={{
//           borderWidth:1,
//           borderColor: "black",
//           padding: 10,
//           marginBottom: 3
//         }}
//         onChangeText={formikProps.handleChange(formikKey)} 
//         {...rest}
//         />
//       <Text style={{color: "red"}}>{formikProps.errors.[formikKey]}</Text>
//   </View>
//   )

//   const validationSchema = yup.object().shape({
//       name: yup.string().label('name').required(),
//       category: yup.string().label('Category'), 
//       place: yup.string().label('Place'),
//       confectiontype: yup.string().label('Confectiontype'),
//       bestbefore: yup.date(),
//       // place: yup.array().label('Place').max(1)
//       //         .of(yup.object().shape({
//       //           label: yup.string().required(),
//       //           value: yup.string().required()
//       //     })
//       })
  
  
  
  
//       const MySelect = ({label, formikProps, formikKey, options, ...rest}) => (
//         <View style={{marginHorizontal:20, marginVertical:5}}>
//         <Text style={{marginBottom:3}}>{label}</Text>  
//               <Select
//               styles={selectStyle}
//               options={options}
//               // onChange={this.handleChange}
//               // onBlur={this.handleBlur}
//               // value={this.props.value}
//               onChangeText={formikProps.handleChange(formikKey)}
//               {...rest}
//               />
//         </View>
//       )
  
//       const categoryOptions = [
//         {value: "x", label: "Canned"},
//         {value: "Fresh", label: "Fresh" },
//         {value: "Liquid", label: "Liquid" },
//         {value: "Frozen", label: "Frozen" },
//         {value: "Sugary", label: "Sugary" },
//         {value: "Longterm", label: "Longterm" },
//       ];
      
        
//       const placeOptions = [
//         {value: "x", label: "Select an Option"},
//         {value: "Fridge", label: "Fridge" },
//         {value: "Freezer", label: "Freezer" },
//         {value: "Pantry", label: "Pantry" },
//         {value: "Drawer", label: "Drawer" },
//         {value: "Cabinet", label: "Cabinet" },
//       ];
  
//       const confectionOptions = [
//         {value: "x", label: "Canned"},
//         {value: "Bottle", label: "Bottle"},
//         {value: "Cured", label: "Cured" },
//         {value: "Plastic", label: "Plastic" },
//         {value: "Paperbag", label: "Paperbag" },
//         {value: "Canned", label: "Canned" }
//       ];


//     interface FoodItem {
//         foodid: string;
//         name:string;
//         category: string;
//         place: string;
//         confectiontype: string;
//         bestbefore: string;
//       }
  


//    class Add extends Component { 
//      state = {
//       name:"",
//       category: "",
//       place: "",
//       confectiontype: "",
//       bestbefore: "",
//      }

//     render(){
//     return ( 
//         <Formik
//           onSubmit={values=>this.setState(values)}
//           initialValues={{  name: "",
//                             category: "", 
//                             place:"",
//                             confectiontype: "",
//                             bestbefore: "" //change here
//                             }} 
        
//           validationSchema={validationSchema}
//         >
//       {formikProps=> ( 
//         <Form>
//             <InputField
//               placeholder="insert ingredient"
//               label="Food Name:"
//               formikProps={formikProps}
//               formikKey="name"
//             />
//             <MySelect
//             label="Category:"
//             formikProps={formikProps}
//             formikKey="catgory"
//             options={categoryOptions}
//               /> 
//             <MySelect
//             label="Place:"
//             formikProps={formikProps}
//             formikKey="place"
//             options={placeOptions}
//               /> 
//             <MySelect
//             label="Confection Type:"
//             formikProps={formikProps}
//             formikKey="confectiontype"
//             options={confectionOptions}
//               /> 
//             <InputField
//                 placeholder="dd-mm-yyyy"
//                 label="Best Before:"
//                 formikProps={formikProps}
//                 formikKey="bestbefore"
//             />
//               {formikProps.isSubmitting 
//                           ? (<ActivityIndicator/>)
//                           :(<Button title="Submit" onPress={formikProps.handleSubmit} />)}
//       <Form> )}
//     </Formik>
//     {JSON.stringify(this.state)}
//     )
// }

//    const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingTop: Constants.statusBarHeight,
//       backgroundColor: '#ecf0f1',
//       padding: 8,
//     },
//     paragraph: {
//       margin: 24,
//       fontSize: 18,
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//   });
  
//   const homestyles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingTop: Constants.statusBarHeight,
//       backgroundColor: '#ecf0f1',
//       padding: 800,
//     },
//     // paragraph: {
//     //   margin: 24,
//     //   fontSize: 18,
//     //   fontWeight: 'bold',
//     //   textAlign: 'center',
//     //   paddingTop: 50  },
//   });
//   const selectStyle = {
//     menu: base => ({
//       ...base,
//       zIndex: 100,
//       borderWidth:1,
//       borderColor: "black",
//       padding: 10,
//       marginBottom: 3
//     })
//   }
  


//    export default Add;












// const InputField = ({label, formikProps, formikKey, ...rest}) => (
//     <View style={{marginHorizontal:20, marginVertical:5}}>
//       <Text style={{marginBottom:3}}>{label}</Text>  
//       <TextInput 
//         style={{
//           borderWidth:1,
//           borderColor: "black",
//           padding: 10,
//           marginBottom: 3
//         }}
//         onChangeText={formikProps.handleChange(formikKey)} 
//         {...rest}
//         />
//       <Text style={{color: "red"}}>{formikProps.errors.[formikKey]}</Text>
//   </View>
//   )

//   const validationSchema = yup.object().shape({
//       name: yup.string().label('name').required(),
//       category: yup.string().label('Category'), 
//       place: yup.string().label('Place'),
//       confectiontype: yup.string().label('Confectiontype'),
//       bestbefore: yup.date(),
//       // place: yup.array().label('Place').max(1)
//       //         .of(yup.object().shape({
//       //           label: yup.string().required(),
//       //           value: yup.string().required()
//       //     })
//       })
  
  
  
  
//       const MySelect = ({label, formikProps, formikKey, options, ...rest}) => (
//         <View style={{marginHorizontal:20, marginVertical:5}}>
//         <Text style={{marginBottom:3}}>{label}</Text>  
//               <Select
//               styles={selectStyle}
//               options={options}
//               // onChange={this.handleChange}
//               // onBlur={this.handleBlur}
//               // value={this.props.value}
//               onChangeText={formikProps.handleChange(formikKey)}
//               {...rest}
//               />
//         </View>
//       )
  
//       const categoryOptions = [
//         {value: "x", label: "Canned"},
//         {value: "Fresh", label: "Fresh" },
//         {value: "Liquid", label: "Liquid" },
//         {value: "Frozen", label: "Frozen" },
//         {value: "Sugary", label: "Sugary" },
//         {value: "Longterm", label: "Longterm" },
//       ];
      
        
//       const placeOptions = [
//         {value: "x", label: "Select an Option"},
//         {value: "Fridge", label: "Fridge" },
//         {value: "Freezer", label: "Freezer" },
//         {value: "Pantry", label: "Pantry" },
//         {value: "Drawer", label: "Drawer" },
//         {value: "Cabinet", label: "Cabinet" },
//       ];
  
//       const confectionOptions = [
//         {value: "x", label: "Canned"},
//         {value: "Bottle", label: "Bottle"},
//         {value: "Cured", label: "Cured" },
//         {value: "Plastic", label: "Plastic" },
//         {value: "Paperbag", label: "Paperbag" },
//         {value: "Canned", label: "Canned" }
//       ];


//     interface FoodItem {
//         foodid: string;
//         name:string;
//         category: string;
//         place: string;
//         confectiontype: string;
//         bestbefore: string;
//       }
  


//    class Add extends Component { 
//      state = {
//       name:"",
//       color: ""
//      }
//     render(){
//     return ( 
//         <Formik
//           onSubmit={values=>this.setState(values)}
//           initialValues={{  name: "",
//                             color: "", 
//                             }} 
        
//           validationSchema={validationSchema}
//         >
//       {formikProps=> ( 
//         <Form>
//           <label htmlFor="name">name</label>
//             <Field id="name" name="name"
//             /> 
//           <label htmlFor="color">select</label>
//            <Field as="select" name="color">
//              <option value="red">Red</option>
//              <option value="green">Green</option>
//              <option value="blue">Blue</option>
//           </Field>
//       </Form> )   }
//     </Formik>
//     {JSON.stringify(this.state)};
//     )
//       }
//        }
  
   

//    const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingTop: Constants.statusBarHeight,
//       backgroundColor: '#ecf0f1',
//       padding: 8,
//     },
//     paragraph: {
//       margin: 24,
//       fontSize: 18,
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//   });
  
//   const homestyles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingTop: Constants.statusBarHeight,
//       backgroundColor: '#ecf0f1',
//       padding: 800,
//     },
//     // paragraph: {
//     //   margin: 24,
//     //   fontSize: 18,
//     //   fontWeight: 'bold',
//     //   textAlign: 'center',
//     //   paddingTop: 50  },
//   });
//   const selectStyle = {
//     menu: base => ({
//       ...base,
//       zIndex: 100,
//       borderWidth:1,
//       borderColor: "black",
//       padding: 10,
//       marginBottom: 3
//     })
//   }
  


















  

// const InputField = ({label, formikProps, formikKey, ...rest}) => (
//     <View style={{marginHorizontal:20, marginVertical:5}}>
//       <Text style={{marginBottom:3}}>{label}</Text>  
//       <TextInput 
//         style={{
//           borderWidth:1,
//           borderColor: "black",
//           padding: 10,
//           marginBottom: 3
//         }}
//         onChangeText={formikProps.handleChange(formikKey)} 
//         {...rest}
//         />
//       <Text style={{color: "red"}}>{formikProps.errors.[formikKey]}</Text>
//   </View>
//   )

//   const validationSchema = yup.object().shape({
//       name: yup.string().label('name').required(),
//       category: yup.string().label('Category'), 
//       place: yup.string().label('Place'),
//       confectiontype: yup.string().label('Confectiontype'),
//       bestbefore: yup.date(),
//       // place: yup.array().label('Place').max(1)
//       //         .of(yup.object().shape({
//       //           label: yup.string().required(),
//       //           value: yup.string().required()
//       //     })
//       })
  
  
  
  
//       const MySelect = ({label, formikProps, formikKey, options, ...rest}) => (
//         <View style={{marginHorizontal:20, marginVertical:5}}>
//         <Text style={{marginBottom:3}}>{label}</Text>  
//               <Select
//               styles={selectStyle}
//               options={options}
//               // onChange={this.handleChange}
//               // onBlur={this.handleBlur}
//               // value={this.props.value}
//               onChangeText={formikProps.handleChange(formikKey)}
//               {...rest}
//               />
//         </View>
//       )
  
//       const categoryOptions = [
//         {value: "x", label: "Canned"},
//         {value: "Fresh", label: "Fresh" },
//         {value: "Liquid", label: "Liquid" },
//         {value: "Frozen", label: "Frozen" },
//         {value: "Sugary", label: "Sugary" },
//         {value: "Longterm", label: "Longterm" },
//       ];
      
        
//       const placeOptions = [
//         {value: "x", label: "Select an Option"},
//         {value: "Fridge", label: "Fridge" },
//         {value: "Freezer", label: "Freezer" },
//         {value: "Pantry", label: "Pantry" },
//         {value: "Drawer", label: "Drawer" },
//         {value: "Cabinet", label: "Cabinet" },
//       ];
  
//       const confectionOptions = [
//         {value: "x", label: "Canned"},
//         {value: "Bottle", label: "Bottle"},
//         {value: "Cured", label: "Cured" },
//         {value: "Plastic", label: "Plastic" },
//         {value: "Paperbag", label: "Paperbag" },
//         {value: "Canned", label: "Canned" }
//       ];


//     interface FoodItem {
//         foodid: string;
//         name:string;
//         category: string;
//         place: string;
//         confectiontype: string;
//         bestbefore: string;
//       }
  


//    class Add extends Component { 
//      state = {
//       name:"",
//       category: "",
//       place: "",
//       confectiontype: "",
//       bestbefore: "",
//      }

//     render(){
//     return ( 
//         <Formik
//           onSubmit={values=>this.setState(values)}
//           initialValues={{  name: "",
//                             category: "", 
//                             place:"",
//                             confectiontype: "",
//                             bestbefore: "" //change here
//                             }} 
        
//           validationSchema={validationSchema}
//         >
//       {formikProps=> ( 
//         <Form>
//             <InputField
//               placeholder="insert ingredient"
//               label="Food Name:"
//               formikProps={formikProps}
//               formikKey="name"
//             />
//             <MySelect
//             label="Category:"
//             formikProps={formikProps}
//             formikKey="catgory"
//             options={categoryOptions}
//               /> 
//             <MySelect
//             label="Place:"
//             formikProps={formikProps}
//             formikKey="place"
//             options={placeOptions}
//               /> 
//             <MySelect
//             label="Confection Type:"
//             formikProps={formikProps}
//             formikKey="confectiontype"
//             options={confectionOptions}
//               /> 
//             <InputField
//                 placeholder="dd-mm-yyyy"
//                 label="Best Before:"
//                 formikProps={formikProps}
//                 formikKey="bestbefore"
//             />
//               {formikProps.isSubmitting 
//                           ? (<ActivityIndicator/>)
//                           :(<Button title="Submit" onPress={formikProps.handleSubmit} />)}
//       <Form> )}
//     </Formik>
//     {JSON.stringify(this.state)}
//     )
// }

//    const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingTop: Constants.statusBarHeight,
//       backgroundColor: '#ecf0f1',
//       padding: 8,
//     },
//     paragraph: {
//       margin: 24,
//       fontSize: 18,
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//   });
  
//   const homestyles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingTop: Constants.statusBarHeight,
//       backgroundColor: '#ecf0f1',
//       padding: 800,
//     },
//     // paragraph: {
//     //   margin: 24,
//     //   fontSize: 18,
//     //   fontWeight: 'bold',
//     //   textAlign: 'center',
//     //   paddingTop: 50  },
//   });
//   const selectStyle = {
//     menu: base => ({
//       ...base,
//       zIndex: 100,
//       borderWidth:1,
//       borderColor: "black",
//       padding: 10,
//       marginBottom: 3
//     })
//   }
  

// stack screen code
// const StackNavigator = () => {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//           name="Home"
//           component={Home}
//           options= {{title: "Home Screen", 
//           headerLeft: ()=><Text>left</Text>,      //onPress={()=>navigation.push("Home")} />}
//           headerRight: ()=><Button title="right" onPress={()=>navigation.navigate("Home")} />}}
//       />
//       <Stack.Screen
//           name="ExpSoon"
//           component={ExpSoon}
//           //change page title according to parameters given
//           // options= {({route, navigation}) => ({title: `Expires for ${route.params.name}`})}  
           
//       />
//      <Stack.Screen
//           name="Add"
//           component={FoodList}
//           options= {{title: "Add ingredients to your shramba!"}}   
//       />
//     <Stack.Screen
//           name="Display"
//           component={Display}
//           options= {{title: "Third Screen"}}   
//       />   
//     </Stack.Navigator>
//   )
// }


//latest add 20 may
// import React, {Component} from 'react';
// import { Text, View, StyleSheet, Button, Switch, TextInput, ActivityIndicator, AsyncStorage } from 'react-native';
// import { Field, Form, Formik } from 'formik';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import * as yup from "yup";
// import Select from "react-select";
// import Constants from 'expo-constants';
// import {Persist} from 'formik-persist';
// import { valueContainerCSS } from 'react-select/src/components/containers';
// import firebase from 'firebase';

// // var firebase = require('firebase');
// // var app = firebase.initializeApp({ ... });

// const firebaseConfig = {
//   apiKey: "AIzaSyAX5-G-4NpqelfXMZ5ETNL-i5z_kEAk8uU",
//   authDomain: "foodapp-laurafonseca.firebaseapp.com",
//   databaseURL: "https://foodapp-laurafonseca.firebaseio.com",
//   projectId: "foodapp-laurafonseca",
//   storageBucket: "foodapp-laurafonseca.appspot.com",
//   messagingSenderId: "876368040928",
//   appId: "1:876368040928:web:7da342f1cb93f6d1f59185",
//   measurementId: "G-measurement-id"
// };


// if (!firebase.apps.length) {
//   // firebase.initializeApp({});
//   firebase.initializeApp(firebaseConfig);
// }else {
//   firebase.app(); // if already initialized, use that one
// }

// firebase.initializeApp(firebaseConfig);



// function storeHighScore(userId, score) {
//   firebase
//     .database()
//     .ref('users/' + userId)
//     .set({
//       highscore: score,
//     });
// }

// const InputField = ({label, formikProps, formikKey, ...rest}) => (
//   <View style={{marginHorizontal:20, marginVertical:5}}>
//     <Text style={{marginBottom:3}}>{label}</Text>  
//     <TextInput 
//       style={{
//         borderWidth:1,
//         borderColor: "black",
//         padding: 10,
//         marginBottom: 3
//       }}
//       onChangeText={formikProps.handleChange(formikKey)} 
//       {...rest}
//       />
//     <Text style={{color: "red"}}>{formikProps.errors.[formikKey]}</Text>
// </View>
// )

// const validationSchema = yup.object().shape({
//     name: yup.string().label('name').required(),
//     category: yup.string().label('Category'), 
//     place: yup.string().label('Place'),
//     confectiontype: yup.string().label('Confectiontype'),
//     bestbefore: yup.date(),
//     // place: yup.array().label('Place').max(1)
//     //         .of(yup.object().shape({
//     //           label: yup.string().required(),
//     //           value: yup.string().required()
//     //     })
//     })


//     const MySelect = ({label, formikProps, formikKey, options, ...rest}) => (
//       <View style={{marginHorizontal:20, marginVertical:5}}>
//       <Text style={{marginBottom:3}}>{label}</Text>  
//             <Select
//             styles={selectStyle}
//             options={options}
//             // onChange={this.handleChange}
//             // onBlur={this.handleBlur}
//             // value={this.props.value}
//             onChangeText={formikProps.handleChange(formikKey)}
//             {...rest}
//             />
//       </View>
//     )

//       //fix this
//     const categoryOptions = [
//       {value: "x", label: "Canned"},
//       {value: "Fresh", label: "Fresh" },
//       {value: "Liquid", label: "Liquid" },
//       {value: "Frozen", label: "Frozen" },
//       {value: "Sugary", label: "Sugary" },
//       {value: "Longterm", label: "Longterm" },
//     ];
    
      
//     const placeOptions = [
//       {value: "x", label: "Select an Option"},
//       {value: "Fridge", label: "Fridge" },
//       {value: "Freezer", label: "Freezer" },
//       {value: "Pantry", label: "Pantry" },
//       {value: "Drawer", label: "Drawer" },
//       {value: "Cabinet", label: "Cabinet" },
//     ];

//     const confectionOptions = [
//       {value: "x", label: "Canned"},
//       {value: "Bottle", label: "Bottle"},
//       {value: "Cured", label: "Cured" },
//       {value: "Plastic", label: "Plastic" },
//       {value: "Paperbag", label: "Paperbag" },
//       {value: "Canned", label: "Canned" }
//     ];


//   interface FoodItem {
//       foodid: string;
//       name:string;
//       category: string;
//       place: string;
//       confectiontype: string;
//       bestbefore: string;
//     }



//  const Add = props => {

//   return (
//   <SafeAreaView style={{marginTop:90}}>
//       <Formik
//       initialValues={{  name: "",
//                           category: "", 
//                           place:"",
//                           confectiontype: "",
//                           bestbefore: "" //change here
//                           }} 
//       onSubmit={(values, actions) => 
//           {alert(JSON.stringify(values));
//           setTimeout(()=> {
//               actions.setSubmitting(false);}, 1000);
//       }}
//       validationSchema={validationSchema}
//       >
//     {formikProps=> (
//       <React.Fragment>
//         <InputField
//           placeholder="insert ingredient"
//           label="Food Name:"
//           formikProps={formikProps}
//           formikKey="name"
//         />
//         <MySelect
//          label="Category:"
//          formikProps={formikProps}
//          formikKey="category"
//          options={categoryOptions}
//           /> 
//         <MySelect
//          label="Place:"
//          formikProps={formikProps}
//          formikKey="place"
//          options={placeOptions}
//           /> 
//         <MySelect
//          label="Confection Type:"
//          formikProps={formikProps}
//          formikKey="confectiontype"
//          options={confectionOptions}
//           /> 
//          <InputField
//               placeholder="dd-mm-yyyy"
//               label="Best Before:"
//               formikProps={formikProps}
//               formikKey="bestbefore"
//         />
//             <Persist name="foodform"></Persist>
//           {formikProps.isSubmitting 
//                       ? (<ActivityIndicator/>)
//                       :(<Button title="Submit" onPress={formikProps.handleSubmit} />)}
//       </React.Fragment>
//   )}
//   </Formik>
//   {/* {JSON.stringify(values)} */}
//   </SafeAreaView>
  
//  );
            
  
 
// };

//  const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// const homestyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 800,
//   },
//   // paragraph: {
//   //   margin: 24,
//   //   fontSize: 18,
//   //   fontWeight: 'bold',
//   //   textAlign: 'center',
//   //   paddingTop: 50  },
// });
// const selectStyle = {
//   menu: base => ({
//     ...base,
//     zIndex: 100,
//     borderWidth:1,
//     borderColor: "black",
//     padding: 10,
//     marginBottom: 3
//   })
// }



//  export default Add;






 


// class FoodList extends Component {
//     colors = ['red', 'blue', 'magenta', 'orange'];
    
//     state = {
//         foodList: [],
//         currentFoodItem: null,
//     }

//     onFoodAdded = (food) => {
//         console.log("food added");
//         console.log(food)
//     }

//     onFoodsReceived = (foodList) => {
//         console.log(foodList);
//         this.setState(prevState=>({
//             foodList: prevState.foodList = foodList
//         }));
//     }

//     componentDidMount() {
      //      getFoods(this.onFoodsReceived);
//     }

//     render(){
//         return (
//             <SafeAreaView>
//                 <View>
//                     <TextInput
//                     style={styles.input}
//                     placeholder="this"
//                     value={this.state.currentFoodItem}
//                     onChangeText={(text)=>this.setState(prevState=>({
//                         currentFoodItem: prevState.currentFoodItem=text
//                     }))}
//                     />
//                 <Button>
//                 title="Submit"
//                 style={styles.button}
//                 onPress={()=> 
//                   addFood({
//                     name: this.state.currentFoodItem,
//                     color: this.colors[Math.random()*this.colors.length];
//                   })                  
          //  this.onFoodAdded
// 
// }
//               </Button>
//               </View>
//               <FlatList
//                 data={this.state.foodList}
//                 keyExtractor={(item,index)=>index.toString()}
//                 renderItem={({item})=>{
//                   console.log(item);
//                   return (
//                     <ListItem
//                     title={items.name}
//                     subtitle={iteratorSymbol.color}
//                     onPress={()=>{ }}
//                     />
//                   );
//                 }}
//               />
//             </SafeAreaView>

//         )
//     }
// }




// export default FoodList;





//functional code from page add, 18 may 2021



// import React, {useEffect, useState} from 'react';
// import { Text, View, StyleSheet, Button, Switch, SafeAreaView, TextInput, ActivityIndicator } from 'react-native';
// import {addFood, getFoods} from '../api/FoodsApi'
// // import firebase from 'firebase';
// import { FlatList } from 'react-native-gesture-handler';
// import {ListItem, Divider} from 'react-native-elements';
// import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
// import { Field, Form, Formik } from 'formik';
// import * as yup from "yup";
// import Select from "react-select";
// // import { DateInput } from 'react-native-date-input';
// import DatePicker from 'react-native-datepicker/datepicker';
// import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';


// interface Food {
//   name: string;
//   category: string;
//   place:string;
//   confection: string;
//   date: Date;
// }


// const placeOptions = [
//   {value: "x", label: "Select an Option"},
//   {value: "Fridge", label: "Fridge" },
//   {value: "Freezer", label: "Freezer" },
//   {value: "Pantry", label: "Pantry" },
//   {value: "Drawer", label: "Drawer" },
//   {value: "Cabinet", label: "Cabinet" },
// ];

// const categoryOptions = [
//   {value: "Meat", label: "Meat"},
//   {value: "Cereal", label: "Cereal"},
//   {value: "Fresh", label: "Fresh" },
//   {value: "Liquid", label: "Liquid" },
//   {value: "Frozen", label: "Frozen" },
//   {value: "Sugary", label: "Sugary" },
//   {value: "Longterm", label: "Longterm" },
//   {value: "Fet", label: "Fet" },
//   {value: "Spices", label: "Spices" },

// ]; 

// const confectionOptions = [
//   {value: "Canned", label: "Canned"},
//   {value: "Bottle", label: "Bottle"},
//   {value: "Cured", label: "Cured" },
//   {value: "Plastic", label: "Plastic" },
//   {value: "Paperbag", label: "Paperbag" },
//   {value: "Canned", label: "Canned" }
// ];


// type Callback = () => void

// type FoodCallback = (arg: Food[]) => void


// const FoodList = () => { 
    

//   const [foodList, setFoodList] = useState([]);

//   const [list, setList] = useState<Food[]>([]);

//   useEffect(() => {
//     console.log("foodlist component loaded:");
//     getFoods(onFoodsReceived);
//   }, []);


//   const onFoodsReceived = (foodList: any) => {
//     console.log(foodList);
//     setFoodList(foodList);
//   }

//   const onFoodAdded = (food) => {
//     console.log("callback from api: ", food);
//     var oldFoodList = foodList;
//     oldFoodList.push(food);
//     setFoodList(oldFoodList);
//   }
//     const [name, setName] = useState('insert name');
//     const [category, setCategory] = useState('');
//     const [place, setPlace] = useState('');
//     const [confection, setConfection] = useState('');
//     const [date, setDate] = useState('');
//         return (
//             <SafeAreaView style={styles.container}>
//                 <View>
//                   <Text style={{marginBottom:3}}>Insert food name</Text>  
//                     <TextInput
//                       value={name}
//                       style={styles.input}
//                       onChangeText={setName}
//                     />
//                     <Text style={{marginBottom:3}}>Choose Category:</Text>  
//                       <Select
//                         value={category}
//                         options={categoryOptions}
//                         onChange={setCategory}     
//                       /> 
//                     <Text style={{marginBottom:3}}>Choose Place: </Text>  
//                       <Select
//                         value={place}
//                         options={placeOptions}
//                         onChange={setPlace}     
//                       /> 
//                     <Text style={{marginBottom:3}}>Choose Confection Type: </Text>  
//                       <Select
//                         value={confection}
//                         options={confectionOptions}
//                         onChange={setConfection}     
//                       /> 
//                     <Text>Best Before </Text>
//                       <DatePicker
//                         // style={styles.datePickerStyle}
//                         // date={date} // Initial date from state
//                         value={date}
//                         // mode="date" // The enum of date, datetime and time
//                         format="DD-MM-YYYY"
//                         // minDate="26-05-2021"
//                         // maxDate="31-12-2030"
//                         confirmBtnText="Confirm"
//                         cancelBtnText="Cancel"
//                         customStyles={{
//                           dateIcon: {
//                             //display: 'none',
//                             position: 'absolute', 
//                             left: 0,
//                             top: 4,
//                             marginLeft: 0,
//                           },
//                           dateInput: {
//                             marginLeft: 36,
//                           },
//                         }}
//                         onDateChange={(date) => {
//                           setDate(date);
//                         }}
//                       />
//                     <Button
//                       title="Submit"
//                       onPress={()=> addFood(
//                         {             
//                           name: {name},
//                           category: {category},
//                           place: {place},
//                           confection: {confection},
//                           date: {date}
//                         },
//                         onFoodAdded       
//                       )} 
//                     />
//                 <Button title="Test"
//                   onPress={() => console.log("Test")} />
//               </View>
//               <FlatList
//                 data={foodList}
//                 ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem = {({ item, index }) => {
//                   console.log("item name is: ", item);
//                   return (
//                     <ListItem key={index}>
//                       <ListItem.Content>
//                         <ListItem.Title>{item.name.name}</ListItem.Title>
//                       </ListItem.Content>
//                     </ListItem>
//                   );
//                 }
//               }
//               />
//             </SafeAreaView>
//         )
//     }

// export default FoodList;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   listItem: {
//     marginTop: 8,
//     marginBottom: 8
//   },
//   textContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   titleStyle: {
//     fontSize: 30
//   },
//   subtitleStyle: {
//     fontSize: 18
//   },
//   emptyTitle: {
//     fontSize: 32,
//     marginBottom: 16
//   },
//   emptySubtitle: {
//     fontSize: 18,
//     fontStyle: 'italic'
//   }
// });


//myList, Flatlist, Button onPress submit

  




// secure version of onPress
    // onPress={()=> addFood(
    //   {             
    //     name: {name},
    //     category: {category},
    //     place: {place},
    //     confection: {confection},
    //     date: {date}
    //   },



//     const mySubmitFunction = ({name}
//       // {name, category, place, confection, date}
//       ) =>{
//       if (!name.trim()) {
//         alert('Please Enter Name');
//         return;
//       }
//   //      else {
//   //       addFood(
//   //         {             
//   //           name: {name},
//   //           category: {category},
//   //           place: {place},
//   //           confection: {confection},
//   //           date: {date}
//   //         })
//   // }
// }



    // const MyList = () => {
    //   const [foodList, setFoodList] = useState([]);
    //   useEffect(() => {
    //     // console.log("foodlist component loaded:");
    //     getFoods(onFoodsReceived);
    //   }, []);
    //   const onFoodsReceived = (foodList: any) => {
    //     console.log(foodList);
    //     setFoodList(foodList);
    //   }
    //   return ( 
    //   <FlatList
    //             data={foodList}
    //             ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
    //             keyExtractor={(item, index) => index.toString()}
    //             renderItem = {({ item, index }) => {
    //               // console.log("item name is: ", item.name);
    //               // console.log("category " + item.category.category.label)
    //               return (
    //                 <ListItem key={index}>
    //                   <ListItem.Content>
    //                     <ListItem.Title>{item.name.name}</ListItem.Title>
    //                     <ListItem.Title>{item.category.category}</ListItem.Title>
    //                   </ListItem.Content>
    //                 </ListItem>
    //               );
    //             }
    //           }
    //           />
    //           )
    // }



// secure version of flatlist 
  //   <FlatList
  //   data={foodList}
  //   ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
  //   keyExtractor={(item, index) => index.toString()}
  //   renderItem = {({ item, index }) => {
  //     console.log("item name is: ", item);
      // return (
      //   <ListItem key={index}>
      //     <ListItem.Content>
      //       <ListItem.Title>{item.name.name}</ListItem.Title>
      //       {/* <ListItem.Title>{item.name}</ListItem.Title> */}
      //     </ListItem.Content>
      //   </ListItem>
      // );
  //   }
  // }
  // />

