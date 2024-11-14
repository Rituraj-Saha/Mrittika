import {StyleSheet, Text, View} from 'react-native';
import React, {Children} from 'react';
import {scale} from '../../utils/responsiveDymentions';
import Carousel from 'react-native-reanimated-carousel';

const CustomCarousal = props => {
  const {config, data, renderItem} = props;
  return (
    <View style={{minHeight: scale(150, 0)}}>
      <Carousel
        {...config}
        data={data}
        // onProgressChange={progress}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CustomCarousal;

const styles = StyleSheet.create({});
