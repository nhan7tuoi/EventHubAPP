import React, { useEffect, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { ButtonComponent, ContainerComponent, TextComponent } from "../../components";
import { ArrowLeft } from "iconsax-react-native";
import colorApp from "../../contansts/colorApp";
import sizeApp from "../../contansts/sizeApp";

const VerificationScreen = ({navigation,route}:any) => {
  // const {code,email} = route?.params;
  const email = "";
  const [codeValues, setCodeValues] = useState<string[]>([]);
  const [limit, setLimit] = useState(60);
  const code1 = useRef<any>();
  const code2 = useRef<any>();
  const code3 = useRef<any>();
  const code4 = useRef<any>();

  const handleCodeValues = (text:string,index:number) => {
    const data = [...codeValues];
    data[index] = text;
    setCodeValues(data);
  }

  useEffect(() => {
    if (limit > 0) {
      const interval = setInterval(() => {
        setLimit(limit => limit - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [limit]);

  const handleVerifyCode = () => {};
  const handleResendVerification = () => {};
  return (
    <ContainerComponent isImageBackground isScroll={false}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("RegisterScreen")}
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
          text="Verification"
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
        text="We’ve send you the verification"/>
        <TextComponent text={`code on ${email}`}/>
      </View>
      
      <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
      }}>
        <TextInput
        keyboardType="number-pad"
        style={{width:55,height:55,borderWidth:1,borderColor:colorApp.gray3,marginTop:20,marginHorizontal:20,fontSize:24,textAlign:'center',borderRadius:15}}
        value={codeValues[0]}
        ref={code1}
        onChangeText={text =>{
          text.length > 0 && code2.current.focus();
          handleCodeValues(text,0);
        }}
        />
        <TextInput
        keyboardType="number-pad"
        style={{width:55,height:55,borderWidth:1,borderColor:colorApp.gray3,marginTop:20,marginHorizontal:20,fontSize:24,textAlign:'center',borderRadius:15}}
        value={codeValues[1]}
        ref={code2}
        onChangeText={text =>{
          text.length > 0 && code3.current.focus();
          handleCodeValues(text,1);
        }}
        />
        <TextInput
        keyboardType="number-pad"
        style={{width:55,height:55,borderWidth:1,borderColor:colorApp.gray3,marginTop:20,marginHorizontal:20,fontSize:24,textAlign:'center',borderRadius:15}}
        value={codeValues[2]}
        ref={code3}
        onChangeText={text =>{
          text.length > 0 && code4.current.focus();
          handleCodeValues(text,2);
        }}
        />
        <TextInput
        keyboardType="number-pad"
        style={{width:55,height:55,borderWidth:1,borderColor:colorApp.gray3,marginTop:20,marginHorizontal:20,fontSize:24,textAlign:'center',borderRadius:15}}
        value={codeValues[3]}
        ref={code4}
        onChangeText={text =>{
          handleCodeValues(text,3);
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
          text="Continue"
          styles={{ width: sizeApp.sizes.WIDTH * 0.7 }}
          onPress={handleVerifyCode}
        />
      </View>

      <View style={{
        paddingHorizontal:20,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      }}>
        {limit > 0 ? (
          <View style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
          }} >
            <TextComponent text="Re-send code in  " flex={0} />
            <TextComponent
              text={`${(limit - (limit % 60)) / 60}:${
                limit - (limit - (limit % 60))
              }`}
              flex={0}
              color={colorApp.primary}
            />
          </View>
        ) : (
          <View>
            <ButtonComponent
              type="link"
              text="Resend email verification"
              onPress={handleResendVerification}
            />
          </View>
        )}
      </View>


    </ContainerComponent>
  );
};

export default VerificationScreen;
