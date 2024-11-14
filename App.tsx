/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import Home from './Screens/home/Home';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {


  return (
    <PaperProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </PaperProvider>

  );
}



export default App;
