import React from 'react';
import { View,Image,StyleSheet } from 'react-native';
import styles from './style';

export default function Header(){
    return(
        <View style={header.styleMain}>
            <Image
            source={require("./images/logo.png")}style={header.styleLogo}/>
            <Image
            source={require("./images/menu.png")}style={header.styleMenu}/>
        </View>
    )
}

const header=StyleSheet.create({
    styleMain:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        // position:"relative",
        top:20,
        

    },
    styleLogo:{
        height:20,
        width:150
    },
    styleMenu:{
        height:70,
        width:40,
        position:"relative",
        bottom:20
    }
    
})