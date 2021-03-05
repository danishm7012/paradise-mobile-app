import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SuperCompanies from '../screen/services/SuperCompanies'
import SubCompanies from '../screen/services/SubCompanies'
import CompanyDetail from '../screen/services/CompanyDetail'
import {Platform } from "react-native"
import Color from '../colors/Color'


const ServiceNavigator = createStackNavigator({

  Super_Companies: {screen: SuperCompanies,
    navigationOptions:{
      headerTitle:'Home'
    },
  },
  Sub_Companies:
  {
    screen: SubCompanies,
    
  },
  Company_Detail: CompanyDetail
},{
  mode:'modal',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor: Platform.OS==='android' ? Color.primaryColour : Color.accentColour
      },
      headerTintColor: 'white'
  }
});
export default createAppContainer(ServiceNavigator);