import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton, TextInput, useTheme} from 'react-native-paper';
import {scale} from '../../../utils/responsiveDymentions';
import HeaderTextComponent from '../../../components/HeaderTextComponent/HeaderTextComponent';
import CustomFlatList from '../../../components/CustomFlatList/CustomFlatList';
import {MARKET_DEEPDIVE_PAYLOAD} from '../../../samplePayloads/MktDeepDivePayload';
import CustomRadioGroup from '../../../components/CustomRadioGroup/CustomRadioGroup';
import History from '../../history/History';

const ItemView = props => {
  const {name, images, price, discount, shopDetails} = props;
  const units = [{value: 'gms'}, {value: 'kg'}];
  const [selectedUnitIndex, setSelectedUnitIndex] = React.useState(0);
  const handleSelection = idx => {
    setSelectedUnitIndex(idx);
  };
  const [crtIcon, setCrtIcon] = React.useState(true);
  return (
    <View style={{marginVertical: scale(5, 0)}}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
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
            gap: scale(10, 0),
          }}>
          <View style={{flexDirection: 'row', gap: scale(10, 0)}}>
            <Text>{name}</Text>
            <Text>{`Price: Rs.${price}/kg`}</Text>
            <Text>{`${discount}%off`}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: scale(50, 0),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{height: scale(40, 0)}}>
              <TextInput
                inputMode="decimal"
                mode="outlined"
                placeholder="Qty"
                style={{height: scale(40, 0)}}
              />
            </View>
            <View style={{flex: 0.9}}>
              <CustomRadioGroup
                selectedIndex={selectedUnitIndex}
                handleSelection={idx => {
                  handleSelection(idx);
                }}
                radioButtonContent={units}
              />
            </View>
            <IconButton
              icon={crtIcon ? 'cart-plus' : 'history'} // Icon name from MaterialCommunityIcons
              size={25}
              theme={{
                colors: {primary: 'red', accent: 'red', secondary: 'red'},
              }}
              onPress={() => {
                console.log('Pressed on : ', props);
                setCrtIcon(!crtIcon);
              }}
            />
          </View>
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
              shopDetails={vendorItem?.item?.shopDetails}
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
