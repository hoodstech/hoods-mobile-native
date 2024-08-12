import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, Animated } from 'react-native';

type AnimatedButtonProps = {
  onPress?: () => void;
  title: string;
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onPress, title }) => {
  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      style={styles.button}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 135,
    paddingTop: 10,
    padding: 10,
    backgroundColor: '#474A51',
    borderRadius: 5,
    width: 120,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AnimatedButton;
