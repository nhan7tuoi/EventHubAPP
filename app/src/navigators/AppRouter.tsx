import React, { useEffect, useState } from "react";
import SplashScreen from "../screens/SplashScreen";
import AuthNavigator from "./AuthNavigator";

const AppRouter = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);
  }, []);

  return <>{isShowSplash ? <SplashScreen /> : <AuthNavigator />}</>;
};

export default AppRouter;
