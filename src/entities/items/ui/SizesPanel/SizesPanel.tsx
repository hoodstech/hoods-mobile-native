import React from 'react'
import { View, StyleSheet } from 'react-native'
import type { ViewProps } from 'react-native'

import type { SizeItem } from '~/entities/items/model'
import { CustomText } from '~/shared/ui'

interface SizesPanelProps extends ViewProps {
  sizes?: SizeItem[]
  variant?: 'column' | 'row'
}

export const SizesPanel: React.FC<SizesPanelProps> = ({ sizes, variant = 'row', ...rest }) => {
  return (
    <View
      style={[
        styles.container,
        variant === 'row' ? styles.rowContainer : styles.colContainer,
        rest.style,
      ]}
    >
      {sizes?.length ? (
        <>
          <CustomText variant="paragraphSmallBold">
            Размер
          </CustomText>
          <View style={styles.sizesContainer}>
            {sizes.map((size, index) => (
              <View
                key={index}
                style={[
                  styles.sizeItem,
                  !size.isAvailable && styles.disabled,
                ]}
              >
                <CustomText variant="paragraphSmallBold" style={styles.sizeText}>
                  {size.name}
                </CustomText>
              </View>
            ))}
          </View>

        </>
      ) : (
        <CustomText variant="paragraphSmallBold">
          На данный момент подходящих размеров нет
        </CustomText>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    columnGap: 10,
    rowGap: 8,
  },
  colContainer: {
    flexDirection: 'column',
  },
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  sizesContainer: {
    flexDirection: 'row',
    columnGap: 10,
    rowGap: 8,
  },
  sizeItem: {
    height: 18,
    width: 33,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#0F0F14',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },
  sizeText: {
    textTransform: 'uppercase',
  },
  disabled: {
    opacity: 0.25,
  },
})
