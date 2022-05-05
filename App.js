
import React from 'react';
import {Text,View,FlatList, Dimensions} from 'react-native';
import CarCard from './Component/CarCard';
import {carData} from './Component/Car';
import Header from './Component/Headr';

export default function App(){


  return(
   <View>
     <Header/>
     <FlatList
     data={carData}
     renderItem={(data)=>{
     return(
      <CarCard 
      name={data.item.name} image={data.item.image}/>
     )
     }}
     snapToAlignment={'start'}
     decelerationRate={'fast'}
     snapToInterval={Dimensions.get('window').height}/>
     
   </View>
  )
}