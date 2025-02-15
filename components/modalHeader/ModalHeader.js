import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton, useTheme} from 'react-native-paper';
const ModalHeader = props => {
  const theme = useTheme();
  const styles = makeStyle(theme);
  const {headerText, backButtonClick} = props;
  return (
    <View style={styles.container}>
      <IconButton
        icon="chevron-left" // Icon name from MaterialCommunityIcons
        onPress={backButtonClick}
      />
      <Text>{headerText}</Text>
    </View>
  );
};

export default ModalHeader;

const makeStyle = theme =>
  StyleSheet.create({
    container: {
      flex: 0.08,
      flexDirection: 'row',
    },
  });
