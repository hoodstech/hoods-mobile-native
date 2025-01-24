import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRef, useState } from 'react';
import { ItemsCardGrid } from './ItemsCardGrid';

import FilterArrows from '~/shared/icons/filter-arrows.svg';
import SettingsIcon from '~/shared/icons/settings-filter.svg';
import { ITEMS_MOCKS } from '~/entities/items/model';
import { CustomText } from '~/shared/ui';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { JSX } from 'react/jsx-runtime';
import {
  getIsOpened,
  setIsOpenedWithNotify,
} from '~/shared/globals';

export const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [sortType, setSortType] = useState<string | null>(null); 
  const [sortedItems, setSortedItems] = useState(ITEMS_MOCKS); 
  const [isSortOpen, setIsSortOpened] = useState(false);

  function handleOpenSortSheet(): void {
    setIsSortOpened(true);
    setIsOpenedWithNotify(false);
    bottomSheetRef.current?.present();
  }

  function handleCloseSortSheet(): void {
    setIsSortOpened(false);
    setIsOpenedWithNotify(true);
    bottomSheetRef.current?.dismiss();
  }

  function renderBackdrop(props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) {
    return <BottomSheetBackdrop {...props} opacity={0.5} pressBehavior="close" />;
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
    bottomSheetRef.current?.dismiss();
  }

  const itemCount = sortedItems.length;

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <CustomText variant="h1">Избранное</CustomText>
        <CustomText style={styles.products_count}>{`${itemCount} товаров`}</CustomText>
        <View style={styles.row}>
          <TouchableOpacity onPress={handleOpenSortSheet}>
            <FilterArrows width={18} height={18} fill="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SettingsIcon width={18} height={18} fill="#000" style={styles.iconSpacing} />
          </TouchableOpacity>
          <CustomText variant="h3" style={styles.text}>Тип одежды</CustomText>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.items}>
            <ItemsCardGrid goods={sortedItems} />
          </View>
        </ScrollView>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={['25%', '50%']}
          backgroundStyle={styles.sheetBackground}
          backdropComponent={renderBackdrop}
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
    </BottomSheetModalProvider>
  );

  function renderSortOption(value: string, label: string) {
    return (
      <View style={styles.sortOption}>
        <TouchableOpacity
          style={styles.sortRow}
          onPress={() => handleSort(value)}
        >
          <CustomText style={styles.bulletText}>{label}</CustomText>
          <View style={styles.radioCircle}>
            {sortType === value && <View style={styles.radioDot} />}
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />
      </View>
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
    lineHeight: 35.2,
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
    flex: 1,
    padding: 16,
    fontSize: 30,
  },
  sheetBackground: {
    backgroundColor: '#f8f9fa',
  },
  bulletText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  sortOption: {
    marginBottom: 8,
  },
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
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
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 8,
  },
  text: {
    marginLeft: 4,
    fontFamily: 'Manrope_300Light',
    fontSize: 15,
  },
  items: {
    paddingTop: 12,
  },
});
