import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';

const Comunidad = () => {
    const operatorsOfTheMonth = [
        { route: 'Ruta 1', first: 'Juan Pérez', second: 'Carlos López', third: 'Miguel Torres' },
        { route: 'Ruta 2', first: 'Ana García', second: 'Luis Hernández', third: 'María Ruiz' },
        // Agregar más rutas hasta completar las 50
    ];

    const events = [
        { date: '2025-05-01', title: 'Día del Trabajo' },
        { date: '2025-06-16', title: 'Día del Padre' },
        { date: '2025-03-17', title: 'Día de la Familia' },
        { date: '2025-03-21', title: 'Evento CMOV' },
        // Agregar más eventos
    ];

    // Ordenar eventos por fecha
    const sortedEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Función para formatear la fecha en formato latino (día-mes-año)
    const formatDate = (dateString: string): string => {
        const [year, month, day] = dateString.split('-');
        return `${day}-${month}-${year}`;
    };

    return (
        <ImageBackground source={require('../assets/images/bgcomunidad.jpeg')} style={styles.background}>
            <ScrollView style={styles.container}>
                {/* Operador del Mes */}
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

                {/* Eventos */}
                <View style={styles.eventsContainer}>
                    <Text style={styles.header}>EVENTOS CMOV</Text>
                    <ScrollView style={styles.eventsList}>
                        {sortedEvents.map((item, index) => (
                            <View key={index} style={styles.eventCard}>
                                <Text style={styles.eventDate}>{formatDate(item.date)}</Text>
                                <Text style={styles.eventTitle}>{item.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: -30,
    left: -100,
    width: '117%',
    height: '109%',
    resizeMode: 'cover',
  },
  container: { 
    flex: 1, 
    padding: 50, 
    top: 55,
    right: -63,
  },
  operatorsContainer: { 
    backgroundColor: '#ffd501', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 25,
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
    padding: -10, 
    backgroundColor: '#ffffff', 
    borderRadius: 10 
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
  eventsList: {
    maxHeight: 300, 
    paddingRight: 10, // Espacio para la barra de desplazamiento
  },
  eventCard: { 
    padding: 20, 
    marginBottom: 10, 
    backgroundColor: '#2c2b70', 
    borderRadius: 10 
  },
  eventDate: { 
    fontSize: 14, 
    textAlign: 'right',
    fontWeight: 'bold', 
    color: '#ffffff' 
  },
  eventTitle: { 
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#ffffff',
  }
});

export default Comunidad;
