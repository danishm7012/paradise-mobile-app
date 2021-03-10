import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"
import SuperCompanies from '../screen/services/SuperCompanies'
import SubCompanies from '../screen/services/SubCompanies'
import CompanyDetail from '../screen/services/CompanyDetail'
import Home from '../screen/Home'
import Partnership from '../screen/Partnership'
import About from '../screen/About'
import ContactUs from '../screen/ContactUs'
import {Platform } from "react-native"
import Color from '../colors/Color'
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'



const ServiceNavigator = createStackNavigator({
  
  Super_Companies: {
    screen: SuperCompanies,
    },
  Sub_Companies:
  {
    screen: SubCompanies,
    
  },
  Company_Detail: CompanyDetail
},




{
  mode:'modal',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
      
      },
      headerTintColor: 'white'
  }
});

const tabScreenConfig = {
  Home: {
  screen: ServiceNavigator,
  navigationOptions:{
    tabBarIcon: (tabInfo) => {
      return <Ionicons name = 'ios-home' size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Color.accentColour
  },
      
},
  AboutUs:{
    screen: About,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
  return <Ionicons name = 'ios-person-add-outline'size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Color.primaryColour

  },
  },
  Partnership: {
    screen: Partnership,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
  return <Ionicons name = 'ios-accessibility-outline'size={25} color={tabInfo.tintColor}/>
      },
    tabBarColor: Color.accentColour

    },
  },
  ContactUs: { 
    screen:ContactUs,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
        return <Ionicons name = 'ios-call-outline'size={25} color={tabInfo.tintColor}/>
      },
    tabBarColor: Color.primaryColour

    },
  },

};

const CompaniesTabNavigator = Platform.OS==='android'? createMaterialBottomTabNavigator(tabScreenConfig, {
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
const MainDrawerNavigator = createDrawerNavigator({
  companiesDrawer: CompaniesTabNavigator,
  About: About,
});
export default createAppContainer(CompaniesTabNavigator);