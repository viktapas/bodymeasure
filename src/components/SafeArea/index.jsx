import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const SafeArea = ({children, style = {}}) => {
  return (
    <View style={{...styles.root, ...style }}>
      {children}
    </View>
  )
}

export default SafeArea
