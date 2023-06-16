import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base';
import { useState, useEffect } from 'react';

const AcumulatorScreen=()=> {
  const [contador, setContador]= useState(0);
  useEffect(()=>{}, [contador]);
  const aumentar =()=> {
    setContador(contador+5);
    };
  
  useEffect(()=> {}, [contador] );
  const disminuir =()=>{
    setContador(contador -1);
  };
  return (
    <ScrollView>
    <View>
      <Button title="aumentar" onPress={aumentar}/>
      </View>
      <View>
      <Button title="disminuir" onPress={disminuir}/>
    </View>
    </ScrollView>
  );
};
export default AcumulatorScreen;