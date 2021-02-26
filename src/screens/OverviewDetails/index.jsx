import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Center, SafeArea, Txt } from '../../components'
import Ionicons from "react-native-vector-icons/Ionicons"

const OverviewDetails = (props) => {
  const {navigation, route} = props;
  const {params:{overviewItemMeta}} = route;
  return (
    <SafeArea style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <TouchableOpacity onPress={navigation.goBack} style={{flexDirection: 'row', alignItems: 'center'}}><Ionicons name="chevron-back-outline" size={24}/><Txt.P>Back</Txt.P></TouchableOpacity>
        <Ionicons {...overviewItemMeta.icon} size={108}/>
        <Txt.H1>{overviewItemMeta.label}</Txt.H1>
        <Txt.Overline>{overviewItemMeta.id}</Txt.Overline>
    </SafeArea>
  )
}

export default OverviewDetails
