import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppNavigationScreen } from '~/shared/config/navigation'
import { HomeScreen } from '~/screens/home'
import { SignUpScreen } from '~/screens/auth'

const NavigationStack = createNativeStackNavigator()

export const Navigation = () => (
	<NavigationStack.Navigator initialRouteName={AppNavigationScreen.SignUp}>
		<NavigationStack.Screen
			options={{ headerShown: false }}
			name={AppNavigationScreen.Home}
			component={HomeScreen}
		/>
		<NavigationStack.Screen
			options={{ headerShown: false }}
			name={AppNavigationScreen.SignUp}
			component={SignUpScreen}
		/>
	</NavigationStack.Navigator>
)
