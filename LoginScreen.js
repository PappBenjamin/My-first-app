import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, ImageBackground, TextInput, View, Image, Alert, Button, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedLoginAttempts, setFailedLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const passwordGood = ''; // Placeholder, replace with actual logic
  const emailGood = '';

  const MAX_ATTEMPTS = 3;
  const TIMEOUT = 60000; // 1 minute timeout

  const navigation = useNavigation();

  useEffect(() => {
    if (isBlocked) {
      const timer = setTimeout(() => {
        setFailedLoginAttempts(0);
        setIsBlocked(false);
      }, TIMEOUT);

      return () => clearTimeout(timer); // Cleanup timer if component unmounts
    }
  }, [isBlocked]);

  const handleLogin = () => {
    if (isBlocked) {
      Alert.alert('Blocked', 'Too many failed attempts. Please try again later.');
      return;
    }

    if (email === emailGood && password === passwordGood) {
      console.log("Login successful");
      setFailedLoginAttempts(0);
      navigation.navigate("Final");
    } 
    else
    {
      setFailedLoginAttempts(prev => prev + 1);

      if (failedLoginAttempts >= MAX_ATTEMPTS)
      {
        setIsBlocked(true);
        Alert.alert('Blocked', 'Too many failed attempts. Please try again in 1 minute.');
      } 
      else 
      {
        Alert.alert('Login Failed', `Incorrect email or password. ${ 3 - failedLoginAttempts} attempts remaining `);
      }
    }

    // Clear the fields
    setEmail('');
    setPassword('');
  };

  const easerEgg = () => 
  {
    if(!IseaserEgg)
    {
      Alert.alert("Good to know","You are fucked :)");
      setEaserEgg(true)
    }
  }

  return (
    <ImageBackground blurRadius={4} style={styles.imageBackground} source={require('./assets/bg1.jpg')}>
      <SafeAreaView>
        <Text style={styles.loginText}>Login Page</Text>
      </SafeAreaView>

      <TouchableOpacity style={styles.centeredView} onPress={easerEgg}>
        <Image source={require('./assets/apple.png')} style={{ width: 140, height: 140 }}/>
      </TouchableOpacity>

      <View style={styles.centeredView}>
        <TextInput
          placeholder='Enter your email'
          opacity={0.6}
          placeholderTextColor='#D4CDCD'
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
          onSubmitEditing={handleLogin}
        />

        <TouchableOpacity>
        <Text style={styles.register} onPress={ () => navigation.navigate("Registration")}>Register</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.9,
  },

  loginText: {
    fontSize: 33,
    marginTop: 70,
    fontFamily: 'American Typewriter',
    color: '#403939',
    textAlign: 'center',
  },

  centeredView: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBox: {
    borderColor: 'black',
    color: '#D4CDCD',
    borderWidth: 1,
    width: 300,
    height: 35,
    textAlign: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },

  register: {
    color: "#D4CDCD",
    opacity: 0.6
  }
});
