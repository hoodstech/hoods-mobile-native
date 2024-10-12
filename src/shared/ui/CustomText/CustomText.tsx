import React from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'

type CustomTextVariants = 'h1' | 'h2' | 'paragraphMedium' | 'paragraphLight'

interface CustomTextProps extends TextProps {
	children: React.ReactNode
	variant: CustomTextVariants
}

// TODO: Учесть тему в будущем
export const CustomText: React.FC<CustomTextProps> = ({ children, variant, ...props }) => {
	return (
		<Text style={[styles.defaultFontStyles, styles[variant]]} {...props}>
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
		fontSize: 36, // TODO: использовать адаптацию для размеров экрана
	},
	h2: {
		fontFamily: 'Manrope_800ExtraBold',
		fontSize: 16,
	},
	paragraphMedium: {},
	paragraphLight: {},
})
