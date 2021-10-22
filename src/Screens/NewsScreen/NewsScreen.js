import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, ScrollView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/Feather';
import PIC from "../../Images/122416_reviews_main.jpg";
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';



const NewsScreen = (props) => {
    const RoutToCartScreen = () => {
        props.navigation.navigate('CartScreen')
    }
    return (
        <View style={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
            <View style={styles.ImageContainer}>
                <ImageBackground resizeMode={'contain'} source={require('../../Images/NewsBanner.png')}
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

            <View style={styles.booksCardsContainer}>
                <View style={styles.PictureCont}>
                    <Image source={PIC} style={{
                        width: windowWidth * 0.9,
                        height: windowHeight * 0.14,
                        alignSelf: 'center'
                    }} />
                </View>
                <View style={styles.nameAndDesCont}>
                    <Text style={{ marginLeft: 18, fontSize: 16, fontWeight: 'bold' }}>May 01, 2021</Text>
                </View>
                <View style={styles.TextNormal}>
                    <Text style={{ marginLeft: 18, fontSize: 13, fontWeight: '100' }}>Tareekh Saltanat e Usmania By Dr Ali Muhammad Al-Salabi</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: windowHeight * 0.01, }}>
                    <View style={styles.ButtonAndPriceCo}>
                        <TouchableOpacity style={styles.ButtonCart}>
                            <Text style={{ color: 'white' }}>Read More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.booksCardsContainer}>
                <View style={styles.PictureCont}>
                    <Image source={PIC} style={{
                        width: windowWidth * 0.9,
                        height: windowHeight * 0.14,
                        alignSelf: 'center'
                    }} />
                </View>
                <View style={styles.nameAndDesCont}>
                    <Text style={{ marginLeft: 18, fontSize: 16, fontWeight: 'bold' }}>May 01, 2021</Text>
                </View>
                <View style={styles.TextNormal}>
                    <Text style={{ marginLeft: 18, fontSize: 13, fontWeight: '100' }}>Tareekh Saltanat e Usmania By Dr Ali Muhammad Al-Salabi</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: windowHeight * 0.01, }}>
                    <View style={styles.ButtonAndPriceCo}>
                        <TouchableOpacity style={styles.ButtonCart}>
                            <Text style={{ color: 'white' }}>Read More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NewsScreen;

const styles = StyleSheet.create({
    booksCardsContainer: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.30,
        backgroundColor: '#eee',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        margin: 20,
    },
    PictureCont: {
        backgroundColor: 'tomato',
        alignSelf: 'center',
        width: windowWidth * 0.9,
        height: windowHeight * 0.14,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    ButtonCart: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#e75480',
        width: windowWidth * 0.8,
        height: windowHeight * 0.035,
        borderRadius: 5
    },
    priceInfoContainer: {
        flexDirection: 'row',
    },
    nameAndDesCont: {
        width: windowWidth * 0.6,
        // backgroundColor: 'green',
        marginTop: windowHeight * 0.03,
    },
    TextNormal: {
        justifyContent: 'center'
    },
    ImageContainer: {
        // backgroundColor: '#eee',
        height: windowHeight * 0.3,
        width: windowWidth * 1.0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
