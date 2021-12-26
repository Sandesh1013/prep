import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,Button} from 'react-native';

const Cscreen=()=>{
    const [counter,setCounter]=useState(0);
    //The 0 in the bracket stands for initial value
    return <View>
        <Button title='Increment' onPress={()=>{
            setCounter(counter+1);
        }}/>
        <Button title='Decrement' onPress={()=>{
            setCounter(counter-1);
        }}/>
        <Text>Counter Number:{counter}</Text>
    </View>
}

const styles=StyleSheet.create({});

export default Cscreen;