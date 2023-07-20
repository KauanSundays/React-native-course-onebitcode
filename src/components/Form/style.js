import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "90%",
    height: "90%",
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    alignItems: 'center', // Centraliza os elementos horizontalmente
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
    backgroundColor: '#5A7F4B',
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
  messageImcStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
  errorMessageStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: '#5B3870',
    padding: 10,
    borderRadius: 10
  },
});

export default styles;
