import { StyleSheet, Text, TextInput, View, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useRef } from "react";
import ResultImc from '../ResultImc';
import styles from './style';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [TextButton, setTextButton] = useState("Calcular");

  const errorMessagePosition = useRef(new Animated.Value(0)).current;

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validation() {
    if (weight !== null && height !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual:");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc('Preencha o peso e altura!!');

    // Animação do erro
    Animated.sequence([
      Animated.timing(errorMessagePosition, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(errorMessagePosition, {
        toValue: 0,
        duration: 50,
        delay: 50, // Tempo de atraso para a animação retornar ao ponto inicial (2 segundos)
        useNativeDriver: false,
      }),
    ]).start();
  }

  const slideError = errorMessagePosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          placeholder='Your altura'
          onChangeText={setHeight}
          value={height}
          style={styles.inputs}
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          placeholder='Your peso'
          onChangeText={setWeight}
          value={weight}
          style={styles.inputs}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => { validation() }}
        >
          <Text style={styles.textTouch}>Calcular</Text>
        </TouchableOpacity>

        {imc !== null && (
          <Text style={styles.messageImcStyle}>{messageImc} {imc}</Text>
        )}

        {imc === null && (
          <Animated.Text style={[styles.errorMessageStyle, { transform: [{ translateY: slideError }] }]}>
            {messageImc}
          </Animated.Text>
        )}
      </View>
    </View>
  );
};
