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

    useEffect(() => {
    // TotalFig();

      }, []);

//       const TotalFig = async () => {

//     const result2 =  axios.get('/fig/somaind')
//     .then((result2) =>{
//         console.log(result2.data)
//     }).catch((error) => {
//         console.error(error);
//     })

// }


   
    return (


            <ScrollView style={{width:'100%'}}>
            <SafeAreaView style={styles.container}>

            {
                        cromos && cromos.map(function (array) {
       
                            // setparamPag(array.rota)
                            // TotalFig();
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
                                            <Text style={{ fontStyle: 'italic', textAlign: 'center',fontSize:10  }}>
                                                Quantidade
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