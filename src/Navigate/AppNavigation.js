import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {screen} from "../utils/screenName"
import { Icon } from '@rneui/base';
import { View, Text } from 'react-native';
import  {ProductsStack}  from "./ProductsStack";
import AccountStack from "./AccountStack";
const Tab=createBottomTabNavigator();

export const AppNavigation=()=>{
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
            tabBarActiveTintColor: "#2C3E50",
            tabBarInactiveTintColor: "#251180",
            tabBarIcon: ({ color, size }) => screenOptions
            (route, color, size),
          })}
          >
            <Tab.Screen
            
            name={screen.products.tab}
            component={ProductsStack}
            options={{title: "Productos"}}
            />
             
          <Tab.Screen
            name={screen.account.tab}
           component={AccountStack}
            options={{title: "CUENTA "}}
           />
        </Tab.Navigator>
    )

};
const screenOptions = (route, color, size) => {
    let iconName;
    if (route.name == screen.products.tab) {
      iconName = "compass-outline";
    }
    
    if (route.name == screen.account.tab) {
      iconName = "linux";
    }
    return (
      <Icon type="material-community"
       name={iconName} 
       color={color}
        size={size} 
      />
    );
};