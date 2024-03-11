import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon, } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Notification from './Notification';
import ApiContato from '../Api/ApiContato';






const EditarContato = (props) => {

    
    let contato = props.route.params
    let nome = props.route.params.name;
    let phoneU = props.route.params.phone;

    const [showNotification, setShowNotification] = useState(false);
    const [name, setName] = useState(nome);
    const [phone, setPhone] = useState(phoneU);
    const [mensagem, setMensagem] = useState("")

    const alterar = () => {
        

        contatoAlerado =  {
            "id": contato.id,
            "name": name,
            "avatar_url": "https://cdn-icons-png.flaticon.com/128/711/711769.png",
            "phone": phone
        }

        ApiContato.putContato(contatoAlerado)
            .then(response  => {
                if(response.status === 200){
                    setMensagem(`Contato alterado com sucesso ${name} ${phone}`)
                    setShowNotification(true);
                }
            }).catch(error => {
                console.warn(error)
            })


    
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    }

    const deletar = () => {
        ApiContato.deleteContato(contato.id)
        .then(response =>{
            if(response.status === 200){
                setMensagem(`Contato ${name} foi deletado da agenda!!`)
                setShowNotification(true);

                setTimeout(() => {
                    setShowNotification(false);
                    listaContato();
                }, 3000);

            }
        }).catch(error =>{
            console.warn(error)
        })


        
    }

   

    const navigation = useNavigation();
    

    const listaContato = () => {
        navigation.navigate('Contato');
    }


    return (

        <View>
            <View style={styles.cabecalho}>
                <TouchableOpacity style={styles.icon}>
                    <Icon name="arrow-left" type='font-awesome' size={30} color={'white'} 
                        onPress={listaContato}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>Contato</Text>


            </View>
            <View>
                <View style={styles.container}>
                    <Text style={styles.title}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={name}
                        onChangeText={setName}

                    />
                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"


                    />
                    <Text style={styles.title}>Telefone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Telefone"
                        value={phone}
                        onChangeText={setPhone}


                    />
                    <TouchableOpacity style={styles.button} onPress={alterar}>
                        <Text style={styles.buttonText}  >Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonDelete} onPress={deletar}>
                        <Text style={styles.buttonText}>Exluir</Text>
                    </TouchableOpacity>
                    
                </View>
                {showNotification && <Notification message={mensagem} />}
            </View>
           
        </View>


    );
}


const styles = StyleSheet.create({

    cabecalho: {
        backgroundColor: '#006db2',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        flexDirection: 'row',

    },

    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },

    icon: {

        marginRight: 10,
        marginTop: 20,
        right: 120,

    },

    container: {
        
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 50
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#006db2',
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
      buttonDelete: {
        
        width: '100%',
        height: 50,
        backgroundColor: '#ED2939',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
      }
});

export default EditarContato;

