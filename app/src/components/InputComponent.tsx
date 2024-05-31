import React, { ReactNode, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { EyeSlash } from "iconsax-react-native";
import colorApp from "../contansts/colorApp";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { globalStyles } from "../styles/globalStyles";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  affix?: ReactNode;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: TextInputProps["keyboardType"];
}

const InputComponent = (props: Props) => {
  const {
    value,
    onChangeText,
    placeholder,
    affix,
    suffix,
    isPassword,
    allowClear,
    type,
  } = props;
  const [isShowPassword, setIsShowPassword] = useState(isPassword ?? false);

  return (
    <View style={[styles.inputContainer]}>
      {affix ?? affix}
      <TextInput
        style={[styles.input,globalStyles.text]}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeholder}
        secureTextEntry={isShowPassword}
        placeholderTextColor={colorApp.gray}
        keyboardType={type ?? "default"}
      />
      {suffix ?? suffix}

      <Pressable
        onPress={
          isPassword
            ? () => setIsShowPassword(!isShowPassword)
            : () => onChangeText("")
        }
      >
        {isPassword ? (
          <FontAwesome name={isShowPassword ? 'eye-slash' : 'eye'} size={22} color={colorApp.gray} />
        ) : (
          value.length > 0 && 
          allowClear &&(
            <AntDesign name="close" size={22} color={colorApp.gray} />
          )
        )}
      </Pressable>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colorApp.gray,
    width: "100%",
    minHeight: 56,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: colorApp.white,
    marginBottom: 20,
  },
  input: {
    padding: 0,
    flex: 1,
    margin: 0,
    paddingHorizontal: 14,
  },
});
