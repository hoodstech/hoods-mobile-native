import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ProfileScreen } from '~/screens/profile'
import { HomeScreen } from '~/screens/home'
import { FeedScreen } from '~/screens/feed'
import { TabBar } from '~/shared/ui/TabBar/TabBar'

const Tab = createBottomTabNavigator()

export const Navigation = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{ tabBarLabel: '',
          headerShown: false,
         }} 
      />
      <Tab.Screen
        name="feed"
        component={FeedScreen}
        options={{ tabBarLabel: '',
          headerShown: false,
         }} 
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{ tabBarLabel: '',
          headerShown: false,
         }} 
      />
    </Tab.Navigator>
  )
}
