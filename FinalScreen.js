import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const App = () => {
  // State to hold the video ID
  const [videoId, setVideoId] = useState('dQw4w9WgXcQ'); // Default video ID, replace with your own

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        source={{ uri: `https://www.youtube.com/watch?v=IhW_UNwaHOg&list=RDIhW_UNwaHOg&start_radio=1` }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
