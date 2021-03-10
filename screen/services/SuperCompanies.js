import React from 'react';
import { FlatList } from 'react-native-gesture-handler'
import  {CATEGORIES}  from '../../data/Dummy-data'
import CompanyGridTitle from '../../components/CompanyGridTitle'
import {View } from 'react-native'
import AllStyle from '../../AllStyle'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/HeaderButton'

const SuperCompanies = props =>{

  const renderGridItem = itemData =>{
    return(
          <CompanyGridTitle 
      title={itemData.item.title}
      companyImage={itemData.item.companyImage}
      onSelect={()=>{
        props.navigation.navigate({routeName: 'Sub_Companies',
        params:{
          categId : itemData.item.id
        }
      });
      }}/>
     
    );
  };
  
  return (
  <View style={{width:'100%'}}>    
  <FlatList 
  keyExtractor={(item,index)=> item.id}
  data={CATEGORIES}
  renderItem={renderGridItem} 
  />
  </View>
);
};

SuperCompanies.navigationOptions = navData => {
  return{
    headerTitle:'Home',
  headerLeft: (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Menu" iconName="ios-menu" onPress={() => {
      navData.navigation.toggleDrawer();
    }} />

  </HeaderButtons>
)};      
};

export default SuperCompanies;
