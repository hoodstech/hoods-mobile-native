import React from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'
import { omit } from 'ramda'

type CustomTextVariants = 
	'h1'
	| 'h2'
  | 'h3'
  | 'h4'
	| 'paragraphMedium'
	| 'paragraphLight'
	| 'paragraphMediumBold'
	| 'paragraphSmall'
	| 'paragraphSmallBold'


interface CustomTextProps extends TextProps {
  children: React.ReactNode
  variant?: CustomTextVariants
}

// TODO: Учесть тему в будущем
export const CustomText: React.FC<CustomTextProps> = ({
  children,
  variant = 'paragraphMedium',
  ...rest
}) => {
  return (
    <Text
      style={[
        textStyles.defaultFontStyles,
        textStyles[variant],
        rest.style,
      ]}
      {...omit(['style'], rest)}
    >
      {children}
    </Text>
  )
}

export const textStyles = StyleSheet.create({
  defaultFontStyles: {
    color: '#0F0F14',
    fontFamily: 'Manrope_400Regular',
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 20,
  },
  paragraphMedium: {},
  paragraphMediumBold: {
    fontFamily: 'Manrope_600SemiBold',
    fontWeight: 600,
  },
  paragraphSmall: {
    fontSize: 12,
    lineHeight: 16,
  },
  paragraphSmallBold: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 600,
  },
  h1: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 32,
    lineHeight: 36,
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'Manrope_500Medium',
    fontWeight: 500,
  },
  h3: {
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 16,
    lineHeight: 22,
  },
  h4: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'Manrope_600SemiBold',
    fontWeight: 600,
  },
  paragraphLight: {
    fontSize: 12,
    lineHeight: 16,
    opacity: 0.5,
  },
})
