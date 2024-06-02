import AppRouter from "./src/navigators/AppRouter";
import React from "react";
import { Provider } from "react-redux";
import store from "../app/src/redux/store";
import { NavigationContainer } from "@react-navigation/native";

export default function Index() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <AppRouter />
      </NavigationContainer>
    </Provider>
  );
}
