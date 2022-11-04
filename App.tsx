import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider, Center, StatusBar } from 'native-base';

import { Routes } from './src/routes';
import { Loading } from './src/componets/Loading';
import { AuthContextProvider } from './src/contexts/AuthContext';

import { THEME } from './src/styles/theme';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Center flex={1} bgColor="gray.900">
          {fontsLoaded ? <Routes /> : <Loading />}
        </Center>
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
