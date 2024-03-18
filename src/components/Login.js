import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Input } from 'react-native-elements';
import { app } from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";





const LoginScreen = () => {

  const [senha, setSenha] = useState(null)
  const [email, setEmail] = useState(null)

  const navigation = useNavigation();

  const auth = getAuth(app);

  const loginFirebase = () => {

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Passou")
        navigation.navigate('Contato');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });


  }



  const login = (email, senha) => {
    
    l
  
  //  
  };

  const cadastrar = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={{
          uri:
            'https://cdn-icons-png.flaticon.com/128/711/711769.png',
        }}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={email}
        onChangeText={setEmail}

      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}

        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={loginFirebase(email, senha)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={cadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#28a745',
  },
});

export default LoginScreen;
