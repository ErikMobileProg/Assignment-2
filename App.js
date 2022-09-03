import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [input, setInput] = useState('');
  const convertedInput = parseInt(input);
  const [text, setText] = useState('Guess a number between 1-100');

  const [counter, setCounter] = useState(1);
  const [randomNumber, createRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const buttonPressed = () => {

    if (randomNumber == convertedInput) {
      Alert.alert('Your guessed the number in ' + counter + ' guesses ');
      setCounter(1);
      setText('Guess a number between 1-10');
      createRandomNumber(Math.floor(Math.random() * 100));

    } else if (randomNumber > convertedInput) {
      setText('Your guess ' + convertedInput + ' is too low ');
      setCounter(counter + 1);

    } else if (randomNumber < convertedInput) {
      setText('Your guess ' + convertedInput + ' is too high ');
      setCounter(counter + 1);

    }

  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        {text}
      </Text>

      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        onChangeText={input => setInput(input)}
      />

      <Button title='Make Guess' onPress={buttonPressed} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  text: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 30
  },

  textInput: {
    width: 70,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30
  }


});
