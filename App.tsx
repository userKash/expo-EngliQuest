import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/auth/Login';
import RegistrationForm from './src/auth/Registration';
import InterestSelectionScreen from './src/auth/InterestSelectionScreen';
import type { RootStackParamList } from './src/navigation/type';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Register"
          component={RegistrationForm}
          options={{
            headerBackTitle: '', // hides "Back" text on iOS
            headerStyle: {
              backgroundColor: '#fff', // white background
            },
            headerTintColor: '#000', // black arrow
            headerTitle: '', // no center title
            headerShadowVisible: false, // ✅ removes iOS bottom border
          }}
        />
        <Stack.Screen
          name="InterestSelection"
          component={InterestSelectionScreen}
          options={{
            headerBackTitle: '', // hides "Back" text on iOS
            headerStyle: {
              backgroundColor: '#fff', // white background
            },
            headerTintColor: '#000', // black arrow
            headerTitle: '', // no center title
            headerShadowVisible: false, // ✅ removes iOS bottom border
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
