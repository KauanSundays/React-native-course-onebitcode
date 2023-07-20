import { StatusBar } from 'expo-status-bar';
import {Image , StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title';
import Form from './src/components/Form/form';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./pictures/saude.png')}
        style={styles.saudeicon}
      ></Image>
      <Title style={styles.Title}/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A7F4B',
    paddingTop: 80,
  },

  saudeicon: {
    width: 100,
    height:100,
    borderColor: '#A62B1F',
    marginBottom: 10
  }
}

);
