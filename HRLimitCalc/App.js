import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [age,setAge] = useState('')
  const [limits,setLimits] = useState('')

  const calculate = () => {
    const upperResult = (220-age) * 0.85
    const lowerResult = (220-age) * 0.65

    const roundedUpper = upperResult.toFixed(2)
    const roundedLower = lowerResult.toFixed(2)

    setLimits(roundedLower + "-" + roundedUpper)
  }


  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
      value={age} 
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      />
      <Text>Limits</Text>
      <Text>{limits}</Text>
      <Button title="Calculate" onPress={calculate}></Button>
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
  },
});
