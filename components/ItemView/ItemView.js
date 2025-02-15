import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import _ from 'lodash';
import {IconButton, useTheme} from 'react-native-paper';
import {scale} from '../../utils/responsiveDymentions';

import {Picker, DatePicker} from 'react-native-wheel-pick-2';
import CustomRadioGroup from '../CustomRadioGroup/CustomRadioGroup';
const ItemView = props => {
  const {
    name,
    images,
    price,
    discount,
    shopDetails,
    quantityProvided,
    unitProvided,
    isViewedFor,
  } = props;
  const units = [{value: 'gms'}, {value: 'kg'}];
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
  const [selectedUnitIndex, setSelectedUnitIndex] = React.useState(
    units.findIndex(item => item.value === unitProvided) === -1
      ? 0
      : units.findIndex(item => item.value === unitProvided),
  );
  const handleSelection = idx => {
    setSelectedUnitIndex(idx);
  };
  const [crtIcon, setCrtIcon] = React.useState(true);
  const [qty, setQty] = React.useState(
    quantityProvided === undefined
      ? pickerData.find(item => item.unit === units[selectedUnitIndex].value)
          .value[5]
      : quantityProvided,
  );
  const dispatch = useDispatch();
  const validateCartAddButton = React.useMemo(() => {
    return _.isEmpty(qty) || qty === '' ? true : false;
  }, [qty]);

  const theme = useTheme();
  const styles = itemStyle(theme);
  const discountedPrice =
    discount === undefined ? price : price - (discount / price) * 100;
  console.log('discouted: ', discountedPrice);
  const calcutedPrice =
    selectedUnitIndex === 0
      ? ((Number(discountedPrice) * Number(qty)) / 1000).toFixed(2)
      : (discountedPrice * qty).toFixed(2);
  {
    console.log(`${calcutedPrice}`);
  }
  return (
    <View style={styles.itemContainer}>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.9,
        }}>
        <View
          style={{
            flex: 0.3,
            borderWidth: 1,
            marginTop: scale(10, 0),
            marginStart: scale(10, 0),
          }}></View>
        <View
          style={{
            flex: 0.7,
            gap: scale(5, 0),
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: scale(10, 0),
              paddingLeft: scale(10, 0),
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: scale(600, 0),
                fontSize: scale(18, 0),
              }}>
              {name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: scale(10, 0),
              paddingLeft: scale(10, 0),
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: scale(600, 0),
                fontSize: scale(16, 0),
                textDecorationLine:
                  discount !== undefined ? 'line-through' : 'none',
              }}>{`Rs.${price}/kg`}</Text>
            {discount !== undefined && (
              <Text
                style={{
                  color: 'green',
                  fontWeight: scale(600, 0),
                  fontSize: scale(16, 0),
                }}>{`${discount}%off`}</Text>
            )}
            {discount !== undefined && (
              <Text
                style={{
                  color: 'green',
                  fontWeight: scale(600, 0),
                  fontSize: scale(16, 0),
                }}>{`Rs: ${price - (discount / price) * 100}/kg`}</Text>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              // height: scale(50, 0),
            }}>
            <View
              style={
                {
                  // borderWidth: 1,
                }
              }>
              <Picker
                style={{
                  width: scale(100),
                  height: scale(90, 0),
                  // borderWidth: 1,
                  backgroundColor: 'white',
                  // padding: scale(30, 0),
                  marginHorizontal: scale(10, 0),
                }}
                textColor={'black'}
                selectBackgroundColor="#8080801A"
                textSize={scale(16)}
                selectedValue={
                  _.isEmpty(qty) || qty === ''
                    ? `${
                        pickerData.find(
                          item => item.unit === units[selectedUnitIndex].value,
                        ).value[5]
                      }`
                    : qty
                  // `${pickerSelectedValue}`
                }
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
          // borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        {/* <Text>Add to CART</Text> */}

        <Text
          style={{
            color: 'black',
            fontSize: scale(18, 0),
          }}>{`${calcutedPrice}`}</Text>
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

export default ItemView;
const itemStyle = theme =>
  StyleSheet.create({
    itemContainer: {
      marginVertical: scale(5, 0),
      height: scale(200, 0),
      borderWidth: 0.5,
      borderRadius: scale(10, 0),
    },
  });
