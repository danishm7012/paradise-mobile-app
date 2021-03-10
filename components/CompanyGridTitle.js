import React from 'react'
import {TouchableOpacity,View,Text, ImageBackground,
TouchableNativeFeedback,
Platform,
} from 'react-native'
import AllStyle from '../AllStyle'
 

const CompanyGridTitle = props => {
let TouchableCom = TouchableOpacity;

if (Platform.OS==="android" && Platform.Version >= 21){
  TouchableCom = TouchableNativeFeedback;
}
  return(
    
  <View style={AllStyle.mainConmpaniesDiv}>
    <TouchableCom style={{flex:1}}
      onPress={props.onSelect}>
      <View  style={AllStyle.superCompany}>
        <ImageBackground source={props.companyImage} style={AllStyle.companyImages} resizeMode='cover' >
        <View style={AllStyle.companyOverlayText}>
          <View style={AllStyle.supComTopTextView}>
        <Text style={AllStyle.companyText}>{props.title}</Text>
        </View>
        <View style={AllStyle.compBottomTextView}>
        
         <Text style={AllStyle.supCompBottomText}>{props.title}</Text>
        
        
        <Text style={AllStyle.supCompBottomText}>View Detail</Text>
        
        
        </View>
        
        </View>
        

        </ImageBackground>
      </View>
      </TouchableCom>
      </View>
      
  );
};
export default CompanyGridTitle