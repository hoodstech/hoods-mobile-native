import React, { useEffect, useRef } from 'react'
import { View, Platform, Pressable, Animated, StyleSheet } from 'react-native'
import { useLinkTo } from '@react-navigation/native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import StarIconFill from '~/shared/icons/star-fill.svg'
import StarIconOutlined from '~/shared/icons/star-black.svg'
import GhostIcon from '~/shared/icons/ghost.svg'
import GhostSleeping from '~/shared/icons/ghost-sleeping.svg'
import ProfileIcon from '~/shared/icons/community.svg'
import ProfileBlack from '~/shared/icons/community-black.svg'

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const linkTo = useLinkTo()
  const animatedValueRef = useRef(new Animated.Value(state.index))
  const animatedValue = animatedValueRef.current

useEffect(() => {
  Animated.timing(animatedValue, {
    toValue: state.index,
    duration: 300,
    useNativeDriver: false,
  }).start()
}, [animatedValue, state.index])

  const tabWidth = 327 / state.routes.length

  return (
    <View style={styles.tabbar}>
      <Animated.View
        style={[
          styles.animatedIndicator,
          {
            width: tabWidth - 20,
            transform: [{
              translateX: animatedValue.interpolate({
                inputRange: state.routes.map((_, i) => i),
                outputRange: state.routes.map((_, i) => i * tabWidth + 10),
              }),
            }],
          },
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            if (Platform.OS === 'web') {
              linkTo(`/${route.name}`)
            } else {
              navigation.navigate(route.name, route.params)
            }
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        let IconComponent
        switch (route.name) {
          case 'home':
            IconComponent = isFocused 
              ? <StarIconOutlined width={24} height={24} fill={index === 0 ? '#000' : '#fff'} />
              : <StarIconFill width={24} height={24} fill="#000" />
            break
          case 'feed':
            IconComponent = isFocused 
            ? <GhostIcon width={24} height={24} />
            : <GhostSleeping width={24} height={24} />
            break
          case 'profile':
            IconComponent = isFocused 
              ? <ProfileBlack width={24} height={24} fill={index === 0 ? '#000' : '#fff'} />
              : <ProfileIcon width={24} height={24} fill="#000" />
            break
          default:
            IconComponent = null
        }

        return (
          <Pressable
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID="tabbarTestId"
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            <View style={styles.iconContainer}>{IconComponent}</View>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    width: 327,
    height: 48,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 34,
    width: 103,
  },
  iconContainer: {
    paddingTop: 2, 
  },
  animatedIndicator: {
    position: 'absolute',
    top: 6,
    height: 36,
    backgroundColor: '#AC95D2',
    borderRadius: 20,
  },
})
