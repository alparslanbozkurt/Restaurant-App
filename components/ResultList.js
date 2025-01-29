import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';

export default function ResultList({title, results}) {
    console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({item})=>{
          return(
            <TouchableOpacity>
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