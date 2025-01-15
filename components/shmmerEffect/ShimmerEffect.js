import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerEffect = ({style}) => {
  const shimmerAnimation = useRef(new Animated.Value(-1)).current;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnimation, {
        toValue: 1,
        duration: 1200, // Adjust speed of shimmer
        useNativeDriver: true,
      }),
    ).start();
  }, [shimmerAnimation]);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [-1, 1],
    outputRange: [-screenWidth, screenWidth],
  });

  return (
    <View style={[styles.shimmerWrapper, style]}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            transform: [{translateX}],
          },
        ]}>
        <LinearGradient
          colors={['#e0e0e0', '#f5f5f5', '#e0e0e0']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  shimmerWrapper: {
    backgroundColor: '#e0e0e0', // Base color for shimmer
    overflow: 'hidden',
  },
});

export default ShimmerEffect;
