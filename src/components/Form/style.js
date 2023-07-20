import { StyleSheet, borderRadius, backgroundColor } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: 'center',
        marginTop: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        paddingHorizontal: 30,
        
    },
    formLabel: {
        color: '#343840',
        fontSize: 24,
        paddingLeft: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    },
    inputs: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#F2F2F2',
        paddingLeft: 20,
        fontSize: 22,
        padding: 5,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        marginTop: 20
    },
    textTouch: {
        fontSize: 22,
        padding: 10,
        color: '#F2F2F2',
    },
    errorText: {
        backgroundColor: '#ff0043',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 8,
        borderRadius: 8,
      },
});

export default styles