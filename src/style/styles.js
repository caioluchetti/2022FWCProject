import { StyleSheet } from 'react-native';
import { createNumberMask } from 'react-native-mask-input';

export default StyleSheet.create({

    container:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        flex:1,
        width:'100%',
        

    },
    containerAlbum:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        flex:1,
        width:'100%',
        flexWrap:'wrap',
        flexDirection:'row'
        

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
        width:'60%',
        flexWrap:'wrap',


    },
    ncontagem:{

        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        textAlign:'center',
        textShadowColor:'black',
        fontWeight: 'bold',
        fontSize:70,
        color: '#9B072E',
        textShadowRadius: 6,
        width:'20%'
    },
    headcadastro:{

        alignContent:'center',
        flexDirection:'column',
        margin:10,
        
    }


})
