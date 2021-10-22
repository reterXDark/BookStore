import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../src/Screens/SplashScreen/SplashScreen';
import SigninScreen from '../src/Screens/SigninScreen/SigninScreen';
import CreateAccountScreen from '../src/Screens/CreateAccountScreen/CreateAccountScreen';
import HomeScreen from '../src/Screens/HomeScreen/HomeScreen'
import RecommendedScreen from '../src/Screens/RecommendedScreen/RecommendedScreen';
import BooksScreen from '../src/Screens/BooksScreen/BooksScreen';
import PublishersFilter from '../src/Screens/BooksScreen/PublishersFilter';
import YearsFilter from '../src/Screens/BooksScreen/YearsFilter';
import CatagoriesFilter from '../src/Screens/BooksScreen/CatagoriesFilter';
import PriceFilters from '../src/Screens/BooksScreen/PriceFilters';
import EBookScreen from '../src/Screens/EBookScreen/EBookScreen';
import AutherScreen from '../src/Screens/AutherScreen/AutherScreen';
import OrderPDFScreen from '../src/Screens/OrderPDFScreen/OrderPDFScreen';
import StationaryScreen from '../src/Screens/StationaryScreen/StationaryScreen';
import CartScreen from '../src/Screens/CartScreen/CartScreen';
import ContactusScreen from '../src/Screens/ContactusScreen/ContactusScreen';
import CheckoutScreen from '../src/Screens/CheckoutScreen/CheckoutScreen';
import UpdateAddress from '../src/Screens/CheckoutScreen/UpdateAddress';
import PaymentScreen from '../src/Screens/PaymentScreen/PaymentScreen';
import AddPaymentMethod from '../src/Screens/PaymentScreen/AddPaymentMethod';
import AboutusScreen from '../src/Screens/AboutusScreen.js/AboutusScreen';
import FAQScreen from '../src/Screens/FAQScreen/FAQScreen';
import GiftScreen from '../src/Screens/GiftScreen/GiftScreen';
import NewsScreen from '../src/Screens/NewsScreen/NewsScreen';



const Stack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen" >
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SigninScreen" component={SigninScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RecommendedScreen" component={RecommendedScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BooksScreen" component={BooksScreen} options={{ headerShown: false }} />
                <Stack.Screen name="PublishersFilter" component={PublishersFilter} options={{ headerShown: false }} />
                <Stack.Screen name="YearsFilter" component={YearsFilter} options={{ headerShown: false }} />
                <Stack.Screen name="CatagoriesFilter" component={CatagoriesFilter} options={{ headerShown: false }} />
                <Stack.Screen name="PriceFilters" component={PriceFilters} options={{ headerShown: false }} />
                <Stack.Screen name="EBookScreen" component={EBookScreen} options={{ headerShown: false }} />
                <Stack.Screen name="AutherScreen" component={AutherScreen} options={{ headerShown: false }} />
                <Stack.Screen name="OrderPDFScreen" component={OrderPDFScreen} options={{ headerShown: false }} />
                <Stack.Screen name="StationaryScreen" component={StationaryScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ContactusScreen" component={ContactusScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: false }} />
                <Stack.Screen name="UpdateAddress" component={UpdateAddress} options={{ headerShown: false }} />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: false }} />
                <Stack.Screen name="AddPaymentMethod" component={AddPaymentMethod} options={{ headerShown: false }} />
                <Stack.Screen name="AboutusScreen" component={AboutusScreen} options={{ headerShown: false }} />
                <Stack.Screen name="FAQScreen" component={FAQScreen} options={{ headerShown: false }} />
                <Stack.Screen name="GiftScreen" component={GiftScreen} options={{ headerShown: false }} />
                <Stack.Screen name="NewsScreen" component={NewsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;