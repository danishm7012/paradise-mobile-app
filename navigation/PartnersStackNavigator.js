import React from 'react'
import Partnership from '../screen/Partnership'
import Color from '../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const PartnersStackNavigator = createStackNavigator({
  Partners:{screen:Partnership,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const PartnershipStackNavigator = createAppContainer(PartnersStackNavigator)
export default PartnershipStackNavigator
