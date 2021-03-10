import React from 'react';
import {View ,FlatList, Text , Button, ImageBackground} from 'react-native';
import AllStyle from "../../AllStyle";
import {CATEGORIES,SUBCOMPANIESMODELDATA} from '../../data/Dummy-data';
import SubCompanyGridTitle from '../../components/SubCompanyGridTitle';
import CustomCarousel from '../../components/SubCompaniesCarousel';
import { ScrollView } from 'react-native-gesture-handler'

const SubCompanies = props =>{

  const catId = props.navigation.getParam('categId');
  const displayedSubCompanies = SUBCOMPANIESMODELDATA.filter(
    company=> company.companyIds.indexOf(catId) >= 0 );
  
    const renderCompanyItem = itemData =>{
      return(
        <View style={{flex:1 }}>
          
         
            
            <SubCompanyGridTitle
            title={itemData.item.title}
            companyImagess={itemData.item.companyImagess}
            onSelect={()=>{
              props.navigation.navigate({routeName: 'Company_Detail',
              params:{
                compDetailId : itemData.item.id
              }
            });
            }}/>
          
</View>
      );
    };
    

  return(
    <ScrollView>
  <View style={{flex:1}}>
    <View style={{flex:1,width:'100%',height:300}}>
    <CustomCarousel/>  
    </View>
    <View style={{flex:1}}>
    <FlatList data={displayedSubCompanies}
      keyExtractor={(item,index)=> item.id}
     renderItem={renderCompanyItem}
     numColumns={1}
    />
    </View>
</View>
</ScrollView>
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