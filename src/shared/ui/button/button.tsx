import React, { useState } from 'react';
import { Pressable, Text, Animated } from 'react-native';
import styles from './buttonStyles';

type AnimatedButtonProps = {
  onPress?: () => void;
  title: string;
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onPress, title }) => {
  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1, // Увеличиваем размер кнопки при нажатии
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1, // Возвращаем кнопке исходный размер
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.button_styles, { transform: [{ scale }] }]}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        style={styles.button_styles}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default AnimatedButton;
