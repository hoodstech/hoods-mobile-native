import { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { Item } from '~/entities/items/model'
import { CustomText } from '~/shared/ui'
import { SizesPanel } from '~/entities/items/ui'
import { OpenItemDetails } from '~/features/open-item-details/ui'

interface FeedListCardProps {
  item: Item
}

export const FeedListCard: FC<FeedListCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.profileImg,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.innerWrapper}>
        <View style={styles.titleWrapper}>
          <CustomText variant="h3">{item.title}</CustomText>
          <OpenItemDetails item={item} />
        </View>
        <CustomText variant='paragraphSmallBold'>
          {item.price / 100}
          {' '}
          руб.
        </CustomText>
        <SizesPanel sizes={item.sizes} style={{ marginTop: 12 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    width: '100%',
    backgroundColor: '#fff',
  },
  image: {
    height: '84%',
    width: '100%',
    borderRadius: 15,
  },
  innerWrapper: {
    width: '100%',
    paddingTop: 12,
    paddingLeft: 24,
    paddingRight: 24,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
})