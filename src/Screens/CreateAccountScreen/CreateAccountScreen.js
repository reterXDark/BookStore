import React, { useState } from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import PIC from '../../Images/BookStore.png'

const SigninScreen = (props) => {
    const NextRout = () => {
        props.navigation.navigate('HomeScreen')
    }
    return (
        <ScrollView style={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
            <View style={styles.headerCOntainerLoogo}>
                <Image resizeMode='contain' source={PIC} style={{
                    alignSelf: 'flex-start',
                    width: windowWidth * 0.55,
                    height: windowHeight * 0.25
                }} />
            </View>
            <View style={styles.SignUpConatiner}>
                <View style={styles.CASTExt}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Create An Account</Text>
                </View>
                <View style={styles.DINputContainer}>
                    <View style={styles.DoubleinputContainer}>
                        <TextInput placeholder='First Name' placeholderTextColor='silver' autoFocus={true} style={{ color: '#000' }} />
                    </View>
                    <View style={styles.DoubleinputContainer}>
                        <TextInput placeholder='Last Name' placeholderTextColor='silver' keyboardType='ascii-capable' style={{ color: '#000' }} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Email' placeholderTextColor='silver' style={styles.input} keyboardType='email-address' />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Password' placeholderTextColor='silver' style={styles.input} secureTextEntry={true} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Confirm Password' placeholderTextColor='silver' style={styles.input} keyboardType='ascii-capable' secureTextEntry={true} />
                </View>
                <TouchableOpacity style={styles.SignButton} onPress={NextRout} >
                    <Text style={{ fontSize: 13, color: '#fff' }}>Signup</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.LoginOptionall}>
                <TouchableOpacity>
                    <Icon
                        name="facebook"
                        size={30}
                        color='#3b5998'
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon2
                        name="instagram"
                        size={30}
                        color='#e95950'
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon2
                        name="twitter"
                        size={30}
                        color='#1DA1F2'
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SigninScreen;

const styles = StyleSheet.create({
    headerCOntainerLoogo: {
        backgroundColor: '#fff',
        height: windowHeight * 0.25,
        width: windowWidth * 1.0,
        // backgroundColor: 'tomato',
        paddingLeft: 30,
    },
    SignUpConatiner: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        height: windowHeight * 0.6,
        width: windowWidth * 1.0,
        justifyContent: 'center'
    },
    CASTExt: {
        // backgroundColor: 'tomato',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextSignin: {
        color: 'silver',
        fontSize: 30,
        fontWeight: 'bold',
    },

    inputContainer: {
        marginTop: windowHeight * 0.02,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        width: windowWidth * 0.8,
        height: windowHeight * 0.055,
        alignItems: 'flex-start'
    },
    DoubleinputContainer: {
        marginTop: windowHeight * 0.02,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        width: windowWidth * 0.35,
        height: windowHeight * 0.055,
        // alignItems: 'center'
    },
    input: {
        fontSize: 16,
        width: windowWidth * 0.75,
        // backgroundColor: 'tomato',
        color: '#000'
    },
    remCheckContainer: {
        alignSelf: 'center',
        marginTop: windowHeight * 0.02,
        // backgroundColor: 'tomato',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth * 0.8
    },
    bothCheckAndRemmever: {
        flexDirection: 'row'
    },
    newHereContainer: {
        // backgroundColor: 'tomato',
        width: windowWidth * 0.8,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    SignButton: {
        marginTop: windowHeight * 0.07,
        backgroundColor: '#e75480',
        width: windowWidth * 0.25,
        height: windowHeight * 0.05,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        elevation: 2
    },
    LoginOPtionContainer: {
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    LoginOptionall: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'tomato',
        width: windowWidth * 0.25,
    },
    DINputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})
