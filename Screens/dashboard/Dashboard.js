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
import React, {Children} from 'react';
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
import ShimmerEffect from '../../components/shmmerEffect/ShimmerEffect';
import {ItemView} from '../deepdive/LocalMarketDeepDive/LocalMktDeepDive';
import LinearGradient from 'react-native-linear-gradient';

const Dashboard = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();
  const carousalConfig = {
    autoPlayInterval: 2000,
    autoPlay: true,
    height: scale(158),
    loop: true,
    pagingEnabled: true,
    snapEnabled: true,
    width: Dimensions.get('window').width,
    mode: 'parallax',
    modeConfig: {
      parallaxScrollingScale: 0.9,
      parallaxScrollingOffset: 50,
    },
  };

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
          borderWidth: 0.8,
          borderRadius: scale(8, 0),
          elevation: 6,
          padding: scale(10, 0),
          borderColor: theme.colors.secondary,
          shadowColor: theme.colors.secondaryContainer,
        }}>
        <View style={{flex: 0.6, borderWidth: 1}}>
          <Image source={{uri: item?.img}} style={{flex: 1}} />
        </View>
        <Text
          style={{
            textAlign: 'center',
            color: '#0d0d0e',
            fontSize: scale(14, 0),
          }}
          numberOfLines={1}>
          {item.mktName}
        </Text>
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
          <ShimmerEffect style={styles.shimmerBox} />
          <Text style={{fontSize: scale(16, 0), color: '#FFFFFF'}}>
            Get In The Market
          </Text>
        </TouchableOpacity>
      </View>
    ),
    [],
  );
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      {DASHBOARD_PAYLOAD.map((item, index) => {
        return item.viewType == 'carousal' ? (
          <CustomCarousal
            config={carousalConfig}
            data={item.content}
            renderItem={(item, index) => {
              return (
                // <RenderCarouselItem>
                <View
                  style={{
                    borderWidth: 1,
                    flex: 1,
                    borderRadius: scale(10, 0),
                  }}></View>
                /* </RenderCarouselItem> */
              );
            }}
          />
        ) : item.viewType == 'horizontalFlatList' ? (
          <>
            {!item.isTopCategoryNavigation && (
              <HeaderTextComponent headerText={item.headLine} />
            )}
            <CustomFlatList
              config={{
                horizontal: true,
                showsHorizontalScrollIndicator: false,
              }}
              data={item.content}
              renderItem={({item: mItem, index}) => {
                return (
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 0.5,
                      width: scale(150, 0),
                      margin: scale(10, 0),
                      height: scale(200, 0),
                      borderRadius: scale(8, 0),
                    }}>
                    <View
                      style={{
                        // borderWidth: 1,
                        flex: 0.6,
                        // backgroundColor: theme.colors.itemBackgroundColor,
                        borderRadius: scale(8, 0),
                      }}>
                      <LinearGradient
                        colors={[
                          theme.colors.secondaryContainer,
                          '#dbcfc950',
                          theme.colors.secondaryContainer,
                        ]}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        style={{
                          position: 'absolute',
                          height: '100%',
                          width: '100%',
                          borderRadius: scale(8, 0),
                        }}
                      />
                    </View>
                    <View
                      style={{
                        // borderWidth: 1,
                        flex: 0.4,
                      }}>
                      <Text>{mItem.name}</Text>
                    </View>
                  </View>
                );
              }}
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
  );
};

export default Dashboard;

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: theme.colors.backgroundColor,
    },
    shimmerBox: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
  });
