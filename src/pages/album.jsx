import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput ,Alert, KeyboardAvoidingView,ScrollView, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../style/styles';
import axios from '../../axios';



export default function Album(props){

    const metadeTela = Dimensions.get('window').width / 2 * 0.95;

    const [vetor, setArray] = useState([]);
    const [codfig, setCodfig] = useState('')

    useEffect(() => {
        listFig();
      }, []);

      const listFig = async () => {

        const result2 = await axios.get('/fig/listatodos')
        .then((result2) =>{
            console.log(result2.data)
            setArray(result2.data)

        }).catch((error) => {
            console.error(error);
        })


    }
    
    function cadastrarFig(param){

            setCodfig(param);
            console.log(param)
        }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={70}>
            <ScrollView style={{width:'100%'}}>
            <SafeAreaView style={styles.containerAlbum}>
                <StatusBar style="auto" />

                {
                        vetor && vetor.map(function (array) {
                            if(array.POSSUI == 1){
                            return (
                               

                                    <TouchableOpacity key={array.CODIGO} style={{backgroundColor:'rgba(20,80,20,.3)', borderColor: 'rgba(20,70,20,.3)', marginTop:20,marginHorizontal:5 , borderWidth: 2, padding: 0, flexDirection: 'column', width: '25%',height:40, borderRadius: 10 }}>
                                    <View style={{ width: "100%", alignContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', textAlign: 'center',fontSize:10 }}>
                                            {array.PAGINA}
                                        </Text>
                                        <Text style={{ fontStyle: 'italic', textAlign: 'center',fontSize:10  }}>
                                            {array.CODIGO}
                                        </Text>
                                    </View>
                                </TouchableOpacity>


                                
                                   
                            );}else{
                                return (
                                <TouchableOpacity key={array.CODIGO} onPress={cadastrarFig(array.codigo)} style={{ backgroundColor:'rgba(80,20,20,.3)', marginTop:20,marginHorizontal:5 , borderWidth: 2, padding: 0, flexDirection: 'column', width: '25%',height:40, borderRadius: 10 }}>
                                    <View style={{ width: "100%", alignContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', textAlign: 'center',fontSize:10 }}>
                                            {array.PAGINA}
                                        </Text>
                                        <Text style={{ fontStyle: 'italic', textAlign: 'center',fontSize:10  }}>
                                            {array.CODIGO}
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                        );}

                        })





                    }



            </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
        
    );

}