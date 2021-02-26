import React from 'react'
import { View, Text, Image } from 'react-native'

const Splash = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require("../../../static/images/hero.png")} />
    </View>
  )
}

export default Splash
