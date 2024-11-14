import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../../utils/responsiveDymentions';

const HeaderTextComponent = props => {
  const {headerText, ...rest} = props;
  return (
    <View style={{paddingHorizontal: scale(10, 0)}}>
      <Text>{headerText}</Text>
    </View>
  );
};

export default HeaderTextComponent;

const styles = StyleSheet.create({});
