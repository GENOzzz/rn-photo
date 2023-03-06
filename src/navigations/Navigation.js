import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [isReady, setIsready] = useState(false);

  const onReady = async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.log(e);
      } finally {
        setIsready(true);
      }
    })();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onReady}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;
