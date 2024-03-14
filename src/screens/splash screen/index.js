import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';
import firstImage from '../../assets/FirstBack.jpg';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/core';


const SplashScreen = () => {

  const navigation = useNavigation("")
    useEffect(() => {
        // Show the splash screen for 3 seconds before navigating to the main screen
        setTimeout(() => {
          navigation.navigate("home"); // Replace 'Main' with your main screen component
        }, 1500);
      }, []);
    
      return (
        <ImageBackground
      source={firstImage}
      resizeMode="cover"
      blurRadius={10}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      
      <Image
        style={{width:320, height:320}}
        source={logo}
      />
    </ImageBackground>
      );
}

export default SplashScreen