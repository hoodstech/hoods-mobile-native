import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title">Welcome to HOODS app!</ThemedText>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
