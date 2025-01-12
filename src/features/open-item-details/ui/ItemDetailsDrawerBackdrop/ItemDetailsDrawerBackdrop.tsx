import { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

type ItemDetailsDrawerBackdropProps = {
  modalRef: React.RefObject<BottomSheetModal>,
}

export const ItemDetailsDrawerBackdrop: React.FC<ItemDetailsDrawerBackdropProps> = ({ modalRef }) => {
  const handleCloseModal = useCallback(() => {
    modalRef.current?.close()
  }, [modalRef])

  return <View onTouchStart={handleCloseModal} style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    opacity: 0.5,
  },
})