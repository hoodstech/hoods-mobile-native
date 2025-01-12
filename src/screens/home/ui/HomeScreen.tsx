import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useLinkTo } from '@react-navigation/native'

import { ItemsCardGrid } from './ItemsCardGrid'

import FilterArrows from '~/shared/icons/filter-arrows.svg'
import SettingsIcon from '~/shared/icons/settings-filter.svg'
import { ITEMS_MOCKS } from '~/entities/items/model'
import { CustomText } from '~/shared/ui'

export const HomeScreen = () => {
  const linkTo = useLinkTo()

  function handleOpenSortSheet(): void {
    linkTo('/')
  }

  function handleOpenFilters(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <View style={styles.container}>
      <CustomText variant="h1">Избранное</CustomText>
      <CustomText style={styles.products_count}>4 товара</CustomText>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleOpenSortSheet}>
          <FilterArrows
            width={18}
            height={18}
            fill="#000"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOpenFilters}>
          <SettingsIcon
            width={18}
            height={18}
            fill="#000"
            style={styles.iconSpacing}
          />
        </TouchableOpacity>
        <CustomText variant="h3" style={styles.text}>Тип одежды</CustomText>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.items}>
          <ItemsCardGrid goods={ITEMS_MOCKS} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 32,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingTop: 10,
  },
  products_count: {
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
  items: {
    paddingTop: 12,
  },
})