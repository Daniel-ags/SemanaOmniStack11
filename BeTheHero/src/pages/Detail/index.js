import React from "react";
import { View, Text, Pressable, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const message = `Olá APAD, estou entrando em contato, pois gostaria de ajuda no caso "Cadelinha atropelada" com o valor de R$120,00.`

    function navigateToIncidents() {
        navigation.goBack()        
    };

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: Cadelinha Atropelada`,
            recipients: [`danielalmeidagsilva@gmail.com`],
            body: message
        })
    };

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5521966794949&text=${message}`)
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.H1}>Be The Hero</Text>
                <Pressable onPress={navigateToIncidents}>
                    <Feather name='arrow-left' size={28} color='#e02041' />
                </Pressable>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO: </Text>
                <Text style={styles.incidentValue}>Cadela Atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR: </Text>
                <Text style={styles.incidentValue}>120</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre me contato:</Text>

                <View style={styles.actions}>
                    <Pressable style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </Pressable>
                    
                    <Pressable style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
};