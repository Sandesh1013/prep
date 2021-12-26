import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen=()=>{
    return <View>
        <ImageDetail title="Forest" src={require('../../assets/adaptive-icon.png')}/>
        <ImageDetail title="Beach" src={require('../../assets/adaptive-icon.png')}/>
        <ImageDetail title="Mountain" src={require('../../assets/adaptive-icon.png')}/>

    </View>
}

const styles=StyleSheet.create({});

export default ImageScreen;