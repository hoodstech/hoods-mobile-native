import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

export type TCardElement = {
  children: React.ReactNode;
  style?: Record<string, any>;
}

export type TDescription = TCardElement
export const Description = ({children}: TDescription) => {
  return <Text style={[CardStyles.description]}>{children}</Text>
}

export type TTitle = TCardElement
export const Title = ({children}: TTitle) => {
  return <Text style={[CardStyles.title]}>{children}</Text>
}

export type TInfo = TCardElement
export const Info = ({children, style}: TInfo) => {
  return <View style={[CardStyles.info, style]}>{children}</View>
}

export type TCard = TCardElement & {
  profileImg?: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}
export const Card = ({
  children,
  profileImg,
  minHeight = 100,
  maxHeight,
  minWidth,
}: TCard) => {
  const cardStyles = {
    minHeight,
    maxHeight,
    minWidth,
  }
  return (
    <View style={[CardStyles.card, cardStyles]}>
      <ImageBackground
        style={[CardStyles.cover]}
        source={{
          uri: profileImg,
        }}
        resizeMode="cover">
        <View style={[CardStyles.coverContainer]}>{children}</View>
      </ImageBackground>
    </View>
  )
}

Card.Title = Title
Card.Description = Description
Card.Info = Info

const CardStyles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  cover: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  coverContainer: {
    padding: 28,
  },
  info: {},
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  description: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
})
