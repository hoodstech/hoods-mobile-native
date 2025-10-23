import React, { createContext, useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { CustomText, ActionButton } from '~/shared/ui';

// Определяем NameContext
export const NameContext = createContext<{
  name: string;
  setName: (name: string) => void;
}>({
  name: '',
  setName: () => {},
});

type RootStackParamList = {
  [key: string]: undefined;
};

export const ProfileSettings = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
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
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <CustomText variant="h1" style={styles.title}>Настройки</CustomText>
        <View style={styles.placeholder} />
      </View>
      
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <CustomText style={styles.label}>Имя пользователя</CustomText>
          <TextInput
            style={styles.input}
            value={tempName}
            onChangeText={setTempName}
            placeholder="Введите имя"
            placeholderTextColor="#999"
          />
        </View>
        
        <ActionButton style={styles.saveButton} onPress={handleSave}>
          <CustomText style={styles.saveButtonText}>Сохранить изменения</CustomText>
        </ActionButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 8,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: '#1a1a1a',
  },
  placeholder: {
    width: 40, // Same as back button to center title
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
  },
  saveButton: {
    backgroundColor: '#AC95D2',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

function setName(tempName: void) {
    throw new Error('Function not implemented.');
  }
