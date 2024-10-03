
import { KeyboardAvoidingView } from 'react-native'

import { Button, CustomText } from '~/shared/ui'

export const HomeScreen = () => {

	return (
		<KeyboardAvoidingView behavior="padding">
			<CustomText variant="h1">Hoods знает, что вам нужно</CustomText>
			<Button title="Click me" />
		</KeyboardAvoidingView>
	)
}
