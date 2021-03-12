import React from 'react';
import {View , Text} from 'react-native';
import AllStyle from "../AllStyle";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'


const Partnership = props =>{
  return(
  <View style={AllStyle.myOtherClass}>
    <Text>Our strength !</Text>
  </View>
  );
};

Partnership.navigationOptions = navData => {
  return{    
  headerTitle:'Partners',
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
export default Partnership;