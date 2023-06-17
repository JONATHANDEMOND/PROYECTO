import { View, Text, Image, ScrollView  } from "react-native";
import React from "react";


const UserLoggerScreen=()=> {
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/compu.jpg")}
        style={styles.image}
      />
      </ScrollView>
  );
};

export default UserLoggerScreen;