import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';


export default function SearchBar() {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={28} color="black" />
      <TextInput style={styles.inputStyle} placeholder='Ara' autoCapitalize='none' autoCorrect={false}/>
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:"lightgrey",
        flexDirection:'row',
        alignItems:'center',
        height:40,
        margin:8,
        borderRadius:24,
    },

    iconStyle:{
        marginHorizontal:15,
    },

    inputStyle:{
        flex:1, //kalan yeri olduğu gibi kaplamayı sağlar
        fontSize:17,
    },
})