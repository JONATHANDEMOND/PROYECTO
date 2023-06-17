import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import DetailProductsScreen from "../screen/DetailProductsScreen";
import ProductsScreen from "../screen/ProductsScreen";
import { Image } from "@rneui/themed";
const Stack = createNativeStackNavigator();

export const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.products.products}
        component={ProductsScreen}
        options={{ title: "PRODUCTO" }}

      />
      <Stack.Screen
        name={screen.products.detailProduct}
        component={DetailProductsScreen}
        options={{ title: "Detalle Producto" }}
      />
    </Stack.Navigator>
  );
};
