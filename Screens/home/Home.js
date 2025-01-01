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
import {cartSvg} from '../../constants/Svg';
import useModal from '../../components/CustomModal/useModal';
import CustomaModal from '../../components/CustomModal/CustomaModal';
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
    <View
      style={{flex: 0.2, gap: scale(5, 0), paddingHorizontal: scale(10, 0)}}>
      {!isKeyboardVisible && (
        <View>
          <Text>User Name</Text>
          <Text>User phonenumber</Text>
          <Text>User Current Location</Text>
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
          <Badge style={{position: 'absolute'}}>3</Badge>
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
  const {open, close, openModal, closeModal} = useModal();
  return (
    <NavigationContainer>
      <View
        style={{
          minHeight: '100%',
          maxHeight: '100%',
        }}>
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
            <View style={{flex: 1}}></View>
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
