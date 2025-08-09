// screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';

export default function ProfileScreen() {
  const handleLogout = () => {
    console.log('Logout clicked');
    // Temporary action
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MaterialIcons name="logout" size={20} color="red" style={styles.icon} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: { marginRight: 8 },
  logoutText: { fontSize: 16, color: '#333' },
});
