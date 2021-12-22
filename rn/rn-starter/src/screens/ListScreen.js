import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen=()=>{
    const friends=[
        {name:'Friend 2'},
        {name:'Friend 3'},
        {name:'Friend 4'},
        {name:'Friend 6'},
    ]
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator
            keyExtractor={(friend)=>friend.name} 
            //Better way
            data={friends}
            renderItem={({item})=>{
                return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
        />
    ); 
};
//buttons now
const styles=StyleSheet.create({
    textStyle:{
        marginVertical:50
    },
});

export default ListScreen;