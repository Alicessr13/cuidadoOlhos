import { Image, StyleSheet, Platform, View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

export default function HeroInformacoes() {

    const [fontsLoaded] = useFonts({
        'Lato': require('../assets/fonts/Lato-Regular.ttf'),
        'Merriweather': require('../assets/fonts/Merriweather-VariableFont.ttf'),
        'LatoBold': require('../assets/fonts/Lato-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Pode exibir um loading se quiser
    }

    return (
        <>
            <ScrollView>
                <View style={tw`flex flex items-center justify-center w-full px-4 py-8 bg-blue-400`}>
                    <Text style={[tw` text-white mb-4 text-center text-3xl`, styles.fontTitle]}>Instituto Optométrico dos Olhos</Text>
                    <Text style={[tw` text-white mb-4 text-center text-lg`, styles.fontTitle]}>Acesso a Informacoes</Text>
                    <Text style={[tw` text-white text-center text-center`, styles.fontText]}>Tudo o que você precisa saber sobre saúde ocular</Text>
                </View>
                <View style={tw`flex items-center mt-4 bg-white`}>
                    <Image source={require('../assets/images/aparelho.jpg')} style={[tw`rounded-lg`, { width: 320, height: 170 }]} />
                </View>
                <View style={tw`flex items-center mt-4 px-4`}>
                    {/* <Text style={[tw`flex flex-row items-center w-full px-4 mb-4 text-white text-lg`, styles.fontTitle]}>Social Proof</Text> */}
                    <TouchableOpacity style={tw`flex flex-row w-full bg-blue-500 px-4 mb-4 py-2 rounded-lg`}>
                        <Image source={require('../assets/images/tachinha.png')} style={[tw`mr-2 mt-1 text-white`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-white pr-4 text-base`, styles.fontTextBold]}>Doenças oculares: <Text style={[tw`text-white pr-4`, styles.fontText]}> Catarata, Glaucoma, Miopia, Daltonismo e mais.</Text></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw`flex flex-row  w-full bg-blue-500 px-4 mb-4 py-2 rounded-lg`}>
                        <Image source={require('../assets/images/tachinha.png')} style={[tw`mr-2 mt-1 text-white`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-white pr-4 text-base`, styles.fontTextBold]}>Exames e diagnósticos: <Text style={[tw`text-white pr-4`, styles.fontText]}> Como funcionam os testes visuais e oftalmológicos.</Text></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw`flex flex-row  w-full bg-blue-500 px-4 mb-4 py-2 rounded-lg`}>
                        <Image source={require('../assets/images/tachinha.png')} style={[tw`mr-2 mt-1 text-white`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-white pr-4 text-base`, styles.fontTextBold]}>Dicas e cuidados: <Text style={[tw`text-white pr-4`, styles.fontText]}> Proteção contra a luz azul, ergonomia visual e alimentação saudável.</Text></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw`flex flex-row  w-full bg-blue-500 px-4 mb-4 py-2 rounded-lg`}>
                        <Image source={require('../assets/images/tachinha.png')} style={[tw`mr-2 mt-1 text-white`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-white pr-4 text-base`, styles.fontTextBold]}>Tecnologia e visão: <Text style={[tw`text-white pr-4`, styles.fontText]}> Como a ia e os aplicativos auxiliam no monitoramento ocular.</Text></Text>
                    </TouchableOpacity>
                </View>

                <View style={tw`flex mt-4 px-4`}>
                    <Text style={[tw`flex flex-row items-center w-full mb-4 text-blue-800 text-xl`, styles.fontTitle]}>
                        Ultimos artigos
                    </Text>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={tw`flex-row`}>
                        <View style={tw`items-center justify-center w-64 mr-4 mb-4`}>
                            <Image source={require('../assets/images/aparelhodevisao.jpg')} style={[tw`rounded-lg`, { width: 190, height: 150 }]} />
                            <Text style={[tw`mt-2 text-left text-sm text-blue-800`, styles.fontTextBold]}>4 Hábitos Que Prejudicam a Saúde dos Seus Olhos</Text>
                            <Text style={[tw`mt-2 text-left text-sm text-blue-800`, styles.fontText]}>Pequenos hábitos do dia a dia podem comprometer sua visão sem que você perceba. </Text>
                            <Link href="/habitos-prejudiciais" style={[tw`p-2 mt-2 w-full rounded-lg bg-blue-500`,]}>
                                <Text style={[tw`text-sm text-center text-white`, styles.fontText]}>Descubra quais são e como evitar!</Text>
                            </Link>
                        </View>

                        <View style={tw`items-center justify-center w-64 mr-4 mb-4`}>
                            <Image source={require('../assets/images/aparelhodevisao.jpg')} style={[tw`rounded-lg`, { width: 190, height: 150 }]} />
                            <Text style={[tw`mt-2 text-left text-sm text-blue-800`, styles.fontTextBold]}>4 Hábitos Que Prejudicam a Saúde dos Seus Olhos</Text>
                            <Text style={[tw`mt-2 text-left text-sm text-blue-800`, styles.fontText]}>Pequenos hábitos do dia a dia podem comprometer sua visão sem que você perceba. </Text>
                            <Link href="/habitos-prejudiciais" style={[tw`p-2 mt-2 w-full rounded-lg bg-blue-500`,]}>
                                <Text style={[tw`text-sm text-center text-white`, styles.fontText]}>Descubra quais são e como evitar!</Text>
                            </Link>
                        </View>

                        <View style={tw`items-center justify-center w-64 mr-4 mb-4`}>
                            <Image source={require('../assets/images/aparelhodevisao.jpg')} style={[tw`rounded-lg`, { width: 190, height: 150 }]} />
                            <Text style={[tw`mt-2 text-left text-sm text-blue-800`, styles.fontTextBold]}>4 Hábitos Que Prejudicam a Saúde dos Seus Olhos</Text>
                            <Text style={[tw`mt-2 text-left text-sm text-blue-800`, styles.fontText]}>Pequenos hábitos do dia a dia podem comprometer sua visão sem que você perceba. </Text>
                            <Link href="/habitos-prejudiciais" style={[tw`p-2 mt-2 w-full rounded-lg bg-blue-500`,]}>
                                <Text style={[tw`text-sm text-center text-white`, styles.fontText]}>Descubra quais são e como evitar!</Text>
                            </Link>
                        </View>
                    </ScrollView>
                </View>

            </ScrollView>
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
        fontFamily: 'Lato', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
    fontTitle: {
        fontFamily: 'Merriweather', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
    fontTextBold: {
        fontFamily: 'LatoBold', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
});