import React from "react";
import { ActivityIndicator, Image, ImageBackground, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import sizeApp from "../contansts/sizeApp";
import colorApp from "../contansts/colorApp";

const SplashScreen = () => {
  return (
    <ImageBackground
      style={[
        globalStyles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
      source={require("../assets/images/background-splash.png")}
    >
      <Image
        source={require("../assets/images/logo.png")}
        style={{ width: sizeApp.sizes.WIDTH * 0.8 }}
        resizeMode="contain"
      />
      <View style={{height:sizeApp.sizes.HEIGHT * 0.2}}/>
      <ActivityIndicator size={50} color={colorApp.primary} />
    </ImageBackground>
  );
};
export default SplashScreen;
