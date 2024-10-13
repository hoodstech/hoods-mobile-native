import { Navigation } from './navigation'
import { InitAssetsProvider, QueryProvider } from './providers'

const App = (): React.JSX.Element => {
	return (
		<QueryProvider>
			<InitAssetsProvider>
				<Navigation />
			</InitAssetsProvider>
		</QueryProvider>
	)
}

export default App
