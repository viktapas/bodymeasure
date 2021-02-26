import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const SafeArea = ({children, style = {}}) => {
  console.log('object :>> ', style);
  return (
    <View style={{...styles.root, ...style }}>
      <Text>{children}</Text>
    </View>
  )
}

export default SafeArea
