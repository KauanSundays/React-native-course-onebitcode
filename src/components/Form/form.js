import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, {useState} from "react"
import ResultImc from '../ResultImc';
import styles from './style'

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
        setMessageImc('Preencha o peso e altura!!')
    }




    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                placeholder='Your altura'
                onChangeText={setHeight} //atualiza em tempo real a altura
                value={height}
                style={styles.inputs}
                ></TextInput>
                <Text style={styles.formLabel}>Peso</Text>

                <TextInput
                placeholder='Your peso'
                onChangeText={setWeight}
                value={weight}
                style={styles.inputs}>
                </TextInput>
                


                <TouchableOpacity 
                style={styles.buttonCalculator} 
                onPress={()=>{validation()}}>
                    <Text style={styles.textTouch} >Press Here</Text>
                </TouchableOpacity>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    )
};
  