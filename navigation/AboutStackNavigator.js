import React from 'react'
import About from '../screen/About'
import Color from '../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const AboutUsStackNavigator = createStackNavigator({
  AboutUs:{screen:About,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const AboutStackNavigator = createAppContainer(AboutUsStackNavigator);
export default AboutStackNavigator
