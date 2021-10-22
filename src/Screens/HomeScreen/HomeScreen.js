import React, { useState } from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet, Animated, Pressable, Alert, Image, TextInput, TouchableOpacity, ImageBackground, TouchableHighlight, Modal } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/AntDesign';
import PIC from '../../Images/BookStore.png'

const SigninScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const RoutNext = () => {
        props.navigation.navigate('RecommendedScreen')
    }
    const RoutToBooks = () => {
        props.navigation.navigate('BooksScreen')
        setModalVisible(!modalVisible);
    }
    const RoutToEBook = () => {
        props.navigation.navigate('EBookScreen')
        setModalVisible(!modalVisible);
    }
    const RoutToAuthers = () => {
        props.navigation.navigate('AutherScreen')
        setModalVisible(!modalVisible);
    }
    const RoutToOrderScreens = () => {
        props.navigation.navigate('OrderPDFScreen')
        setModalVisible(!modalVisible);
    }
    const RoutToStationaryScreen = () => {
        props.navigation.navigate('StationaryScreen')
        setModalVisible(!modalVisible);
    }
    const RoutToCartScreen = () => {
        props.navigation.navigate('CartScreen')
    }
    const RoutToContactUs = () => {
        props.navigation.navigate('ContactusScreen')
        setModalVisible(!modalVisible);
    }
    const RoutToAboutusScreen = () => {
        props.navigation.navigate('AboutusScreen')
        setModalVisible(!modalVisible);
    }
    const RoutToFAQScreen = () => {
        props.navigation.navigate('FAQScreen')
        setModalVisible(!modalVisible);
    }
    const RoutToGiftScreen = () => {
        props.navigation.navigate('GiftScreen')
        setModalVisible(!modalVisible);
    }
    const RoutToNewsScreen = () => {
        props.navigation.navigate('NewsScreen')
        setModalVisible(!modalVisible);
    }
    const images = [
        require('../../Images/books.jpg'),
        require('../../Images/books2.png'),
        require('../../Images/books3.jpg'),
    ]
    return (
        <ScrollView style={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
            {/* Start of modal */}
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Animated.View style={styles.modalView}>
                        <TouchableOpacity style={styles.Crossitem} onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                            <View>
                                <Icon
                                    name="cross"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <View>
                                <Icon
                                    name="home"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.023 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Home</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={RoutToBooks}>
                            <View>
                                <Icon
                                    name="book"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.023 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Books</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={RoutToEBook}>
                            <View>
                                <Icon
                                    name="text-document"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.023 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>E-Books</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={RoutToAuthers}>
                            <View>
                                <Icon2
                                    name="person"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.023 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Author</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={RoutToOrderScreens}>
                            <View>
                                <Icon3
                                    name="pdffile1"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.023 }} >
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>PDF-Orders</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={RoutToStationaryScreen}>
                            <View>
                                <Icon
                                    name="pencil"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.023 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Stationary</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={RoutToGiftScreen}>
                            <View>
                                <Icon3
                                    name="gift"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.023 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Gifts</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={RoutToNewsScreen}>
                            <View>
                                <Icon
                                    name="news"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.023 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>News</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={RoutToFAQScreen}>
                            <View>
                                <Icon3
                                    name="questioncircle"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.023 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>FAQ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={RoutToAboutusScreen}>
                            <View>
                                <Icon3
                                    name="exclamationcircle"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.023 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About Us</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={RoutToContactUs}>
                            <View>
                                <Icon3
                                    name="phone"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.023 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Contact Us</Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </Modal>
            </View>
            {/* //end modal */}
            <View style={styles.headerCOntainerLoogo}>
                <Image resizeMode='contain' source={PIC} style={{
                    alignSelf: 'center',
                    width: windowWidth * 0.45,
                    height: windowHeight * 0.25
                }} />
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
                >
                    <Icon
                        name="menu"
                        size={30}
                        color='#000'
                    />

                </TouchableOpacity>
                <TextInput placeholder='Search Books' placeholderTextColor='silver' style={styles.input} keyboardType='email-address' />
                <TouchableOpacity>
                    <Icon2
                        name="search"
                        size={22}
                        color='#000'
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={RoutToCartScreen}>
                    <Icon
                        name="shopping-cart"
                        size={22}
                        color='#000'
                    />
                </TouchableOpacity>
            </View>

            <SliderBox
                images={images}
                sliderBoxHeight={200}
                dotColor="#FFEE58"
                inactiveDotColor="#fff"
                autoplay
                circleLoop
                resizeMode={'cover'}
                ImageComponentStyle={{
                    borderRadius: 10,
                    width: windowWidth * 0.9,
                    marginTop: windowHeight * 0.03,

                }}
                imageLoadingColor="#2196F3"
            />

            <Pressable onPress={RoutNext} android_ripple={true}>
                <ImageBackground source={require('../../Images/recombooks.jpg')} resizeMode={'cover'} style={styles.RecomendationCardContainer}>
                    <Text style={{ fontSize: 22, margin: windowHeight * 0.02 }}>Recomended For You All</Text>
                    <Text style={{ fontSize: 14, marginLeft: windowHeight * 0.02, width: windowWidth * 0.6 }}>Books available in multiple categories such as fiction, non-fiction, self help and memoirs. Offering up to 40% off on more than 13000 titles. </Text>
                </ImageBackground>
            </Pressable>

            <Pressable >
                <ImageBackground source={require('../../Images/hmmm.jpg')} resizeMode={'cover'} style={styles.RecomendationCardContainer}>
                    <Text style={{ fontSize: 22, margin: windowHeight * 0.02 }}>Recomended For You Ony</Text>
                    <Text style={{ fontSize: 14, marginLeft: windowHeight * 0.02, width: windowWidth * 0.6 }}>Books available in multiple categories such as fiction, non-fiction, self help and memoirs. Offering up to 40% off on more than 13000 titles. </Text>
                </ImageBackground>
            </Pressable>
            <View></View>

        </ScrollView >
    )
}

export default SigninScreen;

const styles = StyleSheet.create({
    headerCOntainerLoogo: {
        backgroundColor: '#fff',
        height: windowHeight * 0.2,
        width: windowWidth * 1.0,
        paddingLeft: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.02,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        width: windowWidth * 0.9,
        height: windowHeight * 0.055,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input: {
        fontSize: 16,
        width: windowWidth * 0.5,
    },
    SliderImagesContainer: {
        alignSelf: 'center',
        backgroundColor: 'tomato',
        height: windowHeight * 0.23,
        width: windowWidth * 0.8
    },
    RecomendationCardContainer: {
        height: windowHeight * 0.24,
        width: windowWidth * 0.9,
        alignSelf: 'center',
        marginTop: windowHeight * 0.05,
        borderRadius: 10,
        elevation: 3,
    },
    modalView: {
        margin: windowWidth * 0.03,
        height: windowHeight * 0.62,
        width: windowWidth * 0.5,
        backgroundColor: "#fff",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: 'flex-start',
        elevation: 50,
        marginTop: windowHeight * 0.275,
        marginLeft: windowWidth * 0.08
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    item: {
        marginTop: windowHeight * 0.009,
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: windowWidth * 0.30,
    },
    Crossitem: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
