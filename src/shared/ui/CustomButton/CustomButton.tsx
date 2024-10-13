import { useState } from 'react'
import { Pressable, StyleSheet, Animated, PressableProps } from 'react-native'

import { CustomText } from '../CustomText/CustomText'

type ButtonProps = PressableProps & {
	title: string
}

export const Button: React.FC<ButtonProps> = ({ title, onPressIn, onPressOut, onPress, ...props }) => {
	const [scale] = useState(new Animated.Value(1))

	const handlePressIn: PressableProps['onPressIn'] = (event) => {
		Animated.spring(scale, {
			toValue: 1.1,
			useNativeDriver: true,
		}).start()

		onPressIn?.(event)
	}

	const handlePressOut: PressableProps['onPressOut'] = (event) => {
		Animated.spring(scale, {
			toValue: 1,
			useNativeDriver: true,
		}).start()

		onPressOut?.(event)
	}

	return (
		<Animated.View style={{ transform: [{ scale }] }}>
			<Pressable
				{...props}
				onPressIn={handlePressIn}
				onPressOut={handlePressOut}
				onPress={onPress}
				style={styles.button}
			>
				<CustomText variant="paragraphMedium">{title}</CustomText>
			</Pressable>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	button: {
		marginLeft: 135,
		paddingTop: 10,
		padding: 10,
		backgroundColor: '#ACDAE8',
		borderRadius: 5,
		width: 120,
		alignItems: 'center',
	},
})
