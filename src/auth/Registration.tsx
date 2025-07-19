import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/type';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

export default function RegistrationForm() {
  const navigation = useNavigation<NavigationProp>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration Form</Text>
      <Text style={styles.subheading}>Create your account to start learning English!</Text>

      <View style={styles.subContainer}>
        <Text style={styles.sectionTitle}>Create Account</Text>

        {/* Username */}
        <Text style={styles.label}>Username</Text>
        <View style={styles.inputWrapper}>
          <Feather name="user" size={18} color="#9ca3af" />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Email Address */}
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputWrapper}>
          <Feather name="mail" size={18} color="#9ca3af" />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <Feather name="lock" size={18} color="#9ca3af" />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#9ca3af"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather name={showPassword ? 'eye-off' : 'eye'} size={18} color="#9ca3af" />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <Feather name="lock" size={18} color="#9ca3af" />
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#9ca3af"
            secureTextEntry={!showConfirm}
          />
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
            <Feather name={showConfirm ? 'eye-off' : 'eye'} size={18} color="#9ca3af" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity
        style={styles.buttonNext}
        onPress={() => navigation.navigate('InterestSelection')}>
        <Text style={styles.linkText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 20,
  },
  subheading: {
    textAlign: 'center',
    marginBottom: 12,
    color: '#4b5563',
  },

  subContainer: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    marginTop: 30,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    marginTop: 12,
    marginBottom: 4,
    color: '#374151',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },

  linkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonNext: {
    backgroundColor: '#5E67CC',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 40,
    alignItems: 'center',
  },
});
