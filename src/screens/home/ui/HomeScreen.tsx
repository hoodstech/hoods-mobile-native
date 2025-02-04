import { useCallback, useRef, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BottomSheetModal, BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

import FilterArrows from '~/shared/icons/filter-arrows.svg';
import SettingsIcon from '~/shared/icons/settings-filter.svg';
import { ITEMS_MOCKS } from '~/entities/items/model';
import { CustomText } from '~/shared/ui';
import { ItemsCardGrid } from './ItemsCardGrid';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { JSX } from 'react/jsx-runtime';

export const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [sortType, setSortType] = useState<string | null>(null);
  const [sortedItems, setSortedItems] = useState(ITEMS_MOCKS);
  const [isSortOpen, setIsSortOpened] = useState(false);

  const backdropComponent = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => <BottomSheetBackdrop {...props} opacity={0.4} pressBehavior="close" />,
    []
  );

  function handleOpenSortSheet(): void {
    setIsSortOpened(true);
    bottomSheetRef.current?.present();
  }

  function handleCloseSortSheet(): void {
    setIsSortOpened(false);
    bottomSheetRef.current?.dismiss();
  }

  function handleSort(type: string): void {
    let sortedArray = [...ITEMS_MOCKS];

    switch (type) {
      case 'date': 
        break;
      case 'price_asc':
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        sortedArray.sort((a, b) => b.price - a.price);
        break;
    }

    setSortType(type);
    setSortedItems(sortedArray);
    handleCloseSortSheet();
  }

  return (
    <View style={styles.container}>
      <CustomText variant="h1">Избранное</CustomText>
      <CustomText style={styles.products_count}>{`${sortedItems.length} товаров`}</CustomText>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleOpenSortSheet}>
          <FilterArrows width={18} height={18} fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
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
        snapPoints={['20%', '40%']}
        backdropComponent={backdropComponent}
        maxDynamicContentSize={1000}
        onDismiss={handleCloseSortSheet}
      >
        <BottomSheetScrollView style={styles.sheetContent}>
          <CustomText style={styles.headerText}>Сортировать</CustomText>
          {renderSortOption('price_desc', 'По дате добавления')}
          {renderSortOption('price_asc', 'Сначала дешевле')}
          {renderSortOption('price_desc', 'Сначала дороже')}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </View>
  );

  function renderSortOption(value: string, label: string) {
    return (
      <TouchableOpacity style={styles.sortRow} onPress={() => handleSort(value)}>
        <CustomText style={styles.bulletText}>{label}</CustomText>
        <View style={styles.radioCircle}>
          {sortType === value && <View style={styles.radioDot} />}
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
    paddingTop: 12,
    fontSize: 32,
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
});
