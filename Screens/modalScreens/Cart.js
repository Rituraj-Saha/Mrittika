import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {SCREEN_NAME} from '../../app/slice/ScreenSlice';
import {navigateToScreen} from '../../app/slice/ScreenSlice';
import CustomFlatList from '../../components/CustomFlatList/CustomFlatList';
import {ItemView} from '../deepdive/LocalMarketDeepDive/LocalMktDeepDive';
import {scale} from '../../utils/responsiveDymentions';
const Cart = () => {
  const theme = useTheme();
  const styles = makeStyle(theme);
  const dispatch = useDispatch();
  const selector = useSelector(state => state.cart.items);
  return (
    <View style={styles.cartContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : scale(50, 0)}
        style={styles.listContainer}>
        <CustomFlatList
          data={selector}
          config={{
            scrollEnabled: true,
          }}
          renderItem={(item, index) => {
            return (
              <ItemView
                id={item?.item?.id}
                shopDetails={item?.item?.shopDetails}
                key={index}
                name={item?.item?.name}
                images={item?.item?.images}
                price={item?.item?.price}
                discount={item?.item?.discount}
                quantityProvided={item?.item?.orderDetails?.qty}
                unitProvided={item?.item?.orderDetails?.unit}
              />
            );
          }}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.proceedButton}
        onPress={() => {
          dispatch(navigateToScreen(SCREEN_NAME.ORDER_CHECKOUT));
        }}>
        <Text style={styles.btnText}>Proceed with oreder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const makeStyle = theme =>
  StyleSheet.create({
    cartContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listContainer: {
      flex: 0.92,
      paddingHorizontal: scale(5, 0),
      width: '100%',
    },
    proceedButton: {
      flex: 0.08,
      borderWidth: 1,
      borderColor: theme.colors.secondary,
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: scale(10, 0),
      width: '80%',
    },
    btnText: {
      alignItems: 'center',
      justifyContent: 'center',
      // flex: 1,
      // borderWidth: 1,
      textAlign: 'center',
    },
  });
