import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Dimensions, Animated, Modal, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import PIC from "../../Images/Jon-Acuff.jpg";
import MultiSelect from 'react-native-multiple-select';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const AutherScreen = (props) => {
    const items = [
        // name key is must. It is to show the text in front
        { id: 1, name: 'angellist' },
        { id: 2, name: 'codepen' },
        { id: 3, name: 'envelope' },
        { id: 4, name: 'etsy' },
        { id: 5, name: 'facebook' },
        { id: 6, name: 'foursquare' },
        { id: 7, name: 'github-alt' },
        { id: 8, name: 'github' },
        { id: 9, name: 'gitlab' },
        { id: 10, name: 'instagram' },
    ];
    const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChange = (selectedItems) => {
        // Set Selected Items
        setSelectedItems(selectedItems);
    };


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
                    <Text style={{ fontSize: 18, marginLeft: windowWidth * 0.04, fontWeight: 'bold' }}>Auther's</Text>
                </View>
            </View>

            <ScrollView style={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>

                <View style={styles.DropDownContainer}>
                    <View>
                        <TouchableOpacity style={styles.FilterButton}>
                            <Text>Filter</Text>
                        </TouchableOpacity>
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
                            <Text style={{ marginLeft: 9, fontSize: 16, fontWeight: 'bold' }}>Auther Name</Text>
                        </View>
                        <View style={styles.TextNormal}>
                            <Text style={{ marginLeft: 9, fontSize: 13, fontWeight: '100' }}>Mongol Empire: The Conquests of Genghis Khan and the Making of Modern China by John Man</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: windowHeight * 0.01, }}>
                            <View style={styles.ButtonAndPriceCo}>
                                <TouchableOpacity style={styles.ButtonCart}>
                                    <Text style={{ color: 'white' }}>Auther Shop</Text>
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
                            <Text style={{ marginLeft: 9, fontSize: 16, fontWeight: 'bold' }}>Auther Name</Text>
                        </View>
                        <View style={styles.TextNormal}>
                            <Text style={{ marginLeft: 9, fontSize: 13, fontWeight: '100' }}>Mongol Empire: The Conquests of Genghis Khan and the Making of Modern China by John Man</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: windowHeight * 0.01, }}>
                            <View style={styles.ButtonAndPriceCo}>
                                <TouchableOpacity style={styles.ButtonCart}>
                                    <Text style={{ color: 'white' }}>Auther Shop</Text>
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

export default AutherScreen;

const styles = StyleSheet.create({
    headerBack: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: windowWidth * 1.0,
        height: windowHeight * 0.06,
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: 3
    },
    booksCardsContainer: {
        width: windowWidth * 0.4,
        height: windowHeight * 0.30,
        backgroundColor: '#fff',
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
    DropDownContainer: {
        flexDirection: 'row',
        // alignSelf: 'center',
        // backgroundColor: 'tomato',
        marginTop: windowHeight * 0.03,
        width: windowWidth * 1.0,
        height: windowHeight * 0.3,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    FilterButton: {
        backgroundColor: 'lightgreen',
        height: windowHeight * 0.05,
        width: windowWidth * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }
})
