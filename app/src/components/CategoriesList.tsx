import React, { ReactNode } from "react";
import { FlatList, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import colorApp from "../contansts/colorApp";
import TagComponent from "./TagComponent";

interface Props {
  isFill?: boolean;
}
interface Category {
  icon: ReactNode;
  color: string;
  label: string;
  key: string;
}

const CategoriesList = (props: Props) => {
  const { isFill } = props;
  const categories: Category[] = [
    {
      key: "sports",
      label: "Sports",
      icon: (
        <FontAwesome5
          name="basketball-ball"
          size={20}
          color={isFill ? colorApp.white : "#F0635A"}
        />
      ),
      color: "#F0635A",
    },
    {
      key: "music",
      label: "Music",
      icon: (
        <FontAwesome5
          name="music"
          size={20}
          color={isFill ? colorApp.white : "#F59762"}
        />
      ),
      color: "#F59762",
    },
    {
      key:'food',
      label: 'Food',
      icon: (
        <FontAwesome5
          name="hamburger"
          size={20}
          color={isFill ? colorApp.white : "#29D697"}
        />
      ),
      color: "#29D697",
    },
    {
      key: "art",
      label: "Art",
      icon: (
        <FontAwesome5
          name="paint-brush"
          size={20}
          color={isFill ? colorApp.white : "#46CDFB"}
        />
      ),
      color: "#46CDFB",
    },{
      key: "tech",
      label: "Tech",
      icon: (
        <FontAwesome5
          name="laptop"
          size={20}
          color={isFill ? colorApp.white : "#FFC542"}
        />
      ),
      color: "#FFC542",
    }
  ];

  return (
    <FlatList
    showsHorizontalScrollIndicator={false}
      style={{ paddingHorizontal:16}}
      data={categories}
      horizontal
      renderItem={({ item,index }) => (
        <TagComponent
          styles={{
            marginRight: index === categories.length - 1 ? 26 : 10,
            minWidth: 80,
          }}
          onPress={() => {}}
          label={item.label}
          icon={item.icon}
          backgroundColor={item.color}
          textColor={isFill ? colorApp.white : item.color}
        />
      )}
    />
  );
};

export default CategoriesList;
