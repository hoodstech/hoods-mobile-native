import React, { useCallback, useRef } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list'

import type { Good } from '../../model'
import { GOODS_MOCKS } from '../../model'
import { ActionButton } from '../ActionButton'

export const FeedList = () => {
  const ref = useRef<SwiperCardRefType>()

  const windowHeight = Dimensions.get('window').height

  const renderCard = useCallback(
    (good: Good) => {
      return (
        <View style={styles.renderCardContainer}>
          <Image
            source={{
              uri: good.profileImg,
            }}
            style={styles.renderCardImage}
            resizeMode="cover"
          />
        </View>
      )
    },
    [],
  )

  return (
    <GestureHandlerRootView style={[styles.container, { height: windowHeight }]}>
      <View style={[styles.subContainer, { height: windowHeight }]}>
        <Swiper<Good>
          ref={ref}
          cardStyle={styles.cardStyle}
          data={GOODS_MOCKS}
          renderCard={renderCard}
          onIndexChange={(index) => {
            console.log('Current Active index', index)
          }}
          onSwipeRight={(cardIndex) => {
            console.log('cardIndex', cardIndex)
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll')
          }}
          onSwipeLeft={(cardIndex) => {
            console.log('onSwipeLeft', cardIndex)
          }}
          onSwipeTop={(cardIndex) => {
            console.log('onSwipeTop', cardIndex)
          }}
          onSwipeActive={() => {
            console.log('onSwipeActive')
          }}
          onSwipeStart={() => {
            console.log('onSwipeStart')
          }}
          onSwipeEnd={() => {
            console.log('onSwipeEnd')
          }}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <ActionButton
          style={styles.button}
          onPress={() => {
            ref.current?.swipeLeft()
          }}
        >
          <AntDesign name="close" size={32} color="white" />
        </ActionButton>
        <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeBack()
          }}
        >
          <AntDesign name="reload1" size={32} color="white" />
        </ActionButton>
        <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeTop()
          }}
        >
          <AntDesign name="arrowup" size={32} color="white" />
        </ActionButton>
        <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeRight()
          }}
        >
          <AntDesign name="heart" size={32} color="white" />
        </ActionButton>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonsContainer: {
    flexDirection: 'row',
    bottom: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    height: 80,
    borderRadius: 40,
    aspectRatio: 1,
    backgroundColor: '#3A3D45',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardStyle: {
    width: '100%',
    height: '80%',
    borderRadius: 15,
    marginVertical: 20,
  },
  renderCardContainer: {
    flex: 1,
    borderRadius: 15,
    height: '80%',
    width: '100%',
  },
  renderCardImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayLabelContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
})