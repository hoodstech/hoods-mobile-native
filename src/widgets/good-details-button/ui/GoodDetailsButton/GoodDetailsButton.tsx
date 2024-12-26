import { useCallback, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet'

import { ActionButton, CustomText } from '~/shared/ui'
import { Good } from '~/entities/goods/model'
import { SizesPanel } from '~/entities/goods/ui'

type GoodDetailsButtonProps = {
  goodItem: Good
}

export const GoodDetailsButton: React.FC<GoodDetailsButtonProps> = ({ goodItem }: GoodDetailsButtonProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // callbacks
  const handleOpenModal = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  return (
    <>
      <ActionButton onPress={handleOpenModal} style={styles.buttonWrapper}>
        <CustomText variant="paragraphSmallBold">
          Подробнее
        </CustomText>
        <View style={styles.iconWrapper}>
          <CustomText variant="paragraphSmallBold" style={styles.iconText}>
            ↑
          </CustomText>
        </View>
      </ActionButton>
      <BottomSheetModal ref={bottomSheetModalRef}>
        <BottomSheetView style={styles.contentContainer}>
          <CustomText variant="h2">{goodItem.title}</CustomText>
          <CustomText variant='paragraphSmallBold'>
            {goodItem.price / 100} руб.
          </CustomText>
          <SizesPanel
            variant="column"
            sizes={goodItem.sizes}
            style={{ marginTop: 12, marginBottom: 24 }}
          />
          <CustomText variant="paragraphSmallBold">
            О модели
          </CustomText>
          <CustomText>TODO listView</CustomText>
        </BottomSheetView>
      </BottomSheetModal>
    </>

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
})