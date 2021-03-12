import React from 'react'
import FeedBack from '../screen/FeedBack'
import Color from '../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const FeedBackUsStackNavigator = createStackNavigator({
  FeedBackUs:{screen:FeedBack,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const FeedBackStackNavigator = createAppContainer(FeedBackUsStackNavigator);
export default FeedBackStackNavigator
