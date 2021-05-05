import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { showTipTour } from '../Tip'

const SimpleTourButton = () => {
    return (
        <TouchableOpacity
            onPress={() => showTipTour([
                {
                    id: 'top-left',
                    nextId: 'top-right'
                },
                {
                    id: 'top-right',
                    prevId: 'top-left',
                    nextId: 'bottom-left'
                },
                {
                    id: 'bottom-left',
                    prevId: 'top-right',
                    nextId: 'bottom-right'
                },
                {
                    id: 'bottom-right',
                    prevId: 'bottom-left'
                }
            ])}
            style={{
                position: 'absolute',
                top: 120,
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
            >Start simple tip tour</Text>
        </TouchableOpacity>
    )
}

export default SimpleTourButton
