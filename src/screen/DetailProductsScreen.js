import { View, Text } from 'react-native'
import React from 'react'
import products from '../utils/productsBase'; 


const DetailProductsScreen=({route})=> {
 const product=route.params;
 console.log(product);

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Text>{product.price}</Text>
    </View>
  )
};
export default DetailProductsScreen;