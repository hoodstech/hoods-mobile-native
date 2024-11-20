import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProfileScreen } from '~/screens/profile'
import { HomeScreen } from '~/screens/home'
import { SignUpScreen } from '~/screens/auth'
import { FeedScreen } from '~/screens/feed'
import { TabBar } from '~/shared/ui'
import { AppNavigationScreen } from '~/shared/config/navigation'

const NavigationStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export const Navigation = () => (
  <NavigationStack.Navigator initialRouteName={AppNavigationScreen.SignUp}>
    <NavigationStack.Screen
      options={{ headerShown: false }}
      name={AppNavigationScreen.SignUp}
      component={SignUpScreen}
    />
    <NavigationStack.Screen
      options={{ headerShown: false }}
      name={AppNavigationScreen.MainScreens}
      component={TabNavigator}
    />
  </NavigationStack.Navigator>
)

export const TabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <TabBar {...props} />} initialRouteName={AppNavigationScreen.Feed}>
    <Tab.Screen
      name={AppNavigationScreen.Home}
      component={HomeScreen}
      options={{ tabBarLabel: '' }} 
    />
    <Tab.Screen
      name={AppNavigationScreen.Feed}
      component={FeedScreen}
      options={{ tabBarLabel: '', headerShown: false }} 
    />
    <Tab.Screen
      name={AppNavigationScreen.Profile}
      component={ProfileScreen}
      options={{ tabBarLabel: '' }} 
    />
  </Tab.Navigator>
)
