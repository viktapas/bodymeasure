import React from 'react'
import { View, Image, ScrollView } from 'react-native'
import { Txt, Btn, SafeArea, OverviewSection } from '../../components'

import Ionicons from "react-native-vector-icons/Ionicons"

const Home = (props) => {
  return (
    <SafeArea>
      <ScrollView>
        <HomeHeader />
        <OverviewSection>
          <OverviewSection.Header label="Upper body" />
          <OverviewSection.ItemContainer>
            <OverviewSection.Item label="Shoulder" icon={{name:"alarm-outline", backgroundColor: '#77E46C'}}  reading="108 CM"/>
            <OverviewSection.Item label="Biceps" icon={{name:"arrow-up-circle-outline", backgroundColor: '#FF4462'}}  reading="69 CM"/>
            <OverviewSection.Item label="Neck" icon={{name:"basket-outline", backgroundColor: '#77E46C'}}  reading="47 CM"/>
            <OverviewSection.Item label="Forearm" icon={{name:"bicycle-outline", backgroundColor: '#F4C31C'}}  reading="78 CM"/>
            <OverviewSection.Item label="Wrist" icon={{name:"file-tray-outline", backgroundColor: '#77E46C'}}  reading="54 CM"/>
          </OverviewSection.ItemContainer>
        </OverviewSection>
        <OverviewSection>
          <OverviewSection.Header label="Lower body" />
          <OverviewSection.ItemContainer>
            <OverviewSection.Item label="Shoulder" icon={{name:"alarm-outline", backgroundColor: '#77E46C'}}  reading="27 CM"/>
            <OverviewSection.Item label="Biceps" icon={{name:"arrow-up-circle-outline", backgroundColor: '#FF4462'}}  reading="43 CM"/>
            <OverviewSection.Item label="Neck" icon={{name:"basket-outline", backgroundColor: '#77E46C'}}  reading="120 CM"/>
            <OverviewSection.Item label="Forearm" icon={{name:"bicycle-outline", backgroundColor: '#F4C31C'}}  reading="99 CM"/>
            <OverviewSection.Item label="Wrist" icon={{name:"file-tray-outline", backgroundColor: '#77E46C'}}  reading="32 CM"/>
          </OverviewSection.ItemContainer>
        </OverviewSection>
        <Txt.Overline style={{ flexDirection: "column", paddingHorizontal: 45, paddingVertical: 80, textAlign: 'center', opacity: 0.5 }}>Don't giveup. Keep working on your physique 🤸‍♀️. Cheers!</Txt.Overline>
        {/* <View style={{ flexDirection: "column", paddingHorizontal: 15 }}>
          <Txt.P>
            The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” The definite article tells you that your friend is referring to a specific party that both of you know about. The definite article can be used with singular, plural, or uncountable nouns. Below are some examples of the definite article the used in context.
            The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” The definite article tells you that your friend is referring to a specific party that both of you know about. The definite article can be used with singular, plural, or uncountable nouns. Below are some examples of the definite article the used in context.
            The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” The definite article tells you that your friend is referring to a specific party that both of you know about. The definite article can be used with singular, plural, or uncountable nouns. Below are some examples of the definite article the used in context.
            The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” The definite article tells you that your friend is referring to a specific party that both of you know about. The definite article can be used with singular, plural, or uncountable nouns. Below are some examples of the definite article the used in context.
              </Txt.P>
        </View> */}
      </ScrollView>
    </SafeArea>
  )
}

function HomeHeader({ }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15, paddingVertical: 30 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={require('../../../static/images/hero-logo.png')} width={50} height={50} style={{ width: 30, height: 30, marginRight: 10 }} />
        <Txt.H1 style={{ fontWeight: 'bold' }}>bodymeasure</Txt.H1>
      </View>
      <Btn><Ionicons name={"ios-add-circle"} size={40} /></Btn>
    </View>
  )
}

export default Home
