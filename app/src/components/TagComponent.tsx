import React, { ReactNode } from "react";
import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import TextComponent from "./TextComponent";
import colorApp from "../contansts/colorApp";

interface Props {
  onPress: () => void;
  label: string;
  icon?: ReactNode;
  textColor?: string;
  backgroundColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const TagComponent = (props: Props) => {
  const { onPress, label, icon, textColor, backgroundColor, styles } = props;
  return (
    <Pressable onPress={onPress}
      style={[
        {
          flexDirection: "row",
          backgroundColor: backgroundColor ?? colorApp.white,
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 100,
        },
        styles,
      ]}
    >
      {icon && icon}
      <TextComponent
        text={label}
        styles={{ marginLeft: icon ? 8 : 0 }}
        color={
          textColor
            ? textColor
            : backgroundColor
            ? colorApp.white
            : colorApp.gray
        }
        size={16}
      />
    </Pressable>
  );
};

export default TagComponent;
