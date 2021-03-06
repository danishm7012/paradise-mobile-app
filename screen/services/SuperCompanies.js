import React from 'react';
import { FlatList } from 'react-native-gesture-handler'
import  {CATEGORIES}  from '../../data/Dummy-data'
import CompanyGridTitle from '../../components/CompanyGridTitle'
import {View } from 'react-native'
import AllStyle from '../../AllStyle'

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
    
  <FlatList 
  keyExtractor={(item,index)=> item.id}
  data={CATEGORIES}
  renderItem={renderGridItem} 
  />
  
);
};

export default SuperCompanies;
