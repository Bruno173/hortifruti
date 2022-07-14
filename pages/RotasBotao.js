import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const navBotao = createStackNavigator();

import ListarFrutas from "./frutas/ListarFrutas";
import CadastrarFrutas from "./frutas/CadastrarFrutas";
import AlterarFrutas from "./frutas/AlterarFruta";

export default function rotasBotao(){
    return(
        <navBotao.Navigator>
            <navBotao.Screen name="Listar" component={ListarFrutas} options={{headerShown:false}}/>
            <navBotao.Screen name="Cadastrar" component={CadastrarFrutas} options={{headerShown:false}}/>
            <navBotao.Screen name="Alterar" component={AlterarFrutas} options={{headerShown:false}}/>
        </navBotao.Navigator>    
    )
}