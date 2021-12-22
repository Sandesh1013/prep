import React from 'react';
import { Text, StyleSheet, View,Button } from 'react-native';

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Hello World</Text>
    <Button 
      onPress={()=>console.log('USer interaction!')}
      title="Button 1!"/>    
    </View>
};
//Self closing button
//Button look depends on OS
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
