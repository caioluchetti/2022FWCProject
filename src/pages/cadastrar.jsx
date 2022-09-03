import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput } from 'react-native';
import React, {useEffect} from 'react';
import styles from '../style/styles';
import TextInputMask from 'react-native-text-input-mask';

const ProductCodeInput = ({value, onChangeText}) => {
    const mask = '[AA]{#}[00]{-}[000]';
    return (
      <TextInputMask
        style={styles.maskedInput}
        mask={mask}
        value={value}
        onChangeText={onChangeText}
        placeholder="NN#00-000"
        placeholderTextColor="grey"
      />
    );
  }

export default function Cadastrar(props){

    const metadeTela = Dimensions.get('window').width / 2 * 0.95;
    const [fig, onChangeNumber] = React.useState(null);


    return (
    

        <View style={styles.container}>
                
                <ProductCodeInput value={productCode} onChangeText={(formatted) => setProductCode(formatted)}/>

            <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={fig}
        placeholder="FIGURINHA"
        keyboardType="default"
        autoCapitalize = {"characters"}

           />
        </View>
        

        
    );

}