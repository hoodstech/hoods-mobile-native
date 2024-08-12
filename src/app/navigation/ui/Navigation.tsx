import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppNavigationScreen } from '~/shared/config/navigation'
import { HomeScreen } from '~/screens/home'

const NavigationStack = createNativeStackNavigator()

export const Navigation = () => (
  <NavigationStack.Navigator initialRouteName={AppNavigationScreen.Home}>
    <NavigationStack.Screen name={AppNavigationScreen.Home} component={HomeScreen} />
  </NavigationStack.Navigator>
)