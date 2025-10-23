import { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View, Modal, Pressable } from 'react-native'

import { ItemsCardGrid } from './ItemsCardGrid'

import FilterArrows from '~/shared/icons/filter-arrows.svg'
import SettingsIcon from '~/shared/icons/settings-filter.svg'
import { ITEMS_MOCKS } from '~/entities/items/model'
import { CustomText } from '~/shared/ui'

export const HomeScreen = () => {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)
  const [isSortModalVisible, setIsSortModalVisible] = useState(false)

  const [sortType, setSortType] = useState<string | null>(null)
  const [filterType, setFilterType] = useState<string | null>(null)
  const [sortedItems, setSortedItems] = useState(ITEMS_MOCKS)

  function handleOpenSortSheet(): void {
    setIsSortModalVisible(true)
  }

  function handleCloseSortSheet(): void {
    setIsSortModalVisible(false)
  }

  function handleOpenFilterSheet(): void {
    setIsFilterModalVisible(true)
  }

  function handleCloseFilterSheet(): void {
    setIsFilterModalVisible(false)
  }

  // Функция для применения фильтров и сортировки
  const applyFiltersAndSort = (newFilterType: string | null = filterType, newSortType: string | null = sortType) => {
    let filteredItems = ITEMS_MOCKS

    // Применяем фильтр
    if (newFilterType) {
      filteredItems = ITEMS_MOCKS.filter(item => item.type === newFilterType)
    }

    // Применяем сортировку (создаем копию массива)
    if (newSortType) {
      const sortedItems = [...filteredItems]
      switch (newSortType) {
        case 'price_asc':
          sortedItems.sort((a, b) => a.price - b.price)
          break
        case 'price_desc':
          sortedItems.sort((a, b) => b.price - a.price)
          break
        case 'date':
          // Сортировка по ID как дате добавления
          sortedItems.sort((a, b) => b.id - a.id)
          break
      }
      setSortedItems(sortedItems)
    } else {
      setSortedItems([...filteredItems])
    }
  }

  const handleFilter = (type: string) => {
    const newFilterType = type === filterType ? null : type
    setFilterType(newFilterType)
    applyFiltersAndSort(newFilterType, sortType)
    handleCloseFilterSheet()
  }

  const handleSort = (type: string) => {
    const newSortType = type === sortType ? null : type
    setSortType(newSortType)
    applyFiltersAndSort(filterType, newSortType)
    handleCloseSortSheet()
  }

  const renderSortOption = (value: string, label: string) => (
    <TouchableOpacity
      key={value}
      style={[styles.optionItem, sortType === value && styles.selectedOption]}
      onPress={() => handleSort(value)}
    >
      <CustomText style={[styles.optionText, sortType === value && styles.selectedText]}>
        {label}
      </CustomText>
    </TouchableOpacity>
  )

  const renderFilterOption = (value: string, label: string) => (
    <TouchableOpacity
      key={value}
      style={[styles.optionItem, filterType === value && styles.selectedOption]}
      onPress={() => handleFilter(value)}
    >
      <CustomText style={[styles.optionText, filterType === value && styles.selectedText]}>
        {label}
      </CustomText>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText variant="h1" style={styles.pageTitle}>Избранное</CustomText>
        <View style={styles.filtersContainer}>
          <TouchableOpacity onPress={handleOpenSortSheet} style={styles.filterButton}>
            <FilterArrows
              width={18}
              height={18}
              fill="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenFilterSheet} style={styles.filterButton}>
            <SettingsIcon
              width={18}
              height={18}
              fill="#000"
            />
          </TouchableOpacity>
        </View>
        <CustomText variant="h3" style={styles.subtitle}>8 товаров</CustomText>
      </View>
      <View style={styles.items}>
        <ItemsCardGrid goods={sortedItems} />
      </View>
      
      <Modal
        visible={isSortModalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseSortSheet}
      >
        <Pressable style={styles.modalBackdrop} onPress={handleCloseSortSheet}>
          <View style={[styles.sheetContent, styles.modalContent]}>
            <CustomText style={styles.headerText}>Сортировать</CustomText>
            {renderSortOption('date', 'По дате добавления')}
            {renderSortOption('price_asc', 'Сначала дешевле')}
            {renderSortOption('price_desc', 'Сначала дороже')}
          </View>
        </Pressable>
      </Modal>
      
      <Modal
        visible={isFilterModalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseFilterSheet}
      >
        <Pressable style={styles.modalBackdrop} onPress={handleCloseFilterSheet}>
          <ScrollView style={[styles.sheetContent, styles.modalContent, styles.filterModal]}>
            <CustomText style={styles.headerText}>Фильтры</CustomText>
            <CustomText style={[{ borderBottomWidth: 2, borderBottomColor: '#ccc' }]}>Тип одежды</CustomText>
            {renderFilterOption('accessories', 'Аксессуары')}
            {renderFilterOption('outerwear', 'Верхняя одежда')}
            {renderFilterOption('headwear', 'Головные уборы')}
            {renderFilterOption('sweaters', 'Джемперы и свитера')}
            {renderFilterOption('underwear', 'Нижнее белье')}
            {renderFilterOption('shoes', 'Обувь')}
            {renderFilterOption('shirts', 'Футболки и рубашки')}
            {renderFilterOption('pants', 'Штаны и шорты')}
            {renderFilterOption('skirts', 'Юбки и платья')}
          </ScrollView>
        </Pressable>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  filtersContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  filterButton: {
    marginRight: 2,
    padding: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  items: {
    flex: 1,
    paddingLeft: 15,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 200,
  },
  filterModal: {
    maxHeight: '75%',
  },
  sheetContent: {
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 2,
  },
  selectedOption: {
    backgroundColor: '#e6f3ff',
  },
  optionText: {
    fontSize: 16,
  },
  selectedText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
})
