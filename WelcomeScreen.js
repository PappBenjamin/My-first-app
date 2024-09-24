import React from 'react';
import {StyleSheet, Text, SafeAreaView, Button, ImageBackground, Alert } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const buttonPressed = () => {
    Alert.alert(
      "Message",
      "You will be redirected to the login page",
      [
        { text: "OK", onPress: () => { navigation.navigate('Login'); }},
        { text: "Exit"}
      ]
    );
  };

  return (
    <ImageBackground blurRadius={3} style={styles.imageBackground} source={require('./assets/bg1.jpg')}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Button title='Click here' color='#D4CDCD' onPress={buttonPressed} />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"

  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },

  welcomeText: {
    fontSize: 33,
    marginBottom: 10,
    fontFamily: 'American Typewriter',
    color: '#403939'
  },
});

export default WelcomeScreen;
