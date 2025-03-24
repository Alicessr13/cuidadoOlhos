import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

export default function HeaderHome() {

    const [fontsLoaded] = useFonts({
        'BebasNeue': require('../assets/fonts/BebasNeue.ttf'),
        'IBM': require('../assets/fonts/IBMPlexMono-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Pode exibir um loading se quiser
    }

    return (
        <>
            <View style={tw` bg-white`}>
                <View style={tw`flex flex-row items-center justify-between w-full p-4`}>
                    <Image source={require('../assets/images/eyeblue.png')} style={{ width: 40, height: 40 }} />
                    <Link href="/" style={[tw`font-bebas text-blue-800 text-sm`, styles.fontText]}>INÍCIO</Link>
                    <Link href="/" style={[tw`font-bebas text-blue-800 text-sm`, styles.fontText]}>FUNCIONALIDADES</Link>
                    <Link href="/" style={[tw`font-bebas text-blue-800 text-sm`, styles.fontText]}>DEPOIMENTOS</Link>
                    <Link href="/" style={[tw`font-bebas text-blue-800 text-sm`, styles.fontText]}>BLOG</Link>
                    <Link href="/" style={[tw`font-bebas text-blue-800 text-sm`, styles.fontText]}>CONTATO</Link>
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
    fontText: {
        fontFamily: 'BebasNeue', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
    fontContent: {
        fontFamily: 'IBM',
    },
    title:{
        fontFamily: 'BebasNeue',
        fontSize: 40
    }
});