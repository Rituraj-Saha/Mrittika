import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Badge, IconButton, TextInput, useTheme} from 'react-native-paper';
import {scale} from '../../utils/responsiveDymentions';

import {Chip} from 'react-native-paper';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {register} from 'react-native-bundle-splitter';
import {COLORS, NAVIGATION_SCREEN_KEY} from '../../constants/Constants';
import {Searchbar} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import {cartSvg, location, phone} from '../../constants/Svg';
import useModal from '../../components/CustomModal/useModal';
import CustomaModal from '../../components/CustomModal/CustomaModal';
import {useDispatch, useSelector} from 'react-redux';
import {resetCart} from '../../app/slice/cartSlice';
const Stack = createNativeStackNavigator();

const Dashboard = register({loader: () => import('../dashboard/Dashboard')});
const Account = register({loader: () => import('../account/Account')});
const History = register({loader: () => import('../history/History')});
const MKTDEEPDIVE = register({
  loader: () => import('../deepdive/LocalMarketDeepDive/LocalMktDeepDive'),
});

const TopBar = props => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const theme = useTheme();
  const styles = makeStyle(theme);
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
  const {open, openModal, close, closeModal} = props;
  const cartItems = useSelector(state => state.cart.items);
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // Keyboard is visible
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // Keyboard is hidden
      },
    );

    // Cleanup listeners on component unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <View style={styles.topBarContainer}>
      {!isKeyboardVisible && (
        <View style={styles.topPersonalContain}>
          <View style={styles.topBarPersonalDetails}>
            <Text style={styles.textStylePersonal}>Hi, Rituraj</Text>
            <View style={styles.namePhoneContainer}>
              <SvgXml height="100%" width="20%" xml={phone}></SvgXml>
              <Text style={styles.textStylePersonal}>+91 9674345373</Text>
            </View>
          </View>
          <View style={styles.locationContainer}>
            <SvgXml height="100%" width="10%" xml={location}></SvgXml>
            <Text style={styles.textStylePersonal}>68,Railwaypark,sodepur</Text>
          </View>
        </View>
      )}
      <View
        style={[
          styles.topBarSearch,
          {paddingVertical: isKeyboardVisible ? scale(15, 0) : scale(0, 0)},
        ]}>
        <View style={{flex: 0.9}}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{
              backgroundColor: theme.colors.primaryContainer,
              height: scale(50, 0),
            }}
          />
        </View>
        <TouchableOpacity
          style={{flex: 0.2}}
          onPress={() => {
            openModal();
          }}>
          <SvgXml height="100%" width="100%" xml={cartSvg}></SvgXml>
          <Badge style={{position: 'absolute'}}>{cartItems.length}</Badge>
        </TouchableOpacity>
      </View>
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
                mSelected == SELECTEDTAB.HISTORY
                  ? theme.colors.selected
                  : 'white',
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
                mSelected == SELECTEDTAB.HOME ? theme.colors.selected : 'white',
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
                mSelected == SELECTEDTAB.ACCOUNT
                  ? theme.colors.selected
                  : 'white',
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
  const {open, close, openModal, closeModal} = useModal();
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <View style={styles.navContainer}>
        {/* <HomeScreen /> */}
        <TopBar
          open={open}
          close={close}
          openModal={openModal}
          closeModal={closeModal}
        />
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
            <Stack.Screen
              name={NAVIGATION_SCREEN_KEY.MKTDEEPDIVE}
              component={MKTDEEPDIVE}
            />
          </Stack.Navigator>
        </View>
        <BottomBar />
        {open && (
          <CustomaModal open={open} closeModal={closeModal}>
            <View style={{flex: 1}}>
              {console.log('cartItems: ', cartItems)}
              <TouchableOpacity
                onPress={() => {
                  dispatch(resetCart());
                }}>
                <Text>Reset</Text>
              </TouchableOpacity>
            </View>
          </CustomaModal>
        )}
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
      backgroundColor: theme.colors.backgroundColor,
    },
    bottombar: {
      flex: 0.1,
      flexDirection: 'row',
      borderTopStartRadius: scale(20, 0),
      borderTopEndRadius: scale(20, 0),
      // borderWidth: 1,
      backgroundColor: theme.colors.backgroundColor,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowColor: theme.colors.selected,
      shadowOpacity: 0.21,
      shadowRadius: 10.65,
      elevation: 16,
      padding: scale(10, 0),
      // margin: scale(5, 0),
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(50),
      borderTopStartRadius: scale(20, 0),
      borderWidth: scale(0.5, 0),
      borderBottomWidth: scale(0),
      borderColor: theme.colors.selected,
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
    topBarContainer: {
      flex: 0.18,
      gap: scale(10, 0),
      paddingHorizontal: scale(10, 0),
      borderBottomWidth: 0.5,
      paddingBottom: scale(5, 0),
      // justifyContent: 'space-between',
    },
    topBarPersonalDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textStylePersonal: {
      color: theme.colors.headLineText,
      fontSize: scale(16, 0),
      paddingLeft: scale(10, 0),
      padding: scale(2, 0),
    },
    topPersonalContain: {gap: scale(5, 0)},
    namePhoneContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    locationContainer: {
      flexDirection: 'row',
    },
    navContainer: {
      minHeight: '100%',
      maxHeight: '100%',
      backgroundColor: '#FFFFFF',
    },
  });
