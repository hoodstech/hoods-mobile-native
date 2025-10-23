import { useCallback, useState } from 'react'

import { ItemDetailsButton } from '../ItemDetailsButton'
import { ItemDetailsDrawer } from '../ItemDetailsDrawer'

import { Item } from '~/entities/items/model'

type OpenItemDetailsButtonProps = {
  item: Item
}

export const OpenItemDetails: React.FC<OpenItemDetailsButtonProps> = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false)

  // callbacks
  const handleOpenModal = useCallback(() => {
    setIsVisible(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsVisible(false)
  }, [])

  return (
    <>
      <ItemDetailsButton onPress={handleOpenModal} />
      <ItemDetailsDrawer 
        visible={isVisible}
        onClose={handleCloseModal}
        item={item} 
      />
    </>
  )
}
