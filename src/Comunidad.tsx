import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native';

const Comunidad = () => {
    const operatorsOfTheMonth = [
        { route: 'Ruta 1', first: 'Juan Pérez', second: 'Carlos López', third: 'Miguel Torres' },
        { route: 'Ruta 2', first: 'Ana García', second: 'Luis Hernández', third: 'María Ruiz' },
    ];

    const events = [
        { date: '2025-05-01', title: 'Día del Trabajo' },
        { date: '2025-06-16', title: 'Día del Padre' },
        { date: '2025-03-17', title: 'Día de la Familia' },
        { date: '2025-03-21', title: 'Evento CMOV' },
    ];

    const sortedEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const formatDate = (dateString: string): string => {
        const [year, month, day] = dateString.split('-');
        return `${day}-${month}-${year}`;
    };

    return (
        <View style={styles.container}>
            {/* Background fijo sin afectar el contenido */}
            <ImageBackground source={require('../assets/images/background2.jpeg')} style={styles.background} />
                  {/* Header con logo */}
                  <View style={styles.header}>
                  <Image source={require('../assets/images/logo3.jpeg')} style={styles.logo} />
                  </View>
            {/* Contenido independiente */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.operatorsContainer}>
                    <Text style={styles.header}>OPERADOR DEL MES</Text>
                    {operatorsOfTheMonth.map((item, index) => (
                        <View key={index} style={styles.operatorCard}>
                            <Text style={styles.routeTitle}>{item.route}</Text>
                            <Text style={styles.operatorName}>🥇 {item.first}</Text>
                            <Text style={styles.operatorName}>🥈 {item.second}</Text>
                            <Text style={styles.operatorName}>🥉 {item.third}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.eventsContainer}>
                    <Text style={styles.header}>EVENTOS CMOV</Text>
                    {sortedEvents.map((item, index) => (
                        <View key={index} style={styles.eventCard}>
                            <Text style={styles.eventDate}>{formatDate(item.date)}</Text>
                            <Text style={styles.eventTitle}>{item.title}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
      position: 'absolute',
      bottom: 13,
      left: -114,
      width: '110%',
      height: '104%',
      resizeMode: 'cover',
    },
    logo: {
      top: -58,
      width: 110,
      height: 100,
      resizeMode: 'contain', // Para que la imagen no se deforme
      left: 85,
  },
    scrollContent: {
      padding: 20, // Espaciado para evitar que el contenido se superponga al fondo
    },
    operatorsContainer: {
      marginTop: -50, // En vez de top: -33, usa marginTop para moverlo arriba sin problemas
      backgroundColor: '#ffd501',
      padding: 25,
      borderRadius: 10,
      marginBottom: 10, // Reduce el espacio inferior
  },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#000000',
    },
    operatorCard: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    routeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000000',
        textAlign: 'center',
    },
    operatorName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000000',
    },
    eventsContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    eventCard: {
        padding: 20,
        marginBottom: 10,
        backgroundColor: '#2c2b70',
        borderRadius: 10,
    },
    eventDate: {
        fontSize: 14,
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#ffffff',
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default Comunidad;
