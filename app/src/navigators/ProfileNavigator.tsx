import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {  ProfileScreen } from "../screens";


const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
        <Stack.Screen name= "ProfileScreen" component= {ProfileScreen} />
        </Stack.Navigator>
    );
    };

export default ProfileNavigator;