import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Logo from '../../assets/icons/logo.png'
const SplashScreen = ({navigation}) =>{
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Menu')
        }, 3000);
    }, []);

    return (
    <LinearGradient colors={[ '#C25151','#943232', '#422B2B']} style={styles.linearGradient}>
        <View style={styles.page}>
            <Image
                style={{ width: 350, height: 250}}
                resizeMode={'contain'}
                source={Logo} />
            <Text style={styles.text}>Unklab Hymnal</Text>
        </View>
    </LinearGradient>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    page : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        fontFamily: 'Raleway-VariableFont_wght'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      }
});