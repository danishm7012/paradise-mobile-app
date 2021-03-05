import React from 'react'
import {TouchableOpacity,View,Text} from 'react-native'
import styles from "../App.scss";
import CompanyStyle from './CompanyStyle'
 

const CompanyGridTitle = props => {
return(
    <TouchableOpacity style={styles.mainConmpaniesDiv}
      onPress={props.onSelect}>
      <View style={ {...CompanyStyle.superCompany, ...{backgroundColor: props.color}}}>
        <Text>{props.title}</Text>
      </View>
      </TouchableOpacity>
  );
};
export default CompanyGridTitle