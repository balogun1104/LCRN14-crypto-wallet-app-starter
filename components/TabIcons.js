import { View, Text, Image } from 'react-native'
import {FONTS, COLORS} from '../constants'
import React from 'react'

const TabIcons = ({ focused, icon, iconStyle, lable, isTrade}) => {
    if (isTrade) {
        return (
        <View>
        <Text style={{color:COLORS.white}}>Trade</Text>
    </View>
        )
    } else {
        return (
        <View>
        <Text style={{color:COLORS.white}}>Tab</Text>
    </View>
        )
    }
//   return (
//     <View>
//         <Text>Tab</Text>
//     </View>
//   )
}

export default TabIcons