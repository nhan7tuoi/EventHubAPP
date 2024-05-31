import React, { ReactNode } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  children: ReactNode;
}

const ContainerComponent = (props: Props) => {
  const { isImageBackground, isScroll, children } = props;
  const container = isScroll ? (
    <ScrollView style={{flex:1}}>{children}</ScrollView>
  ) : (
    <View style={{flex:1}}>{children}</View>
  );

  return isImageBackground ? (
    <ImageBackground 
    source={require('../assets/images/background-splash.png')}
    style={{flex: 1}}
    imageStyle={{flex: 1}}
    >
        <SafeAreaView style={{flex:1}}>
            {container}
        </SafeAreaView>
        </ImageBackground>
  ) : (
    <SafeAreaView style={{flex:1}}>
      {container}
    </SafeAreaView>
  );
};

export default ContainerComponent;
