import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen } from 'views/screens/AuthStack';
import { AppScreens } from 'types';

const screenOptions = { headerShown: false, gestureEnabled: false } as const;
const options = { animation: 'none' } as const;

const AuthStack = createNativeStackNavigator();
export const AuthScreens = (): React.ReactElement => (
  <AuthStack.Navigator initialRouteName={AppScreens.Auth} screenOptions={screenOptions}>
    <AuthStack.Screen options={options} name={AppScreens.Auth} component={AuthScreen} />
  </AuthStack.Navigator>
);
