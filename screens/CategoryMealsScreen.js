import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';


import {CATEGORIES,MEALS} from '../data/dummy-data';
//import Meal from '../models/meal';

import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
  const reanderMealItem=itemData=>{
  return (<MealItem title={itemData.item.title} 
    image={itemData.item.imageUrl}
    affordability={itemData.item.affordability} 
    complexity={itemData.item.complexity} 
    duration={itemData.item.duration} onSelectMeal={()=>{
      props.navigation.navigate({routeName:'MealDetail',params:{mealID:itemData.item.id}});
    }}
    />);
  };

  const catId=props.navigation.getParam('categoryId');

  //const selectedCategory=CATEGORIES.find(cat =>cat.id===catId);

  const displayedMeals=MEALS.filter( 
    meal =>meal.categoryIds.indexOf(catId)>=0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item,index)=>item.id}
        renderItem={reanderMealItem}
        style={{width:'100%'}}
         />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory=CATEGORIES.find(cat =>cat.id===catId);
  return {
    headerTitle:selectedCategory.title,
    headerStyle:{
      backgroundColor:'white'
    }
  }
};





const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
