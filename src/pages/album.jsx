import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput ,Alert, KeyboardAvoidingView,ScrollView,RefreshControl, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../style/styles';
import axios from '../../axios';


export default function Album(props){

    const [refresh,setRefresh] = useState(false);

    const pullMe = () => {

        setRefresh(true)

        setTimeout(() =>{
            setRefresh(false)
        },10000)



    }


    const [vetor, setArray] = useState([]);
    const [codfig, setCodfig] = useState('');

    useEffect(()=>{
        listFig();
      },[])
      

      function listFig() {

        const result2 =  axios.get('/fig/listatodos')
        .then((result2) =>{
            console.log(result2.data)
            setArray(result2.data)

        }).catch((error) => {
            console.error(error);
        })


    }

    function postFiguras(paramfig){

        console.log(paramfig);

        const result = axios.post('/fig/cadastrar',paramfig)
        .then((result) => {
            

            Alert.alert("Sucesso",result.data,
           
              )
          }).catch((error) => {
            Alert.alert("ERRO","FIGURINHA NÃO EXISTENTE")
          });
  
        }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={70}>
            <ScrollView style={{width:'100%'}}
            refreshControl={
                <RefreshControl
                  refreshing={refresh}
                  onRefresh={()=> pullMe()}
                />
              }>
            <SafeAreaView style={styles.containerAlbum}>
                <StatusBar style="auto" />

                {
                        vetor && vetor.map(function (array) {
                            if(array.POSSUI == 1){
                            return (
                               

                                    <TouchableOpacity key={array.CODIGO} style={{backgroundColor:'rgba(20,80,20,.3)', marginTop:20,marginHorizontal:5 , borderWidth: 2, padding: 0, flexDirection: 'column', width: '25%',height:40, borderRadius: 10 }}>
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
                                <TouchableOpacity key={array.CODIGO} onPress={() => postFiguras(array)} style={{ backgroundColor:'rgba(80,20,20,.3)', marginTop:20,marginHorizontal:5 , borderWidth: 2, padding: 0, flexDirection: 'column', width: '25%',height:40, borderRadius: 10 }}>
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