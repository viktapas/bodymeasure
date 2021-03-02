import React from 'react'
import { View, Text } from 'react-native'
import { BottomTabBarVisibleContext } from '../../globalContexts'

const AddMeasure = (props) => {
  const {tabBarVisible, setTabBarVisible} = React.useContext(BottomTabBarVisibleContext);
  React.useEffect(() => {
    setTabBarVisible(false)
    return () => {
      setTabBarVisible(true)
    }
  }, [])

  return (
    <View>
      <Text>Add Measure</Text>
    </View>
  )
}

export default AddMeasure
