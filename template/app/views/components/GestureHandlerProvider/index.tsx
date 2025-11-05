import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const GestureHandlerProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <GestureHandlerRootView style={styles.container}>{children}</GestureHandlerRootView>
);

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
});
