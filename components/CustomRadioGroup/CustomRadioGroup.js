import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioButton, useTheme} from 'react-native-paper';

const CustomRadioGroup = props => {
  const {
    orientation = 'horizontal',
    selectedIndex = 0,
    handleSelection,
    radioButtonContent = [],
  } = props;
  const theme = useTheme();
  const styles = makeStyle(theme);
  return (
    <View
      style={{
        flexDirection: orientation == 'horizontal' ? 'row' : 'column',
      }}>
      {radioButtonContent.length > 0 &&
        radioButtonContent.map((item, index) => {
          return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                key={index}
                value={item.value}
                status={index === selectedIndex ? 'checked' : 'unchecked'}
                onPress={() => {
                  handleSelection(index);
                }}
              />
              <Text>{item.value}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default CustomRadioGroup;

const makeStyle = theme => StyleSheet.create({});
