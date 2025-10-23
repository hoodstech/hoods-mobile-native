// Полифилл для react-native-reanimated useWorkletCallback
import { useCallback } from 'react'

// Временное решение для проблемы с useWorkletCallback
if (typeof global !== 'undefined') {
  (global as any).useWorkletCallback = (global as any).useWorkletCallback || useCallback;
}

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
