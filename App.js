import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Main from './src/pages/main';
import Cadastrar from './src/pages/cadastrar';
import Album from './src/pages/album';
import Paises from './src/pages/paginas/paises';
import Qatar from './src/pages/paginas/qatar';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="Cadastrar Figurinha" component={Cadastrar} />
        <Drawer.Screen name="Meu Álbum" component={Album} />
        <Drawer.Screen name="Todos os Países" component={Paises}/>
        <Drawer.Screen name="Qatar" component={Qatar}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
