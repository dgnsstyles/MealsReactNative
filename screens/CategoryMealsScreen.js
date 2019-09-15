import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoriesScreen from './CategoriesScreen';

const CategoryMeals = props => {
  const catID = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id == catID);
  return (
      <View style={styles.screen}>
        <Text>The Category Meals Screen!!</Text>
        <Text>{selectedCategory.title}</Text>
        <Button title="Go to Details" onPress={()=>{
          props.navigation.navigate({
            routeName: 'MealDetail'
          })
        }}/>
        <Button title="Go Back" 
        onPress={()=> {
          props.navigation.pop();
        }}/>
      </View>
  );
}

CategoriesScreen.navigationsOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
}

const styles =  StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center' ,
    alignItems: 'center',

  }
}) 

export default CategoryMeals;