import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from "@react-native-community/checkbox";
import DocumentPicker from 'react-native-document-picker'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OrderPDFScreen = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    async function CallPicker() {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            })
            console.log(
                res.uri,
                res.type, // mime type
                res.name,
                res.size,
            )
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err
            }
        }
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
                    <Text style={{ fontSize: 18, marginLeft: windowWidth * 0.04, fontWeight: 'bold' }}>Order PDF</Text>
                </View>
            </View>

            <ScrollView>
                <View style={styles.placeorderContainer}>
                    <View style={styles.inputContainer}>
                        <View style={styles.userIconContainer}>
                            <Icon2
                                name="page-layout-footer"
                                size={20}
                                color='#000'
                            />
                        </View>
                        <View>
                            <TextInput placeholder='No. of Pages' placeholderTextColor='#000' style={styles.input} keyboardType={'ascii-capable'} />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View>
                            <TextInput placeholder='Sizes' placeholderTextColor='#000' style={styles.input} keyboardType={'ascii-capable'} />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.UploadButton} activeOpacity={0.7} onPress={CallPicker}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Upload Document</Text>
                    </TouchableOpacity>

                    <View style={{ marginLeft: windowWidth * 0.1 }}>
                        <View style={styles.superCheckContainer}>
                            <Text style={{ fontWeight: 'bold' }}>Choose the color</Text>
                            <View style={styles.bothCheckAndRemmever}>
                                <CheckBox
                                    disabled={false}
                                    tintColors={true ? '#fff' : '#fff'}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    style={{ alignSelf: 'center', }}
                                />
                                <View style={{ alignSelf: 'center' }}>
                                    <Text style={{ fontSize: 16, color: 'black' }}>black</Text>
                                </View>
                            </View>
                            <View style={styles.bothCheckAndRemmever}>
                                <CheckBox
                                    disabled={false}
                                    tintColors={true ? '#fff' : '#fff'}
                                    value={toggleCheckBox2}
                                    onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                                    style={{ alignSelf: 'center' }}
                                />
                                <View style={{ alignSelf: 'center' }}>
                                    <Text style={{ fontSize: 16, color: 'black' }}>Multi</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.OrderButtonContainer}>
                <TouchableOpacity style={styles.OrderButton} activeOpacity={0.7}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderPDFScreen;

const styles = StyleSheet.create({
    headerBack: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: windowWidth * 1.0,
        height: windowHeight * 0.05,
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: 3
    },
    OrderButtonContainer: {
        backgroundColor: '#eee',
        height: windowHeight * 0.10,
        width: windowWidth * 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    OrderButton: {
        backgroundColor: '#e75480',
        width: windowWidth * 0.5,
        height: windowHeight * 0.05,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3
    },
    UploadButton: {
        marginTop: windowHeight * 0.03,
        backgroundColor: '#e75480',
        width: windowWidth * 0.5,
        height: windowHeight * 0.05,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3
    },
    placeorderContainer: {
        marginTop: windowHeight * 0.05,
        // backgroundColor: 'tomato',
        height: windowHeight * 0.7,
        width: windowWidth * 0.9,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.02,
        borderWidth: .2,
        borderColor: '#000',
        width: windowWidth * 0.8,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 5
    },
    input: {
        fontSize: 16,
        // backgroundColor: 'tomato',
        // borderBottomWidth: 0.3,
        // borderBottomColor: 'silver',
        width: windowWidth * 0.69
    },
    superCheckContainer: {
        // backgroundColor: 'tomato',
        alignSelf: 'center',
        marginTop: windowHeight * 0.02,
        height: windowHeight * 0.4,
        width: windowWidth * 0.9,

    },
    bothCheckAndRemmever: {
        flexDirection: 'row'
    },
})
