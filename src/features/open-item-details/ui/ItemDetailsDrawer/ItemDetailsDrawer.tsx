import { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'

import { ItemDetailsDrawerBackdrop } from '../ItemDetailsDrawerBackdrop'

import { CustomText } from '~/shared/ui'
import { Item } from '~/entities/items/model'
import { SizesPanel } from '~/entities/items/ui'

type ItemDetailsDrawerProps = {
  modalRef: React.RefObject<BottomSheetModal>,
  item: Item
}

export const ItemDetailsDrawer: React.FC<ItemDetailsDrawerProps> = ({ item, modalRef }) => {
  const backdropComponent = useCallback(() => <ItemDetailsDrawerBackdrop modalRef={modalRef} />, [modalRef])

  return (
    <BottomSheetModal
      ref={modalRef}
      backdropComponent={backdropComponent}
      maxDynamicContentSize={1000}
    >
      <BottomSheetScrollView style={styles.contentContainer}>
        <CustomText variant="h3">{item.title}</CustomText>
        <CustomText variant='paragraphSmallBold'>
          {item.price / 100}
          {' '}
          руб.
        </CustomText>
        <View style={styles.topicsContainer}>
          <SizesPanel
            variant="column"
            sizes={item.sizes}
            style={{ marginTop: 12 }}
          />
          {item.characteristics?.length && (
            <View>
              <CustomText variant="paragraphSmallBold">
                О модели
              </CustomText>
              <View style={styles.topicWrapper}>
                {item.characteristics.map((characteristic) => (
                  <View>
                    <CustomText variant="paragraphSmall">
                      —
                      {' '}
                      {characteristic}
                    </CustomText>
                  </View>
                ))}
              </View>
            </View>
          )}
          {item.sizes?.length && (
            <View>
              <CustomText variant="paragraphSmallBold">
                Размерная сетка по росту
              </CustomText>
              <View style={[styles.topicWrapper, { paddingBottom: 24 }]}>
                {item.sizes.map((size) => (
                  <View>
                    <CustomText variant="paragraphSmall">
                      {`(${size.name}) ${size.description}`}
                    </CustomText>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    columnGap: 8,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderRadius: '50%',
    backgroundColor: '#0F0F14',
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
  },
  contentContainer: {
    padding: 24,
    flex: 1,
  },
  topicsContainer: {
    flexDirection: 'column',
    rowGap: 24,
  },
  topicWrapper: {
    marginTop: 8,
  },
})