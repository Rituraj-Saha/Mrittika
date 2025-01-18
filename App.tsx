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
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistor, store } from './app/index';
import { PersistGate } from 'redux-persist/integration/react';


function App(): React.JSX.Element {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      primaryContainer: "rgb(247, 236, 220)",
      secondary: '#fca100',
      accent: '#f1c40f',
      selected: "#fca100",
      secondaryContainer: "rgb(255, 213, 150)",
      backgroundColor: "rgba(255, 248, 239, 0.36)",
      itemBackgroundColor: "rgba(189, 186, 187, 0.54)",
      headLineText: "#1a1a19"
    },

  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <PaperProvider theme={theme}>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </PaperProvider>
    </Provider>

  );
}



export default App;
