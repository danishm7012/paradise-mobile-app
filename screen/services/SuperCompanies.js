import React from 'react';
import { FlatList } from 'react-native-gesture-handler'
import  {CATEGORIES}  from '../../data/Dummy-data'
import CompanyGridTitle from '../../components/CompanyGridTitle'
const SuperCompanies = props =>{

  const renderGridItem = itemData =>{
    return(
      <CompanyGridTitle 
      title={itemData.item.title}
      color={itemData.item.color}
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
  numColumns={1}/>
);
};

export default SuperCompanies;
