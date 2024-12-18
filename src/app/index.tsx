import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Navigation } from './navigation'
import { InitAssetsProvider, QueryProvider, BottomSheetProvider } from './providers'

const App = (): React.JSX.Element => {
  return (
    <GestureHandlerRootView>
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
