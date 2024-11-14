import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconButton, TextInput, useTheme} from 'react-native-paper';
import {scale} from '../../utils/responsiveDymentions';

import {Chip} from 'react-native-paper';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {register} from 'react-native-bundle-splitter';
import {COLORS, NAVIGATION_SCREEN_KEY} from '../../constants/Constants';
import {Searchbar} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import {cartSvg} from '../../constants/Svg';
const Stack = createNativeStackNavigator();

const Dashboard = register({loader: () => import('../dashboard/Dashboard')});
const Account = register({loader: () => import('../account/Account')});
const History = register({loader: () => import('../history/History')});

const TopBar = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const theme = useTheme();
  const styles = makeStyle(theme);
  return (
    <View
      style={{flex: 0.2, gap: scale(5, 0), paddingHorizontal: scale(10, 0)}}>
      <View>
        <Text>User Name</Text>
        <Text>User phonenumber</Text>
      </View>
      <View style={styles.topBarSearch}>
        <View style={{flex: 0.15}}>
          <SvgXml height="100%" width="100%" xml={cartSvg}></SvgXml>
        </View>

        <View style={{flex: 0.7}}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{
              height: scale(50, 0),
            }}
          />
        </View>
        <View style={{flex: 0.15}}>
          <SvgXml
            height="100%"
            width="100%"
            xml={`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#1C274C"></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#1C274C"></path> <path opacity="0.5" d="M2.08368 2.7512C2.22106 2.36044 2.64921 2.15503 3.03998 2.29242L3.34138 2.39838C3.95791 2.61511 4.48154 2.79919 4.89363 3.00139C5.33426 3.21759 5.71211 3.48393 5.99629 3.89979C6.27827 4.31243 6.39468 4.76515 6.44841 5.26153C6.47247 5.48373 6.48515 5.72967 6.49184 6H17.1301C18.815 6 20.3318 6 20.7757 6.57708C21.2197 7.15417 21.0461 8.02369 20.699 9.76275L20.1992 12.1875C19.8841 13.7164 19.7266 14.4808 19.1748 14.9304C18.6231 15.38 17.8426 15.38 16.2816 15.38H10.9787C8.18979 15.38 6.79534 15.38 5.92894 14.4662C5.06254 13.5523 4.9993 12.5816 4.9993 9.64L4.9993 7.03832C4.9993 6.29837 4.99828 5.80316 4.95712 5.42295C4.91779 5.0596 4.84809 4.87818 4.75783 4.74609C4.66977 4.61723 4.5361 4.4968 4.23288 4.34802C3.91003 4.18961 3.47128 4.03406 2.80367 3.79934L2.54246 3.7075C2.1517 3.57012 1.94629 3.14197 2.08368 2.7512Z" fill="#1C274C"></path> <path d="M13.75 9C13.75 8.58579 13.4142 8.25 13 8.25C12.5858 8.25 12.25 8.58579 12.25 9V10.25H11C10.5858 10.25 10.25 10.5858 10.25 11C10.25 11.4142 10.5858 11.75 11 11.75H12.25V13C12.25 13.4142 12.5858 13.75 13 13.75C13.4142 13.75 13.75 13.4142 13.75 13V11.75H15C15.4142 11.75 15.75 11.4142 15.75 11C15.75 10.5858 15.4142 10.25 15 10.25H13.75V9Z" fill="#1C274C"></path> </g></svg>`}></SvgXml>
        </View>
      </View>
      <Text>User Current Location</Text>
    </View>
  );
};

