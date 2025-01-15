import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../../utils/responsiveDymentions';
import {useTheme} from 'react-native-paper';

const HeaderTextComponent = props => {
  const {headerText, ...rest} = props;
  const theme = useTheme();
  const styles = mStyle(theme);
  return (
    <View style={styles.content}>
      <Text style={styles.headerTextStyle}>{headerText}</Text>
    </View>
  );
};

export default HeaderTextComponent;

const mStyle = theme =>
  StyleSheet.create({
    content: {paddingHorizontal: scale(10, 0), marginVertical: scale(10, 0)},
    headerTextStyle: {
      fontSize: scale(18, 0),
      color: theme.colors.headLineText,
      fontWeight: '700',
    },
  });
