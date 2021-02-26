import React from 'react'
import { View, Image, ScrollView } from 'react-native'
import { Txt, Btn, SafeArea, OverviewSection } from '../../components'

import Ionicons from "react-native-vector-icons/Ionicons"
import { RoutesConfig } from '../../../commons/routeConfig'
import OverviewData from "./mockOverviewData.json"

const Home = ({navigation}) => {
  console.log('navigation :>> ', navigation);
  const onClickOverviewItemHandler = (overviewItemMeta, e)  => {
    navigation.navigate(RoutesConfig.OVERVIEW_DETAILS.name, {overviewItemMeta: overviewItemMeta});
  }
  return (
    <SafeArea>
      <ScrollView>
        <HomeHeader />
          {
            OverviewData.map(overview => (
              <OverviewSection>
                <OverviewSection.Header label={overview.label} />
                <OverviewSection.ItemContainer>
                  {
                    overview.records.map(overviewItem => (
                      <OverviewSection.Item key={overviewItem.id} id={overviewItem.id} label={overviewItem.label} icon={overviewItem.icon}  reading={overviewItem.reading} onPress={onClickOverviewItemHandler}/>
                    ))
                  }
                </OverviewSection.ItemContainer>
              </OverviewSection>
            ))
          }
        <Txt.Overline style={{ flexDirection: "column", paddingHorizontal: 45, paddingVertical: 80, textAlign: 'center', opacity: 0.5 }}>Don't giveup. Keep working out your physique 🤸‍♀️. Cheers!</Txt.Overline>
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
