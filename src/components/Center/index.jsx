import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

const Center = ({children}) => {
  return (
    <View style={styles.root}>
      <Text>{children}</Text>
    </View>
  )
}

export default Center
