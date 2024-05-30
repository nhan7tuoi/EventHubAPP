import React from "react";
import {Image, Pressable, Text, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import Swiper from 'react-native-swiper';
import sizeApp from "../../contansts/sizeApp";
import colorApp from "../../contansts/colorApp";


const OnboardingScreen = ({navigation}:any) => {
    const [index, setIndex] = React.useState(0);

  return (
    <View style={[globalStyles.container]}>
        <Swiper
        index={index}
        loop={false}
        activeDotColor={colorApp.white}
        onIndexChanged={(index) => setIndex(index)}
        >
            <Image 
            source={require("../../assets/images/onboarding-1.png")}
            style={{
                flex: 1,
                width:sizeApp.sizes.WIDTH,
                height:sizeApp.sizes.HEIGHT
            }}
            resizeMode="cover"
            />
            <Image 
            source={require("../../assets/images/onboarding-2.png")}
            style={{
                flex: 1,
                width:sizeApp.sizes.WIDTH,
                height:sizeApp.sizes.HEIGHT
            }}
            resizeMode="cover"
            />
            <Image 
            source={require("../../assets/images/onboarding-3.png")}
            style={{
                flex: 1,
                width:sizeApp.sizes.WIDTH,
                height:sizeApp.sizes.HEIGHT
            }}
            resizeMode="cover"
            />
        </Swiper>
        <View style={{
            position: 'absolute',
            bottom: 5,
            left: 0,
            right: 0,
            paddingHorizontal:40,
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Pressable onPress={
                ()=>{
                    navigation.navigate('LoginScreen');
                }
            }>
                <Text style={{
                    fontSize: 16,
                    color: colorApp.white,
                }}>Skip</Text>
            </Pressable>
            <Pressable onPress={
                ()=>{
                    if(index < 2){
                        setIndex(index + 1);
                    }else{
                        navigation.navigate('LoginScreen');
                    }
                }
            }>
                <Text style={{
                    fontSize: 16,
                    color: colorApp.white,
                }}>Next</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default OnboardingScreen;
