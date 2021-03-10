import React from 'react'
import {TouchableOpacity,View,Text, ImageBackground,
TouchableNativeFeedback,
Platform,
Dimensions
} from 'react-native'
import AllStyle from '../AllStyle'
import {Card} from 'react-native-shadow-cards';

const SubCompanyGridTitle = props => {
let TouchableCom = TouchableOpacity;

if (Platform.OS==="android" && Platform.Version >= 21){
  TouchableCom = TouchableNativeFeedback;
}
const { width, height } = Dimensions.get('screen');
  return(
    <View style={AllStyle.subCompany}>
    <TouchableCom style={{flex:1,width:'100%'}}
      onPress={props.onSelect}>
        
        <View style={AllStyle.subCompanyimagesView}>
      
        
        <ImageBackground source={props.companyImagess} 
        style={AllStyle.subcompanyImages} resizeMode='cover' />
        
          
      <View style={AllStyle.subCompaniesTextView}>
    
        <Text style={AllStyle.subcompanyText}>{props.title}</Text>
        <Text style={AllStyle.subcompanyText2}>View Detail</Text>
        
        </View>
        
        </View>
        
      </TouchableCom>
      
      </View>
       
  );
};
export default SubCompanyGridTitle