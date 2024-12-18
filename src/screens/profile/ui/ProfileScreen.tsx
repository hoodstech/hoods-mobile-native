import { KeyboardAvoidingView } from 'react-native'

import { CustomText } from '~/shared/ui'

export const ProfileScreen = () => {

	return (
		<KeyboardAvoidingView behavior="padding">
			<CustomText variant="h1">Profile Screen</CustomText>
		</KeyboardAvoidingView>
	)
}
