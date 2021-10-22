import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native'
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AboutusScreen = (props) => {
    return (

        <ScrollView contentContainerStyle={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
            <View style={styles.ImageContainer}>
                <ImageBackground resizeMode={'contain'} source={require('../../Images/BookStore.png')}
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
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>About Us</Text>
                </View>
            </View>
            <View style={styles.aboutUSParagraph}>
                <Text style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae maiores numquam, sapiente officia magnam. Iure culpa sapiente enim iste quia saepe voluptatibus aspernatur quam. Expedita corrupti non eius ab? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati distinctio similique id aliquam saepe corporis quis et sunt? Nihil ad quia obcaecati nesciunt odio reiciendis rerum animi dolorum aspernatur.</Text>
                <Text style={{ textAlign: 'justify', marginTop: 10 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae maiores numquam, sapiente officia magnam. Iure culpa sapiente enim iste quia saepe voluptatibus aspernatur quam. Expedita corrupti non eius ab? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati distinctio similique id aliquam saepe corporis quis et sunt? Nihil ad quia obcaecati nesciunt odio reiciendis rerum animi dolorum aspernatur.</Text>
            </View>
        </ScrollView>

    )
}

export default AboutusScreen;

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
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconscontainer: {
        alignSelf: 'center',
        // backgroundColor: 'gold'
    },
    aboutUSParagraph: {
        // backgroundColor: 'tomato',
        width: windowWidth * 0.85,
        height: windowHeight * 0.3,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',

    }
})
