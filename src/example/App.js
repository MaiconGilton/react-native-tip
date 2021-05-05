import React from 'react'
import {
    Image,
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native'
import TipProvider, { Tip } from './Tip'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import HomeScreen from './HomeScreen'
import AnotherScreen from './AnotherScreen'

export const ThemeContext = React.createContext('light')

const Tab = createMaterialTopTabNavigator()
const HomeStack = createStackNavigator()
const AnotherStack = createStackNavigator()

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home"
                options={{ title: 'react-native-tip examples' }}
                component={HomeScreen} />
        </HomeStack.Navigator>
    )
}

function AnotherStackScreen() {
    return (
        <AnotherStack.Navigator>
            <AnotherStack.Screen name="AnotherScreen" component={AnotherScreen} />
        </AnotherStack.Navigator>
    )
}

const App = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false)
    const onToggleDarkMode = () => setIsDarkMode(previousState => !previousState)

    return (
        <ThemeContext.Provider value={{ isDarkMode, onToggleDarkMode }}>
            <SafeAreaView style={styles.container}>
                <NavigationContainer>
                    <Tab.Navigator
                        tabBarPosition="bottom"
                        lazy={false}
                        tabBarOptions={{
                            activeTintColor: 'white',
                            inactiveTintColor: 'grey',
                            tabStyle: { padding: 0 },
                            iconStyle: {
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            style: { backgroundColor: '#1a1a1a' },
                            showLabel: false,
                            showIcon: true,
                            renderIndicator: () => null
                        }}
                    >
                        <Tab.Screen
                            name="HomeScreen"
                            component={HomeStackScreen}
                            options={{
                                tabBarIcon: ({ focused, color }) =>
                                    <Tip
                                        id='tab1'
                                        title="This is tab 1"
                                        body="Description..."
                                        pulseColor="white"
                                    >
                                        <View style={{ borderRadius: 50, padding: 5 }}>
                                            <Icon
                                                name='home'
                                                color={color}
                                                size={35}
                                            />
                                        </View>
                                    </Tip>
                            }}
                        />

                        <Tab.Screen
                            name="AnotherScreen"
                            component={AnotherStackScreen}
                            options={{
                                tabBarIcon: ({ focused, color }) =>
                                    <Tip
                                        id='tab2'
                                        title="This is tab 2"
                                        body="Description Description..."
                                        pulseColor="white"
                                    >
                                        <View style={{ borderRadius: 50, padding: 5 }}>
                                            <Icon
                                                name='settings-outline'
                                                color={color}
                                                size={35}
                                            />
                                        </View>
                                    </Tip>
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>

                <TipProvider
                    overlayOpacity={0.5}
                    titleStyle={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginBottom: 10
                    }}
                    bodyStyle={{
                        fontSize: 16
                    }}
                    tipContainerStyle={{
                        padding: 20,
                        borderRadius: 20,
                        maxWidth: 350,
                        elevation: 5
                    }}
                    darkMode={isDarkMode}
                    prevNextTextStyle={{
                    }}
                    prevNextButtonStyle={{
                    }}
                />
            </SafeAreaView>
        </ThemeContext.Provider>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        color: 'black',
        padding: 20,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        top: 10
    }
})
