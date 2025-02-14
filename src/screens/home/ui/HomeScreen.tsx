import { useCallback, useRef, useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'

import { ItemsCardGrid } from './ItemsCardGrid'

import FilterArrows from '~/shared/icons/filter-arrows.svg'
import SettingsIcon from '~/shared/icons/settings-filter.svg'
import { ITEMS_MOCKS } from '~/entities/items/model'
import { CustomText, CustomDrawerBackdrop } from '~/shared/ui'

export const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const [sortType, setSortType] = useState<string | null>(null)
  const [sortedItems, setSortedItems] = useState(ITEMS_MOCKS)

  const backdropComponent = useCallback(() => <CustomDrawerBackdrop modalRef={bottomSheetRef} />, [])

  function handleOpenSortSheet(): void {
    bottomSheetRef.current?.present()
  }

  function handleCloseSortSheet(): void {
    bottomSheetRef.current?.dismiss()
  }

  function handleSort(type: string): void {
    const sortedArray = [...ITEMS_MOCKS]

    switch (type) {
      case 'price_asc':
        sortedArray.sort((a, b) => a.price - b.price)
        break
      case 'price_desc':
        sortedArray.sort((a, b) => b.price - a.price)
        break
    }

    setSortType(type)
    setSortedItems(sortedArray)
    handleCloseSortSheet()
  }

  function renderSortOption(value: string, label: string) {
    return (
      <TouchableOpacity
        key={`${value}_${label}`}
        style={styles.sortRow}
        onPress={() => handleSort(value)}>
        <CustomText variant="h3">{label}</CustomText>
        <View style={styles.radioCircle}>
          {sortType === value && <View style={styles.radioDot} />}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <CustomText variant="h1">Избранное</CustomText>
      <CustomText style={styles.products_count}>{`${sortedItems.length} товаров`}</CustomText>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleOpenSortSheet}>
          <FilterArrows
            width={18}
            height={18}
            fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SettingsIcon
            width={18}
            height={18}
            fill="#000"
            style={styles.iconSpacing} />
        </TouchableOpacity>
        <CustomText variant="h3">Тип одежды</CustomText>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.items}>
          <ItemsCardGrid goods={sortedItems} />
        </View>
      </ScrollView>
      <BottomSheetModal
        ref={bottomSheetRef}
        backdropComponent={backdropComponent}
        onDismiss={handleCloseSortSheet}
      >
        <BottomSheetView style={styles.sheetContent}>
          <CustomText style={styles.headerText}>Сортировать</CustomText>
          {renderSortOption('date', 'По дате добавления')}
          {renderSortOption('price_asc', 'Сначала дешевле')}
          {renderSortOption('price_desc', 'Сначала дороже')}
        </BottomSheetView>
      </BottomSheetModal>
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
  headerText: {
    paddingTop: 16,
    fontSize: 32,
    fontWeight: '600',
    fontFamily: 'Manrope',
    color: '#0F0F14',
    paddingBottom: 8,
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
    padding: 24,
  },
  bulletText: {
    fontSize: 15,
    paddingLeft: 18,
    color: '#333',
  },
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14, 
    borderBottomWidth: 2, 
    borderBottomColor: '#ccc', 
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    backgroundColor: '#EADFFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#AC95D2',
  },
  items: {
    paddingTop: 12,
  },
})
