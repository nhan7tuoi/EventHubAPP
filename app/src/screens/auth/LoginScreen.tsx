import React, { useState } from "react";
import { Alert, Image, Switch, Text, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import sizeApp from "../../contansts/sizeApp";
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SocialLogin,
  TextComponent,
} from "../../components";
import colorApp from "../../contansts/colorApp";
import { Lock, Sms } from "iconsax-react-native";
import authApi from "../../apis/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/authReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoadingModal } from "../../modals";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    // setIsLoading(true);
    try {
      const response = await authApi.handleAuth(
        "/login",
        { email, password },
        "post"
      );
      console.log("Response", response);
      if (response.data.message == "email") {
        Alert.alert("Email is not exist");
      } else if (response.data.message == "password") {
        Alert.alert("Password is incorrect");
      } else {
        dispatch(setUser(response.data));
        await AsyncStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.accessToken)
        );
      }
    } catch (error) {
      console.log("Error", error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <ContainerComponent isScroll>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 60,
          }}
        >
          <Image
            source={require("../../assets/images/text-logo.png")}
            style={{
              width: 162,
              height: 114,
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <TextComponent
            text="Sign in"
            color={colorApp.text}
            numberOfLines={1}
            size={24}
            flex={0}
            styles={{ fontWeight: "bold" }}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <InputComponent
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Nhan@iuh.com"
            isPassword={false}
            allowClear={true}
            affix={<Sms size={22} color={colorApp.text} />}
          />
          <InputComponent
            value={password}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            isPassword={true}
            affix={<Lock size={22} color={colorApp.text} />}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Switch
              trackColor={{ true: colorApp.primary }}
              thumbColor={colorApp.white}
              value={isRemember}
              onValueChange={() => setIsRemember(!isRemember)}
              style={{ marginRight: 10 }}
            />
            <TextComponent text="Remember Me" color={colorApp.text} size={14} />
          </View>
          <ButtonComponent
            type="text"
            text="Forgot Password?"
            onPress={() => {
              navigation.navigate("ForgotPasswordScreen");
            }}
          />
        </View>

        <View
          style={{
            marginTop: 40,
          }}
        >
          <ButtonComponent
            type="primary"
            text="Sigin in"
            styles={{ width: sizeApp.sizes.WIDTH * 0.7 }}
            onPress={handleLogin}
          />
        </View>

        <TextComponent
          text="OR"
          color={colorApp.text}
          size={22}
          styles={{ alignSelf: "center", marginTop: 30 }}
        />
        <SocialLogin />
        <View
          style={{
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TextComponent
              text="Don't have an account?"
              color={colorApp.text}
              size={16}
              styles={{ alignSelf: "center", marginRight: 5 }}
            />
            <ButtonComponent
              type="link"
              textStyles={{ fontSize: 16, fontWeight: "bold" }}
              text="Sign up"
              onPress={() => {
                navigation.navigate("RegisterScreen");
              }}
            />
          </View>
        </View>
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>
  );
};

export default LoginScreen;
