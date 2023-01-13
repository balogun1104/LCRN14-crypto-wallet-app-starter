import { View, Text, Image } from "react-native";
import { FONTS, COLORS } from "../constants";
import React from "react";

const TabIcons = ({ focused, icon, iconStyle, lable, isTrade }) => {
  if (isTrade) {
    return (
      <View>
        <Text style={{ color: COLORS.white }}>Trade</Text>
      </View>
    );
  } else {
    return <View
    style={{
        alignItems: 'center', justifyContent: 'center'
    }}
    >
        <Image 
        source={icon}
        resizeMode= 'contain'
        style={{
            height: 25,
            width: 25,
            tintColor: focused ? COLORS.white : COLORS.secondary,
            ...iconStyle
        }}
        />
    </View>;
  }
  //   return (
  //     <View>
  //         <Text>Tab</Text>
  //     </View>
  //   )
};

export default TabIcons;
