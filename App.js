import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RoutesConfig} from './commons/routeConfig';
import {capitalizeLetter} from './commons/utility';
import {FONT_SIZE} from './commons/appConfig';
import Colors from './commons/colors';
import {
  Splash,
  Home,
  Profile,
  History,
  OverviewDetails,
  AddMeasure,
} from './src/screens';

const Stack = createStackNavigator();
const BottomTabsStack = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        cardStyle: {backgroundColor: 'white'},
        cardOverlayEnabled: true,
        cardStyleInterpolator: function ({current: {progress}}) {
          return {
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          };
        },
      }}>
      <Stack.Screen name={RoutesConfig.HOME.name} component={Home} />
      <Stack.Screen
        name={RoutesConfig.OVERVIEW_DETAILS.name}
        component={OverviewDetails}
      />
      <Stack.Screen
        name={RoutesConfig.ADD_MEASURE.name}
        component={AddMeasure}
      />
    </Stack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name={RoutesConfig.PROFILE.name} component={Profile} />
    </Stack.Navigator>
  );
}

function HistoryStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name={RoutesConfig.HISTORY.name} component={History} />
    </Stack.Navigator>
  );
}

const App = () => {
  const [state, setState] = React.useState({loading: true, userToken: null});
  React.useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        userToken: '1234superSecureT0ken',
      }));
    }, 2000);
    return () => {
      setState((prevState) => ({...prevState, userToken: null}));
    };
  }, []);
  return state.loading ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <BottomTabsStack.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconName = focused
              ? RoutesConfig[route.name].iconName.fill
              : RoutesConfig[route.name].iconName.outline;
            return (
              <Ionicons name={iconName} size={FONT_SIZE.MEDIUM} color={color} />
            );
          },
          // tabBarBadge: route.name === RoutesConfig.PROFILE.name ? 3 : null,
        })}
        tabBarOptions={{
          activeTintColor: Colors.LIGHT.PRIMARY,
          inactiveTintColor: Colors.LIGHT.GRAY,
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
