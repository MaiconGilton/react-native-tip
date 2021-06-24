import * as React from "react";
import {
    TextStyle,
    ViewStyle,
} from "react-native";

export interface ITipStep {
    /**
     * Current tip id, `required`
    */
    id: string;
    /**
     * Previous tip id, `optional`
    */
    prevId?: string;
    /**
     * Next tip id, `optional`
    */
    nextId?: string;
    /**
     * Timeout before triggering the tip change to next or previous one. 
     *
     * Default = 0
     * 
     * Useful to wait for some other async task finish like navigating between screens.
     * Use it with `prevAction()` or `nextAction()` methods.
    */
    delay?: number;
    /**
     * Action to be executed right before `Prev` button is pressed.
     * 
     * Use it with `delay` prop for async tasks.
    */
    prevAction?: () => void;
    /**
     * Action to be executed right before `Next` button is pressed.
     *
     * Use it with `delay` prop for async tasks.
    */
    nextAction?: () => void;
    tipProps?: Omit<ITip, 'id'>;
}

export interface ITip {
    /**
     * The tip's id, useful to control it.
     */
    id: string | number;
    /**
     * The title text of your tip.
     */
    title?: string;
    /**
     * The body text of your tip.
     */
    body?: string;
    /**
    * Style of the item wrapper component: `<Tip style={style}>`.
    */
    style?: ViewStyle;
    /**
    * Style for the item when the tip is open.
    */
    activeItemStyle?: ViewStyle;
    /**
    * Style for the tip.
    *  Use carefully, this can mess up the tip position.
    */
    tipContainerStyle?: ViewStyle;
    /**
     * Style for the title of your tip.
     */
    titleStyle?: TextStyle;
    /**
     * Style for the body of your tip.
     */
    bodyStyle?: TextStyle;
    /**
     * Style for the pulse animation.
     */
    pulseStyle?: TextStyle;
    /**
     * Set opacity intensity of overlay.
     *
     * Default= `0.6`
     */
    overlayOpacity?: number;
    /**
     * Your component to be rendered.
     */
    children?: React.ReactNode;
    /**
     * Set a custom component to be rendered inside your tip.
     * You can inject your current global props in your custom component 
     * by `titleStyle` and `bodyStyle`.
     */
    renderTip?: ({ titleStyle, bodyStyle }) => React.ReactElement;
    /**
     * Show item pulse animation when tip is open.
     */
    showItemPulseAnimation?: boolean;
    /**
     * Set pulse animation color.
     */
    pulseColor?: string;
    /**
     * Allow auto dismiss on touch overlay.
     */
    dismissable?: boolean;
    /**
     * If true the item becomes pressable and shows the tip automatically when pressed.
     * 
     * OBS: if the item is already a pressable component, you should show or close it manually by using `showTip()`,`closeTip()` help functions.
     *  
     * Default = true
     */
    active?: boolean;
    /**
     * Trigger your custom action on item press.
     */
    onPressItem?: () => void;
    /**
     * Trigger your custom action on tip press.
     */
    onTipPress?: () => void;
    /**
     * Override dismiss natural action.
     */
    onDismiss?: () => void;
}

export interface ITipProvider {
    /**
     * Set global style for the tip wrapper
     */
    tipContainerStyle?: ViewStyle;
    /**
     * Set global style for the title of your tip
     */
    titleStyle?: TextStyle;
    /**
     * Set global style for the body of your tip.
     */
    bodyStyle?: TextStyle;
    /**
     * Set global opacity intensity of overlay
     *
     * Default =`0.6`
     */
    overlayOpacity?: number;
    /**
     * Set global pulse animation on item when tip is open.
     */
    showItemPulseAnimation?: boolean;
    /**
     * When `true` set a dark custom color scheme for your tip.
     * 
     * It can be overwritten by `titleStyle` and `bodyStyle` props.
     */
    darkMode?: boolean;
    /**
     * Label for `Prev` action button on tip tour mode.
     */
    prevButtonLabel?: string;
    /**
     * Label for `Next` action button on tip tour mode.
     */
    nextButtonLabel?: string;
    /**
     * Label for `Close` action button on tip tour mode.
     */
    closeButtonLabel?: string;
    /**
     * Style for `Next, Prev, Close` action buttons on tip tour mode.
     */
    prevNextButtonStyle?: ViewStyle;
    /**
     * Style for `Next, Prev, Close` action buttons text on tip tour mode.
     */
    prevNextTextStyle?: TextStyle;
}

/**
 * Close your tip, can be called anywhere in your code
 */
export function closeTip(): void;

/**
  * Show your tip, can be called anywhere in your code.
 * 
 * @param {(string)} [tipId] - Show a specific tip by passing its id.
 * @param {(number)} [delay] - Delay your tip appearing, default=0
 */
export function showTip(tipId?: string, delay?: number, props?: Partial<ITip>): void;

export function showTipTour(steps: ITipStep[]): void;

export class Tip extends React.Component<ITip> { }
export default class TipProvider extends React.Component<ITipProvider> { }
