import React from 'react';
import {View , Text} from 'react-native';
import AllStyle from "../AllStyle";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
// import {Platform } from "react-native"
// import Color from '../colors/Color'


const TermCondition = props =>{
  return(
  <View style={AllStyle.myOtherClass}>
    <Text>Term and Condition</Text>
  </View>
);
};

TermCondition.navigationOptions = navData => {
  
  return{

  headerTitle:'Term&Condition',
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

export default TermCondition;