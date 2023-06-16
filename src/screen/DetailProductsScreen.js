import { View, Text, ScrollView } from "react-native";
import React from "react";
import products from "../utils/productsBase";
import { styles } from "../screen/DetailProductsScreen.styles";
import { Image } from "@rneui/themed";

const DetailProductsScreen = ({ route }) => {
  const product = route.params;
  

  return (
    <ScrollView>
      <View style={styles.content}>
        <Text style={styles.input}>
          {product.name}
         
        </Text>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.input}>
          Valor incluido Iva{product.price}
        </Text>
        <Text style={styles.input}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};
export default DetailProductsScreen;
