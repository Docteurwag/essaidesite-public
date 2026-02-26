import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Linking, ScrollView, StyleSheet } from 'react-native';

const LOGO_URL = 'https://lumenchristitv.com/logo.png'; // Remplacer par le vrai logo
const YOUTUBE_URL = 'https://www.youtube.com/@lumenchristitvbenin';
const TWITCH_URL = 'https://www.twitch.tv/lumenchristitv2024';
const DON_URL = 'https://lumenchristitv.com/don';

const menus = [
  { label: 'Actualités', url: 'https://lumenchristitv.com/actualites' },
  { label: 'Formations', url: 'https://lumenchristitv.com/formations' },
  { label: 'Prières', url: 'https://lumenchristitv.com/prieres' },
  { label: 'Emissions', url: 'https://lumenchristitv.com/emissions' },
  { label: 'Programmes', url: 'https://lumenchristitv.com/programmes' },
  { label: 'Diocèses', url: 'https://lumenchristitv.com/dioceses' },
  { label: 'À propos', url: 'https://lumenchristitv.com/a-propos' },
];

const videoMenus = [
  { label: 'Vidéos', url: YOUTUBE_URL },
  { label: 'En direct', url: YOUTUBE_URL },
  { label: 'Podcasts', url: YOUTUBE_URL },
  { label: 'Playlists', url: YOUTUBE_URL },
  { label: 'Posts', url: YOUTUBE_URL },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Logo et nom */}
        <View style={styles.header}>
          <Image source={{ uri: LOGO_URL }} style={styles.logo} />
          <Text style={styles.title}>Lumen Christi TV</Text>
        </View>
        {/* Menus principaux */}
        <View style={styles.menuSection}>
          {menus.map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.menuBtn} onPress={() => Linking.openURL(item.url)}>
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Live Twitch */}
            <WebView
              source={{ uri: 'https://www.twitch.tv/lumenchristitv2024' }}
              style={styles.webview}
              allowsFullscreenVideo
            />
        {/* Menus vidéos */}
        <View style={styles.menuSection}>
          {videoMenus.map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.menuBtn} onPress={() => Linking.openURL(item.url)}>
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {/* Bouton don */}
      <TouchableOpacity style={styles.donBtn} onPress={() => Linking.openURL(DON_URL)}>
        <Text style={styles.donText}>Faire un don</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1',
  },
  header: {
    alignItems: 'center',
    marginVertical: 28,
    backgroundColor: '#fff',
    borderRadius: 32,
    marginHorizontal: 16,
    paddingVertical: 18,
    shadowColor: '#00695c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#00bfae',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00695c',
    letterSpacing: 1,
  },
  menuSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 16,
    marginHorizontal: 8,
  },
  menuBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 22,
    margin: 8,
    shadowColor: '#00bfae',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 8,
    elevation: 3,
  },
  menuText: {
    color: '#00695c',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  liveSection: {
    alignItems: 'center',
    marginVertical: 24,
  },
  liveTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 8,
  },
  liveLink: {
    color: '#1976d2',
    textDecorationLine: 'underline',
    marginTop: 8,
    fontSize: 15,
  },
  donBtn: {
    position: 'absolute',
    bottom: 28,
    right: 28,
    backgroundColor: '#ff9800',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 28,
    elevation: 8,
    shadowColor: '#ff9800',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
  },
  donText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  webview: {
    flex: 1,
    borderRadius: 18,
    marginHorizontal: 8,
    overflow: 'hidden',
    minHeight: 260,
    backgroundColor: '#000',
  },
});
