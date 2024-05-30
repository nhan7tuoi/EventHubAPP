import { StyleSheet } from "react-native";
import colorApp from "../contansts/colorApp";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorApp.white,
  },
  text: {
    fontSize: 14,
    color: colorApp.text,
  },
  button: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorApp.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
});
