import React, { ReactNode } from "react";
import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import colorApp from "../contansts/colorApp";

interface Props {
  size?: number;
  children?: ReactNode;
  color?: string;
  onPress?: () => void;
  styles?: StyleProp<ViewStyle>;
}

const CircleComponent = (props: Props) => {
  const { size, children, color, onPress, styles } = props;
  return  onPress ? (
    <Pressable
      style={[
        {
          width: size ? size : 50,
          height: size ? size : 50,
          borderRadius: size ? size / 2 : 25,
          backgroundColor: color ?? colorApp.primary,
          justifyContent: "center",
          alignItems: "center",
        },
        styles,
      ]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  ) : (
    <View
      style={[
        {
          width: size ? size : 50,
          height: size ? size : 50,
          borderRadius: size ? size / 2 : 25,
          backgroundColor: color ?? colorApp.primary,
          justifyContent: "center",
          alignItems: "center",
        },
        styles,
      ]}
    >
      {children}
    </View>
  );
};

export default CircleComponent;
