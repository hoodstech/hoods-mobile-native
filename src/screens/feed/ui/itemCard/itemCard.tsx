import React from 'react'
import { StyleSheet, View, Image, FlatList } from 'react-native'

import StarIcon from '~/shared/icons/starpurple.svg'
import Cart from '~/shared/icons/cart.svg'
import { CustomText } from '~/shared/ui'

import type { Good } from 'src/widgets/feed-list/model/types.ts'

type GoodsCardGridProps = {
  goods: Good[];
}

export const GoodsCardGrid: React.FC<GoodsCardGridProps> = ({ goods }) => {
    const renderItem = ({ item }: { item: Good }) => (
        <View style={[styles.card, { marginLeft: 0 }]}>
          <View style={styles.imageWrapper}>
            <StarIcon width={24} height={24} style={styles.iconStar} />
            <Image source={{ uri: item.profileImg }} style={styles.image} />
            <View style={styles.iconCartWrapper}>
              <Cart width={18} height={18} style={styles.iconCart} />
            </View>
          </View>
          <CustomText variant="h2" style={styles.price}>
            16 500 руб
          </CustomText>
          <CustomText variant="h2" style={styles.title}>{item.title}</CustomText>
          <CustomText variant="h2" style={styles.brand}>{item.description}</CustomText>
        </View>
      )

  return (
    <FlatList
      data={goods}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
    container: {
      paddingBottom: 16,
    },
    row: {
      justifyContent: 'flex-start',
      marginBottom: 24,
    },
    card: {
      width: 151,
      marginRight: 28,
    },
    imageWrapper: {
      width: 151,
      height: 189,
      borderRadius: 16,
      backgroundColor: '#FFF',
      borderColor: '#AC95D2',
      borderWidth: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
      position: 'relative',
    },
    image: {
      width: '90%', 
      height: '90%',
      borderRadius: 12,
    },
    price: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    title: {
      fontSize: 12,
      marginBottom: 4,
    },
    brand: {
      fontSize: 12,
      color: '#666',
    },
    iconStar: {
      position: 'absolute', 
      top: 8, 
      right: 8, 
      zIndex: 10,
    },
    iconCartWrapper: {
      position: 'absolute', 
      bottom: 8, 
      right: 8, 
      backgroundColor: '#AC95D2', 
      width: 30, 
      height: 30, 
      borderRadius: 15, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconCart: {
      width: 18, 
      height: 18,
    },
  })
  
