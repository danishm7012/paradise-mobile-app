import React from 'react'
import {TouchableOpacity,View,Text, ImageBackground,
TouchableNativeFeedback,
Platform,
} from 'react-native'
import AllStyle from '../AllStyle'
 

const SubCompanyGridTitle = props => {
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
        <Text style={AllStyle.companyText}>{props.title}</Text>
        </View>

        </ImageBackground>
      </View>
      </TouchableCom>
      </View>
      
  );
};
export default SubCompanyGridTitle