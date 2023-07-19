import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, {useState} from "react"
import ResultImc from '../ResultImc';

export default function Form() {
    const [height, setHeight]= useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState("Calcular")


    function imcCalculator() {
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validation() {
        if(weight != null && height !== null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc('Preencha o peso ou a altura!!')
    }




    return (
        <View>
            <View>
                <Text style={styles.title}>Altura</Text>
                <TextInput style={styles.inputs}
                placeholder='Your altura'
                onChangeText={setHeight} //atualiza em tempo real a altura
                value={height}
                ></TextInput>
                <Text style={styles.title}>Peso</Text>

                <TextInput style={styles.inputs}
                placeholder='Your peso'
                onChangeText={setWeight}
                value={weight}>
                </TextInput>
                
                <Button 
                title="Calcular IMC"
                onPress={() => validation()}
                />
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />
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
  