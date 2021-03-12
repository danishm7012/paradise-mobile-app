import React from 'react'
import RandQ from '../screen/R&Q'
import Color from '../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const RQUsStackNavigator = createStackNavigator({
  RandQUs:{screen:RandQ,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const RQStackNavigator = createAppContainer(RQUsStackNavigator);
export default RQStackNavigator
