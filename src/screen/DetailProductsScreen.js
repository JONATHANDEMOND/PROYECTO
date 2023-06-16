import { View, Text } from 'react-native'
import React from 'react'
import products from '../utils/productsBase'; 
import {styles} from "../screen/DetailProductsScreen.styles";


const DetailProductsScreen=({route})=> {
 const product=route.params;
 console.log(product);

  return (
    <View style ={styles.content}>

      <Text containerStyle={styles.input}>{product.name}</Text>
      <Text>Valor incluido Iva{product.price}</Text>
      <Text>{product.description}</Text>
      
    </View>
  )
};
export default DetailProductsScreen;