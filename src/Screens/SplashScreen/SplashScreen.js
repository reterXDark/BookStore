import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Logo from '../../Images/BookStore.png';

const SplashScreen = (props) => {
    useEffect(() => {
        setTimeout(() => {
            const { navigate } = props.navigation;
            navigate("SigninScreen");
        }, 3000);
    });
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor='#e75480' barStyle='light-content' />
            <TouchableOpacity style={styles.LogoContainer} activeOpacity={0.9}>
                <Image source={Logo} resizeMode={'contain'} style={{
                    width: 350,
                    height: 350,
                }} />
            </TouchableOpacity>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    mainContainer: {
        width: windowWidth * 1.0,
        height: windowHeight * 1.0,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    LogoContainer: {
        // backgroundColor: 'gold',
        alignSelf: 'flex-start'
    },
    logoTextContainer: {
        // backgroundColor: 'gold',
        alignSelf: 'center',
    }
})
