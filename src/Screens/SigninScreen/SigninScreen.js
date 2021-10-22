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
        props.navigation.navigate('CreateAccountScreen')
    }
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <ScrollView style={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
            <View style={styles.headerCOntainerLoogo}>
                <Image resizeMode='contain' source={PIC} style={{
                    alignSelf: 'flex-start',
                    width: windowWidth * 0.55,
                    height: windowHeight * 0.3
                }} />
            </View>
            <View style={styles.SignInConatiner}>

                <View style={styles.inputContainer}>
                    <View>
                        <TextInput placeholder='Username' placeholderTextColor='#000' style={styles.input} autoFocus={true} keyboardType='ascii-capable' />
                    </View>
                    <View style={styles.userIconContainer}>
                        <Icon
                            name="user"
                            size={30}
                            color='silver'
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View>
                        <TextInput placeholder='Password' placeholderTextColor='#000' style={styles.input} secureTextEntry={true} />
                    </View>
                    <View style={styles.userIconContainer}>
                        <Icon
                            name="lock"
                            size={30}
                            color='silver'
                        />
                    </View>
                </View>

                <View style={styles.remCheckContainer}>
                    <View style={styles.bothCheckAndRemmever}>
                        <CheckBox
                            disabled={false}
                            tintColors={true ? '#fff' : '#fff'}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={{ alignSelf: 'center', }}
                        />
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 12, color: 'black' }}>Remember Me</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 15, color: 'black' }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.newHereContainer}>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>New Here</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.SignButton} activeOpacity={0.7} onPress={NextRout}>
                        <Text style={{ fontSize: 13, color: '#fff' }}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.LoginOPtionContainer}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Login With</Text>
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
                        color='#e75480'
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
        height: windowHeight * 0.3,
        width: windowWidth * 1.0,
        // backgroundColor: 'tomato',
        paddingLeft: 30
    },
    SignInConatiner: {
        marginTop: windowHeight * 0.03,
        alignSelf: 'center',
        backgroundColor: '#fff',
        height: windowHeight * 0.3,
        width: windowWidth * 1.0,
    },

    TextSignin: {
        color: 'silver',
        fontSize: 30,
        fontWeight: 'bold',
    },
    userIconContainer: {
        // backgroundColor: 'gold'
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.02,
        marginLeft: windowWidth * 0.1,
        borderBottomWidth: 2,
        borderBottomColor: 'silver',
        width: windowWidth * 0.8
    },
    input: {
        fontSize: 16,
        // backgroundColor: 'tomato',
        // borderBottomWidth: 0.3,
        // borderBottomColor: 'silver',
        width: windowWidth * 0.69,
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
        backgroundColor: '#e75480',
        width: windowWidth * 0.25,
        height: windowHeight * 0.05,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    LoginOPtionContainer: {
        marginTop: windowHeight * 0.1,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    LoginOptionall: {
        marginTop: windowHeight * 0.02,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        width: windowWidth * 0.35
    }
})
