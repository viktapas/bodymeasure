import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'

const Btn = ({children, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.Root ,style]}>
        {children}
    </TouchableOpacity>
  )
}

export default Btn
