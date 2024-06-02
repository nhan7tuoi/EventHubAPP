import React from "react";
import { Platform, Pressable, StatusBar, Text, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import colorApp from "../../contansts/colorApp";
import { ArrowDown, HambergerMenu, Notification } from "iconsax-react-native";
import { CircleComponent, TextComponent } from "../../components";
import MateriaIcons from "react-native-vector-icons/MaterialIcons";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={[globalStyles.container]}>
      {/* <StatusBar barStyle={'light-content'}/> */}
      <View
        style={{
          backgroundColor: colorApp.primary,
          height: 180,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => navigation.openDrawer()}>
            <HambergerMenu size={30} color={colorApp.white} />
          </Pressable>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TextComponent text="Current Location" color={colorApp.gray2} />
              <MateriaIcons
                name="arrow-drop-down"
                size={20}
                color={colorApp.gray2}
              />
            </View>
            <TextComponent
              text="Go Vap, HCM"
              color={colorApp.white}
              styles={{ alignSelf: "center", fontWeight: "bold" }}
            />
          </View>
          <CircleComponent color="#524CE0" size={36}>
            <View>
              <Notification size={22} color={colorApp.white} />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "red",
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </View>
          </CircleComponent>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
