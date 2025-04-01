import { Image, StyleSheet, Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

export default function HeroHabitosPrejudiciais() {

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
                    <Text style={[tw`text-white mb-4 text-center text-2xl`, styles.title]}>4 Hábitos Que Prejudicam a Saúde dos Seus Olhos</Text>
                    <Text style={[tw`text-white text-center mb-4`, styles.fontText]}>Pequenos hábitos do dia a dia podem comprometer sua visão sem que você perceba. </Text>
                    <Text style={[tw` text-white text-center`, styles.fontText]}>Descubra quais são e como evitar!</Text>
                </View>
                <View style={tw`flex items-center bg-white my-4`}>
                    <Image source={require('../assets/images/woman-eye.jpeg')} style={[tw`rounded-lg`, { width: 320, height: 170 }]} />
                </View>
                <View style={tw`flex items-center bg-white p-4 mt-4`}>
                    <Text style={[tw`mb-4 text-blue-800 text-2xl`, styles.title]}>
                        Introdução
                    </Text>
                    <Text style={[tw`text-center text-blue-800 pb-4 px-2`, styles.fontText]}>
                        A visão é um dos cinco sentidos mais importantes e sensíveis do corpo humano.
                    </Text>
                    <Text style={[tw`text-center text-blue-800 px-2 pb-4`, styles.fontText]}>Em um piscar de olhos, você pode colocá-la em risco com hábitos que parecem inofensivos,
                        mas que podem prejudicar sua saúde ocular.</Text>

                    <Text style={[tw`text-center text-blue-800 px-2 pb-2 font-semibold`, styles.fontText]}>
                        Confira abaixo quatro hábitos que merecem atenção!
                    </Text>
                </View>

                <View style={tw`flex bg-blue-800 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Text style={tw`border border-white rounded-full w-6 h-6 flex items-center justify-center text-center text-white mr-2`}>1</Text>
                        <Text style={[tw`text-white pr-4`, styles.fontText]}>Coçar os Olhos com Muita Frequência</Text>
                    </View>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        A pressão ao esfregar os olhos pode lesionar áreas sensíveis e causar doenças oculares.
                    </Text>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Pode aumentar o risco de infecções ao transferir bactérias e sujeira para os olhos.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-400 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-white pr-4`, styles.fontText]}>O que fazer?</Text>
                    </View>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        A pressão ao esfregar os olhos pode lesionar áreas sensíveis e causar doenças oculares.
                    </Text>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Pode aumentar o risco de infecções ao transferir bactérias e sujeira para os olhos.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-800 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Text style={tw`border border-white rounded-full w-6 h-6 flex items-center justify-center text-center text-white mr-2`}>2</Text>
                        <Text style={[tw`text-white pr-4`, styles.fontText]}>Usar Colírios Sem Prescrição Médica</Text>
                    </View>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Os colírios são medicamentos e devem ser usados corretamente.
                    </Text>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        O uso inadequado pode causar reações alérgicas e até piorar problemas oculares.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-400 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-white pr-4`, styles.fontText]}>O que fazer?</Text>
                    </View>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Consulte um oftalmologista antes de usar qualquer colírio.
                    </Text>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Evite produtos que prometem "brilho nos olhos" sem embasamento médico.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-800 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Text style={tw`border border-white rounded-full w-6 h-6 flex items-center justify-center text-center text-white mr-2`}>3</Text>
                        <Text style={[tw`text-white pr-4`, styles.fontText]}>Ler em Ambientes Escuros</Text>
                    </View>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        A falta de iluminação exige esforço extra dos olhos, causando fadiga ocular.
                    </Text>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        O uso de telas com luz azul em ambientes escuros pode gerar dores de cabeça e irritação.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-400 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-white pr-4`, styles.fontText]}>O que fazer?</Text>
                    </View>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Leia sempre em ambientes bem iluminados.
                    </Text>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Reduza o brilho da tela do celular ou computador à noite.
                    </Text>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Use filtros de luz azul para proteger sua visão.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-800 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Text style={tw`border border-white rounded-full w-6 h-6 flex items-center justify-center text-center text-white mr-2`}>4</Text>
                        <Text style={[tw`text-white pr-4`, styles.fontText]}>Dormir com Lentes de Contato</Text>
                    </View>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Pode causar inflamação, infecção e ressecamento ocular.
                    </Text>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        A falta de oxigenação na córnea aumenta o risco de complicações.
                    </Text>
                </View>

                <View style={tw`flex bg-blue-400 p-4 pt-4`}>
                    <View style={tw`flex flex-row items-center w-full px-4 mb-4`}>
                        <Image source={require('../assets/images/white_Check.png')} style={[tw`mr-2`, { width: 20, height: 20 }]} />
                        <Text style={[tw`text-white pr-4`, styles.fontText]}>O que fazer?</Text>
                    </View>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Sempre remova as lentes antes de dormir.
                    </Text>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Use lentes apropriadas para uso prolongado, caso necessário.
                    </Text>
                    <Text style={[tw`text-white px-4 mb-4 text-justify`, styles.fontText]}>
                        Consulte um oftalmologista para orientações sobre o uso correto.
                    </Text>
                </View>

                <View style={tw`flex items-center bg-white p-4 mt-4`}>
                    <Text style={[tw`mb-4 text-blue-800 text-2xl`, styles.title]}>
                        Conclusão	
                    </Text>
                    <Text style={[tw`text-center text-blue-800 pb-2 px-2`, styles.fontText]}>
                    A saúde dos seus olhos depende de pequenos cuidados diários!
                    </Text>
                    <Text style={[tw`text-center text-blue-800 px-2 pb-4`, styles.fontText]}>Evite esses hábitos prejudiciais e faça exames regulares com um oftalmologista.</Text>

                    <Text style={[tw`text-center text-blue-800 font-semibold`, styles.fontText]}>
                    Proteja Sua Visão!
                    </Text>
                    <TouchableOpacity style={[tw`p-4 rounded-lg border-4 border-blue-400 m-4`,]}>
                        <Text style={[tw` text-blue-800 text-center`, styles.fontTextBold]}> Agende uma Consulta Agora!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    fontText: {
        fontFamily: 'Lato', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
    title: {
        fontFamily: 'Merriweather',
    },
    fontTextBold: {
        fontFamily: 'LatoBold', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
});