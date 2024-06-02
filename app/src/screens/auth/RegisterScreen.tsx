import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SocialLogin,
  TextComponent,
} from "../../components";
import colorApp from "../../contansts/colorApp";
import { ArrowLeft, Lock, Sms, User } from "iconsax-react-native";
import sizeApp from "../../contansts/sizeApp";
import { LoadingModal } from "../../modals";
import authApi from "../../apis/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/authReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    const data = {
      fullName,
      email,
      password
    };
    console.log("Data", data);
    setIsLoading(true);
    try {
      const response = await authApi.handleAuth("/register", data, "post");
      dispatch(setUser(response.data));
      await AsyncStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
    } catch (error) {
      console.log("Error", error);
    }
    setIsLoading(false);
  };


  return (
    <>
      <ContainerComponent isImageBackground isScroll>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("LoginScreen")}
            style={{ marginRight: 12 }}
          >
            <ArrowLeft size={24} color={colorApp.text} />
          </Pressable>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <TextComponent
            text="Sign up"
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
            value={fullName}
            placeholder="Full Name"
            onChangeText={(text) => setFullName(text)}
            isPassword={false}
            allowClear={true}
            affix={<User size={22} color={colorApp.text} />}
          />
          <InputComponent
            value={email}
            placeholder="Nhan@iuh.com"
            onChangeText={(text) => setEmail(text)}
            isPassword={false}
            allowClear={true}
            affix={<Sms size={22} color={colorApp.text} />}
          />
          <InputComponent
            value={password}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            isPassword={true}
            allowClear={true}
            affix={<Lock size={22} color={colorApp.text} />}
          />
          <InputComponent
            value={confirmPassword}
            placeholder="Confirm Password"
            onChangeText={(text) => setConfirmPassword(text)}
            isPassword={true}
            allowClear={true}
            affix={<Lock size={22} color={colorApp.text} />}
          />
        </View>

        <View
          style={{
            marginTop: 30,
          }}
        >
          <ButtonComponent
            type="primary"
            text="Sigin up"
            styles={{ width: sizeApp.sizes.WIDTH * 0.7 }}
            onPress={handleSignUp}
          />
        </View>

        <TextComponent
          text="OR"
          color={colorApp.text}
          size={22}
          styles={{ alignSelf: "center", marginTop: 40 }}
        />

        <SocialLogin />
        <View
          style={{
            marginTop: 20,
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
              text="Sign in"
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
            />
          </View>
        </View>
      </ContainerComponent>
      <LoadingModal
        visible={isLoading}
        message="Loading..."
        onClosed={() => setIsLoading(false)}
      />
    </>
  );
};

export default RegisterScreen;
