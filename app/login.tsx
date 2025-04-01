import FooterHome from '@/components/footerHome';
import HeaderHome from '@/components/headerHome';
import HeroHabitosPrejudiciais from '@/components/heroHabitosPrejudiciais';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={[tw`flex items-center bg-white`, styles.padrao]}>
            <View style={[tw`w-full h-full flex justify-between`,]}>
                <HeaderHome />
                <View style={[tw``]}>
                    <View style={[tw`flex flex-row items-center justify-center w-full px-28 `]}>
                        <Image source={require('../assets/images/eyeblue.png')} style={[tw``, { width: 80, height: 80 }]} />
                        <Text style={[tw`text-blue-800 pl-4 text-xl`, styles.fontTitle]}>Instituto Optométrico dos Olhos</Text>
                    </View>
                    <View style={[tw`flex flex-col w-full px-4 py-8`]}>
                        <Text style={[tw`text-blue-800 pb-4 text-lg`, styles.fontText]}>Faça login na sua conta</Text>
                        <TextInput
                            style={[tw`w-full border border-gray-300 p-4 mb-4 rounded-md `, styles.fontText]}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            style={[tw`w-full border border-gray-300 p-4 mb-4 rounded-md `, styles.fontText]}
                            placeholder="Senha"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={[tw`bg-blue-400 p-4 rounded-lg`,]}><Text style={[tw`text-white text-center text-base`, styles.fontText]}>Login</Text></TouchableOpacity>
                    </View>
                </View>
                <FooterHome />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fontText: {
        fontFamily: 'Lato', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
    fontTitle: {
        fontFamily: 'Merriweather', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
    },
    padrao: {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
    }
});