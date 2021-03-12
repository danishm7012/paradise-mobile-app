import React from 'react';
import {StyleSheet,Image, View,Text, SafeAreaView} from 'react-native'
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { ScrollView } from 'react-native-gesture-handler'
//import CompaniesTabNavigator from './BottomTabNavigator'
import AboutStackNavigator from './AboutStackNavigator'
import ContactUsStackNavigator from './ContactUsStackNavigator'
import PartnershipStackNavigator from './PartnersStackNavigator'
import StackNavigator from './StackNavigator'
import Color from '../colors/Color'
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {Platform } from "react-native"
import {Ionicons} from '@expo/vector-icons'
import TermConditionStackNavigator from './TermConditionStackNavigator'
import RQStackNavigator from './RQStackNavigator'
import FeedBackStackNavigator from './FeedBackStackNavigator'

// const ServiceNavigator = createStackNavigator({
  
//   Super_Companies: {
//     screen: SuperCompanies,
// },
//   Sub_Companies:
//   {
//     screen: SubCompanies,
// },
//   Company_Detail:{
//     screen :CompanyDetail,
//   },

// },
// {
//   mode:'modal',
//   defaultNavigationOptions:{
//     headerTitleAlign:'center',
//     headerStyle:{
//   backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
//       },
//       headerTintColor: 'white'
//   }
// });


// const AboutStackNavigator = createStackNavigator({
//   AboutUs:{screen:About,
//     navigationOptions:{
//       headerTitleAlign:'center',
//     headerStyle:{
//   backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
//       },
//       headerTintColor: 'white',
//     },
  
//   },

  
// });


const tabScreenConfig = {
  Home: {
  screen: StackNavigator,
  navigationOptions:{
    tabBarIcon: (tabInfo) => {
      return <Ionicons name = 'ios-home' size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Color.accentColour
  },
      
},
  AboutUs:{
    screen: AboutStackNavigator,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
  return <Ionicons name = 'ios-person-add-outline'size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Color.primaryColour

  },
  },
  Partnership: {
    screen: PartnershipStackNavigator,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
  return <Ionicons name = 'ios-accessibility-outline'size={25} color={tabInfo.tintColor}/>
      },
    tabBarColor: Color.accentColour

    },
  },
  ContactUs: { 
    screen:ContactUsStackNavigator,
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
    screen:PartnershipStackNavigator,
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
  screen: ContactUsStackNavigator,
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


TermCondition:{
  screen: TermConditionStackNavigator,
  navigationOptions:{
    drawerIcon: () => (
      <Image
        source={require('../assets/icon.png')}
        style={[styles.icon, { tintColor: 'white' }]}
      />
    ),
    drawerLabel:'Term&Condition',
  }
},


RandQ:{
  screen: RQStackNavigator,
  navigationOptions:{
    drawerIcon: () => (
      <Image
        source={require('../assets/icon.png')}
        style={[styles.icon, { tintColor: 'white' }]}
      />
    ),
    drawerLabel:'R&Q',
  }
},


FeedBack:{
  screen: FeedBackStackNavigator,
  navigationOptions:{
    drawerIcon: () => (
      <Image
        source={require('../assets/icon.png')}
        style={[styles.icon, { tintColor: 'white' }]}
      />
    ),
    drawerLabel:'Feed Back',
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