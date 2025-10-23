import React from 'react'
import { StyleSheet, View, Modal, ScrollView, Pressable } from 'react-native'

import { CustomText } from '~/shared/ui'
import { Item } from '~/entities/items/model'
import { SizesPanel } from '~/entities/items/ui'

type ItemDetailsDrawerProps = {
  visible: boolean,
  onClose: () => void,
  item: Item
}

export const ItemDetailsDrawer: React.FC<ItemDetailsDrawerProps> = ({ item, visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalBackdrop} onPress={onClose}>
        <ScrollView style={[styles.contentContainer, styles.modalContent]}>
          <CustomText variant="h3">{item.title}</CustomText>
          <CustomText variant='paragraphSmallBold'>
            {Math.round(item.price / 100)}
            {' '}
            €
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
                  {item.characteristics.map((characteristic, index) => (
                    <View key={index}>
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
                  {item.sizes.map((size, index) => (
                    <View key={index}>
                      <CustomText variant="paragraphSmall">
                        {`(${size.name}) ${size.description}`}
                      </CustomText>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
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
