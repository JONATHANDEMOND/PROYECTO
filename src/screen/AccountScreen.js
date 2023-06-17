import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserGuestScreen from "../../src/components/Account/UserGuestScreen/UserGuestScreen";
import UserLoggerScreen from "./UserLoggerScreen";

const AccountScreen = () => {
  
  const [hasLogged, setHasLogged] = useState(false);
 
  useEffect(() => {
    
    const auth = getAuth(); 
    onAuthStateChanged(auth, (user) => {
      
      setHasLogged(user != null ? true : false);
    });
  }, []);

  return hasLogged == true ? <UserLoggerScreen /> : <UserGuestScreen />;
};

export default AccountScreen;