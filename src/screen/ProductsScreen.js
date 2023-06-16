import { View, Text } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";
import products from "../utils/productsBase";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../utils/screenName";
const ProductsScreen = () => {
  const navigation = useNavigation();
  //  const goToDetailProduct = () => {
  //     navigation.navigate(screen.products.detailProduct);
  //    console.log("detalle");
  // };
  return (
    <View>
      {products.map((product) => {
        return (
          <ListItem
            onPress={() =>
              navigation.navigate(screen.products.detailProduct, product)
            }
          >
            <ListItem.Content>
              <ListItem.Title>{product.name}</ListItem.Title>
              <ListItem.Subtitle>{product.price}</ListItem.Subtitle>
              <ListItem.Subtitle>{product.detail}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
};

export default ProductsScreen;
