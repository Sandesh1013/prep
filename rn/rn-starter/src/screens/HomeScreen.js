import React from 'react';
import { Text, StyleSheet, View,Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return <View>
    <Button 
      onPress={()=>console.log('USer interaction!')}
      title="Button 2!"/>   
    <TouchableOpacity onPress={()=> console.log('Second button pressed')}>
      <Text>Button 2!</Text>  
    </TouchableOpacity> 
    </View>
};
//Self closing button
//Button look depends on OS
// Touchable Opacity to detect, it is an attribute, mayne more used than a button!
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
