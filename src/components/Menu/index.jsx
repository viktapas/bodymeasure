import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Txt  from '../Text'
import styles from "./styles"

import Ionicons from "react-native-vector-icons/Ionicons"
import Colors from '../../../commons/colors'

const Menu = ({children}) => {
  return (
    <View style={styles.Root}>
      {children}
    </View>
  )
}

function Container({children}) {
  return (
    <View style={styles.ItemContainer}>
      {children}
    </View>
  )
}
function Item({id, children, label, labelStyle, icon = {}, type="btn", showChevron, onPress=()=>{}}) {
  const _icon = {
    color: 'white',
    backgroundColor: 'black',
    ...icon,
  }
  return (
    <View style={styles.Item}>
      <View style={[styles.ItemIcon, {backgroundColor: _icon.backgroundColor}]}><Ionicons name={_icon.name} size={28} color={_icon.color}/></View>
      <View style={styles.ItemContent}>
        <Txt.P style={[styles.ItemContentLabel, labelStyle]}>{label}</Txt.P>
        <View style={styles.ItemContentChildren}>{children}</View>
        {showChevron && <Ionicons style={styles.ItemContentChevron} name={"chevron-forward"} size={22} color={Colors.LIGHT.GRAY}/>}
      </View>
    </View>
  )
}

Menu.Container = Container;
Menu.Item = Item;

export default Menu;
