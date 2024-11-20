import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ProfileScreen } from '~/screens/profile'
import { HomeScreen } from '~/screens/home'
import { FeedScreen } from '~/screens/feed'
import { TabBar } from '~/shared/ui'
import { AppNavigationScreen } from '~/shared/config/navigation'

const Tab = createBottomTabNavigator()

export const Navigation = () => (
  <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
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
