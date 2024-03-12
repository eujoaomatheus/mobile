import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { ListItem, Avatar, Icon, } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import ApiContato from '../API/BackContatos';







const Contato = () => {
    
    const navigation = useNavigation();
    const [list, setList] = useState([])

    const novoContato = () => {
        navigation.navigate('CadastroContato');
    }

    const editarContato = (contato) => {
        
        navigation.navigate('EditarContato', contato);

    }


    useEffect(()=>{

        console.log("use Effect Chamado")
        ApiContato.getContato()
        .then(response => {
            console.log(response.status);
            setList(response.data)
        }).catch(error =>{
            console.warn(error);
        })

       
    })



    return (

        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.text}>Lista de Contatos</Text>
                <TouchableOpacity style={styles.icon}>
                    <Icon name="plus" type='font-awesome' size={30} color={'white'}
                        onPress={novoContato}
                    />
                </TouchableOpacity>
            </View>
            <View>
                {
                    list.map((l, i) => (
                        <TouchableOpacity key={i} onPress={() => editarContato(l)}>
                            <ListItem bottomDivider>
                                <Avatar source={{ uri: l.avatar_url }} />
                                <ListItem.Content>
                                    <ListItem.Title>{l.name}</ListItem.Title>
                                    <ListItem.Subtitle>{l.phone}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>


    );
}


const styles = StyleSheet.create({
    icon: {

        marginRight: 10,
        marginTop: 20

    },
    cabecalho: {
        backgroundColor: '#006db2',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    }
});

export default Contato;

