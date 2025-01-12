import { useCallback, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list'

import { FeedListCard } from '../FeedListCard'

import type { Item } from '~/entities/items/model'
import { ITEMS_MOCKS } from '~/entities/items/model'
import CartLogo from '~/shared/icons/cart.svg'
import ReturnArrowLogo from '~/shared/icons/return-arrow.svg'
import CloseLogo from '~/shared/icons/close.svg'
import HeartLogo from '~/shared/icons/heart.svg'
import StarOutlineLogo from '~/shared/icons/star-outline.svg'
import { ActionButton } from '~/shared/ui'


export const FeedList = () => {
  const ref = useRef<SwiperCardRefType>()
  const renderCard = useCallback((item: Item) => <FeedListCard item={item} />, [])

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.subContainer}>
        <Swiper<Item>
          ref={ref}
          cardStyle={styles.cardStyle}
          data={ITEMS_MOCKS}
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
          style={[styles.button, styles.buttonOutline, styles.buttonGhost]}
          onTap={() => {
            ref.current?.swipeBack()
          }}
        >
          <ReturnArrowLogo
            width={24}
            height={24}
            style={{ color: '#0F0F14' }}
          />
        </ActionButton>
        <ActionButton
          style={[styles.button, styles.buttonOutline]}
          onPress={() => {
            ref.current?.swipeLeft()
          }}
        >
          <CloseLogo
            width={24}
            height={24}
            style={{ color: '#0F0F14' }}
          />
        </ActionButton>
        <ActionButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={() => {
            ref.current?.swipeTop()
          }}
        >
          <CartLogo
            width={32}
            height={32}
            style={{ color: '#0F0F14' }}
          />
        </ActionButton>
        <ActionButton
          style={[styles.button, styles.buttonOutline]}
          onTap={() => {
            ref.current?.swipeRight()
          }}
        >
          <HeartLogo
            width={24}
            height={24}
            style={{ color: '#0F0F14' }}
          />
        </ActionButton>
        <ActionButton
          style={[styles.button, styles.buttonOutline, styles.buttonGhost]}
          onTap={() => {
            // TODO: link goto
            ref.current?.swipeRight()
          }}
        >
          <StarOutlineLogo
            width={24}
            height={24}
            style={{ color: '#0F0F14' }}
          />
        </ActionButton>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    bottom: 55,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 24,
  },
  buttonPrimary: {
    backgroundColor: '#AC95D2',
    height: 70,
    width: 70,
  },
  buttonGhost: {
    width: 25,
    height: 25,
    borderWidth: 0,
  },
  buttonOutline: {
    height: 60,
    width: 60,
    borderColor: '#AC95D2',
    borderWidth: 1,
  },
  button: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardStyle: {
    width: '100%',
    height: '100%',
    bottom: 0,
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