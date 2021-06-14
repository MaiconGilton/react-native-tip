<h1 align="center" style="text-align: center;">react-native-tip</h1>

React Native Tip is a simple package inspired in [MaterialUI-Tooltip](https://material-ui.com/components/tooltips) that helps you to show a quick tip to the user and highlight some important item in your app. It is useful to explain the user some funcionality.


<p align="center" style="font-size: 1.2rem;">
<br/><br />
  <img src="react-native-tip.gif" alt="Demo of react-native-tip" width="50%" style="border: 0; width: 50%; min-width: 200px; max-width: 200px;" />
</p>

<p align="center" style="font-size: 1.2rem;">
  <a href="https://npmjs.org/package/react-native-tip" title="View this project on npm">
    <img src="http://img.shields.io/npm/v/react-native-tip.svg?style=flat-square" alt="npm version" />
  </a>
  <a href="https://npmjs.org/package/react-native-tip" title="View this project on npm">
    <img src="http://img.shields.io/npm/dm/react-native-tip.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://npmjs.org/package/react-native-tip" title="View this project on npm">
    <img src="http://img.shields.io/npm/l/react-native-tip.svg?style=flat-square" alt="npm licence" />
  </a>
</p>

<br/><br />
## Installation

To install the latest version of `react-native-tip` you only need to run:

```bash
npm install --save react-native-tip
```

or

```bash
yarn add react-native-tip
```
<br/><br />
## Try it out

You can find the examples above on [src/example](src/example/App.js).

<br/><br />
## Basic Usage

Import TipProvider and place it at the very bottom of your App.js as below:

```jsx
import React from "react";
import { SafeAreaView } from "react-native";
import TipProvider from "react-native-tip";

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                ... all your stuff

                <TipProvider
                    ...global options, see below
                />
            </SafeAreaView>
        );
    }
}
```
<br/><br />
## Show a tip
To show a tip you need to import the `Tip` component and wrap the component you want to highlight inside it as shown below:<br/>

```jsx
import React from "react";
import { Text } from "react-native";
import { Tip } from "react-native-tip";

class App extends React.Component {
  render() {
    return (
        <Tip
            title="Title"
            body="body"
        >
            <Text
                style={{
                    padding: 10,
                    fontWeight: 'bold',
                    fontSize: 20
                }}
            >
                Show tip
            </Text>
        </Tip>
    );
  }
}
```

When you wrap a component inside `<Tip>` it becomes a touchable. <br/>
When you press it, it shows the tip automatically by default but you can change that by setting the props `active = false`.

OBS: if the item is already a pressable component, you have to show or close the tip manually by importing `showTip()`, `closeTip()` help functions.

```js
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { showTip, closeTip, Tip } from './Tip'
import Icon from 'react-native-vector-icons/Ionicons'

const Screen = ({ navigation }) => {
    const [_showTip, setShowTip] = React.useState(true)

    return (
        <View style={styles.container}>
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
                        _showTip && showTip('heart')
                        setShowTip(false)
                    }}
                    style={{ padding: 10, borderRadius: 50 }}
                >
                    <Icon name='heart' color='red' size={35}/>
                </TouchableOpacity>
            </Tip>

            <View style={{ width: 200 }}>
                <Button
                    title="Show heart tip"
                    onPress={() => showTip('heart')}
                />
            </View>
        </View>
    )
}
```
<br/><br />
## Show a tip tour

You can create a tour with the tips you choose by setting a list of steps and pass it as a param of `showTipTour(steps)` helper function.<br/>
Each step receives a series of params specified in TipStep Props below.<br/>
You can find a complete example in [src/example/components/TourButton](src/example/components/TourButton.js)


<br/><br />
## Tip Props

| Property               | Type                                                                  | Description                                                                                                                                                                                                                                             |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                     | `string` or `number`                                                  | The tip's id, useful to control it.                                                                                                                                                                                                                     |
| title                  | `string`                                                              | The title text of your tip.                                                                                                                                                                                                                             |
| titleStyle             | `TextStyle`                                                           | Style for the title of your tip.                                                                                                                                                                                                                        |
| body                   | `string`                                                              | The body text of your tip.                                                                                                                                                                                                                              |
| bodyStyle              | `TextStyle`                                                           | Style for the body of your tip.                                                                                                                                                                                                                         |
| style                  | `ViewStyle`                                                           | Style of the item wrapper component: `<Tip style={style}>`.                                                                                                                                                                                             |
| activeItemStyle        | `ViewStyle`                                                           | Style for the item when the tip is open.>`.                                                                                                                                                                                                             |
| tipContainerStyle      | `ViewStyle`                                                           | Style for the tip. Use carefully, this can mess up the tip's position.                                                                                                                                                                                  |
| overlayOpacity         | `number`                                                              | Set opacity intensity of overlay. default `0.6`                                                                                                                                                                                                         |
| renderTip              | `({ titleStyle:TextStyle, bodyStyle:TextStyle }) => React.Component;` | Set a custom component to be rendered inside your tip. You can inject your current tip's global titleStyle and bodyStyle (if you defined one in your `TipProvider`) props direct in your custom tip component with `titleStyle` and `bodyStyle` params. |
| showItemPulseAnimation | `boolean`                                                             | Show item pulse animation when tip is open.                                                                                                                                                                                                             |
| pulseColor             | `string`                                                              | Set pulse animation color.                                                                                                                                                                                                                              |
| pulseStyle             | `ViewStyle`                                                           | Style for the pulse animation.                                                                                                                                                                                                                          |
| dismissable            | `boolean`                                                             | Allow auto dismiss on touch overlay.                                                                                                                                                                                                                    |
| active                 | `boolean`  Default = true                                             | If true the item becomes pressable and shows the tip automatically when pressed. OBS: if the item is already a pressable component, you should show or close it manually by using `showTip()`, `closeTip()` help functions.                             |
| onPressItem            | `() => void`                                                          | Trigger your custom action on item press.                                                                                                                                                                                                               |
| onTipPress             | `() => void`                                                          | Trigger your custom action on tip press.                                                                                                                                                                                                                |
| onDismiss              | `() => void`                                                          | Override dismiss natural action.                                                                                                                                                                                                                        |
 
<br/><br />
## TipProvider Props

You can set a default style for all your tips with the following:

| Property               | Type        | Description                                                                                                           |
| ---------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| tipContainerStyle      | `ViewStyle` | Set global style for the tip wrapper                                                                                  |
| titleStyle             | `TextStyle` | Set global style for the title of your tip                                                                            |
| bodyStyle              | `TextStyle` | Set global style for the body of your tip.                                                                            |
| overlayOpacity         | `number`    | Set global opacity intensity of overlay. default `0.6`                                                                |
| showItemPulseAnimation | `boolean`   | Set global pulse animation on item when tip is open.                                                                  |
| darkMode               | `boolean`   | When `true` set a dark custom color scheme for your tip. It can be overwritten by `titleStyle` and `bodyStyle` props. |
| prevButtonLabel        | `string`    | Label for `Prev` action button on tip tour mode.                                                                      |
| nextButtonLabel        | `string`    | Label for `Next` action button on tip tour mode.                                                                      |
| closeButtonLabel       | `string`    | Label for `Close` action button on tip tour mode.                                                                     |
| prevNextButtonStyle    | `ViewStyle` | Style for `Next, Prev, Close` action buttons on tip tour mode.                                                        |
| prevNextTextStyle      | `TextStyle` | Style for `Next, Prev, Close` action buttons text on tip tour mode.                                                   |
 
<br/><br />
## Helper functions

| Property    | Type                                                              | Description                                                                                                                                                                                                                                                   |
| ----------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| showTip     | `(tipId?: string, delay?: number, props?: Partial<ITip>) => void` | Show your tip, can be called anywhere in your code. * You can show a specific tip by passing its id. * You can delay your tip's appearing by passing a delay number in `milliseconds`, useful to await async tasks live navigate to another screen, default=0 |
| closeTip    | `()=>void`                                                        | Close the current opened tip, can be called anywhere in your code.                                                                                                                                                                                            |
| showTipTour | `(steps: ITipStep[])=>void`                                       | Set a tip tour sequence.                                                                                                                                                                                                                                      |
<br/><br />

## TipStep Props
| Property   | Type         | Description                                                                                            |
| ---------- | ------------ | ------------------------------------------------------------------------------------------------------ |
| id         | `string`     | Current tip id, `required`                                                                             |
| prevId     | `string`     | Previous tip id, `optional`                                                                            |
| nextId     | `string`     | Next tip id, `optional`                                                                                |
| delay      | `number`     | Timeout before triggering the tip change to next or previous one.                                      |
| prevAction | `() => void` | Action to be executed right before `Prev` button is pressed. Use it with `delay` prop for async tasks. |
| nextAction | `() => void` | Action to be executed right before `Next` button is pressed. Use it with `delay` prop for async tasks. |

<br/><br />
## License

[MIT](./LICENSE)
