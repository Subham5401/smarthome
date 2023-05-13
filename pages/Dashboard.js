import react from 'react';
import { View, StyleSheet, Text, Image, ima } from 'react-native'

export default function Dashboard() {
    return (
        <View style={styles.dashboard}>
            <View style={styles.header}>
                <Text style={styles.header_1}>Welcome home</Text>
                <Text style={styles.header_2}>SM</Text>
            </View>
            <View style={styles.rooms}>
                <Text className='title'>Rooms</Text>
                <View style={styles.list}>
                    <View style={styles.rooms}>
                        <Image source={require('../assets/living.png')} />
                        <Text className='living'>Living</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/bedroom.png')} />
                        <Text className='living'>Bedroom</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/kitchen.png')} />
                        <Text className='living'>Kitchen</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/bathroom.png')} />
                        <Text className='living'>Bathroom</Text>
                    </View>
                </View>
            </View>
            <View className='smart-system'>
                <Text>Smart System</Text>
                <View className='light'></View>
                <View className='fan'></View>
            </View>
            <View className='footer'></View>
        </View>
    )
}

const styles = StyleSheet.create({
    dashboard: {
        fontFamily: 'sans-serif',
        padding: 10
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 30
    },
    header_1: {
        fontSize: 20,
        fontWeight: '500'
    },
    header_2: {
        fontSize: 30,
        fontWeight: '700'
    },
    rooms: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    items: {
        width: 20,
        height: 20,
        borderRadius: 8
    }
})