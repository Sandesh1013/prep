import React from 'react';
import { Text, StyleSheet, View,Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return <View>
    <Button 
      onPress={()=>props.navigation.navigate('Components')}
      title="Button 2!"/>   
    <TouchableOpacity onPress={()=> console.log(props)}>
      <Text>Button 2!</Text>  
    </TouchableOpacity> 
    </View>
};
//Self closing button
//Button look depends on OS
// Touchable Opacity to detect, it is an attribute, maybe more useful than a button!
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
