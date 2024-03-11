
import  LoginScreen  from './src/components/Login';
import { NavigationContainer ,useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Contato from './src/components/Contatos';
import CadastroContato from './src/components/CadastroContato';
import EditarContato from './src/components/EditarContato';
import Cadastro from './src/components/Cadastrar';


const AppStack = createStackNavigator();

export default function App() {

 


  return (
    <NavigationContainer>

    
        <AppStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <AppStack.Screen name="Login" component={LoginScreen} />
          <AppStack.Screen name="Contato" component={Contato} />
          <AppStack.Screen name="CadastroContato" component={CadastroContato} />
          <AppStack.Screen name="EditarContato" component={EditarContato} />
          <AppStack.Screen name="Cadastro" component={Cadastro} />


        </AppStack.Navigator>
      

  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
