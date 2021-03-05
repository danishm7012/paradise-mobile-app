import React from 'react';
import {View , Text , Button} from 'react-native';
import AllStyle from "../../AllStyle";
import {CATEGORIES} from '../../data/Dummy-data';

const SubCompanies = props =>{

  const catId = props.navigation.getParam('categId');
  const selectedCompany = CATEGORIES.find(cat =>cat.id===catId);
  return(
  <View style={AllStyle.myOtherClass}>
    <Text style={AllStyle.myClass}>Welcome to services Screen !</Text>
    <Text style={AllStyle.myClass}>{selectedCompany.title}</Text>
    <Button title='Go to Detail' onPress={()=>{
      props.navigation.navigate('Company_Detail')
    }}/>
    <Button title="Go Back" onPress={()=>{
      props.navigation.goBack();
    }}/>
  </View>
);
};
SubCompanies.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categId');
  const selectedCompany = CATEGORIES.find(cat =>cat.id===catId);
  return{
    headerTitle: selectedCompany.title,
 
      };
  
};
export default SubCompanies;