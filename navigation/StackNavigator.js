import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import SuperCompanies from '../screen/services/SuperCompanies'
import SubCompanies from '../screen/services/SubCompanies'
import CompanyDetail from '../screen/services/CompanyDetail'
import Color from '../colors/Color'
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"


const ServiceNavigator = createStackNavigator({
  
  Super_Companies: {
    screen: SuperCompanies,
},
  Sub_Companies:
  {
    screen: SubCompanies,
},
  Company_Detail:{
    screen :CompanyDetail,
  },

},
{
  mode:'modal',
  defaultNavigationOptions:{
    headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
      },
      headerTintColor: 'white'
  }
});

const StackNavigator = createAppContainer(ServiceNavigator)

export default StackNavigator
