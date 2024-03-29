import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, Pressable } from 'react-native';
import api from '../../services/api';

import styles from './styles';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Details');
    };

    async function loadIncidents() {
        const response = await api.get('incidents');
        
        console.log(response.headers['X-Total-Count']);
        setIncidents(response.data)
        setTotal(response.headers['x-total-count'] || 0);
    };

    useEffect(() => {
        loadIncidents();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.H1}>Be The Hero</Text>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia.
            </Text>
            
            <FlatList
            data={incidents}
            style={styles.incidentList}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: incident }) => (
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG: </Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>CASO: </Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR: </Text>
                    <Text style={styles.incidentValue}>
                        {Intl.NumberFormat('pt-BR',
                        {style: 'currency', currency: 'BRL'})
                        .format(incident.value)}
                        </Text>

                    <Pressable
                    style={styles.detailsButton}
                    onPress={navigateToDetail}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041"></Feather>
                    </Pressable>
                </View>
            )}
            />
        </View>
    )
};