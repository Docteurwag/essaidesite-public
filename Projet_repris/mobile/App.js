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
        <View style={styles.liveSection}>
          <Text style={styles.liveTitle}>Live</Text>
          <TouchableOpacity onPress={() => Linking.openURL(TWITCH_URL)}>
            <Text style={styles.liveLink}>Regarder le live sur Twitch</Text>
          </TouchableOpacity>
        </View>
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
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { alignItems: 'center', marginVertical: 20 },
  logo: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#00695c' },
  menuSection: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 10 },
  menuBtn: { backgroundColor: '#e0f2f1', borderRadius: 8, padding: 12, margin: 6 },
  menuText: { color: '#00695c', fontWeight: 'bold' },
  liveSection: { alignItems: 'center', marginVertical: 20 },
  liveTitle: { fontSize: 20, fontWeight: 'bold', color: '#d32f2f' },
  liveLink: { color: '#1976d2', textDecorationLine: 'underline', marginTop: 8 },
  donBtn: { position: 'absolute', bottom: 20, right: 20, backgroundColor: '#ff9800', borderRadius: 30, paddingVertical: 12, paddingHorizontal: 24, elevation: 4 },
  donText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
