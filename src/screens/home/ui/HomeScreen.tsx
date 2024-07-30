import { KeyboardAvoidingView, Text } from 'react-native'
import AnimatedButton from 'src/shared/ui/button/button';

export const HomeScreen = () => (
  <KeyboardAvoidingView behavior="padding">
    <Text>HomeScreen</Text>
    <AnimatedButton></AnimatedButton>
  </KeyboardAvoidingView>
)