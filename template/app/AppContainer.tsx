import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthScreens } from 'navigation';

export const AppContainer: React.FC = () => {
  const Navigation = AuthScreens;

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
      <Navigation />
    </NavigationContainer>
  );
};
