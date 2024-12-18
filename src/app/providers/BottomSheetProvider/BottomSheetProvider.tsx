import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import type { FC, ReactNode } from 'react'

type BottomSheetProviderProps = {
  children: ReactNode
}

export const BottomSheetProvider: FC<BottomSheetProviderProps> = ({ children }) => {
  return (
    <BottomSheetModalProvider>
      {children}
    </BottomSheetModalProvider>
  )
}
