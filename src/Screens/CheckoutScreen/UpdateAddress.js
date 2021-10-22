import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Pressable, Animated, Modal, TextInput, ScrollView } from 'react-native'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UpdateAddress = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
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
                    <Text style={{ fontSize: 18, marginLeft: windowWidth * 0.04, fontWeight: 'bold' }}>Update Your Address</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
                <View style={styles.modalView}>
                    <View style={styles.inputAndLabelContaineree}>
                        <View style={styles.LabelInputee}>
                            <Text style={{ fontSize: 15 }}>Where we Deliver ?</Text>
                        </View>
                        <View style={styles.inputTextAreaContaineree}>
                            <TextInput multiline={true} numberOfLines={10} placeholder={'Enter Your Delivery address'} placeholderTextColor={'#000'} keyboardType={'ascii-capable'} style={{ width: windowWidth * 0.75, alignSelf: 'center', height: windowHeight * 0.15, color: '#000' }} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.updateAddressContainer} activeOpacity={0.7} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{ color: '#fff' }}>Update</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateAddress;


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
    modalView: {
        alignSelf: 'center',
        backgroundColor: "#eee",
        // borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: 'center',
        elevation: 2,
        width: windowWidth * 1.0,
        height: windowHeight * 0.3
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
        backgroundColor: '#fff',
        alignSelf: 'center',
        width: windowWidth * 0.8,
        borderRadius: 10,
        elevation: 1
    },
    LabelInputee: {
        alignItems: 'center',
        alignSelf: 'center',
        margin: 10
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
        elevation: 3
    },
})