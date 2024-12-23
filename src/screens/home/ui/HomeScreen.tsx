import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useLinkTo } from '@react-navigation/native'

import FilterArrows from '../../../shared/icons/filter-arrows.svg'
import SettingsIcon from '../../../shared/icons/settings-filter.svg'

import { CustomText } from '~/shared/ui'

export const HomeScreen = () => {

	const linkTo = useLinkTo()

	function handleOpenSortSheet(event: GestureResponderEvent): void {
		linkTo('/')
	}

	function handleOpenFilters(event: GestureResponderEvent): void {
		throw new Error('Function not implemented.')
	}

	return (
		<View style={styles.container}>
				<CustomText variant="h1">Избранное</CustomText>
				<CustomText style={styles.products_count}>4 товара</CustomText>
			<View style={styles.row}>
			<TouchableOpacity onPress={handleOpenSortSheet}>
				<FilterArrows width={18} height={18} fill="#000" />
			</TouchableOpacity>
			<TouchableOpacity onPress={handleOpenFilters}>
				<SettingsIcon width={18} height={18} fill="#000" style={styles.iconSpacing} />
			</TouchableOpacity>
				<CustomText variant="h2" style={styles.text}>Тип одежды</CustomText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container:
	{
		paddingLeft: 24,
		paddingTop: 10,
	},
	products_count:
	{
		height: 16,
		fontFamily: 'Manrope_300Light',
		marginTop: 4,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
	  },
	  iconSpacing: {
		marginLeft: 4,
	  },
	  sheetContent: {
		flex: 1,
		padding: 16,
	  },
	  text: {
		marginLeft: 4,
		fontFamily: 'Manrope_300Light',
		fontSize: 15,
	  },
})