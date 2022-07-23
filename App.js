import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';
import Edit from './src/screens/edit';
import Create from './src/screens/create';
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import FlashMessage from 'react-native-flash-message';

const firebaseConfig = {
  apiKey: "AIzaSyA56nEGmzYB7SQjBmJvGYbw4irugsIqywg",
  authDomain: "note-app-e6990.firebaseapp.com",
  projectId: "note-app-e6990",
  storageBucket: "note-app-e6990.appspot.com",
  messagingSenderId: "471579915621",
  appId: "1:471579915621:web:d061176fd1e178d50e9d8c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

const Stack = createNativeStackNavigator();
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  }

}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    });

    return authSubscription;
  }, [])

  return (
    <>
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {
            user ? (
              <>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Edit' component={Edit} />
                <Stack.Screen name='Create' component={Create} />
              </>
            ) : (
              <>
                <Stack.Screen name='Signin' component={Signin} />
                <Stack.Screen name='Signup' component={Signup} />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position='bottom' />
    </>
  );
}

