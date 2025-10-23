import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View, Image, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { CustomText, ActionButton } from '~/shared/ui'

export const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Андрей Иванов',
    email: 'andrew@example.com',
    phone: '+123 (999) 123-45-67',
    location: 'Coppengagen, Denmark'
  })

  const [stats] = useState({
    favorites: 8,
    orders: 5,
    reviews: 4
  })

  const handleEditProfile = () => {
    Alert.alert('Редактирование профиля', 'Функция в разработке')
  }

  const handleSettings = () => {
    Alert.alert('Настройки', 'Функция в разработке')
  }

  const handleLogout = () => {
    Alert.alert(
      'Выход из аккаунта',
      'Вы уверены, что хотите выйти?',
      [
        { text: 'Отмена', style: 'cancel' },
        { text: 'Выйти', style: 'destructive', onPress: () => console.log('Logout') }
      ]
    )
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <CustomText variant="h1" style={styles.headerTitle}>Профиль</CustomText>
        <TouchableOpacity onPress={handleSettings} style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png' }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="camera" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.userInfo}>
            <CustomText variant="h2" style={styles.userName}>{userInfo.name}</CustomText>
            <CustomText style={styles.userEmail}>{userInfo.email}</CustomText>
          </View>
        </View>
        
        <ActionButton 
          style={styles.editButton}
          onPress={handleEditProfile}
        >
          <CustomText style={styles.editButtonText}>Редактировать профиль</CustomText>
        </ActionButton>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <CustomText variant="h2" style={styles.statNumber}>{stats.favorites}</CustomText>
          <CustomText style={styles.statLabel}>Избранное</CustomText>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <CustomText variant="h2" style={styles.statNumber}>{stats.orders}</CustomText>
          <CustomText style={styles.statLabel}>Заказы</CustomText>
        </View>
        <View style={styles.statDivider} />
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Ionicons name="person-outline" size={20} color="#666" />
            <CustomText style={styles.menuItemText}>Личная информация</CustomText>
          </View>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Ionicons name="location-outline" size={20} color="#666" />
            <CustomText style={styles.menuItemText}>Адреса доставки</CustomText>
          </View>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Ionicons name="card-outline" size={20} color="#666" />
            <CustomText style={styles.menuItemText}>Способы оплаты</CustomText>
          </View>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Ionicons name="notifications-outline" size={20} color="#666" />
            <CustomText style={styles.menuItemText}>Уведомления</CustomText>
          </View>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Ionicons name="help-circle-outline" size={20} color="#666" />
            <CustomText style={styles.menuItemText}>Помощь и поддержка</CustomText>
          </View>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Ionicons name="document-text-outline" size={20} color="#666" />
            <CustomText style={styles.menuItemText}>Условия использования</CustomText>
          </View>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <View style={styles.logoutContainer}>
        <ActionButton 
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={20} color="#ff4757" />
          <CustomText style={styles.logoutText}>Выйти из аккаунта</CustomText>
        </ActionButton>
      </View>

      <View style={styles.bottomSpacer} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  headerTitle: {
    color: '#1a1a1a',
  },
  settingsButton: {
    padding: 8,
  },
  profileCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#AC95D2',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#1a1a1a',
    marginBottom: 4,
  },
  userEmail: {
    color: '#666',
    fontSize: 14,
  },
  editButton: {
    backgroundColor: '#AC95D2',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    color: '#AC95D2',
    marginBottom: 4,
  },
  statLabel: {
    color: '#666',
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
  menuContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 12,
    color: '#1a1a1a',
    fontSize: 16,
  },
  logoutContainer: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  logoutButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ff4757',
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: '#ff4757',
    fontWeight: '600',
    marginLeft: 8,
  },
  bottomSpacer: {
    height: 100,
  },
})
