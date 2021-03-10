import React from 'react';
import {View , Text, Button} from 'react-native';
import AllStyle from "../../AllStyle";
import {SUBCOMPANIESMODELDATA} from '../../data/Dummy-data'

const CompanyDetail = props =>{

  const compDetailId = props.navigation.getParam('compDetailId');
const selectedCompany = SUBCOMPANIESMODELDATA.find(company => company.id === compDetailId);
  return(
  <View style={AllStyle.myOtherClass}>
    <Text>{selectedCompany.title} !</Text>
    <Button title="Go Back" onPress={()=>{
      props.navigation.popToTop();
    }}/>
  </View>
);
};
CompanyDetail.navigationOptions = (navigationData) => {
  const compDetailId = navigationData.navigation.getParam('compDetailId');       const selectedCompany = SUBCOMPANIESMODELDATA.find(company => company.id === compDetailId);
  return{
    headerTitle: selectedCompany.title
  }
};

export default CompanyDetail;