import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Navigation } from './navigation'
import { InitAssetsProvider, QueryProvider } from './providers'


const App = (): React.JSX.Element => {
  return (
    <QueryProvider>
      <InitAssetsProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </InitAssetsProvider>
    </QueryProvider>
  )
}

export default App
