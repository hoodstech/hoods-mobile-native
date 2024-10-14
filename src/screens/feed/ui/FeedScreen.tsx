import { KeyboardAvoidingView, Dimensions } from 'react-native'

import { FeedList } from '~/widgets/feed-list/ui/FeedList'

export const FeedScreen = () => {
  const windowHeight = Dimensions.get('window').height

	return (
		<KeyboardAvoidingView style={{ maxHeight: windowHeight }} behavior="padding">
			<FeedList />
		</KeyboardAvoidingView>
	)
}
