import {Plataform} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoriesMealsScreen
    }, 
    MealDetail : MealDetailScreen

},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Plataform.OS === 'android' ? Colors.primaryColor : '' 
        },
        headerTintColor: Plataform.OS === 'android' ? 'white' : Colors.primaryColor 
    } 
});

export default createAppContainer(MealsNavigator);