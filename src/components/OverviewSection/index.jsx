import React from 'react'
import { View, Text } from 'react-native'
import { Btn, Txt } from '..'
import styles from "./styles"

import Ionicons from "react-native-vector-icons/Ionicons"
import Colors from '../../../commons/colors'

const OverviewSection = ({children}) => {
  return (
    <View style={styles.Root}>
      {children}
    </View>
  )
}

function Header({label}) {
  return (
    <View style={styles.Header}>
      <Txt.P style={styles.HeaderLabel}>{label}</Txt.P>
      <Btn style={styles.HeaderBtn}><Ionicons name="ios-add" size={24}/></Btn>
    </View>
  )
}
function ItemContainer({children}) {
  return (
    <View style={styles.ItemContainer}>
      {children}
    </View>
  )
}
function Item({children, label, icon = {}, reading}) {
  const _icon = {
    color: 'white',
    backgroundColor: 'black',
    ...icon,
  }
  return (
    <View style={styles.Item}>
      <View style={[styles.ItemIcon, {backgroundColor: _icon.backgroundColor}]}><Ionicons name={_icon.name} size={28} color={_icon.color}/></View>
      <View style={styles.ItemContent}>
        <Txt.P style={styles.ItemContentLabel}>{label}</Txt.P>
        <Txt.P style={styles.ItemContentReading}>{reading}</Txt.P>
        <Ionicons style={styles.ItemContentChevron} name={"chevron-forward"} size={22} color={Colors.LIGHT.GRAY}/>
      </View>
      {children}
    </View>
  )
}

OverviewSection.Header = Header;
OverviewSection.ItemContainer = ItemContainer;
OverviewSection.Item = Item;

export default OverviewSection;
