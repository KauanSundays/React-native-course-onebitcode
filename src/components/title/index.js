import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Title() {
  const [backgroundColor, setBackgroundColor] = useState('#F2F2F2');
  const [textColor, setTextColor] = useState('black');

  useEffect(() => {
    const interval = setInterval(() => {
      //Altera as cores de fundo e  texto a cada 2 segundos
      if (backgroundColor === '#F2F2F2') {
        setBackgroundColor('black');
        setTextColor('#F2F2F2');
      } else {
        setBackgroundColor('#F2F2F2');
        setTextColor('black');
      }
    }, 2000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [backgroundColor, textColor]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.titleText, { color: textColor }]}>
        Calcule seu IMC
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  titleText: {
    fontSize: 22,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
