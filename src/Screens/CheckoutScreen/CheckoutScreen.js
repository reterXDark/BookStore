import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Pressable, Animated, Modal, TextInput, ScrollView } from 'react-native'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CheckoutScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const RoutToUpdateAddress = () => {
        props.navigation.navigate('UpdateAddress')
    }
    const RoutToPaymentScreen = () => {
        props.navigation.navigate('PaymentScreen')
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
                    <Text style={{ fontSize: 18, marginLeft: windowWidth * 0.04, fontWeight: 'bold' }}>Checkout Screen</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>

                <View style={styles.DevAddressContainer}>
                    <View style={styles.superCoontainer}>
                        <View style={styles.adressTextContainer}>
                            <Text>Hans hgshskga  P.O.Box 1249 5600 Nuuk Greenland</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={styles.updateAddressContainer} activeOpacity={0.7} onPress={RoutToUpdateAddress}>
                            <Text style={{ color: '#fff' }}>Update address</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View>
                                <Text>Delivery Address</Text>
                            </View>
                            <View style={{ marginLeft: windowWidth * 0.01 }}>
                                <Icon2
                                    name='check-circle'
                                    size={30}
                                    color='#e75480'
                                />
                            </View>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>
                <View>
                    <View style={styles.orderSummary}>
                        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Order Summary</Text>
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

                </View>
            </ScrollView>
            <View style={styles.OrderButtonContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <Icon1
                            name='exclamationcircleo'
                            size={30}
                            color='#000'
                        />
                    </View>
                    <View style={{ marginLeft: windowWidth * 0.02 }}>
                        <Text>Total:  Rs. 344.00</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.OrderButton} activeOpacity={0.7} onPress={RoutToPaymentScreen}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Procced To payment</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CheckoutScreen;


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
    DevAddressContainer: {
        marginTop: windowHeight * 0.02,
        alignSelf: 'center',
        width: windowWidth * 0.9,
        height: windowHeight * 0.2,
        backgroundColor: '#eee',
        borderRadius: 15,
        elevation: 5
    },
    superCoontainer: {
        marginTop: windowHeight * 0.03,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'tomato'
    },
    adressTextContainer: {
        height: windowHeight * 0.07,
        width: windowWidth * 0.3,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: windowWidth * 0.02
    },
    updateAddressContainer: {
        marginTop: windowHeight * 0.01,
        backgroundColor: '#e75480',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth * 0.3,
        height: windowHeight * 0.04,
        borderRadius: 5,
        marginLeft: windowWidth * 0.02,
        elevation: 3
    },
    updateAddressContainer: {
        marginTop: windowHeight * 0.01,
        backgroundColor: '#e75480',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth * 0.3,
        height: windowHeight * 0.04,
        borderRadius: 5,
        marginLeft: windowWidth * 0.02,
        elevation: 1
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
    orderSummary: {
        marginTop: windowHeight * 0.02,
        // backgroundColor: '#eee',
        width: windowWidth * 0.895,
        height: windowHeight * 0.06,
        alignSelf: 'center',
        justifyContent: 'center'
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
    },
    OrderButtonContainer: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        height: windowHeight * 0.10,
        width: windowWidth * 1.0,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    OrderButton: {
        backgroundColor: '#e75480',
        width: windowWidth * 0.3,
        height: windowHeight * 0.05,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3
    },


})