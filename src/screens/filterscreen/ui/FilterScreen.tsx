import { KeyboardAvoidingView, Dimensions } from 'react-native'

import { CustomText } from '~/shared/ui'


export const FilterScreen = () => {
  const windowHeight = Dimensions.get('window').height

	return (
		<KeyboardAvoidingView style={{ maxHeight: windowHeight }} behavior="padding">
			<CustomText> Фильтры </CustomText>
		</KeyboardAvoidingView>
	)
}
