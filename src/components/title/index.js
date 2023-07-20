import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title() { // Esse é o nome que esta exportando
    return(
        <View>
            <Text style={{fontSize:24, color: '#5A7F4B', backgroundColor: '#B5B763',padding: 5, borderRadius: 15 }}>APP DE SAUDE TOP</Text>
            
        </View>
    )
}