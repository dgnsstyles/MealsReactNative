import React from 'react';
import { View, Text, FlatList, StyleSheet, Touchable, TouchableOpacity} from 'react-native'

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors'
import CategoryGridTile from '../components/CategoryGridTile'



const CategoriesScreen = props => {
  const renderGridItem = (itemData) => {
     return <CategoryGridTile  
             title={itemData.item.title}
             color={itemDate.item.color}
             onSelect={() => {
              props.navigation.navigate({
                routeName: 'CategoryMeals',
                params: {
                  categoryId: itemData.item.id
                }
              })
             }}/>
      
  }
  return (
   <FlatList data={CATEGORIES} renderItem={renderGridItem } numColumns={2} />
  );
}

CategoriesScreen.navigationsOptions = {
   headerTitle: 'Meal Categories',
   headerStyle: {
        backgroundColor: Colors.primaryColor
   },
   headerTintColor: 'white'
};

const styles =  StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center' ,
    alignItems: 'center',

  }

}) 

export default CategoriesScreen;