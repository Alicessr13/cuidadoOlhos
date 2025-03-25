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
    'BebasNeue': require('../assets/fonts/BebasNeue.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Pode exibir um loading se quiser
  }

  return (
    <>
      <View style={tw`flex items-center bg-white padrao`}>
        <View>
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
  customText: {
    fontFamily: 'BebasNeue', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    fontSize: 20,
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
