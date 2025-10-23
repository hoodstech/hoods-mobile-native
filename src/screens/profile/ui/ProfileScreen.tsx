import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { CustomText } from '~/shared/ui';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavigationScreen } from '~/shared/config/navigation';
import ProfileSettings from '~/shared/icons/profile-settings.svg';
import SoonImage from '~/shared/assets/images/soon.png';
import GhostIcon from '~/shared/icons/ghost-icon.svg';

// Импортируем NameContext
const NameContext = React.createContext<{
  name: string;
  setName: (name: string) => void;
}>({
  name: '',
  setName: () => {},
});

type RootStackParamList = {
  [key in AppNavigationScreen]: undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { name } = useContext(NameContext); // Получаем имя из контекста

  const handlePress = () => {
    navigation.navigate(AppNavigationScreen.ProfSettings);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText variant="h1">Мой профиль</CustomText>
        <TouchableOpacity onPress={handlePress}>
          <ProfileSettings
            width={24}
            height={24}
            fill="#000"
            style={styles.iconSpacing}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconnaming}>
        <GhostIcon
          width={48}
          height={48}
          style={styles.iconSpacing}
        />
        <CustomText variant="h2" style={styles.nickname}>
          @{name || 'username'} {/* Используем имя из контекста или заглушку */}
        </CustomText>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={SoonImage}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 32,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
  },
  iconSpacing: {
    marginRight: 32,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  image: {
    width: '65%',
    height: '65%',
    position: 'absolute',
    bottom: '60%',
    left: '35%',
    transform: [{ translateX: '-32.5%' }, { translateY: '-32.5%' }],
  },
  iconnaming: {
    paddingTop: 12,
    flex: 1,
    flexDirection: 'row',
  },
  nickname: {
    fontSize: 20,
    paddingTop: 5,
    marginLeft: -25,
  },
});