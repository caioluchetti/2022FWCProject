import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput ,Alert, KeyboardAvoidingView,ScrollView, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../style/styles';
import { TextInputMask } from 'react-native-masked-text';
import axios from '../../../axios';

import {cromos} from '../../component/cromos'


export default function Paises(props) {

   
    return (


        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={70}>
            <ScrollView style={{width:'100%'}}>
            <SafeAreaView style={styles.container}>

            {
                        cromos && cromos.map(function (array) {
                            return (
                                    <TouchableOpacity key={array.pais} style={{ borderColor: '#9B072E', margin: 30, borderWidth: 2, padding: 30, flexDirection: 'row', width: '80%', borderRadius: 10 }} onPress={() => props.navigation.navigate('Qatar',{rota:array.rota})}>
                                        <View style={{ width: '40%' }}>
                                            <Image source={array.imagem}style={{ width: 100, height: 100, borderRadius: 50, borderColor: '#9B072E', borderWidth: 4 }} />
                                        </View>
                                       
                                        <View style={{ width: "60%", alignContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', textAlign: 'center',fontSize:10 }}>
                                                {array.pais}
                                            </Text>
                                            <Text style={{ fontStyle: 'italic', textAlign: 'center',fontSize:10  }}>
                                                teste
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                            );
                        })





                    }





                </SafeAreaView>
                </ScrollView>
        </KeyboardAvoidingView>
        




    );

}