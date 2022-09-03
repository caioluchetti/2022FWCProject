import { StyleSheet } from 'react-native';
import { createNumberMask } from 'react-native-mask-input';

export default StyleSheet.create({

    container:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        flex:1,
        width:'80%'

    },
    botaoMain:{
        margin:10,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#9B072E',
        borderRadius: 15,
        borderColor:'black',
        borderWidth:1,
        width: '30%',
        height: '40%',
        shadowColor:'black',
        shadowOffset:10,
    },
    botaoCadastro:{
        margin:10,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#9B072E',
        borderRadius: 15,
        borderColor:'black',
        borderWidth:1,
        width: '30%',
        height: '10%',
        shadowColor:'black',
        shadowOffset:10,
    },
    input:{
        width: '30%',
        height: '15%',
        alignContent:'center',
        backgroundColor:'lightgray',
        justifyContent:'center',
        textAlign:'center',
        borderRadius:15,
        borderWidth:0,
        color:'green',
        
        elevation: 2,



    },
    tcadastro:{
        textAlign:'center',
        textShadowColor:'black',
        fontWeight: 'bold',
        fontSize:20,
        color: 'white',
        textShadowRadius: 6,


    },
    tcontagem:{

        textAlign:'center',
        textShadowColor:'black',
        fontWeight: 'bold',
        fontSize:20,
        color: 'white',
        textShadowRadius: 6,
        width:'80%'
        


    },
    ncontagem:{

        textAlign:'left',
        textShadowColor:'black',
        fontWeight: 'bold',
        fontSize:20,
        color: '#9B072E',
        textShadowRadius: 6,
        width:'20%'
    },
    headcadastro:{

        alignContent:'center',
        flexDirection:'row',
        margin:20,
    }


})
