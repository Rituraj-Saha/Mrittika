import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

const OrderCheckout = () => {
  const theme = useTheme();
  const styles = makeStyle(theme);
  return (
    <View style={styles.container}>
      <Text>OrderCheckout</Text>
    </View>
  );
};

export default OrderCheckout;

const makeStyle = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
