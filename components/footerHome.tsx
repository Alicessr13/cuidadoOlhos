import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

export default function FooterHome() {

    const [fontsLoaded] = useFonts({
        'BebasNeue': require('../assets/fonts/BebasNeue.ttf'),
        'IBM': require('../assets/fonts/IBMPlexMono-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Pode exibir um loading se quiser
    }

    return (
        <>
            <View style={tw` bg-blue-800`}>
                <View style={tw`flex flex-row items-center justify-between w-full p-2`}>
                    
                    <Link href="/" style={[tw`font-bebas text-white text-xs`, styles.fontText]}>Direitos autorais</Link>
                    <Text style={tw`font-bebas text-white text-xs`}>|</Text>
                    <Link href="/" style={[tw`font-bebas text-white text-xs`, styles.fontText]}>Política de Privacidade</Link>
                    <Text style={tw`font-bebas text-white text-xs`}>|</Text>
                    <Link href="/" style={[tw`font-bebas text-white text-xs`, styles.fontText]}>Contato</Link>
                    <Text style={tw`font-bebas text-white text-xs`}>|</Text>
                    <Link href="/" style={[tw`font-bebas text-white text-xs`, styles.fontText]}>Redes Sociais</Link>
                    <Text style={tw`font-bebas text-white text-xs`}>|</Text>
                    <Link href="/" style={[tw`font-bebas text-white text-xs`, styles.fontText]}>Newsletter</Link>
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