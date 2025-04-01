import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import HeaderEyes from '@/components/headerHome';
import HeaderHome from '@/components/headerHome';
import HeroHome from '@/components/heroHome';
import FooterHome from '@/components/footerHome';

export default function HomeScreen() {

  const [fontsLoaded] = useFonts({
    'Lato': require('../assets/fonts/Lato-Regular.ttf'),
    'Merriweather': require('../assets/fonts/Merriweather-VariableFont.ttf'),
});

  if (!fontsLoaded) {
    return null; // Pode exibir um loading se quiser
  }

  return (
    <>
      <View style={[tw`flex items-center bg-white w-full`, styles.padrao]}>
        <View style={[tw`w-full h-full`,]}>
          <HeaderHome />
          <HeroHome/>
          <FooterHome/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padrao: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  }
});

/**
 * *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root{
  font-size: 62.5%;
}
 */
