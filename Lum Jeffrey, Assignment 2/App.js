import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import { HomeScreenStack } from './Navigation/MainNavigator'

/* Color Palette used: https://www.canva.com/colors/color-palettes/mermaid-lagoon/ */

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreenStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
