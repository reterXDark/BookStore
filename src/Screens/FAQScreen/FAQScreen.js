import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native'
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FAQScreen = (props) => {

    const BACON_IPSUM =
        'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

    const CONTENT = [
        {
            title: 'Bacon ipsum dolor amet chuck ',
            content: BACON_IPSUM,
        },
        {
            title: 'turducken landjaeger tongue spare ribs ',
            content: BACON_IPSUM,
        },
        {
            title: 'Bacon ipsum dolor amet chuck',
            content: BACON_IPSUM,
        },
        {
            title: 'turducken landjaeger tongue spare ribs',
            content: BACON_IPSUM,
        },
        {
            title: 'Fifth',
            content: BACON_IPSUM,
        },
    ];

    const SELECTORS = [
        {
            title: 'First',
            value: 0,
        },
        {
            title: 'Third',
            value: 2,
        },
        {
            title: 'None',
        },
    ];
    // Default active selector
    const [activeSections, setActiveSections] = useState([]);
    // Collapsed condition for the single collapsible
    const [collapsed, setCollapsed] = useState(true);
    // MultipleSelect is for the Multiple Expand allowed
    // True: Expand multiple at a time
    // False: One can be expand at a time
    const [multipleSelect, setMultipleSelect] = useState(false);

    const toggleExpanded = () => {
        // Toggling the state of single Collapsible
        setCollapsed(!collapsed);
    };

    const setSections = (sections) => {
        // Setting up a active section state
        setActiveSections(
            sections.includes(undefined) ? [] : sections
        );
    };

    const renderHeader = (section, _, isActive) => {
        // Accordion header view
        return (
            <Animatable.View
                duration={400}
                style={[
                    styles.header,
                    isActive ? styles.active : styles.inactive
                ]}
                transition="backgroundColor">
                <Text style={styles.headerText}>
                    {section.title}
                </Text>
            </Animatable.View>
        );
    };

    const renderContent = (section, _, isActive) => {
        // Accordion Content view
        return (
            <Animatable.View
                duration={400}
                style={[
                    styles.content,
                    isActive ? styles.active : styles.inactive
                ]}
                transition="backgroundColor">
                <Animatable.Text
                    animation={isActive ? 'bounceIn' : undefined}
                    style={{ textAlign: 'center' }}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    };



    return (

        <ScrollView contentContainerStyle={{ width: windowWidth * 1.0, height: windowHeight * 1.0, backgroundColor: '#fff' }}>
            <View style={styles.ImageContainer}>
                <ImageBackground resizeMode={'contain'} source={require('../../Images/BookStore.png')}
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
            <View style={styles.contactSloganContainer}>
                <View>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>FAQ</Text>
                </View>
            </View>

            <Accordion
                activeSections={activeSections}
                // For any default active section
                sections={CONTENT}
                // Title and content of accordion
                touchableComponent={TouchableOpacity}
                // Which type of touchable component you want
                // It can be the following Touchables
                // TouchableHighlight, TouchableNativeFeedback
                // TouchableOpacity , TouchableWithoutFeedback
                expandMultiple={multipleSelect}
                // If you want to expand multiple at a time
                renderHeader={renderHeader}
                // Header Component(View) to render
                renderContent={renderContent}
                // Content Component(View) to render
                duration={400}
                // Duration for Collapse and expand
                onChange={setSections}
            // Setting the state of active sections
            />

        </ScrollView>

    )
}

export default FAQScreen;

const styles = StyleSheet.create({
    ImageContainer: {
        // backgroundColor: '#eee',
        height: windowHeight * 0.3,
        width: windowWidth * 1.0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contactSloganContainer: {
        marginTop: windowHeight * 0.02,
        flexDirection: 'row',
        // backgroundColor: 'tomato',
        height: windowHeight * 0.1,
        width: windowWidth * 0.9,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconscontainer: {
        alignSelf: 'center',
        // backgroundColor: 'gold'
    },
    aboutUSParagraph: {
        // backgroundColor: 'tomato',
        width: windowWidth * 0.85,
        height: windowHeight * 0.3,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: windowHeight * 0.02,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: windowHeight * 0.02,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: windowHeight * 0.02,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: windowHeight * 0.03,
        textAlign: 'center',
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: windowHeight * 0.03,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
})
