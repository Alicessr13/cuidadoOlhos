import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

export default function HeaderHome() {

    const [fontsLoaded] = useFonts({
        'Lato': require('../assets/fonts/Lato-Regular.ttf'),
        'Merriweather': require('../assets/fonts/Merriweather-VariableFont.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Pode exibir um loading se quiser
    }

    return (
        <>
            <View style={tw` bg-white`}>
                <View style={tw`flex flex-row items-center justify-between w-full p-4`}>
                    <Image source={require('../assets/images/eyeblue.png')} style={{ width: 40, height: 40 }} />
                    <Link href="/" style={[tw`text-blue-800 text-xs`, styles.fontText]}>INÍCIO</Link>
                    <Link href="/" style={[tw`text-blue-800 text-xs`, styles.fontText]}>QUEM SOMOS</Link>
                    <Link href="/" style={[tw`text-blue-800 text-xs`, styles.fontText]}>INFORMAÇÕES</Link>
                    <Link href="/login" style={[tw`text-blue-800 text-xs border-2 border-blue-800 rounded-lg p-1`, styles.fontText]}>LOGIN</Link>
                </View>
                
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    fontText: {
        fontFamily: 'Lato', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
    fontTitle: {
        fontFamily: 'Merriweather', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
});