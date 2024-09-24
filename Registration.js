import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ImageBackground, TextInput, View, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegistrationScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const handleRegistration = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert('Success', 'Registration successful!');
    navigation.navigate('Login');
  };

  return (
    <ImageBackground blurRadius={5} style={styles.imageBackground} source={require('./assets/bg1.jpg')}>
      <SafeAreaView>
        <Text style={styles.registerText}>Registration</Text>
      </SafeAreaView>

      <View style={styles.centeredView}>
        <TextInput
          placeholder='Enter your email'
          opacity={0.6}
          placeholderTextColor='black'
          style={styles.textBox}
          keyboardType='email-address'
          keyboardAppearance='dark'
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder='Enter your password'
          opacity={0.6}
          placeholderTextColor='#D4CDCD'
          style={styles.textBox}
          secureTextEntry={true}
          keyboardAppearance='dark'
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          placeholder='Confirm your password'
          opacity={0.6}
          placeholderTextColor='#D4CDCD'
          style={styles.textBox}
          secureTextEntry={true}
          keyboardAppearance='dark'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity onPress={handleRegistration} style={styles.registerButton}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.login} onPress={() => navigation.navigate('Login')}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },

  registerText: {
    fontSize: 33,
    marginTop: 50,
    fontFamily: 'American Typewriter',
    color: '#403939',
    textAlign: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBox: {
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    width: 300,
    height: 35,
    textAlign: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },

  registerButton: {
    backgroundColor: '#403939',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  buttonText: {
    color: '#D4CDCD',
    fontSize: 16,
  },

  login: {
    color: "#D4CDCD",
    opacity: 0.6,
    marginTop: 30,
  },
});
