import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ElevatedViewProps {
  /**
   * @default 0
   */
  elevation?: number;

  /**
   * @default true
   */
  animated?: boolean;

  /**
   * Optional styling for the container
   */
  style?: StyleProp<ViewStyle>;
}

export default class ElevatedView extends React.Component<ElevatedViewProps> {}
