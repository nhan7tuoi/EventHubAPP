import React, { ReactNode } from 'react'
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import { globalStyles } from '../styles/globalStyles';
import colorApp from '../contansts/colorApp';
import TextComponent from './TextComponent';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  textFont?: string;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  disable?: boolean;
}

const ButtonComponent = (props:Props) => {
  const {icon, text, type, color, styles, textColor, textStyles, textFont, onPress, iconFlex, disable} = props;
  return type === 'primary' ? (
    <View style={{alignItems: 'center'}}>
      <Pressable
        disabled={disable}
        onPress={onPress}
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: color
              ? color
              : disable
              ? colorApp.gray4
              : colorApp.primary,
            marginBottom: 17,
            width: '90%',
          },
          styles,
        ]}>
        {icon && iconFlex === 'left' && icon}
        <TextComponent
          text={text}
          color={textColor ?? colorApp.white}
          styles={[
            textStyles,
            {
              marginLeft: icon ? 12 : 0,
              fontSize: 16,
              textAlign: 'center',
            },
          ]}
          flex={icon && iconFlex === 'right' ? 1 : 0}
          
        />
        {icon && iconFlex === 'right' && icon}
      </Pressable>
    </View>
  ) : (
    <Pressable onPress={onPress}>
      <TextComponent
        styles={styles}
        flex={0}
        text={text}
        color={type === 'link' ? colorApp.primary : colorApp.text}
      />
    </Pressable>
  );
}

export default ButtonComponent;
