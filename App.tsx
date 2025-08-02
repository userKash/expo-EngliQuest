import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text } from 'react-native';

import LoginScreen from './src/auth/Login';
import WordOfTheDayScreen from './src/screens/WordOfTheDay';
import RegistrationForm from './src/auth/Registration';
import InterestSelectionScreen from './src/auth/InterestSelectionScreen';
import type { RootStackParamList } from './src/navigation/type';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  // ✅ Global font override
  (Text as any).defaultProps = (Text as any).defaultProps || {};
  (Text as any).defaultProps.style = { fontFamily: 'PoppinsRegular' };

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WordOfTheDay"
          component={WordOfTheDayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

        <Stack.Screen
          name="Register"
          component={RegistrationForm}
          options={{
            headerBackTitle: '', // hides "Back" text on iOS
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitle: '', // no center title
            headerShadowVisible: false, // removes iOS bottom border
          }}
        />
        <Stack.Screen
          name="InterestSelection"
          component={InterestSelectionScreen}
          options={{
            headerBackTitle: '', // hides "Back" text on iOS
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitle: '', // no center title
            headerShadowVisible: false, // ✅ removes iOS bottom border
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
