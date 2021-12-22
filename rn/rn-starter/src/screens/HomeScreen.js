import React from 'react';
import { Text, StyleSheet, View,Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return <View>
    <Button 
      onPress={()=>props.navigation.navigate('Components')}
      title="To components"/>   
    <Button 
      onPress={()=>props.navigation.navigate('List')} 
      title='To list'/>
    </View>
};
//Self closing button
//Button look depends on OS, less configurable though
// Touchable Opacity to detect, it is an attribute, maybe more useful than a button!
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
