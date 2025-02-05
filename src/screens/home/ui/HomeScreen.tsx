import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useLinkTo } from '@react-navigation/native'

import { ItemsCardGrid } from './ItemsCardGrid'

import FilterArrows from '~/shared/icons/filter-arrows.svg'
import SettingsIcon from '~/shared/icons/settings-filter.svg'
import { ITEMS_MOCKS } from '~/entities/items/model'
import { CustomText } from '~/shared/ui'
import { useCallback, useRef, useState } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'

export const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [sortType, setSortType] = useState<string | null>(null);
  const [sortedItems, setSortedItems] = useState(ITEMS_MOCKS);
  const [isSortOpen, setIsSortOpened] = useState(false);

  const backdropComponentFilter = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => <BottomSheetBackdrop {...props} opacity={0.4} pressBehavior="close" />,
    []
  );

  function handleOpenFilterSheet(): void {
    setIsSortOpened(true);
    bottomSheetRef.current?.present();
  }

  function handleCloseFilterSheet(): void {
    setIsSortOpened(false);
    bottomSheetRef.current?.dismiss();
  }

  function handleFilter(type: string) {
    if (sortType === type) {
      setSortType(null);
      setSortedItems(ITEMS_MOCKS); 
    } else {
      setSortType(type);
      const filtered = ITEMS_MOCKS.filter(item => item.type === type);
      setSortedItems(filtered);
    }
  }

  return (
    <View style={styles.container}>
      <CustomText variant="h1">Избранное</CustomText>
      <CustomText style={styles.products_count}>{`${sortedItems.length} товаров`}</CustomText>
      <View style={styles.row}>
        <TouchableOpacity>
          <FilterArrows width={18} height={18} fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOpenFilterSheet}>
          <SettingsIcon width={18} height={18} fill="#000" style={styles.iconSpacing} />
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
        snapPoints={['75%']}
        backdropComponent={backdropComponentFilter}
        maxDynamicContentSize={1000}
        onDismiss={handleCloseFilterSheet}
      >
        <BottomSheetScrollView style={styles.sheetContent}>
          <CustomText style={styles.headerText}>Фильтры</CustomText>
          <CustomText style={[{borderBottomWidth: 2, borderBottomColor: '#ccc'}]}>Тип одежды</CustomText>
          {renderFilterOption('accessories', 'Аксессуары')}
          {renderFilterOption('outerwear', 'Верхняя одежда')}
          {renderFilterOption('headwear', 'Головные уборы')}
          {renderFilterOption('sweaters', 'Джемперы и свитера')}
          {renderFilterOption('underwear', 'Нижнее белье')}
          {renderFilterOption('shoes', 'Обувь')}
          {renderFilterOption('shirts', 'Футболки и рубашки')}
          {renderFilterOption('pants', 'Штаны и шорты')}
          {renderFilterOption('skirts', 'Юбки и платья')}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </View>
  );

  function renderFilterOption(type: string | null, label: string) {
    const isSelected = sortType === type;
  
    return (
      <TouchableOpacity
        style={[
          styles.sortRow,
        ]}
        onPress={() => handleFilter(type)}
      >
        <CustomText style={[styles.bulletText]}>
          {label}
        </CustomText>
        <View style={[styles.radioCircle, isSelected && { backgroundColor: '#EADFFC' }]}>
          {isSelected && <View style={styles.radioDot} />}
        </View>
      </TouchableOpacity>
    );
  }
};

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
    paddingTop: 24,
    fontSize: 43,
    fontWeight: '600',
    fontFamily: 'Manrope',
    textAlign: 'left',
    color: '#0F0F14',
    marginBottom: 8,
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
    paddingVertical: 10, 
    paddingLeft: 32,
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
});