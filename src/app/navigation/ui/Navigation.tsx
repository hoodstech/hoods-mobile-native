import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppNavigationScreen } from '~/shared/config/navigation'
import { HomeScreen } from '~/screens/home'
import { FeedScreen } from '~/screens/feed'

const NavigationStack = createNativeStackNavigator()

export const Navigation = () => (
	<NavigationStack.Navigator initialRouteName={AppNavigationScreen.Home}>
		<NavigationStack.Screen
			options={{ headerShown: false }}
			name={AppNavigationScreen.Home}
			component={HomeScreen}
		/>
		<NavigationStack.Screen
			options={{ headerShown: false }}
			name={AppNavigationScreen.Feed}
			component={FeedScreen}
		/>
	</NavigationStack.Navigator>
)
