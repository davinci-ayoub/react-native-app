import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';

const MealItem = props=>{
    return(
        <View style={styles.mealItem}>
        
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow,...styles.mealHeader}}>
                <ImageBackground source={{uri: props.image}} style={styles.bgImage} ><Text style={styles.title}>{props.title}</Text></ImageBackground>
                    
                </View>
                <View style={{...styles.mealRow,...styles.mealDetail}}>
                <Text>{props.duration}</Text>
                <Text>{props.complexity}</Text>
                <Text>{props.affordability}
                </Text>
                </View>   
            </View>
        </TouchableOpacity>
        </View> 
    );
};

const styles =StyleSheet.create({
    mealRow:{
        flexDirection:'row'
    },
    mealItem:{
      height:200,
      width:'100%',
    backgroundColor:'#ccc',
    borderRadius:10,
    overflow:'hidden',
    marginBottom:10
    },
    mealHeader:{
        height:'90%'
    },
    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between'
    },
    bgImage:{
       width:'100%',
       height:'100%',
       justifyContent:'flex-end'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.7)',
        paddingHorizontal:12,
        paddingVertical:5,
        textAlign:'center'

    }
});

export default MealItem;