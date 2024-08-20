import { Navigation } from './navigation'
import { InitAssetsProvider } from './providers'

const App = (): React.JSX.Element => {
  return (
    <InitAssetsProvider>
      <Navigation />
    </InitAssetsProvider>
  )
}

export default App