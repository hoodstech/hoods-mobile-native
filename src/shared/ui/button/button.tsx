import React, { useState } from 'react'
import { Pressable, StyleSheet, Animated } from 'react-native'

import { CustomText } from '../CustomText'

type ButtonProps = {
  onPress?: () => void;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ onPress, title }) => {
  const [scale] = useState(new Animated.Value(1))

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      style={styles.button}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <CustomText variant='paragraphMedium'>{title}</CustomText>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 135,
    paddingTop: 10,
    padding: 10,
    backgroundColor: '#474A51',
    borderRadius: 5,
    width: 120,
  },
})
