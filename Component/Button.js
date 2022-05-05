import React from 'react';
import {View,Text,Pressable} from 'react-native';
import styles from './style';

export default function Button(props){
    // console.warn(props.type);
    const bgcolor=props.type==="primary"?"#171A20CC":"#FFFFFFA6";
    const fscolor=props.type==="primary"?"#FFFFFF":"#171A20";
    return(
        <View style={styles.mainbtn}>
            <View style={[styles.btncontainer,{backgroundColor:bgcolor}]}>
            <Pressable
            onPress={props.press}
            style={styles.press}>
                <Text style={[styles.btnText,{color:fscolor}]}>{props.content}</Text>
            </Pressable>
            </View>
        </View>
    )
}

