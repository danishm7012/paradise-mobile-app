import React from 'react'
import ContactUs from '../screen/ContactUs'
import Color from '../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const ContactStackNavigator = createStackNavigator({
  ContactUs:{screen:ContactUs,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const ContactUsStackNavigator = createAppContainer(ContactStackNavigator);
export default ContactUsStackNavigator
