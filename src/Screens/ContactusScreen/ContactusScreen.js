import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native'
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ContactusScreen = (props) => {
    return (

        <ScrollView contentContainerStyle={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
            <View style={styles.ImageContainer}>
                <ImageBackground resizeMode={'contain'} source={require('../../Images/contactusBanner.png')}
                    style={{
                        width: windowWidth * 0.9,
                        height: windowHeight * 0.2,
                        alignSelf: 'center'
                    }} >
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <Icon
                            name='arrow-left'
                            size={30}
                            color='#000'
                        />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.contactSloganContainer}>
                <View>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Contact us</Text>
                    <View style={{ backgroundColor: 'white', width: windowWidth * 0.62 }}>
                        <Text style={{ fontSize: 15 }}>Call us or  send a message and we'll respond as soom as possible</Text>
                    </View>
                </View>
                <View style={styles.iconscontainer}>
                    <Icon2
                        name='message1'
                        size={30}
                        color='#000'
                    />
                </View>
            </View>

            <View style={styles.inputContactContainer}>
                <View style={styles.inputAndLabelContainer}>
                    <View style={styles.LabelInput}>
                        <Text style={{ fontSize: 15 }}>Name*</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder={'Name'} keyboardType={'ascii-capable'} style={{ width: windowWidth * 0.75, alignSelf: 'center' }} />
                    </View>
                </View>
                <View style={styles.inputAndLabelContainer}>
                    <View style={styles.LabelInput}>
                        <Text style={{ fontSize: 15 }}>Email*</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder={'email-address'} keyboardType={'email-address'} style={{ width: windowWidth * 0.75, alignSelf: 'center' }} />
                    </View>
                </View>
                <View style={styles.inputAndLabelContaineree}>
                    <View style={styles.LabelInputee}>
                        <Text style={{ fontSize: 15 }}>Message*</Text>
                    </View>
                    <View style={styles.inputTextAreaContaineree}>
                        <TextInput multiline={true} numberOfLines={10} placeholder={'Message'} keyboardType={'ascii-capable'} style={{ width: windowWidth * 0.75, alignSelf: 'center', height: windowHeight * 0.15 }} />
                    </View>
                </View>
                <TouchableOpacity style={styles.OrderButtonContainer} activeOpacity={0.8}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Contact us</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    )
}

export default ContactusScreen;

const styles = StyleSheet.create({
    ImageContainer: {
        // backgroundColor: '#eee',
        height: windowHeight * 0.3,
        width: windowWidth * 1.0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contactSloganContainer: {
        marginTop: windowHeight * 0.02,
        flexDirection: 'row',
        // backgroundColor: 'tomato',
        height: windowHeight * 0.1,
        width: windowWidth * 0.9,
        alignSelf: 'center',
        justifyContent: 'space-around'
    },
    iconscontainer: {
        alignSelf: 'center',
        // backgroundColor: 'gold'
    },
    inputContactContainer: {
        marginTop: windowHeight * 0.02,
        // backgroundColor: 'gold',
        width: windowWidth * 0.9,
        height: windowHeight * 0.5,
        alignSelf: 'center',

    },
    inputAndLabelContainer: {
        alignSelf: 'center',
        // backgroundColor: 'green',
        width: windowWidth * 0.8,
        height: windowHeight * 0.09,
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },

    LabelInput: {
        // backgroundColor: 'tomato',
        width: windowWidth * 0.15,
        // alignItems: 'center'
    },
    inputContainer: {
        backgroundColor: '#eee',
        alignSelf: 'center',
        width: windowWidth * 0.8,
        borderRadius: 5
    },
    inputTextAreaContainer: {
        backgroundColor: '#eee',
        alignSelf: 'center',
        width: windowWidth * 0.8,
        borderRadius: 5
    },
    inputAndLabelContaineree: {
        alignSelf: 'center',
        // backgroundColor: 'green',
        width: windowWidth * 0.8,
        height: 'auto',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    inputTextAreaContaineree: {
        backgroundColor: '#eee',
        alignSelf: 'center',
        width: windowWidth * 0.8,
        borderRadius: 5
    },
    LabelInputee: {
        // backgroundColor: 'tomato',
        width: windowWidth * 0.15,
        // alignItems: 'center'
    },
    OrderButtonContainer: {
        marginTop: windowHeight * 0.02,
        backgroundColor: '#000',
        height: windowHeight * 0.07,
        width: windowWidth * .5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
})
