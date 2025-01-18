import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomFlatList = props => {
  const {data, renderItem, config, onViewableItemsChanged, viewabilityConfig} =
    props;
  return (
    <FlatList
      {...config}
      data={data}
      renderItem={renderItem}
      viewPosition={0.5}
      onViewableItemsChanged={onViewableItemsChanged} // Pass the callback for detecting visible items
      viewabilityConfig={viewabilityConfig} // Pass the viewability config
    />
  );
};

export default CustomFlatList;

const styles = StyleSheet.create({});
