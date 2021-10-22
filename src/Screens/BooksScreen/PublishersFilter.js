import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Icon2 from 'react-native-vector-icons/Ionicons';
import CheckBox from "@react-native-community/checkbox";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PublishersFilter = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    return (
        <View style={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
            <View style={styles.headerBack}>
                <TouchableOpacity style={{ marginLeft: windowWidth * 0.02 }} onPress={() => { props.navigation.goBack() }}>
                    <Icon2
                        name='chevron-back-outline'
                        size={30}
                        color='#e75480'
                    />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 18, marginLeft: windowWidth * 0.04 }}>Publisher's Filter</Text>
                </View>
            </View>
            <ScrollView style={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
                <View style={styles.superCheckContainer}>
                    <View style={styles.bothCheckAndRemmever}>
                        <CheckBox
                            disabled={false}
                            tintColors={true ? '#fff' : '#fff'}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={{ alignSelf: 'center', }}
                        />
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>Namal</Text>
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
                            <Text style={{ fontSize: 16, color: 'black' }}>Mangol Empire</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default PublishersFilter;

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
    superCheckContainer: {
        // backgroundColor: 'tomato',
        alignSelf: 'center',
        marginTop: windowHeight * 0.02,
        height: windowHeight * 0.4,
        width: windowWidth * 0.9
    },
    bothCheckAndRemmever: {
        flexDirection: 'row'
    },
})
