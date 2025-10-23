import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Platform, View } from 'react-native'
import { NameContext } from '~/screens/profile/ui/ProfileSettings'
import { Navigation } from './navigation'
import { InitAssetsProvider, QueryProvider, BottomSheetProvider } from './providers'

// Безопасный импорт GestureHandler
let GestureHandlerRootView: any = View
try {
  const gestureHandler = require('react-native-gesture-handler')
  GestureHandlerRootView = gestureHandler.GestureHandlerRootView
} catch (error) {
  console.warn('GestureHandler не доступен:', error)
}

const App = (): React.JSX.Element => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryProvider>
        <InitAssetsProvider>
          <BottomSheetProvider>
            <SafeAreaProvider>
              <Navigation />  
            </SafeAreaProvider>
          </BottomSheetProvider>
        </InitAssetsProvider>
      </QueryProvider>
    </GestureHandlerRootView>
  )
}

export default App

