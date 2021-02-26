import React from 'react'
import { View, Text, Switch } from 'react-native'
import {SafeArea} from '../../components'
import Txt from '../../components/Txt'

const Home = (props) => {
  return (
    <SafeArea>
      <View style={{flexDirection: "column", padding: 40}}>
        <Txt.H1>Hello</Txt.H1>
        <Txt.H2>Hello</Txt.H2>
        <Txt.H3>Hello</Txt.H3>
        <Txt.P>Successfully built the app
info Installing "/Users/vikaskumar/Library/Developer/Xcode/DerivedData/bodymeasure-cvvztqowotjaxjhfwmegyegnqpfp/Build/Products/Debug-iphonesimulator/bodymeasure.app"
info Launching "org.reactjs.native.example.bodymeasure"
success Successfully launched the app on the si</Txt.P>
        <Txt.Overline>Hello</Txt.Overline>
      </View>
    </SafeArea>
  )
}

export default Home
