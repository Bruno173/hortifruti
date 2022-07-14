import React, { useState } from 'react';
import { StatusBar } from 'react-native-web';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { pesquisarNomeFruta } from './frutas/Model';

export default function Pesquisa() {

const [dadosFrutas, setdadosFrutas] = useState([]) 

  async function buscarFrutas(){
    const resultado = await pesquisarNomeFruta(nomeFruta);
    if(resultado){
      setdadosFrutas(resultado);
    }else{
      Alert.alert('Fruta não encontrada!!');
      setdadosFrutas
    }
  }
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Qual fruta você deseja?</Text>

      <TextInput 
      placeholder='Digite uma fruta'
      style={styles.textInput}
      />
      <TouchableOpacity style={styles.botao} onPress={()=> buscarFrutas()}>
        <Text style={styles.txBotao}>
          Pesquisar
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    borderColor:'#3a86ff',
    fontSize:15,
    
  },
  botao:{
    backgroundColor:'#fb5607',
    marginTop: 15,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center'
  },
  txBotao:{

  },
  titulo:{
    fontSize:30,
    color: '#8338ec'
  },
});