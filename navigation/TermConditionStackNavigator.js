import React from 'react'
import TermCondition from '../screen/Term&Condition'
import Color from '../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const TermConditionUsStackNavigator = createStackNavigator({
  TermConditionUs:{screen:TermCondition,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const TermConditionStackNavigator = createAppContainer(TermConditionUsStackNavigator);
export default TermConditionStackNavigator
