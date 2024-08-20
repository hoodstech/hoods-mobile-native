import React from 'react'
import { Text, StyleSheet } from 'react-native'
import type { TextProps } from 'react-native'

type CustomTextVariants = 'h1' | 'h2' | 'paragraphMedium' | 'paragraphLight' 

type CustomTextProps = TextProps & {
  children: React.ReactNode;
  variant: CustomTextVariants
}

// TODO: учесть тему в будущем
export const CustomText = ({ children, variant, ...rest }: CustomTextProps) => {
  return (
    <Text
      style={[
        styles.defaultFontStyles,
        styles[variant],
      ]}
      {...rest}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  defaultFontStyles: {
    color: '#0F0F14',
    fontFamily: 'Manrope_400Regular',
    fontSize: 14,
  },
  h1: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 36, // TODO: заменить на функцию из react-native-dimensions-matter
  },
  h2: {
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 16,
  },
  paragraphMedium: {},
  paragraphLight: {},
})