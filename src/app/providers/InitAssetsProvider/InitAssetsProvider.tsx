import { useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  useFonts,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

type InitAssetsProviderProps = {
  children: ReactNode
}

export const InitAssetsProvider: FC<InitAssetsProviderProps> = ({ children }) => {
  // TODO: заменить на взаимодействие со стором
  const [loaded, error] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return children
}
