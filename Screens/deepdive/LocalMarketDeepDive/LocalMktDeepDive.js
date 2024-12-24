import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {scale} from '../../../utils/responsiveDymentions';
import HeaderTextComponent from '../../../components/HeaderTextComponent/HeaderTextComponent';
import CustomFlatList from '../../../components/CustomFlatList/CustomFlatList';
import {MARKET_DEEPDIVE_PAYLOAD} from '../../../samplePayloads/MktDeepDivePayload';

const ItemView = props => {
  const {name, images, price, discount} = props;
  return (
    <View style={{height: scale(150, 0), marginVertical: scale(5, 0)}}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
        }}>
        <View
          style={{
            flex: 0.4,
            borderWidth: 1,
          }}></View>
        <View
          style={{
            flex: 0.6,
            borderWidth: 1,
          }}>
          <Text>{name}</Text>
          <Text>{price}</Text>
          <Text>{discount}</Text>
        </View>
      </View>
    </View>
  );
};

const RenderVendorCardItem = props => {
  const theme = useTheme();
  const styles = vendorCardStyle(theme);
  const {vendorItem} = props;
  return (
    <View style={styles.mcontainer}>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.2,
        }}>
        <View
          style={{
            flex: 0.3,
            borderWidth: 1,
          }}></View>
        <View
          style={{
            flex: 0.7,
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <Text>Shop Name</Text>
          <Text>Vendor Name</Text>
          <Text>Shop Number</Text>
          <Text>shopCategory</Text>
        </View>
      </View>
      <HeaderTextComponent headerText={'My Offerings: '} />
      <View>
        {vendorItem?.item?.items.map((item, index) => {
          return (
            <ItemView
              key={index}
              name={item?.name}
              images={item?.images}
              price={item?.price}
              discount={item?.discount}
            />
          );
        })}
      </View>
    </View>
  );
};
const LocalMktDeepDive = props => {
  const {route} = props;
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingHorizontal: scale(10, 0),
          paddingVertical: scale(15, 0),
        }}>
        {route.params.routeParam.marketName}
      </Text>
      <CustomFlatList
        config={{
          scrollEnabled: true,
        }}
        data={MARKET_DEEPDIVE_PAYLOAD.vendorList}
        renderItem={(item, index) => {
          return <RenderVendorCardItem key={index} vendorItem={item} />;
        }}
      />
    </View>
  );
};

export default LocalMktDeepDive;

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
  });

const vendorCardStyle = theme =>
  StyleSheet.create({
    mcontainer: {
      flex: 1,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      marginHorizontal: scale(15, 0),
      marginVertical: scale(5, 0),
    },
  });
