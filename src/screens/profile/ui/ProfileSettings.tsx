import React, { createContext, useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavigationScreen } from '~/shared/config/navigation';
import { CustomText } from '~/shared/ui';
import Icon from 'react-native-vector-icons/Feather';

// Определяем NameContext
export const NameContext = createContext<{
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

export const ProfileSettings = () => {
  const navigation = useNavigation<NavigationProp>();
  const { name, setName } = useContext(NameContext);
  const [tempName, setTempName] = useState(name);

  const handlePress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    setName(tempName);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Icon name="arrow-left" size={24} color="#000" style={styles.arrowIcon} />
      </TouchableOpacity>
      <CustomText variant="h1">Настройки</CustomText>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={tempName}
          onChangeText={setTempName}
          placeholder="Введите имя"
        />
        <Button title="Сохранить изменения" onPress={handleSave} />
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
  inputContainer: {
    flex: 1,
    paddingTop: 20,
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
  image: {
    width: '65%',
    height: '65%',
    position: 'absolute',
    alignContent: 'center',
  },
  arrowIcon: {
    marginRight: 8,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});