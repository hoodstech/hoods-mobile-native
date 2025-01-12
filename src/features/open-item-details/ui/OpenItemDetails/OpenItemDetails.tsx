import { useCallback, useRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import { ItemDetailsButton } from '../ItemDetailsButton'
import { ItemDetailsDrawer } from '../ItemDetailsDrawer'

import { Item } from '~/entities/items/model'

type OpenItemDetailsButtonProps = {
  item: Item
}

export const OpenItemDetails: React.FC<OpenItemDetailsButtonProps> = ({ item }) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // callbacks
  const handleOpenModal = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  return (
    <>
      <ItemDetailsButton onPress={handleOpenModal} />
      <ItemDetailsDrawer modalRef={bottomSheetModalRef} item={item} />
    </>
  )
}
