import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

export default function FooterHome() {

    const [fontsLoaded] = useFonts({
        'Lato': require('../assets/fonts/Lato-Regular.ttf'),
        'Merriweather': require('../assets/fonts/Merriweather-VariableFont.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Pode exibir um loading se quiser
    }

    return (
        <>
            <View style={tw` bg-blue-800`}>
                <View style={tw`flex flex-row items-center justify-between w-full p-2`}>
                    
                    <Link href="/" style={[tw` text-white text-xs`, styles.fontText]}>Direitos autorais</Link>
                    <Text style={tw` text-white text-xs`}>|</Text>
                    <Link href="/" style={[tw` text-white text-xs`, styles.fontText]}>Política de Privacidade</Link>
                    <Text style={tw` text-white text-xs`}>|</Text>
                    <Link href="/" style={[tw` text-white text-xs`, styles.fontText]}>Contato</Link>
                    <Text style={tw` text-white text-xs`}>|</Text>
                    <Link href="/" style={[tw` text-white text-xs`, styles.fontText]}>Redes Sociais</Link>
                </View>
                
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    fontText: {
        fontFamily: 'Lato', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
});