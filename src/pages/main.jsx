import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image,SafeAreaView, Switch  } from 'react-native';
import React, {useEffect} from 'react';
import styles from '../style/styles';


export default function Main(props){


    
    const metadeTela = Dimensions.get('window').width / 2 * 0.95;


    return (
        <SafeAreaView style={styles.container}>

                <Image source={require('../imgs/icon.png')} style={{ width: metadeTela, height: metadeTela, marginBottom: 20 }} />

        <View style={{flexDirection:'row',margin:10}}>
                <TouchableOpacity style={styles.botaoMain} onPress={() => props.navigation.navigate('Cadastrar Figurinha')}>
                         <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'white', textShadowRadius: 6, textShadowColor: 'black' }}>Cadastrar Figurinha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoMain} onPress={() => props.navigation.navigate('Todos as Páginas')}>
                         <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'white', textShadowRadius: 6, textShadowColor: 'black' }}>Páginas </Text>
                </TouchableOpacity>


        </View>
               
    




        </SafeAreaView>


    );

}