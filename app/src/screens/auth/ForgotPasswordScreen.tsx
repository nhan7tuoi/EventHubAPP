import React, { useEffect, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { ButtonComponent, ContainerComponent, InputComponent, TextComponent } from "../../components";
import { ArrowLeft, Sms } from "iconsax-react-native";
import colorApp from "../../contansts/colorApp";
import sizeApp from "../../contansts/sizeApp";

const ForgotPasswordScreen = ({navigation,route}:any) => {
    const [email, setEmail] = useState("");
    const handleSend = () =>{};
  return (
    <ContainerComponent isImageBackground isScroll={false}>
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
          marginTop: 10,
        }}
      >
        <TextComponent
          text="Reset Password"
          color={colorApp.text}
          numberOfLines={1}
          size={24}
          flex={0}
          styles={{ fontWeight: "bold" }}
        />
      </View>
      <View style={{
        paddingHorizontal:20,
        marginTop: 20,
      }}>
        <TextComponent 
        styles={{width:sizeApp.sizes.WIDTH * 0.6}}
        text="Please enter your email address to request a password reset"/>
      </View>

      <View style={{
        paddingHorizontal:20,
        marginTop: 20,
      }}>
      <InputComponent
          value={email}
          placeholder="Nhan@iuh.com"
          onChangeText={(text) => setEmail(text)}
          isPassword={false}
          allowClear={true}
          affix={<Sms size={22} color={colorApp.text} />}
        />
      </View>
      
      <View
        style={{
          marginTop: 20,
        }}
      >
        <ButtonComponent
          type="primary"
          text="Send"
          styles={{ width: sizeApp.sizes.WIDTH * 0.7 }}
          onPress={handleSend}
        />
      </View>
    </ContainerComponent>
  );
};

export default ForgotPasswordScreen;
