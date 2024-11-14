import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {scale} from '../../utils/responsiveDymentions';
import {cartIcon, MKtSvg} from '../../constants/Svg';
import {Circle, Svg, SvgUri, SvgXml} from 'react-native-svg';

const MktCard = props => {
  const {mkt_id, mkt_name, mkt_location, pin, sampleImgs, ...rest} = props;

  const theme = useTheme();
  const styles = makeStyle(theme);
  return (
    <View style={styles.container}>
      <SvgXml height="50%" width="50%" xml={MKtSvg}></SvgXml>
    </View>
  );
};

export default MktCard;

const makeStyle = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      // borderWidth: 1,
      margin: scale(10, 0),
      padding: scale(5, 0),
      minHeight: scale(200, 0),
      borderRadius: scale(10, 0),
      elevation: 4,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 8,
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
  });
