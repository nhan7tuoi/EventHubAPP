import React from "react";
import { Text, View } from "react-native";
import ButtonComponent from "./ButtonComponent";
import colorApp from "../contansts/colorApp";
import sizeApp from "../contansts/sizeApp";
import { Image } from "react-native";



const SocialLogin = () => {
    const handleLoginWithGoogle = async () => {
        console.log("Login with Google");
    };
    const handleLoginWithFacebook = () => {};
  return (
    <View style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    }}>
      <ButtonComponent
        color={colorApp.white}
        textColor={colorApp.text}
        type="primary"
        text="Sigin in with Google"
        styles={{ width: sizeApp.sizes.WIDTH * 0.7 }}
        onPress={handleLoginWithGoogle}
        iconFlex="left"
        icon={
          <Image
            source={require("../assets/images/google.png")}
            style={{ width: 24, height: 24 }}
          />
        }
      />
      <ButtonComponent
        color={colorApp.white}
        textColor={colorApp.text}
        type="primary"
        text="Sigin in with Facebook"
        styles={{ width: sizeApp.sizes.WIDTH * 0.7 }}
        onPress={handleLoginWithFacebook}
        iconFlex="left"
        icon={
          <Image
            source={require("../assets/images/facebook.png")}
            style={{ width: 24, height: 24 }}
          />
        }
      />
    </View>
  );
};

export default SocialLogin;
