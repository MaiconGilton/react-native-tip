<h1 align="center" style="text-align: center;">react-native-tip</h1>

A React Native tip utility

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

## Installation

To install the latest version of `react-native-tip` you only need to run:

```bash
npm install --save react-native-tip
```

or

```bash
yarn add react-native-tip
```

## Try it out

You can find the examples above on [src/examples](src/examples.js)

## Basic Usage

Import TipProvider and place it at the very bottom of your App.js as bellow:

```jsx
import React from "react";
import { View } from "react-native";
import TipProvider from "react-native-tip";

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                ... all your stuff

                <TipProvider
                    // global options, see bellow
                />
            </View>
        );
    }
}
```

to show some tip you also need to import `Tip` and wrap your component inside it.

OBS: your component cannot be a touchable component like: TouchableOpacity, Button, TouchableWithoutFeedback and etc, touchable components override the touch event to call the tip.

### Show some tip

```jsx
import React from "react";
import { View, Button } from "react-native";
import { Tip, closeTip} from "react-native-tip";

class App extends React.Component {
  render() {
    return (
      <View 
        style={{
            position: 'absolute',
            bottom: 150,
            left: 10
        }}
    >
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
    </View>
    );
  }
}
```

You can also import the function `closeTip` to close any open tip programatically.


## Tip Props

| Property             | Type              | Description                                            |
| -------------------- | ----------------- | ------------------------------------------------------ |
| title                | `string`          | The title text of your tip.                            |
| message              | `string`          | The body text of your tip.                             |
| containerStyle       | `ViewStyle`       | Style for the tip bubble.                              |
| titleStyle           | `TextStyle`       | Style for the title of your tip.                       |
| bodyStyle            | `TextStyle`       | Style for the body of your tip.                        |
| overlayOpacity       | `number`          | Set opacity intensity of overlay. default `0.6`        |
| renderBubble         | `React.Component` | Set a custom component to be rendered inside your tip. |
| showPulseAnimation   | `boolean`         | Set pulse animation on item when tip is open.          |
| pulseColor           | `string`          | Set pulse animation color.                             |
| dismissable          | `boolean`         | Allow auto dismiss on touch overlay.                   |
| offsetArrowYPosition | `number`          | Adjust arrow y position, if needed.                    |
 

## TipProvider Props

You can set a default style for all your tips with the following:

| Property           | Type        | Description                                            |
| ------------------ | ----------- | ------------------------------------------------------ |
| containerStyle     | `ViewStyle` | Set global style for the tip wrapper                   |
| titleStyle         | `TextStyle` | Set global style for the title of your tip             |
| bodyStyle          | `TextStyle` | Set global style for the body of your tip.             |
| overlayOpacity     | `number`    | Set global opacity intensity of overlay. default `0.6` |
| showPulseAnimation | `boolean`   | Set global pulse animation on item when tip is open.   |

## License

[MIT](./LICENSE)
