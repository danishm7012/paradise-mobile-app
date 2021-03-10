import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  
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
    // elevation:3,
    
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

  //top:50,
  // left:0,
  // right:0,
  // bottom:0,
  
  // alignItems:'center',  
  // textAlign:'center',
  // justifyContent:'center',
 
},
supComTopTextView:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  
},
// supercompanyTextView:{
//   flex:1,
//   flexDirection:'row',
//   justifyContent:'space-between',
//   justifyContent:'space-around',
//   backgroundColor:'#2e2d2d',

// },
companyText:{
  // flex:1,
  
  // fontWeight:'600',
  // fontFamily: 'open-sans-bold',
  fontSize:14,
  color:'white',
  padding:10,
  //borderRadius:20,
  backgroundColor:'#c11e8a',
},
//compBottomTextView:{
  //flex:1,
  //flexDirection:'row',
  //justifyContent:'center',
  //alignItems:'center',
  //backgroundColor:'#121212',
  // alignSelf:''
//},
//supCompBottomText:{
//flex:1,
//color:'white'

//},
//  *************** Super___Companies Screen Style END *********************

//  *************** Sub___Companies Screen Style Start *********************

backgroundSuperCompanies:{
  width:'100%',
  flex:1,
  
  justifyContent:'center',
  alignItems:'center',

},
subcompanyImages:{
  flex:1,
   //backgroundColor:'#fff',
  paddingTop:45,
  paddingBottom:45,
  flex:1,
  width:'100%',

   height:200,
  borderRadius:0,
  shadowColor:'#f9fcf7',
  shadowOpacity:0.4,
  shadowOffset:{width: 0, height:1},
  shadowRadius:0,
  borderBottomWidth: 0,
  elevation:4,
//   paddingTop:20,
  padding:3,
},
subCompany: {
  flex: 1,
  
},
subCompanyimagesView:{
  flex:1,
  width:'100%',
//   height:200,
//   borderRadius:10,
//   shadowColor:'#bdbebf',
//   shadowOpacity:0.26,
//   shadowOffset:{width: 2, height:2},
//   shadowRadius:10,
//   elevation:3,
//   paddingTop:20,
//  padding:3,
},
subCompaniesTextView:{
  flex:1,
  paddingTop:2,
paddingBottom:5,
  flexDirection:'row',
  justifyContent:'space-between',
  justifyContent:'space-around',
  alignItems:'center',
  //backgroundColor:'#6c398f',

},
subcompanyText:{
  // flex:1,
  
  // fontWeight:'600',
  // fontFamily: 'open-sans-bold',
  fontSize:16,
  color:'#6c398f',
},
subcompanyText2:{
  fontSize:12,
  color:'#6c398f',
  
}

});