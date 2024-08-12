import { KeyboardAvoidingView, Text } from 'react-native'
import AnimatedButton from '~/shared/ui/button/button';

export const HomeScreen = () => (
  <KeyboardAvoidingView behavior="padding">
    <Text>HomeScreen</Text>
    <AnimatedButton title="Click me" onPress={() => alert('Button pressed!')} />
  </KeyboardAvoidingView>
)