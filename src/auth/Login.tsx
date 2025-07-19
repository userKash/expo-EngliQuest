import { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/type';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password.');
      return;
    }

    Alert.alert('Login Info', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.descriptionDiv}>
        <Text style={styles.description}>Welcome! Sign in to continue learning</Text>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.form}>
          <View style={styles.titlediv}>
            <Text style={styles.title}>Sign in</Text>
          </View>

          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Fontisto name="email" size={20} color="#A2A2A2" style={styles.inputIcon} />
            <TextInput
              style={styles.inputField}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#9ca3af"
            />
          </View>

          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Feather name="lock" size={18} color="gray" style={styles.inputIcon} />
            <TextInput
              style={styles.inputField}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#9ca3af"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Don't have an account? </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.linkText}>Sign up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 1,
    marginTop: 120,
  },
  logo: {
    width: 228,
    height: 120,
    resizeMode: 'contain',
  },
  descriptionDiv: {
    justifyContent: 'center',
    paddingBottom: 65,
  },
  description: {
    fontSize: 14,
  },
  subcontainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    paddingVertical: 23,
  },
  form: {
    width: '100%',
  },
  titlediv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 32,
  },
  label: {
    color: '#374151',
    marginBottom: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#111827',
  },

  button: {
    backgroundColor: '#5E67CC',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#1f2937',
    fontSize: 14,
  },
  linkText: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '600',
  },
});
