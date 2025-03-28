import { Image, StyleSheet, Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

export default function HeroHome() {

    const [fontsLoaded] = useFonts({
        'BebasNeue': require('../assets/fonts/BebasNeue.ttf'),
        'IBM': require('../assets/fonts/IBMPlexMono-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Pode exibir um loading se quiser
    }

    return (
        <>
            <ScrollView>
                <View style={tw`flex flex items-center justify-centerw-full px-4 py-8 bg-blue-400`}>
                    <Text style={[tw`font-bebas text-white mb-4 text-center`, styles.title]}>Clareza Visual para uma Vida Melhor</Text>
                    <Text style={[tw`font-bebas text-white text-center`,]}>Descubra como a nossa tecnologia pode ajudar você a monitorar e melhorar sua saúde ocular</Text>
                </View>
                <View>
                    <TouchableOpacity style={[tw`p-4 rounded-lg border-4 border-blue-400 m-4`,]}>
                        <Text style={[tw` text-blue-800 text-center`, styles.fontContent]}>Faça Seu Teste Visual</Text>
                    </TouchableOpacity>
                </View>
                <View style={tw`flex items-center bg-white`}>
                    <Image source={require('../assets/images/eye.jpg')} style={[tw`rounded-lg`, { width: 320, height: 170 }]} />
                </View>
                <View style={tw`flex items-center bg-blue-800 mt-4 p-4`}>
                    <Text style={[tw`flex flex-row items-center w-full px-4 mb-4 text-white`, styles.title]}>Social Proof</Text>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={tw`text-white pr-4`}>Mais de 50.000 usuários satisfeitos.</Text>
                    </View>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={tw`text-white pr-4`}>Reconhecido por oftalmologistas renomados.</Text>
                    </View>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={tw`text-white pr-4`}>Certificação de qualidade em exames digitais.</Text>
                    </View>
                </View>

                <View style={tw`flex items-center bg-white mt-4 px-4`}>
                    <Text style={[tw`flex flex-row items-center w-full px-4 mb-4 text-blue-500`, styles.title]}>Benefícios</Text>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/vetor_blue.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={tw`text-blue-500 pr-4`}>Diagnóstico Precoce: Identifique problemas antes que eles afetem sua visão.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/vetor_blue.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={tw`text-blue-500 pr-4`}>Monitoramento Contínuo: Acompanhe a evolução da sua saúde ocular com testes regulares.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/vetor_blue.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={tw`text-blue-500 pr-4`}>Relatórios Detalhados: Compartilhe resultados com seu oftalmologista de forma simples.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/vetor_blue.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={tw`text-blue-500 pr-4`}>Acessível para Todos: Interface intuitiva e testes adaptáveis para qualquer idade.</Text>
                    </View>
                </View>


                <View style={tw`flex items-center bg-blue-500 mt-4 p-4`}>
                    <View>
                        <Text style={[tw`flex flex-row items-center w-full px-4 mb-4 text-black`, styles.title]}>Como Funciona?</Text>
                    </View>

                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Text style={tw`border border-black rounded-full w-6 h-6 flex items-center justify-center text-center mr-2`}>1</Text>
                        <Text style={tw`text-black pr-4`}>Faça login e personalize seu perfil.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Text style={tw`border border-black rounded-full w-6 h-6 flex items-center justify-center text-center mr-2`}>2</Text>
                        <Text style={tw`text-black pr-4`}>Escolha um teste de acuidade visual ou daltonismo.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Text style={tw`border border-black rounded-full w-6 h-6 flex items-center justify-center text-center mr-2`}>3</Text>
                        <Text style={tw`text-black `}>Responda aos estímulos visuais na tela.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Text style={tw`border border-black rounded-full w-6 h-6 flex items-center justify-center text-center mr-2`}>4</Text>
                        <Text style={tw`text-black pr-4`}>Receba um relatório instantâneo sobre sua visão.</Text>
                    </View>
                    <View style={tw`flex flex-row w-full px-4 mb-4`}>
                        <Text style={tw`border border-black rounded-full w-6 h-6 flex items-center justify-center text-center mr-2`}>5</Text>
                        <Text style={tw`text-black pr-4`}>Agende uma consulta com um especialista, se necessário.</Text>
                    </View>
                </View>

                <View style={tw`flex flex items-center justify-center w-full px-4 py-8 bg-blue-800`}>
                    <Text style={[tw`font-bebas text-white mb-4 text-center`, styles.title]}>4 Hábitos Que Prejudicam a Saúde dos Seus Olhos</Text>
                    <Text style={[tw`font-bebas text-white text-center mb-4`,]}>Pequenos hábitos do dia a dia podem comprometer sua visão sem que você perceba. </Text>
                    <Link href="/habitos-prejudiciais" style={[tw`p-4 rounded-lg border-4 border-white m-4`,]}>
                        <Text style={[tw` text-white text-center`, styles.fontContent]}>Descubra quais são e como evitar!</Text>
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
        fontFamily: 'BebasNeue', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
    fontContent: {
        fontFamily: 'IBM',
    },
    title: {
        fontFamily: 'BebasNeue',
        fontSize: 25
    }
});