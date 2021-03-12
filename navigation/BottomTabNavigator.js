import React from 'react'
import AboutStackNavigator from './AboutStackNavigator'
import Color from '../colors/Color'
import StackNavigator from './StackNavigator'
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { createAppContainer } from "react-navigation";
import ContactUsStackNavigator from './ContactUsStackNavigator'
import PartnershipStackNavigator from './PartnersStackNavigator'
import {Platform } from "react-native"
import {Ionicons} from '@expo/vector-icons'



const CompaniesBottomTabNavigator = Platform.OS==='android'? createMaterialBottomTabNavigator(tabScreenConfig, {
  activeTintColor: 'white',
  shifting:true
}) 
: createBottomTabNavigator (
  tabScreenConfig,
  {
  tabBarOptions:{
    activeTintColor: Color.primaryColour
  },
});

const CompaniesTabNavigator = createAppContainer(CompaniesBottomTabNavigator);
export default CompaniesTabNavigator




const tabScreenConfig = {
  Home: {
  screen: StackNavigator,
  navigationOptions:{
    tabBarIcon: (tabInfo) => {
      return <Ionicons name = 'ios-home' size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Color.accentColour
  },
      
},
  AboutUs:{
    screen: AboutStackNavigator,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
  return <Ionicons name = 'ios-person-add-outline'size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Color.primaryColour

  },
  },
  Partnership: {
    screen: PartnershipStackNavigator,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
  return <Ionicons name = 'ios-accessibility-outline'size={25} color={tabInfo.tintColor}/>
      },
    tabBarColor: Color.accentColour

    },
  },
  ContactUs: { 
    screen:ContactUsStackNavigator,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
        return <Ionicons name = 'ios-call-outline'size={25} color={tabInfo.tintColor}/>
      },
    tabBarColor: Color.primaryColour

    },
  },

};

