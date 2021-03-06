import React from 'react';
import {View ,FlatList, Text , Button} from 'react-native';
import AllStyle from "../../AllStyle";
import {CATEGORIES,SUBCOMPANIESMODELDATA} from '../../data/Dummy-data';
import SubCompanyGridTitle from '../../components/SubCompanyGridTitle';

const SubCompanies = props =>{

  const catId = props.navigation.getParam('categId');
  const displayedSubCompanies = SUBCOMPANIESMODELDATA.filter(
    company=> company.companyIds.indexOf(catId) >= 0 );

    const renderCompanyItem = itemData =>{
      return(
            <SubCompanyGridTitle
        title={itemData.item.title}
         companyImage={itemData.item.companyImage}
        onSelect={()=>{
          props.navigation.navigate({routeName: 'Company_Detail',
          params:{
            categId : itemData.item.id
          }
        });
        }}/>

      );
    };


  return(
  <View style={AllStyle.myOtherClass}>
    <FlatList data={displayedSubCompanies}
      keyExtractor={(item,index)=> item.id}
     renderItem={renderCompanyItem}
  />


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