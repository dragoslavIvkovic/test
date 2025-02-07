import FontAwesome from '@expo/vector-icons/FontAwesome';
 import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

 import { Provider } from 'react-redux';
import store from './store';

export {
  
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  
  initialRouteName: '(tabs)',
};


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootLayoutNav />
    </Provider>
  );
}

function RootLayoutNav() {
 
  return (
     
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
       </Stack>
     
  );
}
