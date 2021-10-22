import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CartScreen = (props) => {
    const [Selectedquantity, setSelectedquantity] = useState(0);

    const RoutToCheckoutScreen = () => {
        props.navigation.navigate('CheckoutScreen')
    }

    return (
        <View style={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
            <View style={styles.headerBack}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ marginLeft: windowWidth * 0.02 }} onPress={() => { props.navigation.goBack() }}>
                        <Icon2
                            name='arrow-left'
                            size={30}
                            color='#e75480'
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 18, marginLeft: windowWidth * 0.04, fontWeight: 'bold' }}>Order PDF</Text>
                    </View>
                </View>
                <View style={styles.displayItemsCount}>
                    <View>
                        <Text style={{ fontSize: 13, marginLeft: windowWidth * 0.04, fontWeight: 'bold' }}>ITEMS({2})</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 13, marginLeft: windowWidth * 0.04, }}>TOTAL: RS.760.00)</Text>
                    </View>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }} >
                <View style={styles.showCartDetails}>
                    <View style={styles.devTimeAndDetails}>
                        <View style={styles.DevTime}>
                            <Image source={require('../../Images/bookCover.jpg')} resizeMode={'contain'} style={{
                                width: 80,
                                height: 80,
                                alignSelf: 'center',
                                margin: 10
                            }} />
                            <View style={styles.DevText}>
                                <Text>Mamal</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>RS. 790.00</Text>
                                <View style={styles.pickerContainer}>
                                    <TouchableOpacity onPress={() => setSelectedquantity(Selectedquantity + 1)} style={styles.IncreBox}><Text>+</Text></TouchableOpacity>
                                    <Text>{Selectedquantity}</Text>
                                    <TouchableOpacity onPress={() => setSelectedquantity(Selectedquantity - 1)} style={styles.DecreeBox}><Text style={{ color: '#fff' }}>-</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.devTimeAndDetails}>
                        <View style={styles.DevTime}>
                            <Image source={require('../../Images/bookCover.jpg')} resizeMode={'contain'} style={{
                                width: 80,
                                height: 80,
                                alignSelf: 'center',
                                margin: 10
                            }} />
                            <View style={styles.DevText}>
                                <Text>Mangol Empire</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>RS. 1390.00</Text>
                                <View style={styles.pickerContainer}>
                                    <TouchableOpacity onPress={() => setSelectedquantity(Selectedquantity + 1)} style={styles.IncreBox}><Text>+</Text></TouchableOpacity>
                                    <Text>{Selectedquantity}</Text>
                                    <TouchableOpacity onPress={() => setSelectedquantity(Selectedquantity - 1)} style={styles.DecreeBox}><Text style={{ color: '#fff' }}>-</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.orderDetails}>
                    <View style={styles.orderDetailsText}>
                        <Text style={{ marginLeft: windowWidth * 0.05, fontWeight: 'bold' }}>Order Details</Text>
                    </View>
                    <View style={styles.cartTotalText}>
                        <Text>Cart Total</Text>
                        <Text>RS 1450.00</Text>
                    </View>
                    <View style={styles.discount}>
                        <Text>Discount</Text>
                        <Text>RS 0.00</Text>
                    </View>
                    <View style={styles.PayableContainer}>
                        <Text style={{ marginLeft: windowWidth * 0.05, fontWeight: 'bold' }}>Total Payable</Text>
                        <Text style={{ marginRight: windowWidth * 0.05, fontWeight: 'bold' }}>RS. 0.00</Text>
                    </View>
                </View>

            </ScrollView>
            <TouchableOpacity style={styles.OrderButtonContainer} activeOpacity={0.8} onPress={RoutToCheckoutScreen}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Place Order</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    headerBack: {
        // flexDirection: 'row',
        backgroundColor: '#fff',
        width: windowWidth * 1.0,
        height: windowHeight * 0.08,
        alignItems: 'flex-start',
        justifyContent: 'center',
        elevation: 3
    },
    displayItemsCount: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'tomato',
        width: windowWidth * 0.8
    },
    OrderButtonContainer: {
        backgroundColor: '#000',
        height: windowHeight * 0.07,
        width: windowWidth * 1.0,
        alignItems: 'center',
        justifyContent: 'center',

    },

    devTimeAndDetails: {
        // marginTop: windowHeight * 0.04,
        backgroundColor: '#fff',
        width: windowWidth * 1.0,
        height: windowHeight * 0.15,
        // justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        borderBottomColor: '#eee',
        borderBottomWidth: 0.1
    },
    DevTime: {
        marginTop: windowHeight * 0.02,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowHeight * 0.1,
        alignItems: 'center',
        elevation: 3,
        borderRadius: 10
    },
    DevText: {
        marginLeft: windowWidth * 0.05,
        justifyContent: 'center'

    },
    IncreBox: {
        backgroundColor: 'lightgreen',
        width: 30,
        height: 30,
        borderRadius: 50,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    DecreeBox: {
        backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 50,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    pickerConta: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.06,
        // backgroundColor: 'gold',
        width: windowWidth * 1.0,
        height: windowHeight * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    pickerContainer: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mealInfo: {
        flexDirection: 'row'
    },
    mealInfoText: {
        justifyContent: 'center'
    },
    mealRsText: {
        marginLeft: windowWidth * 0.29,
        justifyContent: 'center'
    },
    orderDetails: {
        marginTop: windowHeight * 0.02,
        // backgroundColor: 'gold',
        width: windowWidth * 0.9,
        height: windowHeight * 0.26,
        alignSelf: 'center',
        borderWidth: 0.2,
        borderColor: '#000'
    },
    orderDetailsText: {
        backgroundColor: '#eee',
        width: windowWidth * 0.895,
        height: windowHeight * 0.06,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    cartTotalText: {
        flexDirection: 'row',
        width: windowWidth * 0.8,
        // backgroundColor: 'tomato',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: windowHeight * 0.04,
        marginTop: windowHeight * 0.03
    },
    discount: {
        flexDirection: 'row',
        width: windowWidth * 0.8,
        // backgroundColor: 'tomato',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: windowHeight * 0.04,
        marginTop: windowHeight * 0.025
    },
    PayableContainer: {
        flexDirection: 'row',
        // backgroundColor: '#eee',
        width: windowWidth * 0.9,
        height: windowHeight * 0.06,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 0.2,
        borderTopColor: '#000',

    }
})

