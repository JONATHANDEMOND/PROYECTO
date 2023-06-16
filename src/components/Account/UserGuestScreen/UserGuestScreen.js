//rnf+TAB
import React from "react";
import { ScrollView } from "react-native";
import { Text, Button, Image } from "@rneui/themed";
import { styles } from "./UserGuestScreen.Styles";
import { screen } from "../../../utils/screenName";
import { useNavigation } from "@react-navigation/native";

const UserGuestScreen = () => {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate(screen.accounts.login);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
      style={styles.viewBody}
    >
      <Image
        source={require("../../../../assets/img/INICIO1.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Verificar tu perfil</Text>
      <Text style={styles.description}>
      Hoy en día, Import Computer C.A. Es conocido en el sector informático del Ecuador
      como uno de los principales mayoristas autorizados en la comercialización de productos
      informáticos. Empresa fundada en el año 1999, con un equipo humano capacitado, conformado 
      más de 170 personas a nivel nacional. Contamos con seis oficinas en el Ecuador, 
      manteniendo presencia en todas las provincias del país.
      </Text>
      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
};

export default UserGuestScreen;