import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  
  backgroundSuperCompanies:{
    backgroundColor:'#151515',
  },
  
  superCompany: {
    flex: 1,
    flexDirection:'row',
    alignSelf:'stretch',

      // width:385,
    // height:150,
    // borderRadius:10,
    // shadowColor:'black',
    // shadowOpacity:0.26,
    //  shadowOffset:{width: 0, height:2},
    // shadowRadius:10,
     elevation:3,
    
    // padding:2,
    
},
mainConmpaniesDiv:{
   flex: 1,
  height: 180,
  
  overflow:'hidden',
  alignItems: 'center',
  justifyContent: 'center' 
 },
 myClass : {
  color:'blue'
},
myOtherClass: {
  flex: 1,
       backgroundColor: '#3c3c6c',
       alignItems: 'center',
       justifyContent: 'center',
       color: 'aliceblue'
},
companyImages:{
    flex:1,
  
},
companyOverlayText:{
flex:1,
backgroundColor:'rgba(18,18,18,0.7)',
alignSelf:'stretch',
justifyContent:'flex-end',
alignItems:'flex-start',
  //top:50,
  // left:0,
  // right:0,
  // bottom:0,
  
  // alignItems:'center',  
  // textAlign:'center',
  // justifyContent:'center',
 
},
companyText:{
  // flex:1,
  
  // fontWeight:'600',
  // fontFamily: 'open-sans-bold',
  fontSize:25,
  color:'white',

}
});