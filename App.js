import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RoutesConfig} from './commons/routeConfig';
import {capitalizeFirstLetter, capitalizeLetter} from './commons/utility';
import {FONT_SIZE} from './commons/appConfig';

const Stack = createStackNavigator();
const BottomTabsStack = createBottomTabNavigator();
function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function Profile() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RoutesConfig.HOME.name} component={Home} />
    </Stack.Navigator>
  );
}
function ProfileStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RoutesConfig.PROFILE.name} component={Profile} />
    </Stack.Navigator>
  );
}
function HistoryStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RoutesConfig.HISTORY.name} component={Profile} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabsStack.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconName = focused
              ? RoutesConfig[route.name].iconName.fill
              : RoutesConfig[route.name].iconName.outline;
            return (
              <Ionicons
                name={iconName}
                size={FONT_SIZE.MEDIUM}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <BottomTabsStack.Screen
          name={RoutesConfig.HOME.name}
          component={HomeStackScreen}
          options={{tabBarLabel: capitalizeLetter(RoutesConfig.HOME.name)}}
        />
        <BottomTabsStack.Screen
          name={RoutesConfig.HISTORY.name}
          component={HistoryStackScreen}
          options={{tabBarLabel: capitalizeLetter(RoutesConfig.HISTORY.name)}}
        />
        <BottomTabsStack.Screen
          name={RoutesConfig.PROFILE.name}
          component={ProfileStackScreen}
          options={{tabBarLabel: capitalizeLetter(RoutesConfig.PROFILE.name)}}
        />
      </BottomTabsStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
