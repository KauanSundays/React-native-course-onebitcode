import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title() { // Esse é o nome que esta exportando
    return(
        <View style={styles.container}>
            <Text style= {styles.titleText}>
                APP DE SAUDE TOP
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      borderRadius: 50,
      backgroundColor: '#F2F2F2',
      fontSize: 22,
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
  });
