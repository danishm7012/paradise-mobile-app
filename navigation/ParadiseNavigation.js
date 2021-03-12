import React from 'react';
import {StyleSheet,Image, View,Text, SafeAreaView} from 'react-native'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"
import SuperCompanies from '../screen/services/SuperCompanies'
import SubCompanies from '../screen/services/SubCompanies'
import CompanyDetail from '../screen/services/CompanyDetail'
import Home from '../screen/Home'
import Partnership from '../screen/Partnership'
import About from '../screen/About'
import ContactUs from '../screen/ContactUs'
import {Platform } from "react-native"
import Color from '../colors/Color'
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { ScrollView } from 'react-native-gesture-handler'



const ServiceNavigator = createStackNavigator({
  
  Super_Companies: {
    screen: SuperCompanies,
},
  Sub_Companies:
  {
    screen: SubCompanies,
},
  Company_Detail:{
    screen :CompanyDetail,
  },

},
{
  mode:'modal',
  defaultNavigationOptions:{
    headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
      },
      headerTintColor: 'white'
  }
});

const AboutStackNavigator = createStackNavigator({
  AboutUs:{screen:About,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
      },
      headerTintColor: 'white',
    },
  
  },

  
});


const tabScreenConfig = {
  Home: {
  screen: ServiceNavigator,
  navigationOptions:{
    tabBarIcon: (tabInfo) => {
      return <Ionicons name = 'ios-home' size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Color.accentColour
  },
      
},
  AboutUs:{
    screen: About,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
  return <Ionicons name = 'ios-person-add-outline'size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Color.primaryColour

  },
  },
  Partnership: {
    screen: Partnership,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
  return <Ionicons name = 'ios-accessibility-outline'size={25} color={tabInfo.tintColor}/>
      },
    tabBarColor: Color.accentColour

    },
  },
  ContactUs: { 
    screen:ContactUs,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
        return <Ionicons name = 'ios-call-outline'size={25} color={tabInfo.tintColor}/>
      },
    tabBarColor: Color.primaryColour

    },
  },

};

const CompaniesTabNavigator = Platform.OS==='android'? createMaterialBottomTabNavigator(tabScreenConfig, {
  activeTintColor: 'white',
  shifting:true
}) 
: createBottomTabNavigator (
  tabScreenConfig,
  {
  tabBarOptions:{
    activeTintColor: Color.primaryColour
  },
});


const MainDrawerNavigator = createDrawerNavigator({
  companiesDrawer: {
    screen: CompaniesTabNavigator,
    navigationOptions:{
      drawerIcon: () => (
        <Image
          source={require('../assets/icon.png')}
          style={[styles.icon, { tintColor: 'white' }]}
        />
      ),
      
      drawerLabel:'Home',
    }
  
  },
  About:{
    screen:AboutStackNavigator,
    navigationOptions:{
      
      drawerIcon: () => (
        <Image
          source={require('../assets/icon.png')}
          style={[styles.icon, { tintColor: 'white' }]}
        />
      ),
      drawerLabel:'AboutUs',
    }
  },
  Partners:{
    screen:Partnership,
    navigationOptions: {
      drawerIcon: () => (
        <Image
          source={require('../assets/icon.png')}
          style={[styles.icon, { tintColor: 'white' }]}
        />
      ),
     drawerLabel:'Partners' 
    }
  },
ContactUs:{
  screen: ContactUs,
  navigationOptions:{
    drawerIcon: () => (
      <Image
        source={require('../assets/icon.png')}
        style={[styles.icon, { tintColor: 'white' }]}
      />
    ),
    drawerLabel:'ContactUs',
  }
},
},{
  drawerIcon: ({ tintColor }) => (
    <Image
      source={require('../assets/icon.png')}
      style={[styles.icon, { tintColor: 'white' }]}
    />
  ),
  contentComponent: (props) => (
    <ScrollView>
    <SafeAreaView style={{flex:1}}
    forceInset={{ top: '', horizontal: 'never' }}>
        <View style={styles.drawerLogo}>

          <Image source={require('../assets/NewLogos/footer-logo.png')} />
        </View>
      
        <DrawerItems {...props} />
      
    </SafeAreaView>
    </ScrollView>
    
  ), 
  drawerBackgroundColor: 'rgb(18,18,18)',
  contentOptions:{
    activeTintColor:Color.primaryColour,
    inactiveTintColor: 'white',
    itemsContainerStyle: {
      marginVertical: 30,
    },
    labelStyle:{
      fontFamily: 'open-sans',
      fontSize:18,
    },
    itemStyle:{
      marginVertical:10,
      
     
    }
  }
});
export default createAppContainer(MainDrawerNavigator);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  drawerLogo:{
    height: 80,
    alignItems: 'center',
    marginTop:80, 
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#C0C0C0',
    borderBottomEndRadius:38,
    borderBottomStartRadius:38,
   
  },
});