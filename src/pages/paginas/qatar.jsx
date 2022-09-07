import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions,Switch, Image, TextInput ,Alert, KeyboardAvoidingView,ScrollView, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../style/styles';
import { TextInputMask } from 'react-native-masked-text';
import axios from '../../../axios';

import {cromos} from '../../component/cromos'


export default function Qatar(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [vetor, setArray] = useState([]);
    const [codfig, setCodfig] = useState('');
    const [cell, setCell] = useState('');

    useEffect(()=>{
        listFig();        

        console.log(props.route.params.rota)

      },[

        props.route.params.rota

      ])
      
      let paramfig = {
        PAGINA: props.route.params.rota
    }


      function listFig() {
        //  console.log(cell)
        //  console.log("teste")
        //  console.log(paramfig)

        const result2 =  axios.post('/fig/listaespecifico', paramfig)
        .then((result2) =>{
            console.log(result2.data)
            setArray(result2.data)

        }).catch((error) => {
            console.error(error);
        })


    }

    function postFiguras(paramfig){

        console.log(paramfig);

      if(!isEnabled){
        const result = axios.post('/fig/cadastrar',paramfig)
        .then((result) => {
            

            Alert.alert("Sucesso",result.data,
           
              )
            listFig()
          }).catch((error) => {
            Alert.alert("ERRO","FIGURINHA NÃO EXISTENTE")
          });
  
      } else{
        const result = axios.post('/fig/remover',paramfig)
        .then((result) => {
            

            Alert.alert("Sucesso",result.data,
           
              )
            listFig()
          }).catch((error) => {
            Alert.alert("ERRO","FIGURINHA NÃO EXISTENTE")
          });

      }
        }

    return (


        
            <ScrollView style={{width:'100%'}}>
            <View style={styles.containerHead}>

                <Text>Adicionar</Text>

                        <Switch
                        trackColor={{ false: "#6b806d", true: "#996b6b" }}
                        thumbColor={isEnabled ? "#e34d4d" : "#a1de78"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />

                <Text>Remover</Text>
                </View>
            <SafeAreaView style={styles.containerAlbum}>

            
           

            {
                        vetor && vetor.map(function (array) {
                            if(array.POSSUI == 1){
                            return (
                               

                                    <TouchableOpacity key={array.CODIGO} onPress={() => postFiguras(array)} style={{backgroundColor:'rgba(20,80,20,.3)', marginTop:20,marginHorizontal:5 , borderWidth: 2, padding: 0, flexDirection: 'column', width: '25%',height:70, borderRadius: 10 }}>
                                    <View style={{ width: "100%", alignContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', textAlign: 'center',fontSize:10 }}>
                                            {array.PAGINA}
                                        </Text>
                                        <Text style={{ fontStyle: 'italic', textAlign: 'center',fontSize:10  }}>
                                            {array.CODIGO}
                                        </Text>
                                        <Text style={{ fontStyle: 'italic', textAlign: 'center',fontSize:10  }}>
                                            Quantidade: {array.QUANTIDADE}
                                        </Text>
                                    </View>
                                </TouchableOpacity>


                                
                                   
                            );}else{
                                return (
                                <TouchableOpacity key={array.CODIGO} onPress={() => postFiguras(array)} style={{ backgroundColor:'rgba(80,20,20,.3)', marginTop:20,marginHorizontal:5 , borderWidth: 2, padding: 0, flexDirection: 'column', width: '25%',height:70, borderRadius: 10 }}>
                                    <View style={{ width: "100%", alignContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', textAlign: 'center',fontSize:10 }}>
                                            {array.PAGINA}
                                        </Text>
                                        <Text style={{ fontStyle: 'italic', textAlign: 'center',fontSize:10  }}>
                                            {array.CODIGO}
                                        </Text>
                                        <Text style={{ fontStyle: 'italic', textAlign: 'center',fontSize:10  }}>
                                            Quantidade: {array.QUANTIDADE}
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                        );}

                        })





                    }





                </SafeAreaView>
                </ScrollView>
       
        




    );

}