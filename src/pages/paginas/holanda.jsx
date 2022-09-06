import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput ,Alert, KeyboardAvoidingView,ScrollView, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../style/styles';
import { TextInputMask } from 'react-native-masked-text';
import axios from '../../../axios';

import {cromos} from '../../component/cromos'


export default function Holanda(props) {

   
    return (


        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={70}>
            <ScrollView style={{width:'100%'}}>
            <SafeAreaView style={styles.container}>

           <Text>qatar</Text>




                </SafeAreaView>
                </ScrollView>
        </KeyboardAvoidingView>
        




    );

}