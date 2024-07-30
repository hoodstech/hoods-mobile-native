import { KeyboardAvoidingView, Text } from 'react-native'
import { Button } from 'src/shared/ui/button/button';

export const HomeScreen = () => (
  <KeyboardAvoidingView behavior="padding">
    <Text>HomeScreen</Text>
    <Button text="Нажми на меня!"/>
  </KeyboardAvoidingView>
)