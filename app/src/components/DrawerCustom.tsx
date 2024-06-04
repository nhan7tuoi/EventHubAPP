import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import ButtonComponent from "./ButtonComponent";
import TextComponent from "./TextComponent";
import { globalStyles } from "../styles/globalStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-native";
import colorApp from "../contansts/colorApp";
import { Bookmark2, Calendar, Logout, Message2, MessageQuestion, Setting2, Signpost, Sms, User } from "iconsax-react-native";
import { clearUser } from "../redux/reducers/authReducer";

interface Props {}

const DrawerCustom = ({ navigation }: any) => {
  const user = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const size = 24;
  const color = colorApp.gray;
  const profileMenu = [
    {
      key: "1",
      screen: "Profile",
      title: "My Profile",
      icon: <User size={size} color={color} />,
    },
    {
      key: "2",
      screen: "Message",
      title: "Massage",
      icon: <Message2 size={size} color={color} />,
    },
    {
      key: "3",
      screen: "Calendar",
      title: "Calendar",
      icon: <Calendar size={size} color={color} />,
    },
    {
      key: "4",
      screen: "Bookmark",
      title: "Bookmark",
      icon: <Bookmark2 size={size} color={color} />,
    },
    {
      key: "5",
      screen: "ContactUs",
      title: "Contact Us",
      icon: <Sms size={size} color={color} />,
    },
    {
      key: "6",
      screen: "Settings",
      title: "Settings",
      icon: <Setting2 size={size} color={color} />,
    },
    {
      key: "7",
      screen: "Helps",
      title: "Helps & FAQs",
      icon: <MessageQuestion size={size} color={color} />,
    },
    {
      key: "8",
      title: "Sign Out",
      icon: <Logout size={size} color={color} />,
    },
  ];

  const handleLogout = () => {
    dispatch(clearUser())
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Profile", {
            screen: "ProfileScreen",
          });
        }}
      >
        {user.image ? (
          <Image
            source={{ uri: user.image }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        ) : (
          <MaterialCommunityIcons
            name="account-circle"
            size={80}
            color="#00F8FF"
          />
        )}
        <TextComponent
          text={user.fullName}
          size={20}
          color={colorApp.text}
          styles={{ fontWeight: "bold" }}
        />
      </Pressable>

      <FlatList
      showsVerticalScrollIndicator={false}
      data={profileMenu}
      style={{flex: 1,marginVertical:20}}
      renderItem={({item,index}) => (
        <Pressable style={styles.listItem} 
        onPress={()=>{
          (index === 7) ? handleLogout() : navigation.navigate(item.title);
        }}
        >
          {item.icon}
          <TextComponent text={item.title} size={20} color={colorApp.text} styles={{marginLeft:10}}/>
        </Pressable>
      )}
      />

      <View>
        <Pressable
          style={[
            globalStyles.button,
            { backgroundColor: "#00F8FF33", width: 200 },
          ]}
        >
          <MaterialCommunityIcons name="crown" size={24} color="#00F8FF" />
          <TextComponent text="Upgrade Pro" size={20} color="#00F8FF" />
        </Pressable>
      </View>
    </View>
  );
};

export default DrawerCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
});
