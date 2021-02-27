import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Divider = ({style}) => {
  return <View style={[styles.Root, style]} />;
};

export default Divider;
