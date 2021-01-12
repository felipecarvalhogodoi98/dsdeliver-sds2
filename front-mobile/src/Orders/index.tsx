import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, Alert} from 'react-native';
import fecthOrders from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard'
import { Order } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation(); 
    const isFocused = useIsFocused();

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', {
            order
        });
    }

    const fetchData = () => {
        setIsLoading(true);
        fecthOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert('Erro ao buscar pedidos'))
            .finally( () => setIsLoading(false));
    }

    useEffect( () =>{
        if (isFocused){
            fetchData();
        }
    }, [isFocused])

    return (
        <>
        <Header/>
        <ScrollView style={styles.container}>
            {isLoading ? (
                <Text style={styles.textLoading}>Carregando Pedidos...</Text>
            ) : (
                orders.map(order => (
                    <TouchableWithoutFeedback key={order.id} onPress={() => handleOnPress(order)}>
                        <OrderCard order={order}/>
                    </TouchableWithoutFeedback>
                ))
            )}
        </ScrollView>
        </>
    );    
}

const styles = StyleSheet.create({
    container:{
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    textLoading:{
        color: '#263238',
        fontSize: 30,
        lineHeight: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '50%'
    }
});