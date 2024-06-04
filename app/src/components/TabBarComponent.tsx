import React from "react";
import { Pressable, Text, View } from "react-native";
import TextComponent from "./TextComponent";
import colorApp from "../contansts/colorApp";
import {  ArrowRight2 } from "iconsax-react-native";

interface Props {
  title: string;
  onPress: () => void;
}

const TabBarComponent = (props: Props) => {
  const { title, onPress } = props;
  return (
    <View style={{ flexDirection: "row",marginBottom:16}}>
      <TextComponent styles={{ fontWeight: "bold" }} size={18} text={title} flex={1} />
      <Pressable onPress={onPress} style={{flexDirection:'row',alignSelf:'center'}}>
        <TextComponent text="See All" color={colorApp.gray} />
        <ArrowRight2 size={20} color={colorApp.gray} variant="Bold"  />
      </Pressable>
    </View>
  );
};

export default TabBarComponent;
