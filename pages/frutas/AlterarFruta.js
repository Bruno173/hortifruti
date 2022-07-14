import React, {useState} from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput} from "react-native";
import { alterarFrutas, deletarFrutas } from "./Model";

export default function AlterarFruta({navigation}){
    const [idp,setIdp] = useState('');
    const [frutasp,setFrutasp] = useState('');
    const [valorp,setValorp] = useState('');
    const [fotosp,setFotosp] = useState('');

    async function alterar(){
        const resultado = await alterarFrutas(idp, frutasp, valorp,fotosp);
        if(resultado == 'sucesso') {
            Alert.alert('Fruta alterada com Sucesso!!');
            navigation.goBack();
        }else{
            Alert.alert('Erro ao cadastrar a fruta')
        }
    }

    async function deletar(){
        const resultado = await deletarFrutas(idp);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta deletada com socesso!!');
            navigation.goBack();
        }else{
            Alert.alert('Erro ao cadastrar a fruta');
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

        <TouchableOpacity style={styles.botaoCadastrar} onPress={alterar}>
            <Text style={styles.textoBotaoCadastro}>Alterar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoCadastrar} onPress={deletar}>
            <Text style={styles.textoBotaoCadastro}>Deletar</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#e9a9d8f',
        marginTop: 50,
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