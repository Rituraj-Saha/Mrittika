import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton, TextInput, useTheme} from 'react-native-paper';
import {scale} from '../../../utils/responsiveDymentions';
import HeaderTextComponent from '../../../components/HeaderTextComponent/HeaderTextComponent';
import CustomFlatList from '../../../components/CustomFlatList/CustomFlatList';
import {MARKET_DEEPDIVE_PAYLOAD} from '../../../samplePayloads/MktDeepDivePayload';
import CustomRadioGroup from '../../../components/CustomRadioGroup/CustomRadioGroup';
import History from '../../history/History';
import {useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../../app/slice/cartSlice';

const ItemView = props => {
  const {name, images, price, discount, shopDetails} = props;
  const units = [{value: 'gms'}, {value: 'kg'}];
  const [selectedUnitIndex, setSelectedUnitIndex] = React.useState(0);
  const handleSelection = idx => {
    setSelectedUnitIndex(idx);
  };
  const [crtIcon, setCrtIcon] = React.useState(true);
  const [qty, setQty] = React.useState('');
  const dispatch = useDispatch();
  const validateCartAddButton = React.useMemo(() => {
    return qty === '' ? true : false;
  }, [qty]);
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
                value={qty}
                onChangeText={text => setQty(text)}
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
              disabled={validateCartAddButton}
              onPress={() => {
                const itemDetails = {
                  ...props,
                  orderDetails: {
                    unit: units[selectedUnitIndex]?.value,
                    qty: qty,
                  },
                };
                crtIcon
                  ? dispatch(addItem(itemDetails))
                  : dispatch(removeItem(props.id));

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
            flex: 0.7,
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <Text>Shop Name</Text>
          <Text>Vendor Name</Text>
          <Text>Shop Number</Text>
          <Text>shopCategory</Text>
        </View>
        <View
          style={{
            flex: 0.3,
            borderWidth: 1,
          }}></View>
      </View>
      {/* <HeaderTextComponent headerText={'My Offerings: '} /> */}
      <View>
        {vendorItem?.item?.items.map((item, index) => {
          return (
            <ItemView
              id={`iid-${item.id}-id-${Date.now()}-${Math.random()
                .toString(36)
                .substr(2, 9)}`}
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
  const [vendorList, setVendorList] = React.useState([]);
  React.useEffect(() => {
    // Ensure vendorList is set only once
    const newVendorList = MARKET_DEEPDIVE_PAYLOAD.vendorList.map(
      item => item.shopDetails,
    );
    setVendorList(newVendorList);
  }, [MARKET_DEEPDIVE_PAYLOAD.vendorList]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingHorizontal: scale(10, 0),
          paddingVertical: scale(15, 0),
        }}>
        {route.params.routeParam.marketName}
      </Text>
      <View
        style={{
          flex: 0.3,
        }}>
        <CustomFlatList
          config={{
            horizontal: true,
            showsHorizontalScrollIndicator: false,
          }}
          data={vendorList}
          renderItem={({item: mItem, index}) => (
            <View key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  width: scale(280, 0),
                  margin: scale(5, 0),
                }}>
                <View
                  style={{
                    flex: 0.7,
                    borderWidth: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Text>{mItem.shopName}</Text>
                  <Text>{mItem.vendorName}</Text>
                  <Text>{mItem.vendorId}</Text>
                  <Text>{mItem.shopCategory}</Text>
                </View>
                <View
                  style={{
                    flex: 0.3,
                    borderWidth: 1,
                  }}></View>
              </View>
            </View>
          )}
        />
      </View>

      {/* <CustomFlatList
        config={{
          scrollEnabled: true,
        }}
        data={MARKET_DEEPDIVE_PAYLOAD.vendorList}
        renderItem={(item, index) => {
          return <RenderVendorCardItem key={index} vendorItem={item} />;
        }}
      /> */}
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
      // borderWidth: 2,
      // borderColor: theme.colors.primary,
      marginHorizontal: scale(5, 0),
      marginVertical: scale(15, 0),
    },
  });
