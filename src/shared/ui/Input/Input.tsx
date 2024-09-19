import React, { ReactNode, useId } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
	label?: ReactNode
	className?: string
	required?: boolean
}

export const Input = ({
	label,
	className,
	id: propId,
	required,
	...props
}: InputProps) => {
	const id = useId()

	const elementId = propId || id

	return (
		<div style={styles.wrapper}>
			{label && (
				<label htmlFor={elementId} style={styles.label}>
					{label}
					{required && <span style={styles.asterisk}>*</span>}
				</label>
			)}

			<TextInput id={elementId} style={styles.root} {...props} />
		</div>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		gap: 6,
	},
	label: {
		fontFamily: 'Manrope_400Regular',
		fontSize: 14,
	},
	asterisk: {
		color: '#f00',
	},
	root: {
		height: 40,
		borderWidth: 1,
		color: '#0F0F14',
		fontFamily: 'Manrope_400Regular',
		fontSize: 14,
	},
})
