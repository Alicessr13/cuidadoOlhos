import FooterHome from '@/components/footerHome';
import HeaderHome from '@/components/headerHome';
import HeroHabitosPrejudiciais from '@/components/heroHabitosPrejudiciais';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function HabitosPrejudiciais() {
    return (
        <View style={[tw`flex items-center bg-white`, styles.padrao]}>
            <View>
                <HeaderHome />
                <HeroHabitosPrejudiciais />
                <FooterHome />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customText: {
        fontFamily: 'BebasNeue', // verifique o nome correto conforme o arquivo (às vezes o nome PostScript)
        fontSize: 20,
    },
    padrao: {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
    }
});