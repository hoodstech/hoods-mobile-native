import { Navigation } from './navigation'
import { Button } from '../shared/ui/Button/Button'

const App = (): React.JSX.Element => {
  const handleButtonPress = () => {
  };
  return (
    <>
      <Button title="Click Me" onPress={handleButtonPress} />
    </>
  )
}

export default App