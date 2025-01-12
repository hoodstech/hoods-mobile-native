import { View, StyleSheet } from 'react-native'

import { ActionButton, CustomText } from '~/shared/ui'

type ItemDetailsButtonProps = {
  onPress: () => void
}

export const ItemDetailsButton: React.FC<ItemDetailsButtonProps> = (props) => (
  <ActionButton {...props} style={styles.buttonWrapper}>
    <CustomText variant="paragraphSmallBold">
      Подробнее
    </CustomText>
    <View style={styles.iconWrapper}>
      <CustomText variant="paragraphSmallBold" style={styles.iconText}>
        ↑
      </CustomText>
    </View>
  </ActionButton>
)

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    columnGap: 8,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderRadius: '50%',
    backgroundColor: '#0F0F14',
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
  },
  contentContainer: {
    padding: 24,
    flex: 1,
  },
})