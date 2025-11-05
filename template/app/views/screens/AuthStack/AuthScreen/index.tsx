import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AuthScreen: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.view}>
      <Text style={styles.text}>Welcome</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  view: { flex: 1, paddingTop: 20 },
  text: { textAlign: 'center', fontSize: 30, fontWeight: 'bold' },
});
