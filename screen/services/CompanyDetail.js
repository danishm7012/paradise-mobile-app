import React from 'react';
import {View , Text, Button} from 'react-native';
import AllStyle from "../../AllStyle";


const CompanyDetail = props =>{
  return(
  <View style={AllStyle.myOtherClass}>
    <Text>Services Detail are here !</Text>
    <Button title="Go Back" onPress={()=>{
      props.navigation.popToTop();
    }}/>
  </View>
);
};
export default CompanyDetail;