import React from 'react';
import { ImageBackground,View,Text,StyleSheet } from 'react-native';
import styles from './style';
import Button from './Button';

export default function Data1(props){

    

    return(
        <View>
            <View style={styles.main}>
                <ImageBackground
                source={props.image}
                style={styles.image}
                />
                <View style={styles.Text}>
                    <Text style={styles.title}>{props.name}</Text>
                    <Text style={styles.sub}>Order Online For Tochless Delivery</Text>
                    
                </View>
                <Button type="primary" content={"Custome Order"} press={()=>{
                    console.warn("Custome Oreder Pressed")
                }}/>
                <Button type="secondary" content={"Order Now"} press={()=>{
                    console.warn("Order Now Pressed");
                }} />
            </View>
        </View>
    )
}

