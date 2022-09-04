import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput ,Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../style/styles';
import { TextInputMask } from 'react-native-masked-text';
import axios from '../../axios';



export default function Cadastrar(props) {

    const metadeTela = Dimensions.get('window').width / 2 * 0.95;
    const [fig, onChangeNumber] = React.useState(null);
    const [cell, setCell] = useState('');
    const [total, setTotal] = useState(0);


    useEffect(() => {
        TotalFig();
      }, []);

    const paramfig = {
        CODIGO: cell,
    }

    const TotalFig = async () => {

        const result2 = await axios.get('/fig/total')
        .then((result2) =>{
            console.log(result2.data[0].total[0])
            setTotal(result2.data[0].total[0])

        }).catch((error) => {
            console.error(error);
        })


    }

    const postFiguras = async () => {



        const result = await axios.post('/fig/cadastrar',paramfig)
        .then((result) => {
            console.log(result.data);

            Alert.alert("Sucesso",result.data,
            [
                {text: 'OK', onPress: () => TotalFig()},
              ],
              {cancelable: false},
              )
          }).catch((error) => {
            Alert.alert("ERRO","FIGURINHA NÃO EXISTENTE")
          });
  
        }
    return (


        <View style={styles.container}>

        <View style={styles.headcadastro}>

        <Text style={styles.tcontagem}>O numero de figurinhas atual é:</Text> 
        <Text style={styles.ncontagem}> {total}</Text>

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

                <TouchableOpacity style={styles.botaoCadastro} onPress={postFiguras}>
                     <Text style={styles.tcadastro}>Cadastrar</Text>            
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaovoltar} onPress={() => props.navigation.navigate('Home')}>
                  <Text>VOLTAR</Text>
                </TouchableOpacity>
        </View>
        




    );

}