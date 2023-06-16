import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import DetailProductsScreen from "../screen/DetailProductsScreen";
import ProductsScreen from "../screen/ProductsScreen";
const Stack = createNativeStackNavigator();

export const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.products.products}
        component={ProductsScreen}
        options={{ title: "Productos" }}
      />
      <Stack.Screen
        name={screen.products.detailProduct}
        component={DetailProductsScreen}
        options={{ title: "Detalle Producto" }}
      />
    </Stack.Navigator>
  );
};
