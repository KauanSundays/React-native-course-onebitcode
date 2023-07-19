import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultImc(props) {
    return (
        <View>
            <Text>{props.resultImc}</Text>
            <Text>{props.messageResultImc}</Text>
        </View>
    )
}