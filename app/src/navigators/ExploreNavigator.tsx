import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreScreen, HomeScreen, MapScreen, SearchEvents } from "../screens";


const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name= "HomeScreen" component= {HomeScreen} />
        <Stack.Screen name= "ExploreScreen" component= {ExploreScreen} />
        <Stack.Screen name= "SearchEvents" component= {SearchEvents} />
        </Stack.Navigator>
    );
    };

export default ExploreNavigator;