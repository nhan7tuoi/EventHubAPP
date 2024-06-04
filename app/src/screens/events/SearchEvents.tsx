import React from 'react'
import { Text, View } from 'react-native'

const SearchEvents = ({navigation,route}:any) => {
    const {isFilter}:{isFilter:boolean} = route.params;
  return (
    <View>
      <Text> home </Text>
    </View>
  )
}

export default SearchEvents;