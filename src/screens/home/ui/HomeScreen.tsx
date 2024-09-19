import { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'

import { Button, CustomText, Input } from '~/shared/ui'

export const HomeScreen = () => {
	const [inputValue, setInputValue] = useState('')

	return (
		<KeyboardAvoidingView behavior="padding">
			<CustomText variant="h1">Hoods знает, что вам нужно</CustomText>
			<Button title="Click me" onPress={() => alert('Button pressed!')} />
			<Input
				label="test label"
				value={inputValue}
				onChangeText={setInputValue}
				required
			/>
		</KeyboardAvoidingView>
	)
}
