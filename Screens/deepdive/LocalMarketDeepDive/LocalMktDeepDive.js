import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IconButton, TextInput, useTheme} from 'react-native-paper';
import {fullWidth, scale} from '../../../utils/responsiveDymentions';
import HeaderTextComponent from '../../../components/HeaderTextComponent/HeaderTextComponent';
import CustomFlatList from '../../../components/CustomFlatList/CustomFlatList';
import {MARKET_DEEPDIVE_PAYLOAD} from '../../../samplePayloads/MktDeepDivePayload';
import CustomRadioGroup from '../../../components/CustomRadioGroup/CustomRadioGroup';
import History from '../../history/History';
import {useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../../app/slice/cartSlice';
import _ from 'lodash';
import {Picker, DatePicker} from 'react-native-wheel-pick-2';
export const ItemView = props => {
  const {
    name,
    images,
    price,
    discount,
    shopDetails,
    quantityProvided,
    unitProvided,
  } = props;
  const units = [{value: 'gms'}, {value: 'kg'}];

  const [selectedUnitIndex, setSelectedUnitIndex] = React.useState(
    units.findIndex(item => item.value === unitProvided) === -1
      ? 0
      : units.findIndex(item => item.value === unitProvided),
  );
  const handleSelection = idx => {
    setSelectedUnitIndex(idx);
  };
  const [crtIcon, setCrtIcon] = React.useState(true);
  const [qty, setQty] = React.useState(quantityProvided);
  const dispatch = useDispatch();
  const validateCartAddButton = React.useMemo(() => {
    return _.isEmpty(qty) || qty === '' ? true : false;
  }, [qty]);
  const pickerData = [
    {
      unit: 'kg',
      value: [1, 2, 3, 4, 5, 6, 8, 9, 10],
    },
    {
      unit: 'gms',
      value: [100, 200, 300, 400, 500, 600, 800, 900],
    },
  ];
  return (
    <View style={{marginVertical: scale(5, 0), height: scale(180, 0)}}>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.9,
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
            {discount !== undefined && <Text>{`${discount}%off`}</Text>}
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // height: scale(50, 0),
            }}>
            {/* <TextInput
                inputMode="decimal"
                mode="outlined"
                placeholder="Qty"
                style={{height: scale(40, 0)}}
                value={qty}
                onChangeText={text => setQty(text)}
                
              /> */}
            <View
              style={
                {
                  // borderWidth: 1,
                }
              }>
              <Picker
                style={{
                  width: scale(90),
                  height: scale(90, 0),
                  // borderWidth: 1,
                }}
                textColor={'black'}
                textSize={scale(16)}
                selectedValue={qty}
                pickerData={
                  pickerData.find(
                    item => item.unit === units[selectedUnitIndex].value,
                  ).value
                }
                onValueChange={value => {
                  setQty(value);
                }}
              />
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                height: scale(90, 0),
                // borderWidth: 1,
              }}>
              <CustomRadioGroup
                selectedIndex={selectedUnitIndex}
                handleSelection={idx => {
                  handleSelection(idx);
                }}
                radioButtonContent={units}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.3,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconButton
          icon={crtIcon ? 'cart-plus' : 'history'} // Icon name from MaterialCommunityIcons
          size={25}
          style={{borderWidth: 1}}
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
  );
};

const RenderVendorCardItem = props => {
  const theme = useTheme();
  const styles = vendorCardStyle(theme);
  const {vendorItem, shopDetails} = props;
  return (
    <View style={styles.mcontainer}>
      {/* <HeaderTextComponent headerText={'My Offerings: '} /> */}
      <View>
        <ItemView
          id={`iid-${vendorItem?.item?.id}-id-${Date.now()}-${Math.random()
            .toString(36)
            .substr(2, 9)}`}
          shopDetails={shopDetails}
          // key={index}
          name={vendorItem?.item?.name}
          images={vendorItem?.item?.images}
          price={vendorItem?.item?.price}
          discount={vendorItem?.item?.discount}
        />
      </View>
    </View>
  );
};
const LocalMktDeepDive = props => {
  const {route} = props;
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [vendorList, setVendorList] = React.useState([]);
  const [vendorSelectedIndex, setVendorSelectedIndex] = React.useState(0);
  React.useEffect(() => {
    // Ensure vendorList is set only once
    const newVendorList = MARKET_DEEPDIVE_PAYLOAD.vendorList.map(
      item => item.shopDetails,
    );
    setVendorList(newVendorList);
  }, [MARKET_DEEPDIVE_PAYLOAD.vendorList]);

  // const handleVendorSelection = index => {
  //   setVendorSelectedIndex(index);
  // };
  const venderListRef = React.useRef(null);
  React.useEffect(() => {}, [vendorSelectedIndex]);

  const onViewableItemsChanged = React.useRef(({viewableItems}) => {
    if (viewableItems && viewableItems.length > 0) {
      setVendorSelectedIndex(viewableItems[0].index); // Update the currently visible index
    }
  }).current;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50, // Trigger callback when 50% of the item is visible
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={styles.container}>
      <View
        style={{
          flex: 1,
        }}>
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
              pagingEnabled: true,
            }}
            ref={venderListRef}
            data={vendorList}
            renderItem={({item: mItem, index}) => (
              <View
                key={index}
                style={{
                  width: fullWidth,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    width: fullWidth - 25,
                    padding: scale(5, 0),
                    margin: scale(10, 0),
                    borderWidth: vendorSelectedIndex == index ? 2 : 0.5,
                    borderColor: theme.colors.secondary,
                    borderRadius: scale(10, 0),
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
                      // borderWidth: 1,
                    }}></View>
                </View>
              </View>
            )}
            onViewableItemsChanged={onViewableItemsChanged} // Pass the callback to detect visible items
            viewabilityConfig={viewabilityConfig} // Pass the viewability configuration
          />
        </View>

        <View
          style={{
            flex: 0.7,
          }}>
          <CustomFlatList
            config={{
              scrollEnabled: true,
            }}
            nestedScrollEnabled
            keyExtractor={item => item.id}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{paddingBottom: 50}}
            data={MARKET_DEEPDIVE_PAYLOAD.vendorList[vendorSelectedIndex].items}
            renderItem={(item, index) => {
              return (
                <RenderVendorCardItem
                  key={index}
                  vendorItem={item}
                  shopDetails={
                    MARKET_DEEPDIVE_PAYLOAD.vendorList[vendorSelectedIndex]
                      .shopDetails
                  }
                />
              );
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
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
