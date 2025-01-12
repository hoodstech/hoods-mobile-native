import { useState } from 'react'
import { Pressable, StyleSheet, Animated, PressableProps, ViewStyle, TextStyle } from 'react-native'

import { CustomText } from '../CustomText/CustomText'

type ButtonProps = PressableProps & {
  title: string
  isDarkTheme?: boolean
  buttonStyle?: ViewStyle 
  textStyle?: TextStyle   
}

export const Button: React.FC<ButtonProps> = ({ onPress, title, buttonStyle, textStyle }) => {
  const [scale] = useState(new Animated.Value(1))

  const handlePressIn = () => {
    Animated.spring(scale, { toValue: 1.05, useNativeDriver: true }).start()
  }

  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start()
  }

  return (
    <Animated.View style={[styles.animatedContainer, { transform: [{ scale }]}]}>
      <Pressable
        style={[styles.defaultButton, buttonStyle]} 
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
      >
        <CustomText variant="paragraphMedium" style={[styles.defaultText, textStyle]}>
          {title}
        </CustomText>
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  animatedContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  defaultButton: {
    backgroundColor: '#000',
    width: 265,    
    height: 43,              
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 26,  
    marginTop: 56,         
    paddingVertical: 10,
  },
  defaultText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
