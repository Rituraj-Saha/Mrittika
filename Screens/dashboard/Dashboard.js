import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MktCard from './MktCard';
import {DASHBOARD_PAYLOAD} from '../../samplePayloads/dasboardPayload';
import {Chip, useTheme} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import {scale} from '../../utils/responsiveDymentions';
import CustomCarousal from '../../components/Carousal/CustomCarousal';
import CustomFlatList from '../../components/CustomFlatList/CustomFlatList';
import Svg, {SvgXml} from 'react-native-svg';
import HeaderTextComponent from '../../components/HeaderTextComponent/HeaderTextComponent';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const defaultDataWith6Colors = React.useMemo(
    () => ['#B0604D', '#899F9C', '#B3C680', '#5C6265', '#F5D399', '#F1F1F1'],
    [],
  );
  const navigation = useNavigation();
  const carousalConfig = React.useMemo(
    () => ({
      autoPlayInterval: 2000,
      autoPlay: true,
      height: scale(258),
      loop: true,
      pagingEnabled: true,
      snapEnabled: true,
      width: Dimensions.get('window').width,
      mode: 'parallax',
      modeConfig: {
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      },
    }),
    [],
  );
  const renderCarouselItem = React.useCallback(
    ({item, index}) => (
      // console.log(`item: ${JSON.stringify(item)}`);
      <View style={{flex: 1, justifyContent: 'center', borderWidth: 1}}>
        {console.log(`item: ${JSON.stringify(item)}`)}
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={{
            uri: item?.backgroundImageUrl,
          }}
        />
      </View>
    ),
    [],
  );
  const renderHorizontalFlatList = React.useCallback(
    ({item, index}, isTopCategoryNavigation) => (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#ecffe8',
          width: isTopCategoryNavigation ? scale(80, 0) : scale(250, 0),
          height: isTopCategoryNavigation ? scale(80, 0) : scale(200, 0),
          borderRadius: isTopCategoryNavigation ? scale(100, 0) : 0,
          margin: scale(5, 0),
          alignItems: 'center',
        }}>
        {/* {console.log(`isTopCat: ${isTopCategoryNavigation}`)} */}
        {isTopCategoryNavigation ? (
          <>
            <SvgXml height="50%" width="50%" xml={item.icon}></SvgXml>
            <Text>{item.title}</Text>
          </>
        ) : (
          <>
            <Text>{index}</Text>
          </>
        )}
      </View>
    ),
    [],
  );
  const handleGridViewMore = navigationInfo => {
    navigation.navigate(navigationInfo.navKey, navigationInfo);
  };
  const renderGridItem = React.useCallback(
    ({item, index}) => (
      <View
        key={index}
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: item,
          // width: scale(100, 0),
          height: scale(230, 0),
          margin: scale(5, 0),
          borderWidth: 1,
        }}>
        <Text style={{textAlign: 'center'}}>{item.mktName}</Text>
        <View style={{flex: 0.6, borderWidth: 1}}></View>
        <View
          style={{
            flex: 0.2,
            // borderWidth: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {item?.categoryTags.length > 0 &&
            item?.categoryTags?.map((tag, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    height: scale(20, 0),
                    marginHorizontal: scale(3, 0),
                    borderRadius: scale(12, 0),
                    backgroundColor: theme.colors.secondaryContainer,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  // textStyle={{fontSize: scale(25, 0)}}
                >
                  <Text style={{fontSize: scale(12, 0)}}>{tag}</Text>
                </View>
              );
            })}
        </View>
        <TouchableOpacity
          style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}
          onPress={() => {
            handleGridViewMore(item.redirection);
          }}>
          <Text style={{fontSize: scale(18, 0)}}>Get In The Market</Text>
        </TouchableOpacity>
      </View>
    ),
    [],
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        {DASHBOARD_PAYLOAD.map((item, index) => {
          return item.viewType == 'carousal' ? (
            <CustomCarousal
              config={carousalConfig}
              data={item.content}
              renderItem={({item: mItem, index}) =>
                renderCarouselItem({item: mItem, index})
              }
            />
          ) : item.viewType == 'horizontalFlatList' ? (
            <>
              {!item.isTopCategoryNavigation && (
                <HeaderTextComponent headerText={'Featured Product'} />
              )}
              <CustomFlatList
                config={{
                  horizontal: true,
                  showsHorizontalScrollIndicator: false,
                }}
                data={item.content}
                renderItem={({item: mItem, index}) =>
                  renderHorizontalFlatList(
                    {item: mItem, index},
                    item.isTopCategoryNavigation,
                  )
                }
              />
            </>
          ) : item.viewType == 'grid' ? (
            <View>
              <HeaderTextComponent headerText={`Local Market Near You..`} />
              <View style={{paddingHorizontal: scale(10, 0)}}>
                <CustomFlatList
                  key={index}
                  config={{
                    numColumns: item?.NumberOfColumns,
                    scrollEnabled: false,
                  }}
                  data={item.content}
                  renderItem={renderGridItem}
                />
              </View>
            </View>
          ) : (
            <></>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
  });
