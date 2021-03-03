import React from 'react'
import { View, Text, Button } from 'react-native'
import { BottomTabBarVisibleContext } from '../../globalContexts'
import styles from "./styles"

const AddMeasure = (props) => {
  const {tabBarVisible, setTabBarVisible} = React.useContext(BottomTabBarVisibleContext);
  React.useEffect(() => {
    setTabBarVisible(false)
    return () => {
      setTabBarVisible(true)
    }
  }, [])

  const closeModal = () => {
    const {navigation} = props;
    navigation.goBack();
    return true;
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Button title="Cancel" onPress={closeModal}/>
        <Text style={{flex: 1}}>Record your body</Text>
        <View/>
      </View>
    </View>
  )
}

export default AddMeasure
