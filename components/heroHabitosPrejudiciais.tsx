import { Image, StyleSheet, Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

export default function HeroHabitosPrejudiciais() {

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
                <View style={tw`flex flex items-center justify-center w-full px-4 py-8 bg-blue-400`}>
                    <Text style={[tw`text-white mb-4 text-center`, styles.title]}>4 Hábitos Que Prejudicam a Saúde dos Seus Olhos</Text>
                    <Text style={[tw`text-white text-center mb-4`,]}>Pequenos hábitos do dia a dia podem comprometer sua visão sem que você perceba. </Text>
                    <Text style={[tw` text-white text-center`]}>Descubra quais são e como evitar!</Text>
                </View>
                <View style={tw`flex items-center bg-white my-4`}>
                    <Image source={require('../assets/images/woman-eye.jpeg')} style={[tw`rounded-lg`, { width: 320, height: 170 }]} />
                </View>
                <View style={tw`flex items-center bg-white p-4 mt-4`}>
                    <Text style={[tw`mb-4 text-blue-800`, styles.title]}>
                        Introdução
                    </Text>
                    <Text style={tw`text-center text-blue-800 pb-2 px-2`}>
                        A visão é um dos cinco sentidos mais importantes e sensíveis do corpo humano.
                    </Text>
                    <Text style={tw`text-center text-blue-800 px-2 pb-4`}>Em um piscar de olhos, você pode colocá-la em risco com hábitos que parecem inofensivos,
                        mas que podem prejudicar sua saúde ocular.</Text>

                    <Text style={tw`text-center text-blue-800 font-semibold`}>
                        Confira abaixo quatro hábitos que merecem atenção!
                    </Text>
                </View>

                <View style={tw`flex bg-blue-800 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Text style={tw`border border-white rounded-full w-6 h-6 flex items-center justify-center text-center text-white mr-2`}>1</Text>
                        <Text style={tw`text-white pr-4`}>Coçar os Olhos com Muita Frequência</Text>
                    </View>
                    <Text style={tw`text-white px-4 mb-4`}>
                        A pressão ao esfregar os olhos pode lesionar áreas sensíveis e causar doenças oculares.
                    </Text>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Pode aumentar o risco de infecções ao transferir bactérias e sujeira para os olhos.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-400 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={tw`text-white pr-4`}>O que fazer?</Text>
                    </View>
                    <Text style={tw`text-white px-4 mb-4`}>
                        A pressão ao esfregar os olhos pode lesionar áreas sensíveis e causar doenças oculares.
                    </Text>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Pode aumentar o risco de infecções ao transferir bactérias e sujeira para os olhos.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-800 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Text style={tw`border border-white rounded-full w-6 h-6 flex items-center justify-center text-center text-white mr-2`}>2</Text>
                        <Text style={tw`text-white pr-4`}>Usar Colírios Sem Prescrição Médica</Text>
                    </View>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Os colírios são medicamentos e devem ser usados corretamente.
                    </Text>
                    <Text style={tw`text-white px-4 mb-4`}>
                        O uso inadequado pode causar reações alérgicas e até piorar problemas oculares.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-400 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={tw`text-white pr-4`}>O que fazer?</Text>
                    </View>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Consulte um oftalmologista antes de usar qualquer colírio.
                    </Text>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Evite produtos que prometem "brilho nos olhos" sem embasamento médico.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-800 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Text style={tw`border border-white rounded-full w-6 h-6 flex items-center justify-center text-center text-white mr-2`}>3</Text>
                        <Text style={tw`text-white pr-4`}>Ler em Ambientes Escuros</Text>
                    </View>
                    <Text style={tw`text-white px-4 mb-4`}>
                        A falta de iluminação exige esforço extra dos olhos, causando fadiga ocular.
                    </Text>
                    <Text style={tw`text-white px-4 mb-4`}>
                        O uso de telas com luz azul em ambientes escuros pode gerar dores de cabeça e irritação.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-400 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={tw`text-white pr-4`}>O que fazer?</Text>
                    </View>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Leia sempre em ambientes bem iluminados.
                    </Text>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Reduza o brilho da tela do celular ou computador à noite.
                    </Text>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Use filtros de luz azul para proteger sua visão.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-800 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Text style={tw`border border-white rounded-full w-6 h-6 flex items-center justify-center text-center text-white mr-2`}>4</Text>
                        <Text style={tw`text-white pr-4`}>Dormir com Lentes de Contato</Text>
                    </View>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Pode causar inflamação, infecção e ressecamento ocular.
                    </Text>
                    <Text style={tw`text-white px-4 mb-4`}>
                        A falta de oxigenação na córnea aumenta o risco de complicações.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-400 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={tw`text-white pr-4`}>O que fazer?</Text>
                    </View>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Sempre remova as lentes antes de dormir.
                    </Text>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Use lentes apropriadas para uso prolongado, caso necessário.
                    </Text>
                    <Text style={tw`text-white px-4 mb-4`}>
                        Consulte um oftalmologista para orientações sobre o uso correto.
                    </Text>
                </View>

                <View style={tw`flex items-center bg-white p-4 mt-4`}>
                    <Text style={[tw`mb-4 text-blue-800`, styles.title]}>
                        Conclusão	
                    </Text>
                    <Text style={tw`text-center text-blue-800 pb-2 px-2`}>
                    A saúde dos seus olhos depende de pequenos cuidados diários!
                    </Text>
                    <Text style={tw`text-center text-blue-800 px-2 pb-4`}>Evite esses hábitos prejudiciais e faça exames regulares com um oftalmologista.</Text>

                    <Text style={tw`text-center text-blue-800 font-semibold`}>
                    Proteja Sua Visão!
                    </Text>
                    <TouchableOpacity style={[tw`p-4 rounded-lg border-4 border-blue-400 m-4`,]}>
                        <Text style={[tw` text-blue-800 text-center`, styles.fontContent]}> Agende uma Consulta Agora!</Text>
                    </TouchableOpacity>
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