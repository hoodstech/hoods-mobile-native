import React, { ForwardedRef, forwardRef } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

const BaseInput = (props: TextInputProps, ref?: ForwardedRef<TextInput>) => (
	<TextInput ref={ref} style={styles.root} {...props} />
)

export const Input = forwardRef(BaseInput)

const styles = StyleSheet.create({
	root: {
		height: 40,
		borderWidth: 1,
		color: '#0F0F14',
		fontFamily: 'Manrope_400Regular',
		fontSize: 14,
	},
})
