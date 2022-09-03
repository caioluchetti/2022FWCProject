import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../style/styles';
import { TextInputMask } from 'react-native-masked-text'



export default function Cadastrar(props) {

    const metadeTela = Dimensions.get('window').width / 2 * 0.95;
    const [fig, onChangeNumber] = React.useState(null);
    const [cell, setCell] = useState('');

    state = {
        count: 0
      }


    return (


        <View style={styles.container}>

        <View style={styles.headcadastro}>

        <Text style={styles.tcontagem}>O numero de figurinhas atual é:</Text> 
        <Text style={styles.ncontagem}> {state.count}</Text>

        </View>
            
            
            <TextInputMask
                style={styles.input}
                type={'custom'}
                options={{
                    mask: 'AAA99'
                }
                }
                value={cell}
                onChangeText={text => setCell(text)}
                placeholder='AAA00'
                autoCapitalize={"characters"}

            />

<TouchableOpacity style={styles.botaoCadastro}>
  <Text style={styles.tcadastro}>Cadastrar</Text>            
</TouchableOpacity>
        </View>
        




    );

}