import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultImc(props) {
    return (
        <View>
            <Text style={styles.result}>{props.messageResultImc}</Text>            
            <Text style={styles.result}>{props.resultImc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    result: {
        fontSize: 30
    }
})
