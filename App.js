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
import Argentina from './src/pages/paginas/argentina';
import Alemanha from './src/pages/paginas/alemanha';
import Belgica from './src/pages/paginas/belgica';
import Brasil from './src/pages/paginas/brasil';
import Camaroes from './src/pages/paginas/camaroes';
import Canada from './src/pages/paginas/canada';
import Coreia from './src/pages/paginas/coreiadosul';
import CostaRica from './src/pages/paginas/costari';
import Croacia from './src/pages/paginas/croacia';
import Dinamarca from './src/pages/paginas/dinamarca';
import Equador from './src/pages/paginas/equador';
import Espanha from './src/pages/paginas/espanha';
import CocaCola from './src/pages/paginas/cocacola';
import EUA from './src/pages/paginas/eua';
import Franca from './src/pages/paginas/franca';
import Gana from './src/pages/paginas/gana';
import Holanda from './src/pages/paginas/holanda';
import Inglaterra from './src/pages/paginas/inglaterra';
import Iran from './src/pages/paginas/iran';
import Japao from './src/pages/paginas/japao';
import Marrocos from './src/pages/paginas/marrocos';
import Mexico from './src/pages/paginas/mexico';
import Polonia from './src/pages/paginas/polonia';
import Portugal from './src/pages/paginas/portugal';
import Saudi from './src/pages/paginas/saudi';
import Senegal from './src/pages/paginas/senegal';
import Servia from './src/pages/paginas/servia';
import Tunisia from './src/pages/paginas/tunisia';
import Uruguai from './src/pages/paginas/uruguai';
import Wales from './src/pages/paginas/wales';
import Australia from './src/pages/paginas/australia';
//import FifaWorld from './src/pages/paginas/fifaworld';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="Cadastrar Figurinha" component={Cadastrar} />
        <Drawer.Screen name="Meu Álbum" component={Album} />
        <Drawer.Screen name="Todos as Páginas" component={Paises}/>
        <Drawer.Screen name="Qatar" component={Qatar}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Argentina" component={Argentina}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Alemanha" component={Alemanha}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Belgica" component={Belgica}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Brasil" component={Brasil}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Camaroes" component={Camaroes}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Canada" component={Canada}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="CostaRica" component={CostaRica}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Coreia" component={Coreia}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Croacia" component={Croacia}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Dinamarca" component={Dinamarca}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Equador" component={Equador}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Espanha" component={Espanha}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="EUA" component={EUA}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Franca" component={Franca}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Gana" component={Gana}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Holanda" component={Holanda}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Inglaterra" component={Inglaterra}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Iran" component={Iran}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Japao" component={Japao}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Marrocos" component={Marrocos}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Mexico" component={Mexico}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Polonia" component={Polonia}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Portugal" component={Portugal}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Saudi" component={Saudi}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Senegal" component={Senegal}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Servia" component={Servia}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Tunisia" component={Tunisia}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Uruguai" component={Uruguai}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Wales" component={Wales}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Drawer.Screen name="Austrália" component={Australia}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
           <Drawer.Screen name="Coca Cola" component={CocaCola}
         options={{
            drawerItemStyle: { height: 0 },
            headerStyle: {
              backgroundColor: '#9B072E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
