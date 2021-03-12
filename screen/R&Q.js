import React from 'react';
import {View , Text} from 'react-native';
import AllStyle from "../AllStyle";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
// import {Platform } from "react-native"
// import Color from '../colors/Color'


const RandQ = props =>{
  return(
  <View style={AllStyle.myOtherClass}>
    <Text>R&Q </Text>
  </View>
);
};

RandQ.navigationOptions = navData => {
  
  return{

  headerTitle:'R&Q',
  headerLeft: (
  <HeaderButtons HeaderButtonComponent = {HeaderButton}>
    <Item 
    title='Menu' 
    iconName='ios-menu' 
    onPress={() => {
      navData.navigation.toggleDrawer();
    }} /> 

  </HeaderButtons>
)
  }
}

export default RandQ;