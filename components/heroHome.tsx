import { Image, StyleSheet, Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

export default function HeroHome() {

    const [fontsLoaded] = useFonts({
        'Lato': require('../assets/fonts/Lato-Regular.ttf'),
        'Merriweather': require('../assets/fonts/Merriweather-VariableFont.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Pode exibir um loading se quiser
    }

    return (
        <>
            <ScrollView>
                <View style={tw`flex flex items-center justify-center w-full px-4 py-8 bg-blue-400`}>
                    <Text style={[tw` text-white mb-4 text-center text-3xl`, styles.fontTitle]}>Instituto Optométrico dos Olhos</Text>
                    <Text style={[tw` text-white mb-4 text-center text-lg`, styles.fontTitle]}>Clareza Visual para uma Vida Melhor</Text>
                    <Text style={[tw` text-white text-center text-center`, styles.fontText]}>Descubra como a nossa tecnologia pode ajudar você a monitorar e melhorar sua saúde ocular</Text>
                </View>
                <View>
                    <TouchableOpacity style={[tw`p-4 rounded-lg border-4 border-blue-400 m-4`,]}>
                        <Text style={[tw` text-blue-800 text-center`, styles.fontText]}>Faça Seu Teste Visual</Text>
                    </TouchableOpacity>
                </View>
                <View style={tw`flex items-center bg-white`}>
                    <Image source={require('../assets/images/eye.jpg')} style={[tw`rounded-lg`, { width: 320, height: 170 }]} />
                </View>
                <View style={tw`flex items-center bg-blue-800 mt-4 p-4`}>
                    <Text style={[tw`flex flex-row items-center w-full px-4 mb-4 text-white text-lg`, styles.fontTitle]}>Social Proof</Text>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-white pr-4`, styles.fontText]}>Mais de 50.000 usuários satisfeitos.</Text>
                    </View>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-white pr-4`, styles.fontText]}>Reconhecido por oftalmologistas renomados.</Text>
                    </View>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-white pr-4`, styles.fontText]}>Certificação de qualidade em exames digitais.</Text>
                    </View>
                </View>

                <View style={tw`flex items-center bg-white mt-4 px-4`}>
                    <Text style={[tw`flex flex-row items-center w-full px-4 mb-4 text-blue-500 text-lg`, styles.fontTitle]}>Benefícios</Text>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/vetor_blue.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-blue-500 pr-4 text-justify`, styles.fontText]}>Diagnóstico Precoce: Identifique problemas antes que eles afetem sua visão.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/vetor_blue.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-blue-500 pr-4 text-justify`, styles.fontText]}>Monitoramento Contínuo: Acompanhe a evolução da sua saúde ocular com testes regulares.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/vetor_blue.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-blue-500 pr-4 text-justify`, styles.fontText]}>Relatórios Detalhados: Compartilhe resultados com seu oftalmologista de forma simples.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/vetor_blue.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-blue-500 pr-4 text-justify`, styles.fontText]}>Acessível para Todos: Interface intuitiva e testes adaptáveis para qualquer idade.</Text>
                    </View>
                </View>


                <View style={tw`flex items-center bg-blue-500 mt-4 p-4`}>
                    <View>
                        <Text style={[tw`flex flex-row items-center w-full px-4 mb-4 text-black text-xl`, styles.fontTitle]}>Como Funciona?</Text>
                    </View>

                    <View style={tw`flex flex-row w-full items-center px-4 mb-4`}>
                        <Text style={tw`border border-black rounded-full w-6 h-6 flex items-center justify-center text-center mr-2`}>1</Text>
                        <Text style={[tw`text-black pr-4`, styles.fontText]}>Faça login e personalize seu perfil.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full items-center  px-4 mb-4`}>
                        <Text style={tw`border border-black rounded-full w-6 h-6 flex items-center justify-center text-center mr-2`}>2</Text>
                        <Text style={[tw`text-black pr-4`, styles.fontText]}>Escolha um teste de acuidade visual ou daltonismo.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full items-center  px-4 mb-4`}>
                        <Text style={tw`border border-black rounded-full w-6 h-6 flex items-center justify-center text-center mr-2`}>3</Text>
                        <Text style={[tw`text-black pr-4`, styles.fontText]}>Responda aos estímulos visuais na tela.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full items-center  px-4 mb-4`}>
                        <Text style={tw`border border-black rounded-full w-6 h-6 flex items-center justify-center text-center mr-2`}>4</Text>
                        <Text style={[tw`text-black pr-4`, styles.fontText]}>Receba um relatório instantâneo sobre sua visão.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full items-center  px-4 mb-4`}>
                        <Text style={tw`border border-black rounded-full w-6 h-6 flex items-center justify-center text-center mr-2`}>5</Text>
                        <Text style={[tw`text-black pr-4`, styles.fontText]}>Agende uma consulta com um especialista, se necessário.</Text>
                    </View>
                </View>

                <View style={tw`flex flex items-center justify-center w-full px-4 pt-8 bg-blue-800`}>
                    <Text style={[tw`text-white mb-4 text-center text-xl`, styles.fontTitle]}>4 Hábitos Que Prejudicam a Saúde dos Seus Olhos</Text>
                    <Text style={[tw`text-white text-center mb-4`, styles.fontText]}>Pequenos hábitos do dia a dia podem comprometer sua visão sem que você perceba. </Text>
                    <Link href="/habitos-prejudiciais" style={[tw`p-4 rounded-lg border-4 border-white m-4`,]}>
                        <Text style={[tw` text-white text-center`, styles.fontText]}>Descubra quais são e como evitar!</Text>
                    </Link>
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
});