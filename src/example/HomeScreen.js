import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    NativeModules,
    ToastAndroid
} from 'react-native'
import SimpleTourButton from './components/SimpleTourButton'
import TourButton from './components/TourButton'
import { Tip, closeTip, showTip } from './Tip'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {[
                {
                    label: 'top-left',
                    position: { top: 20, left: 20 },
                    align: 'left',
                    title: 'A simple tip',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur pulvinar varius faucibus. Suspendisse faucibus urna a dolor dictum porta.'
                },
                {
                    label: 'top-right',
                    position: { top: 20, right: 20 },
                    align: 'right',
                    title: 'A tip with pulse animation',
                    body: 'It is useful to focus in some important funcionality.',
                    showItemPulseAnimation: true
                },
                {
                    title: 'A pressable tip',
                    body: 'I become pressable if you set an action for me using: onTipPress().',
                    onTipPress: () => ToastAndroid.show('Tip pressed!', ToastAndroid.SHORT),
                    label: 'center',
                    position: { top: 300, left: 150 },
                    align: 'center'
                },
                {
                    label: 'bottom-left',
                    position: { bottom: 20, left: 20 },
                    align: 'left',
                    title: 'A tip calling another tip when pressed',
                    body: 'Press on me so a can call the TOP-LEFT tip.',
                    onTipPress: () => showTip('top-left')
                },
                {
                    label: 'bottom-right',
                    position: { bottom: 20, right: 20 },
                    align: 'right',
                    title: 'A tip firing a custom action when overlay pressed',
                    body: 'Press outside please.',
                    onDismiss: () => {
                        closeTip()
                        alert('Tip dissmissed!')
                    }
                }
            ].map((i, index) =>
                <Tip
                    key={i.label}
                    id={i.label}
                    style={{ position: 'absolute', ...i.position }}
                    title={i.title}
                    body={i.body}
                    showItemPulseAnimation={i.showItemPulseAnimation}
                    titleStyle={{ textAlign: i.align }}
                    bodyStyle={{ textAlign: i.align }}
                    renderTip={i.renderTip}
                    tipContainerStyle={{ width: index === 2 ? 300 : undefined }}
                    onTipPress={i.onTipPress}
                    onDismiss={i.onDismiss}
                    showTipPulseAnimation
                >
                    <Text
                        style={{
                            color: 'white',
                            padding: 20,
                            backgroundColor: 'green',
                            borderRadius: 5,
                            fontWeight: 'bold',
                            fontSize: 16,
                            textTransform: 'uppercase'
                        }}
                    >{i.label}</Text>
                </Tip>
            )}

            <TouchableOpacity
                onPress={() => NativeModules.DevSettings.reload()}
                style={{
                    position: 'absolute',
                    bottom: 180,
                    left: 20
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
                >Restart</Text>
            </TouchableOpacity>

            <SimpleTourButton />
            <TourButton />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
