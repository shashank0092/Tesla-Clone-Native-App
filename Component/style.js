import React from "react";
import { StyleSheet,Dimensions } from "react-native";

const styles=StyleSheet.create({
    main:{
    
       width:"100%",
       height:Dimensions.get('window').height
    },

    image:{
        
       width:"100%",
       height:Dimensions.get('window').height,
       position:"absolute"
    },

    title:{
        fontWeight:"600",
        fontSize:30,
        color:"black",
        textAlign:"center"
    },
    sub:{
        color:"black",
        textAlign:"center",
        fontWeight:"400"
    },
    Text:{
  
        marginTop:50,
        
    },
    btncontainer:{
        backgroundColor:"black",
        padding:20,
        borderRadius:40,
        marginTop:15
        
    },
    press:{
        height:20,
        justifyContent:"center",
       
        
    },
    btnText:{
        color:"#ffff",
        textAlign:"center",
        fontWeight:"500",
        textTransform:"uppercase"

    },
    mainbtn:{
        // borderWidth:5,
        // display:"flex",
        position:"relative",
        top:400

    }

})

export default styles;