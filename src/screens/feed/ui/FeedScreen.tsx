import { KeyboardAvoidingView } from 'react-native'

import { CustomText } from '~/shared/ui'

export const FeedScreen = () => {
	return (
		<KeyboardAvoidingView behavior="padding">
			<CustomText>Тут фид</CustomText>
		</KeyboardAvoidingView>
	)
}
