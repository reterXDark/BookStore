import React, { useState } from 'react'
import { View, Text, ScrollView, Dimensions, Animated, Modal, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import PIC from "../../Images/Stationary_Box.jpg";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const StationaryScreen = (props) => {
    const RoutToPublisherFilter = () => {
        props.navigation.navigate('PublishersFilter')
    }
    const RoutToYearsFilter = () => {
        props.navigation.navigate('YearsFilter')
    }
    const RoutToCatagoriesFilter = () => {
        props.navigation.navigate('CatagoriesFilter')
    }
    const RoutToPriceFilter = () => {
        props.navigation.navigate('PriceFilters')
    }
    const RoutToCartScreen = () => {
        props.navigation.navigate('CartScreen')
    }
    return (
        <View style={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>

            <View style={styles.headerBack}>
                <TouchableOpacity style={{ marginLeft: windowWidth * 0.02 }} onPress={() => { props.navigation.goBack() }}>
                    <Icon2
                        name='arrow-left'
                        size={30}
                        color='#e75480'
                    />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 18, marginLeft: windowWidth * 0.04, fontWeight: 'bold' }}>Stationary</Text>
                </View>
            </View>

            <ScrollView style={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
                <View style={styles.BrowesCatagoriesContainer}>
                    <View>
                        <Text style={{ fontSize: 20 }}>Available Stationary</Text>
                    </View>
                    <View style={styles.superCatagoriesContainer}>
                        <View style={styles.catagoriesContainer}>
                            <TouchableOpacity style={styles.catagories}>
                                <Icon2
                                    name='format-list-bulleted-type'
                                    size={25}
                                    color='#fff'
                                />
                            </TouchableOpacity>
                            <View style={{ marginTop: 6 }}>
                                <Text>All(5)</Text>
                            </View>
                        </View>
                        <View style={styles.catagoriesContainer}>
                            <TouchableOpacity style={styles.catagories}>
                                <Icon2
                                    name='pencil'
                                    size={25}
                                    color='#fff'
                                />
                            </TouchableOpacity>
                            <View style={{ marginTop: 6 }}>
                                <Text>Pencils (1)</Text>
                            </View>
                        </View>
                        <View style={styles.catagoriesContainer}>
                            <TouchableOpacity style={styles.catagories}>
                                <Icon2
                                    name='clipboard-list'
                                    size={25}
                                    color='#fff'
                                />
                            </TouchableOpacity>
                            <View style={{ marginTop: 6 }}>
                                <Text>clipboards(4)</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Start */}

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.booksCardsContainer}>
                        <View style={styles.PictureCont}>
                            <Image source={PIC} style={{
                                width: 70,
                                height: 120,
                                alignSelf: 'center'
                            }} />
                        </View>
                        <View style={styles.nameAndDesCont}>
                            <Text style={{ marginLeft: 9, fontSize: 16, fontWeight: 'bold' }}>Clip Board</Text>
                        </View>
                        <View style={styles.TextNormal}>
                            <Text style={{ marginLeft: 9, fontSize: 13, fontWeight: '100' }}>Stationary Description Here  Description Here</Text>
                        </View>
                        <View style={styles.nameAndDesCont}>
                            <Text style={{ marginLeft: 9, fontSize: 16, fontWeight: 'bold' }}>$100</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: windowHeight * 0.01, }}>
                            <View style={styles.ButtonAndPriceCo}>
                                <TouchableOpacity style={styles.ButtonCart} onPress={RoutToCartScreen}>
                                    <Icon2
                                        name="cart"
                                        size={20}
                                        color='#fff'
                                    />
                                    <Text style={{ color: 'white' }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.booksCardsContainer}>
                        <View style={styles.PictureCont}>
                            <Image source={PIC} style={{
                                width: 70,
                                height: 120,
                                alignSelf: 'center'
                            }} />
                        </View>
                        <View style={styles.nameAndDesCont}>
                            <Text style={{ marginLeft: 9, fontSize: 16, fontWeight: 'bold' }}>Pencils</Text>
                        </View>
                        <View style={styles.TextNormal}>
                            <Text style={{ marginLeft: 9, fontSize: 13, fontWeight: '100' }}>Stationary Description Here  Description Here</Text>
                        </View>
                        <View style={styles.nameAndDesCont}>
                            <Text style={{ marginLeft: 9, fontSize: 16, fontWeight: 'bold' }}>$20</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: windowHeight * 0.01, }}>
                            <View style={styles.ButtonAndPriceCo}>
                                <TouchableOpacity style={styles.ButtonCart} onPress={RoutToCartScreen}>
                                    <Icon2
                                        name="cart"
                                        size={20}
                                        color='#fff'
                                    />
                                    <Text style={{ color: 'white' }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                {/* End */}
            </ScrollView>
        </View>
    )
}

export default StationaryScreen;

const styles = StyleSheet.create({
    BrowesCatagoriesContainer: {
        marginTop: windowHeight * 0.02,
        // backgroundColor: 'tomato',
        width: windowWidth * 0.98,
        height: windowHeight * 0.15,
        alignSelf: 'center',
        padding: windowWidth * 0.02,
        justifyContent: 'center'
    },
    headerBack: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: windowWidth * 1.0,
        height: windowHeight * 0.06,
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: 3
    },
    catagories: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e75480',
        width: 50,
        height: 50,
        borderRadius: 50,
        elevation: 20
    },
    catagoriesContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    superCatagoriesContainer: {
        marginTop: windowHeight * 0.02,
        flexDirection: 'row',
        // backgroundColor: 'tomato',
        width: windowWidth * 0.8,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    booksCardsContainer: {
        width: windowWidth * 0.4,
        height: windowHeight * 0.30,
        backgroundColor: '#eee',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        margin: 20,
    },
    PictureCont: {
        // backgroundColor: 'tomato',
        alignSelf: 'center',
        width: windowWidth * 0.4,
        height: windowHeight * 0.15,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    ButtonCart: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#e75480',
        width: windowWidth * 0.23,
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
})
