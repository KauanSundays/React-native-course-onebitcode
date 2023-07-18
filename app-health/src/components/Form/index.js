import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Form() {
    return (
        <View>
            <View>
                <Text style={styles.title}>Altura</Text>
                <TextInput style={styles.inputs}
                placeholder='Your altura'></TextInput>
                <Text style={styles.title}>Peso</Text>
                <TextInput style={styles.inputs}
                placeholder='Your peso'></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    inputs: {
        fontSize: 24,
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 30,
        borderRadius: 10,
    },

    title: {
        fontSize: 30,
      },
      
    
  });
  