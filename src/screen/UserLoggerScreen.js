import { View, Text ,Image} from "react-native";
import React from "react";
import {styles} from "../screen/UserLoggerScreen.Styles";



const UserLoggerScreen=()=> {
  return (
    <View>
      <Text>UserLoggerScreen - Si Login again </Text>
      <Image      
        source={require("./compu.jpeg")}
        style={styles.image}
      />
    </View>
  );
};

export default UserLoggerScreen;