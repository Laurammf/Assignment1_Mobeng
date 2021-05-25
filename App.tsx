
 import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import CompleteList from './screens/CompleteList';
import FoodList from './screens/FoodList';
import HomeScreen from './screens/HomeScreen'
import UncompleteList from './screens/UncompleteList';


const Navigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    FoodList: FoodList,
    CompleteList: CompleteList, 
    UncompleteList: UncompleteList
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(Navigator);

