import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import {useNavigation} from '@react-navigation/native'

export default function ResultList({title, results}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({item})=>{
          return(
            <TouchableOpacity onPress={()=>navigation.navigate("ResultsShow",{id: item.id})}>
              <ResultDetail result={item}/>
            </TouchableOpacity>
          )
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom:15,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginLeft:15,
  }
})