import React, { ReactNode } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreNavigator from "./ExploreNavigator";
import EventNavigator from "./EventNavigator";
import MapNavigator from "./MapNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { AddNewScreen } from "../screens";
import colorApp from "../contansts/colorApp";
import { CircleComponent, TextComponent } from "../components";
import { Platform, View } from "react-native";
import MateriaIcons from "react-native-vector-icons/MaterialIcons";
import { Add, AddSquare, Calendar, Location } from "iconsax-react-native";
import { globalStyles } from "../styles/globalStyles";
import DrawerNavigator from "./DrawerNavigator";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 90 : 70,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colorApp.white,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let icon: ReactNode;
          color = focused
            ? route.name == "Add"
              ? colorApp.white
              : colorApp.primary
            : "#d9d9d9";
          size = focused ? 32 : 32;
          switch (route.name) {
            case "Explore":
              icon = <MateriaIcons name="explore" size={size} color={color} />;
              break;
            case "Events":
              icon = <Calendar size={size} color={color} variant="Bold" />;
              break;
            case "Add":
              icon = (
                <CircleComponent
                  size={70}
                  color={colorApp.primary}
                  styles={[
                    {
                      marginTop: Platform.OS === "ios" ? -50 : -60,
                    },
                    globalStyles.shadow,
                  ]}
                >
                  <AddSquare size={size} color={color} variant="Bold" />
                </CircleComponent>
              );
              break;
            case "Map":
              icon = <Location size={size} color={color} variant="Bold" />;
              break;
            case "Profile":
              icon = <MateriaIcons name="person" size={size} color={color} />;
              break;
          }
          return icon;
        },
        tabBarLabelStyle: {
          marginTop: 8,
        },
        tabBarLabel({ focused }) {
          return route.name == "Add" ? null : (
            <TextComponent
              text={route.name}
              size={12}
              color={focused ? colorApp.primary : colorApp.gray}
              styles={{
                marginBottom: Platform.OS === "ios" ? 0 : 8,
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Explore" component={ExploreNavigator} />
      <Tab.Screen name="Events" component={EventNavigator} />
      <Tab.Screen name="Add" component={AddNewScreen} />
      <Tab.Screen name="Map" component={MapNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