const BottomBar = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = makeStyle(theme);
  const SELECTEDTAB = {
    HOME: 'home',
    HISTORY: 'history',
    ACCOUNT: 'account',
  };
  const [mSelected, setMSelected] = React.useState(SELECTEDTAB.HOME);
  // const route = useRoute();

  // const routeName = getFocusedRouteNameFromRoute(route);
  // React.useEffect(() => {
  //   console.log(routeName);
  // }, [route]);

  return (
    <View style={styles.bottombar}>
      <View style={styles.bottombarButton}>
        <View
          style={[
            styles.bottombarButtonImg,
            {
              backgroundColor:
                mSelected == SELECTEDTAB.HISTORY ? COLORS.selected : 'white',
            },
          ]}>
          <IconButton
            icon="history" // Icon name from MaterialCommunityIcons
            size={25}
            color="red"
            onPress={() => {
              setMSelected(SELECTEDTAB.HISTORY);
              navigation.navigate(NAVIGATION_SCREEN_KEY.HISTORY);
            }}
          />
        </View>
        <Text>History</Text>
      </View>

      <View style={styles.bottombarButton}>
        <View
          style={[
            styles.bottombarButtonImg,
            {
              backgroundColor:
                mSelected == SELECTEDTAB.HOME ? COLORS.selected : 'white',
            },
          ]}>
          <IconButton
            icon="home" // Icon name from MaterialCommunityIcons
            size={25}
            color="red"
            onPress={() => {
              setMSelected(SELECTEDTAB.HOME);
              navigation.navigate(NAVIGATION_SCREEN_KEY.HOME);
            }}
          />
        </View>
        <Text>Home</Text>
      </View>

      <View style={styles.bottombarButton}>
        <View
          style={[
            styles.bottombarButtonImg,
            {
              backgroundColor:
                mSelected == SELECTEDTAB.ACCOUNT ? COLORS.selected : 'white',
            },
          ]}>
          <IconButton
            icon="account" // Icon name from MaterialCommunityIcons
            size={25}
            color="red"
            onPress={() => {
              setMSelected(SELECTEDTAB.ACCOUNT);
              navigation.navigate(NAVIGATION_SCREEN_KEY.ACCOUNT);
            }}
          />
        </View>

        <Text>Account</Text>
      </View>
    </View>
  );
};

const Home = () => {
  const theme = useTheme();
  const styles = makeStyle(theme);

  return (
    <NavigationContainer>
      <View
        style={{
          minHeight: '100%',
          maxHeight: '100%',
        }}>
        {/* <HomeScreen /> */}
        <TopBar />
        <View style={styles.mContainer}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name={NAVIGATION_SCREEN_KEY.HOME}
              component={Dashboard}
            />
            <Stack.Screen
              name={NAVIGATION_SCREEN_KEY.ACCOUNT}
              component={Account}
            />
            <Stack.Screen
              name={NAVIGATION_SCREEN_KEY.HISTORY}
              component={History}
            />
          </Stack.Navigator>
        </View>
        <BottomBar />
      </View>
    </NavigationContainer>
  );
};

export default Home;

const makeStyle = theme =>
  StyleSheet.create({
    topBarSearch: {
      flex: 0.7,
      // borderWidth: 1,
      // paddingHorizontal: 50,
      flexDirection: 'row',
    },
    mContainer: {
      flex: 0.8,
      // borderWidth: 1,
      backgroundColor: 'white',
    },
    bottombar: {
      flex: 0.1,
      flexDirection: 'row',
      borderTopStartRadius: scale(20, 0),
      borderTopEndRadius: scale(20, 0),
      // borderWidth: 1,
      backgroundColor: 'white',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowColor: 'red',
      shadowOpacity: 0.21,
      shadowRadius: 6.65,
      elevation: 6,
      padding: scale(10, 0),
      // margin: scale(5, 0),
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(50),
      borderTopStartRadius: scale(20, 0),
      borderWidth: scale(2, 0),
      borderBottomWidth: scale(0),
      borderColor: COLORS.selected,
      backgroundColor: '#fbfff3',
    },
    bottombarButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scale(100, 0),
      padding: scale(10, 0),
    },
    bottombarButtonImg: {
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      borderRadius: scale(100, 0),
      padding: scale(10, 0),
      height: scale(35, 0),
      width: scale(35, 0),
    },
  });
