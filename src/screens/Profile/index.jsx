import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Divider, SafeArea, Txt } from '../../components'
import styles from './styles'
import mockUser from "./mockUser.json"
import Ionicons from "react-native-vector-icons/Ionicons"
import dayjs from 'dayjs'

const Profile = () => {
  return (
    <SafeArea>
      <ScrollView>
        <Header/>
        <Divider/>
        <User/>
        <Divider/>
      </ScrollView>
    </SafeArea>
  )
}

function User() {
  const user = mockUser;
  return (
    <View style={styles.ProfileUser}>
      <Image style={styles.ProfileUserImage} source={require('../../../static/images/user.png')} />
      <View style={styles.ProfileUserContent}>
        <Txt.H2 style={styles.ProfileUserName}>{user.name.firstName + " " + user.name.lastName}</Txt.H2>
        <Txt.P style={styles.ProfileUserJoined}>Since {dayjs(user.joined).format("MMMM YYYY")}</Txt.P>
      </View>
      <View style={styles.ProfileUserChevron}>
        <Ionicons style={styles.ProfileUserChevronIcon} name={"chevron-forward"} size={22} />
      </View>
    </View>
  )
}

function Header({ }) {
  return (
    <View style={styles.ProfileHeader}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Txt.H1 style={{ fontWeight: 'bold' }}>Profile</Txt.H1>
      </View>
      {/* <Btn><Ionicons name={"ios-add-circle"} size={40} /></Btn> */}
    </View>
  )
}

export default Profile
