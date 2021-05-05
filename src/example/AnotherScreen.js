import React from 'react'
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { showTip, Tip } from './Tip'
import Icon from 'react-native-vector-icons/Ionicons'

const AnotherScreen = ({ navigation }) => {
    const [_showTip, setShowTip] = React.useState(true)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Tip
                    id='heart'
                    title="Do you liked it?"
                    body="Remember to hit the heart if you enjoyed the content"
                    showItemPulseAnimation
                    pulseColor='#ff8080'
                    active={false}
                >
                    <TouchableOpacity
                        onPress={() => {
                            console.log(_showTip)
                            _showTip && showTip('heart')
                            setShowTip(false)
                        }}
                        style={{
                            padding: 10,
                            borderRadius: 50
                        }}>
                        <Icon
                            name='heart'
                            color='red'
                            size={35}
                        />
                    </TouchableOpacity>
                </Tip>
            )
        })
    }, [navigation, _showTip])

    return (
        <View style={styles.container}>
            <View style={{ width: 200 }}>
                <Button
                    title="Show heart tip"
                    onPress={() => showTip('heart')}
                />
            </View>
        </View>
    )
}

export default AnotherScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
