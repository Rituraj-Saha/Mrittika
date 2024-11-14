import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomFlatList = props => {
  const {data, renderItem, config} = props;
  return (
    <FlatList
      {...config}
      data={data}
      renderItem={renderItem}
      viewPosition={0.5}
    />
  );
};

export default CustomFlatList;

const styles = StyleSheet.create({});
