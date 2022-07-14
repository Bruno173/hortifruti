import React,{useState} from "react";
import { Text,View,StyleSheet,Alert,TouchableOpacity,TextInput } from "react-native";
import { salvarNomeFruta } from "./Model";

export default function CadastrarFruta({navigation}){
    const[idp,setIdp] = useState('');
    const[frutasp,setFrutasp] = useState('');
    const[valorp,setValorp] = useState('');
    const[fotosp,setFotosp] = useState('');

    async function cadastro(){
        const resultado = await salvarNomeFruta(idp,frutasp,valorp,fotosp);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta Cadastrada com Sucesso!!');
            navigation.goBack();
        }else{
            Alert.alert('Erro ao cadastrar')
        }
    }

    return(
        <View style={styles.conteiner}>
        <TextInput
            value={idp}
            placeholder="digite o codigo da fruta"
            style={styles.textInputTodos}
            onChangeText={setIdp}
        />    
        <TextInput
            value={frutasp}
            placeholder="digite o nome da fruta"
            style={styles.textInputTodos}
            onChangeText={setFrutasp}
        /> 
        <TextInput
            value={valorp}
            placeholder="digite o valor da fruta"
            style={styles.textInputTodos}
            onChangeText={setValorp}
        /> 
        <TextInput
            value={fotosp}
            placeholder="digite o link da foto da fruta"
            style={styles.textInputTodos}
            onChangeText={setFotosp}
        /> 

        <TouchableOpacity style={styles.botaoCadastrar} onPress={cadastro}>
        <Text style={styles.textoBotaoCadastro}>cadastrar</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#e9c46a',
        marginTop:50,
    },
    botaoCadastrar:{
        backgroundColor:'#2a9d8f',
        margin:15,
        padding:5,
        borderRadius:10,
    },
    textInputTodos:{
        fontSize:18
    },
})