import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

const LocalMktDeepDive = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View>
      <Text>LocalMktDeepDive</Text>
    </View>
  );
};

export default LocalMktDeepDive;

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
  });
