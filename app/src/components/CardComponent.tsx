import React, { ReactNode } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface Props {
  onPress?: () => void;
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  isShadow?: boolean;
}

const CardComponent = (props: Props) => {
  const { onPress, children, styles, isShadow } = props;
  return (
    <Pressable
      onPress={onPress}
      style={[, globalStyles.card, isShadow ? globalStyles.shadow : {}, styles]}
    >
      {children}
    </Pressable>
  );
};

export default CardComponent;
