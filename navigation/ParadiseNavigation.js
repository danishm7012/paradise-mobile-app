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

const ServiceNavigator = createStackNavigator({
  
  Super_Companies: {screen: SuperCompanies,
    navigationOptions:{
      headerTitle:'Home'
    },
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

const CompaniesTabNavigator = createBottomTabNavigator ({
  Home: {
  screen: ServiceNavigator,
  navigationOptions:{
    tabBarIcon: (tabInfo) => {
      return <Ionicons name = 'ios-home' size={25} color={tabInfo.tintColor}/>
    }
  }    
},
  AboutUs:{
    screen: About,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
  return <Ionicons name = 'ios-person-add-outline'size={25} color={tabInfo.tintColor}/>
        
      }
    }
  },
  Partnership: {
    screen: Partnership,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
  return <Ionicons name = 'ios-accessibility-outline'size={25} color={tabInfo.tintColor}/>
      }
    }
  },
  ContactUs: { 
    screen:ContactUs,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
        return <Ionicons name = 'ios-call-outline'size={25} color={tabInfo.tintColor}/>
      }
    }
  }

},{
  tabBarOptions:{
    activeTintColor: Color.primaryColour
  },
});
export default createAppContainer(CompaniesTabNavigator);