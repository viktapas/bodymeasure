import React from 'react'
import { View, Text, Image, ScrollView, Switch } from 'react-native'
import { Divider, Menu, OverviewSection, SafeArea, Txt } from '../../components'
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
        <Menu>
          <Menu.Item id="dark-mode" label="Dark Mode" icon={{name: "moon-outline", backgroundColor: "#4a4a4a"}}>
            <Switch value={false} onValueChange={(value) => {}} />
          </Menu.Item>
          <Menu.Item id="icloud-mode" label="iCloud Sync" icon={{name: "cloud-outline", backgroundColor: "#1A84FF"}}>
            <Switch value={true} onValueChange={(value) => {}} />
          </Menu.Item>
          <Menu.Item id="measure-unit" label="Use Imperial Units" icon={{name: "flower-outline", backgroundColor: "#6C75E4"}}>
            <Switch value={false} onValueChange={(value) => {}} />
          </Menu.Item>
          <Divider/>
          <Menu.Item id="logout" label="Logout" labelStyle={{color: "#E46C6C"}} icon={{name: "power", backgroundColor: "#E46C6C"}} />
        </Menu>
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
