import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput ,Alert, KeyboardAvoidingView,ScrollView, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../style/styles';
import { TextInputMask } from 'react-native-masked-text';
import axios from '../../../axios';

import {cromos} from '../../component/cromos'


export default function Paises(props) {


    const [paramPag, setparamPag] = useState()
    const [soma, setSoma] = useState(0);
    const [vetor, setArray] = useState([]);

    useEffect(() => {

        listFig()
      }, [])

      async function listFig() {

        try {
          let data = Object.values(cromos);
          console.log(typeof (data))
    
    
          const response = await axios.get('/fig/somaind')
           
         if(response){
          response.data.forEach(element => {
            const i = data.findIndex(el => element.PAGINA == el.nome)
            console.log(response.data)
            data[i].falta = element.somaTotal
           
          });
    
         }
          console.log(data)
          let data2 = Object.values(data);
          setArray(data2)
          
          // if (response) {
          //     console.log(response)
          //     console.log(typeof(response))
          //     const entry = Object.entries(response);
          //     console.log(entry[0][1])
    
          //     setArray(entry[0][1])
          // }
    
        }catch(error){
          console.log(error)
        }
    
    
        }
    



   
    return (


            <ScrollView style={{width:'100%'}}>
            <SafeAreaView style={styles.container}>

            {
                        vetor && vetor.map(function (array) {
                            return (
                                    <TouchableOpacity key={array.pais} style={{ borderColor: '#9B072E', margin: 30, borderWidth: 2, padding: 10, flexDirection: 'row', width: '80%', borderRadius: 10 }} onPress={() => props.navigation.navigate('Each',{rota:array.rota})}>
                                        <View style={{ width: '40%' }}>
                                            <Image source={array.imagem}style={{ width: 100, height: 100, borderRadius: 50,shadowOffset: { width: 10, height: 10 },
                                             shadowColor: '#000',
                                                shadowOpacity: 1,
                                               elevation: 10,
                                                 backgroundColor : "#FFFFFF" }} />
                                        </View>
                                       
                                        <View style={{ width: "60%", alignContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'white', textShadowRadius: 6, textShadowColor: 'black' }}>
                                                {array.pais}
                                            </Text>
                                            <Text style={{ textAlign: 'center', fontSize: 20,  color: 'white', textShadowRadius: 6, textShadowColor: 'black' }}>
                                                Faltantes: {array.falta}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                            );
                        })





                    }





                </SafeAreaView>
                </ScrollView>
        
        




    );

}