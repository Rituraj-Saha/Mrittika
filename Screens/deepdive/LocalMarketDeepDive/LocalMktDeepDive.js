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
import ItemView from '../../../components/ItemView/ItemView';

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
const RenderDots = props => {
  const {data, currentIndex = 0} = props;
  const theme = useTheme();
  const styles = dotContainerStyle(theme);
  return (
    <View style={styles.dotsContainer}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentIndex === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
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
  const [showVendorCard, setShowVendorCard] = React.useState(true);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            paddingHorizontal: scale(10, 0),
            paddingVertical: scale(15, 0),
          }}>
          {route.params.routeParam.marketName}
        </Text>
        <View style={{position: 'absolute', left: '85%'}}>
          <IconButton
            icon={showVendorCard ? 'chevron-up' : 'chevron-down'}
            size={25}
            onPress={() => {
              setShowVendorCard(!showVendorCard);
            }}
          />
        </View>
        {showVendorCard && (
          <View
            style={{
              flex: 0.3,
            }}>
            <View style={{flex: 0.9}}>
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

            <RenderDots data={vendorList} currentIndex={vendorSelectedIndex} />
          </View>
        )}
        <View
          style={{
            flex: !showVendorCard ? 1 : 0.7,
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

const dotContainerStyle = theme =>
  StyleSheet.create({
    dotsContainer: {
      position: 'absolute',
      bottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    dot: {
      height: 10,
      width: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: theme.colors.secondary,
    },
    inactiveDot: {
      backgroundColor: 'gray',
    },
  });
