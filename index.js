import { Animated, Platform, View } from "react-native";
import React, { Component } from "react";

import PropTypes from "prop-types";

export default class ElevatedView extends Component {
  static propTypes = {
    elevation: PropTypes.number,
    animated: PropTypes.bool
  };
  static defaultProps = {
    elevation: 0,
    animated: false
  };

  render() {
    const { elevation, style, ...otherProps } = this.props;

    if (Platform.OS === "android") {
      if (this.props.animated)
        return (
          <Animated.View
            elevation={elevation}
            style={[{ elevation, backgroundColor: "white" }, style]}
            {...otherProps}
          >
            {this.props.children}
          </Animated.View>
        );
      else
        return (
          <View
            elevation={elevation}
            style={[{ elevation, backgroundColor: "white" }, style]}
            {...otherProps}
          >
            {this.props.children}
          </View>
        );
    }

    if (elevation === 0) {
      if (this.props.animated)
        return (
          <Animated.View style={style} {...otherProps}>
            {this.props.children}
          </Animated.View>
        );
      else
        return (
          <View style={style} {...otherProps}>
            {this.props.children}
          </View>
        );
    }

    //calculate iosShadows here
    const iosShadowElevation = {
      shadowOpacity: 0.0015 * elevation + 0.18,
      shadowRadius: 0.54 * elevation,
      shadowOffset: {
        height: 0.6 * elevation
      }
    };

    if (this.props.animated)
      return (
        <Animated.View style={[iosShadowElevation, style]} {...otherProps}>
          {this.props.children}
        </Animated.View>
      );
    else
      return (
        <View style={[iosShadowElevation, style]} {...otherProps}>
          {this.props.children}
        </View>
      );
  }
}
