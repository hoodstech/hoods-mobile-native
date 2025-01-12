import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { FeedList } from '~/widgets/feed-list/ui/FeedList'

export const FeedScreen = () => {
  const insets = useSafeAreaInsets()
  // TODO: вынести в обертки
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,

        backgroundColor: '#fff',
        position: 'relative',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <FeedList />
    </View>
  )
}
