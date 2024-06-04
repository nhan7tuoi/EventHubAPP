import React from "react";
import {
  FlatList,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import colorApp from "../../contansts/colorApp";
import {
  ArrowDown,
  HambergerMenu,
  Notification,
  SearchNormal1,
  Sort,
} from "iconsax-react-native";
import {
  CardComponent,
  CategoriesList,
  CircleComponent,
  EventItem,
  TabBarComponent,
  TagComponent,
  TextComponent,
} from "../../components";
import MateriaIcons from "react-native-vector-icons/MaterialIcons";
import sizeApp from "../../contansts/sizeApp";

const HomeScreen = ({ navigation }: any) => {
  const itemEvent = {
    title: "International Band Music Concert",
    description: "Enjoy the music of the world with the best band in the world",
    location: {
      title: "Ho Chi Minh City",
      address: "Go Vap, HCM",
    },
    users: [""],
    authorId: "",
    startDate: Date.now(),
    endDate: Date.now(),
    date: Date.now(),
    image: "",
  };
  return (
    <View style={[globalStyles.container]}>
      {/* <StatusBar barStyle={'light-content'}/> */}
      <View
        style={{
          backgroundColor: colorApp.primary,
          height: 168,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          paddingTop: 16,
          // paddingHorizontal: 16,
        }}
      >
        <View style={{ paddingHorizontal: 16 }}>
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
          <View style={{ marginVertical: 15 }} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Pressable
              onPress={() =>
                navigation.navigate("SearchEvents", {
                  isFillter: false,
                })
              }
              style={{ flexDirection: "row", marginTop: 5 }}
            >
              <SearchNormal1
                variant="TwoTone"
                size={20}
                color={colorApp.white}
              />
              <View
                style={{
                  backgroundColor: colorApp.white,
                  width: 1,
                  height: 20,
                  marginHorizontal: 10,
                }}
              />
              <TextComponent
                styles={{ fontSize: 18 }}
                text="Search..."
                color={colorApp.gray2}
              />
            </Pressable>
            <TagComponent
              onPress={() => {
                navigation.navigate("SearchEvents", {
                  isFillter: true,
                });
              }}
              label="Fillters"
              sizeText={14}
              icon={
                <CircleComponent size={20}>
                  <Sort size={16} color={colorApp.white} />
                </CircleComponent>
              }
              backgroundColor={"#524CE0"}
            ></TagComponent>
          </View>
          <View style={{ marginVertical: 14 }} />
        </View>
        <View>
          <CategoriesList isFill={true} />
        </View>
      </View>

      <View style={{ height: 20 }}></View>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
        }}
      >
        <TabBarComponent title="Up Comming Events" onPress={() => {}} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Array.from({ length: 10 })}
          renderItem={({ item, index }) => {
            return <EventItem type="card" item={itemEvent} />;
          }}
        />

        

        <TabBarComponent title="NearBy You" onPress={() => {}} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Array.from({ length: 10 })}
          renderItem={({ item, index }) => {
            return <EventItem type="card" item={itemEvent} />;
          }}
        />
        {/* <View style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
        }}>
          <ImageBackground
            style={{ width:sizeApp.sizes.WIDTH*1, height: 127,padding:16,alignSelf:'center'
            }}
            source={require("../../assets/images/invite-image.png")}
            imageStyle={{
              resizeMode: "contain",
              borderRadius: 20,
            }}
          >
            <TextComponent
              text="Invite Friends"
              color={colorApp.white}
              styles={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}
            />
          </ImageBackground>
        </View> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
