import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const TWITCH_CHANNEL = 'lumenchristitv2024';
const TWITCH_URL = `https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=localhost&parent=YOUR_DOMAIN`;

const TwitchLive = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: TWITCH_URL }}
        style={styles.webview}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
  },
});

export default TwitchLive;
