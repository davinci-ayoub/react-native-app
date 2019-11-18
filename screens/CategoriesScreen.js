import React from 'react';
import { View, Text, StyleSheet,FlatList,TouchableOpacity } from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../Constants/Colors';


const CategoriesScreen = props => {
  const renderGridItem=(itemData)=>{
    return(
      <TouchableOpacity style={styles.gridItem} onPress={
        ()=>{
          props.navigation.navigate({routeName:'CategoryMeals',params:{
            categoryId:itemData.item.id
          }});
        }
      }>
        <View style={{...styles.container,...{backgroundColor:itemData.item.color}}} >
          <Text>{itemData.item.title}</Text>
          </View>
        </TouchableOpacity>
    );  
    };
  return (
    <FlatList 
    keyExtractor={(item,index)=>item.id}
    data={CATEGORIES} 
    renderItem={renderGridItem} 
    numColumns={2}/>
  );
};

CategoriesScreen.navigationOptions={
  headerTitle:'Meal Categories',
  headerStyle:{
    backgroundColor:Colors.primaryColor
  },
  headerTintColor:Colors.accentColor
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem:{
    flex:1,
    margin:8 ,
    height:150
  },
  container:{
    flex:1,
    borderRadius:10,
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:10,
    elevation:3,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    padding:15
  }
});

export default CategoriesScreen;
