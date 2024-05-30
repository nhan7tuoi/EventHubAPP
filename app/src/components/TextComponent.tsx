import React from 'react'
import { Platform, StyleProp, Text, TextStyle, View } from 'react-native'
import colorApp from '../contansts/colorApp';


interface Props {
    text:string,
    color?:string,
    size?:number,
    flex?:number,
    styles:StyleProp<TextStyle>,
    numberOfLines?:number,
}

const TextComponent = (props:Props) => {
    const {text, color, size, flex, styles, numberOfLines} = props;
    const fontSizeDefault = Platform.OS === 'ios' ? 16 : 14;
  return (
    <Text 
    numberOfLines={numberOfLines}
    style={[{
        color: color ?? colorApp.text,
        fontSize: size ? size : fontSizeDefault,
        flex: flex ?? 0,
    }, styles]}

    >
        {text}
    </Text>
  )
}

export default TextComponent;
