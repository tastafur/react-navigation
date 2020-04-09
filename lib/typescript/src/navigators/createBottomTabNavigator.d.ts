/// <reference types="react" />
import { DefaultNavigatorOptions, TabRouterOptions } from '@react-navigation/native';
import { BottomTabNavigationConfig, BottomTabNavigationOptions, BottomTabNavigationEventMap } from '../types';
declare type Props = DefaultNavigatorOptions<BottomTabNavigationOptions> & TabRouterOptions & BottomTabNavigationConfig;
declare function BottomTabNavigator({ initialRouteName, backBehavior, children, screenOptions, ...rest }: Props): JSX.Element;
declare const _default: <ParamList extends Record<string, object | undefined>>() => import("@react-navigation/core/lib/typescript/src/types").TypedNavigator<ParamList, any, BottomTabNavigationOptions, BottomTabNavigationEventMap, typeof BottomTabNavigator>;
export default _default;
