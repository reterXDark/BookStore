import React, { useState } from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native'
import Icon2 from 'react-native-vector-icons/AntDesign';
import PIC from "../../Images/bookCover.jpg";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RecommendedScreen = (props) => {
    const RoutToCartScreen = () => {
        props.navigation.navigate('CartScreen')
    }
    const [DATA, setNewNoti] = useState([
        { Pic: PIC },
        { Pic: PIC },
        { Pic: PIC },
        { Pic: PIC },
        { Pic: PIC },
    ]);


    const CardFuntion = ({ item, index }) => {

        return (
            <View style={styles.booksCardsContainer}>
                <View style={styles.PictureCont}>
                    <Image source={PIC} style={{
                        width: 70,
                        height: 120,
                        alignSelf: 'center'
                    }} />
                </View>
                <View style={styles.nameAndDesCont}>
                    <Text style={{ marginLeft: 9, fontSize: 16, fontWeight: 'bold' }}>Book Name</Text>
                </View>
                <View style={styles.TextNormal}>
                    <Text style={{ marginLeft: 9, fontSize: 13, fontWeight: '100' }}>Book Description Here Book Description Here Book Description Here  Book Description Here</Text>
                </View>
                <View style={styles.nameAndDesCont}>
                    <Text style={{ marginLeft: 9, fontSize: 16, fontWeight: 'bold' }}>Nomal</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', alignItems: 'center', marginTop: windowHeight * 0.01, width: windowWidth * 0.55 }}>
                    <View style={styles.ButtonAndPriceCo}>
                        <TouchableOpacity style={styles.ButtonCart} onPress={RoutToCartScreen}>
                            <Icon2
                                name="shoppingcart"
                                size={20}
                                color='#fff'
                            />
                            <Text style={{ color: 'white' }}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.priceInfoContainer}>
                        <Text style={{ fontWeight: 'bold' }}>$18</Text>
                        <Text style={{ textDecorationLine: 'line-through', marginLeft: 4 }}>$29</Text>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <ScrollView style={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
            <ImageBackground source={require('../../Images/recombooks.jpg')} resizeMode={'cover'} style={styles.RecomendationCardContainer}>
                <Text style={{ fontSize: 22, margin: windowHeight * 0.02 }}>Recomended For You All</Text>
                <Text style={{ fontSize: 14, marginLeft: windowHeight * 0.02, width: windowWidth * 0.6 }}>Books available in multiple categories such as fiction, non-fiction, self help and memoirs. Offering up to 40% off on more than 13000 titles. </Text>
            </ImageBackground>
            <View style={styles.specialViewContainer}>
                <Text style={{ fontSize: 30, textAlign: 'center', alignSelf: 'center' }}>Special Offers</Text>
            </View>
            <View style={styles.cardsContainer}>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={DATA}
                    renderItem={CardFuntion}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.specialViewContainer}>
                <Text style={{ fontSize: 30, textAlign: 'center', alignSelf: 'center' }}>Books On Sale</Text>
            </View>
            <View style={styles.cardsContainer}>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={DATA}
                    renderItem={CardFuntion}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        </ScrollView>
    )
}

export default RecommendedScreen;


const styles = StyleSheet.create({
    RecomendationCardContainer: {
        height: windowHeight * 0.20,
        width: windowWidth * 0.9,
        // backgroundColor: 'tomato',
        alignSelf: 'center',
        marginTop: windowHeight * 0.05,
        borderRadius: 10,
        elevation: 3,
    },
    cardsContainer: {
        // backgroundColor: 'gold',
        alignSelf: 'center',
        width: windowWidth * 1.0,
        height: windowHeight * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    booksCardsContainer: {
        width: windowWidth * 0.6,
        height: windowHeight * 0.30,
        backgroundColor: '#eee',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        margin: 20
    },
    PictureCont: {
        alignSelf: 'center',
        // backgroundColor: 'tomato',
        alignSelf: 'center',
        width: windowWidth * 0.6,
        height: windowHeight * 0.15,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    ButtonCart: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'purple',
        width: windowWidth * 0.27,
        height: windowHeight * 0.035,
        borderRadius: 5
    },
    priceInfoContainer: {
        flexDirection: 'row',
    },
    nameAndDesCont: {
        width: windowWidth * 0.6,
        // backgroundColor: 'green',
    },
    TextNormal: {
        justifyContent: 'center'
    },
    specialViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        width: windowWidth * 0.5,
        height: windowHeight * 0.06,
        alignSelf: 'center',
        marginTop: windowHeight * 0.04,
        borderRadius: 10,
        elevation: 10
    }
})
