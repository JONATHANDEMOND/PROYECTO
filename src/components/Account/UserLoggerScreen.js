import { View,  ScrollView  } from "react-native";
import { Text, Image } from "@rneui/base";
import React from "react";
import {screen} from "../../utils/screenName";
import {styles} from "../../screen/UserLoggerScreen.Styles";


const UserLoggerScreen=()=> {
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/compu.jpg")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text>Estamos en el login</Text>
        
      </View>
      </ScrollView>
  );
};

export default UserLoggerScreen;