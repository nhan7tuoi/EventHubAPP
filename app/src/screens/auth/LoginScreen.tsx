import React from "react";
import { Image, Text, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import sizeApp from "../../contansts/sizeApp";
import { ButtonComponent, TextComponent } from "../../components";
import colorApp from "../../contansts/colorApp";

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container]}>
      <View
        style={{
          height: sizeApp.sizes.HEIGHT * 0.25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/text-logo.png")}
          style={{
            width: sizeApp.sizes.WIDTH * 0.4,
            height: sizeApp.sizes.HEIGHT * 0.2,
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          height: sizeApp.sizes.HEIGHT * 0.35,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <View>
          <TextComponent text="Sign in" color={colorApp.text} numberOfLines={1} size={24} flex={0} styles={{}}/>
        </View>
        <View>
          
        </View>
        
      </View>
    </View>
  );
};

export default LoginScreen;
