import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal, Portal, useTheme} from 'react-native-paper';
import {fullHeight, fullWidth} from '../../utils/responsiveDymentions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomaModal = props => {
  const theme = useTheme();
  const styles = makeStyle(theme);
  const {open, closeModal, contentContainerStyle} = props;
  const insets = useSafeAreaInsets();
  const conditionalHeight = React.useMemo(() => {
    return fullHeight - insets?.top;
  }, [insets]);
  return (
    <Portal>
      <Modal
        visible={open}
        onDismiss={closeModal}
        dismissable
        style={[
          styles.rootStyle,
          {
            height: conditionalHeight,
          },
        ]}
        contentContainerStyle={[
          styles.contentContainerStyle,
          contentContainerStyle,
        ]}>
        {props?.children}
      </Modal>
    </Portal>
  );
};

export default CustomaModal;

const makeStyle = theme =>
  StyleSheet.create({
    rootStyle: {
      width: fullWidth,
      justifyContent: 'flex-end',
    },
    contentContainerStyle: {
      ...Platform.select({
        ios: {
          flex: 1,
        },
        android: {
          flex: 0.9,
        },
      }),
      backgroundColor: 'white',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
  });
