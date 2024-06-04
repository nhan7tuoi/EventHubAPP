import React from "react";
import { ImageBackground, Text, View } from "react-native";
import CardComponent from "./CardComponent";
import TextComponent from "./TextComponent";
import sizeApp from "../contansts/sizeApp";
import { EventModel } from "../models/EventModel";
import AvatarGroup from "./AvatarGroup";
import { Bookmark2, Location } from "iconsax-react-native";
import colorApp from "../contansts/colorApp";
import { globalStyles } from "../styles/globalStyles";
import MateriaIcons from "react-native-vector-icons/MaterialIcons";

interface Props {
  item: EventModel;
  type: "card" | "list";
}

const EventItem = (props: Props) => {
  const { item, type } = props;
  return (
    <CardComponent
      isShadow
      styles={{ width: sizeApp.sizes.WIDTH * 0.6 }}
    >
      <ImageBackground
        source={require("../assets/images/event-image.png")}
        style={{ flex: 1, marginBottom: 12, height: 130 }}
        imageStyle={{
          borderRadius: 12,
          padding: 10,
          resizeMode: "cover",
        }}
      >
        <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
          <CardComponent
            onPress={() => {}}
            styles={[globalStyles.miniCard]}
          >
            <TextComponent text="10" size={12} color="#F06352" styles={{fontWeight:'bold',marginHorizontal:-2}} />
            <TextComponent text="JUNE" size={8} color="#F06352" styles={{fontWeight:'bold',marginHorizontal:-5}} />
          </CardComponent>
          <CardComponent styles={[globalStyles.miniCard]}>
            <MateriaIcons style={{marginHorizontal:-5,marginVertical:-5}}  name='bookmark' size={22} color={colorApp.danger}/>
          </CardComponent>
        </View>
      </ImageBackground>
      <TextComponent
        numberOfLines={1}
        text={item.title}
        size={18}
        styles={{ fontWeight: "bold" }}
      />
      <AvatarGroup />
      <View style={{ flexDirection: "row" }}>
        <Location size={20} color={colorApp.gray} variant="Bold" />
        <TextComponent numberOfLines={1} text={item.location.address} />
      </View>
    </CardComponent>
  );
};

export default EventItem;
