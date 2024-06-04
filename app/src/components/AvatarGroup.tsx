import React from "react";
import { Image, Text, View } from "react-native";
import CircleComponent from "./CircleComponent";
import TextComponent from "./TextComponent";
import colorApp from "../contansts/colorApp";

const AvatarGroup = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 12,
      }}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <Image
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#fff",
            marginLeft: index > 0 ? -8 : 0,
          }}
          source={require("../assets/images/avt-image.jpeg")}
        />
      ))}
      <TextComponent
        text="+20 Going"
        size={12}
        color={colorApp.primary}
        styles={{ fontWeight: "bold", marginLeft: 8}}
      />
    </View>
  );
};

export default AvatarGroup;
