import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { showTipTour } from '../Tip'
import { useNavigation } from '@react-navigation/core'

const TourButton = () => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => showTipTour([
                {
                    id: 'center',
                    prevId: 'top-right',
                    nextId: 'bottom-left'
                },
                {
                    id: 'bottom-left',
                    prevId: 'center',
                    nextId: 'bottom-right'
                },
                {
                    id: 'bottom-right',
                    prevId: 'bottom-left',
                    nextId: 'tab1'
                },
                {
                    id: 'tab1',
                    prevId: 'bottom-right',
                    nextId: 'tab2'
                },
                {
                    id: 'tab2',
                    prevId: 'tab1',
                    nextId: 'heart',
                    delay: 300,
                    nextAction: () => navigation.navigate('AnotherScreen'),
                    prevAction: () => navigation.navigate('HomeScreen')
                },
                {
                    id: 'heart',
                    prevId: 'tab2',
                    nextId: 'top-left',
                    delay: 300,
                    nextAction: () => navigation.navigate('HomeScreen')
                },
                {
                    id: 'top-left',
                    prevId: 'heart',
                    delay: 300,
                    prevAction: () => navigation.navigate('AnotherScreen')
                }
            ])}
            style={{
                position: 'absolute',
                top: 180,
                left: 20,
                borderWidth: 1,
                borderRadius: 5
            }}
        >
            <Text
                style={{
                    padding: 10,
                    borderRadius: 5,
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: 'black',
                    textTransform: 'uppercase'
                }}
            >Start tip tour</Text>
        </TouchableOpacity>
    )
}

export default TourButton
