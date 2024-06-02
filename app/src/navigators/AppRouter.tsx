import React, { useEffect, useState } from "react";
import SplashScreen from "../screens/SplashScreen";
import AuthNavigator from "./AuthNavigator";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import TabNavigator from "./TabNavigator";
import DrawerNavigator from "./DrawerNavigator";

const AppRouter = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const { getItem } = useAsyncStorage("accsessToken");
  const accessToken = useSelector((state: any) => state.auth.accessToken);
  const auth = useSelector((state: any) => state.auth);
  console.log("accessToken", auth);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);
  }, []);

  const checkLogin = async () => {
    const token = await getItem();
    if (token) {
      setIsShowSplash(false);
    } else {
      setIsShowSplash(false);
    }
  };

  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : accessToken ? (
        <DrawerNavigator />
      ) : (
        <AuthNavigator />
      )}
    </>
  );
};

export default AppRouter;
